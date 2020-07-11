<template>
  <div>
    <hero-bar :has-right-visible='false'>
    ¿Qué Harás Hoy?
  <p class="buttons mr-4">
  <button class="button is-warning mt-3 mx-3"  @click="createA()">
    <span class="icon">
      <i class="fas fa-asterisk fa-spin fa-pulse"></i>
    </span>
    <span>Crear un Acta</span>
  </button>
  <button class="button is-success mt-3 mx-3" @click="listA()">
    <span class="icon">
      <i class="far fa-compass fa-spin fa-pulse" ></i>
    </span>
    <span>Consultar Actas</span>
  </button>
    <button class="button is-info mt-3 mx-3"  @click="reportA()">
    <span class="icon">
      <i class="fas fa-atom fa-spin fa-pulse"></i>
    </span>
    <span>Reporte de Actas</span>
  </button>
    <button v-if="rolUser" class="button is-success mt-3 mx-3"  @click="estatusE()">
    <span class="icon">
      <i class="fas fa-atom fa-spin fa-pulse"></i>
    </span>
      <span>Estados de actas</span>
    </button>
   <button v-if="rolUser" class="button is-warning mt-3 mx-3" @click="listD()">
    <span class="icon">
      <i class="fas fa-sun fa-spin fa-pulse"></i>
    </span>
    <span>Decanatos</span>
  </button>
   <button v-if="rolUser"  class="button is-success mt-3 mx-3" @click="listU()">
    <span class="icon">
      <i class="fas fa-stroopwafel fa-spin fa-pulse"></i>
    </span>
    <span>Usuarios</span>
  </button>
</p></hero-bar>
    <section class='section is-main-section'>
      <div class="columns">
      <div class="column">
        <card-widget
          class='tile is-child mb-3'
          type='is-primary'
          icon='note-text'
          :number='actas'
          label='Actas Registradas'
        />
        <card-widget
          class='tile is-child mt-3'
          type='is-info'
          icon='book-open-variant'
          :number='decanatos'
          label='Decanatos Registrados'
        />
          <card-widget
          class='tile is-child mt-3'
          type='is-primary'
          icon='account-box-multiple'
          :number='usuarios'
          label='Usuario Registrados'
        />
      </div>

      <div class="column">
      <div class='card-image'>
        <figure class='image'>
          <img src='../assets/wfh_5.svg' alt='Placeholder'/>
        </figure>
      </div>
</div>

    </div>
    </section>
  </div>
</template>

<script>

// @ is an alias to /src
import HeroBar from '@/components/HeroBar'
import CardWidget from '@/components/CardWidget'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',

  components: {

    CardWidget,
    HeroBar
  },
  data () {
    return {
      actas: null,
      decanatos: null,
      usuarios: null,
      rolUser: ''
    }
  },
  created () {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    this.rolUser = user.roles[0] === 'ROLE_ADMIN'
    this.fetchContadores()
    this.actas = parseInt(this.contadores.actas)
    this.decanatos = parseInt(this.contadores.decanatos)
    this.usuarios = parseInt(this.contadores.usuarios)
    console.log(this.contadores)
  },
  computed: {
    ...mapGetters('actas', ['contadores'])
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Estamos felices de que estés de vuelta!',
      queue: false
    })
  },
  methods: {
    ...mapActions('actas', ['fetchContadores']),
    listA () {
      this.$router.push('/actas/list')
    },
    createA () {
      this.$router.push('/actas/create')
    },
    reportA () {
      this.$router.push('/actas/report')
    },
    listD () {
      this.$router.push('/decanatos')
    },
    listU () {
      this.$router.push('/usuarios')
    },
    estatusE () {
      this.$router.push('/actas/status')
    }
  }
}
</script>
