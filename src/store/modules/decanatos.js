import decanatosService from '@/services/decanatosService'
import * as types from '@/store/mutation-types'

const state = {
  decanatos: [],
  decanato: {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    estatus: ''
  }
}

const mutations = {
  ADD_DECANATO (state, decanato) {
    state.decanatos.push(decanato)
  },
  SET_DECANATOS (state, decanatos) {
    state.decanatos = decanatos
  },
  SET_ACTA (state, decanato) {
    state.decanato = decanato
  },
  UPDATE_ACTA (state, payload) {
    state.decanatos = state.decanatos.map((decanato) => {
      if (decanato.codigo === payload.codigo) {
        return Object.assign({}, decanato, payload.data)
      }
      return decanato
    })
  },

  [types.FILL_ACTA] (state, data) {
    state.decanato.descripcion = data.descripcion
    state.decanato.tipo = data.tipo
    state.decanato.fecha = data.fecha
    state.decanato.ult_actializacion = data.ult_actializacion
  },
  [types.ADD_DECANATO_DATA] (state, data) {
    switch (data.key) {
      case 'nombre':
        state.decanato.nombre = data.value
        break
      case 'direccion':
        state.decanato.direccion = data.value
        break
      case 'telefono':
        state.decanato.telefono = data.value
        break
      case 'estatus':
        state.decanato.estatus = data.value
        break
      default:
        break
    }
  }
}

const actions = {
  createDecanato ({ commit }, decanato) {
    return decanatosService
      .createDecanato(decanato)
      .then((response) => {
        commit('ADD_DECANATO', decanato)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchDecanatos ({ commit }) {
    decanatosService.getDecanatos()
      .then((response) => {
        console.log(response.data)
        commit('SET_DECANATOS', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchActiveDecanatos ({ commit }) {
    decanatosService.getActiveDecanatos()
      .then((response) => {
        console.log(response.data)
        commit('SET_DECANATOS', response.data)
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

  /* saveArtifact({ commit }, payload) {
    console.log(payload.id)
    return new Promise((resolve, reject) => {
      artifactsService
        .updateArtefacto(payload.id, payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.FILL_RESOURCE, response.data)
            buildSuccess(
              {
                msg: 'The resource was updated',
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  addArtifactData({ commit }, data) {
    commit(types.ADD_RESOURCE_DATA, data)
  }, */

  deleteDecanato ({ commit }, codigo) {
    decanatosService
      .deleteDecanato(codigo)
      .then((response) => {
        if (response.status === 200) {
          console.log('se elimino')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
const getters = {
  getDecanatoByCodigo: (state) => (codigo) => {
    return state.decanatos.find((decanato) => decanato.codigo === codigo)
  },
  decanatos: (state) => {
    return state.decanatos
  },
  decanato: (state) => state.decanato
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
