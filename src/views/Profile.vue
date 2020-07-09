<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <hero-bar>
      Mi Perfil
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <profile-update-form class="tile is-child"/>
        <card-component title="Aquí puedes Editar tu Perfil facilmente" icon="account" class="tile is-child">
        <div class='card-image mt-8'>
        <figure class='image has-max-width mt-8'>
          <img src='../assets/wfh_3.svg' alt='Placeholder'/>
        </figure>
      </div>
        </card-component>
      </tiles>
      <password-update-form/>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import ProfileUpdateForm from '@/components/ProfileUpdateForm'
import PasswordUpdateForm from '@/components/PasswordUpdateForm'
import Tiles from '@/components/Tiles'

export default {
  name: 'Profile',
  components: { Tiles, PasswordUpdateForm, ProfileUpdateForm, HeroBar, TitleBar, CardComponent },
  computed: {
    titleStack () {
      return [
        'Mi Perfil',
        'Editar'
      ]
    },
    ...mapState([
      'userName',
      'userEmail'
    ])
  }
}
</script>
