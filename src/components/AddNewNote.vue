<template>
  <form @submit.prevent="onSubmit" class="addNewNote">
    <input class="newNoteText" type="text" placeholder="title here..." v-model="title">
    <textarea class="newNoteTitle" rows=5 type="text" placeholder="text here..." v-model="text"></textarea>
    <button type="submit" class="btnAddNote">Add note</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim() && this.text.trim()){
        console.log("submit");
        console.log(this.title);
        console.log(this.text);
        const newNote = {
          id: Date.now(), 
          title: this.title, 
          text: this.text
        }

        this.$emit("addNewNote", newNote)

        this.title = this.text = '';
      }
    }
  }
}

</script>

<style scoped>

input,
textarea,
button {
  margin: 0;
  border: none;
  outline: none;
}

.addNewNote {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newNoteText,
.newNoteTitle {
  width: 50%;
}

.newNoteText,
.newNoteTitle {
  display: block;

  margin-top: 10px;
  padding: 10px;
  
  font-size: 20px;

  color: black;
  background-color: var(--second-purple-color);
  border-radius: 5px;

  transition: all 0.3s;
}

.newNoteText:focus,
.newNoteTitle:focus {
  background-color: var(--third-purple-color);
}
.newNoteTitle {
  resize: none;
}
.btnAddNote {
  width: 15%;
  background: none;
  background-color: white;
  border-radius: 8px;
 
  color: #37205f;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 20px;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
}
.btnAddNote:active {
  background-color: #F7F7F7;
  border-color: #000000;
  transform: scale(.96);
}

@media screen and (max-width: 1200px) {
  .newNoteText,
  .newNoteTitle,
  .btnAddNote {
    width: 100%;
  }

}
</style>