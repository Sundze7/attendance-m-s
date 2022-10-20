<template>
  <div class="sidebar w-1/5" :style="{ width: sidebarWidth }">
    <h1 class="pb-10 m-4">
      <span v-if="collapsed" class="text-5xl">
        <div>T</div>
        <div>U</div>
        <div>A</div>
        <div>R</div>
      </span>
      <span v-else class="text-5xl">Tekstedia User Attendance Record</span>
    </h1>
    <sidebar-links to="/" icon="fas fa-home fa-lg pr-4">Home</sidebar-links>
    <sidebar-links to="/dashboard" icon="fas fa-columns fa-lg pr-4"
      >Dashboard</sidebar-links
    >
    <sidebar-links to="/task" icon="fas fa-chart-bar fa-lg pr-4"
      >Task</sidebar-links
    >
    <sidebar-links to="/profileimage" icon="fas fa-user fa-lg pr-4"
      >Profile</sidebar-links
    >

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SidebarLinks from "./SidebarLinks.vue";

export default {
  props: {},
  components: { SidebarLinks },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #137cd8;
  --sidebar-item-hover: #38637d;
  --sidebar-item-active: #073c4b;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 00.2s linear;
}
</style>
