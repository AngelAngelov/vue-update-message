<template>
  <div>
    <div class="p-3">
      <button class="btn btn-success" @click="topLeft">top left</button>
      <button class="btn btn-success ml-3" @click="topCenter">top center</button>
      <button class="btn btn-danger ml-3" @click="topRight">top right</button>
      <button class="btn btn-info ml-3" @click="bottomLeft">bottom left</button>
      <button class="btn btn-info ml-3" @click="bottomCenter">bottom center</button>
      <button class="btn btn-info ml-3" @click="bottomRight">bottom right</button>
    </div>
    <div class="p-3">
      <button class="btn btn-success ml-3" @click="topCenter5sec">top center - duration 5sec</button>
      <button class="btn btn-info ml-3" @click="bottomCenter3sec">bottom center - duration 3 sec</button>
    </div>
    <div class="p-3">
      <h4>Show messages in container element</h4>
      <button class="btn btn-success" @click="onSuccessInContainer">Show success</button>
      <button class="btn btn-danger ml-3" @click="onErrorInContainer">Show error</button>
      <button class="btn btn-info ml-3" @click="onInfoInContainer">Show info</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    topLeft() {
      const duration = 3;
      this.$message.success("top left", {
        dismissable: true,
        isSticky: true,
        placement: "top-left"
      });
    },
    topCenter() {
      this.$message.success("top-center", {
        dismissable: true,
        isSticky: true,
        placement: "top"
      });
    },
    topCenter5sec() {
      this.$message.success(
        "This <strong>message</strong> will dissapear in <strong>5 seconds</strong>",
        {
          duration: 5000,
          placement: "top"
        }
      );
    },
    topRight() {
      this.$message.error("top right", {
        dismissable: true,
        isSticky: true,
        placement: "top-right"
      });
    },
    bottomRight() {
      this.$message.info("bottom-right", {
        dismissable: true,
        isSticky: true,
        placement: "bottom-right"
      });
    },
    bottomLeft() {
      this.$message.info("bottom-left", {
        dismissable: true,
        isSticky: true,
        placement: "bottom-left"
      });
    },
    bottomCenter() {
      this.$message.info("bottom-center", {
        dismissable: true,
        isSticky: true,
        placement: "bottom"
      });
    },
    bottomCenter3sec() {
      this.$message.info("<h4>This message will dissapear in 3 seconds</h4>", {
        duration: 3000,
        placement: "bottom"
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
.ml-3 {
  margin-left: 1rem;
}
.p-3 {
  padding: 1rem;
}
</style>
