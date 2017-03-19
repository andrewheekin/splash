(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var input = function () {
	  // DOM Objects
	  var emailBtn = document.getElementById('email-button');
	  var emailIpt = document.getElementById('email-input');
	  var emailErr = document.getElementById('email-error');
	
	  // "get started" button clicked
	  emailBtn.addEventListener('click', function () {
	    submitEmail();
	  });
	
	  // if the input box has text, hide the "no email" error
	  emailIpt.addEventListener('input', function () {
	    if (emailIpt.value) emailErr.innerHTML = "";
	  });
	
	  // regex to check valid email
	  function validateEmail() {
	    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return regex.test(emailIpt.value);
	  }
	
	  function saveEmail() {
	    // XMLHttpRequest POST
	    var http = new XMLHttpRequest();
	    var url = "https://v392r778gl.execute-api.us-east-1.amazonaws.com/prod/email";
	    var params = JSON.stringify({ email: emailIpt.value });
	    http.open("POST", url, true);
	    http.setRequestHeader("Content-type", "application/json");
	    http.onreadystatechange = function () {
	      //Call a function when the state changes.
	      if (http.readyState == 4 && http.status == 200) {
	        emailErr.innerHTML = "thanks!";
	        // TODO: Fix this animation, move it to the CSS
	        emailErr.style = "color: green; animation: fadein .5s; -moz-animation: fadein .5s; -webkit-animation: fadein .5s;";
	      }
	    };
	    http.send(params);
	  }
	
	  var submitEmail = function submitEmail() {
	    if (emailIpt.value) {
	      if (validateEmail()) {
	        // valid email was entered. Send email to backend
	        saveEmail();
	      } else {
	        emailErr.innerHTML = "please enter a valid email";
	        // TODO: Fix this animation, move it to the CSS
	        emailErr.style = "color: red; animation: fadein .5s; -moz-animation: fadein .5s; -webkit-animation: fadein .5s;";
	      }
	    } else {
	      emailErr.innerHTML = "please enter an email";
	      // TODO: Fix this animation, move it to the CSS
	      emailErr.style = "color: red; animation: fadein .5s; -moz-animation: fadein .5s; -webkit-animation: fadein .5s;";
	    }
	  };
	
	  return {};
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	// lines array
	var lines = [
	  // 'border-color:green; transform:rotate(100deg); width:1500px; left:39%;',
	  // 'border-color:red; transform:rotate(18deg); width:1500px;',
	  // 'border-color:blue; transform:rotate(45deg); width:1500px; right:30%;',
	  // 'border-color:purple; transform:rotate(65deg); width:1500px;',
	  // 'border-color:orange; transform:rotate(135deg); width:1500px; right:26%;',
	  // 'border-color:green; transform:rotate(150deg); width:1500px; left:14%;',
	  // 'border-color:pink; transform:rotate(230deg); width:1500px; left:14%;',
	  // 'border-color:purple; transform:rotate(107deg); width:1500px; left:14%;',
	  // 'border-color:blue; transform:rotate(125deg); width:1500px;  right: 11%;',    
	];
	
	// draw lines
	linesFromArray(lines);
	
	function drawLine(str) {
	  var hr = document.createElement('hr');
	  hr.style = str + 'opacity:0.1; position:absolute; border-style:dashed; border-width:5px;';
	  document.body.getElementsByClassName('top-content')[0].appendChild(hr);
	}
	
	// call drawLine over each line in the lines array
	function linesFromArray(arr) {
	  for (var i = 0; i < arr.length; i++) {
	    drawLine(arr[i]);
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=scripts.js.map