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
          <b-field label="Nombre" horizontal>
              <b-input icon="account" v-model="form.name" placeholder="Nombre" name="Nombre del Decanato" required />
            </b-field>
        <b-field label="Dirección" horizontal>
          <b-input icon="account" v-model="form.direccion" placeholder="Dirección" name="Nombre del Decanato" required />
        </b-field>
        <b-field label="Telefono" horizontal>
          <b-input icon="account" v-model="form.telefono" placeholder="Telefono" name="Nombre del Decanato" required />
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
                    Decanatos Registrados
                  </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr v-for="decanato in decanatos" :key="decanato.codigo">
                          <td>{{decanato.codigo}}</td>
                          <td>{{decanato.nombre}}</td>
                          <td>{{decanato.direccion}}</td>
                          <td>{{decanato.telefono}}</td>
                          <td>
                            <div class="field is-grouped">
                              <a class="button is-small is-info mr-3" @click="editar(decanato)">Editar</a>
                              <a class="button is-small is-danger" @click="deleteD(decanato)">Eliminar</a>
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
           <b-field label="Nombre" horizontal>
              <b-input icon="account" v-model="form2.name" placeholder="Nombre" name="Nombre del Decanato" required />
            </b-field>
           <b-field label="Datos" horizontal>
             <b-input icon="account" v-model="form2.direccion" placeholder="Direccion" name="Nombre del Decanato" required />
           </b-field>
           <b-field label="Datos" horizontal>
             <b-input icon="account" v-model="form2.telefono" placeholder="Telefono" name="Nombre del Decanato" required />
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
        name: null,
        direccion: null,
        telefono: null
      },
      form2: {
        codigo: null,
        name: null,
        direccion: null,
        telefono: null
      }
    }
  },
  computed: {
    ...mapGetters('decanatos', ['decanatos'])
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí puedes consultar y registrar Decanatos!',
      queue: false
    })
    this.fetchActiveDecanatos()
  },
  methods: {
    ...mapActions('decanatos', ['fetchActiveDecanatos', 'deleteDecanato', 'createDecanato', 'saveDecanato']),
    submit () {
      this.createDecanato({
        nombre: this.form.name,
        direccion: this.form.direccion,
        telefono: this.form.telefono,
        estatus: 'A'
      })
      this.$buefy.snackbar.open({
        message: '¡Se registró el Decanato exitosamente!',
        queue: false
      })
      this.fetchActiveDecanatos()
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
      this.saveDecanato({
        codigo: this.form2.codigo,
        nombre: this.form2.name,
        direccion: this.form2.direccion,
        telefono: this.form2.telefono,
        estatus: 'A'
      })
      this.fetchActiveDecanatos()
      this.$buefy.snackbar.open({
        message: '¡Se modificó el Decanato exitosamente!',
        queue: false
      })
    },
    deleteD (decanato) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar Decanato',
        message: '¿Estás de acuerdo en <b>eliminar</b> este Decanato?',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.deleteDecanato(decanato.codigo)
          this.$buefy.toast.open('Decanato Eliminado!')
          this.fetchActiveDecanatos()
        }
      })
    },
    editar (decanato) {
      this.modal = true
      this.form2.name = decanato.nombre
      this.form2.direccion = decanato.direccion
      this.form2.telefono = decanato.telefono
      this.form2.codigo = decanato.codigo
    }
  }
}
</script>
