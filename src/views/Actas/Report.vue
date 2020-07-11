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
              <option v-for="decanato in decanatos" :key="decanato.codigo" :value="decanato">
                {{ decanato.nombre }}
              </option>
            </b-select>
          </b-field>
        <b-field label="Cantidad de actas" horizontal>
          <b-input v-if="show" icon="account" v-model="form.resultado" placeholder="Cantidad de actas" :disabled="active" />
        </b-field>
        <b-field horizontal>
          <div class="control">
            <b-button  type="is-info" @click="buscar" >Buscar</b-button>
          </div>
        </b-field>
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Forms',
  components: {
    HeroBar, CardComponent
  },
  data () {
    const date = new Date()

    return {
      date: new Date(),
      active:true,
      show:false,
      form: {
        decanato: null,
        fecha: date,
        resultado:0
      }

    }
  },
  computed: {
    ...mapGetters('decanatos', ['decanatos']),
    ...mapGetters('actas', ['ContadorActas'])
  },
  created() {
    this.fetchActiveDecanatos()
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Consulta aquí detalladamente las Actas!',
      queue: false
    })
  },
  methods: {
    ...mapActions('decanatos', ['fetchActiveDecanatos']),
    ...mapActions('actas', ['fetchContadorActas']),
    async buscar(){
      const month=new Date(this.form.fecha).getMonth()+1
      await this.fetchContadorActas({
        codigo:this.form.decanato.codigo,
        month:month
      })
      this.form.resultado=this.ContadorActas
      console.log(this.form.resultado)
      this.show=true
    }
  }
}
</script>
