import Wikisource from '@/lib/library-sources/wikisource'
import Wikipedia from '@/lib/library-sources/wikipedia'
import WOL from '@/lib/library-sources/wol'

export default {
  universalSources: [Wikipedia, Wikisource, WOL],
  sources: [],
  async setSources(sources) {
    for (let source of sources) {
      this.sources.push(
        (await import(`@/lib/library-sources/${source}.js`)).default
      )
    }
  },
  source(url) {
    const host = url.replace(/.*\/\/([^/]*).*/, '$1')
    const source = this.sources
      .concat(this.universalSources)
      .find(source => host.match(source.host))
    return source
  },
  getBook(url) {
    return this.source(url) ? this.source(url).getBook(url) : false
  },
  getChapter(url) {
    return this.source(url) ? this.source(url).getChapter(url) : false
  },
  getBooklist(url) {
    return this.source(url) ? this.source(url).getBooklist(url) : false
  }
}
