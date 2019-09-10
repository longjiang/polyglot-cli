<template>
  <div id="polyglot-zero-to-hero">
    <template v-if="langLoaded">
      <div class="container-fluid bg-dark pt-4 pl-0 pr-0">
        <div class="container">
          <div class="row mb-4">
            <div class="col-sm-12">
              <router-link :to="`/${$lang.code}`">
                <img
                  :src="`${Config.server}img/logo-${$lang.code}-zth-light.png`"
                  :alt="`${$lang.name} Zero to Hero`"
                  class="logo"
                />
              </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <Nav />
            </div>
          </div>
        </div>
      </div>
      <SubNav class="pt-4" />

      <keep-alive>
        <router-view ref="routerView" />
      </keep-alive>

      <!--
      <footer class="container-fluid bg-dark text-light pt-4 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="zerotohero">
                <a v-for="language in languages" :href="language.url" target="_blank" class="mr-4">
                  <img
                    :src="
                      `${Config.server}img/logo-${language.code}-zth-light.png`
                    "
                    :alt="`${language.name} Zero to Hero`"
                    class="logo-footer"
                  />
                </a>
              </div>
              <hr class="border-light mt-0 mb-4" style="opacity: 0.5" />
              <p>
                <b>Zero to Hero Education, Canada.</b>
              </p>
              <p>
                <b>Credits:</b>
                {{ $lang.name }}-English dictionary data from
                <a
                  href="https://freedict.org/"
                >freedict.org</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      -->
    </template>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import SubNav from '@/components/SubNav'
import Config from '@/lib/config'
import Vue from 'vue'
import FreeDict from '@/lib/freedict'

export default {
  components: {
    Nav,
    SubNav
  },
  data() {
    return {
      Config,
      languages: [],
      lang: undefined,
      langLoaded: false
    }
  },
  async mounted() {
    this.languages = this.$langs
  },
  watch: {
    $route() {
      if (this.lang && this.$route.params.lang !== this.lang) {
        // switching language
        location.reload()
      } else {
        // first time loading, set the language
        this.lang = this.$route.params.lang
        Vue.prototype.$lang = this.languages.find(
          lang => lang.code === this.$route.params.lang
        )
        this.langLoaded = true
        if (!Vue.prototype.$dictionary) {
          Vue.prototype.$dictionary = FreeDict.load(this.lang)
        }
      }
    }
  }
}
</script>

<style>
.logo {
  height: 6rem;
}
.logo-footer {
  height: 4rem;
}
</style>
