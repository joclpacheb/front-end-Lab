<template>
  <card-component title="Editar Perfil" icon="account-circle">
   <form @submit.prevent="submit">
          <b-field label="Datos del Perfil" horizontal>
            <b-field>
              <b-input icon="account-box-outline" v-model="form.id" placeholder="Cédula" name="Cédula" required />
            </b-field>
            <b-field>
              <b-input icon="email" type="email" v-model="form.email" placeholder="E-mail" name="E-mail"/>
            </b-field>
          </b-field>
          <b-field label="Nombres" horizontal>
          <b-field>
              <b-input icon="account" v-model="form.name" placeholder="Nombre" name="Nombre" required />
            </b-field>
             <b-field>
              <b-input icon="account" v-model="form.secondname" placeholder="Apellido" name="Apellido" required />
            </b-field>
          </b-field>
          <b-field label="Teléfono" message="Ejemplo: 0424-4345062" horizontal>
            <b-field>
              <p class="control">
                <a class="button is-static">
                  +58
                </a>
              </p>
              <b-input type="tel" v-model="form.phone" name="phone" expanded />
            </b-field>
          </b-field>
          <b-field label="Decanato" horizontal>
            <b-select placeholder="Seleccione un Decanato" v-model="form.faculty" required>
              <option v-for="(decanato, index) in decanatos" :key="index" :value="decanato">
                {{ decanato }}
              </option>
            </b-select>
            </b-field>
            <b-field label="Tipo de Usuario" horizontal>
            <b-select placeholder="Seleccione una opción" rounded required icon="account"  v-model="form.type">
                <option value="flint">Administrador</option>
                <option value="silver">Secretario</option>
            </b-select>
          </b-field>
          <b-field horizontal label="Contraseña" message="Será utilizada por el usuario para Iniciar Sesión">
        <b-input name="password" type="password" v-model="form.password" required autocomplete="new-password"/>
      </b-field>
      <b-field horizontal label="Confirmar Contraseña" message="Escriba la Contraseña otra vez">
        <b-input name="password_confirmation" type="password" v-model="form.password_confirmation" required
                 autocomplete="new-password"/>
      </b-field>
      <hr>
      <b-field horizontal>
        <div class="control">
          <button type="submit" class="button is-primary" :class="{'is-loading':isLoading}">
            Editar Perfil
          </button>
        </div>
      </b-field>
        </form>
  </card-component>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'ProfileUpdateForm',
  components: {
    CardComponent

  },
  data () {
    return {
      isFileUploaded: false,
      isLoading: false,
      form: {
        id: null,
        name: null,
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
  computed: {
    ...mapState([
      'userId',
      'userName',
      'userSecondName',
      'userFaculty',
      'userType',
      'userPhone',
      'userEmail',
      'userPass',
      'userPass2'
    ])
  },
  mounted () {
    this.form.id = this.userId
    this.form.name = this.userEmail
    this.form.secondname = this.userSecondName
    this.form.faculty = this.userFaculty
    this.form.type = this.userFaculty
    this.form.phone = this.userPhone
    this.form.email = this.userEmail
    this.form.password = this.userPass
    this.form.password_confirmation = this.userPass2
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$store.commit('user', this.form)
        this.$buefy.snackbar.open({
          message: 'Usuario Actualizado',
          queue: false
        })
      }, 500)
    }
  },
  watch: {
    userId (newValue) {
      this.form.id = newValue
    },
    userName (newValue) {
      this.form.name = newValue
    },
    userType (newValue) {
      this.form.type = newValue
    },
    userEmail (newValue) {
      this.form.email = newValue
    },
    userSecondName (newValue) {
      this.form.secondname = newValue
    },
    userPhone (newValue) {
      this.form.phone = newValue
    },
    userFaculty (newValue) {
      this.form.faculty = newValue
    },
    userPass (newValue) {
      this.form.password = newValue
    }
  }
}
</script>
