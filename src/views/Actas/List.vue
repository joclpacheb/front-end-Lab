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
                        <tr>
                          <td>1</td>
                          <td>Ordinario</td>
                          <td>Con quórum</td>
                          <td>05/10/20</td>
                          <td>DCYT</td>
                          <td>
                              <a class="button is-small is-info mr-3">Editar</a>
                              <a class="button is-small is-danger">Eliminar</a>
                          </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Extraordinario</td>
                            <td>Sesión Permanente</td>
                            <td>04/01/</td>
                            <td>DEHA</td>
                            <td>
                                <a class="button is-small is-info mr-3">Editar</a>
                                <a class="button is-small is-danger">Eliminar</a>
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
// @ is an alias to /src

import HeroBar from '@/components/HeroBar'
export default {
  name: 'home',
  components: {
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
      message: '¡Aquí podrás consultar todas las Actas de Consejo!',
      queue: false
    })
  },
  methods: {
  }
}
</script>
