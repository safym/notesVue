<template>
  <div class="noteItems">
    <Note v-for="note in notes" 
      v-bind:note="note" 
      v-on:deleteNote="deleteNote"/>
  </div>
</template>

<script>
import Note from './Note.vue';

export default {
  props: ['notes'],
  name: 'NotesItems',
  components: {
    Note
  },
  methods: {
    deleteNote(id) {
      this.$emit('deleteNote', id)
    }
  }
}
</script>

<style>
.noteItems {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1%;
}
</style>