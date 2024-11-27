<template>
  <div id="app">
    <h1>Kvíz</h1>
    <form @submit.prevent="evaluateTest">
      <div class="question">
        <p>1. Működik az alkalmazás?</p>
        <label for="q1">Igaz</label>
        <input name="q1" type="radio" v-model="answers.q1" value="true"></input> 
        <label for="q1">Hamis</label>
        <input name="q1" type="radio" v-model="answers.q1" value="false"> </input> 
      </div>

      <div class="question">
        <p>2. Melyik a legnépszerűbb programozási nyelv?</p>
        <select v-model="answers.q2">
          <option disabled value="">Válassz...</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="C#">C#</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <div class="question">
        <p>3. Ytong ...</p>
        <input type="text" v-model="answers.q3" />
      </div>

      <div class="question">
        <p>4. Válassz két alapelemet!</p>
        <label>
          <input type="checkbox" value="Hidrogen" v-model="answers.q4" /> Hidrogén
        </label>
        <label>
          <input type="checkbox" value="Oxigen" v-model="answers.q4" /> Oxigén
        </label>
        <label>
          <input type="checkbox" value="Arany" v-model="answers.q4" /> Arany
        </label>
        <label>
          <input type="checkbox" value="Szen" v-model="answers.q4" /> Szén
        </label>
      </div>

      <button type="submit">Beküldés</button>
    </form>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Eredmény</h2>
        <p>Összpontszám: {{ score }}/5</p>
        <button @click="resetTest">Új teszt</button>
        <button @click="exitTest">Bezár</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const answers = ref({
  q1: "",
  q2: "",
  q3: "",
  q4: [],
});

const correctAnswers = ref({
  q1: "true",
  q2: "C#",
  q3: "Imre",
  q4: ["Hidrogen", "Oxigen"],
});

const score = ref(0);
const showModal = ref(false);

const evaluateTest = () => {
  console.log(answers.value)
  score.value = 0;

  if (answers.value.q1 == correctAnswers.value.q1) {
    score.value += 1;
  }

  if (answers.value.q2 == correctAnswers.value.q2) {
    score.value += 1;
  }

  if (answers.value.q3.toUpperCase == correctAnswers.value.q3.toUpperCase) {
    score.value += 1;
  }

  if (answers.value.q4.length ==2  && 
      correctAnswers.value.q4.every(elem => answers.value.q4.includes(elem)) && 
      answers.value.q4.length == correctAnswers.value.q4.length) {
    score.value += 2;
  }

  showModal.value = true;
};


const resetTest = () => {
  answers.value = { q1: "", q2: "", q3: "", q4: [] };
  score.value = 0;
  showModal.value = false;
};
const exitTest = () => {
  score.value = 0;
  showModal.value = false;
};

</script>


<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}
.question {
  margin-bottom: 20px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: grey;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
body {
    font-family: Arial, sans-serif;
    background-color: black;
    color: white;
}

h1 {
    margin: 0;
}

button {
    background-color: #0074d9;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #003D6B;
}

</style>