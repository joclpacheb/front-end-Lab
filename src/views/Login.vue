<template>
  <div>
    <navbar></navbar>
    <div class="container is-fullheight hero-body">
      <div class="columns is-centered">
        <div class="column is-6">
          <login-logo></login-logo>
          <h3 class="title has-text-centered has-text-dark">Inicia Sesión</h3>
          <h6 class="has-text-centered has-text-light">¡Ya estás aquí!</h6>
          <figure class='image is-medium'>
          <img src='../assets/wfh_8.svg' alt='Placeholder'/>
        </figure>
          <div class="box">
            <b-field label="Cédula">
              <b-input v-model="mail" type="email" placeholder="E-Mail"></b-input>
            </b-field>
            <b-field label="Contaseña">
              <b-input
                v-model="password"
                type="password"
                placeholder="Password"
                minlength="6"
                password-reveal
              ></b-input>
            </b-field>
            <b-field>
              <a
                class="password-remind-link has-text-dark is-pulled-right"
                @click="passwordReminder()"
              >Olvidé mi contraseña...</a>
            </b-field>
            <button class="button is-primary is-large is-fullwidth" @click="doLogin()">Login</button>
          </div>
          <div class="has-text-centered">
            <router-link to="/register">¡Me quiero Registrar!</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      mail: '',
      password: ''
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
    doLogin () {
      this.$router.push('/')
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
