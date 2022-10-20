<template>
  <div class="bg-gray-100">
    <h1 class="text-3xl">User Profile</h1>
    <div class="relative p-10 border-t-4 border-solid border-gray">
      <form>
        <label class="mb-2 text-2xl text-gray-900 dark:text-gray-300"
          >First name</label
        >
        <input
          type="text"
          name="FirstName"
          placeholder="Enter First Name"
          class="w-1/2 p-3 m-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 box-border"
        /><br />
        <label class="mb-2 text-2xl text-gray-900 dark:text-gray-300"
          >Last name</label
        >
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          class="w-1/2 p-3 m-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
        /><br />
        <label class="mb-2 text-2xl text-gray-900 dark:text-gray-300 box-border"
          >Contact</label
        >
        <input
          type="text"
          name="contact"
          placeholder="Enter Contact"
          class="w-1/2 p-3 m-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 box-border"
        /><br />
        <label class="mb-2 text-2xl text-gray-900 dark:text-gray-300"
          >Email</label
        >
        <input
          type="text"
          name="address"
          placeholder="Enter email address"
          class="w-1/2 p-3 m-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 box-border"
        /><br />
        <button
          type="button"
          @click="update"
          class="text-xl text-white bg-blue-500 p-3 m-3 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpDate",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  // methods: {
  //   async updateRestau() {
  //     console.warn(this.restaurant)
  //     const result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, {
  //       name:this.restaurant.name,
  //       address:this.restaurant.address,
  //       contact:this.restaurant.contact,
  //     })
  //     if(result.status == 200) {
  //       this.$router.push({name:'HomePage'})
  //     }
  //   }
  // },
  // async mounted() {
  //     let user = localStorage.getItem('user-info');
  //     if(!user) {
  //         this.$router.push({name: 'SignUp'})
  //     }

  //     const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
  //     console.warn(result.data)
  //     this.restaurant = result.data
  // }
};
</script>

<style></style>
