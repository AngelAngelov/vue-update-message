import MessageService from '../modules/message-service';

export default {
    install: function (Vue, options) {
        let that = this;
        //this.defaultOptions = Object.assign(this.defaultOptions, options || {});
        MessageService.init(options)

        Vue.prototype.$message = {
            success(message, userOptions) {
                const uiMessage = MessageService.show({
                    message,
                    type: 'success',
                    userOptions
                });
            },
            error(message, userOptions) {
                const uiMessage = MessageService.show({
                    message,
                    type: 'danger',
                    userOptions
                });
            },
            info(message, userOptions) {
                const uiMessage = MessageService.show({
                    message,
                    type: 'info',
                    userOptions
                });
            }
        }
    }
}