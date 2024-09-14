<template>
  <div class="playback-controls">
    <div class="stars"></div>

    <div class="cover-container">
      <div :style="{ backgroundColor: coverImage }" class="cover-icon"></div>
    </div>

    <div class="track-info">
      <h2 class="track-title">{{ trackTitle }}</h2>
    </div>

    <div class="progress-container">
      <span class="current-time">0:00</span>
      <input type="range" class="progress-bar" value="0" min="0" max="100" />
      <span class="duration">-5:32</span>
    </div>

    <div class="controls">
      <i class="fas fa-backward"></i>
      <i
        class="fas"
        :class="isPlaying ? 'fa-pause-circle' : 'fa-play-circle'"
        @click="togglePlayPause"
      ></i>
      <i class="fas fa-forward"></i>
    </div>

    <audio ref="audio" :src="trackSrc"></audio>
  </div>
</template>

<script>
export default {
  name: 'PlaybackControls',
  props: {
    coverImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      trackTitle: this.$route.query.trackTitle || 'Track Title',
      trackSrc: this.$route.query.trackSrc || '',
      isPlaying: false,
    };
  },
  methods: {
    togglePlayPause() {
      const audio = this.$refs.audio;
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    },
  },
};

</script>


<style scoped>
.playback-controls {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/stars.png') repeat;
  background-size: cover;
  z-index: -1;
}

.cover-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}

.cover-icon {
  width: 200px;
  height: 200px;
  border-radius: 25px;
}

.track-info {
  text-align: center;
  margin-bottom: 20px;
}

.track-title {
  font-size: 2em;
  margin: 0;
}

.progress-container {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.current-time,
.duration {
  font-size: 1.2em;
}

.progress-bar {
  width: 80%;
  height: 10px;
  background-color: #404040;
  border-radius: 5px;
  outline: none;
}

.controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-bottom: 30px;
}

.controls i {
  font-size: 2em;
  cursor: pointer;
}

.controls .fa-play-circle,
.controls .fa-pause-circle {
  font-size: 3em;
}
</style>
