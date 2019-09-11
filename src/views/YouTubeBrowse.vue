<template>
  <div class="youtube-browse container mt-5 mb-5 main">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="mb-5 text-center">Study YouTube Subtitles</h1>
        <h4 class="mt-5 mb-5 text-center">Search YouTube</h4>
        <SimpleSearch
          :placeholder="`Enter a search term in ${$lang.name}...`"
          :action="
            url => {
              location.hash = `#/${$lang.code}/youtube/search/${encodeURIComponent(url)}`
            }
          "
          ref="search"
          class="mb-5"
        />
        <template v-if="channels && channels.length > 0">
          <h4 class="mt-5 mb-5 text-center">Recommended Channels</h4>
          <ul class="list-unstyled p-0 mb-5 cards">
            <li v-for="channel in channels" class="p-4 mb-4 card">
              <YouTubeChannelCard :channel="channel" />
            </li>
          </ul>
        </template>

        <h4 class="mt-5 mb-5">
          Study
          <em>any</em>
          YouTube video that has {{ $lang.name }} closed captions
        </h4>

        <div class="jumbotron bg-light pt-4 pb-3 mt-3 mb-3">
          <YouTubeNav class="mb-4" />
          <ol>
            <li>
              Go to YouTube, search a {{ $lang.name }} word.
            </li>
            <li>
              Click on
              <b>Filter</b>, and choose
              <b>Subtitls/CC.</b>
            </li>
            <li>
              Open a video that interests you.
              <br />
              <small>
                <b>Note:</b> Many have closed captions, but they are in
                <em>English.</em> You need to look for
                <em>{{ $lang.name }}</em> closed
                captions. These are hard to find. If you cannot find any, look
                in the suggested channels listed on this page.
              </small>
            </li>
            <li>
              Copy the video's URL, paste it into the box above, and press
              <b>Enter</b>
              or click
              <b>Study.</b>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YouTubeNav from '@/components/YouTubeNav'
import YouTubeChannelCard from '@/components/YouTubeChannelCard'
import SimpleSearch from '@/components/SimpleSearch'

export default {
  components: {
    YouTubeNav,
    YouTubeChannelCard,
    SimpleSearch
  },
  props: {
    args: {
      type: String
    }
  },
  data() {
    return {
      location,
      channels: this.$lang.options.youtube.channels
    }
  }
}
</script>
