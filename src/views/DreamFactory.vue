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
          <!-- New Custom Tracks -->
          <div
            v-for="(track, index) in customTracks"
            :key="index"
            class="item"
            :style="{ backgroundColor: track.color }"
            @click="addToHistoryAndGoToPlayback(track)"
          >
            <span class="track-name">{{ track.name }}</span>
          </div>
          <!-- Custom Track Creation Icon -->
          <div class="custom-track-icon" @click="goToCustomTrack">
            <div class="plus-sign">+</div>
          </div>
        </div>
      </div>

      <!-- Templates Category -->
      <div class="category">
        <h2>templates</h2>
        <div class="category-items">
          <div class="item" style="background-color: #7FFFFF;" @click="addToHistoryAndGoToPlayback({ name: 'Track 1', color: '#7FFFFF' })"></div>
          <div class="item" style="background-color: #7F7FFF;" @click="addToHistoryAndGoToPlayback({ name: 'Track 2', color: '#7F7FFF' })"></div>
          <div class="item" style="background-color: #BF7FFF;" @click="addToHistoryAndGoToPlayback({ name: 'Track 3', color: '#BF7FFF' })"></div>
          <div class="item" style="background-color: #FF7FFF;" @click="addToHistoryAndGoToPlayback({ name: 'Track 4', color: '#FF7FFF' })"></div>
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
      customTracks: [], // Start with an empty list of custom tracks
    };
  },
  methods: {
   goToCustomTrack() {
    this.$router.push('/custom-track-creation');
  },
  goToPlaybackControls(track) {
    let coverImage, trackTitle;

    // Check if `track` is an object (from "TEMPLATES" or "CUSTOM TRACKS")
    if (typeof track === 'object') {
      coverImage = track.color;
      trackTitle = track.name || 'Track Title';
    } else {
      // If `track` is just a color (from "HISTORY")
      coverImage = track;
      trackTitle = 'Track Title'; // Default title for "HISTORY" tracks
    }

    console.log("Navigating to PlaybackControls with:", { coverImage, trackTitle });

    this.$router.push({
      name: 'PlaybackControls',
      params: {
        coverImage,
        trackTitle,
      },
    });
  },
    addToHistoryAndGoToPlayback(track) {
      if (!this.history.includes(track.color)) {
        this.history.unshift(track.color); // Prepend the selected color to the history
        localStorage.setItem('history', JSON.stringify(this.history)); // Save history to localStorage
      }
      this.goToPlaybackControls(track); // Navigate to the Playback Controls screen
    },
    loadHistory() {
      const savedHistory = localStorage.getItem('history');
      if (savedHistory) {
        this.history = JSON.parse(savedHistory);
      }
    },
    addCustomTrack(track) {
      this.customTracks.unshift(track); // Add the new track to the start of the customTracks array
      localStorage.setItem('customTracks', JSON.stringify(this.customTracks)); // Save custom tracks to localStorage
    },
    loadCustomTracks() {
      const savedTracks = localStorage.getItem('customTracks');
      if (savedTracks) {
        this.customTracks = JSON.parse(savedTracks);
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.loadHistory(); // Load history from localStorage
      vm.loadCustomTracks(); // Load custom tracks from localStorage
      if (to.params.newTrack) {
        vm.addCustomTrack(to.params.newTrack); // Add the new custom track if it was just created
      }
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-align: center;
}

.item:hover {
  transform: scale(1.05);
}

.track-name {
  font-size: 0.9em;
  padding: 5px;
}

/* Custom Track Creation Icon Styles */
.custom-track-icon {
  width: 100px;
  height: 100px;
  border: 2px dashed white;
  background-color: rgba(128, 128, 128, 0.5); /* Translucent grey */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.custom-track-icon:hover {
  transform: scale(1.05);
}

.plus-sign {
  color: white;
  font-size: 2em;
  font-weight: bold;
}
</style>
