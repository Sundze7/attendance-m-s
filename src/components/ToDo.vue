<template>
  <div class="w-full h-full">
    <div class="container pt-10">
      <h1 class="text-3xl m-3">Todo List</h1>

      <div v-if="!isEditing">
        <input
          type="text"
          v-model="todo"
          placeholder="Enter Task"
          class="w-1/2 p-3 m-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
        />

        <input
          type="submit"
          value="Add Task"
          @click="storeTodo"
          class="border p-3 bg-blue-500 rounded-lg text-white"
        />
      </div>
      <div v-else>
        <input
          type="text"
          v-model="todo"
          class="p-3 m-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
        />

        <input
          type="submit"
          value="Update Task"
          @click="updateTodo"
          class="border p-3 bg-blue-500 rounded-lg text-white"
        />
      </div>

      <div
        class="max-w-lg w-full max-h-full bg-gray-100 p-6 rounded-md overflow-auto"
      >
        <ol class="list-decimal">
          <hr class="pb-10 m-3" />
          <h1 class="text-2xl">Added Tasks</h1>
          <li
            v-for="(todo, index) in todos"
            :key="todo.index"
            class="m-2 box-border"
          >
            {{ todo }}

            <span class="m-2 ml-8"
              ><button
                @click="editTodo(index, todo)"
                class="border rounded px-2 mx-2 bg-green-300"
              >
                Edit
              </button>

              <button
                @click="deleteTodo(index)"
                class="border text-white px-2 rounded bg-red-500"
              >
                Delete
              </button></span
            >
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      isEditing: false,
      selectedIndex: null,
      todo: "",
      todos: ["Go to the market", "Buy new course"],
    };
  },

  methods: {
    storeTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },

    editTodo(index, todo) {
      this.todo = todo;
      this.selectedIndex = index;
      this.isEditing = true;
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.isEditing = false;
      this.todo = "";
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style></style>
