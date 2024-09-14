<template>
  <div class="dream-factory">
    <div class="stars"></div>
    <header>
      <h1 class="title">REMI</h1>
    </header>

    <section class="categories">
      <!-- Custom Tracks Category -->
      <div class="category">
        <h2>custom tracks</h2>
        <div class="category-items">
          <div class="item" style="background-color: #FF7F7F;" @click="addToHistoryAndGoToPlayback('#FF7F7F')"></div>
          <div class="item" style="background-color: #FFBF7F;" @click="addToHistoryAndGoToPlayback('#FFBF7F')"></div>
          <div class="item" style="background-color: #FFFF7F;" @click="addToHistoryAndGoToPlayback('#FFFF7F')"></div>
          <div class="item" style="background-color: #7FFF7F;" @click="addToHistoryAndGoToPlayback('#7FFF7F')"></div>
        </div>
      </div>

      <!-- Templates Category -->
      <div class="category">
        <h2>templates</h2>
        <div class="category-items">
          <div class="item" style="background-color: #7FFFFF;" @click="addToHistoryAndGoToPlayback('#7FFFFF')"></div>
          <div class="item" style="background-color: #7F7FFF;" @click="addToHistoryAndGoToPlayback('#7F7FFF')"></div>
          <div class="item" style="background-color: #BF7FFF;" @click="addToHistoryAndGoToPlayback('#BF7FFF')"></div>
          <div class="item" style="background-color: #FF7FFF;" @click="addToHistoryAndGoToPlayback('#FF7FFF')"></div>
        </div>
      </div>

      <!-- History Category -->
      <div class="category">
        <h2>history</h2>
        <div class="category-items">
          <div v-for="color in history" :key="color" :style="{ backgroundColor: color }" class="item" @click="goToPlaybackControls(color)"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DreamFactory',
  data() {
    return {
      history: [], // Start with an empty history
    };
  },
  methods: {
    goToCustomTrack() {
      this.$router.push('/custom-track-creation');
    },
    goToPlaybackControls(color) {
      this.$router.push({
        name: 'PlaybackControls',
        params: {
          coverImage: color,
        },
      });
    },
    addToHistoryAndGoToPlayback(color) {
      if (!this.history.includes(color)) {
        this.history.unshift(color); // Prepend the selected color to the history
        localStorage.setItem('history', JSON.stringify(this.history)); // Save history to localStorage
      }
      this.goToPlaybackControls(color); // Navigate to the Playback Controls screen
    },
    loadHistory() {
      const savedHistory = localStorage.getItem('history');
      if (savedHistory) {
        this.history = JSON.parse(savedHistory);
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.loadHistory(); // Load history from localStorage
    });
  },
};
</script>

<style scoped>
.dream-factory {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  color: #dda0dd;
  padding: 20px;
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

header {
  display: flex;
  justify-content: center;
  width: 100%;
}

.title {
  font-size: 3em;
  margin: 20px 0;
}

.categories {
  width: 100%;
  margin-top: 20px;
}

.category {
  margin-bottom: 30px;
}

.category h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.category-items {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.item {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.item:hover {
  transform: scale(1.05);
}
</style>
