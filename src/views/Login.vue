<template>
  <ValidationObserver ref="obs">
    <div>
      <!--<navbar></navbar>-->
      <div class="container is-fullheight hero-body">
        <div class="columns is-centered">
          <div class="column is-6">
            <!--<login-logo></login-logo>-->
            <h3 class="title has-text-centered has-text-dark">Inicia Sesión</h3>
            <h3 class="has-text-centered has-text-weight-light">¡Ya estás aquí!</h3>
            <figure class="image is-medium">
              <img src="../assets/wfh_8.svg" alt="Placeholder" />
            </figure>
            <div class="box">
              <form name="form" @submit.prevent="handleLogin">
                <b-field label="Cédula">
                  <b-input
                    v-model="user.username"
                    type="name"
                    placeholder="Cedula"
                    rules="required"
                  ></b-input>
                </b-field>

                <b-field label="Contraseña">
                  <b-input
                    label="Contraseña"
                    v-model="user.password"
                    type="password"
                    placeholder="Password"
                    minlength="6"
                    password-reveal
                    rules="required"
                  ></b-input>
                </b-field>

                <!-- <b-field>
              <a
                class="password-remind-link has-text-dark is-fullwidth"
                @click="passwordReminder()"
              >Olvidé mi contraseña...</a>
                </b-field>-->
                <button
                  button
                  class="button is-primary is-large is-fullwidth"
                  @click="handleLogin()"
                >Entrar al Sistema</button>
              </form>
            </div>
            <!--<div class="has-text-centered">
              <button
                class="button is-info is-large is-fullwidth is-outlined"
                @click="modal=true"
              >¡Me quiero Registrar!</button>
            </div>-->
          </div>
        </div>
      </div>
      <b-modal :active.sync="modal" has-modal-card>
        <form action>
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Crear Usuario</p>
            </header>
            <section class="modal-card-body">
              <form @submit.prevent="submit">
                <b-field label="Datos de Ingreso" horizontal>
                  <b-field>
                    <b-input
                      icon="account-box-outline"
                      v-model="form2.id"
                      placeholder="Cédula"
                      name="Cédula"
                      required
                    />
                  </b-field>
                  <b-field>
                    <b-input
                      icon="email"
                      type="email"
                      v-model="form2.email"
                      placeholder="E-mail"
                      name="E-mail"
                    />
                  </b-field>
                </b-field>
                <b-field label="Nombres" horizontal>
                  <b-field>
                    <b-input
                      icon="account"
                      v-model="form2.name"
                      placeholder="Nombre"
                      name="Nombre"
                      required
                    />
                  </b-field>
                  <b-field>
                    <b-input
                      icon="account"
                      v-model="form2.secondname"
                      placeholder="Apellido"
                      name="Apellido"
                      required
                    />
                  </b-field>
                </b-field>
                <b-field label="Teléfono" message="Ejemplo: 0424-4345062" horizontal>
                  <b-field>
                    <p class="control">
                      <a class="button is-static">+58</a>
                    </p>
                    <b-input type="tel" v-model="form2.phone" name="phone" expanded />
                  </b-field>
                </b-field>
                <!--<b-field label="Decanato" horizontal>
                  <b-select placeholder="Seleccione un Decanato" v-model="form2.faculty" required>
                    <option
                      v-for="(decanato, index) in decanatos"
                      :key="index"
                      :value="decanato"
                    >{{ decanato }}</option>
                  </b-select>
                </b-field>-->
                <b-field label="Tipo de Usuario" horizontal>
                  <b-select
                    placeholder="Seleccione una opción"
                    rounded
                    required
                    icon="account"
                    v-model="form2.type"
                  >
                    <option value="flint">Administrador</option>
                    <option value="silver">Secretario</option>
                  </b-select>
                </b-field>
                <b-field
                  horizontal
                  label="Contraseña"
                  message="Será utilizada por el usuario para Iniciar Sesión"
                >
                  <b-input
                    name="password"
                    type="password"
                    v-model="form2.password"
                    required
                    autocomplete="new-password"
                  />
                </b-field>
                <b-field
                  horizontal
                  label="Confirmar Contraseña"
                  message="Escriba la Contraseña otra vez"
                >
                  <b-input
                    name="password_confirmation"
                    type="password"
                    v-model="form2.password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </b-field>
              </form>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-primary" type="button" @click="modal=false">Cerrar</button>
             <!-- <button class="button is-info" @click="edit">Registrar Usuario</button>-->
            </footer>
          </div>
        </form>
      </b-modal>
    </div>
  </ValidationObserver>
</template>

<script>
import User from '../models/user'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'Login',
  data () {
    return {
      user: new User('', ''),
      mail: '',
      password: '',
      modal: false,
      form2: {
        id: null,
        name: '',
        secondname: null,
        faculty: null,
        type: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },

  components: {
    ValidationObserver
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },

  methods: {
    passwordReminder () {
      this.$modal.open({
        parent: this,
        hasModalCArd: true,
        props: {}
      })
    },
    handleLogin () {
      this.loading = true
      /* this.$validator.validateAll()
      if (this.errors.any()) {
        this.loading = false
        return
      } */
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/')
          },
          error => {
            this.loading = false
            this.message = error.message
          }
        )
      }
    }
  }
}
</script>

<style scoped>
.password-remind-link {
  margin-bottom: 10px;
}
.background-light {
  background-color: hsl(0, 0%, 96%);
}
</style>
