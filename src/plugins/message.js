import MessageService from '../modules/message-service';

export default {
    install: function (Vue, options) {
        MessageService.init(options)

        Vue.prototype.$message = {
            success(message, userOptions) {
                MessageService.show({
                    message,
                    type: 'success',
                    userOptions
                });
            },
            error(message, userOptions) {
                MessageService.show({
                    message,
                    type: 'error',
                    userOptions
                });
            },
            info(message, userOptions) {
                MessageService.show({
                    message,
                    type: 'info',
                    userOptions
                });
            },
            setMode(mode) {
                MessageService.setMode(mode);
            }
        }
    }
}