<template>

  <div class="header">
    <h1>My notes</h1>
    <AddNewNote @addNewNote = "addNewNote"/>
  </div>

  <NoteItems v-bind:notes='notes'  @deleteNote="deleteNote"/>
  
</template>

<script>
import NoteItems from './components/NoteItems.vue';
import AddNewNote from './components/AddNewNote.vue'

export default {
  data() {
    return {
      notes:
        [
          { id: 1, title: "Новая встреча", text: "1 августа в 16 00 в кофейне с мишей!" },
          { id: 2, title: "Красивая цитата... заставляет задуматься", text: "Кто знает — не говорит. Кто говорит — не знает. (Лао-цзы)" },
          { id: 3, title: "Опять дамашка", text: "Сделать 1-9 задание из 4 параграфа (78-90 страницы)" },
          { id: 4, title: "Рецепт фунчозы в овощами (20мин)", text: "Залить лапшу на 6 минут кипятком и на это время поставить на сковороду нарезанное мясо, далее напрезать сельдерей, болгарский перец можно огурец и все смешать с мясом и готвой лапшой. залить соевым соусом и можно добавить острый соус." },
          { id: 5, title: "Фильм о котором все говорят...", text: "Драйв (2011) Великолепный гонщик — при свете дня он выполняет каскадерские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт — и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего — виртуозно уходить от погони…" },
          { id: 6, title: "Трек который в такси играл", text: "Plenka - Closed" }
        ]
    }
  },
  methods: {
    addNewNote(newNote) {
      this.notes.unshift(newNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
    }
  },
  name: 'App',
  components: {
    NoteItems,
    AddNewNote
  }
}
</script>

<style>
:root {
  --main-orange-color: #FFD8BE;
  --second-orange-color: #fff2e4;
  --third-orange-color: #fff9f3;

  --main-purple-color: #b0a2ff;
  --second-purple-color: #c9c0ff;
  --third-purple-color: #e4dfff;

  --shadow-color: #24005e38;
  /* --third-purple-orange: #fff9f3; */

  --background-color: #F8F7FF;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto Flex', sans-serif;
}

body,
html {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: black;
  background-color: var(--third-orange-color);
}

.header {
  padding: 20px;
  background-color: var(--main-purple-color);
  border-radius: 0 0px 20px 20px;
  box-shadow: var(--shadow-color) 0px 13px 27px -5px,  var(--shadow-color) 0px 8px 16px -8px;
}

h1 {
  font-size: 50px;
  margin: 0;
  color:#000000;
  margin-bottom: 20px;
}
</style>
