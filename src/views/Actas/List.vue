<template>
  <div>
 <hero-bar>
      Lista de Actas
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class='section is-main-section'>
            <div class='card-image'>
        <figure class='image is-16by9'>
          <img src='@/assets/wfh_1.svg' alt='Placeholder'/>
        </figure>
      </div>
      <div class="columns">
      <div class="column">
      <div class="container">
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
                            <th>Acciones</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr v-for="acta in actas" :key="acta.codigo">
                          <td>{{acta.codigo}}</td>
                          <td>{{acta.tipo}}</td>
                          <td>{{acta.descripcion}}</td>
                          <td>{{acta.fecha}}</td>
                          <td>{{acta.decanato.nombre}}</td>
                          <td>
                              <a class="button is-small is-info mr-3">Editar</a>
                              <a class="button is-small is-danger " @click="deleteItem(acta)">Eliminar</a>
                          </td>
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
import { mapGetters, mapActions } from 'vuex'
// @ is an alias to /src

import HeroBar from '@/components/HeroBar'
export default {
  name: 'home',
  components: {
    HeroBar
  },
  data () {
    return {
      decanato: ['DCYT', 'DEHA', 'DCEE', 'DCV', 'DA', 'DIC', 'DCS']
    }
  },
  computed: {
    ...mapGetters('actas', ['actas'])
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí podrás consultar todas las Actas de Consejo!',
      queue: false
    })
    this.fetchActiveActas()
    // this.fetchActas()
  },
  methods: {
    ...mapActions('actas', ['fetchActiveActas', 'deleteActa', 'fetchActas']),

    async deleteItem (item) {
      await this.deleteActa(item.codigo)
      this.fetchActas()
    }
  }
}
</script>
