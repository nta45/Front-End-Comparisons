<script setup>
import {ref} from 'vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
const reset = () => {
  count.value = 0;
};
</script>

<template>
  <div class="greetings">
    <p>Count: {{ count }}</p>
    <div class="counterControls">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
    <br>
    <h3 class="info">This is Vue - nta45</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

p{
  font-size: 1.5rem;
  padding-left: 3rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.counterControls{
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings {
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
