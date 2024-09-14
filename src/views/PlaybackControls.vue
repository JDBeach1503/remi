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
      <i class="fas fa-play-circle play"></i>
      <i class="fas fa-forward"></i>
    </div>
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
  computed: {
    trackTitle() {
      return this.$route.query.trackTitle || 'Track Title'; // Default to "Track Title" if not provided
    },
  },
};
</script>

<style scoped>
/* Existing styles */
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
  margin-bottom: 30px; /* Increased margin for spacing */
}

.cover-icon {
  width: 200px; /* Increased size */
  height: 200px; /* Increased size */
  border-radius: 25px; /* Slightly larger border radius */
}

.track-info {
  text-align: center;
  margin-bottom: 20px; /* Increased margin for spacing */
}

.track-title {
  font-size: 2em; /* Increased font size */
  margin: 0;
}

.progress-container {
  width: 100%;
  max-width: 500px; /* Increased max width */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px; /* Increased bottom margin */
}

.current-time, .duration {
  font-size: 1.2em; /* Increased font size */
}

.progress-bar {
  width: 80%;
  height: 10px; /* Slightly thicker progress bar */
  background-color: #404040;
  border-radius: 5px;
  outline: none;
}

.controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px; /* Increased max width */
  margin-bottom: 30px; /* Increased bottom margin */
}

.controls i {
  font-size: 2em; /* Increased icon size */
  cursor: pointer;
}

.play {
  font-size: 3em; /* Increased play button size */
}
</style>
