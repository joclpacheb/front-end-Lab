<template>
  <div>
 <hero-bar>
      Gestión de Usuarios
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class='section is-main-section'>
           <section class='section is-main-section'>
      <div class="columns">
     <div class="column">
      <div class='card-image'>
         <figure class='image '>
          <img src='@/assets/pale-pale-50.png' alt='Placeholder'/>
        </figure>
      </div>
    </div>

    <div class="column">
     <card-component title="Crear un Usuario Nuevo" icon="ballot">
      <form @submit.prevent="submit">
          <b-field label="Datos de Ingreso" horizontal>
            <b-field>
              <b-input icon="account-box-outline" v-model="form.id" placeholder="Cédula" name="Cédula" required />
            </b-field>
            <b-field>
              <b-input icon="email" type="email" v-model="form.email" placeholder="E-mail" name="E-mail"/>
            </b-field>
          </b-field>
          <b-field label="Nombres" horizontal>
          <b-field>
              <b-input icon="account" v-model="form.name" placeholder="Nombre" name="Nombre" required />
            </b-field>
             <b-field>
              <b-input icon="account" v-model="form.secondname" placeholder="Apellido" name="Apellido" required />
            </b-field>
          </b-field>
          <b-field label="Teléfono" message="Ejemplo: 0424-4345062" horizontal>
            <b-field>
              <p class="control">
                <a class="button is-static">
                  +58
                </a>
              </p>
              <b-input type="tel" v-model="form.phone" name="phone" expanded />
            </b-field>
          </b-field>
          <b-field label="Decanato" horizontal>
            <b-select placeholder="Seleccione un Decanato" v-model="form.faculty" required>
              <option v-for="(decanato, index) in decanatos" :key="index" :value="decanato">
                {{ decanato }}
              </option>
            </b-select>
            </b-field>
            <b-field label="Tipo de Usuario" horizontal>
            <b-select placeholder="Seleccione una opción" rounded required icon="account"  v-model="form.type">
                <option value="flint">Administrador</option>
                <option value="silver">Secretario</option>
            </b-select>
          </b-field>
          <b-field horizontal label="Contraseña" message="Será utilizada por el usuario para Iniciar Sesión">
        <b-input name="password" type="password" v-model="form.password" required autocomplete="new-password"/>
      </b-field>
      <b-field horizontal label="Confirmar Contraseña" message="Escriba la Contraseña otra vez">
        <b-input name="password_confirmation" type="password" v-model="form.password_confirmation" required
                 autocomplete="new-password"/>
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
                    Usuarios Registrados
                  </p>
                </header>
                <div class="card-content">
                    <table class="table is-fullwidth">
                        <thead>
                          <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Tipo de Usuario</th>
                            <th>E-mail</th>
                            <th>Teléfono</th>
                            <th>Decanato</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td>55555555</td>
                          <td>John</td>
                          <td>Doe</td>
                          <td>Secretario</td>
                          <td>doejohn@hotmail.com</td>
                          <td>0412-555555</td>
                          <td>DEHA</td>
                          <td>
                            <div class="field is-grouped">
                              <a class="button is-small is-info mr-3" @click="modal=true">Editar</a>
                              <a class="button is-small is-danger"  @click="deleteU">Eliminar</a>
                              </div>
                          </td>
                        </tr>
                        <tr>
                          <td>26169922</td>
                          <td>Jose</td>
                          <td>Pacheco</td>
                          <td>Administrador</td>
                          <td>joclpacheb@hotmail.com</td>
                          <td>0412-4544884</td>
                          <td>DCYT</td>
                          <td>
                            <div class="field is-grouped">
                                <a class="button is-small is-info mr-3" @click="modal = true">Editar</a>
                                <a class="button is-small is-danger" @click="deleteU">Eliminar</a>
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
                    <p class="modal-card-title">Modificar Usuario</p>
                </header>
                <section class="modal-card-body">
                <form @submit.prevent="submit">
          <b-field label="Datos de Ingreso" horizontal>
            <b-field>
              <b-input icon="account-box-outline" v-model="form2.id" placeholder="Cédula" name="Cédula" required />
            </b-field>
            <b-field>
              <b-input icon="email" type="email" v-model="form2.email" placeholder="E-mail" name="E-mail"/>
            </b-field>
          </b-field>
          <b-field label="Nombres" horizontal>
          <b-field>
              <b-input icon="account" v-model="form2.name" placeholder="Nombre" name="Nombre" required />
            </b-field>
             <b-field>
              <b-input icon="account" v-model="form2.secondname" placeholder="Apellido" name="Apellido" required />
            </b-field>
          </b-field>
          <b-field label="Teléfono" message="Ejemplo: 0424-4345062" horizontal>
            <b-field>
              <p class="control">
                <a class="button is-static">
                  +58
                </a>
              </p>
              <b-input type="tel" v-model="form2.phone" name="phone" expanded />
            </b-field>
          </b-field>
          <b-field label="Decanato" horizontal>
            <b-select placeholder="Seleccione un Decanato" v-model="form2.faculty" required>
              <option v-for="(decanato, index) in decanatos" :key="index" :value="decanato">
                {{ decanato }}
              </option>
            </b-select>
            </b-field>
            <b-field label="Tipo de Usuario" horizontal>
            <b-select placeholder="Seleccione una opción" rounded required icon="account"  v-model="form2.type">
                <option value="flint">Administrador</option>
                <option value="silver">Secretario</option>
            </b-select>
          </b-field>
          <b-field horizontal label="Contraseña" message="Será utilizada por el usuario para Iniciar Sesión">
        <b-input name="password" type="password" v-model="form2.password" required autocomplete="new-password"/>
      </b-field>
      <b-field horizontal label="Confirmar Contraseña" message="Escriba la Contraseña otra vez">
        <b-input name="password_confirmation" type="password" v-model="form2.password_confirmation" required
                 autocomplete="new-password"/>
      </b-field>
        </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary" type="button" @click="modal=false">Cerrar</button>
                    <button class="button is-info"  @click="edit">Editar Usuario</button>
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
      isLoading: false,
      modal: false,
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
        id: null,
        name: null,
        secondname: null,
        faculty: null,
        type: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      form2: {
        id: null,
        name: null,
        secondname: null,
        faculty: null,
        type: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  computed: {

  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡Aquí puedes consultar y registrar usuarios!',
      queue: false
    })
  },
  methods: {
    submit () {
      this.$buefy.snackbar.open({
        message: '¡Se registró el Usuario exitosamente!',
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
        message: '¡Se modificó el Usuario exitosamente!',
        queue: false
      })
    },
    deleteU () {
      this.$buefy.dialog.confirm({
        title: 'Eliminar Usuario',
        message: '¿Estás de acuerdo en <b>eliminar</b> este Usuario?',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$buefy.toast.open('Usuario Eliminado!')
      })
    }

  }
}
</script>
