ezToggle  
========
Easily slideToggle between divs using a main selector element. Simple and easy to use. Created by Shivam Bhalla. 

How to Use:
-----------
1. Include ezToggle.js after JQuery.
2. Create basic HTML structure as shown below:

	```html
	<div class="dd"><!-- opened class is optional -->
		<button class="selector">Click me to DropDown</button>
		<div class="content">Lorem</div>
	</div>
	```

3. In document.ready function:
	
	$('.dd').ezToggle({
	   selector : '.selector',
	   minHeight : 30,
	   speed : 500
	});

Available config options:
-------------------------
1. Selector (default = '.selector')
2. Minimized Height (default = '.selector.height();')
3. Speed of Animation (default = '200')

Know bugs: 
----------
var minHeight value is not configurable yet. Working on fix :)

LICENCE: 
--------
The MIT License (MIT)
http://opensource.org/licenses/MIT

