<template>
  <div class="custom-track-creation">
    <div class="stars"></div>
    <h1 class="title">Track Generator</h1>

    <section class="ambiance-section">
      <label>Ambiance ({{ pinkAmbiances.length }}):</label>
      <div class="selected-ambiance">
        <span
          class="tag"
          v-for="(ambiance, index) in pinkAmbiances"
          :key="index"
        >
          {{ ambiance }}
          <span class="remove" @click="removePinkAmbiance(index)">x</span>
        </span>
      </div>
      <div class="available-ambiance">
        <span
          class="tag available"
          v-for="(ambiance, index) in yellowAmbiances"
          :key="index"
          @click="moveToPink(index)"
        >
          {{ ambiance }}
        </span>
      </div>
    </section>

    <section class="prompt-section">
      <label for="prompt">Prompt:</label>
      <input
        id="prompt"
        v-model="newAmbiance"
        @keyup.enter="addNewAmbiance"
        placeholder="Type an ambiance and press Enter"
      />
    </section>

    <section class="length-section">
      <label for="length">Length:</label>
      <div id="length" class="length-display">00:00:00</div>
    </section>

    <button class="generate-button">Generate</button>
  </div>
</template>

<script>
export default {
  name: 'CustomTrackCreation',
  data() {
    return {
      pinkAmbiances: [],
      yellowAmbiances: [
        'classroom',
        'waves',
        'crickets',
        'wind',
        'fireplace',
        'birds',
        'city traffic',
      ],
      newAmbiance: '',
    };
  },
  methods: {
    addNewAmbiance() {
      const ambiance = this.newAmbiance.trim();
      if (ambiance) {
        if (this.pinkAmbiances.length < 3) {
          this.pinkAmbiances.push(ambiance);
        } else {
          this.yellowAmbiances.push(ambiance);
        }
        this.newAmbiance = '';
      }
    },
    moveToPink(index) {
      if (this.pinkAmbiances.length < 3) {
        const ambiance = this.yellowAmbiances.splice(index, 1)[0];
        this.pinkAmbiances.push(ambiance);
      }
    },
    removePinkAmbiance(index) {
      const ambiance = this.pinkAmbiances.splice(index, 1)[0];
      this.yellowAmbiances.push(ambiance);
    },
  },
};
</script>

<style scoped>
.custom-track-creation {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
  color: #dda0dd; /* Light purple/pink color */
  font-family: 'Arial', sans-serif;
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

.title {
  font-size: 2.5em;
  margin: 20px 0;
  text-align: center;
}

.ambiance-section,
.prompt-section,
.length-section {
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

.ambiance-section label,
.prompt-section label,
.length-section label {
  font-size: 1.2em;
  margin-bottom: 10px;
  display: block;
  text-transform: capitalize; /* Ensures first letter is capitalized */
}

.selected-ambiance,
.available-ambiance {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.tag {
  background-color: #e6a8e6;
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
}

.remove {
  margin-left: 10px;
  font-size: 0.8em;
  cursor: pointer;
}

.available {
  background-color: #d4b100; /* Darker yellow shade */
}

#prompt {
  width: 100%;
  padding: 10px;
  border: 2px solid #dda0dd;
  border-radius: 10px;
  font-size: 1em;
  color: #dda0dd;
}

.length-section {
  display: flex;
  align-items: center;
}

.length-display {
  font-size: 1.5em;
  margin-left: 10px;
  color: #dda0dd;
}

.generate-button {
  background-color: #dda0dd;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 15px 40px;
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
}

.generate-button:hover {
  background-color: #e6a8e6;
}
</style>
