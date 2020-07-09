<template>
  <div>
 <hero-bar>
      Gestión de Decanatos
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class='section is-main-section'>
           <section class='section is-main-section'>
      <div class="columns">
     <div class="column">
      <div class='card-image'>
         <figure class='image'>
          <img src='@/assets/clip-education-1.png' alt='Placeholder'/>
        </figure>
      </div>
    </div>

    <div class="column">
     <card-component title="Registrar un Decanato Nuevo" icon="ballot">
      <form @submit.prevent="submit">
          <b-field label="Datos" horizontal>
              <b-input icon="account" v-model="form.name" placeholder="Nombre" name="Nombre del Decanato" required />
            </b-field>
      <b-field horizontal>
        <div class="control">
          <button type="submit" class="button is-primary" @click="submit" :class="{'is-loading':isLoading}">
            Registrar
          </button>
        </div>
         <div class="control">
             <b-button type="is-info is-outlined" @click="reset">Limpiar Campos</b-button>
          </div>
        </b-field>
        </form>
       </card-component>
    </div>

    </div>
    </section>
      <div class="columns">
      <div class="column">
      <div class="container">
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                    Decanatos Registrados
                  </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <thead>
                          <tr>
                            <th>Nombre</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td>DCYT</td>
                          <td>
                            <div class="field is-grouped">
                              <a class="button is-small is-info mr-3" @click="modal=true">Editar</a>
                              <a class="button is-small is-danger" @click="deleteD">Eliminar</a>
                              </div>
                          </td>
                        </tr>
                        <tr>
                          <td>DEHA</td>
                          <td>
                            <div class="field is-grouped">
                              <a class="button is-small is-info mr-3" @click="modal=true">Editar</a>
                              <a class="button is-small is-danger" @click="deleteD">Eliminar</a>
                              </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
          </div>
      </div>
      </div>
    </div>
         <b-modal :active.sync="modal" has-modal-card>
            <form action="">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modificar Decanato</p>
                </header>
                <section class="modal-card-body">
                   <form @submit.prevent="submit">
           <b-field label="Datos" horizontal>
              <b-input icon="account" v-model="form2.name" placeholder="Nombre" name="Nombre del Decanato" required />
            </b-field>
                  </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary" type="button" @click="modal=false">Cerrar</button>
                    <button class="button is-info"  @click="edit()">Editar Decanato</button>
                </footer>
            </div>
        </form>
        </b-modal>
    </section>
  </div>
</template>

<script>

import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
import mapValues from 'lodash/mapValues'

export default {
  name: 'home',
  components: {
    HeroBar, CardComponent
  },
  data () {
    return {
      modal: false,
      decanatos: [
      ],
      form: {
        name: null
      },
      form2: {
        name: null
      }
    }
  },
  computed: {

  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí puedes consultar y registrar Decanatos!',
      queue: false
    })
  },
  methods: {
    submit () {
      this.$buefy.snackbar.open({
        message: '¡Se registró el Decanato exitosamente!',
        queue: false
      })
    },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })
      this.$buefy.snackbar.open({
        message: '¡Campos Limpiados!',
        queue: false
      })
    },
    edit () {
      this.$buefy.snackbar.open({
        message: '¡Se modificó el Decanato exitosamente!',
        queue: false
      })
    },
    deleteD () {
      this.$buefy.dialog.confirm({
        title: 'Eliminar Decanato',
        message: '¿Estás de acuerdo en <b>eliminar</b> este Decanato?',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$buefy.toast.open('Decanato Eliminado!')
      })
    }
  }
}
</script>
