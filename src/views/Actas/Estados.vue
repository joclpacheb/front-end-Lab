<template>
  <div>
 <hero-bar>
      Gestión de Estados de Actas
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
          <img src='@/assets/clip-waiting.png' alt='Placeholder'/>
        </figure>
      </div>
    </div>

    <div class="column">
     <card-component title="Registrar un Estado Nuevo" icon="ballot">
      <form @submit.prevent="submit">
          <b-field label="Nombre" horizontal>
              <b-input icon="account" v-model="form.name" placeholder="Nombre" name="Nombre del Estado" required />
            </b-field>
      <b-field horizontal>
        <div class="control">
          <button type="submit" class="button is-primary" >
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
                    Estados Registrados
                  </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr v-for="estado in estados" :key="estado.codigo">
                          <td>{{estado.codigo}}</td>
                          <td>{{estado.nombre}}</td>
                          <td>
                            <div class="field is-grouped">
                              <a class="button is-small is-info mr-3" @click="editar(estado)">Editar</a>
                              <a class="button is-small is-danger" @click="deleteE(estado)">Eliminar</a>
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
                    <p class="modal-card-title">Modificar estado</p>
                </header>
                <section class="modal-card-body">
                   <form @submit.prevent="submit">
           <b-field label="Nombre" horizontal>
              <b-input icon="account" v-model="form2.name" placeholder="Nombre" name="Nombre del estado" required />
            </b-field>
                  </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary" type="button" @click="modal=false">Cerrar</button>
                    <button class="button is-info"  @click="edit()">Editar estado</button>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HeroBar, CardComponent
  },
  data () {
    return {
      modal: false,
      form: {
        name: null
      },
      form2: {
        codigo: null,
        name: null
      }
    }
  },
  computed: {
    ...mapGetters('estados', ['estados'])
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí puedes consultar y registrar estados!',
      queue: false
    })
    this.fetchActiveDecanatos()
  },
  methods: {
    ...mapActions('estados', ['fetchActiveEstados', 'deleteEstado', 'createEstado', 'saveEstado']),
    submit () {
      this.createEstado({
        nombre: this.form.name,
        estatus: 'A'
      })
      this.$buefy.snackbar.open({
        message: '¡Se registró el Estado exitosamente!',
        queue: false
      })
      this.fetchActiveEstados()
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
      this.saveEstado({
        codigo: this.form2.codigo,
        nombre: this.form2.name,
        estatus: 'A'
      })
      this.fetchActiveEstados()
      this.$buefy.snackbar.open({
        message: '¡Se modificó el Estado exitosamente!',
        queue: false
      })
    },
    deleteE (estado) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar Estado',
        message: '¿Estás de acuerdo en <b>eliminar</b> este Estado?',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.deleteDecanato(estado.codigo)
          this.$buefy.toast.open('Estado Eliminado!')
          this.fetchActiveDecanatos()
        }
      })
    },
    editar (estado) {
      this.modal = true
      this.form2.name = estado.nombre
      this.form2.codigo = estado.codigo
    }
  }
}
</script>
