<template>
  <a
    :href="language.url.replace('https://polyglot.zerotohero.ca/', '/')"
    target="_blank"
    class="mr-4 mb-4 d-inline-block zerotohero-item"
  >
    <img
      :src="
        `${Config.server}img/logo-${language.code}-zth-light.png`
    "
      :alt="`${language.name} Zero to Hero`"
      v-if="language.logo"
      class="logo-footer"
    />
    <div v-else>
      <div class="logo-circle">
        <div
          class="logo-speech-bubble"
          :style="`background-image: url(${Config.server}img/speech-light.png)`"
        ><b>{{ language.name.slice(0,1).toUpperCase()}}{{ language.name.slice(1,2) }}</b></div>
      </div>
      <div class="logo-text text-white">
        <div class="logo-text-language">{{ language.name.toUpperCase() }}</div>
        <div class="logo-text-zth">ZERO TO HERO</div>
      </div>
    </div>
  </a>
</template>

<script>
import Config from '@/lib/config'

export default {
  props: ['language'],
  data() {
    return {
      Config
    }
  }
}
</script>

<style>
.logo-footer {
  height: 4rem;
}
.logo-text {
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
}
.logo-speech-bubble {
  height: 2rem;
  width: 2rem;
  background-size: cover;
  line-height: 2rem;
  text-align: center;
  font-size: 0.7rem;
  color: #555;
}
.logo-speech-bubble b {
  display: block;
  position: relative;
  bottom: 0.1em;
}
.logo-text-language {
  font-weight: 100;
  margin-bottom: -0.3em;
}
.logo-text-zth {
  font-weight: bold;
}
</style>