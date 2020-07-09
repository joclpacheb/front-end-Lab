import api from '@/services/api'

export default {
  getActas () {
    return api.get('/acta/')
  },
  createActa (acta) {
    return api.post('/acta/', acta)
  },
  getActasActivas () {
    return api.get('/acta/activos/')
  },
  getActa (id) {
    return api.get(`/acta/${id}`)
  },
  updateActa (id, acta) {
    return api.put(`/acta/${id}`, acta)
  },
  deleteActa (id) {
    return api.delete(`/acta/${id}`)
  }
}
