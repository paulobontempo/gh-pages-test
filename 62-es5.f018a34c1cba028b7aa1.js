function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{zgb5:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return d})),n.d(t,"ion_nav_link",(function(){return p})),n.d(t,"ion_nav_pop",(function(){return m})),n.d(t,"ion_nav_push",(function(){return y})),n.d(t,"ion_nav_set_root",(function(){return g}));var i=n("6kEz"),r=n("eL6f"),o=n("zzCX"),s=n("QNNX"),a=n("BFSF"),u=n("39Ae"),c=n("esod"),l=function(){function e(t,n){_classCallCheck(this,e),this.component=t,this.params=n,this.state=1}return _createClass(e,[{key:"init",value:function(e){var t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.state=2,this.element){n.next=5;break}return t=this.component,n.next=4,regeneratorRuntime.awrap(Object(a.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params));case 4:this.element=n.sent;case 5:case"end":return n.stop()}}),null,this)}},{key:"_destroy",value:function(){Object(o.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),e}(),v=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0},h=function(e,t){return e?e instanceof l?e:new l(e,t):null},d=function(){function e(t){_classCallCheck(this,e),Object(i.l)(this,t),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(i.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(i.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(i.d)(this,"ionNavDidChange",3)}return _createClass(e,[{key:"swipeGestureChanged",value:function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}},{key:"rootChanged",value:function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(i.e)(this);this.swipeGesture=r.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.rootChanged(),e.next=3,regeneratorRuntime.awrap(n.e(4).then(n.bind(null,"6sfK")));case 3:e.t0=this.el,e.t1=this.canStart.bind(this),e.t2=this.onStart.bind(this),e.t3=this.onMove.bind(this),e.t4=this.onEnd.bind(this),this.gesture=e.sent.createSwipeBackGesture(e.t0,e.t1,e.t2,e.t3,e.t4),this.swipeGestureChanged();case 10:case"end":return e.stop()}}),null,this)}},{key:"componentDidUnload",value:function(){var e=!0,t=!1,n=void 0;try{for(var i,r=this.views[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var o=i.value;Object(u.c)(o.element,s.e),o._destroy()}}catch(a){t=!0,n=a}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}},{key:"push",value:function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)}},{key:"insert",value:function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)}},{key:"insertPages",value:function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}},{key:"pop",value:function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}},{key:"popTo",value:function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}},{key:"popToRoot",value:function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}},{key:"removeIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}},{key:"setRoot",value:function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)}},{key:"setPages",value:function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}},{key:"setRouteId",value:function(e,t,n){var i,r=this.getActiveSync();if(v(r,e,t))return Promise.resolve({changed:!1,element:r.element});var o,s=new Promise((function(e){return i=e})),a={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return i({changed:!0,element:e,markVisible:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,regeneratorRuntime.awrap(o);case 3:case"end":return e.stop()}}))}}),n}};if("root"===n)o=this.setRoot(e,t,a);else{var u=this.views.find((function(n){return v(n,e,t)}));u?o=this.popTo(u,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===n?o=this.push(e,t,a):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return s}},{key:"getRouteId",value:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getActiveSync(),t.abrupt("return",e?{id:e.element.tagName,params:e.params,element:e.element}:void 0);case 2:case"end":return t.stop()}}),null,this)}},{key:"getActive",value:function(){return Promise.resolve(this.getActiveSync())}},{key:"getByIndex",value:function(e){return Promise.resolve(this.views[e])}},{key:"canGoBack",value:function(e){return Promise.resolve(this.canGoBackSync(e))}},{key:"getPrevious",value:function(e){return Promise.resolve(this.getPreviousSync(e))}},{key:"getLength",value:function(){return this.views.length}},{key:"getActiveSync",value:function(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}}},{key:"queueTrns",value:function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n}},{key:"success",value:function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}}},{key:"failed",value:function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:function(e){var t,n,i;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),t||n){r.next=5;break}throw new Error("no views in the stack to be removed");case 5:if(r.t0=n&&1===n.state,!r.t0){r.next=9;break}return r.next=9,regeneratorRuntime.awrap(n.init(this.el));case 9:if(this.postViewInit(n,t,e),!e.enteringRequiresTransition&&!e.leavingRequiresTransition||n===t){r.next=16;break}return r.next=13,regeneratorRuntime.awrap(this.transition(n,t,e));case 13:r.t1=r.sent,r.next=17;break;case 16:r.t1={hasCompleted:!0,requiresTransition:!1};case 17:i=r.t1,this.success(i,e),this.ionNavDidChange.emit(),r.next=24;break;case 21:r.prev=21,r.t2=r.catch(0),this.failed(r.t2,e);case 24:this.isTransitioning=!1,this.nextTrns();case 25:case"end":return r.stop()}}),null,this,[[0,21]])}},{key:"prepareTI",value:function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(o.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(o.b)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(o.b)(i.length>0,"length can not be zero");var r=i.map((function(e){return e instanceof l?e:"page"in e?h(e.page,e.params):h(e,void 0)})).filter((function(e){return null!==e}));if(0===r.length)throw new Error("invalid views to insert");var s=!0,a=!1,u=void 0;try{for(var c,v=r[Symbol.iterator]();!(s=(c=v.next()).done);s=!0){var d=c.value;d.delegate=e.opts.delegate;var f=d.nav;if(f&&f!==this)throw new Error("inserted view was already inserted");if(3===d.state)throw new Error("inserted view was already destroyed")}}catch(p){a=!0,u=p}finally{try{s||null==v.return||v.return()}finally{if(a)throw u}}e.insertViews=r}}},{key:"getEnteringView",value:function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}}},{key:"postViewInit",value:function(e,t,n){Object(o.b)(t||e,"Both leavingView and enteringView are null"),Object(o.b)(n.resolve,"resolve must be valid"),Object(o.b)(n.reject,"reject must be valid");var i,r=n.opts,a=n.insertViews,c=n.removeStart,l=n.removeCount;if(void 0!==c&&void 0!==l){Object(o.b)(c>=0,"removeStart can not be negative"),Object(o.b)(l>=0,"removeCount can not be negative"),i=[];for(var v=0;v<l;v++){var h=this.views[v+c];h&&h!==e&&h!==t&&i.push(h)}r.direction=r.direction||"back"}var d=this.views.length+(void 0!==a?a.length:0)-(void 0!==l?l:0);if(Object(o.b)(d>=0,"final balance can not be negative"),0===d)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){var f=n.insertStart,p=!0,m=!1,y=void 0;try{for(var g,b=a[Symbol.iterator]();!(p=(g=b.next()).done);p=!0){var w=g.value;this.insertViewAt(w,f),f++}}catch(A){m=!0,y=A}finally{try{p||null==b.return||b.return()}finally{if(m)throw y}}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){var k=!0,C=!1,j=void 0;try{for(var O,S=i[Symbol.iterator]();!(k=(O=S.next()).done);k=!0){var T=O.value;Object(u.c)(T.element,s.c),Object(u.c)(T.element,s.d),Object(u.c)(T.element,s.e)}}catch(A){C=!0,j=A}finally{try{k||null==S.return||S.return()}finally{if(C)throw j}}var R=!0,V=!1,E=void 0;try{for(var x,_=i[Symbol.iterator]();!(R=(x=_.next()).done);R=!0){var P=x.value;this.destroyView(P)}}catch(A){V=!0,E=A}finally{try{R||null==_.return||_.return()}finally{if(V)throw E}}}}},{key:"transition",value:function(e,t,n){var o,s,a,c,l,v,h,d,f=this;return regeneratorRuntime.async((function(p){for(;;)switch(p.prev=p.next){case 0:return o=n.opts,s=o.progressAnimation?function(e){return f.sbAni=e}:void 0,a=Object(i.e)(this),c=e.element,l=t&&t.element,v=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||o.animationBuilder||r.b.get("navAnimation"),progressCallback:s,animated:this.animated&&r.b.getBoolean("animated",!0),enteringEl:c,leavingEl:l},o),p.next=8,regeneratorRuntime.awrap(Object(u.e)(v));case 8:return h=p.sent,d=h.hasCompleted,p.abrupt("return",this.transitionFinish(d,e,t,o));case 11:case"end":return p.stop()}}),null,this)}},{key:"transitionFinish",value:function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}},{key:"insertViewAt",value:function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(o.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(o.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}},{key:"removeView",value:function(e){Object(o.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(o.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}},{key:"destroyView",value:function(e){e._destroy(),this.removeView(e)}},{key:"cleanup",value:function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(Object(u.c)(o,s.e),this.destroyView(r)):i<n&&Object(u.d)(o,!0)}}},{key:"canStart",value:function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}},{key:"onMove",value:function(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),t)),this.sbAni.progressEnd(e?1:0,r,n)}}},{key:"render",value:function(){return Object(i.i)("slot",null)}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"watchers",get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),e}(),f=function(e,t,n,i){var r=e.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0})}else if("back"===t)return r.pop({skipIfBusy:!0});return Promise.resolve(!1)},p=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.routerDirection="forward",this.onClick=function(){return f(n.el,n.routerDirection,n.component,n.componentProps)}}return _createClass(e,[{key:"render",value:function(){return Object(i.i)(i.a,{onClick:this.onClick})}},{key:"el",get:function(){return Object(i.f)(this)}}]),e}(),m=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.pop=function(){return f(n.el,"back")}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')}},{key:"render",value:function(){return Object(i.i)(i.a,{onClick:this.pop})}},{key:"el",get:function(){return Object(i.f)(this)}}]),e}(),y=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.push=function(){return f(n.el,"forward",n.component,n.componentProps)}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')}},{key:"render",value:function(){return Object(i.i)(i.a,{onClick:this.push})}},{key:"el",get:function(){return Object(i.f)(this)}}]),e}(),g=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.setRoot=function(){return f(n.el,"root",n.component,n.componentProps)}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')}},{key:"render",value:function(){return Object(i.i)(i.a,{onClick:this.setRoot})}},{key:"el",get:function(){return Object(i.f)(this)}}]),e}()}}]);