<template>
  <div class="note">
    <div class="noteControls">
      <label class="btnCheckbox">
        <input class="checkboxEdit" name="edit" type="checkbox" v-model="edit" v-bind:true-value="on" v-bind:false-value="off"/>
        <span>&hellip;</span>
      </label>
      <button v-on:click="$emit('deleteNote', note.id)" class="btnNote" id="btnDelete">&times;</button>
    </div>
    
    <h2 class="noteTitle" v-if="edit===off">{{note.title}}</h2>
    <textarea v-else class="noteTitleEdit" v-model="note.title" ></textarea>
    <p class="noteText" v-if="edit===off">{{note.text}}</p>
    <textarea v-else class="noteTextEdit" v-model="note.text" ></textarea>

  </div>
</template>

<script>
export default {
  data() {
    return {
      on: true,
      off: false,
      edit: false
    }
  },
  props: ['note'],
  name: 'Note',
  components: {
  }
}
</script>

<style scoped>

button,
textarea {
  border: none;
  outline: none;
}

.btnCheckbox{
  display: inline-block;
	margin: 0 5px 0 0;
	user-select: none;
	position: relative;
}

.btnCheckbox input {
  z-index: -1;
	opacity: 0;
	width: 0;
	height: 0;
}

.btnCheckbox span,
.btnNote {
  display: inline-block;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--second-orange-color);
  margin: 0px;
  padding: 0;
}

.btnCheckbox span:hover,
.btnNote:hover,
.btnCheckbox span:enabled {
  background-color: var(--main-orange-color);
}

.noteControls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 80px;
}

.note {
  overflow-wrap: break-word;
  min-width: 300px;
  max-width: 300px;
  max-height: auto;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: var(--shadow-color) 0px 13px 27px -5px,  var(--shadow-color) 0px 8px 16px -8px;
  background-color: white;  
}

.noteText {
  text-align: left;;
}

.noteTitleEdit,
.noteTextEdit {
  box-shadow: var(--second-orange-color) 0px 0px 0px 3px;
  border-radius: 8px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 20px;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  resize: none;
}
.noteTitleEdit {
  height: 20%;
}
.noteTextEdit {
  height: 45%;
}
</style>