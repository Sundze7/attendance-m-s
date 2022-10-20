<template>
  <div class="flex-auto p-8">
    <h1>History Record</h1>
    <table class="history">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Day</th>
        <th>TimeIn</th>
        <th>TimeOut</th>
      </tr>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Monday</td>
        <td>8:30</td>
        <td>17:00</td>
      </tr>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Monday</td>
        <td>8:30</td>
        <td>17:00</td>
      </tr>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Monday</td>
        <td>8:30</td>
        <td>17:00</td>
      </tr>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Monday</td>
        <td>8:30</td>
        <td>17:00</td>
      </tr>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>Monday</td>
        <td>8:30</td>
        <td>17:00</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
};
</script>

<style scoped>
.history {
  justify-content: center;
}
th,
td {
  padding: 15px;
}
</style>
