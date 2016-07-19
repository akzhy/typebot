# typebot
Javascript library for typing animation 

**Usage:**

include 
```html
<script src="typebot.js"></script>
```

And in js

```javascript
new typebot(element,speed,delay,text,blinker,paused)
```

The argument `element` is the element to be selected eg: `"#myElement"`,`".myElement"`
`speed` is the typing speed and `delay` is the delay between the typing of each letter 
`text` must be an array containing the text to be typed. Each element in the array acts as a new line.
`blinker`(boolean) set to `true` shows the blinker and set to `false` hides the blinker.
`paused`(boolean) set to `true` will pause the typing and will not start typing until `.start()` is called.

Methods:

`.done(function)` executes after all the texts are typed with the function given in the argument

`.onLayerEnd(function)` executes at the end of a line

`.onLayerStart(function)` executes at the beginning of a line

`.whileTyping(function)` executes as each letter is typed

`.onstart` executes at the beginning of each line

`.pause()` pauses the typing and `.start()` continues it

`.destroy()` terminates typing

**[Demo on Codepen](http://codepen.io/akshay-7/pen/Wxrgrw)**










