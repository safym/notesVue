<template>
  <form class="addNewNote">
    <input type="text" placeholder="title here...">
    <textarea rows=5 type="text" placeholder="text here..."></textarea> 
    <button type="submit" class="btnAddNote">Add</button>
  </form>
</template>

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
.btnAddNote {
  width: 50%;
  border-radius: 10px;
}

</style>