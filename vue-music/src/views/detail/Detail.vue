<template>
    <div class="detail">
      <common-my-scroll :className="'detail_wrapper'" v-if="list.length">
        <template #content>
          <detail-song-head :songHead="songHead"/>
          <detail-succinct :succinct="succinct"/>
          <detail-list :list="list"/>
        </template>
      </common-my-scroll>
      <content-loading v-else/>
    </div>
</template>

<script>
// 引入对应的API接口请求函数和数据整合函数
import { DetailSong, DetailSongHeadData, DetailSuccinctData, DetailSongList } from '../../api/detail'
// 引入适用性比较高的组件
import CommonMyScroll from '../../components/common/MyScroll'
// 引入适用性不是很高的组件
import ContentLoading from '../../components/content/Loading'
// 引入当前组件模块下面的子组件
import DetailSongHead from './base/SongHead'
import DetailSuccinct from './base/Succinct'
import DetailList from './base/List'
export default {
  name: 'Detail',
  data () {
    return {
      songHead: {}, // 歌单详情头部数据
      succinct: {}, // 歌单简绍数据
      list: [] // 歌曲列表数据
    }
  },
  // 请求对应的数据
  created () {
    this.getData()
  },
  methods: {
    // 请求对应的函数
    async getData () {
      // 解构我们需要使用的数据
      const { playlist } = await DetailSong(this.$route.query.id)
      // 整合头部的数据
      this.songHead = Object.freeze(new DetailSongHeadData(playlist.coverImgUrl, playlist.name))
      // 整合简绍部分的数据
      this.succinct = Object.freeze(new DetailSuccinctData(playlist.tags, playlist.description))
      // 整合歌曲列表部分的数据
      playlist.tracks.length = 25 // 限制请求完成返回来数组的length长度
      this.list = Object.freeze(new DetailSongList(playlist.tracks).list)
    }
  },
  components: {
    CommonMyScroll,
    ContentLoading,
    DetailSongHead,
    DetailSuccinct,
    DetailList
  }
}
</script>

<style scoped lang="scss">
  .detail {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background-color: #F8F8F8;
  }
</style>
