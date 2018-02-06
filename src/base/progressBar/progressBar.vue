<template>
    <div class="progress-wrapper">
        <span class="ticker cur">7:17</span>
        <div class="progress">
            <div class="bar noUi-target noUi-ltr noUi-horizontal noUi-connect" ref="progress" @click="progressClick" @touchstart.prevent="progressTouchStart" @touchmove.prevent="progressTouchMove" @touchend="progressTouchEnd">
                <div class="noUi-base">
                    <div class="noUi-origin noUi-background" ref="progressBar" style="left: 0%" >
                        <div class="noUi-handle noUi-handle-lower"></div>
                    </div>
                </div>
            </div>
        </div>
        <span class="duration">04:50</span>
    </div>
</template>
<script>
const progressPointWidth = 5; //进度条按钮宽度10px (left:-5px)
let _touchStarX = 0;
let _touchMovingX = 0;
let _touchEndX = 0;
export default {
  data() {
    return {};
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  watch: {
      //:style="{left: percent+'%'}"
    percent(newVal) {
      if (newVal >= 0 && !this.touch.initiated) {
          const offsetWidth = (newVal/100) * this.$refs.progress.clientWidth;
          this._offset(offsetWidth)
      }
    }
  },
  methods: {
    _offset(offsetWidth) {
        console.log('_offset offsetWidth',offsetWidth)
      this.$refs.progressBar.style.left = `${offsetWidth}px`;
    },
    _triggerPercent() {
      const percent = this.$refs.progressBar.style.left.replace('px','') / this.$refs.progress.clientWidth
      this.$emit("percentChange", percent);
    },
    progressClick(e) {
      const rect = this.$refs.progress.getBoundingClientRect();
      const offsetWidth = e.clientX - rect.left;
      this._offset(offsetWidth);
      this._triggerPercent(percent);
    },
    progressTouchStart(e) {
      console.log(e);
      this.touch.initiated = true;
      _touchStarX = e.touches[0].pageX;
    },
    progressTouchMove(e) {
      console.log(e);
      if (!this.touch.initiated) return;
      _touchMovingX = e.touches[0].pageX;
      const rect = this.$refs.progress.getBoundingClientRect();
      const offsetWidth = Math.min(
        e.touches[0].pageX - rect.left,
        this.$refs.progress.clientWidth
      );
      this._offset(offsetWidth);
    },
    progressTouchEnd(e) {
      console.log(e);
      this.touch.initiated = false;
      const rect = this.$refs.progress.getBoundingClientRect();
      const offsetWidth = _touchMovingX - rect.left;
      this._triggerPercent(percent);
    }
  },
  created(){
        this.touch = {}
    }
};
</script>
<style>
.mod-song-control .progress-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.mod-song-control .progress-wrapper .duration,
.mod-song-control .progress-wrapper .ticker {
  display: block;
  color: #ccc;
  font-size: 12px;
  line-height: 2.4;
}

.mod-song-control .progress-wrapper .duration {
  text-align: right;
}

.mod-song-control .progress-wrapper .progress {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 0 12px;
}

.mod-song-control .progress-wrapper .progress .bar {
  width: 100%;
  height: 1px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #f8f8f8;
}

.mod-song-control .progress-wrapper .progress .bar .noUi-base {
  position: relative;
  width: 100%;
  height: 1px;
  display: block;
  background-color: #999;
}

.mod-song-control .progress-wrapper .progress .bar .noUi-origin {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #e5e5e5;
}

.mod-song-control .progress-wrapper .progress .bar .noUi-handle {
  position: absolute;
  z-index: 99;
  width: 10px;
  height: 10px;
  top: -4px;
  left: -3px;
  background-color: #333;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
}

.mod-song-control .progress-wrapper .progress .bar .noUi-handle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin-top: -10px;
  margin-left: -10px;
}
</style>
