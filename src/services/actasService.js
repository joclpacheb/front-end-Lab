/* eslint-disable */
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
  getActasDecanato (id) {
    return api.get(`/acta/decanato/${id}/`)
  },
  updateActa (id, acta) {
    return api.put(`/acta/${id}`, acta)
  },
  deleteActa (codigo) {
    return api.delete(`/acta/${codigo}`)
  },
  getContador () {
    return api.get('/dash/contadores')
  },
  getContadorActas (cod, mes) {
    return api.get(`/reporte/actasPorDecanato/${cod}/${mes}`)
  },
  getEstados(){
    return api.get('/estado/')
  },
  updateEstado (id, estado) {
    return api.put(`/estado/${id}`, estado)
  },
  createEstado (estado) {
    return api.post('/estado/', estado)
  },
  deleteEstado (id) {
    return api.delete(`/estado/${id}`)
  },
}
