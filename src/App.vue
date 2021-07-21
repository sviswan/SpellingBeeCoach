<template>
  <div class="container-fluid bg-all">
  <div class="row mx-lg-n5">
    <div class="col py-3 px-lg-5">
      <img alt="Bee logo" src="./assets/logo_2.jpg">
    </div>
    <div class="col py-3 px-lg-5">
      <img alt="Bee logo" src="./assets/logo_1.png">
    </div>
  </div>
  <div class="row mx-lg-n5">
    <div class="col py-3 px-lg-5 border bg-green">
      <WordGenerator/>
    </div>
    <div class="col py-3 px-lg-5 border bg-blue">
      <WordProcessor/>
    </div>
    <div class="col py-3 px-lg-5 border bg-yellow">
      <WordStatistics/>
    </div>
  </div>
  </div>
</template>

<script>
import WordGenerator from './components/WordGenerator.vue';
import WordProcessor from './components/WordProcessor.vue';     
import WordStatistics from './components/WordStatistics.vue';

export default {
  name: 'App',
  components: {
    WordGenerator,
    WordProcessor,
    WordStatistics
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 3px solid green;
}
.bg-yellow {
    background-color: #fff3cd !important;
}
.bg-green {
    background-color: #e4ffcd !important;
}
.bg-blue {
    background-color: #cdfcff !important;
}

.bg-all {
    background-color: #ffdbcd !important;
}
</style>
