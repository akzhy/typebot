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
Optionally `text` can also be an array of objects like this 
````javascript
[
{
  element:"h1", // This element will be created during execution and the letters will be typed into it, it can be any element
  text:"Text to be typed",
  class:"demo", //Assigns a class to the element the will be created
  start:startTimeInMilliSeconds, // Determines when each layer of text is to be typed
  end:endPositionInMilliSeconds, // Determines the end time, speed will be adjusted to complete the typing at the end position
  done:function, // Function to be executed at the end of typing
  whileTyping:function // Function to be executed while the layer is being typed
}
]
```
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












