<template>
  <div>
    <md-dialog :md-active.sync="$store.state.input.open">
      <md-dialog-title>Input</md-dialog-title>
      <form novalidate class="md-layout" @submit.prevent="validateInput">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('type')">
                  <label for="type">Type</label>
                  <md-select name="type" id="type" v-model="form.type" md-dense :disabled="sending">
                    <md-option></md-option>
                    <md-option value="Date">Date</md-option>
                    <md-option value="Email">Email</md-option>
                    <md-option value="Number">Number</md-option>
                    <md-option value="Password">Password</md-option>
                    <md-option value="Text">Text</md-option>
                    <md-option value="Time">Time</md-option>
                    <md-option value="Url">Url</md-option>
                  </md-select>
                  <span class="md-error">The input type is required</span>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('label')">
                  <label for="label">Label *</label>
                  <md-input name="label" id="label" autocomplete="given-name" v-model="form.label" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.label.required">The label is required</span>
                  <span class="md-error" v-else-if="!$v.form.label.minlength">Invalid label</span>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('placeholder')">
                  <label for="placeholder">Placeholder</label>
                  <md-input name="placeholder" id="placeholder" autocomplete="family-name" v-model="form.placeholder" :disabled="sending" />
                </md-field>
              </div>
            </div>
          </md-card-content>
          <md-progress-bar md-mode="indeterminate" v-if="sending" />
          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Add</md-button>
          </md-card-actions>
        </md-card>
        <md-snackbar :md-active.sync="inputSaved">The input {{ lastInput }} was saved with success!</md-snackbar>
      </form>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addInput()">Add</md-button>
        <md-button class="md-primary" @click="cancelInput()">Cancel</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'InputDialog',
    mixins: [validationMixin],
    data: () => ({
      form: {
        label: null,
        placeholder: null,
        type: null,
      },
      inputSaved: false,
      sending: false,
      lastInput: null
    }),
    validations: {
      form: {
        type: {
          required
        },
        label: {
          required,
          minLength: minLength(3)
        },
        placeholder: {
          minLength: minLength(3)
        }
      }
    },
    methods: {
      addInput () {
        console.log('foo')
        // this.$store.dispatch('cancelInput')
      },
      cancelInput () {
        this.$store.dispatch('cancelInput')
      },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.label = null
        this.form.placeholder = null
        this.form.type = null
      },
      saveInput () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastInput = `${this.form.label} ${this.form.placeholder}`
          this.inputSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateInput () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveInput()
        }
      }
    }
  }
</script>

<style scoped>
  .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  }

  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
