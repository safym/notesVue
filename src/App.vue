<template>
  <h1>My notes</h1>
  <AddNewNote @addNewNote = "addNewNote"/>
  <hr />
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
#app {
  font-family: Courier New, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
hr {
  height: 1px;
  border-radius: 10px;
  background-color: black;
  border: none;
  margin: 25px;
}
h1 {
  font-size: 50px;
  margin: 0;
  color:#000000;
  text-decoration: underline;
  margin-bottom: 20px;
}
</style>
