<template>
  <div class="welcome">
    <div class="stars"></div>
    <h1 class="greeting">Sweet Dreams, User</h1>
    <button class="dream-generator" @click="goToDreamFactory">Dream Generator</button>
    <p class="footer">REMI</p>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    goToDreamFactory() {
      this.$router.push('/dream-factory');
    }
  }
};
</script>

<style scoped>
.welcome {
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden; /* Ensures the stars background won't overflow */
  color: #dda0dd; /* Set the text color to light purple/pink */
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/stars.png') repeat;
  background-size: cover; /* Ensures the stars background covers the entire div */
  z-index: -1; /* Keeps the background behind all other elements */
}

h1.greeting {
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.9; /* Make the text less transparent */
}

button.dream-generator {
  background-color: #dda0dd; /* Light purple close to pink */
  border: none;
  border-radius: 50px; /* Elongated oval shape */
  color: white;
  padding: 15px 40px; /* Adjust padding to elongate the button */
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

button.dream-generator:hover {
  background-color: #e6a8e6; /* Slightly lighter on hover */
}

p.footer {
  font-size: 2.5em;
  margin-bottom: 10vh; /* Adjust margin to position the footer */
  opacity: 0.9; /* Make the text less transparent */
}
</style>
