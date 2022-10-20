<template>
  <div>
    <timer-comp :timer="formattedTime" :state="timerState" />
  </div>
</template>

<script>
import TimerComp from "./TimerComp.vue";

export default {
  name: "HelloWorld",
  components: {
    TimerComp,
  },
  data() {
    return {
      timerState: "stopped",
      currentTimer: 0,
      formattedTime: "00:00:00",
      ticker: undefined,
    };
  },
};
</script>

<style scoped></style>
