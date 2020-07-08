<template>
  <div>
    <title-bar :title-stack='titleStack' />
    <hero-bar :has-right-visible='false'>
    ¿Qué Harás Hoy?
  <p class="buttons mr-4">
  <button class="button is-warning mt-3 mr-3">
    <span class="icon">
      <i class="fas fa-asterisk fa-spin fa-pulse"></i>
    </span>
    <span>Crear un Acta</span>
  </button>
  <button class="button is-success mt-3 mx-3">
    <span class="icon is-small">
      <i class="far fa-compass fa-spin fa-pulse"></i>
    </span>
    <span>Consultar Actas</span>
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
        <figure class='image is-4by3'>
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
import * as chartConfig from '@/components/Charts/chart.config'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import CardWidget from '@/components/CardWidget'

export default {
  name: 'home',
  components: {

    CardWidget,
    HeroBar,
    TitleBar
  },
  data () {
    return {
      defaultChart: {
        chartData: null,
        extraOptions: chartConfig.chartOptionsMain
      }
    }
  },
  computed: {
    titleStack () {
      return ['Inicio']
    }
  },
  mounted () {
    this.fillChartData()

    this.$buefy.snackbar.open({
      message: '¡Estamos felices de que estés de vuelta!',
      queue: false
    })
  },
  methods: {
    randomChartData (n) {
      const data = []

      for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 200))
      }

      return data
    },
    fillChartData () {
      this.defaultChart.chartData = {
        datasets: [
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          }
        ],
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
      }
    }
  }
}
</script>
