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
                              <a class="button is-small is-info mr-3" @click="modal = true">Editar</a>
                              <a class="button is-small is-danger mr-3" @click="deleteA">Eliminar</a>
                              <a class="button is-small is-warning mr-3" @click="download">Descargar PDF</a>
                          </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Extraordinario</td>
                            <td>Sesión Permanente</td>
                            <td>04/01/20</td>
                            <td>DEHA</td>
                            <td>
                                <a class="button is-small is-info mr-3" @click="modal = true">Editar</a>
                                <a class="button is-small is-danger mr-3" @click="deleteA">Eliminar</a>
                                <a class="button is-small is-warning mr-3" @click="download">Descargar PDF</a>
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
                    <p class="modal-card-title">Modificar Acta</p>
                </header>
                <section class="modal-card-body">
                   <form @submit.prevent="submit">
          <b-field label="Tipo de Sesión" horizontal>
            <b-select placeholder="Seleccione una opción" rounded required icon="account"  v-model="form.tipo">
                <option value="flint">Ordinaria</option>
                <option value="silver">Extraordinaria</option>
            </b-select>
          </b-field>
          <hr>
           <b-field label="Descripción" message="Describa el Acta según el Consejo y el Tipo de Sesión" horizontal>
            <b-input type="textarea" placeholder="Detalle aquí los datos del Acta..." v-model="form.descripcion" maxlength="255"/>
          </b-field>
          <hr>
                    <b-field label="Fecha del Consejo" horizontal>
          <b-datepicker
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

          <hr>
          <b-field label="Adjunte el PDF del Acta Original" horizontal>
          <file-picker v-model="customElementsForm.file" class="my-2"/>
          </b-field>
          <b-field horizontal>
            <b-field grouped>
            </b-field>
          </b-field>
        </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary" type="button" @click="modal=false">Cerrar</button>
                    <button class="button is-info"  @click="edit">Editar Acta</button>
                </footer>
            </div>
        </form>
        </b-modal>
    </section>
  </div>
</template>

<script>

import HeroBar from '@/components/HeroBar'
import FilePicker from '@/components/FilePicker'

export default {
  name: 'home',
  components: {
    HeroBar, FilePicker
  },
  data () {
    const today = new Date()
    return {
      date: new Date(),
      modal: false,
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      decanatos: [
        'DCYT',
        'DEHA',
        'DCEE',
        'DCV',
        'DA',
        'DIC',
        'DCS'
      ],
      customElementsForm: {
        file: null
      },
      form: {
        tipo: null,
        descripcion: null,
        decanato: null,
        fecha: today
      }
    }
  },
  computed: {

  },
  mounted () { // agregar parametro aqui y en la llamada al metodo en el boton
    this.$buefy.snackbar.open({
      message: '¡Aquí podrás consultar todas las Actas de Consejo!',
      queue: false
    })
  },
  methods: {
    edit () {
      this.$buefy.snackbar.open({
        message: '¡Se modificó el Acta exitosamente!',
        queue: false
      })
    },
    download () {

    },
    deleteA () {
      this.$buefy.dialog.confirm({
        title: 'Eliminar Acta',
        message: '¿Estás de acuerdo en <b>eliminar</b> este Acta?',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$buefy.toast.open('Acta Eliminada!')
      })
    }
  }
}
</script>
