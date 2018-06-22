<template>
  <div>
    <div class="p-3">
      <button class="btn btn-success" @click="onSuccess">Show 3 seconds success message</button>
      <button class="btn btn-danger ml-3" @click="onError">Show 5 seconds error message</button>
      <button class="btn btn-info ml-3" @click="onInfo">Show sticky info message with close button</button>
    </div>
    <div class="p-3">
      <h5>Show messages in container element</h5>
      <button class="btn btn-success" @click="onSuccessInContainer">Show success</button>
      <button class="btn btn-danger ml-3" @click="onErrorInContainer">Show error</button>
      <button class="btn btn-info ml-3" @click="onInfoInContainer">Show info</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSuccess() {
      const duration = 3;
      this.$message.success(`This will dissapear in ${duration} seconds`, {
        duration: duration * 1000
      });
    },
    onError() {
      const duration = 5;
      this.$message.error(
        `<h2>This will dissapear in ${duration} seconds </h2>`,
        {
          duration: duration * 1000
        }
      );
    },
    onInfo() {
      this.$message.info("<h5>This is a sticky, dismissable message</h5>", {
        dismissable: true,
        isSticky: true
      });
    },
    onSuccessInContainer() {
      const duration = 3;
      this.$message.success(`This will dissapear in ${duration} seconds`, {
        duration: duration * 1000,
        element: ".message"
      });
    },
    onErrorInContainer() {
      const duration = 5;
      this.$message.error(
        `<h2>This will dissapear in ${duration} seconds </h2>`,
        {
          duration: duration * 1000,
          element: ".message"
        }
      );
    },
    onInfoInContainer() {
      this.$message.info("<h5>This is a sticky, dismissable message</h5>", {
        dismissable: true,
        isSticky: true,
        element: ".message"
      });
    }
  }
};
</script>

<style scoped>
</style>
