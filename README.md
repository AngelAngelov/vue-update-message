# vue-update-message
Small Vuejs plugin to show update messages to the user. 
Maggage text support HTML, so it can be styled the way you want. 

### Browser support

Chome, Firefox, Edge, IE(10+)

### Install

```javascript
import Vue from 'vue';
import message from 'vue-update-message';

Vue.use(message);
...
```
### Usage

```javascript
//Success message
this.$message.success("This will dissapear in <strong>3 seconds</strong>", {
    duration: 3000
});
```

```javascript
//Error message
this.$message.error("<h2>This will dissapear in 5 seconds </h2>",{
    duration: 5000
});
```

```javascript
//Info message
this.$message.info("<h5>This is a sticky, dismissable message</h5>", {
    dismissable: true,
    isSticky: true
});
```

### Props

#### Service props
**These props can be set before the plugin is initialized.**

```javascript
import Vue from 'vue';
import message from 'vue-update-message';

const props = {
    position: 'fixed',
    width: '20vw',
    placement: 'top'
}

Vue.use(message, props);
...
```
| Prop          | Default                | Options         |
| ------------- |:----------------------:| ---------------:|
| position      | fixed                  | fixed, absolute |
| width         | 20vw (20% sceen width) | any css width   |   
| placement     | top                    |   top, bottom   |

#### Message props
**These props can be set when the message is created.**
```javascript
this.$message.info("some message", {
    dismissable: true,
    isSticky: true
});
```

| Prop          | Default  | Options      |
| ------------- |:--------:| ------------:|
| duration      | 3000     |              |
| dismissable   | false    | true, false  |   
| isSticky      | false    | true         |
| container     |          | css selector |