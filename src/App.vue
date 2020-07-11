<template>
  <div id="app">
    <nav-bar/>
    <aside-menu v-if="rolUser" :menu="menu"/>
    <aside-menu v-else :menu="menu1"/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  data () {
    return {
      rolUser:'',
    }
  },
  computed: {
    menu () {
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Inicio',
            updateMark: true
          }
        ],
        'Acciones',
        [
          {
            label: 'Actas',
            icon: 'square-edit-outline',
            menu: [
              {
                href: '/actas/create',
                label: 'Crear Acta'
              },
              {
                to: '/actas/list',
                label: 'Consultar Actas'
              },
              {
                to: '/actas/report',
                label: 'Reporte de Actas'
              },
              {
                to: '/actas/status',
                label: 'Estado de Actas'
              },
            ]
          },
          {
            to: '/usuarios',
            label: 'Usuarios',
            icon: 'account-box-multiple'
          },
          {
            to: '/decanatos',
            label: 'Decanatos',
            icon: 'book-open-variant'
          }
        ],
        'Acerca de...',
        [

          {
            href: '/about',
            label: '¿Cyberpunk?',
            icon: 'help-circle'
          }
        ]
      ]
    },
    menu1 () {
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Inicio',
            updateMark: true
          }
        ],
        'Acciones',
        [
          {
            label: 'Actas',
            icon: 'square-edit-outline',
            menu: [
              {
                href: '/actas/create',
                label: 'Crear Acta'
              },
              {
                to: '/actas/list',
                label: 'Consultar Actas'
              },
              {
                to: '/actas/report',
                label: 'Reporte de Actas'
              },
            ]
          },
        ],
        'Acerca de...',
        [

          {
            href: '/about',
            label: '¿Cyberpunk?',
            icon: 'help-circle'
          }
        ]
      ]
    }
  },
  created () {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    this.rolUser=user.roles[0]==='ROLE_ADMIN'
    this.$store.commit('user', {
      name: 'Nombre',
      email: 'Correo@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  }
}
</script>
