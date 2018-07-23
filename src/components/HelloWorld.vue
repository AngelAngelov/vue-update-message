<template>
  <div>
    <div>
      <h3>Choose mode</h3>
      <div class="col-md-12">
        <label class="mr-3">
          <input type="radio" name="mode" value="stack" v-model="mode" /> Stack
        </label>
        <label>
          <input type="radio" name="mode" value="single" v-model="mode" /> Single message
        </label>
      </div>
      <p class="text-left">
        <strong>Single</strong> mode will display only one message on screen and when you create new message the old one will hide.
        <br />
        <strong>Stack </strong> mode will display multiple messages on screen. All messages will be shown on screeen and they will
        dissapear according to their settings (duration, dissmisable, etc...)
      </p>
    </div>
    <div>
      <div class="pb-3 col-md-12">
          <h3>Message text (html)</h3>
          <textarea class="form-control" style="max-height: 300px; max-width: 100%;" v-model="message"></textarea>
      </div>
      <div class="pb-3 row ">
        <h3 class="w-100">Message settings</h3>
        <div class="col-md-3">
          <label>Message type</label>
          <select class="form-control" v-model="msgSettings.type">
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="info">Info</option>
          </select>
        </div>
        <div class="col-md-3">
          <label>Position</label>
          <select class="form-control" v-model="msgSettings.placement" :disabled="msgSettings.showInContainer == 'true'">
            <option value="top">Top</option>
            <option value="top-left">Top left</option>
            <option value="top-right">Top right</option>
            <option value="bottom">Bottom</option>
            <option value="bottom-left">Bottom left</option>
            <option value="bottom-right">Bottom right</option>
          </select>
        </div>
        <div class="col-md-3">
          <label>Duration</label>
          <input type="number" class="form-control" v-model="msgSettings.duration" >
        </div>
        <div class="col-md-3">
          <label>Is sticky</label>
          <select class="form-control" v-model="msgSettings.isSticky">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div class="col-md-3">
          <label>Dismissible</label>
          <select class="form-control" v-model="msgSettings.dismissible">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div class="col-md-3">
          <label>Show in container</label>
          <select class="form-control" v-model="msgSettings.showInContainer">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="showMessage">Show message</button>
        <p>Hit "Show message" button multiple times to display multiple messages</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "stack",
      message: `<h4><span class="fa fa-exclamation-triangle"></span> Test message!</h4>
<p>This is a sample message text ...</p>`,
      msgSettings: {
        type: "success",
        placement: "top",
        isSticky: false,
        dismissible: false,
        duration: 3000,
        showInContainer: false
      }
    };
  },
  methods: {
    showMessage() {
      let settings = {
        placement: this.msgSettings.placement,
        isSticky: this.msgSettings.isSticky == "true",
        dismissible: this.msgSettings.dismissible == "true",
        duration: this.msgSettings.duration
      };

      if (this.msgSettings.showInContainer == "true") {
        settings.element = ".message";
      }

      switch (this.msgSettings.type) {
        case "success":
          this.$message.success(this.message, settings);
          break;
        case "error":
          this.$message.error(this.message, settings);
          break;
        case "info":
          this.$message.info(this.message, settings);
          break;
        default:
          break;
      }
    },
    changeMode() {
      this.$message.setMode(this.mode);
    }
  },
  watch: {
    mode: "changeMode"
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