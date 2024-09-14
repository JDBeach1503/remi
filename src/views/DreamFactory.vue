<template>
  <div class="dream-factory">
    <div class="stars"></div>
    <header>
      <h1 class="title">REMI</h1>
    </header>

    <section class="categories">
      <div class="category">
        <h2>custom tracks</h2>
        <div class="category-items">
          <div class="item" style="background-color: #FF7F7F;"></div>
          <div class="item" style="background-color: #FFBF7F;"></div>
          <div class="item" style="background-color: #FFFF7F;"></div>
          <div class="item" style="background-color: #7FFF7F;"></div>
        </div>
      </div>

      <div class="category">
        <h2>templates</h2>
        <div class="category-items">
          <div class="item" style="background-color: #7FFFFF;"></div>
          <div class="item" style="background-color: #7F7FFF;"></div>
          <div class="item" style="background-color: #BF7FFF;"></div>
          <div class="item" style="background-color: #FF7FFF;"></div>
        </div>
      </div>

      <div class="category">
        <h2>history</h2>
        <div class="category-items">
          <div class="item" style="background-color: #FF7FBF;"></div>
          <div class="item" style="background-color: #FF7F9F;"></div>
          <div class="item" style="background-color: #FF7F7F;"></div>
          <div class="item" style="background-color: #FFBF9F;"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DreamFactory',
};
</script>

<style scoped>
.dream-factory {
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; /* Aligns the content to the left */
  position: relative;
  overflow: hidden; /* Ensures the stars background won't overflow */
  color: #dda0dd; /* Set the text color to light purple/pink */
  padding: 20px;
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

header {
  display: flex;
  justify-content: center;
  width: 100%;
}

.title {
  font-size: 3em; /* Increases the size of the REMI text */
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
  justify-content: flex-start; /* Align items to the left */
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
