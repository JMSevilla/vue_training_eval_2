<template>
  <div>
    <Navbar />
    <div style="margin-top: 100px;" class="container">
      <el-card shadows="always">
        <h3>Data List</h3>
        <el-button
        type="success"
        plain
        size="medium"
        style="float: right;
        margin-top: 5px; margin-bottom: 5px;"
        >Add new data</el-button>
        <Table style="margin-top: 5px;
         margin-bottom: 5px;" />
      </el-card>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar"
import Table from "@/components/Table/Table"
export default {
  components: {
    Navbar, Table
  }
}
</script>