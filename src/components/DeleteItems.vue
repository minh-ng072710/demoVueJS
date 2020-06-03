<template>
      <el-button size="mini" type="danger" @click="deleteEmployee(id)">Delete</el-button>
</template>

<script>
import firebase from "../configuration/firebaseConfig";
const db = firebase.firestore();

export default {
  name: "UpdateItems",
  props: {
    id: Object,
    callBack: Function
  },
  methods: {
    deleteEmployee(id) {
      db.collection("employees")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.callBack();
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    }
  },
  mounted() {
    this.readEmployees();
  }
};
</script>
