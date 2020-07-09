import api from '@/services/api'

export default {
  getActas () {
    return api.get('/acta/')
  },
  getActiveActas () {
    return api.get('/acta/activos')
  },
  createActa (acta) {
    return api.post('/acta/', acta)
  },
  getActa (id) {
    return api.get(`/acta/${id}`)
  },
  updateActa (id, acta) {
    return api.put(`/acta/${id}`, acta)
  },
  deleteActa (codigo) {
    return api.delete(`/acta/${codigo}`)
  },
  getContador () {
    return api.get('/dash/contadores')
  }
}
