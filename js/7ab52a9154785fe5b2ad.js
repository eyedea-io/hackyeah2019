!function(t){var i={};function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\nvar deferredPrompt;\nwindow.addEventListener('beforeinstallprompt', function (e) {\n  // Prevent Chrome 67 and earlier from automatically showing the prompt\n  e.preventDefault(); // Stash the event so it can be triggered later.\n\n  deferredPrompt = e;\n});\nconsole.log(\"Hello world!\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInNjb3BlIiwiZXJyIiwiZGVmZXJyZWRQcm9tcHQiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUksbUJBQW1CQSxTQUF2QixFQUFrQztBQUNoQ0MsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0FBQ3pDRixhQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLGtCQUFqQyxFQUFxREMsSUFBckQsQ0FBMEQsVUFBU0MsWUFBVCxFQUF1QjtBQUMvRTtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWixFQUFrRUYsWUFBWSxDQUFDRyxLQUEvRTtBQUNELEtBSEQsRUFHRyxVQUFTQyxHQUFULEVBQWM7QUFDZjtBQUNBSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWixFQUFtREUsR0FBbkQ7QUFDRCxLQU5EO0FBT0QsR0FSRDtBQVNEOztBQUVELElBQUlDLGNBQUo7QUFFQVYsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixxQkFBeEIsRUFBK0MsVUFBQ1UsQ0FBRCxFQUFPO0FBQ3BEO0FBQ0FBLEdBQUMsQ0FBQ0MsY0FBRixHQUZvRCxDQUdwRDs7QUFDQUYsZ0JBQWMsR0FBR0MsQ0FBakI7QUFDRCxDQUxEO0FBVUFMLE9BQU8sQ0FBQ0MsR0FBUiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmxldCBkZWZlcnJlZFByb21wdDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCAoZSkgPT4ge1xuICAvLyBQcmV2ZW50IENocm9tZSA2NyBhbmQgZWFybGllciBmcm9tIGF1dG9tYXRpY2FsbHkgc2hvd2luZyB0aGUgcHJvbXB0XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXG4gIGRlZmVycmVkUHJvbXB0ID0gZTtcbn0pO1xuXG5cblxuXG5jb25zb2xlLmxvZyhgSGVsbG8gd29ybGQhYCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);