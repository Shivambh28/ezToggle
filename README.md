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

3. In document.ready JQuery function:
	```html
	// Using default configuration
	$('.dd').ezToggle();

	// Using custom configuration
	$('.dd').ezToggle({
	   selector : '.selector',
	   minHeight :  30,
	   speed : 500
	});
	```

Available Configuration Options:
-------------------------
      
   OPTION        DEFAULT VALUE

   selector      Default class .selector
   minHeight     Default height is .selector height
   speed         Default 500 milliseconds
	

LICENCE: 
--------
The MIT License (MIT)
http://opensource.org/licenses/MIT

