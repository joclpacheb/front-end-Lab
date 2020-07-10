/* eslint-disable */
import actasService from '@/services/actasService.js'
import * as types from '@/store/mutation-types'

const state = {
  actas: [],
  acta: {
    codigo: '',
    tipo: '',
    descripcion: '',
    estatus: '',
    fecha: '',
    ult_actializacion: '',
    decanato: null,
    pdf: {}
  },
  contadores: {
    actas: '',
    decanatos: '',
    usuarios: ''
  }
}

const mutations = {
  ADD_ACTA (state, acta) {
    state.actas.push(acta)
  },
  SET_ACTAS (state, actas) {
    state.actas = actas
  },
  SET_ACTA (state, acta) {
    state.acta = acta
  },
  SET_CONTADORES (state, contadores) {
    state.contadores = contadores
  },
  UPDATE_ACTA (state, payload) {
    state.actas = state.actas.map((acta) => {
      if (acta.codigo === payload.codigo) {
        return Object.assign({}, acta, payload.data)
      }
      return acta
    })
  },

  [types.FILL_ACTA] (state, data) {
    state.acta.descripcion = data.descripcion
    state.acta.tipo = data.tipo
    state.acta.fecha = data.fecha
    state.acta.ult_actializacion = data.ult_actializacion
  },
  [types.ADD_ACTAS_DATA] (state, data) {
    switch (data.key) {
      case 'description':
        state.acta.descripcion = data.value
        break
      case 'tipo':
        state.acta.tipo = data.value
        break
      case 'fecha':
        state.acta.fecha = data.value
        break
      case 'ult_actializacion':
        state.acta.ult_actializacion = data.value
        break
      case 'decanato':
        state.acta.decanato = data.value
        break
      case 'estatus':
        state.acta.estatus = data.value
        break
      default:
        break
    }
  }
}

const actions = {
  createActa ({ commit }, acta) {
    return actasService
      .createActa(acta)
      .then((response) => {
        commit('ADD_ACTA', acta)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchActas ({ commit }) {
    actasService.getActas()
      .then((response) => {
        console.log(response.data)
        commit('SET_ACTAS', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchActiveActas ({ commit }) {
    actasService.getActiveActas()
      .then((response) => {
        console.log(response.data)
        // commit('SET_ACTAS', response.data)
        state.actas = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  /* fetchArtifact({ commit, getters, dispatch }, id) {
    console.log(id)
    const artifact = getters.getArtifactById(id)
    if (artifact) {
      commit('SET_ARTIFACT', artifact)
    } else {
      artifactsService
        .getArtefacto(id)
        .then((response) => {
          console.log(response.data)
          commit('SET_ARTIFACT', response.data)
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching meeting: ' + error.message,
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }, */

  saveActa ({ commit }, payload) {
    console.log(payload)
    console.log('hi')
    actasService
      .updateActa(payload.codigo, payload)
      .then((response) => {
        if (response.status === 200) {
          console.log('se guardo')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },

  deleteActa ({ commit }, codigo) {
    actasService
      .deleteActa(codigo)
      .then((response) => {
        if (response.status === 200) {
          console.log('se elimino')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchContadores ({ commit }) {
    actasService.getContador()
      .then((response) => {
        console.log(response.data)
        commit('SET_CONTADORES', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
const getters = {
  getActaByCodigo: (state) => (codigo) => {
    return state.actas.find((acta) => acta.codigo === codigo)
  },
  actas: (state) => {
    return state.actas
  },
  acta: (state) => state.acta,
  contadores: (state) => state.contadores
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
