<template>
  <div>
    <el-popover placement="bottom" title="New Employee" width="200" trigger="click">
      <el-input
        :class="keke"
        placeholder="Gia Minh Khoai To Đẹp Giai."
        v-model="name"
        @keyup.enter.native="createEmployee(name, date)"
      ></el-input>
      <el-button round slot="reference" type="success">Add New Employee</el-button>
    </el-popover>
  </div>
</template>
<style>
.new-style-item {
  width: "212px" !important;
}
</style>
<script>
import firebase from "../configuration/firebaseConfig";
const db = firebase.firestore();

export default {
  name: "AddItems",
  props: {
    callBack: {
      type: Function
    }
  },
  data() {
    return {
      name: "",
      date: new Date().toISOString().slice(0, 10),
      keke: "new-style-item"
    };
  },
  methods: {
    createEmployee(name, date) {
      if (name != "") {
        db.collection("employees")
          .add({ date: date, name: name })
          .then(() => {
            console.log("succcess");
            this.callBack();
          })
          .catch(error => {
            console.error("Error writing document: ", error);
          });
        this.name = "";
      }
    }
  }
};
</script>
