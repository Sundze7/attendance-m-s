<template>
  <section class="bg-gray-100">
    <input
      type="file"
      accept="image/*"
      class="hidden"
      ref="file"
      @change="change"
    />
    <div class="relative inline-block top-10">
      <img
        :src="src"
        class="flex h-80 w-80 rounded-full object-cover items-right"
      />
      <div
        class="absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex items-center justify-center"
      >
        <button
          @click="browse()"
          class="rounded-full hover:bg-white hover:bg-opacity-25 p-4 focus:outline-none transition duration-200"
        ></button>
      </div>
    </div>
    <div class="py-14">
      <span class="mr-10"
        ><button
          @click="browse()"
          class="text-xl p-3 text-white bg-blue-500 rounded"
        >
          Change Pic
        </button></span
      >
      <span
        ><button
          @click="remove()"
          class="text-xl p-3 text-white bg-red-500 rounded"
        >
          Remove Pic
        </button></span
      >
    </div>
    <up-date />
  </section>
</template>

<script>
import UpDate from "./UpDate.vue";

export default {
  name: "ProfileImage",
  components: {
    UpDate,
  },
  props: {
    value: File,
    defaultSrc: String,
  },
  data() {
    return {
      src: null,
      file: null,
    };
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    remove() {
      this.file = null;
      this.src = this.defaultSrc;
      this.$emit("input", this.file);
    },
    change(e) {
      this.file = e.target.files[0];
      this.$emit("input", this.file);
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        this.src = e.target.result;
      };
    },
  },
};
</script>

<style scoped>
.logo {
  background: #333;
  margin: 5px 5px;
}
</style>
