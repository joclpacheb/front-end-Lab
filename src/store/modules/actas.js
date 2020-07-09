import actasService from '@/services/actasService.js'
// import * as types from '@/store/mutation-types'

const state = {
  actas: [],
  acta: {
    codigo: '',
    tipo: '',
    descripcion: '',
    estatus: '',
    fecha: '',
    ult_actializacion: ''
  }
}

const mutations = {
  ADD_ACTAS (state, acta) {
    state.actas.push(acta)
  },
  SET_ACTAS (state, actas) {
    state.actas = actas
  },
  SET_ACTA (state, acta) {
    state.acta = acta
  },
  UPDATE_ACTA (state, payload) {
    state.actas = state.actas.map((acta) => {
      if (acta.codigo === payload.codigo) {
        return Object.assign({}, acta, payload.data)
      }
      return acta
    })
  }

  /*  [types.FILL_ARTIFACT] (state, data) {
    state.artifact.nombre = data.nombre
    state.artifact.descripcion = data.descripcion
    state.artifact.enlace = data.enlace
    state.artifact.estado = data.estado
  },
  [types.ADD_ARTIFACT_DATA](state, data) {
    switch (data.key) {
      case 'name':
        state.artifact.nombre = data.value
        break
      case 'description':
        state.artifact.descripcion = data.value
        break
      case 'enlace':
        state.artifact.enlace = data.value
        break
      case 'estado':
        state.artifact.estado = data.value
        break
      default:
        break
    }
  }, */
}

const actions = {
  /* createArtifact({ commit }, artifact) {
    console.log(artifact.projectId)
    return artifactsService
      .postArtefacto(artifact.projectId, artifact)
      .then((response) => {
        commit('ADD_ARTIFACT', artifact)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, */
  fetchActas ({ commit }) {
    actasService.getActas()
      .then((response) => {
        commit('SET_ACTAS', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
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

  /* deleteArtifact({ commit }, id) {
    return new Promise((resolve, reject) => {
      artifactsService
        .deleteArtefacto(id)
        .then((response) => {
          if (response.status === 204) {
            buildSuccess(
              {
                msg: 'El Artefacto fue eliminado con éxito',
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
  }, */
}
const getters = {
  getActaByCodigo: (state) => (codigo) => {
    return state.actas.find((acta) => acta.codigo === codigo)
  },
  actas: (state) => {
    return state.actas
  },
  acta: (state) => state.acta
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
