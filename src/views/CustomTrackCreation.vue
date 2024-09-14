<template>
  <div class="custom-track-creation">
    <h1 class="title">Track Generator</h1>

    <!-- Ambiance Selection -->
    <div class="ambiance-section">
      <label>Ambiance ({{ selectedAmbiances.length }}/3):</label>
      <div class="ambiance-tags">
        <!-- Display pink bubbles for selected ambiances -->
        <div
          v-for="(ambiance, index) in selectedAmbiances"
          :key="index"
          class="ambiance-tag selected"
          @click="removeAmbiance(index)"
        >
          {{ ambiance }} <span class="remove">x</span>
        </div>
        <!-- Display yellow bubbles for available ambiances -->
        <div
          v-for="(ambiance, index) in availableAmbiances"
          :key="index"
          class="ambiance-tag available"
          @click="moveToSelected(index)"
        >
          {{ ambiance }}
        </div>
      </div>
    </div>

    <!-- Prompt -->
    <div class="prompt-section">
      <label for="prompt">Prompt:</label>
      <textarea id="prompt" v-model="prompt" @keydown.enter.prevent="addAmbianceFromPrompt" placeholder="Enter your ambiance..."></textarea>
    </div>

    <!-- Length -->
    <div class="length-section">
      <label>Length:</label>
      <div class="length-display">00:00:00</div>
    </div>

    <!-- Track Name and Color Selection -->
    <div class="track-details-section">
      <label for="trackName">Track Name:</label>
      <input type="text" id="trackName" v-model="trackName" required />

      <label for="trackColor">Pick a Color:</label>
      <input type="color" id="trackColor" v-model="trackColor" required />
    </div>

    <!-- Generate Button -->
    <button @click="generateTrack">Generate</button>
  </div>
</template>

<script>
export default {
  name: "CustomTrackCreation",
  data() {
    return {
      selectedAmbiances: ["white noise", "rain", "talking"], // Pre-selected for example
      availableAmbiances: ["classroom", "waves", "crickets", "wind", "fireplace", "birds", "city traffic"],
      prompt: "",
      trackName: "",
      trackColor: "#FF7F7F", // Default color
    };
  },
  methods: {
    addAmbianceFromPrompt() {
      if (this.prompt.trim()) {
        if (this.selectedAmbiances.length < 3) {
          this.selectedAmbiances.push(this.prompt.trim());
        } else {
          this.availableAmbiances.push(this.prompt.trim());
        }
        this.prompt = ""; // Clear the prompt input
      }
    },
    addAmbiance(ambiance) {
      if (this.selectedAmbiances.length < 3 && !this.selectedAmbiances.includes(ambiance)) {
        this.selectedAmbiances.push(ambiance);
      }
    },
    removeAmbiance(index) {
      this.selectedAmbiances.splice(index, 1);
    },
    moveToSelected(index) {
      if (this.selectedAmbiances.length < 3) {
        this.selectedAmbiances.push(this.availableAmbiances.splice(index, 1)[0]);
      }
    },
    generateTrack() {
      const newTrack = {
        name: this.trackName,
        color: this.trackColor,
        ambiances: this.selectedAmbiances,
        prompt: this.prompt,
      };
      this.$router.push({
        name: "DreamFactory",
        params: {
          newTrack,
        },
      });
    },
  },
};
</script>

<style scoped>
.custom-track-creation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: url('@/assets/stars.png') repeat;
  background-size: cover;
  color: white;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2.5em;
  color: #dda0dd;
  margin-bottom: 20px;
}

.ambiance-section {
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

.ambiance-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ambiance-tag {
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9em;
}

.selected {
  background-color: #dda0dd;
  color: white;
}

.available {
  background-color: #ffd700;
  color: black;
}

.remove {
  margin-left: 5px;
  color: white;
  cursor: pointer;
}

.prompt-section,
.length-section,
.track-details-section {
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 1em;
  height: 100px;
}

.length-display {
  font-size: 1.5em;
  color: #dda0dd;
}

.track-details-section input[type="text"],
.track-details-section input[type="color"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  background-color: #ff7f7f;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  color: white;
}

button:hover {
  background-color: #ff4f4f;
}
</style>
