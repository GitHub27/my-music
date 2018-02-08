<template>
  <div class="player-control">
    <div class="background">
      <img src="../../assets/logo.png" alt="">
    </div>

    <div class="mod-song-control grid">
      <progressBar :percent="percent" @percentChange="onProgressBarChange" />
      <ul class="action row" style="list-style: none;display: flex; align-items: center;justify-content: space-between">
        <li class="iconfont icon-loop col-3 iconmode" style="text-align: left;"></li>
        <li class="col-6 iconcenter">
          <div class="iconfont icon-prev"></div>
          <div class="iconfont icon-play-pause" :class="playIcon" @click="togglePlaying"></div>
          <div class="iconfont icon-next"></div>
          <div class="play-loading" style="display: none;"></div>
        </li>
        <li class="iconfont icon-list col-3" style="text-align: right"></li>
      </ul>
    </div>
    <audio 
      ref="audio" 
      src="../../assets/m1.mp4" 
      @timeupdate="updateTime"
      @play="ready" 
      @error="error"
      @ended="ended"
      >您的浏览器不支持</audio>
  </div>
</template>
<script>
import progressBar from "../../base/progressBar/progressBar";
export default {
  components: {
    progressBar
  },
  data() {
    return {
      playing: false,
      currentTime: 0 //音频当前播放时间
    };
  },
  computed: {
    playIcon() {
      return this.playing ? "icon-stop" : "icon-play";
    },
    percent() {
      return this.currentTime / 241 * 100;
    },
    passedTime() {
      //return
    }
  },
  methods: {
    
    updateTime(e) {
      console.log("歌曲进度(秒) >>> ", e.target.currentTime);
      this.currentTime = e.target.currentTime;
    },
    ready(){
      console.log("歌曲状态：ready");
    },
    ended(){
      console.log("歌曲结束");
      this.playing=false;
    },
    error(){
      console.log("歌曲状态:error");
    },
    togglePlaying() {
      this.playing = !this.playing;
    },
    progressClick(e) {
      const programPrecent = (e.clientX - (375 - 269) / 2) / 269;
      const currentTime = programPrecent * 241;
      this.$refs.audio.currentTime = currentTime;
      if (!this.playing) {
        this.togglePlaying();
      }
    },
    onProgressBarChange(percent) {
      this.$refs.audio.currentTime = 241 * percent;
      if (!this.playing) {
        this.togglePlaying();
      }
    }
  },
  watch: {
    playing(newPlaying) {
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause();
      });
    }
  }
};
</script>
<style>
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
.background img {
  display: block;
  width: 100%;
  height: 100%;
}
.icon-list:before {
  content: "\e603";
}

.icon-loop-single:before {
  content: "\e604";
}

.icon-arrow-right:before {
  content: "\e605";
}

.icon-loop:before {
  content: "\e606";
}

.icon-prev:before {
  content: "\e607";
}

.icon-favor:before {
  content: "\e608";
}

.icon-next:before {
  content: "\e60a";
}

.icon-download:before {
  content: "\e60b";
}

.icon-search:before {
  content: "\e60c";
}

.icon-zhanwei1:before {
  content: "\e610";
}

.icon-favor1:before {
  content: "\e618";
}

.icon-random:before {
  content: "\e619";
}

.icon-play:before {
  content: "\e616";
}

.icon-stop:before {
  content: "\e617";
}

.icon-mv:before {
  content: "\e61b";
}

.icon-arrow-down:before {
  content: "\e61d";
}

.icon-arrow-left:before {
  content: "\e61e";
}

.icon-arrow-up:before {
  content: "\e61f";
}

.icon-listen:before {
  content: "\e609";
}

.icon-round:before {
  content: "\e60d";
}

.icon-triangle:before {
  content: "\e60e";
}

.icon-information:before {
  content: "\e60f";
}

.icon-home:before {
  content: "\e611";
}

.icon-i:before {
  content: "\e612";
}

.icon-information-:before {
  content: "\e613";
}

.icon-bubble-filled-icon:before {
  content: "\e614";
}

.icon-round-right:before {
  content: "\e615";
}

.icon-vip:before {
  content: "\e61a";
}

.icon-word:before {
  content: "\e61c";
}

.mod-song-control {
  background-color: #f8f8f8;
  padding-top: 6px;
}

.mod-song-control .iconcenter {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
}

.mod-song-control .iconcenter .icon-prev {
  font-size: 1.4rem;
  margin-left: -9px;
}

.mod-song-control .iconcenter .icon-next {
  font-size: 1.4rem;
  margin-right: -9px;
}

.mod-song-control .action {
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
}

.mod-song-control .action li.iconfont {
  font-size: 1.3rem;
}

.mod-song-control .action li .icon-play-pause {
  font-size: 3rem;
}

.mod-song-control .action li.icon-random {
  font-size: 1rem;
  padding-left: 0;
}

.mod-song-control .action li.icon-list {
  font-size: 1.2rem;
}

.mod-song-control .action li .play-loading {
  position: absolute;
  left: 50%;
  width: 66px;
  height: 66px;
  margin-left: -33px;
  background: url(//static0.qianqian.com/web/st/img/ui/loading/24/loading-34d.gif)
    0 0;
  -webkit-background-size: 66px 66px;
  background-size: 66px;
}

.grid {
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;
}

.grid-section {
  width: 100%;
}

.row {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 0;
  *: 0 1 auto;
  */: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -4px;
  margin-left: -4px;
}

.row.reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.col.reverse {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse;
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  padding-right: 0.4rem;
  padding-left: 0.4rem;
}

.col-fluid {
  padding: 0;
  margin: 0;
}

.col {
  -webkit-flex-grow: 1;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-flex-basis: 0;
  flex-basis: 0;
  max-width: 100%;
}

.col-1 {
  -webkit-flex-basis: 8.333%;
  flex-basis: 8.333%;
  max-width: 8.333%;
}

.col-2 {
  -webkit-flex-basis: 16.667%;
  flex-basis: 16.667%;
  max-width: 16.667%;
}

.col-3 {
  -webkit-flex-basis: 25%;
  flex-basis: 25%;
  max-width: 25%;
}

.col-4 {
  -webkit-flex-basis: 33.333%;
  flex-basis: 33.333%;
  max-width: 33.333%;
}

.col-5 {
  -webkit-flex-basis: 41.667%;
  flex-basis: 41.667%;
  max-width: 41.667%;
}

.col-6 {
  -webkit-flex-basis: 50%;
  flex-basis: 50%;
  max-width: 50%;
}

.col-7 {
  -webkit-flex-basis: 58.333%;
  flex-basis: 58.333%;
  max-width: 58.333%;
}

.col-8 {
  -webkit-flex-basis: 66.667%;
  flex-basis: 66.667%;
  max-width: 66.667%;
}

.col-9 {
  -webkit-flex-basis: 75%;
  flex-basis: 75%;
  max-width: 75%;
}

.col-10 {
  -webkit-flex-basis: 83.333%;
  flex-basis: 83.333%;
  max-width: 83.333%;
}

.col-11 {
  -webkit-flex-basis: 91.667%;
  flex-basis: 91.667%;
  max-width: 91.667%;
}

.col-12 {
  -webkit-flex-basis: 100%;
  flex-basis: 100%;
  max-width: 100%;
}
</style>
