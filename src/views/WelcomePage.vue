<template>
  <div class="welcome">
    <div class="stars"></div>
    <h1 class="greeting">Sweet Dreams, Jackson</h1>
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
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden; 
  color: #dda0dd; 
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

h1.greeting {
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.9; 
}

button.dream-generator {
  background-color: #dda0dd; 
  border: none;
  border-radius: 50px; 
  color: white;
  padding: 15px 40px;
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

button.dream-generator:hover {
  background-color: #e6a8e6; 
}

p.footer {
  font-size: 2.5em;
  margin-bottom: 10vh; 
  opacity: 0.9; 
}
</style>
