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
   <button class="button is-warning mt-3 mx-3" @click="listD()">
    <span class="icon">
      <i class="fas fa-sun fa-spin fa-pulse"></i>
    </span>
    <span>Decanatos</span>
  </button>
   <button class="button is-success mt-3 mx-3" @click="listU()">
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
          :number='512'
          label='Actas Registradas'
        />
        <card-widget
          class='tile is-child mt-3'
          type='is-info'
          icon='book-open-variant'
          :number='8'
          label='Decanatos Registrados'
        />
          <card-widget
          class='tile is-child mt-3'
          type='is-primary'
          icon='account-box-multiple'
          :number='20'
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

export default {
  name: 'home',
  components: {

    CardWidget,
    HeroBar
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Estamos felices de que estés de vuelta!',
      queue: false
    })
  },
  methods: {
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
    }
  }
}
</script>
