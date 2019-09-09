import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: `/fr/dictionary` // defaulting to /fr if no language is set
    },
    {
      path: '/:lang/dictionary/:method?/:args?',
      name: 'dictionary',
      props: true,
      component: () => import('./views/Dictionary.vue'),
      meta: {
        title: 'Dictionary | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Look up and learn Polyglot words.'
          }
        ]
      }
    },
    {
      path: '/:lang/phrase/:method?/:args?',
      name: 'phrase',
      component: () => import('./views/Phrase.vue'),
      props: true,
      meta: {
        title: 'Phrase | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'See how Polyglot phrases are used in real context..'
          }
        ]
      }
    },
    {
      path: '/:lang/saved-words',
      name: 'saved-words',
      component: () => import('./views/SavedWords.vue'),
      meta: {
        title: 'Saved Words | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Study, manage, import, export the words you saved.'
          }
        ]
      }
    },
    {
      path: '/:lang/library',
      name: 'library',
      component: () => import('./views/Library.vue'),
      props: true,
      meta: {
        title: 'Library | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content:
              'Read free, open Polyglot books with hover dictionary and save new words for review.'
          }
        ]
      }
    },
    {
      path: '/:lang/reader/:method?/:arg?',
      name: 'reader',
      component: () => import('./views/Reader.vue'),
      meta: {
        title: 'Reader | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content:
              'Read Polyglot text with annotation and save new words for review.'
          }
        ]
      }
    },
    {
      path: '/:lang/book/chapter/:args?',
      name: 'book-chapter',
      component: () => import('./views/BookChapter.vue'),
      props: true,
      meta: {
        title: 'Book Chapter | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content:
              'Read free, open Polyglot books with hover dictionary and save new words for review.'
          }
        ]
      }
    },
    {
      path: '/:lang/book/index/:args?',
      name: 'book-index',
      component: () => import('./views/BookIndex.vue'),
      props: true,
      meta: {
        title: 'Book | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content:
              'Read free, open Polyglot books with hover dictionary and save new words for review.'
          }
        ]
      }
    },
    {
      path: '/:lang/book/list/:args?',
      name: 'book-list',
      component: () => import('./views/BookList.vue'),
      props: true,
      meta: {
        title: 'Books | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content:
              'Read free, open Polyglot books with hover dictionary and save new words for review.'
          }
        ]
      }
    },
    {
      path: '/:lang/youtube/search/:args?',
      name: 'youtube-search',
      component: () => import('./views/YouTubeSearch.vue'),
      props: true,
      meta: {
        title: 'YouTube Reader | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Watch Polyglot YouTube videos and study the subtitles.'
          }
        ]
      }
    },
    {
      path: '/:lang/youtube/view/:args?',
      name: 'youtube-view',
      component: () => import('./views/YouTubeView.vue'),
      props: true,
      meta: {
        title: 'YouTube Reader | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Watch Polyglot YouTube videos and study the subtitles.'
          }
        ]
      }
    },
    {
      path: '/:lang/youtube/browse/:args?',
      name: 'youtube-browse',
      component: () => import('./views/YouTubeBrowse.vue'),
      props: true,
      meta: {
        title: 'Study YouTube Subtitles | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Watch Polyglot YouTube videos and study the subtitles.'
          }
        ]
      }
    },
    {
      path: '/:lang/youtube/channel/:args?',
      name: 'youtube-channel',
      component: () => import('./views/YouTubeChannel.vue'),
      props: true,
      meta: {
        title: 'Study YouTube Subtitles | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Watch Polyglot YouTube videos and study the subtitles.'
          }
        ]
      }
    },
    {
      path: '/:lang/youtube/playlist/:args?',
      name: 'youtube-playlist',
      component: () => import('./views/YouTubePlaylist.vue'),
      props: true,
      meta: {
        title: 'Study YouTube Subtitles | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Watch Polyglot YouTube videos and study the subtitles.'
          }
        ]
      }
    },
    {
      path: '/:lang/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue'),
      meta: {
        title: 'Settings | Polyglot Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Change preferences: choose a different text corpus.'
          }
        ]
      }
    }
  ]
})
