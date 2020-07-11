<template>
  <div>
 <hero-bar>
      Crear Acta de Consejo
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class='section is-main-section'>
            <div class='card-image'>
        <figure class='image is-2by1'>
          <img src='@/assets/remote-work-man.svg' alt='Placeholder'/>
        </figure>
      </div>
      <div class="columns">
      <div class="column">
      <div class="container">
 <card-component title="Datos del Acta de Consejo" icon="ballot">
        <form @submit.prevent="submit">
          <b-field label="Tipo de Sesión" horizontal>
            <b-select placeholder="Seleccione una opción" rounded required icon="account"  v-model="form.tipo">
                <option value="1">Ordinaria</option>
                <option value="2">Extraordinaria</option>
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
              <option v-for="decanato in decanatos" :key="decanato.codigo" :value="decanato">
                {{ decanato.nombre }}
              </option>
            </b-select>
          </b-field>
          <b-field label="Estado" horizontal>
            <b-select placeholder="Seleccione un Estado" v-model="form.estado" required>
              <option v-for="estado in estados" :key="estado.codigo" :value="estado">
                {{ estado.nombre }}
              </option>
            </b-select>
          </b-field>

          <hr>
          <b-field label="Adjunte el PDF del Acta Original" horizontal>
          <file-picker v-model="form.pdf" type="file" class="my-2" id="file" ref="file" required/>
        </b-field>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-info" >REGISTRAR ACTA</b-button>
              </div>
              <div class="control">
                <b-button type="is-info is-outlined" @click="reset">LIMPIAR CAMPOS</b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
      </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import HeroBar from '@/components/HeroBar'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import mapValues from 'lodash/mapValues'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'
import authHeader from '@/services/auth-header.js'

export default {
  name: 'Forms',
  components: {
    HeroBar, CardComponent, FilePicker
  },
  data () {
    const today = new Date()
    return {
      date: new Date(),
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      customElementsForm: {
        file: null
      },
      form: {
        tipo: null,
        descripcion: null,
        decanato: 1,
        fecha: today,
        estatus: 'A',
        ult_actializacion: today,
        pdf: '',
        estado:''
      }

    }
  },
  computed: {
    ...mapGetters('decanatos', ['decanatos']),
    ...mapGetters('actas', ['estados'])
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí podrás registrar Actas de Consejo!',
      queue: false
    })
    this.fetchActiveDecanatos()
    this.fetchEstados()
  },
  methods: {
    ...mapActions('decanatos', ['fetchActiveDecanatos']),
    ...mapActions('actas', ['createActa','fetchEstados']),
    async submit () {
      const user = JSON.parse(localStorage.getItem('user'))
      const header ={ Authorization: 'Bearer ' + user.accessToken,
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': Cookies.get('csrftoken'),}
      console.log(this.form)
      let formData = new FormData();
      formData.append('file', this.form.pdf)
      console.log(formData)
      axios.post( '/api/pdf/uploadFile/', formData,
        {
          headers: header
        },
      ).then(function(response){
        console.log(response);
      })
        .catch(function(error){
          console.log(error);
        });
      await this.createActa(
        {
          tipo: this.form.tipo,
          descripcion: this.form.descripcion,
          decanato: this.form.decanato,
          fecha: this.form.fecha,
          estatus: this.form.estatus,
          estado:this.form.estado,
          ult_actializacion: this.form.ult_actializacion
        }
      )
      this.$buefy.snackbar.open({
        message: '¡Se registró el Acta exitosamente!',
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
    }
  }
}
</script>
