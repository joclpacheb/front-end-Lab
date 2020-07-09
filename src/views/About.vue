<template>
  <div>
<hero-bar>
      Acerca de Nosotros
      <router-link slot="right" to="/" class="button">
        Inicio
      </router-link>
    </hero-bar>
    <section class='section is-main-section'>
 <card-component title="Datos del Acta de Consejo" class="is-fullwidth" icon="ballot">
      <div class='card-image has-text-centered is-fullwidth'>
         <link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">
         <headercyber class="has-text-centered">TEAM - CYBERPUNK</headercyber>
        <figure class='image'>
          <img src='../assets/cyber.gif' alt='Placeholder'/>
        </figure>
      </div>

    <hr>
<section class="section">
<div class="container">
<div class="columns is-centered">
<div class="column">
<!--Card 1-->
<div class="card">
  <div class="card-image">
    <figure class="image">
      <img src="../assets/shodan.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
      <div class="media-content">
        <p class="title is-4">Jose Luis Pacheco</p>
      </div>
  </div>
    </div>
</div>
<!--Card 2-->
<div class="column">
<div class="card">
  <div class="card-image">
    <figure class="image">
      <img src="../assets/fox.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
      <div class="media-content">
        <p class="title is-4">Anyeli Villarreal</p>
      </div>
  </div>
    </div>

</div>
</div>
</div>
<div class="container">
<div class="columns is-centered">
<div class="column">
<!--Card 3-->
<div class="card">
  <div class="card-image">
    <figure class="image ">
      <img src="../assets/kougami.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
      <div class="media-content">
        <p class="title is-4">Dany Karam</p>
      </div>
  </div>
    </div>
</div>
<!--Card 4-->
<div class="column">
<div class="card">
  <div class="card-image">
    <figure class="image">
      <img src="../assets/nepta.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
      <div class="media-content">
        <p class="title is-4">Neptali Piña</p>
      </div>
  </div>
    </div>

</div>
</div>
</div>

</section>
<br>
 </card-component>
    </section>
  </div>

</template>
 <style>
     headercyber {
    font-family: 'Monoton', cursive;
    font-size: 70px;
    color: rgb(233, 0, 116);
}

</style>
<script>

// @ is an alias to /src
import HeroBar from '@/components/HeroBar'

export default {
  name: 'home',
  components: {
    HeroBar
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.$buefy.snackbar.open({
      message: '¡El Team Cyberpunk!',
      queue: false
    })
  },
  methods: {
    listA () {
      this.$router.push('/actas/list')
    },
    createA () {
      this.$router.push('/actas/create')
    },
    reportA () {
      this.$router.push('/actas/report')
    },
    listD () {
      this.$router.push('/decanatos')
    },
    listU () {
      this.$router.push('/usuarios')
    }
  }
}
</script>
