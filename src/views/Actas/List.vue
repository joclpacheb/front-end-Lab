<template>
  <div>
    <title-bar :title-stack='titleStack' />
    <hero-bar :has-right-visible='false'>
    Lista de Actas
</hero-bar>
    <section class='section is-main-section'>
      <div class="columns">
      <div class="column">
      <div class="container">
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                    A table in a card
                  </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <thead>
                          <tr>
                            <th><abbr>#</abbr></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Amanda</td>
                          <td>Holmes</td>
                          <td>Female</td>
                          <td>22</td>
                          <td>a.holmes@randatmail.com</td>
                          <td>
                              <a class="button is-small is-primary">View</a>
                              <a class="button is-small is-danger">Delete</a>
                          </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Amanda</td>
                            <td>Holmes</td>
                            <td>Female</td>
                            <td>22</td>
                            <td>a.holmes@randatmail.com</td>
                            <td>
                                <a class="button is-small is-primary">Small</a>
                                <a class="button is-small is-danger">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Amanda</td>
                            <td>Holmes</td>
                            <td>Female</td>
                            <td>22</td>
                            <td>a.holmes@randatmail.com</td>
                            <td>
                                <a class="button is-small is-primary">Small</a>
                                    <a class="button is-small is-danger">Delete</a>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
          </div>
      </div>
      </div>
      <div class="column">
      <div class='card-image'>
        <figure class='image is-4by3'>
          <img src='/src/assets/wfh_5.svg' alt='Placeholder'/>
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
export default {
  name: 'home',
  components: {
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
