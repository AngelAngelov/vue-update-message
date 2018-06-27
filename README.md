# vue-update-message
Small Vuejs plugin to show update messages to the user. 

Maggage text support HTML, so it can be styled the way you want. 

### Browser support

Chome, Firefox, Edge, IE(10+)

### Install

```javascript
import Vue from 'vue';
import messageService from 'vue-update-message';

Vue.use(messageService);
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
These props can be set before the plugin is initialized.

```javascript
import Vue from 'vue';
import messageService from 'vue-update-message';

const props = {
    position: 'fixed',
    width: '20vw',
    placement: 'top'
}

Vue.use(messageService, props);
...
```
| Prop              | Default                                                | Options          |
| ----------------- |:------------------------------------------------------:| ----------------:|
| position          | fixed                                                  | fixed, absolute  |
| width             | 20vw (20% sceen width)                                 | any css width    |   
| mode              | single                                                 | single, stack    |
| successText       | '#155724' (default Bootstrap success text color)       | any css color    |
| successBackground | '#d4edda' (default Bootstrap success background color) | any css color    |
| successBorder     | '#c3e6cb' (default Bootstrap success border)           | any css color    |
| errorText         | '#721c24' (default Bootstrap danger text color)        | any css color    |
| errorBackground   | '#f8d7da' (default Bootstrap danger background color)  | any css color    |
| errorBorder       | '#f5c6cb' (default Bootstrap danger border)            | any css color    |
| infoText          | '#0c5460' (default Bootstrap info text color)          | any css color    |
| infoBackground    | '#d1ecf1' (default Bootstrap info background color)    | any css color    |
| infoBorder        | '#bee5eb' (default Bootstrap info border)              | any css color    |

>**Single** mode will display only one message on screen and when you create new message the old one will hide. 
>
>**Stack** mode will display multiple messages on screen. All messages will be shown on screeen and they will dissapear according to their settings (duration, dissmisable, etc...)

You can easily override the message dafault color, but it is possible only before plugin inicialization i.e. you can not change the color dynamically when creating a message.

```javascript
import Vue from 'vue';
import messageService from 'vue-update-message';

const props = {
    position: 'fixed',
    width: '20vw',
    placement: 'top',
    successText: '#2e8441',
    successBackground: '#e0dc68',
    successBorder: '#52cc6d'
}

Vue.use(messageService, props);
...
```

Here is the result: 

![alt text](https://github.com/AngelAngelov/vue-update-message/blob/master/src/assets/success-color-change.png "Success message color change")

#### Message props
These props can be set when the message is created.
```javascript
this.$message.info("some message", {
    dismissable: true,
    isSticky: true
});
```

| Prop          | Default  | Options                                                    |
| ------------- |:--------:| ----------------------------------------------------------:|
| duration      | 3000     |                                                            |
| dismissable   | false    | true, false                                                |   
| isSticky      | false    | true                                                       |
| container     |          | css selector                                               |
| placement     | top      | top, top-left, top-right, bottom, bottom-left, bottom-right|
