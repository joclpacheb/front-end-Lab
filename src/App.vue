<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu"/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
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
            to: '/login',
            label: 'Login-TMP',
            icon: 'table'
          },
          {
            to: '/actas',
            label: 'Actas',
            icon: 'square-edit-outline'
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
        'De la plantila:',
        [
          {
            to: '/forms',
            label: 'Forms',
            icon: 'square-edit-outline'
          },
          {
            to: '/profile',
            label: 'Profile',
            icon: 'account-circle'
          },
          {
            label: 'Submenus',
            subLabel: 'Submenus Example',
            icon: 'view-list',
            menu: [
              {
                href: '#void',
                label: 'Sub-item One'
              },
              {
                href: '#void',
                label: 'Sub-item Two'
              }
            ]
          }],
        'Acerca de...',
        [

          {
            href: 'https://justboil.me/bulma-admin-template/one',
            label: '¿Cyberpunk?',
            icon: 'help-circle'
          }
        ]
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  }
}
</script>
