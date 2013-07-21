ezToggle  
========
Easily slideToggle between divs using a main selector element. Simple and easy to use. Created by Shivam Bhalla. 

DEMO: https://rawgithub.com/Shivambh28/ezToggle/master/demo.html

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
	$('parentClassorID').ezToggle();

	// Using custom configuration
	$('parentClassorID').ezToggle({
		selector : 'buttonClassOrId', 
		speed : 150,
		openedClassName : 'opened',
		closedClassName : 'closed',
		minHeight : 100
	});
	```

Available Configuration Options:
-------------------------
      
	   OPTION        DEFAULT VALUE

	   selector        =  '.selector'
	   minHeight       =  closest selector height
	   speed           =  Default 500 milliseconds
	   openedClassName = 'opened'
	   closedClassName = 'closed'

	

LICENCE: 
--------
The MIT License (MIT)
http://opensource.org/licenses/MIT

