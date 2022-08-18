<template>
  <form @submit.prevent="onSubmit" class="addNewNote">
    <input type="text" placeholder="title here..." v-model="title">
    <textarea rows=5 type="text" placeholder="text here..." v-model="text"></textarea>
    <button type="submit" class="btnAddNote">Add</button>
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
          id: 10, 
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

<style>
.addNewNote {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  width: 90%;
  margin-bottom: 10px;
}

input,
textarea {
  font-family: 'Courier New', monospace;
  color: #333;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  border: 2px solid lightgrey;
  width: 90%;
  display: block;
  transition: all 0.3s;
}
textarea {
  resize: none;
}
.btnAddNote {
  width: 50%;
  background-color: #FFFFFF;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
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
</style>