<template>
  <div class="note">
    <div class="noteControls">
      
      <label class="btnCheckbox">
        <input class="checkboxEdit" name="edit" type="checkbox" v-model="edit" v-bind:true-value="on" v-bind:false-value="off"/>
        <span>&hellip;</span>
      </label>

      <!-- <button class="btnNote" id="btnEdit">&hellip;</button>
      <button class="btnNote" id="btnDelete">&times;</button> -->
    </div>
    
    <h2 v-if="edit===off">{{note.title}}</h2>
    <textarea v-else class="noteTitle" v-model="note.title" @input="resize"></textarea>
    <p v-if="edit===off">{{note.text}}</p>
    <textarea v-else class="noteText" v-model="note.text" @input="resize"></textarea>

    <!-- <ResizeAuto v-bind:note="note"/> -->
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

  },
  methods: {
    resize(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.setAttribute(
        "style",
        "height",
        `${this.$el.scrollHeight}px`
      );
    });
  },
  render() {
    return this.$scopedSlots.default({
      resize: this.resize
    });
  }
}
</script>

<style>
.btnCheckbox{
  display: inline-block;
	margin: 0 5px 0 0;
	user-select: none;
	position: relative;
}

.btnCheckbox input {
  z-index: -1;
	opacity: 0;
	display: block;
	width: 0;
	height: 0;
}

.btnCheckbox span {
  display: inline-block;
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgb(56, 56, 56);
  margin-left: 10px;
}
/* .noteControls{
  margin-left: auto;
  width: 80px;
} */
.btnNote{
  font-size: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgb(56, 56, 56);
  margin-left: 10px;
}
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
.noteTitle,
.noteText {
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
  margin-top: 20px;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  resize: none;
}
</style>