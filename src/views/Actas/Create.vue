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
              <div class="control">
                <b-button native-type="submit" type="is-info"  @click="submit">REGISTRAR ACTA</b-button>
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

import HeroBar from '@/components/HeroBar'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import mapValues from 'lodash/mapValues'

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
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí podrás registrar Actas de Consejo!',
      queue: false
    })
  },
  methods: {
    submit () {
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
