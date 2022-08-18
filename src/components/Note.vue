<template>
  <div class="note">
    <h2>{{note.title}}</h2>
    <p>{{note.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['note'],
  name: 'Note',
}
</script>

<style>
.note {
  overflow-wrap: break-word;
  max-width: 300px;
  max-height: auto;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;;
  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;  */
  border: 2px solid rgb(0, 0, 0, 0.10);
}
.note:hover {
  box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 3px, rgba(0, 0, 0, 0.20) 0px 1px 2px; 
}
</style>