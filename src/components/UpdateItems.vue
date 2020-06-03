<template>
    <el-popover placement="bottom" title="Edit Employee" width="200" trigger="click">
      <el-input placeholder="John Doe" v-model="name" @blur="updateEmployee(id, name, date)"></el-input>
      <el-button size="mini" slot="reference">Edit</el-button>
    </el-popover>
</template>

<script>
import firebase from "../configuration/firebaseConfig";
const db = firebase.firestore();

export default {
  name: "UpdateItems",
  props: { 
    id: Object,
    name: Object,
    date: Object,
    callBack: Object,
  },
  methods: {
    updateEmployee(id, name, date) {
      db.collection("employees")
        .doc(id)
        .update({
          name: name,
          date: date
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.callBack() 
        })
        .catch(error => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  }
};
</script>
