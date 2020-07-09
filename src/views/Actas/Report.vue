<template>
  <div>
 <hero-bar>
      Reporte de Actas por Mes y Decanato
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class='section is-main-section'>
            <div class='card-image'>
        <figure class='image is-2by1'>
          <img src='@/assets/remote-work-woman.svg' alt='Placeholder'/>
        </figure>
      </div>
      <div class="columns">
      <div class="column">
      <div class="container">
      <card-component title="Filtrar Actas por: " icon="ballot">
          <b-field label="Mes del Consejo" horizontal>
          <b-datepicker
            required
            type="month"
            placeholder="Clickee para seleccionar..."
            v-model="form.fecha"
             >
          </b-datepicker>
             </b-field>
             <hr>
          <b-field label="Decanato" horizontal>
            <b-select placeholder="Seleccione un Decanato" v-model="form.decanato" required>
              <option v-for="(decanato, index) in decanatos" :key="index" :value="decanato">
                {{ decanato }}
              </option>
            </b-select>
          </b-field>
      </card-component>
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                    Actas de Consejo de Decanato
                  </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <thead>
                          <tr>
                            <th>Código</th>
                            <th>Tipo</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                            <th>Decanato</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Ordinario</td>
                          <td>Con quórum</td>
                          <td>05/10/20</td>
                          <td>DCYT</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Extraordinario</td>
                            <td>Sesión Permanente</td>
                            <td>04/01/20</td>
                            <td>DEHA</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
          </div>
      </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>

import HeroBar from '@/components/HeroBar'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'Forms',
  components: {
    HeroBar, CardComponent
  },
  data () {
    const date = new Date()
    return {
      date: new Date(),
      decanatos: [
        'DCYT',
        'DEHA',
        'DCEE',
        'DCV',
        'DA',
        'DIC',
        'DCS'
      ],

      form: {
        decanato: null,
        fecha: date
      }

    }
  },
  computed: {

  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Consulta aquí detalladamente las Actas!',
      queue: false
    })
  },
  methods: {

  }
}
</script>
