/******/ (function(modules) { // webpackBootstrap
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

	/* WEBPACK VAR INJECTION */(function($) {var Route, init, route;
	
	Route = __webpack_require__(3);
	
	route = null;
	
	init = function() {
	  var $reroute;
	  route = new Route();
	  route.init();
	  $reroute = $('.js-reroute');
	  return $reroute.on('click', (function(_this) {
	    return function() {
	      return route.reRoute();
	    };
	  })(this));
	};
	
	$(function() {
	  return init();
	});
	
	window.log = (function() {
	  if (window.console != null) {
	    if (window.console.log.bind != null) {
	      return window.console.log.bind(window.console);
	    } else {
	      return window.console.log;
	    }
	  } else {
	    return window.alert;
	  }
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var GridCanvas, Router, Tween, config, createjs;
	
	createjs = __webpack_require__(4);
	
	Tween = __webpack_require__(6);
	
	config = __webpack_require__(8);
	
	Router = __webpack_require__(9);
	
	GridCanvas = (function() {
	  function GridCanvas() {
	    this.c = createjs;
	    this.$contaniner = $('#container');
	    this.contaninerW = this.$contaniner.width();
	    this.contaninerH = this.$contaniner.height();
	  }
	
	  GridCanvas.prototype.init = function() {
	    this.canvas = document.getElementById('canvas');
	    this.stage = new this.c.Stage(canvas);
	    this.setStage();
	    this.c.Ticker.addEventListener('tick', this.stage);
	    return new Router().then((function(_this) {
	      return function(data) {
	        _this.pointData = data.point;
	        _this.routeData = data.route;
	        log('pointData', _this.pointData);
	        log('routeData', _this.routeData);
	        _this.createGrid();
	        return _this.createRoute();
	      };
	    })(this));
	  };
	
	  GridCanvas.prototype.setStage = function() {
	    var devicePixelRatio, height, width;
	    width = config._GRID_SIZE * config._GRID;
	    height = config._GRID_SIZE * config._GRID;
	    devicePixelRatio = window.devicePixelRatio;
	    if (devicePixelRatio) {
	      this.canvas.width = width * devicePixelRatio;
	      this.canvas.height = height * devicePixelRatio;
	      this.canvas.style.width = width + 'px';
	      this.canvas.style.height = height + 'px';
	      this.stage.scaleX = devicePixelRatio;
	      return this.stage.scaleY = devicePixelRatio;
	    } else {
	      this.canvas.width = width;
	      return this.canvas.height = height;
	    }
	  };
	
	  GridCanvas.prototype.createGrid = function() {
	    var data, fill, i, j, len, ref, results, shape, str, text;
	    this.mapContainer = new this.c.Container();
	    this.stage.addChild(this.mapContainer);
	    ref = this.pointData;
	    results = [];
	    for (i = j = 0, len = ref.length; j < len; i = ++j) {
	      data = ref[i];
	      fill = '#fff';
	      if (data.type === 'wall') {
	        fill = '#503809';
	      }
	      shape = new this.c.Shape();
	      shape.graphics.beginStroke('#999').beginFill(fill).drawRect(0, 0, config._GRID_SIZE, config._GRID_SIZE);
	      shape.x = config._GRID_SIZE * data.line.x;
	      shape.y = config._GRID_SIZE * data.line.y;
	      if (data.type !== 'wall') {
	        str = data.cost;
	        text = new this.c.Text(str, '12px Arial', '#666');
	        text.x = (config._GRID_SIZE * data.line.x) + (config._GRID_SIZE / 2);
	        text.y = (config._GRID_SIZE * data.line.y) + (config._GRID_SIZE / 2);
	        text.textAlign = 'center';
	        text.textBaseline = 'middle';
	      }
	      this.mapContainer.addChild(shape);
	      results.push(this.mapContainer.addChild(text));
	    }
	    return results;
	  };
	
	  GridCanvas.prototype.createRoute = function() {
	    var data, fill, i, j, len, ref, results, shape, str, text;
	    ref = this.routeData;
	    results = [];
	    for (i = j = 0, len = ref.length; j < len; i = ++j) {
	      data = ref[i];
	      fill = '#ddd';
	      switch (data.type) {
	        case 'start':
	          fill = '#b3c9f5';
	          break;
	        case 'goal':
	          fill = '#ff933f';
	      }
	      shape = new this.c.Shape();
	      shape.graphics.beginStroke('#999').beginFill(fill).drawRect(0, 0, config._GRID_SIZE, config._GRID_SIZE);
	      shape.x = config._GRID_SIZE * data.line.x;
	      shape.y = config._GRID_SIZE * data.line.y;
	      if (data.type === 'start' || data.type === 'goal') {
	        str = data.type === 'start' ? 'S' : 'G';
	        text = new this.c.Text(str, '18px Arial', '#333');
	        text.x = (config._GRID_SIZE * data.line.x) + (config._GRID_SIZE / 2);
	        text.y = (config._GRID_SIZE * data.line.y) + (config._GRID_SIZE / 2);
	        text.textAlign = 'center';
	        text.textBaseline = 'middle';
	      }
	      if (data.type === 'route') {
	        shape.alpha = 0;
	      }
	      this.mapContainer.addChild(shape);
	      this.mapContainer.addChild(text);
	      if (data.type === 'route') {
	        results.push(this.c.Tween.get(shape).wait(100 * i).to({
	          alpha: .8
	        }, 150, this.c.Ease.elasticout));
	      } else {
	        results.push(void 0);
	      }
	    }
	    return results;
	  };
	
	  GridCanvas.prototype.reRoute = function() {
	    log('reRoute');
	    this.stage.clear();
	    return this.init();
	  };
	
	  return GridCanvas;
	
	})();
	
	module.exports = GridCanvas;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*!
	* EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2010 gskinner.com, inc.
	*
	* Permission is hereby granted, free of charge, to any person
	* obtaining a copy of this software and associated documentation
	* files (the "Software"), to deal in the Software without
	* restriction, including without limitation the rights to use,
	* copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the
	* Software is furnished to do so, subject to the following
	* conditions:
	*
	* The above copyright notice and this permission notice shall be
	* included in all copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	* OTHER DEALINGS IN THE SOFTWARE.
	*/
	
	
	//##############################################################################
	// extend.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Sets up the prototype chain and constructor property for a new class.
	 *
	 * This should be called right after creating the class constructor.
	 *
	 * 	function MySubClass() {}
	 * 	createjs.extend(MySubClass, MySuperClass);
	 * 	MySubClass.prototype.doSomething = function() { }
	 *
	 * 	var foo = new MySubClass();
	 * 	console.log(foo instanceof MySuperClass); // true
	 * 	console.log(foo.prototype.constructor === MySubClass); // true
	 *
	 * @method extend
	 * @param {Function} subclass The subclass.
	 * @param {Function} superclass The superclass to extend.
	 * @return {Function} Returns the subclass's new prototype.
	 */
	createjs.extend = function(subclass, superclass) {
		"use strict";
	
		function o() { this.constructor = subclass; }
		o.prototype = superclass.prototype;
		return (subclass.prototype = new o());
	};
	
	//##############################################################################
	// promote.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Promotes any methods on the super class that were overridden, by creating an alias in the format `prefix_methodName`.
	 * It is recommended to use the super class's name as the prefix.
	 * An alias to the super class's constructor is always added in the format `prefix_constructor`.
	 * This allows the subclass to call super class methods without using `function.call`, providing better performance.
	 *
	 * For example, if `MySubClass` extends `MySuperClass`, and both define a `draw` method, then calling `promote(MySubClass, "MySuperClass")`
	 * would add a `MySuperClass_constructor` method to MySubClass and promote the `draw` method on `MySuperClass` to the
	 * prototype of `MySubClass` as `MySuperClass_draw`.
	 *
	 * This should be called after the class's prototype is fully defined.
	 *
	 * 	function ClassA(name) {
	 * 		this.name = name;
	 * 	}
	 * 	ClassA.prototype.greet = function() {
	 * 		return "Hello "+this.name;
	 * 	}
	 *
	 * 	function ClassB(name, punctuation) {
	 * 		this.ClassA_constructor(name);
	 * 		this.punctuation = punctuation;
	 * 	}
	 * 	createjs.extend(ClassB, ClassA);
	 * 	ClassB.prototype.greet = function() {
	 * 		return this.ClassA_greet()+this.punctuation;
	 * 	}
	 * 	createjs.promote(ClassB, "ClassA");
	 *
	 * 	var foo = new ClassB("World", "!?!");
	 * 	console.log(foo.greet()); // Hello World!?!
	 *
	 * @method promote
	 * @param {Function} subclass The class to promote super class methods on.
	 * @param {String} prefix The prefix to add to the promoted method names. Usually the name of the superclass.
	 * @return {Function} Returns the subclass.
	 */
	createjs.promote = function(subclass, prefix) {
		"use strict";
	
		var subP = subclass.prototype, supP = (Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;
		if (supP) {
			subP[(prefix+="_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) { subP[prefix + n] = supP[n]; }
			}
		}
		return subclass;
	};
	
	//##############################################################################
	// indexOf.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Finds the first occurrence of a specified value searchElement in the passed in array, and returns the index of
	 * that value.  Returns -1 if value is not found.
	 *
	 *      var i = createjs.indexOf(myArray, myElementToFind);
	 *
	 * @method indexOf
	 * @param {Array} array Array to search for searchElement
	 * @param searchElement Element to find in array.
	 * @return {Number} The first index of searchElement in array.
	 */
	createjs.indexOf = function (array, searchElement){
		"use strict";
	
		for (var i = 0,l=array.length; i < l; i++) {
			if (searchElement === array[i]) {
				return i;
			}
		}
		return -1;
	};
	
	//##############################################################################
	// Event.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	// constructor:
		/**
		 * Contains properties and methods shared by all events for use with
		 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
		 * 
		 * Note that Event objects are often reused, so you should never
		 * rely on an event object's state outside of the call stack it was received in.
		 * @class Event
		 * @param {String} type The event type.
		 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
		 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
		 * @constructor
		 **/
		function Event(type, bubbles, cancelable) {
			
		
		// public properties:
			/**
			 * The type of event.
			 * @property type
			 * @type String
			 **/
			this.type = type;
		
			/**
			 * The object that generated an event.
			 * @property target
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.target = null;
		
			/**
			 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
			 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
			 * is generated from childObj, then a listener on parentObj would receive the event with
			 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
			 * @property currentTarget
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.currentTarget = null;
		
			/**
			 * For bubbling events, this indicates the current event phase:<OL>
			 * 	<LI> capture phase: starting from the top parent to the target</LI>
			 * 	<LI> at target phase: currently being dispatched from the target</LI>
			 * 	<LI> bubbling phase: from the target to the top parent</LI>
			 * </OL>
			 * @property eventPhase
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.eventPhase = 0;
		
			/**
			 * Indicates whether the event will bubble through the display list.
			 * @property bubbles
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.bubbles = !!bubbles;
		
			/**
			 * Indicates whether the default behaviour of this event can be cancelled via
			 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
			 * @property cancelable
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.cancelable = !!cancelable;
		
			/**
			 * The epoch time at which this event was created.
			 * @property timeStamp
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.timeStamp = (new Date()).getTime();
		
			/**
			 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
			 * on this event.
			 * @property defaultPrevented
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.defaultPrevented = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
			 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
			 * @property propagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.propagationStopped = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
			 * on this event.
			 * @property immediatePropagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.immediatePropagationStopped = false;
			
			/**
			 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
			 * @property removed
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.removed = false;
		}
		var p = Event.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	// public methods:
		/**
		 * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true if the event is cancelable.
		 * Mirrors the DOM level 2 event standard. In general, cancelable events that have `preventDefault()` called will
		 * cancel the default behaviour associated with the event.
		 * @method preventDefault
		 **/
		p.preventDefault = function() {
			this.defaultPrevented = this.cancelable&&true;
		};
	
		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopPropagation
		 **/
		p.stopPropagation = function() {
			this.propagationStopped = true;
		};
	
		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
		 * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopImmediatePropagation
		 **/
		p.stopImmediatePropagation = function() {
			this.immediatePropagationStopped = this.propagationStopped = true;
		};
		
		/**
		 * Causes the active listener to be removed via removeEventListener();
		 * 
		 * 		myBtn.addEventListener("click", function(evt) {
		 * 			// do stuff...
		 * 			evt.remove(); // removes this listener.
		 * 		});
		 * 
		 * @method remove
		 **/
		p.remove = function() {
			this.removed = true;
		};
		
		/**
		 * Returns a clone of the Event instance.
		 * @method clone
		 * @return {Event} a clone of the Event instance.
		 **/
		p.clone = function() {
			return new Event(this.type, this.bubbles, this.cancelable);
		};
		
		/**
		 * Provides a chainable shortcut method for setting a number of properties on the instance.
		 *
		 * @method set
		 * @param {Object} props A generic object containing properties to copy to the instance.
		 * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
		 * @chainable
		*/
		p.set = function(props) {
			for (var n in props) { this[n] = props[n]; }
			return this;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Event (type="+this.type+")]";
		};
	
		createjs.Event = Event;
	}());
	
	//##############################################################################
	// EventDispatcher.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
		 *
		 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
		 * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
		 * 
		 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
		 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
		 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
		 * 
		 * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
		 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The 
		 * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
		 * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
		 * 
		 * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
		 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also 
		 * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
		 *
		 * <h4>Example</h4>
		 * Add EventDispatcher capabilities to the "MyClass" class.
		 *
		 *      EventDispatcher.initialize(MyClass.prototype);
		 *
		 * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
		 *
		 *      instance.addEventListener("eventName", handlerMethod);
		 *      function handlerMethod(event) {
		 *          console.log(event.target + " Was Clicked");
		 *      }
		 *
		 * <b>Maintaining proper scope</b><br />
		 * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
		 * method to subscribe to events simplifies this.
		 *
		 *      instance.addEventListener("click", function(event) {
		 *          console.log(instance == this); // false, scope is ambiguous.
		 *      });
		 *      
		 *      instance.on("click", function(event) {
		 *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
		 *      });
		 * 
		 * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage
		 * scope.
		 *
		 * <b>Browser support</b>
		 * The event model in CreateJS can be used separately from the suite in any project, however the inheritance model
		 * requires modern browsers (IE9+).
		 *      
		 *
		 * @class EventDispatcher
		 * @constructor
		 **/
		function EventDispatcher() {
		
		
		// private properties:
			/**
			 * @protected
			 * @property _listeners
			 * @type Object
			 **/
			this._listeners = null;
			
			/**
			 * @protected
			 * @property _captureListeners
			 * @type Object
			 **/
			this._captureListeners = null;
		}
		var p = EventDispatcher.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// static public methods:
		/**
		 * Static initializer to mix EventDispatcher methods into a target object or prototype.
		 * 
		 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
		 * 		EventDispatcher.initialize(myObject); // add to a specific instance
		 * 
		 * @method initialize
		 * @static
		 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
		 * prototype.
		 **/
		EventDispatcher.initialize = function(target) {
			target.addEventListener = p.addEventListener;
			target.on = p.on;
			target.removeEventListener = target.off =  p.removeEventListener;
			target.removeAllEventListeners = p.removeAllEventListeners;
			target.hasEventListener = p.hasEventListener;
			target.dispatchEvent = p.dispatchEvent;
			target._dispatchEvent = p._dispatchEvent;
			target.willTrigger = p.willTrigger;
		};
		
	
	// public methods:
		/**
		 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
		 * multiple callbacks getting fired.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.addEventListener("click", handleClick);
		 *      function handleClick(event) {
		 *         // Click happened.
		 *      }
		 *
		 * @method addEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function | Object} Returns the listener for chaining or assignment.
		 **/
		p.addEventListener = function(type, listener, useCapture) {
			var listeners;
			if (useCapture) {
				listeners = this._captureListeners = this._captureListeners||{};
			} else {
				listeners = this._listeners = this._listeners||{};
			}
			var arr = listeners[type];
			if (arr) { this.removeEventListener(type, listener, useCapture); }
			arr = listeners[type]; // remove may have deleted the array
			if (!arr) { listeners[type] = [listener];  }
			else { arr.push(listener); }
			return listener;
		};
		
		/**
		 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
		 * only run once, associate arbitrary data with the listener, and remove the listener.
		 * 
		 * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
		 * The wrapper function is returned for use with `removeEventListener` (or `off`).
		 * 
		 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener, or use
		 * {{#crossLink "Event/remove"}}{{/crossLink}}. Likewise, each time you call `on` a NEW wrapper function is subscribed, so multiple calls
		 * to `on` with the same params will create multiple listeners.
		 * 
		 * <h4>Example</h4>
		 * 
		 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
		 * 		function handleClick(evt, data) {
		 * 			data.count -= 1;
		 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
		 * 			if (data.count == 0) {
		 * 				alert("clicked 3 times!");
		 * 				myBtn.off("click", listener);
		 * 				// alternately: evt.remove();
		 * 			}
		 * 		}
		 * 
		 * @method on
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
		 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
		 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
		 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
		 **/
		p.on = function(type, listener, scope, once, data, useCapture) {
			if (listener.handleEvent) {
				scope = scope||listener;
				listener = listener.handleEvent;
			}
			scope = scope||this;
			return this.addEventListener(type, function(evt) {
					listener.call(scope, evt, data);
					once&&evt.remove();
				}, useCapture);
		};
	
		/**
		 * Removes the specified event listener.
		 *
		 * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
		 * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
		 * closure will not work.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.removeEventListener("click", handleClick);
		 *
		 * @method removeEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.removeEventListener = function(type, listener, useCapture) {
			var listeners = useCapture ? this._captureListeners : this._listeners;
			if (!listeners) { return; }
			var arr = listeners[type];
			if (!arr) { return; }
			for (var i=0,l=arr.length; i<l; i++) {
				if (arr[i] == listener) {
					if (l==1) { delete(listeners[type]); } // allows for faster checks.
					else { arr.splice(i,1); }
					break;
				}
			}
		};
		
		/**
		 * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
		 * .on method.
		 * 
		 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener. See 
		 * {{#crossLink "EventDispatcher/on"}}{{/crossLink}} for an example.
		 *
		 * @method off
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.off = p.removeEventListener;
	
		/**
		 * Removes all listeners for the specified type, or all listeners of all types.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Remove all listeners
		 *      displayObject.removeAllEventListeners();
		 *
		 *      // Remove all click listeners
		 *      displayObject.removeAllEventListeners("click");
		 *
		 * @method removeAllEventListeners
		 * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
		 **/
		p.removeAllEventListeners = function(type) {
			if (!type) { this._listeners = this._captureListeners = null; }
			else {
				if (this._listeners) { delete(this._listeners[type]); }
				if (this._captureListeners) { delete(this._captureListeners[type]); }
			}
		};
	
		/**
		 * Dispatches the specified event to all listeners.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Use a string event
		 *      this.dispatchEvent("complete");
		 *
		 *      // Use an Event instance
		 *      var event = new createjs.Event("progress");
		 *      this.dispatchEvent(event);
		 *
		 * @method dispatchEvent
		 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
		 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
		 * dispatchEvent will construct an Event instance if necessary with the specified type. This latter approach can
		 * be used to avoid event object instantiation for non-bubbling events that may not have any listeners.
		 * @param {Boolean} [bubbles] Specifies the `bubbles` value when a string was passed to eventObj.
		 * @param {Boolean} [cancelable] Specifies the `cancelable` value when a string was passed to eventObj.
		 * @return {Boolean} Returns false if `preventDefault()` was called on a cancelable event, true otherwise.
		 **/
		p.dispatchEvent = function(eventObj, bubbles, cancelable) {
			if (typeof eventObj == "string") {
				// skip everything if there's no listeners and it doesn't bubble:
				var listeners = this._listeners;
				if (!bubbles && (!listeners || !listeners[eventObj])) { return true; }
				eventObj = new createjs.Event(eventObj, bubbles, cancelable);
			} else if (eventObj.target && eventObj.clone) {
				// redispatching an active event object, so clone it:
				eventObj = eventObj.clone();
			}
			
			// TODO: it would be nice to eliminate this. Maybe in favour of evtObj instanceof Event? Or !!evtObj.createEvent
			try { eventObj.target = this; } catch (e) {} // try/catch allows redispatching of native events
	
			if (!eventObj.bubbles || !this.parent) {
				this._dispatchEvent(eventObj, 2);
			} else {
				var top=this, list=[top];
				while (top.parent) { list.push(top = top.parent); }
				var i, l=list.length;
	
				// capture & atTarget
				for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
					list[i]._dispatchEvent(eventObj, 1+(i==0));
				}
				// bubbling
				for (i=1; i<l && !eventObj.propagationStopped; i++) {
					list[i]._dispatchEvent(eventObj, 3);
				}
			}
			return !eventObj.defaultPrevented;
		};
	
		/**
		 * Indicates whether there is at least one listener for the specified event type.
		 * @method hasEventListener
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns true if there is at least one listener for the specified event.
		 **/
		p.hasEventListener = function(type) {
			var listeners = this._listeners, captureListeners = this._captureListeners;
			return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
		};
		
		/**
		 * Indicates whether there is at least one listener for the specified event type on this object or any of its
		 * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
		 * specified type is dispatched from this object, it will trigger at least one listener.
		 * 
		 * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
		 * event flow for a listener, not just this object.
		 * @method willTrigger
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
		 **/
		p.willTrigger = function(type) {
			var o = this;
			while (o) {
				if (o.hasEventListener(type)) { return true; }
				o = o.parent;
			}
			return false;
		};
	
		/**
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[EventDispatcher]";
		};
	
	
	// private methods:
		/**
		 * @method _dispatchEvent
		 * @param {Object | String | Event} eventObj
		 * @param {Object} eventPhase
		 * @protected
		 **/
		p._dispatchEvent = function(eventObj, eventPhase) {
			var l, listeners = (eventPhase==1) ? this._captureListeners : this._listeners;
			if (eventObj && listeners) {
				var arr = listeners[eventObj.type];
				if (!arr||!(l=arr.length)) { return; }
				try { eventObj.currentTarget = this; } catch (e) {}
				try { eventObj.eventPhase = eventPhase; } catch (e) {}
				eventObj.removed = false;
				
				arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
				for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
					var o = arr[i];
					if (o.handleEvent) { o.handleEvent(eventObj); }
					else { o(eventObj); }
					if (eventObj.removed) {
						this.off(eventObj.type, o, eventPhase==1);
						eventObj.removed = false;
					}
				}
			}
		};
	
	
		createjs.EventDispatcher = EventDispatcher;
	}());
	
	//##############################################################################
	// Ticker.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
		 * event to be notified when a set time interval has elapsed.
		 *
		 * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
		 * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
		 * can not be instantiated.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          // Actions carried out each tick (aka frame)
		 *          if (!event.paused) {
		 *              // Actions carried out when the Ticker is not paused.
		 *          }
		 *      }
		 *
		 * @class Ticker
		 * @uses EventDispatcher
		 * @static
		 **/
		function Ticker() {
			throw "Ticker cannot be instantiated.";
		}
	
	
	// constants:
		/**
		 * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
		 * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
		 * dispatches the tick when the time is within a certain threshold.
		 *
		 * This mode has a higher variance for time between frames than {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}},
		 * but does not require that content be time based as with {{#crossLink "Ticker/RAF:property"}}{{/crossLink}} while
		 * gaining the benefits of that API (screen synch, background throttling).
		 *
		 * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
		 * framerates of 10, 12, 15, 20, and 30 work well.
		 *
		 * Falls back to {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
		 * supported.
		 * @property RAF_SYNCHED
		 * @static
		 * @type {String}
		 * @default "synched"
		 * @readonly
		 **/
		Ticker.RAF_SYNCHED = "synched";
	
		/**
		 * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
		 * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
		 * You can leverage {{#crossLink "Ticker/getTime"}}{{/crossLink}} and the {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
		 * event object's "delta" properties to make this easier.
		 *
		 * Falls back on {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
		 * supported.
		 * @property RAF
		 * @static
		 * @type {String}
		 * @default "raf"
		 * @readonly
		 **/
		Ticker.RAF = "raf";
	
		/**
		 * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
		 * provide the benefits of requestAnimationFrame (screen synch, background throttling).
		 * @property TIMEOUT
		 * @static
		 * @type {String}
		 * @default "timeout"
		 * @readonly
		 **/
		Ticker.TIMEOUT = "timeout";
	
	
	// static events:
		/**
		 * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused using
		 * {{#crossLink "Ticker/setPaused"}}{{/crossLink}}.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          console.log("Paused:", event.paused, event.delta);
		 *      }
		 *
		 * @event tick
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Boolean} paused Indicates whether the ticker is currently paused.
		 * @param {Number} delta The time elapsed in ms since the last tick.
		 * @param {Number} time The total time in ms since Ticker was initialized.
		 * @param {Number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
		 * 	you could determine the amount of time that the Ticker has been paused since initialization with `time-runTime`.
		 * @since 0.6.0
		 */
	
	
	// public static properties:
		/**
		 * Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}, and will be removed in a future version. If true, timingMode will
		 * use {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} by default.
		 * @deprecated Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}.
		 * @property useRAF
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		Ticker.useRAF = false;
	
		/**
		 * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use. See
		 * {{#crossLink "Ticker/TIMEOUT"}}{{/crossLink}}, {{#crossLink "Ticker/RAF"}}{{/crossLink}}, and
		 * {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} for mode details.
		 * @property timingMode
		 * @static
		 * @type {String}
		 * @default Ticker.TIMEOUT
		 **/
		Ticker.timingMode = null;
	
		/**
		 * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
		 * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
		 * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
		 * (ex. maxDelta=50 when running at 40fps).
		 * 
		 * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
		 * when using both delta and other values.
		 * 
		 * If 0, there is no maximum.
		 * @property maxDelta
		 * @static
		 * @type {number}
		 * @default 0
		 */
		Ticker.maxDelta = 0;
		
		/**
		 * When the ticker is paused, all listeners will still receive a tick event, but the <code>paused</code> property
		 * of the event will be `true`. Also, while paused the `runTime` will not increase. See {{#crossLink "Ticker/tick:event"}}{{/crossLink}},
		 * {{#crossLink "Ticker/getTime"}}{{/crossLink}}, and {{#crossLink "Ticker/getEventTime"}}{{/crossLink}} for more
		 * info.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      createjs.Ticker.paused = true;
		 *      function handleTick(event) {
		 *          console.log(event.paused,
		 *          	createjs.Ticker.getTime(false),
		 *          	createjs.Ticker.getTime(true));
		 *      }
		 *
		 * @property paused
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		Ticker.paused = false;
	
	
	// mix-ins:
		// EventDispatcher methods:
		Ticker.removeEventListener = null;
		Ticker.removeAllEventListeners = null;
		Ticker.dispatchEvent = null;
		Ticker.hasEventListener = null;
		Ticker._listeners = null;
		createjs.EventDispatcher.initialize(Ticker); // inject EventDispatcher methods.
		Ticker._addEventListener = Ticker.addEventListener;
		Ticker.addEventListener = function() {
			!Ticker._inited&&Ticker.init();
			return Ticker._addEventListener.apply(Ticker, arguments);
		};
	
	
	// private static properties:
		/**
		 * @property _inited
		 * @static
		 * @type {Boolean}
		 * @protected
		 **/
		Ticker._inited = false;
	
		/**
		 * @property _startTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._startTime = 0;
	
		/**
		 * @property _pausedTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._pausedTime=0;
	
		/**
		 * The number of ticks that have passed
		 * @property _ticks
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._ticks = 0;
	
		/**
		 * The number of ticks that have passed while Ticker has been paused
		 * @property _pausedTicks
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._pausedTicks = 0;
	
		/**
		 * @property _interval
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._interval = 50;
	
		/**
		 * @property _lastTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._lastTime = 0;
	
		/**
		 * @property _times
		 * @static
		 * @type {Array}
		 * @protected
		 **/
		Ticker._times = null;
	
		/**
		 * @property _tickTimes
		 * @static
		 * @type {Array}
		 * @protected
		 **/
		Ticker._tickTimes = null;
	
		/**
		 * Stores the timeout or requestAnimationFrame id.
		 * @property _timerId
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._timerId = null;
		
		/**
		 * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
		 * if that property changed and a tick hasn't fired.
		 * @property _raf
		 * @static
		 * @type {Boolean}
		 * @protected
		 **/
		Ticker._raf = true;
		
	
	// static getter / setters:
		/**
		 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
		 * @method setInterval
		 * @static
		 * @param {Number} interval
		 * @deprecated
		 **/
		Ticker.setInterval = function(interval) {
			Ticker._interval = interval;
			if (!Ticker._inited) { return; }
			Ticker._setupTick();
		};
	
		/**
		 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
		 * @method getInterval
		 * @static
		 * @return {Number}
		 * @deprecated
		 **/
		Ticker.getInterval = function() {
			return Ticker._interval;
		};
	
		/**
		 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
		 * @method setFPS
		 * @static
		 * @param {Number} value
		 * @deprecated
		 **/
		Ticker.setFPS = function(value) {
			Ticker.setInterval(1000/value);
		};
	
		/**
		 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
		 * @method getFPS
		 * @static
		 * @return {Number}
		 * @deprecated
		 **/
		Ticker.getFPS = function() {
			return 1000/Ticker._interval;
		};
	
		/**
		 * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
		 * Note that actual time between ticks may be more than specified depending on CPU load.
		 * This property is ignored if the ticker is using the `RAF` timing mode.
		 * @property interval
		 * @static
		 * @type {Number}
		 **/
		 
		/**
		 * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
		 * `framerate == 1000/interval`.
		 * @property framerate
		 * @static
		 * @type {Number}
		 **/
		try {
			Object.defineProperties(Ticker, {
				interval: { get: Ticker.getInterval, set: Ticker.setInterval },
				framerate: { get: Ticker.getFPS, set: Ticker.setFPS }
			});
		} catch (e) { console.log(e); }
	
	
	// public static methods:
		/**
		 * Starts the tick. This is called automatically when the first listener is added.
		 * @method init
		 * @static
		 **/
		Ticker.init = function() {
			if (Ticker._inited) { return; }
			Ticker._inited = true;
			Ticker._times = [];
			Ticker._tickTimes = [];
			Ticker._startTime = Ticker._getTime();
			Ticker._times.push(Ticker._lastTime = 0);
			Ticker.interval = Ticker._interval;
		};
		
		/**
		 * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
		 * @method reset
		 * @static
		 **/
		Ticker.reset = function() {
			if (Ticker._raf) {
				var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
				f&&f(Ticker._timerId);
			} else {
				clearTimeout(Ticker._timerId);
			}
			Ticker.removeAllEventListeners("tick");
			Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
			Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
			Ticker._inited = false;
		};
	
		/**
		 * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
		 * because it only measures the time spent within the tick execution stack. 
		 * 
		 * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between 
		 * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that 
		 * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
		 *
		 * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
		 * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
		 * other than the tick is using ~80ms (another script, DOM rendering, etc).
		 * @method getMeasuredTickTime
		 * @static
		 * @param {Number} [ticks] The number of previous ticks over which to measure the average time spent in a tick.
		 * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
		 * @return {Number} The average time spent in a tick in milliseconds.
		 **/
		Ticker.getMeasuredTickTime = function(ticks) {
			var ttl=0, times=Ticker._tickTimes;
			if (!times || times.length < 1) { return -1; }
	
			// by default, calculate average for the past ~1 second:
			ticks = Math.min(times.length, ticks||(Ticker.getFPS()|0));
			for (var i=0; i<ticks; i++) { ttl += times[i]; }
			return ttl/ticks;
		};
	
		/**
		 * Returns the actual frames / ticks per second.
		 * @method getMeasuredFPS
		 * @static
		 * @param {Number} [ticks] The number of previous ticks over which to measure the actual frames / ticks per second.
		 * Defaults to the number of ticks per second.
		 * @return {Number} The actual frames / ticks per second. Depending on performance, this may differ
		 * from the target frames per second.
		 **/
		Ticker.getMeasuredFPS = function(ticks) {
			var times = Ticker._times;
			if (!times || times.length < 2) { return -1; }
	
			// by default, calculate fps for the past ~1 second:
			ticks = Math.min(times.length-1, ticks||(Ticker.getFPS()|0));
			return 1000/((times[0]-times[ticks])/ticks);
		};
	
		/**
		 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
		 * @method setPaused
		 * @static
		 * @param {Boolean} value
		 * @deprecated
		 **/
		Ticker.setPaused = function(value) {
			// TODO: deprecated.
			Ticker.paused = value;
		};
	
		/**
		 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
		 * @method getPaused
		 * @static
		 * @return {Boolean}
		 * @deprecated
		 **/
		Ticker.getPaused = function() {
			// TODO: deprecated.
			return Ticker.paused;
		};
	
		/**
		 * Returns the number of milliseconds that have elapsed since Ticker was initialized via {{#crossLink "Ticker/init"}}.
		 * Returns -1 if Ticker has not been initialized. For example, you could use
		 * this in a time synchronized animation to determine the exact amount of time that has elapsed.
		 * @method getTime
		 * @static
		 * @param {Boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
		 * If false, the value returned will be total time elapsed since the first tick event listener was added.
		 * @return {Number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
		 **/
		Ticker.getTime = function(runTime) {
			return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
		};
	
		/**
		 * Similar to the {{#crossLink "Ticker/getTime"}}{{/crossLink}} method, but returns the time on the most recent {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
		 * event object.
		 * @method getEventTime
		 * @static
		 * @param runTime {Boolean} [runTime=false] If true, the runTime property will be returned instead of time.
		 * @returns {number} The time or runTime property from the most recent tick event or -1.
		 */
		Ticker.getEventTime = function(runTime) {
			return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
		};
		
		/**
		 * Returns the number of ticks that have been broadcast by Ticker.
		 * @method getTicks
		 * @static
		 * @param {Boolean} pauseable Indicates whether to include ticks that would have been broadcast
		 * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
		 * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
		 * value. The default value is false.
		 * @return {Number} of ticks that have been broadcast.
		 **/
		Ticker.getTicks = function(pauseable) {
			return  Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
		};
	
	
	// private static methods:
		/**
		 * @method _handleSynch
		 * @static
		 * @protected
		 **/
		Ticker._handleSynch = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
	
			// run if enough time has elapsed, with a little bit of flexibility to be early:
			if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval-1)*0.97) {
				Ticker._tick();
			}
		};
	
		/**
		 * @method _handleRAF
		 * @static
		 * @protected
		 **/
		Ticker._handleRAF = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
			Ticker._tick();
		};
	
		/**
		 * @method _handleTimeout
		 * @static
		 * @protected
		 **/
		Ticker._handleTimeout = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
			Ticker._tick();
		};
	
		/**
		 * @method _setupTick
		 * @static
		 * @protected
		 **/
		Ticker._setupTick = function() {
			if (Ticker._timerId != null) { return; } // avoid duplicates
	
			var mode = Ticker.timingMode||(Ticker.useRAF&&Ticker.RAF_SYNCHED);
			if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
				var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				if (f) {
					Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
					Ticker._raf = true;
					return;
				}
			}
			Ticker._raf = false;
			Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
		};
	
		/**
		 * @method _tick
		 * @static
		 * @protected
		 **/
		Ticker._tick = function() {
			var paused = Ticker.paused;
			var time = Ticker._getTime();
			var elapsedTime = time-Ticker._lastTime;
			Ticker._lastTime = time;
			Ticker._ticks++;
			
			if (paused) {
				Ticker._pausedTicks++;
				Ticker._pausedTime += elapsedTime;
			}
			
			if (Ticker.hasEventListener("tick")) {
				var event = new createjs.Event("tick");
				var maxDelta = Ticker.maxDelta;
				event.delta = (maxDelta && elapsedTime > maxDelta) ? maxDelta : elapsedTime;
				event.paused = paused;
				event.time = time;
				event.runTime = time-Ticker._pausedTime;
				Ticker.dispatchEvent(event);
			}
			
			Ticker._tickTimes.unshift(Ticker._getTime()-time);
			while (Ticker._tickTimes.length > 100) { Ticker._tickTimes.pop(); }
	
			Ticker._times.unshift(time);
			while (Ticker._times.length > 100) { Ticker._times.pop(); }
		};
	
		/**
		 * @method _getTime
		 * @static
		 * @protected
		 **/
		var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
		Ticker._getTime = function() {
			return ((now&&now.call(performance))||(new Date().getTime())) - Ticker._startTime;
		};
	
	
		createjs.Ticker = Ticker;
	}());
	
	//##############################################################################
	// UID.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Global utility for generating sequential unique ID numbers. The UID class uses a static interface (ex. <code>UID.get()</code>)
		 * and should not be instantiated.
		 * @class UID
		 * @static
		 **/
		function UID() {
			throw "UID cannot be instantiated";
		}
	
	
	// private static properties:
		/**
		 * @property _nextID
		 * @type Number
		 * @protected
		 **/
		UID._nextID = 0;
	
	
	// public static methods:
		/**
		 * Returns the next unique id.
		 * @method get
		 * @return {Number} The next unique id
		 * @static
		 **/
		UID.get = function() {
			return UID._nextID++;
		};
	
	
		createjs.UID = UID;
	}());
	
	//##############################################################################
	// MouseEvent.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Passed as the parameter to all mouse/pointer/touch related events. For a listing of mouse events and their properties,
		 * see the {{#crossLink "DisplayObject"}}{{/crossLink}} and {{#crossLink "Stage"}}{{/crossLink}} event listings.
		 * @class MouseEvent
		 * @param {String} type The event type.
		 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
		 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
		 * @param {Number} stageX The normalized x position relative to the stage.
		 * @param {Number} stageY The normalized y position relative to the stage.
		 * @param {MouseEvent} nativeEvent The native DOM event related to this mouse event.
		 * @param {Number} pointerID The unique id for the pointer.
		 * @param {Boolean} primary Indicates whether this is the primary pointer in a multitouch environment.
		 * @param {Number} rawX The raw x position relative to the stage.
		 * @param {Number} rawY The raw y position relative to the stage.
		 * @param {DisplayObject} relatedTarget The secondary target for the event.
		 * @extends Event
		 * @constructor
		 **/
		function MouseEvent(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY, relatedTarget) {
			this.Event_constructor(type, bubbles, cancelable);
			
			
		// public properties:
			/**
			 * The normalized x position on the stage. This will always be within the range 0 to stage width.
			 * @property stageX
			 * @type Number
			*/
			this.stageX = stageX;
		
			/**
			 * The normalized y position on the stage. This will always be within the range 0 to stage height.
			 * @property stageY
			 * @type Number
			 **/
			this.stageY = stageY;
		
			/**
			 * The raw x position relative to the stage. Normally this will be the same as the stageX value, unless
			 * stage.mouseMoveOutside is true and the pointer is outside of the stage bounds.
			 * @property rawX
			 * @type Number
			*/
			this.rawX = (rawX==null)?stageX:rawX;
		
			/**
			 * The raw y position relative to the stage. Normally this will be the same as the stageY value, unless
			 * stage.mouseMoveOutside is true and the pointer is outside of the stage bounds.
			 * @property rawY
			 * @type Number
			*/
			this.rawY = (rawY==null)?stageY:rawY;
		
			/**
			 * The native MouseEvent generated by the browser. The properties and API for this
			 * event may differ between browsers. This property will be null if the
			 * EaselJS property was not directly generated from a native MouseEvent.
			 * @property nativeEvent
			 * @type HtmlMouseEvent
			 * @default null
			 **/
			this.nativeEvent = nativeEvent;
		
			/**
			 * The unique id for the pointer (touch point or cursor). This will be either -1 for the mouse, or the system
			 * supplied id value.
			 * @property pointerID
			 * @type {Number}
			 */
			this.pointerID = pointerID;
		
			/**
			 * Indicates whether this is the primary pointer in a multitouch environment. This will always be true for the mouse.
			 * For touch pointers, the first pointer in the current stack will be considered the primary pointer.
			 * @property primary
			 * @type {Boolean}
			 */
			this.primary = !!primary;
			
			/**
			 * The secondary target for the event, if applicable. This is used for mouseout/rollout
			 * events to indicate the object that the mouse entered from, mouseover/rollover for the object the mouse exited,
			 * and stagemousedown/stagemouseup events for the object that was the under the cursor, if any.
			 * 
			 * Only valid interaction targets will be returned (ie. objects with mouse listeners or a cursor set).
			 * @property relatedTarget
			 * @type {DisplayObject}
			 */
			this.relatedTarget = relatedTarget;
		}
		var p = createjs.extend(MouseEvent, createjs.Event);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
		
		
	// getter / setters:
		/**
		 * Returns the x position of the mouse in the local coordinate system of the current target (ie. the dispatcher).
		 * @property localX
		 * @type {Number}
		 * @readonly
		 */
		p._get_localX = function() {
			return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
		};
		
		/**
		 * Returns the y position of the mouse in the local coordinate system of the current target (ie. the dispatcher).
		 * @property localY
		 * @type {Number}
		 * @readonly
		 */
		p._get_localY = function() {
			return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
		};
		
		/**
		 * Indicates whether the event was generated by a touch input (versus a mouse input).
		 * @property isTouch
		 * @type {Boolean}
		 * @readonly
		 */
		p._get_isTouch = function() {
			return this.pointerID !== -1;
		};
		
		
		try {
			Object.defineProperties(p, {
				localX: { get: p._get_localX },
				localY: { get: p._get_localY },
				isTouch: { get: p._get_isTouch }
			});
		} catch (e) {} // TODO: use Log
	
	
	// public methods:
		/**
		 * Returns a clone of the MouseEvent instance.
		 * @method clone
		 * @return {MouseEvent} a clone of the MouseEvent instance.
		 **/
		p.clone = function() {
			return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]";
		};
	
	
		createjs.MouseEvent = createjs.promote(MouseEvent, "Event");
	}());
	
	//##############################################################################
	// Matrix2D.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
		 *
		 * This matrix can be visualized as:
		 *
		 * 	[ a  c  tx
		 * 	  b  d  ty
		 * 	  0  0  1  ]
		 *
		 * Note the locations of b and c.
		 *
		 * @class Matrix2D
		 * @param {Number} [a=1] Specifies the a property for the new matrix.
		 * @param {Number} [b=0] Specifies the b property for the new matrix.
		 * @param {Number} [c=0] Specifies the c property for the new matrix.
		 * @param {Number} [d=1] Specifies the d property for the new matrix.
		 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
		 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
		 * @constructor
		 **/
		function Matrix2D(a, b, c, d, tx, ty) {
			this.setValues(a,b,c,d,tx,ty);
			
		// public properties:
			// assigned in the setValues method.
			/**
			 * Position (0, 0) in a 3x3 affine transformation matrix.
			 * @property a
			 * @type Number
			 **/
		
			/**
			 * Position (0, 1) in a 3x3 affine transformation matrix.
			 * @property b
			 * @type Number
			 **/
		
			/**
			 * Position (1, 0) in a 3x3 affine transformation matrix.
			 * @property c
			 * @type Number
			 **/
		
			/**
			 * Position (1, 1) in a 3x3 affine transformation matrix.
			 * @property d
			 * @type Number
			 **/
		
			/**
			 * Position (2, 0) in a 3x3 affine transformation matrix.
			 * @property tx
			 * @type Number
			 **/
		
			/**
			 * Position (2, 1) in a 3x3 affine transformation matrix.
			 * @property ty
			 * @type Number
			 **/
		}
		var p = Matrix2D.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// constants:
		/**
		 * Multiplier for converting degrees to radians. Used internally by Matrix2D.
		 * @property DEG_TO_RAD
		 * @static
		 * @final
		 * @type Number
		 * @readonly
		 **/
		Matrix2D.DEG_TO_RAD = Math.PI/180;
	
	
	// static public properties:
		/**
		 * An identity matrix, representing a null transformation.
		 * @property identity
		 * @static
		 * @type Matrix2D
		 * @readonly
		 **/
		Matrix2D.identity = null; // set at bottom of class definition.
		
	
	// public methods:
		/**
		 * Sets the specified values on this instance. 
		 * @method setValues
		 * @param {Number} [a=1] Specifies the a property for the new matrix.
		 * @param {Number} [b=0] Specifies the b property for the new matrix.
		 * @param {Number} [c=0] Specifies the c property for the new matrix.
		 * @param {Number} [d=1] Specifies the d property for the new matrix.
		 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
		 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
		 * @return {Matrix2D} This instance. Useful for chaining method calls.
		*/
		p.setValues = function(a, b, c, d, tx, ty) {
			// don't forget to update docs in the constructor if these change:
			this.a = (a == null) ? 1 : a;
			this.b = b || 0;
			this.c = c || 0;
			this.d = (d == null) ? 1 : d;
			this.tx = tx || 0;
			this.ty = ty || 0;
			return this;
		};
	
		/**
		 * Appends the specified matrix properties to this matrix. All parameters are required.
		 * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
		 * @method append
		 * @param {Number} a
		 * @param {Number} b
		 * @param {Number} c
		 * @param {Number} d
		 * @param {Number} tx
		 * @param {Number} ty
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.append = function(a, b, c, d, tx, ty) {
			var a1 = this.a;
			var b1 = this.b;
			var c1 = this.c;
			var d1 = this.d;
			if (a != 1 || b != 0 || c != 0 || d != 1) {
				this.a  = a1*a+c1*b;
				this.b  = b1*a+d1*b;
				this.c  = a1*c+c1*d;
				this.d  = b1*c+d1*d;
			}
			this.tx = a1*tx+c1*ty+this.tx;
			this.ty = b1*tx+d1*ty+this.ty;
			return this;
		};
	
		/**
		 * Prepends the specified matrix properties to this matrix.
		 * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
		 * All parameters are required.
		 * @method prepend
		 * @param {Number} a
		 * @param {Number} b
		 * @param {Number} c
		 * @param {Number} d
		 * @param {Number} tx
		 * @param {Number} ty
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.prepend = function(a, b, c, d, tx, ty) {
			var a1 = this.a;
			var c1 = this.c;
			var tx1 = this.tx;
	
			this.a  = a*a1+c*this.b;
			this.b  = b*a1+d*this.b;
			this.c  = a*c1+c*this.d;
			this.d  = b*c1+d*this.d;
			this.tx = a*tx1+c*this.ty+tx;
			this.ty = b*tx1+d*this.ty+ty;
			return this;
		};
	
		/**
		 * Appends the specified matrix to this matrix.
		 * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
		 * @method appendMatrix
		 * @param {Matrix2D} matrix
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.appendMatrix = function(matrix) {
			return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
		};
	
		/**
		 * Prepends the specified matrix to this matrix.
		 * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
		 * For example, you could calculate the combined transformation for a child object using:
		 * 
		 * 	var o = myDisplayObject;
		 * 	var mtx = o.getMatrix();
		 * 	while (o = o.parent) {
		 * 		// prepend each parent's transformation in turn:
		 * 		o.prependMatrix(o.getMatrix());
		 * 	}
		 * @method prependMatrix
		 * @param {Matrix2D} matrix
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.prependMatrix = function(matrix) {
			return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
		};
	
		/**
		 * Generates matrix properties from the specified display object transform properties, and appends them to this matrix.
		 * For example, you can use this to generate a matrix representing the transformations of a display object:
		 * 
		 * 	var mtx = new createjs.Matrix2D();
		 * 	mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
		 * @method appendTransform
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} scaleX
		 * @param {Number} scaleY
		 * @param {Number} rotation
		 * @param {Number} skewX
		 * @param {Number} skewY
		 * @param {Number} regX Optional.
		 * @param {Number} regY Optional.
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.appendTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
			if (rotation%360) {
				var r = rotation*Matrix2D.DEG_TO_RAD;
				var cos = Math.cos(r);
				var sin = Math.sin(r);
			} else {
				cos = 1;
				sin = 0;
			}
	
			if (skewX || skewY) {
				// TODO: can this be combined into a single append operation?
				skewX *= Matrix2D.DEG_TO_RAD;
				skewY *= Matrix2D.DEG_TO_RAD;
				this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
				this.append(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, 0, 0);
			} else {
				this.append(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, x, y);
			}
			
			if (regX || regY) {
				// append the registration offset:
				this.tx -= regX*this.a+regY*this.c; 
				this.ty -= regX*this.b+regY*this.d;
			}
			return this;
		};
	
		/**
		 * Generates matrix properties from the specified display object transform properties, and prepends them to this matrix.
		 * For example, you could calculate the combined transformation for a child object using:
		 * 
		 * 	var o = myDisplayObject;
		 * 	var mtx = new createjs.Matrix2D();
		 * 	do  {
		 * 		// prepend each parent's transformation in turn:
		 * 		mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
		 * 	} while (o = o.parent);
		 * 	
		 * 	Note that the above example would not account for {{#crossLink "DisplayObject/transformMatrix:property"}}{{/crossLink}}
		 * 	values. See {{#crossLink "Matrix2D/prependMatrix"}}{{/crossLink}} for an example that does.
		 * @method prependTransform
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} scaleX
		 * @param {Number} scaleY
		 * @param {Number} rotation
		 * @param {Number} skewX
		 * @param {Number} skewY
		 * @param {Number} regX Optional.
		 * @param {Number} regY Optional.
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.prependTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
			if (rotation%360) {
				var r = rotation*Matrix2D.DEG_TO_RAD;
				var cos = Math.cos(r);
				var sin = Math.sin(r);
			} else {
				cos = 1;
				sin = 0;
			}
	
			if (regX || regY) {
				// prepend the registration offset:
				this.tx -= regX; this.ty -= regY;
			}
			if (skewX || skewY) {
				// TODO: can this be combined into a single prepend operation?
				skewX *= Matrix2D.DEG_TO_RAD;
				skewY *= Matrix2D.DEG_TO_RAD;
				this.prepend(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, 0, 0);
				this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
			} else {
				this.prepend(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, x, y);
			}
			return this;
		};
	
		/**
		 * Applies a clockwise rotation transformation to the matrix.
		 * @method rotate
		 * @param {Number} angle The angle to rotate by, in degrees. To use a value in radians, multiply it by `180/Math.PI`.
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.rotate = function(angle) {
			angle = angle*Matrix2D.DEG_TO_RAD;
			var cos = Math.cos(angle);
			var sin = Math.sin(angle);
	
			var a1 = this.a;
			var b1 = this.b;
	
			this.a = a1*cos+this.c*sin;
			this.b = b1*cos+this.d*sin;
			this.c = -a1*sin+this.c*cos;
			this.d = -b1*sin+this.d*cos;
			return this;
		};
	
		/**
		 * Applies a skew transformation to the matrix.
		 * @method skew
		 * @param {Number} skewX The amount to skew horizontally in degrees. To use a value in radians, multiply it by `180/Math.PI`.
		 * @param {Number} skewY The amount to skew vertically in degrees.
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		*/
		p.skew = function(skewX, skewY) {
			skewX = skewX*Matrix2D.DEG_TO_RAD;
			skewY = skewY*Matrix2D.DEG_TO_RAD;
			this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
			return this;
		};
	
		/**
		 * Applies a scale transformation to the matrix.
		 * @method scale
		 * @param {Number} x The amount to scale horizontally. E.G. a value of 2 will double the size in the X direction, and 0.5 will halve it.
		 * @param {Number} y The amount to scale vertically.
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.scale = function(x, y) {
			this.a *= x;
			this.b *= x;
			this.c *= y;
			this.d *= y;
			//this.tx *= x;
			//this.ty *= y;
			return this;
		};
	
		/**
		 * Translates the matrix on the x and y axes.
		 * @method translate
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.translate = function(x, y) {
			this.tx += this.a*x + this.c*y;
			this.ty += this.b*x + this.d*y;
			return this;
		};
	
		/**
		 * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
		 * @method identity
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.identity = function() {
			this.a = this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this;
		};
	
		/**
		 * Inverts the matrix, causing it to perform the opposite transformation.
		 * @method invert
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		 **/
		p.invert = function() {
			var a1 = this.a;
			var b1 = this.b;
			var c1 = this.c;
			var d1 = this.d;
			var tx1 = this.tx;
			var n = a1*d1-b1*c1;
	
			this.a = d1/n;
			this.b = -b1/n;
			this.c = -c1/n;
			this.d = a1/n;
			this.tx = (c1*this.ty-d1*tx1)/n;
			this.ty = -(a1*this.ty-b1*tx1)/n;
			return this;
		};
	
		/**
		 * Returns true if the matrix is an identity matrix.
		 * @method isIdentity
		 * @return {Boolean}
		 **/
		p.isIdentity = function() {
			return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
		};
		
		/**
		 * Returns true if this matrix is equal to the specified matrix (all property values are equal).
		 * @method equals
		 * @param {Matrix2D} matrix The matrix to compare.
		 * @return {Boolean}
		 **/
		p.equals = function(matrix) {
			return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d;
		};
	
		/**
		 * Transforms a point according to this matrix.
		 * @method transformPoint
		 * @param {Number} x The x component of the point to transform.
		 * @param {Number} y The y component of the point to transform.
		 * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
		 * @return {Point} This matrix. Useful for chaining method calls.
		 **/
		p.transformPoint = function(x, y, pt) {
			pt = pt||{};
			pt.x = x*this.a+y*this.c+this.tx;
			pt.y = x*this.b+y*this.d+this.ty;
			return pt;
		};
	
		/**
		 * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that these values
		 * may not match the transform properties you used to generate the matrix, though they will produce the same visual
		 * results.
		 * @method decompose
		 * @param {Object} target The object to apply the transform properties to. If null, then a new object will be returned.
		 * @return {Object} The target, or a new generic object with the transform properties applied.
		*/
		p.decompose = function(target) {
			// TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation even when scale is negative
			if (target == null) { target = {}; }
			target.x = this.tx;
			target.y = this.ty;
			target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
			target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
	
			var skewX = Math.atan2(-this.c, this.d);
			var skewY = Math.atan2(this.b, this.a);
	
			var delta = Math.abs(1-skewX/skewY);
			if (delta < 0.00001) { // effectively identical, can use rotation:
				target.rotation = skewY/Matrix2D.DEG_TO_RAD;
				if (this.a < 0 && this.d >= 0) {
					target.rotation += (target.rotation <= 0) ? 180 : -180;
				}
				target.skewX = target.skewY = 0;
			} else {
				target.skewX = skewX/Matrix2D.DEG_TO_RAD;
				target.skewY = skewY/Matrix2D.DEG_TO_RAD;
			}
			return target;
		};
		
		/**
		 * Copies all properties from the specified matrix to this matrix.
		 * @method copy
		 * @param {Matrix2D} matrix The matrix to copy properties from.
		 * @return {Matrix2D} This matrix. Useful for chaining method calls.
		*/
		p.copy = function(matrix) {
			return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
		};
	
		/**
		 * Returns a clone of the Matrix2D instance.
		 * @method clone
		 * @return {Matrix2D} a clone of the Matrix2D instance.
		 **/
		p.clone = function() {
			return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty);
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]";
		};
	
		// this has to be populated after the class is defined:
		Matrix2D.identity = new Matrix2D();
	
	
		createjs.Matrix2D = Matrix2D;
	}());
	
	//##############################################################################
	// DisplayProps.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
		/**
		 * Used for calculating and encapsulating display related properties.
		 * @class DisplayProps
		 * @param {Number} [visible=true] Visible value.
		 * @param {Number} [alpha=1] Alpha value.
		 * @param {Number} [shadow=null] A Shadow instance or null.
		 * @param {Number} [compositeOperation=null] A compositeOperation value or null.
		 * @param {Number} [matrix] A transformation matrix. Defaults to a new identity matrix.
		 * @constructor
		 **/
		function DisplayProps(visible, alpha, shadow, compositeOperation, matrix) {
			this.setValues(visible, alpha, shadow, compositeOperation, matrix);
			
		// public properties:
			// assigned in the setValues method.
			/**
			 * Property representing the alpha that will be applied to a display object.
			 * @property alpha
			 * @type Number
			 **/
		
			/**
			 * Property representing the shadow that will be applied to a display object.
			 * @property shadow
			 * @type Shadow
			 **/
		
			/**
			 * Property representing the compositeOperation that will be applied to a display object.
			 * You can find a list of valid composite operations at:
			 * <a href="https://developer.mozilla.org/en/Canvas_tutorial/Compositing">https://developer.mozilla.org/en/Canvas_tutorial/Compositing</a>
			 * @property compositeOperation
			 * @type String
			 **/
			
			/**
			 * Property representing the value for visible that will be applied to a display object.
			 * @property visible
			 * @type Boolean
			 **/
			
			/**
			 * The transformation matrix that will be applied to a display object.
			 * @property matrix
			 * @type Matrix2D
			 **/
		}
		var p = DisplayProps.prototype;
	
	// initialization:
		/**
		 * Reinitializes the instance with the specified values.
		 * @method setValues
		 * @param {Number} [visible=true] Visible value.
		 * @param {Number} [alpha=1] Alpha value.
		 * @param {Number} [shadow=null] A Shadow instance or null.
		 * @param {Number} [compositeOperation=null] A compositeOperation value or null.
		 * @param {Number} [matrix] A transformation matrix. Defaults to an identity matrix.
		 * @return {DisplayProps} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.setValues = function (visible, alpha, shadow, compositeOperation, matrix) {
			this.visible = visible == null ? true : !!visible;
			this.alpha = alpha == null ? 1 : alpha;
			this.shadow = shadow;
			this.compositeOperation = compositeOperation;
			this.matrix = matrix || (this.matrix&&this.matrix.identity()) || new createjs.Matrix2D();
			return this;
		};
	
	// public methods:
		/**
		 * Appends the specified display properties. This is generally used to apply a child's properties its parent's.
		 * @method append
		 * @param {Boolean} visible desired visible value
		 * @param {Number} alpha desired alpha value
		 * @param {Shadow} shadow desired shadow value
		 * @param {String} compositeOperation desired composite operation value
		 * @param {Matrix2D} [matrix] a Matrix2D instance
		 * @return {DisplayProps} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.append = function(visible, alpha, shadow, compositeOperation, matrix) {
			this.alpha *= alpha;
			this.shadow = shadow || this.shadow;
			this.compositeOperation = compositeOperation || this.compositeOperation;
			this.visible = this.visible && visible;
			matrix&&this.matrix.appendMatrix(matrix);
			return this;
		};
		
		/**
		 * Prepends the specified display properties. This is generally used to apply a parent's properties to a child's.
		 * For example, to get the combined display properties that would be applied to a child, you could use:
		 * 
		 * 	var o = myDisplayObject;
		 * 	var props = new createjs.DisplayProps();
		 * 	do {
		 * 		// prepend each parent's props in turn:
		 * 		props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation, o.getMatrix());
		 * 	} while (o = o.parent);
		 * 	
		 * @method prepend
		 * @param {Boolean} visible desired visible value
		 * @param {Number} alpha desired alpha value
		 * @param {Shadow} shadow desired shadow value
		 * @param {String} compositeOperation desired composite operation value
		 * @param {Matrix2D} [matrix] a Matrix2D instance
		 * @return {DisplayProps} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.prepend = function(visible, alpha, shadow, compositeOperation, matrix) {
			this.alpha *= alpha;
			this.shadow = this.shadow || shadow;
			this.compositeOperation = this.compositeOperation || compositeOperation;
			this.visible = this.visible && visible;
			matrix&&this.matrix.prependMatrix(matrix);
			return this;
		};
		
		/**
		 * Resets this instance and its matrix to default values.
		 * @method identity
		 * @return {DisplayProps} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.identity = function() {
			this.visible = true;
			this.alpha = 1;
			this.shadow = this.compositeOperation = null;
			this.matrix.identity();
			return this;
		};
		
		/**
		 * Returns a clone of the DisplayProps instance. Clones the associated matrix.
		 * @method clone
		 * @return {DisplayProps} a clone of the DisplayProps instance.
		 **/
		p.clone = function() {
			return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
		};
	
	// private methods:
	
		createjs.DisplayProps = DisplayProps;
	})();
	
	//##############################################################################
	// Point.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Represents a point on a 2 dimensional x / y coordinate system.
		 *
		 * <h4>Example</h4>
		 * 
		 *      var point = new createjs.Point(0, 100);
		 * 
		 * @class Point
		 * @param {Number} [x=0] X position.
		 * @param {Number} [y=0] Y position.
		 * @constructor
		 **/
		function Point(x, y) {
		 	this.setValues(x, y);
		 	
		 	
		// public properties:
			// assigned in the setValues method.
			/**
			 * X position.
			 * @property x
			 * @type Number
			 **/
		
			/**
			 * Y position.
			 * @property y
			 * @type Number
			 **/
		}
		var p = Point.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
		
	// public methods:
		/** 
		 * Sets the specified values on this instance.
		 * @method setValues
		 * @param {Number} [x=0] X position.
		 * @param {Number} [y=0] Y position.
		 * @return {Point} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.setValues = function(x, y) {
			this.x = x||0;
			this.y = y||0;
			return this;
		};
		
		/**
		 * Copies all properties from the specified point to this point.
		 * @method copy
		 * @param {Point} point The point to copy properties from.
		 * @return {Point} This point. Useful for chaining method calls.
		 * @chainable
		*/
		p.copy = function(point) {
			this.x = point.x;
			this.y = point.y;
			return this;
		};
		
		/**
		 * Returns a clone of the Point instance.
		 * @method clone
		 * @return {Point} a clone of the Point instance.
		 **/
		p.clone = function() {
			return new Point(this.x, this.y);
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Point (x="+this.x+" y="+this.y+")]";
		};
		
		
		createjs.Point = Point;
	}());
	
	//##############################################################################
	// Rectangle.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Represents a rectangle as defined by the points (x, y) and (x+width, y+height).
		 *
		 * <h4>Example</h4>
		 *
		 *      var rect = new createjs.Rectangle(0, 0, 100, 100);
		 *
		 * @class Rectangle
		 * @param {Number} [x=0] X position.
		 * @param {Number} [y=0] Y position.
		 * @param {Number} [width=0] The width of the Rectangle.
		 * @param {Number} [height=0] The height of the Rectangle.
		 * @constructor
		 **/
		function Rectangle(x, y, width, height) {
			this.setValues(x, y, width, height);
			
			
		// public properties:
			// assigned in the setValues method.
			/**
			 * X position.
			 * @property x
			 * @type Number
			 **/
		
			/**
			 * Y position.
			 * @property y
			 * @type Number
			 **/
		
			/**
			 * Width.
			 * @property width
			 * @type Number
			 **/
		
			/**
			 * Height.
			 * @property height
			 * @type Number
			 **/
		}
		var p = Rectangle.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// public methods:
		/** 
		 * Sets the specified values on this instance.
		 * @method setValues
		 * @param {Number} [x=0] X position.
		 * @param {Number} [y=0] Y position.
		 * @param {Number} [width=0] The width of the Rectangle.
		 * @param {Number} [height=0] The height of the Rectangle.
		 * @return {Rectangle} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.setValues = function(x, y, width, height) {
			// don't forget to update docs in the constructor if these change:
			this.x = x||0;
			this.y = y||0;
			this.width = width||0;
			this.height = height||0;
			return this;
		};
		
		/** 
		 * Extends the rectangle's bounds to include the described point or rectangle.
		 * @method extend
		 * @param {Number} x X position of the point or rectangle.
		 * @param {Number} y Y position of the point or rectangle.
		 * @param {Number} [width=0] The width of the rectangle.
		 * @param {Number} [height=0] The height of the rectangle.
		 * @return {Rectangle} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.extend = function(x, y, width, height) {
			width = width||0;
			height = height||0;
			if (x+width > this.x+this.width) { this.width = x+width-this.x; }
			if (y+height > this.y+this.height) { this.height = y+height-this.y; }
			if (x < this.x) { this.width += this.x-x; this.x = x; }
			if (y < this.y) { this.height += this.y-y; this.y = y; }
			return this;
		};
		
		/** 
		 * Adds the specified padding to the rectangle's bounds.
		 * @method pad
		 * @param {Number} top
		 * @param {Number} left
		 * @param {Number} right
		 * @param {Number} bottom
		 * @return {Rectangle} This instance. Useful for chaining method calls.
		 * @chainable
		*/
		p.pad = function(top, left, bottom, right) {
			this.x -= left;
			this.y -= top;
			this.width += left+right;
			this.height += top+bottom;
			return this;
		};
		
		/**
		 * Copies all properties from the specified rectangle to this rectangle.
		 * @method copy
		 * @param {Rectangle} rectangle The rectangle to copy properties from.
		 * @return {Rectangle} This rectangle. Useful for chaining method calls.
		 * @chainable
		*/
		p.copy = function(rectangle) {
			return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
		};
		
		/** 
		 * Returns true if this rectangle fully encloses the described point or rectangle.
		 * @method contains
		 * @param {Number} x X position of the point or rectangle.
		 * @param {Number} y Y position of the point or rectangle.
		 * @param {Number} [width=0] The width of the rectangle.
		 * @param {Number} [height=0] The height of the rectangle.
		 * @return {Boolean} True if the described point or rectangle is contained within this rectangle.
		*/
		p.contains = function(x, y, width, height) {
			width = width||0;
			height = height||0;
			return (x >= this.x && x+width <= this.x+this.width && y >= this.y && y+height <= this.y+this.height);
		};
		
		/** 
		 * Returns a new rectangle which contains this rectangle and the specified rectangle.
		 * @method union
		 * @param {Rectangle} rect The rectangle to calculate a union with.
		 * @return {Rectangle} A new rectangle describing the union.
		*/
		p.union = function(rect) {
			return this.clone().extend(rect.x, rect.y, rect.width, rect.height);
		};
		
		/** 
		 * Returns a new rectangle which describes the intersection (overlap) of this rectangle and the specified rectangle,
		 * or null if they do not intersect.
		 * @method intersection
		 * @param {Rectangle} rect The rectangle to calculate an intersection with.
		 * @return {Rectangle} A new rectangle describing the intersection or null.
		*/
		p.intersection = function(rect) {
			var x1 = rect.x, y1 = rect.y, x2 = x1+rect.width, y2 = y1+rect.height;
			if (this.x > x1) { x1 = this.x; }
			if (this.y > y1) { y1 = this.y; }
			if (this.x + this.width < x2) { x2 = this.x + this.width; }
			if (this.y + this.height < y2) { y2 = this.y + this.height; }
			return (x2 <= x1 || y2 <= y1) ? null : new Rectangle(x1, y1, x2-x1, y2-y1);
		};
		
		/** 
		 * Returns true if the specified rectangle intersects (has any overlap) with this rectangle.
		 * @method intersects
		 * @param {Rectangle} rect The rectangle to compare.
		 * @return {Boolean} True if the rectangles intersect.
		*/
		p.intersects = function(rect) {
			return (rect.x <= this.x+this.width && this.x <= rect.x+rect.width && rect.y <= this.y+this.height && this.y <= rect.y + rect.height);
		};
		
		/** 
		 * Returns true if the width or height are equal or less than 0.
		 * @method isEmpty
		 * @return {Boolean} True if the rectangle is empty.
		*/
		p.isEmpty = function() {
			return this.width <= 0 || this.height <= 0;
		};
		
		/**
		 * Returns a clone of the Rectangle instance.
		 * @method clone
		 * @return {Rectangle} a clone of the Rectangle instance.
		 **/
		p.clone = function() {
			return new Rectangle(this.x, this.y, this.width, this.height);
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]";
		};
		
		
		createjs.Rectangle = Rectangle;
	}());
	
	//##############################################################################
	// ButtonHelper.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The ButtonHelper is a helper class to create interactive buttons from {{#crossLink "MovieClip"}}{{/crossLink}} or
		 * {{#crossLink "Sprite"}}{{/crossLink}} instances. This class will intercept mouse events from an object, and
		 * automatically call {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} or {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}},
		 * to the respective animation labels, add a pointer cursor, and allows the user to define a hit state frame.
		 *
		 * The ButtonHelper instance does not need to be added to the stage, but a reference should be maintained to prevent
		 * garbage collection.
		 * 
		 * Note that over states will not work unless you call {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
		 *
		 * <h4>Example</h4>
		 *
		 *      var helper = new createjs.ButtonHelper(myInstance, "out", "over", "down", false, myInstance, "hit");
		 *      myInstance.addEventListener("click", handleClick);
		 *      function handleClick(event) {
		 *          // Click Happened.
		 *      }
		 *
		 * @class ButtonHelper
		 * @param {Sprite|MovieClip} target The instance to manage.
		 * @param {String} [outLabel="out"] The label or animation to go to when the user rolls out of the button.
		 * @param {String} [overLabel="over"] The label or animation to go to when the user rolls over the button.
		 * @param {String} [downLabel="down"] The label or animation to go to when the user presses the button.
		 * @param {Boolean} [play=false] If the helper should call "gotoAndPlay" or "gotoAndStop" on the button when changing
		 * states.
		 * @param {DisplayObject} [hitArea] An optional item to use as the hit state for the button. If this is not defined,
		 * then the button's visible states will be used instead. Note that the same instance as the "target" argument can be
		 * used for the hitState.
		 * @param {String} [hitLabel] The label or animation on the hitArea instance that defines the hitArea bounds. If this is
		 * null, then the default state of the hitArea will be used. *
		 * @constructor
		 */
		function ButtonHelper(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
			if (!target.addEventListener) { return; }
		
		
		// public properties:
			/**
			 * The target for this button helper.
			 * @property target
			 * @type MovieClip | Sprite
			 * @readonly
			 **/
			this.target = target;
		
			/**
			 * The label name or frame number to display when the user mouses out of the target. Defaults to "over".
			 * @property overLabel
			 * @type String | Number
			 **/
			this.overLabel = overLabel == null ? "over" : overLabel;
		
			/**
			 * The label name or frame number to display when the user mouses over the target. Defaults to "out".
			 * @property outLabel
			 * @type String | Number
			 **/
			this.outLabel = outLabel == null ? "out" : outLabel;
		
			/**
			 * The label name or frame number to display when the user presses on the target. Defaults to "down".
			 * @property downLabel
			 * @type String | Number
			 **/
			this.downLabel = downLabel == null ? "down" : downLabel;
		
			/**
			 * If true, then ButtonHelper will call gotoAndPlay, if false, it will use gotoAndStop. Default is false.
			 * @property play
			 * @default false
			 * @type Boolean
			 **/
			this.play = play;
			
			
		//  private properties
			/**
			 * @property _isPressed
			 * @type Boolean
			 * @protected
			 **/
			this._isPressed = false;
		
			/**
			 * @property _isOver
			 * @type Boolean
			 * @protected
			 **/
			this._isOver = false;
		
			/**
			 * @property _enabled
			 * @type Boolean
			 * @protected
			 **/
			this._enabled = false;
			
		// setup:
			target.mouseChildren = false; // prevents issues when children are removed from the display list when state changes.
			this.enabled = true;
			this.handleEvent({});
			if (hitArea) {
				if (hitLabel) {
					hitArea.actionsEnabled = false;
					hitArea.gotoAndStop&&hitArea.gotoAndStop(hitLabel);
				}
				target.hitArea = hitArea;
			}
		}
		var p = ButtonHelper.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
		
	// getter / setters:
		/**
		 * Use the {{#crossLink "ButtonHelper/enabled:property"}}{{/crossLink}} property instead.
		 * @method setEnabled
		 * @param {Boolean} value
		 * @deprecated
		 **/
		p.setEnabled = function(value) { // TODO: deprecated.
			if (value == this._enabled) { return; }
			var o = this.target;
			this._enabled = value;
			if (value) {
				o.cursor = "pointer";
				o.addEventListener("rollover", this);
				o.addEventListener("rollout", this);
				o.addEventListener("mousedown", this);
				o.addEventListener("pressup", this);
				if (o._reset) { o.__reset = o._reset; o._reset = this._reset;}
			} else {
				o.cursor = null;
				o.removeEventListener("rollover", this);
				o.removeEventListener("rollout", this);
				o.removeEventListener("mousedown", this);
				o.removeEventListener("pressup", this);
				if (o.__reset) { o._reset = o.__reset; delete(o.__reset); }
			}
		};
		/**
		 * Use the {{#crossLink "ButtonHelper/enabled:property"}}{{/crossLink}} property instead.
		 * @method getEnabled
		 * @return {Boolean}
		 * @deprecated
		 **/
		p.getEnabled = function() {
			return this._enabled;
		};
	
		/**
		 * Enables or disables the button functionality on the target.
		 * @property enabled
		 * @type {Boolean}
		 **/
		try {
			Object.defineProperties(p, {
				enabled: { get: p.getEnabled, set: p.setEnabled }
			});
		} catch (e) {} // TODO: use Log
	
	
	// public methods:
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[ButtonHelper]";
		};
	
	
	// private methods:
		/**
		 * @method handleEvent
		 * @param {Object} evt The mouse event to handle.
		 * @protected
		 **/
		p.handleEvent = function(evt) {
			var label, t = this.target, type = evt.type;
			if (type == "mousedown") {
				this._isPressed = true;
				label = this.downLabel;
			} else if (type == "pressup") {
				this._isPressed = false;
				label = this._isOver ? this.overLabel : this.outLabel;
			} else if (type == "rollover") {
				this._isOver = true;
				label = this._isPressed ? this.downLabel : this.overLabel;
			} else { // rollout and default
				this._isOver = false;
				label = this._isPressed ? this.overLabel : this.outLabel;
			}
			if (this.play) {
				t.gotoAndPlay&&t.gotoAndPlay(label);
			} else {
				t.gotoAndStop&&t.gotoAndStop(label);
			}
		};
		
		/**
		 * Injected into target. Preserves the paused state through a reset.
		 * @method _reset
		 * @protected
		 **/
		p._reset = function() {
			// TODO: explore better ways to handle this issue. This is hacky & disrupts object signatures.
			var p = this.paused;
			this.__reset();
			this.paused = p;
		};
	
	
		createjs.ButtonHelper = ButtonHelper;
	}());
	
	//##############################################################################
	// Shadow.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * This class encapsulates the properties required to define a shadow to apply to a {{#crossLink "DisplayObject"}}{{/crossLink}}
		 * via its <code>shadow</code> property.
		 *
		 * <h4>Example</h4>
		 *
		 *      myImage.shadow = new createjs.Shadow("#000000", 5, 5, 10);
		 *
		 * @class Shadow
		 * @constructor
		 * @param {String} color The color of the shadow. This can be any valid CSS color value.
		 * @param {Number} offsetX The x offset of the shadow in pixels.
		 * @param {Number} offsetY The y offset of the shadow in pixels.
		 * @param {Number} blur The size of the blurring effect.
		 **/
		function Shadow(color, offsetX, offsetY, blur) {
			
			
		// public properties:
			/** 
			 * The color of the shadow. This can be any valid CSS color value.
			 * @property color
			 * @type String
			 * @default null
			 */
			this.color = color||"black";
		
			/** The x offset of the shadow.
			 * @property offsetX
			 * @type Number
			 * @default 0
			 */
			this.offsetX = offsetX||0;
		
			/** The y offset of the shadow.
			 * @property offsetY
			 * @type Number
			 * @default 0
			 */
			this.offsetY = offsetY||0;
		
			/** The blur of the shadow.
			 * @property blur
			 * @type Number
			 * @default 0
			 */
			this.blur = blur||0;
		}
		var p = Shadow.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// static public properties:
		/**
		 * An identity shadow object (all properties are set to 0).
		 * @property identity
		 * @type Shadow
		 * @static
		 * @final
		 * @readonly
		 **/
		Shadow.identity = new Shadow("transparent", 0, 0, 0);
	
	
	// public methods:
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Shadow]";
		};
	
		/**
		 * Returns a clone of this Shadow instance.
		 * @method clone
		 * @return {Shadow} A clone of the current Shadow instance.
		 **/
		p.clone = function() {
			return new Shadow(this.color, this.offsetX, this.offsetY, this.blur);
		};
		
	
		createjs.Shadow = Shadow;
	}());
	
	//##############################################################################
	// SpriteSheet.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Encapsulates the properties and methods associated with a sprite sheet. A sprite sheet is a series of images (usually
		 * animation frames) combined into a larger image (or images). For example, an animation consisting of eight 100x100
		 * images could be combined into a single 400x200 sprite sheet (4 frames across by 2 high).
		 *
		 * The data passed to the SpriteSheet constructor defines:
		 * <ol>
		 * 	<li> The source image or images to use.</li>
		 * 	<li> The positions of individual image frames.</li>
		 * 	<li> Sequences of frames that form named animations. Optional.</li>
		 * 	<li> The target playback framerate. Optional.</li>
		 * </ol>
		 * <h3>SpriteSheet Format</h3>
		 * SpriteSheets are an object with two required properties (`images` and `frames`), and two optional properties
		 * (`framerate` and `animations`). This makes them easy to define in javascript code, or in JSON.
		 *
		 * <h4>images</h4>
		 * An array of source images. Images can be either an HTMlimage
		 * instance, or a uri to an image. The former is recommended to control preloading.
		 *
		 * 	images: [image1, "path/to/image2.png"],
		 *
		 * <h4>frames</h4>
		 * Defines the individual frames. There are two supported formats for frame data:
		 * When all of the frames are the same size (in a grid), use an object with `width`, `height`, `regX`, `regY`,
		 * and `count` properties.
		 *
		 * <ul>
		 *  <li>`width` & `height` are required and specify the dimensions of the frames</li>
		 *  <li>`regX` & `regY` indicate the registration point or "origin" of the frames</li>
		 *  <li>`spacing` indicate the spacing between frames</li>
		 *  <li>`margin` specify the margin around the image(s)</li>
		 *  <li>`count` allows you to specify the total number of frames in the spritesheet; if omitted, this will
		 *  be calculated based on the dimensions of the source images and the frames. Frames will be assigned
		 *  indexes based on their position in the source images (left to right, top to bottom).</li>
		 * </ul>
		 *
		 *  	frames: {width:64, height:64, count:20, regX: 32, regY:64, spacing:0, margin:0}
		 *
		 * If the frames are of different sizes, use an array of frame definitions. Each definition is itself an array
		 * with 4 required and 3 optional entries, in the order:
		 *
		 * <ul>
		 *  <li>The first four, `x`, `y`, `width`, and `height` are required and define the frame rectangle.</li>
		 *  <li>The fifth, `imageIndex`, specifies the index of the source image (defaults to 0)</li>
		 *  <li>The last two, `regX` and `regY` specify the registration point of the frame</li>
		 * </ul>
		 *
		 * 	frames: [
		 * 		// x, y, width, height, imageIndex*, regX*, regY*
		 * 		[64, 0, 96, 64],
		 * 		[0, 0, 64, 64, 1, 32, 32]
		 * 		// etc.
		 * 	]
		 *
		 * <h4>animations</h4>
		 * Optional. An object defining sequences of frames to play as named animations. Each property corresponds to an
		 * animation of the same name. Each animation must specify the frames to play, and may
		 * also include a relative playback `speed` (ex. 2 would playback at double speed, 0.5 at half), and
		 * the name of the `next` animation to sequence to after it completes.
		 *
		 * There are three formats supported for defining the frames in an animation, which can be mixed and matched as appropriate:
		 * <ol>
		 * 	<li>for a single frame animation, you can simply specify the frame index
		 *
		 * 		animations: {
		 * 			sit: 7
		 * 		}
		 *
		 * </li>
		 * <li>
		 *      for an animation of consecutive frames, you can use an array with two required, and two optional entries
		 * 		in the order: `start`, `end`, `next`, and `speed`. This will play the frames from start to end inclusive.
		 *
		 * 		animations: {
		 * 			// start, end, next*, speed*
		 * 			run: [0, 8],
		 * 			jump: [9, 12, "run", 2]
		 * 		}
		 *
		 *  </li>
		 *  <li>
		 *     for non-consecutive frames, you can use an object with a `frames` property defining an array of frame
		 *     indexes to play in order. The object can also specify `next` and `speed` properties.
		 *
		 * 		animations: {
		 * 			walk: {
		 * 				frames: [1,2,3,3,2,1]
		 * 			},
		 * 			shoot: {
		 * 				frames: [1,4,5,6],
		 * 				next: "walk",
		 * 				speed: 0.5
		 * 			}
		 * 		}
		 *
		 *  </li>
		 * </ol>
		 * <strong>Note:</strong> the `speed` property was added in EaselJS 0.7.0. Earlier versions had a `frequency`
		 * property instead, which was the inverse of `speed`. For example, a value of "4" would be 1/4 normal speed in
		 * earlier versions, but is 4x normal speed in EaselJS 0.7.0+.
		 *
		 * <h4>framerate</h4>
		 * Optional. Indicates the default framerate to play this spritesheet at in frames per second. See
		 * {{#crossLink "SpriteSheet/framerate:property"}}{{/crossLink}} for more information.
		 *
		 * 		framerate: 20
		 *
		 * Note that the Sprite framerate will only work if the stage update method is provided with the {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
		 * event generated by the {{#crossLink "Ticker"}}{{/crossLink}}.
		 *
		 * 		createjs.Ticker.on("tick", handleTick);
		 * 		function handleTick(event) {
		 *			stage.update(event);
		 *		}
		 *
		 * <h3>Example</h3>
		 * To define a simple sprite sheet, with a single image "sprites.jpg" arranged in a regular 50x50 grid with three
		 * animations: "stand" showing the first frame, "run" looping frame 1-5 inclusive, and "jump" playing frame 6-8 and
		 * sequencing back to run.
		 *
		 * 		var data = {
		 * 			images: ["sprites.jpg"],
		 * 			frames: {width:50, height:50},
		 * 			animations: {
		 * 				stand:0,
		 * 				run:[1,5],
		 * 				jump:[6,8,"run"]
		 * 			}
		 * 		};
		 * 		var spriteSheet = new createjs.SpriteSheet(data);
		 * 		var animation = new createjs.Sprite(spriteSheet, "run");
		 *
		 * <h3>Generating SpriteSheet Images</h3>
		 * Spritesheets can be created manually by combining images in PhotoShop, and specifying the frame size or
		 * coordinates manually, however there are a number of tools that facilitate this.
		 * <ul>
		 *     <li>Exporting SpriteSheets or HTML5 content from Flash Pro supports the EaselJS SpriteSheet format.</li>
		 *     <li>The popular <a href="https://www.codeandweb.com/texturepacker/easeljs" target="_blank">Texture Packer</a> has
		 *     EaselJS support.
		 *     <li>SWF animations in Flash can be exported to SpriteSheets using <a href="http://createjs.com/zoe" target="_blank"></a></li>
		 * </ul>
		 *
		 * <h3>Cross Origin Issues</h3>
		 * <strong>Warning:</strong> Images loaded cross-origin will throw cross-origin security errors when interacted with
		 * using:
		 * <ul>
		 *     <li>a mouse</li>
		 *     <li>methods such as {{#crossLink "Container/getObjectUnderPoint"}}{{/crossLink}}</li>
		 *     <li>Filters (see {{#crossLink "Filter"}}{{/crossLink}})</li>
		 *     <li>caching (see {{#crossLink "DisplayObject/cache"}}{{/crossLink}})</li>
		 * </ul>
		 * You can get around this by setting `crossOrigin` property on your images before passing them to EaselJS, or
		 * setting the `crossOrigin` property on PreloadJS' LoadQueue or LoadItems.
		 *
		 * 		var image = new Image();
		 * 		img.crossOrigin="Anonymous";
		 * 		img.src = "http://server-with-CORS-support.com/path/to/image.jpg";
		 *
		 * If you pass string paths to SpriteSheets, they will not work cross-origin. The server that stores the image must
		 * support cross-origin requests, or this will not work. For more information, check out
		 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS" target="_blank">CORS overview on MDN</a>.
		 *
		 * @class SpriteSheet
		 * @constructor
		 * @param {Object} data An object describing the SpriteSheet data.
		 * @extends EventDispatcher
		 **/
		function SpriteSheet(data) {
			this.EventDispatcher_constructor();
	
	
			// public properties:
			/**
			 * Indicates whether all images are finished loading.
			 * @property complete
			 * @type Boolean
			 * @readonly
			 **/
			this.complete = true;
	
			/**
			 * Specifies the framerate to use by default for Sprite instances using the SpriteSheet. See the Sprite class
			 * {{#crossLink "Sprite/framerate:property"}}{{/crossLink}} for more information.
			 * @property framerate
			 * @type Number
			 **/
			this.framerate = 0;
	
	
			// private properties:
			/**
			 * @property _animations
			 * @protected
			 * @type Array
			 **/
			this._animations = null;
	
			/**
			 * @property _frames
			 * @protected
			 * @type Array
			 **/
			this._frames = null;
	
			/**
			 * @property _images
			 * @protected
			 * @type Array
			 **/
			this._images = null;
	
			/**
			 * @property _data
			 * @protected
			 * @type Object
			 **/
			this._data = null;
	
			/**
			 * @property _loadCount
			 * @protected
			 * @type Number
			 **/
			this._loadCount = 0;
	
			// only used for simple frame defs:
			/**
			 * @property _frameHeight
			 * @protected
			 * @type Number
			 **/
			this._frameHeight = 0;
	
			/**
			 * @property _frameWidth
			 * @protected
			 * @type Number
			 **/
			this._frameWidth = 0;
	
			/**
			 * @property _numFrames
			 * @protected
			 * @type Number
			 **/
			this._numFrames = 0;
	
			/**
			 * @property _regX
			 * @protected
			 * @type Number
			 **/
			this._regX = 0;
	
			/**
			 * @property _regY
			 * @protected
			 * @type Number
			 **/
			this._regY = 0;
	
			/**
			 * @property _spacing
			 * @protected
			 * @type Number
			 **/
			this._spacing = 0;
	
			/**
			 * @property _margin
			 * @protected
			 * @type Number
			 **/
			this._margin = 0;
	
			// setup:
			this._parseData(data);
		}
		var p = createjs.extend(SpriteSheet, createjs.EventDispatcher);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
	// events:
		/**
		 * Dispatched when all images are loaded.  Note that this only fires if the images
		 * were not fully loaded when the sprite sheet was initialized. You should check the complete property
		 * to prior to adding a listener. Ex.
		 *
		 * 	var sheet = new createjs.SpriteSheet(data);
		 * 	if (!sheet.complete) {
		 * 		// not preloaded, listen for the complete event:
		 * 		sheet.addEventListener("complete", handler);
		 * 	}
		 *
		 * @event complete
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @since 0.6.0
		 */
	
		/**
		 * Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by {{#crossLink "SpriteSheetBuilder"}}{{/crossLink}}
		 * when doing on-demand rendering.
		 * @event getframe
		 * @param {Number} index The frame index.
		 * @param {Object} frame The frame object that getFrame will return.
		 */
	
		/**
		 * Dispatched when an image encounters an error. A SpriteSheet will dispatch an error event for each image that
		 * encounters an error, and will still dispatch a {{#crossLink "SpriteSheet/complete:event"}}{{/crossLink}}
		 * event once all images are finished processing, even if an error is encountered.
		 * @event error
		 * @param {String} src The source of the image that failed to load.
		 * @since 0.8.2
		 */
	
	
	// getter / setters:
		/**
		 * Use the {{#crossLink "SpriteSheet/animations:property"}}{{/crossLink}} property instead.
		 * @method getAnimations
		 * @return {Array}
		 * @deprecated
		 **/
		p.getAnimations = function() {
			return this._animations.slice();
		};
	
		/**
		 * Returns an array of all available animation names available on this sprite sheet as strings.
		 * @property animations
		 * @type {Array}
		 * @readonly
		 **/
		try {
			Object.defineProperties(p, {
				animations: { get: p.getAnimations }
			});
		} catch (e) {}
	
	
	// public methods:
		/**
		 * Returns the total number of frames in the specified animation, or in the whole sprite
		 * sheet if the animation param is omitted. Returns 0 if the spritesheet relies on calculated frame counts, and
		 * the images have not been fully loaded.
		 * @method getNumFrames
		 * @param {String} animation The name of the animation to get a frame count for.
		 * @return {Number} The number of frames in the animation, or in the entire sprite sheet if the animation param is omitted.
		 */
		p.getNumFrames = function(animation) {
			if (animation == null) {
				return this._frames ? this._frames.length : this._numFrames || 0;
			} else {
				var data = this._data[animation];
				if (data == null) { return 0; }
				else { return data.frames.length; }
			}
		};
	
		/**
		 * Returns an object defining the specified animation. The returned object contains:<UL>
		 * 	<li>frames: an array of the frame ids in the animation</li>
		 * 	<li>speed: the playback speed for this animation</li>
		 * 	<li>name: the name of the animation</li>
		 * 	<li>next: the default animation to play next. If the animation loops, the name and next property will be the
		 * 	same.</li>
		 * </UL>
		 * @method getAnimation
		 * @param {String} name The name of the animation to get.
		 * @return {Object} a generic object with frames, speed, name, and next properties.
		 **/
		p.getAnimation = function(name) {
			return this._data[name];
		};
	
		/**
		 * Returns an object specifying the image and source rect of the specified frame. The returned object has:<UL>
		 * 	<li>an image property holding a reference to the image object in which the frame is found</li>
		 * 	<li>a rect property containing a Rectangle instance which defines the boundaries for the frame within that
		 * 	image.</li>
		 * 	<li> A regX and regY property corresponding to the regX/Y values for the frame.
		 * </UL>
		 * @method getFrame
		 * @param {Number} frameIndex The index of the frame.
		 * @return {Object} a generic object with image and rect properties. Returns null if the frame does not exist.
		 **/
		p.getFrame = function(frameIndex) {
			var frame;
			if (this._frames && (frame=this._frames[frameIndex])) { return frame; }
			return null;
		};
	
		/**
		 * Returns a {{#crossLink "Rectangle"}}{{/crossLink}} instance defining the bounds of the specified frame relative
		 * to the origin. For example, a 90 x 70 frame with a regX of 50 and a regY of 40 would return:
		 *
		 * 	[x=-50, y=-40, width=90, height=70]
		 *
		 * @method getFrameBounds
		 * @param {Number} frameIndex The index of the frame.
		 * @param {Rectangle} [rectangle] A Rectangle instance to copy the values into. By default a new instance is created.
		 * @return {Rectangle} A Rectangle instance. Returns null if the frame does not exist, or the image is not fully loaded.
		 **/
		p.getFrameBounds = function(frameIndex, rectangle) {
			var frame = this.getFrame(frameIndex);
			return frame ? (rectangle||new createjs.Rectangle()).setValues(-frame.regX, -frame.regY, frame.rect.width, frame.rect.height) : null;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[SpriteSheet]";
		};
	
		/**
		 * SpriteSheet cannot be cloned. A SpriteSheet can be shared by multiple Sprite instances without cloning it.
		 * @method clone
		 **/
		p.clone = function() {
			throw("SpriteSheet cannot be cloned.")
		};
	
	// private methods:
		/**
		 * @method _parseData
		 * @param {Object} data An object describing the SpriteSheet data.
		 * @protected
		 **/
		p._parseData = function(data) {
			var i,l,o,a;
			if (data == null) { return; }
	
			this.framerate = data.framerate||0;
	
			// parse images:
			if (data.images && (l=data.images.length) > 0) {
				a = this._images = [];
				for (i=0; i<l; i++) {
					var img = data.images[i];
					if (typeof img == "string") {
						var src = img;
						img = document.createElement("img");
						img.src = src;
					}
					a.push(img);
					if (!img.getContext && !img.naturalWidth) {
						this._loadCount++;
						this.complete = false;
						(function(o, src) { img.onload = function() { o._handleImageLoad(src); } })(this, src);
						(function(o, src) { img.onerror = function() { o._handleImageError(src); } })(this, src);
					}
				}
			}
	
			// parse frames:
			if (data.frames == null) { // nothing
			} else if (Array.isArray(data.frames)) {
				this._frames = [];
				a = data.frames;
				for (i=0,l=a.length;i<l;i++) {
					var arr = a[i];
					this._frames.push({image:this._images[arr[4]?arr[4]:0], rect:new createjs.Rectangle(arr[0],arr[1],arr[2],arr[3]), regX:arr[5]||0, regY:arr[6]||0 });
				}
			} else {
				o = data.frames;
				this._frameWidth = o.width;
				this._frameHeight = o.height;
				this._regX = o.regX||0;
				this._regY = o.regY||0;
				this._spacing = o.spacing||0;
				this._margin = o.margin||0;
				this._numFrames = o.count;
				if (this._loadCount == 0) { this._calculateFrames(); }
			}
	
			// parse animations:
			this._animations = [];
			if ((o=data.animations) != null) {
				this._data = {};
				var name;
				for (name in o) {
					var anim = {name:name};
					var obj = o[name];
					if (typeof obj == "number") { // single frame
						a = anim.frames = [obj];
					} else if (Array.isArray(obj)) { // simple
						if (obj.length == 1) { anim.frames = [obj[0]]; }
						else {
							anim.speed = obj[3];
							anim.next = obj[2];
							a = anim.frames = [];
							for (i=obj[0];i<=obj[1];i++) {
								a.push(i);
							}
						}
					} else { // complex
						anim.speed = obj.speed;
						anim.next = obj.next;
						var frames = obj.frames;
						a = anim.frames = (typeof frames == "number") ? [frames] : frames.slice(0);
					}
					if (anim.next === true || anim.next === undefined) { anim.next = name; } // loop
					if (anim.next === false || (a.length < 2 && anim.next == name)) { anim.next = null; } // stop
					if (!anim.speed) { anim.speed = 1; }
					this._animations.push(name);
					this._data[name] = anim;
				}
			}
		};
	
		/**
		 * @method _handleImageLoad
		 * @protected
		 **/
		p._handleImageLoad = function(src) {
			if (--this._loadCount == 0) {
				this._calculateFrames();
				this.complete = true;
				this.dispatchEvent("complete");
			}
		};
	
		/**
		 * @method _handleImageError
		 * @protected
		 */
		p._handleImageError = function (src) {
			var errorEvent = new createjs.Event("error");
			errorEvent.src = src;
			this.dispatchEvent(errorEvent);
	
			// Complete is still dispatched.
			if (--this._loadCount == 0) {
				this.dispatchEvent("complete");
			}
		};
	
		/**
		 * @method _calculateFrames
		 * @protected
		 **/
		p._calculateFrames = function() {
			if (this._frames || this._frameWidth == 0) { return; }
	
			this._frames = [];
	
			var maxFrames = this._numFrames || 100000; // if we go over this, something is wrong.
			var frameCount = 0, frameWidth = this._frameWidth, frameHeight = this._frameHeight;
			var spacing = this._spacing, margin = this._margin;
			
			imgLoop:
			for (var i=0, imgs=this._images; i<imgs.length; i++) {
				var img = imgs[i], imgW = img.width, imgH = img.height;
	
				var y = margin;
				while (y <= imgH-margin-frameHeight) {
					var x = margin;
					while (x <= imgW-margin-frameWidth) {
						if (frameCount >= maxFrames) { break imgLoop; }
						frameCount++;
						this._frames.push({
								image: img,
								rect: new createjs.Rectangle(x, y, frameWidth, frameHeight),
								regX: this._regX,
								regY: this._regY
							});
						x += frameWidth+spacing;
					}
					y += frameHeight+spacing;
				}
			}
			this._numFrames = frameCount;
		};
	
	
		createjs.SpriteSheet = createjs.promote(SpriteSheet, "EventDispatcher");
	}());
	
	//##############################################################################
	// Graphics.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The Graphics class exposes an easy to use API for generating vector drawing instructions and drawing them to a
		 * specified context. Note that you can use Graphics without any dependency on the EaselJS framework by calling {{#crossLink "Graphics/draw"}}{{/crossLink}}
		 * directly, or it can be used with the {{#crossLink "Shape"}}{{/crossLink}} object to draw vector graphics within the
		 * context of an EaselJS display list.
		 *
		 * There are two approaches to working with Graphics object: calling methods on a Graphics instance (the "Graphics API"), or
		 * instantiating Graphics command objects and adding them to the graphics queue via {{#crossLink "Graphics/append"}}{{/crossLink}}.
		 * The former abstracts the latter, simplifying beginning and ending paths, fills, and strokes.
		 *
		 *      var g = new createjs.Graphics();
		 *      g.setStrokeStyle(1);
		 *      g.beginStroke("#000000");
		 *      g.beginFill("red");
		 *      g.drawCircle(0,0,30);
		 *
		 * All drawing methods in Graphics return the Graphics instance, so they can be chained together. For example,
		 * the following line of code would generate the instructions to draw a rectangle with a red stroke and blue fill:
		 *
		 *      myGraphics.beginStroke("red").beginFill("blue").drawRect(20, 20, 100, 50);
		 *
		 * Each graphics API call generates a command object (see below). The last command to be created can be accessed via
		 * {{#crossLink "Graphics/command:property"}}{{/crossLink}}:
		 *
		 *      var fillCommand = myGraphics.beginFill("red").command;
		 *      // ... later, update the fill style/color:
		 *      fillCommand.style = "blue";
		 *      // or change it to a bitmap fill:
		 *      fillCommand.bitmap(myImage);
		 *
		 * For more direct control of rendering, you can instantiate and append command objects to the graphics queue directly. In this case, you
		 * need to manage path creation manually, and ensure that fill/stroke is applied to a defined path:
		 *
		 *      // start a new path. Graphics.beginCmd is a reusable BeginPath instance:
		 *      myGraphics.append(createjs.Graphics.beginCmd);
		 *      // we need to define the path before applying the fill:
		 *      var circle = new createjs.Graphics.Circle(0,0,30);
		 *      myGraphics.append(circle);
		 *      // fill the path we just defined:
		 *      var fill = new createjs.Graphics.Fill("red");
		 *      myGraphics.append(fill);
		 *
		 * These approaches can be used together, for example to insert a custom command:
		 *
		 *      myGraphics.beginFill("red");
		 *      var customCommand = new CustomSpiralCommand(etc);
		 *      myGraphics.append(customCommand);
		 *      myGraphics.beginFill("blue");
		 *      myGraphics.drawCircle(0, 0, 30);
		 *
		 * See {{#crossLink "Graphics/append"}}{{/crossLink}} for more info on creating custom commands.
		 *
		 * <h4>Tiny API</h4>
		 * The Graphics class also includes a "tiny API", which is one or two-letter methods that are shortcuts for all of the
		 * Graphics methods. These methods are great for creating compact instructions, and is used by the Toolkit for CreateJS
		 * to generate readable code. All tiny methods are marked as protected, so you can view them by enabling protected
		 * descriptions in the docs.
		 *
		 * <table>
		 *     <tr><td><b>Tiny</b></td><td><b>Method</b></td><td><b>Tiny</b></td><td><b>Method</b></td></tr>
		 *     <tr><td>mt</td><td>{{#crossLink "Graphics/moveTo"}}{{/crossLink}} </td>
		 *     <td>lt</td> <td>{{#crossLink "Graphics/lineTo"}}{{/crossLink}}</td></tr>
		 *     <tr><td>a/at</td><td>{{#crossLink "Graphics/arc"}}{{/crossLink}} / {{#crossLink "Graphics/arcTo"}}{{/crossLink}} </td>
		 *     <td>bt</td><td>{{#crossLink "Graphics/bezierCurveTo"}}{{/crossLink}} </td></tr>
		 *     <tr><td>qt</td><td>{{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}} (also curveTo)</td>
		 *     <td>r</td><td>{{#crossLink "Graphics/rect"}}{{/crossLink}} </td></tr>
		 *     <tr><td>cp</td><td>{{#crossLink "Graphics/closePath"}}{{/crossLink}} </td>
		 *     <td>c</td><td>{{#crossLink "Graphics/clear"}}{{/crossLink}} </td></tr>
		 *     <tr><td>f</td><td>{{#crossLink "Graphics/beginFill"}}{{/crossLink}} </td>
		 *     <td>lf</td><td>{{#crossLink "Graphics/beginLinearGradientFill"}}{{/crossLink}} </td></tr>
		 *     <tr><td>rf</td><td>{{#crossLink "Graphics/beginRadialGradientFill"}}{{/crossLink}} </td>
		 *     <td>bf</td><td>{{#crossLink "Graphics/beginBitmapFill"}}{{/crossLink}} </td></tr>
		 *     <tr><td>ef</td><td>{{#crossLink "Graphics/endFill"}}{{/crossLink}} </td>
		 *     <td>ss / sd</td><td>{{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} / {{#crossLink "Graphics/setStrokeDash"}}{{/crossLink}} </td></tr>
		 *     <tr><td>s</td><td>{{#crossLink "Graphics/beginStroke"}}{{/crossLink}} </td>
		 *     <td>ls</td><td>{{#crossLink "Graphics/beginLinearGradientStroke"}}{{/crossLink}} </td></tr>
		 *     <tr><td>rs</td><td>{{#crossLink "Graphics/beginRadialGradientStroke"}}{{/crossLink}} </td>
		 *     <td>bs</td><td>{{#crossLink "Graphics/beginBitmapStroke"}}{{/crossLink}} </td></tr>
		 *     <tr><td>es</td><td>{{#crossLink "Graphics/endStroke"}}{{/crossLink}} </td>
		 *     <td>dr</td><td>{{#crossLink "Graphics/drawRect"}}{{/crossLink}} </td></tr>
		 *     <tr><td>rr</td><td>{{#crossLink "Graphics/drawRoundRect"}}{{/crossLink}} </td>
		 *     <td>rc</td><td>{{#crossLink "Graphics/drawRoundRectComplex"}}{{/crossLink}} </td></tr>
		 *     <tr><td>dc</td><td>{{#crossLink "Graphics/drawCircle"}}{{/crossLink}} </td>
		 *     <td>de</td><td>{{#crossLink "Graphics/drawEllipse"}}{{/crossLink}} </td></tr>
		 *     <tr><td>dp</td><td>{{#crossLink "Graphics/drawPolyStar"}}{{/crossLink}} </td>
		 *     <td>p</td><td>{{#crossLink "Graphics/decodePath"}}{{/crossLink}} </td></tr>
		 * </table>
		 *
		 * Here is the above example, using the tiny API instead.
		 *
		 *      myGraphics.s("red").f("blue").r(20, 20, 100, 50);
		 *
		 * @class Graphics
		 * @constructor
		 **/
		function Graphics() {
	
	
		// public properties
			/**
			 * Holds a reference to the last command that was created or appended. For example, you could retain a reference
			 * to a Fill command in order to dynamically update the color later by using:
			 *
			 * 		var myFill = myGraphics.beginFill("red").command;
			 * 		// update color later:
			 * 		myFill.style = "yellow";
			 *
			 * @property command
			 * @type Object
			 **/
			this.command = null;
	
	
		// private properties
			/**
			 * @property _stroke
			 * @protected
			 * @type {Stroke}
			 **/
			this._stroke = null;
	
			/**
			 * @property _strokeStyle
			 * @protected
			 * @type {StrokeStyle}
			 **/
			this._strokeStyle = null;
			
			/**
			 * @property _oldStrokeStyle
			 * @protected
			 * @type {StrokeStyle}
			 **/
			this._oldStrokeStyle = null;
			
			/**
			 * @property _strokeDash
			 * @protected
			 * @type {StrokeDash}
			 **/
			this._strokeDash = null;
			
			/**
			 * @property _oldStrokeDash
			 * @protected
			 * @type {StrokeDash}
			 **/
			this._oldStrokeDash = null;
	
			/**
			 * @property _strokeIgnoreScale
			 * @protected
			 * @type Boolean
			 **/
			this._strokeIgnoreScale = false;
	
			/**
			 * @property _fill
			 * @protected
			 * @type {Fill}
			 **/
			this._fill = null;
	
			/**
			 * @property _instructions
			 * @protected
			 * @type {Array}
			 **/
			this._instructions = [];
	
			/**
			 * Indicates the last instruction index that was committed.
			 * @property _commitIndex
			 * @protected
			 * @type {Number}
			 **/
			this._commitIndex = 0;
	
			/**
			 * Uncommitted instructions.
			 * @property _activeInstructions
			 * @protected
			 * @type {Array}
			 **/
			this._activeInstructions = [];
	
			/**
			 * This indicates that there have been changes to the activeInstruction list since the last updateInstructions call.
			 * @property _dirty
			 * @protected
			 * @type {Boolean}
			 * @default false
			 **/
			this._dirty = false;
	
			/**
			 * Index to draw from if a store operation has happened.
			 * @property _storeIndex
			 * @protected
			 * @type {Number}
			 * @default 0
			 **/
			this._storeIndex = 0;
	
		// setup:
			this.clear();
		}
		var p = Graphics.prototype;
		var G = Graphics; // shortcut
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// static public methods:
		/**
		 * Returns a CSS compatible color string based on the specified RGB numeric color values in the format
		 * "rgba(255,255,255,1.0)", or if alpha is null then in the format "rgb(255,255,255)". For example,
		 *
		 *      createjs.Graphics.getRGB(50, 100, 150, 0.5);
		 *      // Returns "rgba(50,100,150,0.5)"
		 *
		 * It also supports passing a single hex color value as the first param, and an optional alpha value as the second
		 * param. For example,
		 *
		 *      createjs.Graphics.getRGB(0xFF00FF, 0.2);
		 *      // Returns "rgba(255,0,255,0.2)"
		 *
		 * @method getRGB
		 * @static
		 * @param {Number} r The red component for the color, between 0 and 0xFF (255).
		 * @param {Number} g The green component for the color, between 0 and 0xFF (255).
		 * @param {Number} b The blue component for the color, between 0 and 0xFF (255).
		 * @param {Number} [alpha] The alpha component for the color where 0 is fully transparent and 1 is fully opaque.
		 * @return {String} A CSS compatible color string based on the specified RGB numeric color values in the format
		 * "rgba(255,255,255,1.0)", or if alpha is null then in the format "rgb(255,255,255)".
		 **/
		Graphics.getRGB = function(r, g, b, alpha) {
			if (r != null && b == null) {
				alpha = g;
				b = r&0xFF;
				g = r>>8&0xFF;
				r = r>>16&0xFF;
			}
			if (alpha == null) {
				return "rgb("+r+","+g+","+b+")";
			} else {
				return "rgba("+r+","+g+","+b+","+alpha+")";
			}
		};
	
		/**
		 * Returns a CSS compatible color string based on the specified HSL numeric color values in the format "hsla(360,100,100,1.0)",
		 * or if alpha is null then in the format "hsl(360,100,100)".
		 *
		 *      createjs.Graphics.getHSL(150, 100, 70);
		 *      // Returns "hsl(150,100,70)"
		 *
		 * @method getHSL
		 * @static
		 * @param {Number} hue The hue component for the color, between 0 and 360.
		 * @param {Number} saturation The saturation component for the color, between 0 and 100.
		 * @param {Number} lightness The lightness component for the color, between 0 and 100.
		 * @param {Number} [alpha] The alpha component for the color where 0 is fully transparent and 1 is fully opaque.
		 * @return {String} A CSS compatible color string based on the specified HSL numeric color values in the format
		 * "hsla(360,100,100,1.0)", or if alpha is null then in the format "hsl(360,100,100)".
		 **/
		Graphics.getHSL = function(hue, saturation, lightness, alpha) {
			if (alpha == null) {
				return "hsl("+(hue%360)+","+saturation+"%,"+lightness+"%)";
			} else {
				return "hsla("+(hue%360)+","+saturation+"%,"+lightness+"%,"+alpha+")";
			}
		};
	
	
	// static properties:
		/**
		 * A reusable instance of {{#crossLink "Graphics/BeginPath"}}{{/crossLink}} to avoid
		 * unnecessary instantiation.
		 * @property beginCmd
		 * @type {Graphics.BeginPath}
		 * @static
		 **/
		 // defined at the bottom of this file.
	
		/**
		 * Map of Base64 characters to values. Used by {{#crossLink "Graphics/decodePath"}}{{/crossLink}}.
		 * @property BASE_64
		 * @static
		 * @final
		 * @readonly
		 * @type {Object}
		 **/
		Graphics.BASE_64 = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};
	
		/**
		 * Maps numeric values for the caps parameter of {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} to
		 * corresponding string values. This is primarily for use with the tiny API. The mappings are as follows: 0 to
		 * "butt", 1 to "round", and 2 to "square".
		 * For example, to set the line caps to "square":
		 *
		 *      myGraphics.ss(16, 2);
		 *
		 * @property STROKE_CAPS_MAP
		 * @static
		 * @final
		 * @readonly
		 * @type {Array}
		 **/
		Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"];
	
		/**
		 * Maps numeric values for the joints parameter of {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} to
		 * corresponding string values. This is primarily for use with the tiny API. The mappings are as follows: 0 to
		 * "miter", 1 to "round", and 2 to "bevel".
		 * For example, to set the line joints to "bevel":
		 *
		 *      myGraphics.ss(16, 0, 2);
		 *
		 * @property STROKE_JOINTS_MAP
		 * @static
		 * @final
		 * @readonly
		 * @type {Array}
		 **/
		Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
	
		/**
		 * @property _ctx
		 * @static
		 * @protected
		 * @type {CanvasRenderingContext2D}
		 **/
		var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
		if (canvas.getContext) {
			Graphics._ctx = canvas.getContext("2d");
			canvas.width = canvas.height = 1;
		}
	
	
	// getter / setters:
		/**
		 * Use the {{#crossLink "Graphics/instructions:property"}}{{/crossLink}} property instead.
		 * @method getInstructions
		 * @return {Array}
		 * @deprecated
		 **/
		p.getInstructions = function() {
			this._updateInstructions();
			return this._instructions;
		};
	
		/**
		 * Returns the graphics instructions array. Each entry is a graphics command object (ex. Graphics.Fill, Graphics.Rect)
		 * Modifying the returned array directly is not recommended, and is likely to result in unexpected behaviour.
		 *
		 * This property is mainly intended for introspection of the instructions (ex. for graphics export).
		 * @property instructions
		 * @type {Array}
		 * @readonly
		 **/
		try {
			Object.defineProperties(p, {
				instructions: { get: p.getInstructions }
			});
		} catch (e) {}
	
	
	// public methods:
		/**
		 * Returns true if this Graphics instance has no drawing commands.
		 * @method isEmpty
		 * @return {Boolean} Returns true if this Graphics instance has no drawing commands.
		 **/
		p.isEmpty = function() {
			return !(this._instructions.length || this._activeInstructions.length);
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Object} data Optional data that is passed to graphics command exec methods. When called from a Shape instance, the shape passes itself as the data parameter. This can be used by custom graphic commands to insert contextual data.
		 **/
		p.draw = function(ctx, data) {
			this._updateInstructions();
			var instr = this._instructions;
			for (var i=this._storeIndex, l=instr.length; i<l; i++) {
				instr[i].exec(ctx, data);
			}
		};
	
		/**
		 * Draws only the path described for this Graphics instance, skipping any non-path instructions, including fill and
		 * stroke descriptions. Used for <code>DisplayObject.mask</code> to draw the clipping path, for example.
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method drawAsPath
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 **/
		p.drawAsPath = function(ctx) {
			this._updateInstructions();
			var instr, instrs = this._instructions;
			for (var i=this._storeIndex, l=instrs.length; i<l; i++) {
				// the first command is always a beginPath command.
				if ((instr = instrs[i]).path !== false) { instr.exec(ctx); }
			}
		};
	
	
	// public methods that map directly to context 2D calls:
		/**
		 * Moves the drawing point to the specified position. A tiny API method "mt" also exists.
		 * @method moveTo
		 * @param {Number} x The x coordinate the drawing point should move to.
		 * @param {Number} y The y coordinate the drawing point should move to.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls).
		 * @chainable
		 **/
		p.moveTo = function(x, y) {
			return this.append(new G.MoveTo(x,y), true);
		};
	
		/**
		 * Draws a line from the current drawing point to the specified position, which become the new current drawing
		 * point. Note that you *must* call {{#crossLink "Graphics/moveTo"}}{{/crossLink}} before the first `lineTo()`.
		 * A tiny API method "lt" also exists.
		 *
		 * For detailed information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#complex-shapes-(paths)">
		 * whatwg spec</a>.
		 * @method lineTo
		 * @param {Number} x The x coordinate the drawing point should draw to.
		 * @param {Number} y The y coordinate the drawing point should draw to.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.lineTo = function(x, y) {
			return this.append(new G.LineTo(x,y));
		};
	
		/**
		 * Draws an arc with the specified control points and radius.  For detailed information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-arcto">
		 * whatwg spec</a>. A tiny API method "at" also exists.
		 * @method arcTo
		 * @param {Number} x1
		 * @param {Number} y1
		 * @param {Number} x2
		 * @param {Number} y2
		 * @param {Number} radius
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.arcTo = function(x1, y1, x2, y2, radius) {
			return this.append(new G.ArcTo(x1, y1, x2, y2, radius));
		};
	
		/**
		 * Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y). For
		 * example, to draw a full circle with a radius of 20 centered at (100, 100):
		 *
		 *      arc(100, 100, 20, 0, Math.PI*2);
		 *
		 * For detailed information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-arc">whatwg spec</a>.
		 * A tiny API method "a" also exists.
		 * @method arc
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} radius
		 * @param {Number} startAngle Measured in radians.
		 * @param {Number} endAngle Measured in radians.
		 * @param {Boolean} anticlockwise
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
			return this.append(new G.Arc(x, y, radius, startAngle, endAngle, anticlockwise));
		};
	
		/**
		 * Draws a quadratic curve from the current drawing point to (x, y) using the control point (cpx, cpy). For detailed
		 * information, read the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-quadraticcurveto">
		 * whatwg spec</a>. A tiny API method "qt" also exists.
		 * @method quadraticCurveTo
		 * @param {Number} cpx
		 * @param {Number} cpy
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.quadraticCurveTo = function(cpx, cpy, x, y) {
			return this.append(new G.QuadraticCurveTo(cpx, cpy, x, y));
		};
	
		/**
		 * Draws a bezier curve from the current drawing point to (x, y) using the control points (cp1x, cp1y) and (cp2x,
		 * cp2y). For detailed information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-beziercurveto">
		 * whatwg spec</a>. A tiny API method "bt" also exists.
		 * @method bezierCurveTo
		 * @param {Number} cp1x
		 * @param {Number} cp1y
		 * @param {Number} cp2x
		 * @param {Number} cp2y
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
			return this.append(new G.BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y));
		};
	
		/**
		 * Draws a rectangle at (x, y) with the specified width and height using the current fill and/or stroke.
		 * For detailed information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-rect">
		 * whatwg spec</a>. A tiny API method "r" also exists.
		 * @method rect
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w Width of the rectangle
		 * @param {Number} h Height of the rectangle
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.rect = function(x, y, w, h) {
			return this.append(new G.Rect(x, y, w, h));
		};
	
		/**
		 * Closes the current path, effectively drawing a line from the current drawing point to the first drawing point specified
		 * since the fill or stroke was last set. A tiny API method "cp" also exists.
		 * @method closePath
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.closePath = function() {
			return this._activeInstructions.length ? this.append(new G.ClosePath()) : this;
		};
	
	
	// public methods that roughly map to Flash graphics APIs:
		/**
		 * Clears all drawing instructions, effectively resetting this Graphics instance. Any line and fill styles will need
		 * to be redefined to draw shapes following a clear call. A tiny API method "c" also exists.
		 * @method clear
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.clear = function() {
			this._instructions.length = this._activeInstructions.length = this._commitIndex = 0;
			this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null;
			this._dirty = this._strokeIgnoreScale = false;
			return this;
		};
	
		/**
		 * Begins a fill with the specified color. This ends the current sub-path. A tiny API method "f" also exists.
		 * @method beginFill
		 * @param {String} color A CSS compatible color value (ex. "red", "#FF0000", or "rgba(255,0,0,0.5)"). Setting to
		 * null will result in no fill.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginFill = function(color) {
			return this._setFill(color ? new G.Fill(color) : null);
		};
	
		/**
		 * Begins a linear gradient fill defined by the line (x0, y0) to (x1, y1). This ends the current sub-path. For
		 * example, the following code defines a black to white vertical gradient ranging from 20px to 120px, and draws a
		 * square to display it:
		 *
		 *      myGraphics.beginLinearGradientFill(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
		 *
		 * A tiny API method "lf" also exists.
		 * @method beginLinearGradientFill
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define a gradient
		 * drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1, 0.9] would draw
		 * the first color to 10% then interpolating to the second color at 90%.
		 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
		 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
			return this._setFill(new G.Fill().linearGradient(colors, ratios, x0, y0, x1, y1));
		};
	
		/**
		 * Begins a radial gradient fill. This ends the current sub-path. For example, the following code defines a red to
		 * blue radial gradient centered at (100, 100), with a radius of 50, and draws a circle to display it:
		 *
		 *      myGraphics.beginRadialGradientFill(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50).drawCircle(100, 100, 50);
		 *
		 * A tiny API method "rf" also exists.
		 * @method beginRadialGradientFill
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
		 * a gradient drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
		 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
		 * @param {Number} x0 Center position of the inner circle that defines the gradient.
		 * @param {Number} y0 Center position of the inner circle that defines the gradient.
		 * @param {Number} r0 Radius of the inner circle that defines the gradient.
		 * @param {Number} x1 Center position of the outer circle that defines the gradient.
		 * @param {Number} y1 Center position of the outer circle that defines the gradient.
		 * @param {Number} r1 Radius of the outer circle that defines the gradient.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
			return this._setFill(new G.Fill().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
		};
	
		/**
		 * Begins a pattern fill using the specified image. This ends the current sub-path. A tiny API method "bf" also
		 * exists.
		 * @method beginBitmapFill
		 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
		 * as the pattern. Must be loaded prior to creating a bitmap fill, or the fill will be empty.
		 * @param {String} repetition Optional. Indicates whether to repeat the image in the fill area. One of "repeat",
		 * "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat". Note that Firefox does not support "repeat-x" or
		 * "repeat-y" (latest tests were in FF 20.0), and will default to "repeat".
		 * @param {Matrix2D} matrix Optional. Specifies a transformation matrix for the bitmap fill. This transformation
		 * will be applied relative to the parent transform.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginBitmapFill = function(image, repetition, matrix) {
			return this._setFill(new G.Fill(null,matrix).bitmap(image, repetition));
		};
	
		/**
		 * Ends the current sub-path, and begins a new one with no fill. Functionally identical to <code>beginFill(null)</code>.
		 * A tiny API method "ef" also exists.
		 * @method endFill
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.endFill = function() {
			return this.beginFill();
		};
	
		/**
		 * Sets the stroke style. Like all drawing methods, this can be chained, so you can define
		 * the stroke style and color in a single line of code like so:
		 *
		 * 	myGraphics.setStrokeStyle(8,"round").beginStroke("#F00");
		 *
		 * A tiny API method "ss" also exists.
		 * @method setStrokeStyle
		 * @param {Number} thickness The width of the stroke.
		 * @param {String | Number} [caps=0] Indicates the type of caps to use at the end of lines. One of butt,
		 * round, or square. Defaults to "butt". Also accepts the values 0 (butt), 1 (round), and 2 (square) for use with
		 * the tiny API.
		 * @param {String | Number} [joints=0] Specifies the type of joints that should be used where two lines meet.
		 * One of bevel, round, or miter. Defaults to "miter". Also accepts the values 0 (miter), 1 (round), and 2 (bevel)
		 * for use with the tiny API.
		 * @param {Number} [miterLimit=10] If joints is set to "miter", then you can specify a miter limit ratio which
		 * controls at what point a mitered joint will be clipped.
		 * @param {Boolean} [ignoreScale=false] If true, the stroke will be drawn at the specified thickness regardless
		 * of active transformations.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
			this._updateInstructions(true);
			this._strokeStyle = this.command = new G.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
	
			// ignoreScale lives on Stroke, not StrokeStyle, so we do a little trickery:
			if (this._stroke) { this._stroke.ignoreScale = ignoreScale; }
			this._strokeIgnoreScale = ignoreScale;
			return this;
		};
		
		/**
		 * Sets or clears the stroke dash pattern.
		 *
		 * 	myGraphics.setStrokeDash([20, 10], 0);
		 *
		 * A tiny API method `sd` also exists.
		 * @method setStrokeDash
		 * @param {Array} [segments] An array specifying the dash pattern, alternating between line and gap.
		 * For example, `[20,10]` would create a pattern of 20 pixel lines with 10 pixel gaps between them.
		 * Passing null or an empty array will clear the existing stroke dash.
		 * @param {Number} [offset=0] The offset of the dash pattern. For example, you could increment this value to create a "marching ants" effect.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.setStrokeDash = function(segments, offset) {
			this._updateInstructions(true);
			this._strokeDash = this.command = new G.StrokeDash(segments, offset);
			return this;
		};
	
		/**
		 * Begins a stroke with the specified color. This ends the current sub-path. A tiny API method "s" also exists.
		 * @method beginStroke
		 * @param {String} color A CSS compatible color value (ex. "#FF0000", "red", or "rgba(255,0,0,0.5)"). Setting to
		 * null will result in no stroke.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginStroke = function(color) {
			return this._setStroke(color ? new G.Stroke(color) : null);
		};
	
		/**
		 * Begins a linear gradient stroke defined by the line (x0, y0) to (x1, y1). This ends the current sub-path. For
		 * example, the following code defines a black to white vertical gradient ranging from 20px to 120px, and draws a
		 * square to display it:
		 *
		 *      myGraphics.setStrokeStyle(10).
		 *          beginLinearGradientStroke(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
		 *
		 * A tiny API method "ls" also exists.
		 * @method beginLinearGradientStroke
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
		 * a gradient drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
		 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
		 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
		 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
			return this._setStroke(new G.Stroke().linearGradient(colors, ratios, x0, y0, x1, y1));
		};
	
		/**
		 * Begins a radial gradient stroke. This ends the current sub-path. For example, the following code defines a red to
		 * blue radial gradient centered at (100, 100), with a radius of 50, and draws a rectangle to display it:
		 *
		 *      myGraphics.setStrokeStyle(10)
		 *          .beginRadialGradientStroke(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50)
		 *          .drawRect(50, 90, 150, 110);
		 *
		 * A tiny API method "rs" also exists.
		 * @method beginRadialGradientStroke
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
		 * a gradient drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
		 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%, then draw the second color
		 * to 100%.
		 * @param {Number} x0 Center position of the inner circle that defines the gradient.
		 * @param {Number} y0 Center position of the inner circle that defines the gradient.
		 * @param {Number} r0 Radius of the inner circle that defines the gradient.
		 * @param {Number} x1 Center position of the outer circle that defines the gradient.
		 * @param {Number} y1 Center position of the outer circle that defines the gradient.
		 * @param {Number} r1 Radius of the outer circle that defines the gradient.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
			return this._setStroke(new G.Stroke().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
		};
	
		/**
		 * Begins a pattern fill using the specified image. This ends the current sub-path. Note that unlike bitmap fills,
		 * strokes do not currently support a matrix parameter due to limitations in the canvas API. A tiny API method "bs"
		 * also exists.
		 * @method beginBitmapStroke
		 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
		 * as the pattern. Must be loaded prior to creating a bitmap fill, or the fill will be empty.
		 * @param {String} [repetition=repeat] Optional. Indicates whether to repeat the image in the fill area. One of
		 * "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat".
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.beginBitmapStroke = function(image, repetition) {
			// NOTE: matrix is not supported for stroke because transforms on strokes also affect the drawn stroke width.
			return this._setStroke(new G.Stroke().bitmap(image, repetition));
		};
	
		/**
		 * Ends the current sub-path, and begins a new one with no stroke. Functionally identical to <code>beginStroke(null)</code>.
		 * A tiny API method "es" also exists.
		 * @method endStroke
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.endStroke = function() {
			return this.beginStroke();
		};
	
		/**
		 * Maps the familiar ActionScript <code>curveTo()</code> method to the functionally similar {{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}}
		 * method.
		 * @method quadraticCurveTo
		 * @param {Number} cpx
		 * @param {Number} cpy
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.curveTo = p.quadraticCurveTo;
	
		/**
		 *
		 * Maps the familiar ActionScript <code>drawRect()</code> method to the functionally similar {{#crossLink "Graphics/rect"}}{{/crossLink}}
		 * method.
		 * @method drawRect
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w Width of the rectangle
		 * @param {Number} h Height of the rectangle
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.drawRect = p.rect;
	
		/**
		 * Draws a rounded rectangle with all corners with the specified radius.
		 * @method drawRoundRect
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w
		 * @param {Number} h
		 * @param {Number} radius Corner radius.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.drawRoundRect = function(x, y, w, h, radius) {
			return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
		};
	
		/**
		 * Draws a rounded rectangle with different corner radii. Supports positive and negative corner radii. A tiny API
		 * method "rc" also exists.
		 * @method drawRoundRectComplex
		 * @param {Number} x The horizontal coordinate to draw the round rect.
		 * @param {Number} y The vertical coordinate to draw the round rect.
		 * @param {Number} w The width of the round rect.
		 * @param {Number} h The height of the round rect.
		 * @param {Number} radiusTL Top left corner radius.
		 * @param {Number} radiusTR Top right corner radius.
		 * @param {Number} radiusBR Bottom right corner radius.
		 * @param {Number} radiusBL Bottom left corner radius.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
			return this.append(new G.RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL));
		};
	
		/**
		 * Draws a circle with the specified radius at (x, y).
		 *
		 *      var g = new createjs.Graphics();
		 *	    g.setStrokeStyle(1);
		 *	    g.beginStroke(createjs.Graphics.getRGB(0,0,0));
		 *	    g.beginFill(createjs.Graphics.getRGB(255,0,0));
		 *	    g.drawCircle(0,0,3);
		 *
		 *	    var s = new createjs.Shape(g);
		 *		s.x = 100;
		 *		s.y = 100;
		 *
		 *	    stage.addChild(s);
		 *	    stage.update();
		 *
		 * A tiny API method "dc" also exists.
		 * @method drawCircle
		 * @param {Number} x x coordinate center point of circle.
		 * @param {Number} y y coordinate center point of circle.
		 * @param {Number} radius Radius of circle.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.drawCircle = function(x, y, radius) {
			return this.append(new G.Circle(x, y, radius));
		};
	
		/**
		 * Draws an ellipse (oval) with a specified width (w) and height (h). Similar to {{#crossLink "Graphics/drawCircle"}}{{/crossLink}},
		 * except the width and height can be different. A tiny API method "de" also exists.
		 * @method drawEllipse
		 * @param {Number} x The left coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
		 * which draws from center.
		 * @param {Number} y The top coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
		 * which draws from the center.
		 * @param {Number} w The height (horizontal diameter) of the ellipse. The horizontal radius will be half of this
		 * number.
		 * @param {Number} h The width (vertical diameter) of the ellipse. The vertical radius will be half of this number.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.drawEllipse = function(x, y, w, h) {
			return this.append(new G.Ellipse(x, y, w, h));
		};
	
		/**
		 * Draws a star if pointSize is greater than 0, or a regular polygon if pointSize is 0 with the specified number of
		 * points. For example, the following code will draw a familiar 5 pointed star shape centered at 100, 100 and with a
		 * radius of 50:
		 *
		 *      myGraphics.beginFill("#FF0").drawPolyStar(100, 100, 50, 5, 0.6, -90);
		 *      // Note: -90 makes the first point vertical
		 *
		 * A tiny API method "dp" also exists.
		 *
		 * @method drawPolyStar
		 * @param {Number} x Position of the center of the shape.
		 * @param {Number} y Position of the center of the shape.
		 * @param {Number} radius The outer radius of the shape.
		 * @param {Number} sides The number of points on the star or sides on the polygon.
		 * @param {Number} pointSize The depth or "pointy-ness" of the star points. A pointSize of 0 will draw a regular
		 * polygon (no points), a pointSize of 1 will draw nothing because the points are infinitely pointy.
		 * @param {Number} angle The angle of the first point / corner. For example a value of 0 will draw the first point
		 * directly to the right of the center.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
			return this.append(new G.PolyStar(x, y, radius, sides, pointSize, angle));
		};
	
		// TODO: deprecated.
		/**
		 * Removed in favour of using custom command objects with {{#crossLink "Graphics/append"}}{{/crossLink}}.
		 * @method inject
		 * @deprecated
		 **/
	
		/**
		 * Appends a graphics command object to the graphics queue. Command objects expose an "exec" method
		 * that accepts two parameters: the Context2D to operate on, and an arbitrary data object passed into
		 * {{#crossLink "Graphics/draw"}}{{/crossLink}}. The latter will usually be the Shape instance that called draw.
		 *
		 * This method is used internally by Graphics methods, such as drawCircle, but can also be used directly to insert
		 * built-in or custom graphics commands. For example:
		 *
		 * 		// attach data to our shape, so we can access it during the draw:
		 * 		myShape.color = "red";
		 *
		 * 		// append a Circle command object:
		 * 		myShape.graphics.append(new createjs.Graphics.Circle(50, 50, 30));
		 *
		 * 		// append a custom command object with an exec method that sets the fill style
		 * 		// based on the shape's data, and then fills the circle.
		 * 		myShape.graphics.append({exec:function(ctx, shape) {
		 * 			ctx.fillStyle = shape.color;
		 * 			ctx.fill();
		 * 		}});
		 *
		 * @method append
		 * @param {Object} command A graphics command object exposing an "exec" method.
		 * @param {boolean} clean The clean param is primarily for internal use. A value of true indicates that a command does not generate a path that should be stroked or filled.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.append = function(command, clean) {
			this._activeInstructions.push(command);
			this.command = command;
			if (!clean) { this._dirty = true; }
			return this;
		};
	
		/**
		 * Decodes a compact encoded path string into a series of draw instructions.
		 * This format is not intended to be human readable, and is meant for use by authoring tools.
		 * The format uses a base64 character set, with each character representing 6 bits, to define a series of draw
		 * commands.
		 *
		 * Each command is comprised of a single "header" character followed by a variable number of alternating x and y
		 * position values. Reading the header bits from left to right (most to least significant): bits 1 to 3 specify the
		 * type of operation (0-moveTo, 1-lineTo, 2-quadraticCurveTo, 3-bezierCurveTo, 4-closePath, 5-7 unused). Bit 4
		 * indicates whether position values use 12 bits (2 characters) or 18 bits (3 characters), with a one indicating the
		 * latter. Bits 5 and 6 are currently unused.
		 *
		 * Following the header is a series of 0 (closePath), 2 (moveTo, lineTo), 4 (quadraticCurveTo), or 6 (bezierCurveTo)
		 * parameters. These parameters are alternating x/y positions represented by 2 or 3 characters (as indicated by the
		 * 4th bit in the command char). These characters consist of a 1 bit sign (1 is negative, 0 is positive), followed
		 * by an 11 (2 char) or 17 (3 char) bit integer value. All position values are in tenths of a pixel. Except in the
		 * case of move operations which are absolute, this value is a delta from the previous x or y position (as
		 * appropriate).
		 *
		 * For example, the string "A3cAAMAu4AAA" represents a line starting at -150,0 and ending at 150,0.
		 * <br />A - bits 000000. First 3 bits (000) indicate a moveTo operation. 4th bit (0) indicates 2 chars per
		 * parameter.
		 * <br />n0 - 110111011100. Absolute x position of -150.0px. First bit indicates a negative value, remaining bits
		 * indicate 1500 tenths of a pixel.
		 * <br />AA - 000000000000. Absolute y position of 0.
		 * <br />I - 001100. First 3 bits (001) indicate a lineTo operation. 4th bit (1) indicates 3 chars per parameter.
		 * <br />Au4 - 000000101110111000. An x delta of 300.0px, which is added to the previous x value of -150.0px to
		 * provide an absolute position of +150.0px.
		 * <br />AAA - 000000000000000000. A y delta value of 0.
		 *
		 * A tiny API method "p" also exists.
		 * @method decodePath
		 * @param {String} str The path string to decode.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.decodePath = function(str) {
			var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
			var paramCount = [2, 2, 4, 6, 0];
			var i=0, l=str.length;
			var params = [];
			var x=0, y=0;
			var base64 = Graphics.BASE_64;
	
			while (i<l) {
				var c = str.charAt(i);
				var n = base64[c];
				var fi = n>>3; // highest order bits 1-3 code for operation.
				var f = instructions[fi];
				// check that we have a valid instruction & that the unused bits are empty:
				if (!f || (n&3)) { throw("bad path data (@"+i+"): "+c); }
				var pl = paramCount[fi];
				if (!fi) { x=y=0; } // move operations reset the position.
				params.length = 0;
				i++;
				var charCount = (n>>2&1)+2;  // 4th header bit indicates number size for this operation.
				for (var p=0; p<pl; p++) {
					var num = base64[str.charAt(i)];
					var sign = (num>>5) ? -1 : 1;
					num = ((num&31)<<6)|(base64[str.charAt(i+1)]);
					if (charCount == 3) { num = (num<<6)|(base64[str.charAt(i+2)]); }
					num = sign*num/10;
					if (p%2) { x = (num += x); }
					else { y = (num += y); }
					params[p] = num;
					i += charCount;
				}
				f.apply(this,params);
			}
			return this;
		};
	
		/**
		 * Stores all graphics commands so they won't be executed in future draws. Calling store() a second time adds to
		 * the existing store. This also affects `drawAsPath()`.
		 *
		 * This is useful in cases where you are creating vector graphics in an iterative manner (ex. generative art), so
		 * that only new graphics need to be drawn (which can provide huge performance benefits), but you wish to retain all
		 * of the vector instructions for later use (ex. scaling, modifying, or exporting).
		 *
		 * Note that calling store() will force the active path (if any) to be ended in a manner similar to changing
		 * the fill or stroke.
		 *
		 * For example, consider a application where the user draws lines with the mouse. As each line segment (or collection of
		 * segments) are added to a Shape, it can be rasterized using {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}},
		 * and then stored, so that it can be redrawn at a different scale when the application is resized, or exported to SVG.
		 *
		 * 	// set up cache:
		 * 	myShape.cache(0,0,500,500,scale);
		 *
		 * 	// when the user drags, draw a new line:
		 * 	myShape.graphics.moveTo(oldX,oldY).lineTo(newX,newY);
		 * 	// then draw it into the existing cache:
		 * 	myShape.updateCache("source-over");
		 * 	// store the new line, so it isn't redrawn next time:
		 * 	myShape.store();
		 *
		 * 	// then, when the window resizes, we can re-render at a different scale:
		 * 	// first, unstore all our lines:
		 * 	myShape.unstore();
		 * 	// then cache using the new scale:
		 * 	myShape.cache(0,0,500,500,newScale);
		 * 	// finally, store the existing commands again:
		 * 	myShape.store();
		 *
		 * @method store
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.store = function() {
			this._updateInstructions(true);
			this._storeIndex = this._instructions.length;
			return this;
		};
	
		/**
		 * Unstores any graphics commands that were previously stored using {{#crossLink "Graphics/store"}}{{/crossLink}}
		 * so that they will be executed in subsequent draw calls.
		 *
		 * @method unstore
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.unstore = function() {
			this._storeIndex = 0;
			return this;
		};
	
		/**
		 * Returns a clone of this Graphics instance. Note that the individual command objects are not cloned.
		 * @method clone
		 * @return {Graphics} A clone of the current Graphics instance.
		 **/
		p.clone = function() {
			var o = new Graphics();
			o.command = this.command;
			o._stroke = this._stroke;
			o._strokeStyle = this._strokeStyle;
			o._strokeDash = this._strokeDash;
			o._strokeIgnoreScale = this._strokeIgnoreScale;
			o._fill = this._fill;
			o._instructions = this._instructions.slice();
			o._commitIndex = this._commitIndex;
			o._activeInstructions = this._activeInstructions.slice();
			o._dirty = this._dirty;
			o._storeIndex = this._storeIndex;
			return o;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Graphics]";
		};
	
	
	// tiny API:
		/**
		 * Shortcut to moveTo.
		 * @method mt
		 * @param {Number} x The x coordinate the drawing point should move to.
		 * @param {Number} y The y coordinate the drawing point should move to.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls).
		 * @chainable
		 * @protected
		 **/
		p.mt = p.moveTo;
	
		/**
		 * Shortcut to lineTo.
		 * @method lt
		 * @param {Number} x The x coordinate the drawing point should draw to.
		 * @param {Number} y The y coordinate the drawing point should draw to.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.lt = p.lineTo;
	
		/**
		 * Shortcut to arcTo.
		 * @method at
		 * @param {Number} x1
		 * @param {Number} y1
		 * @param {Number} x2
		 * @param {Number} y2
		 * @param {Number} radius
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.at = p.arcTo;
	
		/**
		 * Shortcut to bezierCurveTo.
		 * @method bt
		 * @param {Number} cp1x
		 * @param {Number} cp1y
		 * @param {Number} cp2x
		 * @param {Number} cp2y
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.bt = p.bezierCurveTo;
	
		/**
		 * Shortcut to quadraticCurveTo / curveTo.
		 * @method qt
		 * @param {Number} cpx
		 * @param {Number} cpy
		 * @param {Number} x
		 * @param {Number} y
		 * @protected
		 * @chainable
		 **/
		p.qt = p.quadraticCurveTo;
	
		/**
		 * Shortcut to arc.
		 * @method a
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} radius
		 * @param {Number} startAngle Measured in radians.
		 * @param {Number} endAngle Measured in radians.
		 * @param {Boolean} anticlockwise
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @protected
		 * @chainable
		 **/
		p.a = p.arc;
	
		/**
		 * Shortcut to rect.
		 * @method r
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w Width of the rectangle
		 * @param {Number} h Height of the rectangle
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.r = p.rect;
	
		/**
		 * Shortcut to closePath.
		 * @method cp
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.cp = p.closePath;
	
		/**
		 * Shortcut to clear.
		 * @method c
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.c = p.clear;
	
		/**
		 * Shortcut to beginFill.
		 * @method f
		 * @param {String} color A CSS compatible color value (ex. "red", "#FF0000", or "rgba(255,0,0,0.5)"). Setting to
		 * null will result in no fill.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.f = p.beginFill;
	
		/**
		 * Shortcut to beginLinearGradientFill.
		 * @method lf
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define a gradient
		 * drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1, 0.9] would draw
		 * the first color to 10% then interpolating to the second color at 90%.
		 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
		 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.lf = p.beginLinearGradientFill;
	
		/**
		 * Shortcut to beginRadialGradientFill.
		 * @method rf
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
		 * a gradient drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
		 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
		 * @param {Number} x0 Center position of the inner circle that defines the gradient.
		 * @param {Number} y0 Center position of the inner circle that defines the gradient.
		 * @param {Number} r0 Radius of the inner circle that defines the gradient.
		 * @param {Number} x1 Center position of the outer circle that defines the gradient.
		 * @param {Number} y1 Center position of the outer circle that defines the gradient.
		 * @param {Number} r1 Radius of the outer circle that defines the gradient.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.rf = p.beginRadialGradientFill;
	
		/**
		 * Shortcut to beginBitmapFill.
		 * @method bf
		 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
		 * as the pattern.
		 * @param {String} repetition Optional. Indicates whether to repeat the image in the fill area. One of "repeat",
		 * "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat". Note that Firefox does not support "repeat-x" or
		 * "repeat-y" (latest tests were in FF 20.0), and will default to "repeat".
		 * @param {Matrix2D} matrix Optional. Specifies a transformation matrix for the bitmap fill. This transformation
		 * will be applied relative to the parent transform.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.bf = p.beginBitmapFill;
	
		/**
		 * Shortcut to endFill.
		 * @method ef
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.ef = p.endFill;
	
		/**
		 * Shortcut to setStrokeStyle.
		 * @method ss
		 * @param {Number} thickness The width of the stroke.
		 * @param {String | Number} [caps=0] Indicates the type of caps to use at the end of lines. One of butt,
		 * round, or square. Defaults to "butt". Also accepts the values 0 (butt), 1 (round), and 2 (square) for use with
		 * the tiny API.
		 * @param {String | Number} [joints=0] Specifies the type of joints that should be used where two lines meet.
		 * One of bevel, round, or miter. Defaults to "miter". Also accepts the values 0 (miter), 1 (round), and 2 (bevel)
		 * for use with the tiny API.
		 * @param {Number} [miterLimit=10] If joints is set to "miter", then you can specify a miter limit ratio which
		 * controls at what point a mitered joint will be clipped.
		 * @param {Boolean} [ignoreScale=false] If true, the stroke will be drawn at the specified thickness regardless
		 * of active transformations.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.ss = p.setStrokeStyle;
		
		/**
		 * Shortcut to setStrokeDash.
		 * @method sd
		 * @param {Array} [segments] An array specifying the dash pattern, alternating between line and gap.
		 * For example, [20,10] would create a pattern of 20 pixel lines with 10 pixel gaps between them.
		 * Passing null or an empty array will clear any existing dash.
		 * @param {Number} [offset=0] The offset of the dash pattern. For example, you could increment this value to create a "marching ants" effect.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.sd = p.setStrokeDash;
	
		/**
		 * Shortcut to beginStroke.
		 * @method s
		 * @param {String} color A CSS compatible color value (ex. "#FF0000", "red", or "rgba(255,0,0,0.5)"). Setting to
		 * null will result in no stroke.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.s = p.beginStroke;
	
		/**
		 * Shortcut to beginLinearGradientStroke.
		 * @method ls
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
		 * a gradient drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
		 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
		 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
		 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
		 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.ls = p.beginLinearGradientStroke;
	
		/**
		 * Shortcut to beginRadialGradientStroke.
		 * @method rs
		 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
		 * a gradient drawing from red to blue.
		 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
		 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%, then draw the second color
		 * to 100%.
		 * @param {Number} x0 Center position of the inner circle that defines the gradient.
		 * @param {Number} y0 Center position of the inner circle that defines the gradient.
		 * @param {Number} r0 Radius of the inner circle that defines the gradient.
		 * @param {Number} x1 Center position of the outer circle that defines the gradient.
		 * @param {Number} y1 Center position of the outer circle that defines the gradient.
		 * @param {Number} r1 Radius of the outer circle that defines the gradient.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.rs = p.beginRadialGradientStroke;
	
		/**
		 * Shortcut to beginBitmapStroke.
		 * @method bs
		 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
		 * as the pattern.
		 * @param {String} [repetition=repeat] Optional. Indicates whether to repeat the image in the fill area. One of
		 * "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat".
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.bs = p.beginBitmapStroke;
	
		/**
		 * Shortcut to endStroke.
		 * @method es
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.es = p.endStroke;
	
		/**
		 * Shortcut to drawRect.
		 * @method dr
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w Width of the rectangle
		 * @param {Number} h Height of the rectangle
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.dr = p.drawRect;
	
		/**
		 * Shortcut to drawRoundRect.
		 * @method rr
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w
		 * @param {Number} h
		 * @param {Number} radius Corner radius.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.rr = p.drawRoundRect;
	
		/**
		 * Shortcut to drawRoundRectComplex.
		 * @method rc
		 * @param {Number} x The horizontal coordinate to draw the round rect.
		 * @param {Number} y The vertical coordinate to draw the round rect.
		 * @param {Number} w The width of the round rect.
		 * @param {Number} h The height of the round rect.
		 * @param {Number} radiusTL Top left corner radius.
		 * @param {Number} radiusTR Top right corner radius.
		 * @param {Number} radiusBR Bottom right corner radius.
		 * @param {Number} radiusBL Bottom left corner radius.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.rc = p.drawRoundRectComplex;
	
		/**
		 * Shortcut to drawCircle.
		 * @method dc
		 * @param {Number} x x coordinate center point of circle.
		 * @param {Number} y y coordinate center point of circle.
		 * @param {Number} radius Radius of circle.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.dc = p.drawCircle;
	
		/**
		 * Shortcut to drawEllipse.
		 * @method de
		 * @param {Number} x The left coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
		 * which draws from center.
		 * @param {Number} y The top coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
		 * which draws from the center.
		 * @param {Number} w The height (horizontal diameter) of the ellipse. The horizontal radius will be half of this
		 * number.
		 * @param {Number} h The width (vertical diameter) of the ellipse. The vertical radius will be half of this number.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.de = p.drawEllipse;
	
		/**
		 * Shortcut to drawPolyStar.
		 * @method dp
		 * @param {Number} x Position of the center of the shape.
		 * @param {Number} y Position of the center of the shape.
		 * @param {Number} radius The outer radius of the shape.
		 * @param {Number} sides The number of points on the star or sides on the polygon.
		 * @param {Number} pointSize The depth or "pointy-ness" of the star points. A pointSize of 0 will draw a regular
		 * polygon (no points), a pointSize of 1 will draw nothing because the points are infinitely pointy.
		 * @param {Number} angle The angle of the first point / corner. For example a value of 0 will draw the first point
		 * directly to the right of the center.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.dp = p.drawPolyStar;
	
		/**
		 * Shortcut to decodePath.
		 * @method p
		 * @param {String} str The path string to decode.
		 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
		 * @chainable
		 * @protected
		 **/
		p.p = p.decodePath;
	
	
	// private methods:
		/**
		 * @method _updateInstructions
		 * @param commit
		 * @protected
		 **/
		p._updateInstructions = function(commit) {
			var instr = this._instructions, active = this._activeInstructions, commitIndex = this._commitIndex;
	
			if (this._dirty && active.length) {
				instr.length = commitIndex; // remove old, uncommitted commands
				instr.push(Graphics.beginCmd);
	
				var l = active.length, ll = instr.length;
				instr.length = ll+l;
				for (var i=0; i<l; i++) { instr[i+ll] = active[i]; }
	
				if (this._fill) { instr.push(this._fill); }
				if (this._stroke) {
					// doesn't need to be re-applied if it hasn't changed.
					if (this._strokeDash !== this._oldStrokeDash) {
						this._oldStrokeDash = this._strokeDash;
						instr.push(this._strokeDash);
					}
					if (this._strokeStyle !== this._oldStrokeStyle) {
						this._oldStrokeStyle = this._strokeStyle;
						instr.push(this._strokeStyle);
					}
					instr.push(this._stroke);
				}
	
				this._dirty = false;
			}
	
			if (commit) {
				active.length = 0;
				this._commitIndex = instr.length;
			}
		};
	
		/**
		 * @method _setFill
		 * @param fill
		 * @protected
		 **/
		p._setFill = function(fill) {
			this._updateInstructions(true);
			this.command = this._fill = fill;
			return this;
		};
	
		/**
		 * @method _setStroke
		 * @param stroke
		 * @protected
		 **/
		p._setStroke = function(stroke) {
			this._updateInstructions(true);
			if (this.command = this._stroke = stroke) {
				stroke.ignoreScale = this._strokeIgnoreScale;
			}
			return this;
		};
	
	// Command Objects:
		/**
		 * @namespace Graphics
		 */
		/**
		 * Graphics command object. See {{#crossLink "Graphics/lineTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information. See {{#crossLink "Graphics"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class LineTo
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.LineTo = function(x, y) {
			this.x = x; this.y = y;
		}).prototype.exec = function(ctx) { ctx.lineTo(this.x,this.y); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/moveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class MoveTo
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx
		 */
		(G.MoveTo = function(x, y) {
			this.x = x; this.y = y;
		}).prototype.exec = function(ctx) { ctx.moveTo(this.x, this.y); };
	
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/arcTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class ArcTo
		 * @constructor
		 * @param {Number} x1
		 * @param {Number} y1
		 * @param {Number} x2
		 * @param {Number} y2
		 * @param {Number} radius
		 **/
		/**
		 * @property x1
		 * @type Number
		 */
		/**
		 * @property y1
		 * @type Number
		 */
		/**
		 * @property x2
		 * @type Number
		 */
		/**
		 * @property y2
		 * @type Number
		 */
		/**
		 * @property radius
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.ArcTo = function(x1, y1, x2, y2, radius) {
			this.x1 = x1; this.y1 = y1;
			this.x2 = x2; this.y2 = y2;
			this.radius = radius;
		}).prototype.exec = function(ctx) { ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/arc"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class Arc
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} radius
		 * @param {Number} startAngle
		 * @param {Number} endAngle
		 * @param {Number} anticlockwise
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @property radius
		 * @type Number
		 */
		/**
		 * @property startAngle
		 * @type Number
		 */
		/**
		 * @property endAngle
		 * @type Number
		 */
		/**
		 * @property anticlockwise
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.Arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
			this.x = x; this.y = y;
			this.radius = radius;
			this.startAngle = startAngle; this.endAngle = endAngle;
			this.anticlockwise = !!anticlockwise;
		}).prototype.exec = function(ctx) { ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class QuadraticCurveTo
		 * @constructor
		 * @param {Number} cpx
		 * @param {Number} cpy
		 * @param {Number} x
		 * @param {Number} y
		 **/
		/**
		 * @property cpx
		 * @type Number
		 */
		/**
		 * @property cpy
		 * @type Number
		 */
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.QuadraticCurveTo = function(cpx, cpy, x, y) {
			this.cpx = cpx; this.cpy = cpy;
			this.x = x; this.y = y;
		}).prototype.exec = function(ctx) { ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/bezierCurveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class BezierCurveTo
		 * @constructor
		 * @param {Number} cp1x
		 * @param {Number} cp1y
		 * @param {Number} cp2x
		 * @param {Number} cp2y
		 * @param {Number} x
		 * @param {Number} y
		 **/
		/**
		 * @property cp1x
		 * @type Number
		 */
		/**
		 * @property cp1y
		 * @type Number
		 */
		/**
		 * @property cp2x
		 * @type Number
		 */
		/**
		 * @property cp2y
		 * @type Number
		 */
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.BezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
			this.cp1x = cp1x; this.cp1y = cp1y;
			this.cp2x = cp2x; this.cp2y = cp2y;
			this.x = x; this.y = y;
		}).prototype.exec = function(ctx) { ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/rect"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class Rect
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w
		 * @param {Number} h
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @property w
		 * @type Number
		 */
		/**
		 * @property h
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.Rect = function(x, y, w, h) {
			this.x = x; this.y = y;
			this.w = w; this.h = h;
		}).prototype.exec = function(ctx) { ctx.rect(this.x, this.y, this.w, this.h); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/closePath"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class ClosePath
		 * @constructor
		 **/
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.ClosePath = function() {
		}).prototype.exec = function(ctx) { ctx.closePath(); };
	
		/**
		 * Graphics command object to begin a new path. See {{#crossLink "Graphics"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class BeginPath
		 * @constructor
		 **/
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.BeginPath = function() {
		}).prototype.exec = function(ctx) { ctx.beginPath(); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/beginFill"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class Fill
		 * @constructor
		 * @param {Object} style A valid Context2D fillStyle.
		 * @param {Matrix2D} matrix
		 **/
		/**
		 * A valid Context2D fillStyle.
		 * @property style
		 * @type Object
		 */
		/**
		 * @property matrix
		 * @type Matrix2D
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		p = (G.Fill = function(style, matrix) {
			this.style = style;
			this.matrix = matrix;
		}).prototype;
		p.exec = function(ctx) {
			if (!this.style) { return; }
			ctx.fillStyle = this.style;
			var mtx = this.matrix;
			if (mtx) { ctx.save(); ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty); }
			ctx.fill();
			if (mtx) { ctx.restore(); }
		};
		/**
		 * Creates a linear gradient style and assigns it to {{#crossLink "Fill/style:property"}}{{/crossLink}}.
		 * See {{#crossLink "Graphics/beginLinearGradientFill"}}{{/crossLink}} for more information.
		 * @method linearGradient
		 * @param {Array} colors
		 *
		 * @param {Array} ratios
		 * @param {Number} x0
		 * @param {Number} y0
		 * @param {Number} x1
		 * @param {Number} y1
		 * @return {Fill} Returns this Fill object for chaining or assignment.
		 */
		p.linearGradient = function(colors, ratios, x0, y0, x1, y1) {
			var o = this.style =  Graphics._ctx.createLinearGradient(x0, y0, x1, y1);
			for (var i=0, l=colors.length; i<l; i++) { o.addColorStop(ratios[i], colors[i]); }
			o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, x1:x1, y1:y1, type:"linear"};
			return this;
		};
		/**
		 * Creates a radial gradient style and assigns it to {{#crossLink "Fill/style:property"}}{{/crossLink}}.
		 * See {{#crossLink "Graphics/beginRadialGradientFill"}}{{/crossLink}} for more information.
		 * @method radialGradient
		 * @param {Array} colors
		 * @param {Array} ratios
		 * @param {Number} x0
		 * @param {Number} y0
		 * @param {Number} r0
		 * @param {Number} x1
		 * @param {Number} y1
		 * @param {Number} r1
		 * @return {Fill} Returns this Fill object for chaining or assignment.
		 */
		p.radialGradient = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
			var o = this.style =  Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
			for (var i=0, l=colors.length; i<l; i++) { o.addColorStop(ratios[i], colors[i]); }
			o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, r0:r0, x1:x1, y1:y1, r1:r1, type:"radial"};
			return this;
		};
		/**
		 * Creates a bitmap fill style and assigns it to the {{#crossLink "Fill/style:property"}}{{/crossLink}}.
		 * See {{#crossLink "Graphics/beginBitmapFill"}}{{/crossLink}} for more information.
		 * @method bitmap
		 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image  Must be loaded prior to creating a bitmap fill, or the fill will be empty.
		 * @param {String} [repetition] One of: repeat, repeat-x, repeat-y, or no-repeat.
		 * @return {Fill} Returns this Fill object for chaining or assignment.
		 */
		p.bitmap = function(image, repetition) {
			if (image.naturalWidth || image.getContext || image.readyState >= 2) {
				var o = this.style = Graphics._ctx.createPattern(image, repetition || "");
				o.props = {image: image, repetition: repetition, type: "bitmap"};
			}
			return this;
		};
		p.path = false;
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/beginStroke"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class Stroke
		 * @constructor
		 * @param {Object} style A valid Context2D fillStyle.
		 * @param {Boolean} ignoreScale
		 **/
		/**
		 * A valid Context2D strokeStyle.
		 * @property style
		 * @type Object
		 */
		/**
		 * @property ignoreScale
		 * @type Boolean
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		p = (G.Stroke = function(style, ignoreScale) {
			this.style = style;
			this.ignoreScale = ignoreScale;
		}).prototype;
		p.exec = function(ctx) {
			if (!this.style) { return; }
			ctx.strokeStyle = this.style;
			if (this.ignoreScale) { ctx.save(); ctx.setTransform(1,0,0,1,0,0); }
			ctx.stroke();
			if (this.ignoreScale) { ctx.restore(); }
		};
		/**
		 * Creates a linear gradient style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
		 * See {{#crossLink "Graphics/beginLinearGradientStroke"}}{{/crossLink}} for more information.
		 * @method linearGradient
		 * @param {Array} colors
		 * @param {Array} ratios
		 * @param {Number} x0
		 * @param {Number} y0
		 * @param {Number} x1
		 * @param {Number} y1
		 * @return {Fill} Returns this Stroke object for chaining or assignment.
		 */
		p.linearGradient = G.Fill.prototype.linearGradient;
		/**
		 * Creates a radial gradient style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
		 * See {{#crossLink "Graphics/beginRadialGradientStroke"}}{{/crossLink}} for more information.
		 * @method radialGradient
		 * @param {Array} colors
		 * @param {Array} ratios
		 * @param {Number} x0
		 * @param {Number} y0
		 * @param {Number} r0
		 * @param {Number} x1
		 * @param {Number} y1
		 * @param {Number} r1
		 * @return {Fill} Returns this Stroke object for chaining or assignment.
		 */
		p.radialGradient = G.Fill.prototype.radialGradient;
		/**
		 * Creates a bitmap fill style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
		 * See {{#crossLink "Graphics/beginBitmapStroke"}}{{/crossLink}} for more information.
		 * @method bitmap
		 * @param {HTMLImageElement} image
		 * @param {String} [repetition] One of: repeat, repeat-x, repeat-y, or no-repeat.
		 * @return {Fill} Returns this Stroke object for chaining or assignment.
		 */
		p.bitmap = G.Fill.prototype.bitmap;
		p.path = false;
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class StrokeStyle
		 * @constructor
		 * @param {Number} width
		 * @param {String} [caps=butt]
		 * @param {String} [joints=miter]
		 * @param {Number} [miterLimit=10]
		 * @param {Boolean} [ignoreScale=false]
		 **/
		/**
		 * @property width
		 * @type Number
		 */
		/**
		 * One of: butt, round, square
		 * @property caps
		 * @type String
		 */
		/**
		 * One of: round, bevel, miter
		 * @property joints
		 * @type String
		 */
		/**
		 * @property miterLimit
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		p = (G.StrokeStyle = function(width, caps, joints, miterLimit, ignoreScale) {
			this.width = width;
			this.caps = caps;
			this.joints = joints;
			this.miterLimit = miterLimit;
			this.ignoreScale = ignoreScale;
		}).prototype;
		p.exec = function(ctx) {
			ctx.lineWidth = (this.width == null ? "1" : this.width);
			ctx.lineCap = (this.caps == null ? "butt" : (isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps]));
			ctx.lineJoin = (this.joints == null ? "miter" : (isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints]));
			ctx.miterLimit = (this.miterLimit == null ? "10" : this.miterLimit);
			ctx.ignoreScale = (this.ignoreScale == null ? false : this.ignoreScale);
		};
		p.path = false;
		
		/**
		 * Graphics command object. See {{#crossLink "Graphics/setStrokeDash"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class StrokeDash
		 * @constructor
		 * @param {Array} [segments]
		 * @param {Number} [offset=0]
		 **/
		/**
		 * @property segments
		 * @type Array
		 */
		/**
		 * @property offset
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.StrokeDash = function(segments, offset) {
			this.segments = segments;
			this.offset = offset||0;
		}).prototype.exec = function(ctx) {
			if (ctx.setLineDash) { // feature detection.
				ctx.setLineDash(this.segments|| G.StrokeDash.EMPTY_SEGMENTS); // instead of [] to reduce churn.
				ctx.lineDashOffset = this.offset||0;
			}
		};
		/**
		 * The default value for segments (ie. no dash).
		 * @property EMPTY_SEGMENTS
		 * @static
		 * @final
		 * @readonly
		 * @protected
		 * @type {Array}
		 **/
		G.StrokeDash.EMPTY_SEGMENTS = [];
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/drawRoundRectComplex"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class RoundRect
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w
		 * @param {Number} h
		 * @param {Number} radiusTL
		 * @param {Number} radiusTR
		 * @param {Number} radiusBR
		 * @param {Number} radiusBL
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @property w
		 * @type Number
		 */
		/**
		 * @property h
		 * @type Number
		 */
		/**
		 * @property radiusTL
		 * @type Number
		 */
		/**
		 * @property radiusTR
		 * @type Number
		 */
		/**
		 * @property radiusBR
		 * @type Number
		 */
		/**
		 * @property radiusBL
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.RoundRect = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
			this.x = x; this.y = y;
			this.w = w; this.h = h;
			this.radiusTL = radiusTL; this.radiusTR = radiusTR;
			this.radiusBR = radiusBR; this.radiusBL = radiusBL;
		}).prototype.exec = function(ctx) {
			var max = (w<h?w:h)/2;
			var mTL=0, mTR=0, mBR=0, mBL=0;
			var x = this.x, y = this.y, w = this.w, h = this.h;
			var rTL = this.radiusTL, rTR = this.radiusTR, rBR = this.radiusBR, rBL = this.radiusBL;
	
			if (rTL < 0) { rTL *= (mTL=-1); }
			if (rTL > max) { rTL = max; }
			if (rTR < 0) { rTR *= (mTR=-1); }
			if (rTR > max) { rTR = max; }
			if (rBR < 0) { rBR *= (mBR=-1); }
			if (rBR > max) { rBR = max; }
			if (rBL < 0) { rBL *= (mBL=-1); }
			if (rBL > max) { rBL = max; }
	
			ctx.moveTo(x+w-rTR, y);
			ctx.arcTo(x+w+rTR*mTR, y-rTR*mTR, x+w, y+rTR, rTR);
			ctx.lineTo(x+w, y+h-rBR);
			ctx.arcTo(x+w+rBR*mBR, y+h+rBR*mBR, x+w-rBR, y+h, rBR);
			ctx.lineTo(x+rBL, y+h);
			ctx.arcTo(x-rBL*mBL, y+h+rBL*mBL, x, y+h-rBL, rBL);
			ctx.lineTo(x, y+rTL);
			ctx.arcTo(x-rTL*mTL, y-rTL*mTL, x+rTL, y, rTL);
			ctx.closePath();
		};
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/drawCircle"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class Circle
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} radius
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @property radius
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.Circle = function(x, y, radius) {
			this.x = x; this.y = y;
			this.radius = radius;
		}).prototype.exec = function(ctx) { ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); };
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/drawEllipse"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class Ellipse
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} w
		 * @param {Number} h
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @property w
		 * @type Number
		 */
		/**
		 * @property h
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.Ellipse = function(x, y, w, h) {
			this.x = x; this.y = y;
			this.w = w; this.h = h;
		}).prototype.exec = function(ctx) {
			var x = this.x, y = this.y;
			var w = this.w, h = this.h;
	
			var k = 0.5522848;
			var ox = (w / 2) * k;
			var oy = (h / 2) * k;
			var xe = x + w;
			var ye = y + h;
			var xm = x + w / 2;
			var ym = y + h / 2;
	
			ctx.moveTo(x, ym);
			ctx.bezierCurveTo(x, ym-oy, xm-ox, y, xm, y);
			ctx.bezierCurveTo(xm+ox, y, xe, ym-oy, xe, ym);
			ctx.bezierCurveTo(xe, ym+oy, xm+ox, ye, xm, ye);
			ctx.bezierCurveTo(xm-ox, ye, x, ym+oy, x, ym);
		};
	
		/**
		 * Graphics command object. See {{#crossLink "Graphics/drawPolyStar"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
		 * @class PolyStar
		 * @constructor
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Number} radius
		 * @param {Number} sides
		 * @param {Number} pointSize
		 * @param {Number} angle
		 **/
		/**
		 * @property x
		 * @type Number
		 */
		/**
		 * @property y
		 * @type Number
		 */
		/**
		 * @property radius
		 * @type Number
		 */
		/**
		 * @property sides
		 * @type Number
		 */
		/**
		 * @property pointSize
		 * @type Number
		 */
		/**
		 * @property angle
		 * @type Number
		 */
		/**
		 * Execute the Graphics command in the provided Canvas context.
		 * @method exec
		 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
		 */
		(G.PolyStar = function(x, y, radius, sides, pointSize, angle) {
			this.x = x; this.y = y;
			this.radius = radius;
			this.sides = sides;
			this.pointSize = pointSize;
			this.angle = angle;
		}).prototype.exec = function(ctx) {
			var x = this.x, y = this.y;
			var radius = this.radius;
			var angle = (this.angle||0)/180*Math.PI;
			var sides = this.sides;
			var ps = 1-(this.pointSize||0);
			var a = Math.PI/sides;
	
			ctx.moveTo(x+Math.cos(angle)*radius, y+Math.sin(angle)*radius);
			for (var i=0; i<sides; i++) {
				angle += a;
				if (ps != 1) {
					ctx.lineTo(x+Math.cos(angle)*radius*ps, y+Math.sin(angle)*radius*ps);
				}
				angle += a;
				ctx.lineTo(x+Math.cos(angle)*radius, y+Math.sin(angle)*radius);
			}
			ctx.closePath();
		};
	
		// docced above.
		Graphics.beginCmd = new G.BeginPath(); // so we don't have to instantiate multiple instances.
	
	
		createjs.Graphics = Graphics;
	}());
	
	//##############################################################################
	// DisplayObject.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * DisplayObject is an abstract class that should not be constructed directly. Instead construct subclasses such as
		 * {{#crossLink "Container"}}{{/crossLink}}, {{#crossLink "Bitmap"}}{{/crossLink}}, and {{#crossLink "Shape"}}{{/crossLink}}.
		 * DisplayObject is the base class for all display classes in the EaselJS library. It defines the core properties and
		 * methods that are shared between all display objects, such as transformation properties (x, y, scaleX, scaleY, etc),
		 * caching, and mouse handlers.
		 * @class DisplayObject
		 * @extends EventDispatcher
		 * @constructor
		 **/
		function DisplayObject() {
			this.EventDispatcher_constructor();
			
			
		// public properties:
			/**
			 * The alpha (transparency) for this display object. 0 is fully transparent, 1 is fully opaque.
			 * @property alpha
			 * @type {Number}
			 * @default 1
			 **/
			this.alpha = 1;
		
			/**
			 * If a cache is active, this returns the canvas that holds the cached version of this display object. See {{#crossLink "cache"}}{{/crossLink}}
			 * for more information.
			 * @property cacheCanvas
			 * @type {HTMLCanvasElement | Object}
			 * @default null
			 * @readonly
			 **/
			this.cacheCanvas = null;
		
			/**
			 * Returns an ID number that uniquely identifies the current cache for this display object. This can be used to
			 * determine if the cache has changed since a previous check.
			 * @property cacheID
			 * @type {Number}
			 * @default 0
			 */
			this.cacheID = 0;
		
			/**
			 * Unique ID for this display object. Makes display objects easier for some uses.
			 * @property id
			 * @type {Number}
			 * @default -1
			 **/
			this.id = createjs.UID.get();
		
			/**
			 * Indicates whether to include this object when running mouse interactions. Setting this to `false` for children
			 * of a {{#crossLink "Container"}}{{/crossLink}} will cause events on the Container to not fire when that child is
			 * clicked. Setting this property to `false` does not prevent the {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}
			 * method from returning the child.
			 *
			 * <strong>Note:</strong> In EaselJS 0.7.0, the mouseEnabled property will not work properly with nested Containers. Please
			 * check out the latest NEXT version in <a href="https://github.com/CreateJS/EaselJS/tree/master/lib">GitHub</a> for an updated version with this issue resolved. The fix will be
			 * provided in the next release of EaselJS.
			 * @property mouseEnabled
			 * @type {Boolean}
			 * @default true
			 **/
			this.mouseEnabled = true;
			
			/**
			 * If false, the tick will not run on this display object (or its children). This can provide some performance benefits.
			 * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
			 * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
			 * @property tickEnabled
			 * @type Boolean
			 * @default true
			 **/
			this.tickEnabled = true;
		
			/**
			 * An optional name for this display object. Included in {{#crossLink "DisplayObject/toString"}}{{/crossLink}} . Useful for
			 * debugging.
			 * @property name
			 * @type {String}
			 * @default null
			 **/
			this.name = null;
		
			/**
			 * A reference to the {{#crossLink "Container"}}{{/crossLink}} or {{#crossLink "Stage"}}{{/crossLink}} object that
			 * contains this display object, or null if it has not been added
			 * to one.
			 * @property parent
			 * @final
			 * @type {Container}
			 * @default null
			 * @readonly
			 **/
			this.parent = null;
		
			/**
			 * The left offset for this display object's registration point. For example, to make a 100x100px Bitmap rotate
			 * around its center, you would set regX and {{#crossLink "DisplayObject/regY:property"}}{{/crossLink}} to 50.
			 * @property regX
			 * @type {Number}
			 * @default 0
			 **/
			this.regX = 0;
		
			/**
			 * The y offset for this display object's registration point. For example, to make a 100x100px Bitmap rotate around
			 * its center, you would set {{#crossLink "DisplayObject/regX:property"}}{{/crossLink}} and regY to 50.
			 * @property regY
			 * @type {Number}
			 * @default 0
			 **/
			this.regY = 0;
		
			/**
			 * The rotation in degrees for this display object.
			 * @property rotation
			 * @type {Number}
			 * @default 0
			 **/
			this.rotation = 0;
		
			/**
			 * The factor to stretch this display object horizontally. For example, setting scaleX to 2 will stretch the display
			 * object to twice its nominal width. To horizontally flip an object, set the scale to a negative number.
			 * @property scaleX
			 * @type {Number}
			 * @default 1
			 **/
			this.scaleX = 1;
		
			/**
			 * The factor to stretch this display object vertically. For example, setting scaleY to 0.5 will stretch the display
			 * object to half its nominal height. To vertically flip an object, set the scale to a negative number.
			 * @property scaleY
			 * @type {Number}
			 * @default 1
			 **/
			this.scaleY = 1;
		
			/**
			 * The factor to skew this display object horizontally.
			 * @property skewX
			 * @type {Number}
			 * @default 0
			 **/
			this.skewX = 0;
		
			/**
			 * The factor to skew this display object vertically.
			 * @property skewY
			 * @type {Number}
			 * @default 0
			 **/
			this.skewY = 0;
		
			/**
			 * A shadow object that defines the shadow to render on this display object. Set to `null` to remove a shadow. If
			 * null, this property is inherited from the parent container.
			 * @property shadow
			 * @type {Shadow}
			 * @default null
			 **/
			this.shadow = null;
		
			/**
			 * Indicates whether this display object should be rendered to the canvas and included when running the Stage
			 * {{#crossLink "Stage/getObjectsUnderPoint"}}{{/crossLink}} method.
			 * @property visible
			 * @type {Boolean}
			 * @default true
			 **/
			this.visible = true;
		
			/**
			 * The x (horizontal) position of the display object, relative to its parent.
			 * @property x
			 * @type {Number}
			 * @default 0
			 **/
			this.x = 0;
		
			/** The y (vertical) position of the display object, relative to its parent.
			 * @property y
			 * @type {Number}
			 * @default 0
			 **/
			this.y = 0;
			
			/**
			 * If set, defines the transformation for this display object, overriding all other transformation properties
			 * (x, y, rotation, scale, skew).
			 * @property transformMatrix
			 * @type {Matrix2D}
			 * @default null
			 **/
			this.transformMatrix = null;
			
			/**
			 * The composite operation indicates how the pixels of this display object will be composited with the elements
			 * behind it. If `null`, this property is inherited from the parent container. For more information, read the
			 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#compositing">
			 * whatwg spec on compositing</a>.
			 * @property compositeOperation
			 * @type {String}
			 * @default null
			 **/
			this.compositeOperation = null;
		
			/**
			 * Indicates whether the display object should be drawn to a whole pixel when
			 * {{#crossLink "Stage/snapToPixelEnabled"}}{{/crossLink}} is true. To enable/disable snapping on whole
			 * categories of display objects, set this value on the prototype (Ex. Text.prototype.snapToPixel = true).
			 * @property snapToPixel
			 * @type {Boolean}
			 * @default true
			 **/
			this.snapToPixel = true;
		
			/**
			 * An array of Filter objects to apply to this display object. Filters are only applied / updated when {{#crossLink "cache"}}{{/crossLink}}
			 * or {{#crossLink "updateCache"}}{{/crossLink}} is called on the display object, and only apply to the area that is
			 * cached.
			 * @property filters
			 * @type {Array}
			 * @default null
			 **/
			this.filters = null;
			
			/**
			 * A Shape instance that defines a vector mask (clipping path) for this display object.  The shape's transformation
			 * will be applied relative to the display object's parent coordinates (as if it were a child of the parent).
			 * @property mask
			 * @type {Shape}
			 * @default null
			 */
			this.mask = null;
			
			/**
			 * A display object that will be tested when checking mouse interactions or testing {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}.
			 * The hit area will have its transformation applied relative to this display object's coordinate space (as though
			 * the hit test object were a child of this display object and relative to its regX/Y). The hitArea will be tested
			 * using only its own `alpha` value regardless of the alpha value on the target display object, or the target's
			 * ancestors (parents).
			 * 
			 * If set on a {{#crossLink "Container"}}{{/crossLink}}, children of the Container will not receive mouse events.
			 * This is similar to setting {{#crossLink "mouseChildren"}}{{/crossLink}} to false.
			 *
			 * Note that hitArea is NOT currently used by the `hitTest()` method, nor is it supported for {{#crossLink "Stage"}}{{/crossLink}}.
			 * @property hitArea
			 * @type {DisplayObject}
			 * @default null
			 */
			this.hitArea = null;
			
			/**
			 * A CSS cursor (ex. "pointer", "help", "text", etc) that will be displayed when the user hovers over this display
			 * object. You must enable mouseover events using the {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}} method to
			 * use this property. Setting a non-null cursor on a Container will override the cursor set on its descendants.
			 * @property cursor
			 * @type {String}
			 * @default null
			 */
			this.cursor = null;
		
		
		// private properties:
			/**
			 * @property _cacheOffsetX
			 * @protected
			 * @type {Number}
			 * @default 0
			 **/
			this._cacheOffsetX = 0;
		
			/**
			 * @property _cacheOffsetY
			 * @protected
			 * @type {Number}
			 * @default 0
			 **/
			this._cacheOffsetY = 0;
			
			/**
			 * @property _filterOffsetX
			 * @protected
			 * @type {Number}
			 * @default 0
			 **/
			this._filterOffsetX = 0;
			
			/**
			 * @property _filterOffsetY
			 * @protected
			 * @type {Number}
			 * @default 0
			 **/
			this._filterOffsetY = 0;
			
			/**
			 * @property _cacheScale
			 * @protected
			 * @type {Number}
			 * @default 1
			 **/
			this._cacheScale = 1;
		
			/**
			* @property _cacheDataURLID
			* @protected
			* @type {Number}
			* @default 0
			*/
			this._cacheDataURLID = 0;
			
			/**
			* @property _cacheDataURL
			* @protected
			* @type {String}
			* @default null
			*/
			this._cacheDataURL = null;
		
			/**
			 * @property _props
			 * @protected
			 * @type {DisplayObject}
			 * @default null
			 **/
			this._props = new createjs.DisplayProps();
		
			/**
			 * @property _rectangle
			 * @protected
			 * @type {Rectangle}
			 * @default null
			 **/
			this._rectangle = new createjs.Rectangle();
		
			/**
			 * @property _bounds
			 * @protected
			 * @type {Rectangle}
			 * @default null
			 **/
			this._bounds = null;
		}
		var p = createjs.extend(DisplayObject, createjs.EventDispatcher);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
		
	// static properties:
		/**
		 * Listing of mouse event names. Used in _hasMouseEventListener.
		 * @property _MOUSE_EVENTS
		 * @protected
		 * @static
		 * @type {Array}
		 **/
		DisplayObject._MOUSE_EVENTS = ["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"];
	
		/**
		 * Suppresses errors generated when using features like hitTest, mouse events, and {{#crossLink "getObjectsUnderPoint"}}{{/crossLink}}
		 * with cross domain content.
		 * @property suppressCrossDomainErrors
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		DisplayObject.suppressCrossDomainErrors = false;
		
		/**
		 * @property _snapToPixelEnabled
		 * @protected
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		DisplayObject._snapToPixelEnabled = false; // stage.snapToPixelEnabled is temporarily copied here during a draw to provide global access.
	
		/**
		 * @property _hitTestCanvas
		 * @type {HTMLCanvasElement | Object}
		 * @static
		 * @protected
		 **/
		/**
		 * @property _hitTestContext
		 * @type {CanvasRenderingContext2D}
		 * @static
		 * @protected
		 **/
		var canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); // prevent errors on load in browsers without canvas.
		if (canvas.getContext) {
			DisplayObject._hitTestCanvas = canvas;
			DisplayObject._hitTestContext = canvas.getContext("2d");
			canvas.width = canvas.height = 1;
		}
	
		/**
		 * @property _nextCacheID
		 * @type {Number}
		 * @static
		 * @protected
		 **/
		DisplayObject._nextCacheID = 1;
	
	
	// events:
		/**
		 * Dispatched when the user presses their left mouse button over the display object. See the 
		 * {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event mousedown
		 * @since 0.6.0
		 */
		 
		/**
		 * Dispatched when the user presses their left mouse button and then releases it while over the display object.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event click
		 * @since 0.6.0
		 */
		 
		/**
		 * Dispatched when the user double clicks their left mouse button over this display object.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event dblclick
		 * @since 0.6.0
		 */
		 
		/**
		 * Dispatched when the user's mouse enters this display object. This event must be enabled using 
		 * {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}. See also {{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event mouseover
		 * @since 0.6.0
		 */
	
		/**
		 * Dispatched when the user's mouse leaves this display object. This event must be enabled using 
		 * {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}. See also {{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event mouseout
		 * @since 0.6.0
		 */
		 
		/**
		 * This event is similar to {{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}, with the following
		 * differences: it does not bubble, and it considers {{#crossLink "Container"}}{{/crossLink}} instances as an
		 * aggregate of their content.
		 * 
		 * For example, myContainer contains two overlapping children: shapeA and shapeB. The user moves their mouse over
		 * shapeA and then directly on to shapeB. With a listener for {{#crossLink "mouseover:event"}}{{/crossLink}} on
		 * myContainer, two events would be received, each targeting a child element:<OL>
		 * <LI>when the mouse enters shapeA (target=shapeA)</LI>
		 * <LI>when the mouse enters shapeB (target=shapeB)</LI>
		 * </OL>
		 * However, with a listener for "rollover" instead, only a single event is received when the mouse first enters
		 * the aggregate myContainer content (target=myContainer).
		 * 
		 * This event must be enabled using {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event rollover
		 * @since 0.7.0
		 */
		 
		/**
		 * This event is similar to {{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}, with the following
		 * differences: it does not bubble, and it considers {{#crossLink "Container"}}{{/crossLink}} instances as an
		 * aggregate of their content.
		 * 
		 * For example, myContainer contains two overlapping children: shapeA and shapeB. The user moves their mouse over
		 * shapeA, then directly on to shapeB, then off both. With a listener for {{#crossLink "mouseout:event"}}{{/crossLink}}
		 * on myContainer, two events would be received, each targeting a child element:<OL>
		 * <LI>when the mouse leaves shapeA (target=shapeA)</LI>
		 * <LI>when the mouse leaves shapeB (target=shapeB)</LI>
		 * </OL>
		 * However, with a listener for "rollout" instead, only a single event is received when the mouse leaves
		 * the aggregate myContainer content (target=myContainer).
		 * 
		 * This event must be enabled using {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event rollout
		 * @since 0.7.0
		 */
		 
		/**
		 * After a {{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}} occurs on a display object, a pressmove
		 * event will be generated on that object whenever the mouse moves until the mouse press is released. This can be
		 * useful for dragging and similar operations.
		 * @event pressmove
		 * @since 0.7.0
		 */
		 
		/**
		 * After a {{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}} occurs on a display object, a pressup event
		 * will be generated on that object when that mouse press is released. This can be useful for dragging and similar
		 * operations.
		 * @event pressup
		 * @since 0.7.0
		 */
		 
		/**
		 * Dispatched when the display object is added to a parent container.
		 * @event added
		 */
		 
		/**
		 * Dispatched when the display object is removed from its parent container.
		 * @event removed
		 */
		 
		/**
		 * Dispatched on each display object on a stage whenever the stage updates. This occurs immediately before the
		 * rendering (draw) pass. When {{#crossLink "Stage/update"}}{{/crossLink}} is called, first all display objects on
		 * the stage dispatch the tick event, then all of the display objects are drawn to stage. Children will have their
		 * {{#crossLink "tick:event"}}{{/crossLink}} event dispatched in order of their depth prior to the event being
		 * dispatched on their parent.
		 * @event tick
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Array} params An array containing any arguments that were passed to the Stage.update() method. For
		 *      example if you called stage.update("hello"), then the params would be ["hello"].
		 * @since 0.6.0
		 */
		
		
	// getter / setters:
		/**
		 * Use the {{#crossLink "DisplayObject/stage:property"}}{{/crossLink}} property instead.
		 * @method getStage
		 * @return {Stage}
		 * @deprecated
		 **/
		p.getStage = function() {
			// uses dynamic access to avoid circular dependencies;
			var o = this, _Stage = createjs["Stage"];
			while (o.parent) { o = o.parent; }
			if (o instanceof _Stage) { return o; }
			return null;
		};
	
		/**
		 * Returns the Stage instance that this display object will be rendered on, or null if it has not been added to one.
		 * @property stage
		 * @type {Stage}
		 * @readonly
		 **/
		try {
			Object.defineProperties(p, {
				stage: { get: p.getStage }
			});
		} catch (e) {}
	
	
	// public methods:
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns <code>true</code> if the draw was handled (useful for overriding functionality).
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache. For example,
		 * used for drawing the cache (to prevent it from simply drawing an existing cache back into itself).
		 * @return {Boolean}
		 **/
		p.draw = function(ctx, ignoreCache) {
			var cacheCanvas = this.cacheCanvas;
			if (ignoreCache || !cacheCanvas) { return false; }
			var scale = this._cacheScale;
			ctx.drawImage(cacheCanvas, this._cacheOffsetX+this._filterOffsetX, this._cacheOffsetY+this._filterOffsetY, cacheCanvas.width/scale, cacheCanvas.height/scale);
			return true;
		};
		
		/**
		 * Applies this display object's transformation, alpha, globalCompositeOperation, clipping path (mask), and shadow
		 * to the specified context. This is typically called prior to {{#crossLink "DisplayObject/draw"}}{{/crossLink}}.
		 * @method updateContext
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D to update.
		 **/
		p.updateContext = function(ctx) {
			var o=this, mask=o.mask, mtx= o._props.matrix;
			
			if (mask && mask.graphics && !mask.graphics.isEmpty()) {
				mask.getMatrix(mtx);
				ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
				
				mask.graphics.drawAsPath(ctx);
				ctx.clip();
				
				mtx.invert();
				ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
			}
			
			this.getMatrix(mtx);
			var tx = mtx.tx, ty = mtx.ty;
			if (DisplayObject._snapToPixelEnabled && o.snapToPixel) {
				tx = tx + (tx < 0 ? -0.5 : 0.5) | 0;
				ty = ty + (ty < 0 ? -0.5 : 0.5) | 0;
			}
			ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, tx, ty);
			ctx.globalAlpha *= o.alpha;
			if (o.compositeOperation) { ctx.globalCompositeOperation = o.compositeOperation; }
			if (o.shadow) { this._applyShadow(ctx, o.shadow); }
		};
	
		/**
		 * Draws the display object into a new canvas, which is then used for subsequent draws. For complex content
		 * that does not change frequently (ex. a Container with many children that do not move, or a complex vector Shape),
		 * this can provide for much faster rendering because the content does not need to be re-rendered each tick. The
		 * cached display object can be moved, rotated, faded, etc freely, however if its content changes, you must
		 * manually update the cache by calling <code>updateCache()</code> or <code>cache()</code> again. You must specify
		 * the cache area via the x, y, w, and h parameters. This defines the rectangle that will be rendered and cached
		 * using this display object's coordinates.
		 *
		 * <h4>Example</h4>
		 * For example if you defined a Shape that drew a circle at 0, 0 with a radius of 25:
		 *
		 *      var shape = new createjs.Shape();
		 *      shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 25);
		 *      myShape.cache(-25, -25, 50, 50);
		 *
		 * Note that filters need to be defined <em>before</em> the cache is applied. Check out the {{#crossLink "Filter"}}{{/crossLink}}
		 * class for more information. Some filters (ex. BlurFilter) will not work as expected in conjunction with the scale param.
		 * 
		 * Usually, the resulting cacheCanvas will have the dimensions width*scale by height*scale, however some filters (ex. BlurFilter)
		 * will add padding to the canvas dimensions.
		 *
		 * @method cache
		 * @param {Number} x The x coordinate origin for the cache region.
		 * @param {Number} y The y coordinate origin for the cache region.
		 * @param {Number} width The width of the cache region.
		 * @param {Number} height The height of the cache region.
		 * @param {Number} [scale=1] The scale at which the cache will be created. For example, if you cache a vector shape using
		 * 	myShape.cache(0,0,100,100,2) then the resulting cacheCanvas will be 200x200 px. This lets you scale and rotate
		 * 	cached elements with greater fidelity. Default is 1.
		 **/
		p.cache = function(x, y, width, height, scale) {
			// draw to canvas.
			scale = scale||1;
			if (!this.cacheCanvas) { this.cacheCanvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
			this._cacheWidth = width;
			this._cacheHeight = height;
			this._cacheOffsetX = x;
			this._cacheOffsetY = y;
			this._cacheScale = scale;
			this.updateCache();
		};
	
		/**
		 * Redraws the display object to its cache. Calling updateCache without an active cache will throw an error.
		 * If compositeOperation is null the current cache will be cleared prior to drawing. Otherwise the display object
		 * will be drawn over the existing cache using the specified compositeOperation.
		 *
		 * <h4>Example</h4>
		 * Clear the current graphics of a cached shape, draw some new instructions, and then update the cache. The new line
		 * will be drawn on top of the old one.
		 *
		 *      // Not shown: Creating the shape, and caching it.
		 *      shapeInstance.clear();
		 *      shapeInstance.setStrokeStyle(3).beginStroke("#ff0000").moveTo(100, 100).lineTo(200,200);
		 *      shapeInstance.updateCache();
		 *
		 * @method updateCache
		 * @param {String} compositeOperation The compositeOperation to use, or null to clear the cache and redraw it.
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#compositing">
		 * whatwg spec on compositing</a>.
		 **/
		p.updateCache = function(compositeOperation) {
			var cacheCanvas = this.cacheCanvas;
			if (!cacheCanvas) { throw "cache() must be called before updateCache()"; }
			var scale = this._cacheScale, offX = this._cacheOffsetX*scale, offY = this._cacheOffsetY*scale;
			var w = this._cacheWidth, h = this._cacheHeight, ctx = cacheCanvas.getContext("2d");
			
			var fBounds = this._getFilterBounds();
			offX += (this._filterOffsetX = fBounds.x);
			offY += (this._filterOffsetY = fBounds.y);
			
			w = Math.ceil(w*scale) + fBounds.width;
			h = Math.ceil(h*scale) + fBounds.height;
			if (w != cacheCanvas.width || h != cacheCanvas.height) {
				// TODO: it would be nice to preserve the content if there is a compositeOperation.
				cacheCanvas.width = w;
				cacheCanvas.height = h;
			} else if (!compositeOperation) {
				ctx.clearRect(0, 0, w+1, h+1);
			}
			
			ctx.save();
			ctx.globalCompositeOperation = compositeOperation;
			ctx.setTransform(scale, 0, 0, scale, -offX, -offY);
			this.draw(ctx, true);
			// TODO: filters and cache scale don't play well together at present.
			this._applyFilters();
			ctx.restore();
			this.cacheID = DisplayObject._nextCacheID++;
		};
	
		/**
		 * Clears the current cache. See {{#crossLink "DisplayObject/cache"}}{{/crossLink}} for more information.
		 * @method uncache
		 **/
		p.uncache = function() {
			this._cacheDataURL = this.cacheCanvas = null;
			this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
			this._cacheScale = 1;
		};
		
		/**
		 * Returns a data URL for the cache, or null if this display object is not cached.
		 * Uses cacheID to ensure a new data URL is not generated if the cache has not changed.
		 * @method getCacheDataURL
		 * @return {String} The image data url for the cache.
		 **/
		p.getCacheDataURL = function() {
			if (!this.cacheCanvas) { return null; }
			if (this.cacheID != this._cacheDataURLID) { this._cacheDataURL = this.cacheCanvas.toDataURL(); }
			return this._cacheDataURL;
		};
	
		/**
		 * Transforms the specified x and y position from the coordinate space of the display object
		 * to the global (stage) coordinate space. For example, this could be used to position an HTML label
		 * over a specific point on a nested display object. Returns a Point instance with x and y properties
		 * correlating to the transformed coordinates on the stage.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.x = 300;
		 *      displayObject.y = 200;
		 *      stage.addChild(displayObject);
		 *      var point = displayObject.localToGlobal(100, 100);
		 *      // Results in x=400, y=300
		 *
		 * @method localToGlobal
		 * @param {Number} x The x position in the source display object to transform.
		 * @param {Number} y The y position in the source display object to transform.
		 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
		 * @return {Point} A Point instance with x and y properties correlating to the transformed coordinates
		 * on the stage.
		 **/
		p.localToGlobal = function(x, y, pt) {
			return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x,y, pt||new createjs.Point());
		};
	
		/**
		 * Transforms the specified x and y position from the global (stage) coordinate space to the
		 * coordinate space of the display object. For example, this could be used to determine
		 * the current mouse position within the display object. Returns a Point instance with x and y properties
		 * correlating to the transformed position in the display object's coordinate space.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.x = 300;
		 *      displayObject.y = 200;
		 *      stage.addChild(displayObject);
		 *      var point = displayObject.globalToLocal(100, 100);
		 *      // Results in x=-200, y=-100
		 *
		 * @method globalToLocal
		 * @param {Number} x The x position on the stage to transform.
		 * @param {Number} y The y position on the stage to transform.
		 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
		 * @return {Point} A Point instance with x and y properties correlating to the transformed position in the
		 * display object's coordinate space.
		 **/
		p.globalToLocal = function(x, y, pt) {
			return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x,y, pt||new createjs.Point());
		};
	
		/**
		 * Transforms the specified x and y position from the coordinate space of this display object to the coordinate
		 * space of the target display object. Returns a Point instance with x and y properties correlating to the
		 * transformed position in the target's coordinate space. Effectively the same as using the following code with
		 * {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}} and {{#crossLink "DisplayObject/globalToLocal"}}{{/crossLink}}.
		 *
		 *      var pt = this.localToGlobal(x, y);
		 *      pt = target.globalToLocal(pt.x, pt.y);
		 *
		 * @method localToLocal
		 * @param {Number} x The x position in the source display object to transform.
		 * @param {Number} y The y position on the source display object to transform.
		 * @param {DisplayObject} target The target display object to which the coordinates will be transformed.
		 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
		 * @return {Point} Returns a Point instance with x and y properties correlating to the transformed position
		 * in the target's coordinate space.
		 **/
		p.localToLocal = function(x, y, target, pt) {
			pt = this.localToGlobal(x, y, pt);
			return target.globalToLocal(pt.x, pt.y, pt);
		};
	
		/**
		 * Shortcut method to quickly set the transform properties on the display object. All parameters are optional.
		 * Omitted parameters will have the default value set.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.setTransform(100, 100, 2, 2);
		 *
		 * @method setTransform
		 * @param {Number} [x=0] The horizontal translation (x position) in pixels
		 * @param {Number} [y=0] The vertical translation (y position) in pixels
		 * @param {Number} [scaleX=1] The horizontal scale, as a percentage of 1
		 * @param {Number} [scaleY=1] the vertical scale, as a percentage of 1
		 * @param {Number} [rotation=0] The rotation, in degrees
		 * @param {Number} [skewX=0] The horizontal skew factor
		 * @param {Number} [skewY=0] The vertical skew factor
		 * @param {Number} [regX=0] The horizontal registration point in pixels
		 * @param {Number} [regY=0] The vertical registration point in pixels
		 * @return {DisplayObject} Returns this instance. Useful for chaining commands.
		 * @chainable
		*/
		p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
			this.x = x || 0;
			this.y = y || 0;
			this.scaleX = scaleX == null ? 1 : scaleX;
			this.scaleY = scaleY == null ? 1 : scaleY;
			this.rotation = rotation || 0;
			this.skewX = skewX || 0;
			this.skewY = skewY || 0;
			this.regX = regX || 0;
			this.regY = regY || 0;
			return this;
		};
		
		/**
		 * Returns a matrix based on this object's current transform.
		 * @method getMatrix
		 * @param {Matrix2D} matrix Optional. A Matrix2D object to populate with the calculated values. If null, a new
		 * Matrix object is returned.
		 * @return {Matrix2D} A matrix representing this display object's transform.
		 **/
		p.getMatrix = function(matrix) {
			var o = this, mtx = matrix&&matrix.identity() || new createjs.Matrix2D();
			return o.transformMatrix ?  mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
		};
		
		/**
		 * Generates a Matrix2D object representing the combined transform of the display object and all of its
		 * parent Containers up to the highest level ancestor (usually the {{#crossLink "Stage"}}{{/crossLink}}). This can
		 * be used to transform positions between coordinate spaces, such as with {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}}
		 * and {{#crossLink "DisplayObject/globalToLocal"}}{{/crossLink}}.
		 * @method getConcatenatedMatrix
		 * @param {Matrix2D} [matrix] A {{#crossLink "Matrix2D"}}{{/crossLink}} object to populate with the calculated values.
		 * If null, a new Matrix2D object is returned.
		 * @return {Matrix2D} The combined matrix.
		 **/
		p.getConcatenatedMatrix = function(matrix) {
			var o = this, mtx = this.getMatrix(matrix);
			while (o = o.parent) {
				mtx.prependMatrix(o.getMatrix(o._props.matrix));
			}
			return mtx;
		};
		
		/**
		 * Generates a DisplayProps object representing the combined display properties of the  object and all of its
		 * parent Containers up to the highest level ancestor (usually the {{#crossLink "Stage"}}{{/crossLink}}).
		 * @method getConcatenatedDisplayProps
		 * @param {DisplayProps} [props] A {{#crossLink "DisplayProps"}}{{/crossLink}} object to populate with the calculated values.
		 * If null, a new DisplayProps object is returned.
		 * @return {DisplayProps} The combined display properties.
		 **/
		p.getConcatenatedDisplayProps = function(props) {
			props = props ? props.identity() : new createjs.DisplayProps();
			var o = this, mtx = o.getMatrix(props.matrix); 
			do {
				props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
				
				// we do this to avoid problems with the matrix being used for both operations when o._props.matrix is passed in as the props param.
				// this could be simplified (ie. just done as part of the prepend above) if we switched to using a pool.
				if (o != this) { mtx.prependMatrix(o.getMatrix(o._props.matrix)); }
			} while (o = o.parent);
			return props;
		};
	
		/**
		 * Tests whether the display object intersects the specified point in <em>local</em> coordinates (ie. draws a pixel
		 * with alpha > 0 at the specified position). This ignores the alpha, shadow, hitArea, mask, and compositeOperation
		 * of the display object.
		 *
		 * <h4>Example</h4>
		 *
		 * 		var myShape = new createjs.Shape();
		 * 		myShape.graphics.beginFill("red").drawRect(100, 100, 20, 50);
		 *
		 * 		console.log(myShape.hitTest(10,10); // false
		 * 		console.log(myShape.hitTest(110, 25); // true
		 *
		 * Note that to use Stage coordinates (such as {{#crossLink "Stage/mouseX:property"}}{{/crossLink}}), they must
		 * first be converted to local coordinates:
		 *
		 *      stage.addEventListener("stagemousedown", handleMouseDown);
		 *      function handleMouseDown(event) {
		 *      	var p = myShape.globalToLocal(stage.mouseX, stage.mouseY);
		 *          var hit = myShape.hitTest(p.x, p.y);
		 *      }
		 *
		 * Shape-to-shape collision is not currently supported by EaselJS.
		 *
		 * @method hitTest
		 * @param {Number} x The x position to check in the display object's local coordinates.
		 * @param {Number} y The y position to check in the display object's local coordinates.
		 * @return {Boolean} A Boolean indicating whether a visible portion of the DisplayObject intersect the specified
		 * local Point.
		*/
		p.hitTest = function(x, y) {
			var ctx = DisplayObject._hitTestContext;
			ctx.setTransform(1, 0, 0, 1, -x, -y);
			this.draw(ctx);
	
			var hit = this._testHit(ctx);
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, 2, 2);
			return hit;
		};
		
		/**
		 * Provides a chainable shortcut method for setting a number of properties on the instance.
		 *
		 * <h4>Example</h4>
		 *
		 *      var myGraphics = new createjs.Graphics().beginFill("#ff0000").drawCircle(0, 0, 25);
		 *      var shape = stage.addChild(new createjs.Shape()).set({graphics:myGraphics, x:100, y:100, alpha:0.5});
		 *
		 * @method set
		 * @param {Object} props A generic object containing properties to copy to the DisplayObject instance.
		 * @return {DisplayObject} Returns the instance the method is called on (useful for chaining calls.)
		 * @chainable
		*/
		p.set = function(props) {
			for (var n in props) { this[n] = props[n]; }
			return this;
		};
		
		/**
		 * Returns a rectangle representing this object's bounds in its local coordinate system (ie. with no transformation).
		 * Objects that have been cached will return the bounds of the cache.
		 * 
		 * Not all display objects can calculate their own bounds (ex. Shape). For these objects, you can use 
		 * {{#crossLink "DisplayObject/setBounds"}}{{/crossLink}} so that they are included when calculating Container
		 * bounds.
		 * 
		 * <table>
		 * 	<tr><td><b>All</b></td><td>
		 * 		All display objects support setting bounds manually using setBounds(). Likewise, display objects that
		 * 		have been cached using cache() will return the bounds of their cache. Manual and cache bounds will override
		 * 		the automatic calculations listed below.
		 * 	</td></tr>
		 * 	<tr><td><b>Bitmap</b></td><td>
		 * 		Returns the width and height of the sourceRect (if specified) or image, extending from (x=0,y=0).
		 * 	</td></tr>
		 * 	<tr><td><b>Sprite</b></td><td>
		 * 		Returns the bounds of the current frame. May have non-zero x/y if a frame registration point was specified
		 * 		in the spritesheet data. See also {{#crossLink "SpriteSheet/getFrameBounds"}}{{/crossLink}}
		 * 	</td></tr>
		 * 	<tr><td><b>Container</b></td><td>
		 * 		Returns the aggregate (combined) bounds of all children that return a non-null value from getBounds().
		 * 	</td></tr>
		 * 	<tr><td><b>Shape</b></td><td>
		 * 		Does not currently support automatic bounds calculations. Use setBounds() to manually define bounds.
		 * 	</td></tr>
		 * 	<tr><td><b>Text</b></td><td>
		 * 		Returns approximate bounds. Horizontal values (x/width) are quite accurate, but vertical values (y/height) are
		 * 		not, especially when using textBaseline values other than "top".
		 * 	</td></tr>
		 * 	<tr><td><b>BitmapText</b></td><td>
		 * 		Returns approximate bounds. Values will be more accurate if spritesheet frame registration points are close
		 * 		to (x=0,y=0).
		 * 	</td></tr>
		* </table>
		 * 
		 * Bounds can be expensive to calculate for some objects (ex. text, or containers with many children), and
		 * are recalculated each time you call getBounds(). You can prevent recalculation on static objects by setting the
		 * bounds explicitly:
		 * 
		 * 	var bounds = obj.getBounds();
		 * 	obj.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
		 * 	// getBounds will now use the set values, instead of recalculating
		 * 
		 * To reduce memory impact, the returned Rectangle instance may be reused internally; clone the instance or copy its
		 * values if you need to retain it.
		 * 
		 * 	var myBounds = obj.getBounds().clone();
		 * 	// OR:
		 * 	myRect.copy(obj.getBounds());
		 * 
		 * @method getBounds
		 * @return {Rectangle} A Rectangle instance representing the bounds, or null if bounds are not available for this
		 * object.
		 **/
		p.getBounds = function() {
			if (this._bounds) { return this._rectangle.copy(this._bounds); }
			var cacheCanvas = this.cacheCanvas;
			if (cacheCanvas) {
				var scale = this._cacheScale;
				return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width/scale, cacheCanvas.height/scale);
			}
			return null;
		};
		
		/**
		 * Returns a rectangle representing this object's bounds in its parent's coordinate system (ie. with transformations applied).
		 * Objects that have been cached will return the transformed bounds of the cache.
		 * 
		 * Not all display objects can calculate their own bounds (ex. Shape). For these objects, you can use 
		 * {{#crossLink "DisplayObject/setBounds"}}{{/crossLink}} so that they are included when calculating Container
		 * bounds.
		 * 
		 * To reduce memory impact, the returned Rectangle instance may be reused internally; clone the instance or copy its
		 * values if you need to retain it.
		 * 
		 * Container instances calculate aggregate bounds for all children that return bounds via getBounds.
		 * @method getTransformedBounds
		 * @return {Rectangle} A Rectangle instance representing the bounds, or null if bounds are not available for this object.
		 **/
		p.getTransformedBounds = function() {
			return this._getBounds();
		};
		
		/**
		 * Allows you to manually specify the bounds of an object that either cannot calculate their own bounds (ex. Shape &
		 * Text) for future reference, or so the object can be included in Container bounds. Manually set bounds will always
		 * override calculated bounds.
		 * 
		 * The bounds should be specified in the object's local (untransformed) coordinates. For example, a Shape instance
		 * with a 25px radius circle centered at 0,0 would have bounds of (-25, -25, 50, 50).
		 * @method setBounds
		 * @param {Number} x The x origin of the bounds. Pass null to remove the manual bounds.
		 * @param {Number} y The y origin of the bounds.
		 * @param {Number} width The width of the bounds.
		 * @param {Number} height The height of the bounds.
		 **/
		p.setBounds = function(x, y, width, height) {
			if (x == null) { this._bounds = x; }
			this._bounds = (this._bounds || new createjs.Rectangle()).setValues(x, y, width, height);
		};
	
		/**
		 * Returns a clone of this DisplayObject. Some properties that are specific to this instance's current context are
		 * reverted to their defaults (for example .parent). Caches are not maintained across clones, and some elements
		 * are copied by reference (masks, individual filter instances, hit area)
		 * @method clone
		 * @return {DisplayObject} A clone of the current DisplayObject instance.
		 **/
		p.clone = function() {
			return this._cloneProps(new DisplayObject());
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[DisplayObject (name="+  this.name +")]";
		};
	
	
	// private methods:
		// separated so it can be used more easily in subclasses:
		/**
		 * @method _cloneProps
		 * @param {DisplayObject} o The DisplayObject instance which will have properties from the current DisplayObject
		 * instance copied into.
		 * @return {DisplayObject} o
		 * @protected
		 **/
		p._cloneProps = function(o) {
			o.alpha = this.alpha;
			o.mouseEnabled = this.mouseEnabled;
			o.tickEnabled = this.tickEnabled;
			o.name = this.name;
			o.regX = this.regX;
			o.regY = this.regY;
			o.rotation = this.rotation;
			o.scaleX = this.scaleX;
			o.scaleY = this.scaleY;
			o.shadow = this.shadow;
			o.skewX = this.skewX;
			o.skewY = this.skewY;
			o.visible = this.visible;
			o.x  = this.x;
			o.y = this.y;
			o.compositeOperation = this.compositeOperation;
			o.snapToPixel = this.snapToPixel;
			o.filters = this.filters==null?null:this.filters.slice(0);
			o.mask = this.mask;
			o.hitArea = this.hitArea;
			o.cursor = this.cursor;
			o._bounds = this._bounds;
			return o;
		};
	
		/**
		 * @method _applyShadow
		 * @protected
		 * @param {CanvasRenderingContext2D} ctx
		 * @param {Shadow} shadow
		 **/
		p._applyShadow = function(ctx, shadow) {
			shadow = shadow || Shadow.identity;
			ctx.shadowColor = shadow.color;
			ctx.shadowOffsetX = shadow.offsetX;
			ctx.shadowOffsetY = shadow.offsetY;
			ctx.shadowBlur = shadow.blur;
		};
		
		
		/**
		 * @method _tick
		 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
		 * @protected
		 **/
		p._tick = function(evtObj) {
			// because tick can be really performance sensitive, check for listeners before calling dispatchEvent.
			var ls = this._listeners;
			if (ls && ls["tick"]) {
				// reset & reuse the event object to avoid construction / GC costs:
				evtObj.target = null;
				evtObj.propagationStopped = evtObj.immediatePropagationStopped = false;
				this.dispatchEvent(evtObj);
			}
		};
	
		/**
		 * @method _testHit
		 * @protected
		 * @param {CanvasRenderingContext2D} ctx
		 * @return {Boolean}
		 **/
		p._testHit = function(ctx) {
			try {
				var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1;
			} catch (e) {
				if (!DisplayObject.suppressCrossDomainErrors) {
					throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
				}
			}
			return hit;
		};
	
		/**
		 * @method _applyFilters
		 * @protected
		 **/
		p._applyFilters = function() {
			if (!this.filters || this.filters.length == 0 || !this.cacheCanvas) { return; }
			var l = this.filters.length;
			var ctx = this.cacheCanvas.getContext("2d");
			var w = this.cacheCanvas.width;
			var h = this.cacheCanvas.height;
			for (var i=0; i<l; i++) {
				this.filters[i].applyFilter(ctx, 0, 0, w, h);
			}
		};
		
		/**
		 * @method _getFilterBounds
		 * @return {Rectangle}
		 * @protected
		 **/
		p._getFilterBounds = function(rect) {
			var l, filters = this.filters, bounds = this._rectangle.setValues(0,0,0,0);
			if (!filters || !(l=filters.length)) { return bounds; }
			
			for (var i=0; i<l; i++) {
				var f = this.filters[i];
				f.getBounds&&f.getBounds(bounds);
			}
			return bounds;
		};
		
		/**
		 * @method _getBounds
		 * @param {Matrix2D} matrix
		 * @param {Boolean} ignoreTransform If true, does not apply this object's transform.
		 * @return {Rectangle}
		 * @protected
		 **/
		p._getBounds = function(matrix, ignoreTransform){
			return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
		};
		
		/**
		 * @method _transformBounds
		 * @param {Rectangle} bounds
		 * @param {Matrix2D} matrix
		 * @param {Boolean} ignoreTransform
		 * @return {Rectangle}
		 * @protected
		 **/
		p._transformBounds = function(bounds, matrix, ignoreTransform) {
			if (!bounds) { return bounds; }
			var x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height, mtx = this._props.matrix;
			mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
			
			if (x || y) { mtx.appendTransform(0,0,1,1,0,0,0,-x,-y); } // TODO: simplify this.
			if (matrix) { mtx.prependMatrix(matrix); }
			
			var x_a = width*mtx.a, x_b = width*mtx.b;
			var y_c = height*mtx.c, y_d = height*mtx.d;
			var tx = mtx.tx, ty = mtx.ty;
			
			var minX = tx, maxX = tx, minY = ty, maxY = ty;
	
			if ((x = x_a + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
			if ((x = x_a + y_c + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
			if ((x = y_c + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
			
			if ((y = x_b + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
			if ((y = x_b + y_d + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
			if ((y = y_d + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
			
			return bounds.setValues(minX, minY, maxX-minX, maxY-minY);
		};
		
		/**
		 * Indicates whether the display object has any mouse event listeners or a cursor.
		 * @method _isMouseOpaque
		 * @return {Boolean}
		 * @protected
		 **/
		p._hasMouseEventListener = function() {
			var evts = DisplayObject._MOUSE_EVENTS;
			for (var i= 0, l=evts.length; i<l; i++) {
				if (this.hasEventListener(evts[i])) { return true; }
			}
			return !!this.cursor;
		};
	
		createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher");
	}());
	
	//##############################################################################
	// Container.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
		
	
	// constructor:
	/**
	 * A Container is a nestable display list that allows you to work with compound display elements. For  example you could
	 * group arm, leg, torso and head {{#crossLink "Bitmap"}}{{/crossLink}} instances together into a Person Container, and
	 * transform them as a group, while still being able to move the individual parts relative to each other. Children of
	 * containers have their <code>transform</code> and <code>alpha</code> properties concatenated with their parent
	 * Container.
	 *
	 * For example, a {{#crossLink "Shape"}}{{/crossLink}} with x=100 and alpha=0.5, placed in a Container with <code>x=50</code>
	 * and <code>alpha=0.7</code> will be rendered to the canvas at <code>x=150</code> and <code>alpha=0.35</code>.
	 * Containers have some overhead, so you generally shouldn't create a Container to hold a single child.
	 *
	 * <h4>Example</h4>
	 *
	 *      var container = new createjs.Container();
	 *      container.addChild(bitmapInstance, shapeInstance);
	 *      container.x = 100;
	 *
	 * @class Container
	 * @extends DisplayObject
	 * @constructor
	 **/
		function Container() {
			this.DisplayObject_constructor();
			
		// public properties:
			/**
			 * The array of children in the display list. You should usually use the child management methods such as
			 * {{#crossLink "Container/addChild"}}{{/crossLink}}, {{#crossLink "Container/removeChild"}}{{/crossLink}},
			 * {{#crossLink "Container/swapChildren"}}{{/crossLink}}, etc, rather than accessing this directly, but it is
			 * included for advanced uses.
			 * @property children
			 * @type Array
			 * @default null
			 **/
			this.children = [];
			
			/**
			 * Indicates whether the children of this container are independently enabled for mouse/pointer interaction.
			 * If false, the children will be aggregated under the container - for example, a click on a child shape would
			 * trigger a click event on the container.
			 * @property mouseChildren
			 * @type Boolean
			 * @default true
			 **/
			this.mouseChildren = true;
			
			/**
			 * If false, the tick will not be propagated to children of this Container. This can provide some performance benefits.
			 * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
			 * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
			 * @property tickChildren
			 * @type Boolean
			 * @default true
			 **/
			this.tickChildren = true;
		}
		var p = createjs.extend(Container, createjs.DisplayObject);
		
		
	// getter / setters:
		/**
		 * Use the {{#crossLink "Container/numChildren:property"}}{{/crossLink}} property instead.
		 * @method getNumChildren
		 * @return {Number}
		 * @deprecated
		 **/
		p.getNumChildren = function() {
			return this.children.length;
		};
	
		/**
		 * Returns the number of children in the container.
		 * @property numChildren
		 * @type {Number}
		 * @readonly
		 **/
		try {
			Object.defineProperties(p, {
				numChildren: { get: p.getNumChildren }
			});
		} catch (e) {}
		
	
	// public methods:
		/**
		 * Constructor alias for backwards compatibility. This method will be removed in future versions.
		 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
		 * @method initialize
		 * @deprecated in favour of `createjs.promote()`
		 **/
		p.initialize = Container; // TODO: deprecated.
		
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			var hasContent = this.cacheCanvas || this.children.length;
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache.
		 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
		 * into itself).
		 **/
		p.draw = function(ctx, ignoreCache) {
			if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
			
			// this ensures we don't have issues with display list changes that occur during a draw:
			var list = this.children.slice();
			for (var i=0,l=list.length; i<l; i++) {
				var child = list[i];
				if (!child.isVisible()) { continue; }
				
				// draw the child:
				ctx.save();
				child.updateContext(ctx);
				child.draw(ctx);
				ctx.restore();
			}
			return true;
		};
		
		/**
		 * Adds a child to the top of the display list.
		 *
		 * <h4>Example</h4>
		 *
		 * 		container.addChild(bitmapInstance);
		 *
		 * You can also add multiple children at once:
		 *
		 * 		container.addChild(bitmapInstance, shapeInstance, textInstance);
		 *
		 * @method addChild
		 * @param {DisplayObject} child The display object to add.
		 * @return {DisplayObject} The child that was added, or the last child if multiple children were added.
		 **/
		p.addChild = function(child) {
			if (child == null) { return child; }
			var l = arguments.length;
			if (l > 1) {
				for (var i=0; i<l; i++) { this.addChild(arguments[i]); }
				return arguments[l-1];
			}
			if (child.parent) { child.parent.removeChild(child); }
			child.parent = this;
			this.children.push(child);
			child.dispatchEvent("added");
			return child;
		};
	
		/**
		 * Adds a child to the display list at the specified index, bumping children at equal or greater indexes up one, and
		 * setting its parent to this Container.
		 *
		 * <h4>Example</h4>
		 *
		 *      addChildAt(child1, index);
		 *
		 * You can also add multiple children, such as:
		 *
		 *      addChildAt(child1, child2, ..., index);
		 *
		 * The index must be between 0 and numChildren. For example, to add myShape under otherShape in the display list,
		 * you could use:
		 *
		 *      container.addChildAt(myShape, container.getChildIndex(otherShape));
		 *
		 * This would also bump otherShape's index up by one. Fails silently if the index is out of range.
		 *
		 * @method addChildAt
		 * @param {DisplayObject} child The display object to add.
		 * @param {Number} index The index to add the child at.
		 * @return {DisplayObject} Returns the last child that was added, or the last child if multiple children were added.
		 **/
		p.addChildAt = function(child, index) {
			var l = arguments.length;
			var indx = arguments[l-1]; // can't use the same name as the index param or it replaces arguments[1]
			if (indx < 0 || indx > this.children.length) { return arguments[l-2]; }
			if (l > 2) {
				for (var i=0; i<l-1; i++) { this.addChildAt(arguments[i], indx+i); }
				return arguments[l-2];
			}
			if (child.parent) { child.parent.removeChild(child); }
			child.parent = this;
			this.children.splice(index, 0, child);
			child.dispatchEvent("added");
			return child;
		};
	
		/**
		 * Removes the specified child from the display list. Note that it is faster to use removeChildAt() if the index is
		 * already known.
		 *
		 * <h4>Example</h4>
		 *
		 *      container.removeChild(child);
		 *
		 * You can also remove multiple children:
		 *
		 *      removeChild(child1, child2, ...);
		 *
		 * Returns true if the child (or children) was removed, or false if it was not in the display list.
		 * @method removeChild
		 * @param {DisplayObject} child The child to remove.
		 * @return {Boolean} true if the child (or children) was removed, or false if it was not in the display list.
		 **/
		p.removeChild = function(child) {
			var l = arguments.length;
			if (l > 1) {
				var good = true;
				for (var i=0; i<l; i++) { good = good && this.removeChild(arguments[i]); }
				return good;
			}
			return this.removeChildAt(createjs.indexOf(this.children, child));
		};
	
		/**
		 * Removes the child at the specified index from the display list, and sets its parent to null.
		 *
		 * <h4>Example</h4>
		 *
		 *      container.removeChildAt(2);
		 *
		 * You can also remove multiple children:
		 *
		 *      container.removeChild(2, 7, ...)
		 *
		 * Returns true if the child (or children) was removed, or false if any index was out of range.
		 * @method removeChildAt
		 * @param {Number} index The index of the child to remove.
		 * @return {Boolean} true if the child (or children) was removed, or false if any index was out of range.
		 **/
		p.removeChildAt = function(index) {
			var l = arguments.length;
			if (l > 1) {
				var a = [];
				for (var i=0; i<l; i++) { a[i] = arguments[i]; }
				a.sort(function(a, b) { return b-a; });
				var good = true;
				for (var i=0; i<l; i++) { good = good && this.removeChildAt(a[i]); }
				return good;
			}
			if (index < 0 || index > this.children.length-1) { return false; }
			var child = this.children[index];
			if (child) { child.parent = null; }
			this.children.splice(index, 1);
			child.dispatchEvent("removed");
			return true;
		};
	
		/**
		 * Removes all children from the display list.
		 *
		 * <h4>Example</h4>
		 *
		 * 	container.removeAllChildren();
		 *
		 * @method removeAllChildren
		 **/
		p.removeAllChildren = function() {
			var kids = this.children;
			while (kids.length) { this.removeChildAt(0); }
		};
	
		/**
		 * Returns the child at the specified index.
		 *
		 * <h4>Example</h4>
		 *
		 *      container.getChildAt(2);
		 *
		 * @method getChildAt
		 * @param {Number} index The index of the child to return.
		 * @return {DisplayObject} The child at the specified index. Returns null if there is no child at the index.
		 **/
		p.getChildAt = function(index) {
			return this.children[index];
		};
		
		/**
		 * Returns the child with the specified name.
		 * @method getChildByName
		 * @param {String} name The name of the child to return.
		 * @return {DisplayObject} The child with the specified name.
		 **/
		p.getChildByName = function(name) {
			var kids = this.children;
			for (var i=0,l=kids.length;i<l;i++) {
				if(kids[i].name == name) { return kids[i]; }
			}
			return null;
		};
	
		/**
		 * Performs an array sort operation on the child list.
		 *
		 * <h4>Example: Display children with a higher y in front.</h4>
		 * 
		 *      var sortFunction = function(obj1, obj2, options) {
		 *          if (obj1.y > obj2.y) { return 1; }
		 *          if (obj1.y < obj2.y) { return -1; }
		 *          return 0;
		 *      }
		 *      container.sortChildren(sortFunction);
		 *
		 * @method sortChildren
		 * @param {Function} sortFunction the function to use to sort the child list. See JavaScript's <code>Array.sort</code>
		 * documentation for details.
		 **/
		p.sortChildren = function(sortFunction) {
			this.children.sort(sortFunction);
		};
	
		/**
		 * Returns the index of the specified child in the display list, or -1 if it is not in the display list.
		 *
		 * <h4>Example</h4>
		 *
		 *      var index = container.getChildIndex(child);
		 *
		 * @method getChildIndex
		 * @param {DisplayObject} child The child to return the index of.
		 * @return {Number} The index of the specified child. -1 if the child is not found.
		 **/
		p.getChildIndex = function(child) {
			return createjs.indexOf(this.children, child);
		};
		
		/**
		 * Swaps the children at the specified indexes. Fails silently if either index is out of range.
		 * @method swapChildrenAt
		 * @param {Number} index1
		 * @param {Number} index2
		 **/
		p.swapChildrenAt = function(index1, index2) {
			var kids = this.children;
			var o1 = kids[index1];
			var o2 = kids[index2];
			if (!o1 || !o2) { return; }
			kids[index1] = o2;
			kids[index2] = o1;
		};
		
		/**
		 * Swaps the specified children's depth in the display list. Fails silently if either child is not a child of this
		 * Container.
		 * @method swapChildren
		 * @param {DisplayObject} child1
		 * @param {DisplayObject} child2
		 **/
		p.swapChildren = function(child1, child2) {
			var kids = this.children;
			var index1,index2;
			for (var i=0,l=kids.length;i<l;i++) {
				if (kids[i] == child1) { index1 = i; }
				if (kids[i] == child2) { index2 = i; }
				if (index1 != null && index2 != null) { break; }
			}
			if (i==l) { return; } // TODO: throw error?
			kids[index1] = child2;
			kids[index2] = child1;
		};
		
		/**
		 * Changes the depth of the specified child. Fails silently if the child is not a child of this container, or the index is out of range.
		 * @param {DisplayObject} child
		 * @param {Number} index  
		 * @method setChildIndex
		 **/
		p.setChildIndex = function(child, index) {
			var kids = this.children, l=kids.length;
			if (child.parent != this || index < 0 || index >= l) { return; }
			for (var i=0;i<l;i++) {
				if (kids[i] == child) { break; }
			}
			if (i==l || i == index) { return; }
			kids.splice(i,1);
			kids.splice(index,0,child);
		};
	
		/**
		 * Returns true if the specified display object either is this container or is a descendent (child, grandchild, etc)
		 * of this container.
		 * @method contains
		 * @param {DisplayObject} child The DisplayObject to be checked.
		 * @return {Boolean} true if the specified display object either is this container or is a descendent.
		 **/
		p.contains = function(child) {
			while (child) {
				if (child == this) { return true; }
				child = child.parent;
			}
			return false;
		};
	
		/**
		 * Tests whether the display object intersects the specified local point (ie. draws a pixel with alpha > 0 at the
		 * specified position). This ignores the alpha, shadow and compositeOperation of the display object, and all
		 * transform properties including regX/Y.
		 * @method hitTest
		 * @param {Number} x The x position to check in the display object's local coordinates.
		 * @param {Number} y The y position to check in the display object's local coordinates.
		 * @return {Boolean} A Boolean indicating whether there is a visible section of a DisplayObject that overlaps the specified
		 * coordinates.
		 **/
		p.hitTest = function(x, y) {
			// TODO: optimize to use the fast cache check where possible.
			return (this.getObjectUnderPoint(x, y) != null);
		};
	
		/**
		 * Returns an array of all display objects under the specified coordinates that are in this container's display
		 * list. This routine ignores any display objects with {{#crossLink "DisplayObject/mouseEnabled:property"}}{{/crossLink}}
		 * set to `false`. The array will be sorted in order of visual depth, with the top-most display object at index 0.
		 * This uses shape based hit detection, and can be an expensive operation to run, so it is best to use it carefully.
		 * For example, if testing for objects under the mouse, test on tick (instead of on {{#crossLink "DisplayObject/mousemove:event"}}{{/crossLink}}),
		 * and only if the mouse's position has changed.
		 * 
		 * <ul>
		 *     <li>By default (mode=0) this method evaluates all display objects.</li>
		 *     <li>By setting the `mode` parameter to `1`, the {{#crossLink "DisplayObject/mouseEnabled:property"}}{{/crossLink}}
		 * 		and {{#crossLink "mouseChildren:property"}}{{/crossLink}} properties will be respected.</li>
		 * 	   <li>Setting the `mode` to `2` additionally excludes display objects that do not have active mouse event
		 * 	   	listeners or a {{#crossLink "DisplayObject:cursor:property"}}{{/crossLink}} property. That is, only objects
		 * 	   	that would normally intercept mouse interaction will be included. This can significantly improve performance
		 * 	   	in some cases by reducing the number of display objects that need to be tested.</li>
		 * </li>
		 * 
		 * This method accounts for both {{#crossLink "DisplayObject/hitArea:property"}}{{/crossLink}} and {{#crossLink "DisplayObject/mask:property"}}{{/crossLink}}.
		 * @method getObjectsUnderPoint
		 * @param {Number} x The x position in the container to test.
		 * @param {Number} y The y position in the container to test.
		 * @param {Number} [mode=0] The mode to use to determine which display objects to include. 0-all, 1-respect mouseEnabled/mouseChildren, 2-only mouse opaque objects.
		 * @return {Array} An Array of DisplayObjects under the specified coordinates.
		 **/
		p.getObjectsUnderPoint = function(x, y, mode) {
			var arr = [];
			var pt = this.localToGlobal(x, y);
			this._getObjectsUnderPoint(pt.x, pt.y, arr, mode>0, mode==1);
			return arr;
		};
	
		/**
		 * Similar to {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}, but returns only the top-most display
		 * object. This runs significantly faster than <code>getObjectsUnderPoint()</code>, but is still potentially an expensive
		 * operation. See {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}} for more information.
		 * @method getObjectUnderPoint
		 * @param {Number} x The x position in the container to test.
		 * @param {Number} y The y position in the container to test.
		 * @param {Number} mode The mode to use to determine which display objects to include.  0-all, 1-respect mouseEnabled/mouseChildren, 2-only mouse opaque objects.
		 * @return {DisplayObject} The top-most display object under the specified coordinates.
		 **/
		p.getObjectUnderPoint = function(x, y, mode) {
			var pt = this.localToGlobal(x, y);
			return this._getObjectsUnderPoint(pt.x, pt.y, null, mode>0, mode==1);
		};
		
		/**
		 * Docced in superclass.
		 */
		p.getBounds = function() {
			return this._getBounds(null, true);
		};
		
		
		/**
		 * Docced in superclass.
		 */
		p.getTransformedBounds = function() {
			return this._getBounds();
		};
	
		/**
		 * Returns a clone of this Container. Some properties that are specific to this instance's current context are
		 * reverted to their defaults (for example .parent).
		 * @method clone
		 * @param {Boolean} [recursive=false] If true, all of the descendants of this container will be cloned recursively. If false, the
		 * properties of the container will be cloned, but the new instance will not have any children.
		 * @return {Container} A clone of the current Container instance.
		 **/
		p.clone = function(recursive) {
			var o = this._cloneProps(new Container());
			if (recursive) { this._cloneChildren(o); }
			return o;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Container (name="+  this.name +")]";
		};
	
	
	// private methods:
		/**
		 * @method _tick
		 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
		 * @protected
		 **/
		p._tick = function(evtObj) {
			if (this.tickChildren) {
				for (var i=this.children.length-1; i>=0; i--) {
					var child = this.children[i];
					if (child.tickEnabled && child._tick) { child._tick(evtObj); }
				}
			}
			this.DisplayObject__tick(evtObj);
		};
		
		/**
		 * Recursively clones all children of this container, and adds them to the target container.
		 * @method cloneChildren
		 * @protected
		 * @param {Container} o The target container.
		 **/
		p._cloneChildren = function(o) {
			if (o.children.length) { o.removeAllChildren(); }
			var arr = o.children;
			for (var i=0, l=this.children.length; i<l; i++) {
				var clone = this.children[i].clone(true);
				clone.parent = o;
				arr.push(clone);
			}
		};
	
		/**
		 * @method _getObjectsUnderPoint
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Array} arr
		 * @param {Boolean} mouse If true, it will respect mouse interaction properties like mouseEnabled, mouseChildren, and active listeners.
		 * @param {Boolean} activeListener If true, there is an active mouse event listener on a parent object.
		 * @param {Number} currentDepth Indicates the current depth of the search.
		 * @return {DisplayObject}
		 * @protected
		 **/
		p._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth) {
			currentDepth = currentDepth || 0;
			if (!currentDepth && !this._testMask(this, x, y)) { return null; }
			var mtx, ctx = createjs.DisplayObject._hitTestContext;
			activeListener = activeListener || (mouse&&this._hasMouseEventListener());
	
			// draw children one at a time, and check if we get a hit:
			var children = this.children, l = children.length;
			for (var i=l-1; i>=0; i--) {
				var child = children[i];
				var hitArea = child.hitArea;
				if (!child.visible || (!hitArea && !child.isVisible()) || (mouse && !child.mouseEnabled)) { continue; }
				if (!hitArea && !this._testMask(child, x, y)) { continue; }
				
				// if a child container has a hitArea then we only need to check its hitArea, so we can treat it as a normal DO:
				if (!hitArea && child instanceof Container) {
					var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth+1);
					if (!arr && result) { return (mouse && !this.mouseChildren) ? this : result; }
				} else {
					if (mouse && !activeListener && !child._hasMouseEventListener()) { continue; }
					
					// TODO: can we pass displayProps forward, to avoid having to calculate this backwards every time? It's kind of a mixed bag. When we're only hunting for DOs with event listeners, it may not make sense.
					var props = child.getConcatenatedDisplayProps(child._props);
					mtx = props.matrix;
					
					if (hitArea) {
						mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix));
						props.alpha = hitArea.alpha;
					}
					
					ctx.globalAlpha = props.alpha;
					ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
					(hitArea||child).draw(ctx);
					if (!this._testHit(ctx)) { continue; }
					ctx.setTransform(1, 0, 0, 1, 0, 0);
					ctx.clearRect(0, 0, 2, 2);
					if (arr) { arr.push(child); }
					else { return (mouse && !this.mouseChildren) ? this : child; }
				}
			}
			return null;
		};
		
		/**
		 * @method _testMask
		 * @param {DisplayObject} target
		 * @param {Number} x
		 * @param {Number} y
		 * @return {Boolean} Indicates whether the x/y is within the masked region.
		 * @protected
		 **/
		p._testMask = function(target, x, y) {
			var mask = target.mask;
			if (!mask || !mask.graphics || mask.graphics.isEmpty()) { return true; }
			
			var mtx = this._props.matrix, parent = target.parent;
			mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
			mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
			
			var ctx = createjs.DisplayObject._hitTestContext;
			ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
			
			// draw the mask as a solid fill:
			mask.graphics.drawAsPath(ctx);
			ctx.fillStyle = "#000";
			ctx.fill();
			
			if (!this._testHit(ctx)) { return false; }
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, 2, 2);
			
			return true;
		};
		
		/**
		 * @method _getBounds
		 * @param {Matrix2D} matrix
		 * @param {Boolean} ignoreTransform If true, does not apply this object's transform.
		 * @return {Rectangle}
		 * @protected
		 **/
		p._getBounds = function(matrix, ignoreTransform) {
			var bounds = this.DisplayObject_getBounds();
			if (bounds) { return this._transformBounds(bounds, matrix, ignoreTransform); }
			
			var mtx = this._props.matrix;
			mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
			if (matrix) { mtx.prependMatrix(matrix); }
			
			var l = this.children.length, rect=null;
			for (var i=0; i<l; i++) {
				var child = this.children[i];
				if (!child.visible || !(bounds = child._getBounds(mtx))) { continue; }
				if (rect) { rect.extend(bounds.x, bounds.y, bounds.width, bounds.height); }
				else { rect = bounds.clone(); }
			}
			return rect;
		};
	
	
		createjs.Container = createjs.promote(Container, "DisplayObject");
	}());
	
	//##############################################################################
	// Stage.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * A stage is the root level {{#crossLink "Container"}}{{/crossLink}} for a display list. Each time its {{#crossLink "Stage/tick"}}{{/crossLink}}
		 * method is called, it will render its display list to its target canvas.
		 *
		 * <h4>Example</h4>
		 * This example creates a stage, adds a child to it, then uses {{#crossLink "Ticker"}}{{/crossLink}} to update the child
		 * and redraw the stage using {{#crossLink "Stage/update"}}{{/crossLink}}.
		 *
		 *      var stage = new createjs.Stage("canvasElementId");
		 *      var image = new createjs.Bitmap("imagePath.png");
		 *      stage.addChild(image);
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          image.x += 10;
		 *          stage.update();
		 *      }
		 *
		 * @class Stage
		 * @extends Container
		 * @constructor
		 * @param {HTMLCanvasElement | String | Object} canvas A canvas object that the Stage will render to, or the string id
		 * of a canvas object in the current document.
		 **/
		function Stage(canvas) {
			this.Container_constructor();
		
		
		// public properties:
			/**
			 * Indicates whether the stage should automatically clear the canvas before each render. You can set this to <code>false</code>
			 * to manually control clearing (for generative art, or when pointing multiple stages at the same canvas for
			 * example).
			 *
			 * <h4>Example</h4>
			 *
			 *      var stage = new createjs.Stage("canvasId");
			 *      stage.autoClear = false;
			 *
			 * @property autoClear
			 * @type Boolean
			 * @default true
			 **/
			this.autoClear = true;
		
			/**
			 * The canvas the stage will render to. Multiple stages can share a single canvas, but you must disable autoClear for all but the
			 * first stage that will be ticked (or they will clear each other's render).
			 *
			 * When changing the canvas property you must disable the events on the old canvas, and enable events on the
			 * new canvas or mouse events will not work as expected. For example:
			 *
			 *      myStage.enableDOMEvents(false);
			 *      myStage.canvas = anotherCanvas;
			 *      myStage.enableDOMEvents(true);
			 *
			 * @property canvas
			 * @type HTMLCanvasElement | Object
			 **/
			this.canvas = (typeof canvas == "string") ? document.getElementById(canvas) : canvas;
		
			/**
			 * The current mouse X position on the canvas. If the mouse leaves the canvas, this will indicate the most recent
			 * position over the canvas, and mouseInBounds will be set to false.
			 * @property mouseX
			 * @type Number
			 * @readonly
			 **/
			this.mouseX = 0;
		
			/**
			 * The current mouse Y position on the canvas. If the mouse leaves the canvas, this will indicate the most recent
			 * position over the canvas, and mouseInBounds will be set to false.
			 * @property mouseY
			 * @type Number
			 * @readonly
			 **/
			this.mouseY = 0;
		
			/**
			 * Specifies the area of the stage to affect when calling update. This can be use to selectively
			 * re-draw specific regions of the canvas. If null, the whole canvas area is drawn.
			 * @property drawRect
			 * @type {Rectangle}
			 */
			this.drawRect = null;
		
			/**
			 * Indicates whether display objects should be rendered on whole pixels. You can set the
			 * {{#crossLink "DisplayObject/snapToPixel"}}{{/crossLink}} property of
			 * display objects to false to enable/disable this behaviour on a per instance basis.
			 * @property snapToPixelEnabled
			 * @type Boolean
			 * @default false
			 **/
			this.snapToPixelEnabled = false;
		
			/**
			 * Indicates whether the mouse is currently within the bounds of the canvas.
			 * @property mouseInBounds
			 * @type Boolean
			 * @default false
			 **/
			this.mouseInBounds = false;
		
			/**
			 * If true, tick callbacks will be called on all display objects on the stage prior to rendering to the canvas.
			 * @property tickOnUpdate
			 * @type Boolean
			 * @default true
			 **/
			this.tickOnUpdate = true;
		
			/**
			 * If true, mouse move events will continue to be called when the mouse leaves the target canvas. See
			 * {{#crossLink "Stage/mouseInBounds:property"}}{{/crossLink}}, and {{#crossLink "MouseEvent"}}{{/crossLink}}
			 * x/y/rawX/rawY.
			 * @property mouseMoveOutside
			 * @type Boolean
			 * @default false
			 **/
			this.mouseMoveOutside = false;
			
			
			/**
			 * Prevents selection of other elements in the html page if the user clicks and drags, or double clicks on the canvas.
			 * This works by calling `preventDefault()` on any mousedown events (or touch equivalent) originating on the canvas.
			 * @property preventSelection
			 * @type Boolean
			 * @default true
			 **/
			this.preventSelection = true;
		
			/**
			 * The hitArea property is not supported for Stage.
			 * @property hitArea
			 * @type {DisplayObject}
			 * @default null
			 */
			 
			 
		// private properties:
			/**
			 * Holds objects with data for each active pointer id. Each object has the following properties:
			 * x, y, event, target, overTarget, overX, overY, inBounds, posEvtObj (native event that last updated position)
			 * @property _pointerData
			 * @type {Object}
			 * @private
			 */
			this._pointerData = {};
		
			/**
			 * Number of active pointers.
			 * @property _pointerCount
			 * @type {Object}
			 * @private
			 */
			this._pointerCount = 0;
		
			/**
			 * The ID of the primary pointer.
			 * @property _primaryPointerID
			 * @type {Object}
			 * @private
			 */
			this._primaryPointerID = null;
		
			/**
			 * @property _mouseOverIntervalID
			 * @protected
			 * @type Number
			 **/
			this._mouseOverIntervalID = null;
			
			/**
			 * @property _nextStage
			 * @protected
			 * @type Stage
			 **/
			this._nextStage = null;
			
			/**
			 * @property _prevStage
			 * @protected
			 * @type Stage
			 **/
			this._prevStage = null;
			
			
		// initialize:
			this.enableDOMEvents(true);
		}
		var p = createjs.extend(Stage, createjs.Container);
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// events:
		/**
		 * Dispatched when the user moves the mouse over the canvas.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event stagemousemove
		 * @since 0.6.0
		 */
	
		/**
		 * Dispatched when the user presses their left mouse button on the canvas. See the {{#crossLink "MouseEvent"}}{{/crossLink}}
		 * class for a listing of event properties.
		 * @event stagemousedown
		 * @since 0.6.0
		 */
	
		/**
		 * Dispatched when the user the user presses somewhere on the stage, then releases the mouse button anywhere that the page can detect it (this varies slightly between browsers).
		 * You can use {{#crossLink "Stage/mouseInBounds:property"}}{{/crossLink}} to check whether the mouse is currently within the stage bounds.
		 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
		 * @event stagemouseup
		 * @since 0.6.0
		 */
	
		/**
		 * Dispatched when the mouse moves from within the canvas area (mouseInBounds == true) to outside it (mouseInBounds == false).
		 * This is currently only dispatched for mouse input (not touch). See the {{#crossLink "MouseEvent"}}{{/crossLink}}
		 * class for a listing of event properties.
		 * @event mouseleave
		 * @since 0.7.0
		 */
	
		/**
		 * Dispatched when the mouse moves into the canvas area (mouseInBounds == false) from outside it (mouseInBounds == true).
		 * This is currently only dispatched for mouse input (not touch). See the {{#crossLink "MouseEvent"}}{{/crossLink}}
		 * class for a listing of event properties.
		 * @event mouseenter
		 * @since 0.7.0
		 */
		 
		/**
		 * Dispatched each update immediately before the tick event is propagated through the display list.
		 * You can call preventDefault on the event object to cancel propagating the tick event.
		 * @event tickstart
		 * @since 0.7.0
		 */
		 
		/**
		 * Dispatched each update immediately after the tick event is propagated through the display list. Does not fire if
		 * tickOnUpdate is false. Precedes the "drawstart" event.
		 * @event tickend
		 * @since 0.7.0
		 */
		 
		/**
		 * Dispatched each update immediately before the canvas is cleared and the display list is drawn to it.
		 * You can call preventDefault on the event object to cancel the draw.
		 * @event drawstart
		 * @since 0.7.0
		 */
		 
		/**
		 * Dispatched each update immediately after the display list is drawn to the canvas and the canvas context is restored.
		 * @event drawend
		 * @since 0.7.0
		 */
	
		 
	// getter / setters:
		/**
		 * Specifies a target stage that will have mouse / touch interactions relayed to it after this stage handles them.
		 * This can be useful in cases where you have multiple layered canvases and want user interactions
		 * events to pass through. For example, this would relay mouse events from topStage to bottomStage:
		 *
		 *      topStage.nextStage = bottomStage;
		 *
		 * To disable relaying, set nextStage to null.
		 * 
		 * MouseOver, MouseOut, RollOver, and RollOut interactions are also passed through using the mouse over settings
		 * of the top-most stage, but are only processed if the target stage has mouse over interactions enabled.
		 * Considerations when using roll over in relay targets:<OL>
		 * <LI> The top-most (first) stage must have mouse over interactions enabled (via enableMouseOver)</LI>
		 * <LI> All stages that wish to participate in mouse over interaction must enable them via enableMouseOver</LI>
		 * <LI> All relay targets will share the frequency value of the top-most stage</LI>
		 * </OL>
		 * To illustrate, in this example the targetStage would process mouse over interactions at 10hz (despite passing
		 * 30 as it's desired frequency):
		 * 	topStage.nextStage = targetStage;
		 * 	topStage.enableMouseOver(10);
		 * 	targetStage.enableMouseOver(30);
		 * 
		 * If the target stage's canvas is completely covered by this stage's canvas, you may also want to disable its
		 * DOM events using:
		 * 
		 *	targetStage.enableDOMEvents(false);
		 * 
		 * @property nextStage
		 * @type {Stage}
		 **/
		p._get_nextStage = function() {
			return this._nextStage;
		};
		p._set_nextStage = function(value) {
			if (this._nextStage) { this._nextStage._prevStage = null; }
			if (value) { value._prevStage = this; }
			this._nextStage = value;
		};
		
		try {
			Object.defineProperties(p, {
				nextStage: { get: p._get_nextStage, set: p._set_nextStage }
			});
		} catch (e) {} // TODO: use Log
	
	
	// public methods:
		/**
		 * Each time the update method is called, the stage will call {{#crossLink "Stage/tick"}}{{/crossLink}}
		 * unless {{#crossLink "Stage/tickOnUpdate:property"}}{{/crossLink}} is set to false,
		 * and then render the display list to the canvas.
		 *
		 * @method update
		 * @param {Object} [props] Props object to pass to `tick()`. Should usually be a {{#crossLink "Ticker"}}{{/crossLink}} event object, or similar object with a delta property.
		 **/
		p.update = function(props) {
			if (!this.canvas) { return; }
			if (this.tickOnUpdate) { this.tick(props); }
			if (this.dispatchEvent("drawstart", false, true) === false) { return; }
			createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
			var r = this.drawRect, ctx = this.canvas.getContext("2d");
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			if (this.autoClear) {
				if (r) { ctx.clearRect(r.x, r.y, r.width, r.height); }
				else { ctx.clearRect(0, 0, this.canvas.width+1, this.canvas.height+1); }
			}
			ctx.save();
			if (this.drawRect) {
				ctx.beginPath();
				ctx.rect(r.x, r.y, r.width, r.height);
				ctx.clip();
			}
			this.updateContext(ctx);
			this.draw(ctx, false);
			ctx.restore();
			this.dispatchEvent("drawend");
		};
		
		/**
		 * Propagates a tick event through the display list. This is automatically called by {{#crossLink "Stage/update"}}{{/crossLink}}
		 * unless {{#crossLink "Stage/tickOnUpdate:property"}}{{/crossLink}} is set to false.
		 *
		 * If a props object is passed to `tick()`, then all of its properties will be copied to the event object that is
		 * propagated to listeners.
		 *
		 * Some time-based features in EaselJS (for example {{#crossLink "Sprite/framerate"}}{{/crossLink}} require that
		 * a {{#crossLink "Ticker/tick:event"}}{{/crossLink}} event object (or equivalent object with a delta property) be
		 * passed as the `props` parameter to `tick()`. For example:
		 *
		 * 	Ticker.on("tick", handleTick);
		 * 	function handleTick(evtObj) {
		 * 		// clone the event object from Ticker, and add some custom data to it:
		 * 		var evt = evtObj.clone().set({greeting:"hello", name:"world"});
		 * 		
		 * 		// pass it to stage.update():
		 * 		myStage.update(evt); // subsequently calls tick() with the same param
		 * 	}
		 * 	
		 * 	// ...
		 * 	myDisplayObject.on("tick", handleDisplayObjectTick);
		 * 	function handleDisplayObjectTick(evt) {
		 * 		console.log(evt.delta); // the delta property from the Ticker tick event object
		 * 		console.log(evt.greeting, evt.name); // custom data: "hello world"
		 * 	}
		 * 
		 * @method tick
		 * @param {Object} [props] An object with properties that should be copied to the event object. Should usually be a Ticker event object, or similar object with a delta property.
		 **/
		p.tick = function(props) {
			if (!this.tickEnabled || this.dispatchEvent("tickstart", false, true) === false) { return; }
			var evtObj = new createjs.Event("tick");
			if (props) {
				for (var n in props) {
					if (props.hasOwnProperty(n)) { evtObj[n] = props[n]; }
				}
			}
			this._tick(evtObj);
			this.dispatchEvent("tickend");
		};
	
		/**
		 * Default event handler that calls the Stage {{#crossLink "Stage/update"}}{{/crossLink}} method when a {{#crossLink "DisplayObject/tick:event"}}{{/crossLink}}
		 * event is received. This allows you to register a Stage instance as a event listener on {{#crossLink "Ticker"}}{{/crossLink}}
		 * directly, using:
		 *
		 *      Ticker.addEventListener("tick", myStage");
		 *
		 * Note that if you subscribe to ticks using this pattern, then the tick event object will be passed through to
		 * display object tick handlers, instead of <code>delta</code> and <code>paused</code> parameters.
		 * @property handleEvent
		 * @type Function
		 **/
		p.handleEvent = function(evt) {
			if (evt.type == "tick") { this.update(evt); }
		};
	
		/**
		 * Clears the target canvas. Useful if {{#crossLink "Stage/autoClear:property"}}{{/crossLink}} is set to `false`.
		 * @method clear
		 **/
		p.clear = function() {
			if (!this.canvas) { return; }
			var ctx = this.canvas.getContext("2d");
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, this.canvas.width+1, this.canvas.height+1);
		};
	
		/**
		 * Returns a data url that contains a Base64-encoded image of the contents of the stage. The returned data url can
		 * be specified as the src value of an image element.
		 * @method toDataURL
		 * @param {String} [backgroundColor] The background color to be used for the generated image. Any valid CSS color
		 * value is allowed. The default value is a transparent background.
		 * @param {String} [mimeType="image/png"] The MIME type of the image format to be create. The default is "image/png". If an unknown MIME type
		 * is passed in, or if the browser does not support the specified MIME type, the default value will be used.
		 * @return {String} a Base64 encoded image.
		 **/
		p.toDataURL = function(backgroundColor, mimeType) {
			var data, ctx = this.canvas.getContext('2d'), w = this.canvas.width, h = this.canvas.height;
	
			if (backgroundColor) {
				data = ctx.getImageData(0, 0, w, h);
				var compositeOperation = ctx.globalCompositeOperation;
				ctx.globalCompositeOperation = "destination-over";
				
				ctx.fillStyle = backgroundColor;
				ctx.fillRect(0, 0, w, h);
			}
	
			var dataURL = this.canvas.toDataURL(mimeType||"image/png");
	
			if(backgroundColor) {
				ctx.putImageData(data, 0, 0);
				ctx.globalCompositeOperation = compositeOperation;
			}
	
			return dataURL;
		};
	
		/**
		 * Enables or disables (by passing a frequency of 0) mouse over ({{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}
		 * and {{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}) and roll over events ({{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}
		 * and {{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}) for this stage's display list. These events can
		 * be expensive to generate, so they are disabled by default. The frequency of the events can be controlled
		 * independently of mouse move events via the optional `frequency` parameter.
		 *
		 * <h4>Example</h4>
		 *
		 *      var stage = new createjs.Stage("canvasId");
		 *      stage.enableMouseOver(10); // 10 updates per second
		 *
		 * @method enableMouseOver
		 * @param {Number} [frequency=20] Optional param specifying the maximum number of times per second to broadcast
		 * mouse over/out events. Set to 0 to disable mouse over events completely. Maximum is 50. A lower frequency is less
		 * responsive, but uses less CPU.
		 **/
		p.enableMouseOver = function(frequency) {
			if (this._mouseOverIntervalID) {
				clearInterval(this._mouseOverIntervalID);
				this._mouseOverIntervalID = null;
				if (frequency == 0) {
					this._testMouseOver(true);
				}
			}
			if (frequency == null) { frequency = 20; }
			else if (frequency <= 0) { return; }
			var o = this;
			this._mouseOverIntervalID = setInterval(function(){ o._testMouseOver(); }, 1000/Math.min(50,frequency));
		};
	
		/**
		 * Enables or disables the event listeners that stage adds to DOM elements (window, document and canvas). It is good
		 * practice to disable events when disposing of a Stage instance, otherwise the stage will continue to receive
		 * events from the page.
		 *
		 * When changing the canvas property you must disable the events on the old canvas, and enable events on the
		 * new canvas or mouse events will not work as expected. For example:
		 *
		 *      myStage.enableDOMEvents(false);
		 *      myStage.canvas = anotherCanvas;
		 *      myStage.enableDOMEvents(true);
		 *
		 * @method enableDOMEvents
		 * @param {Boolean} [enable=true] Indicates whether to enable or disable the events. Default is true.
		 **/
		p.enableDOMEvents = function(enable) {
			if (enable == null) { enable = true; }
			var n, o, ls = this._eventListeners;
			if (!enable && ls) {
				for (n in ls) {
					o = ls[n];
					o.t.removeEventListener(n, o.f, false);
				}
				this._eventListeners = null;
			} else if (enable && !ls && this.canvas) {
				var t = window.addEventListener ? window : document;
				var _this = this;
				ls = this._eventListeners = {};
				ls["mouseup"] = {t:t, f:function(e) { _this._handleMouseUp(e)} };
				ls["mousemove"] = {t:t, f:function(e) { _this._handleMouseMove(e)} };
				ls["dblclick"] = {t:this.canvas, f:function(e) { _this._handleDoubleClick(e)} };
				ls["mousedown"] = {t:this.canvas, f:function(e) { _this._handleMouseDown(e)} };
	
				for (n in ls) {
					o = ls[n];
					o.t.addEventListener(n, o.f, false);
				}
			}
		};
	
		/**
		 * Stage instances cannot be cloned.
		 * @method clone
		 **/
		p.clone = function() {
			throw("Stage cannot be cloned.");
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Stage (name="+  this.name +")]";
		};
	
	
	// private methods:
		/**
		 * @method _getElementRect
		 * @protected
		 * @param {HTMLElement} e
		 **/
		p._getElementRect = function(e) {
			var bounds;
			try { bounds = e.getBoundingClientRect(); } // this can fail on disconnected DOM elements in IE9
			catch (err) { bounds = {top: e.offsetTop, left: e.offsetLeft, width:e.offsetWidth, height:e.offsetHeight}; }
	
			var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
			var offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop  || document.body.clientTop  || 0);
	
			var styles = window.getComputedStyle ? getComputedStyle(e,null) : e.currentStyle; // IE <9 compatibility.
			var padL = parseInt(styles.paddingLeft)+parseInt(styles.borderLeftWidth);
			var padT = parseInt(styles.paddingTop)+parseInt(styles.borderTopWidth);
			var padR = parseInt(styles.paddingRight)+parseInt(styles.borderRightWidth);
			var padB = parseInt(styles.paddingBottom)+parseInt(styles.borderBottomWidth);
	
			// note: in some browsers bounds properties are read only.
			return {
				left: bounds.left+offX+padL,
				right: bounds.right+offX-padR,
				top: bounds.top+offY+padT,
				bottom: bounds.bottom+offY-padB
			}
		};
	
		/**
		 * @method _getPointerData
		 * @protected
		 * @param {Number} id
		 **/
		p._getPointerData = function(id) {
			var data = this._pointerData[id];
			if (!data) { data = this._pointerData[id] = {x:0,y:0}; }
			return data;
		};
	
		/**
		 * @method _handleMouseMove
		 * @protected
		 * @param {MouseEvent} e
		 **/
		p._handleMouseMove = function(e) {
			if(!e){ e = window.event; }
			this._handlePointerMove(-1, e, e.pageX, e.pageY);
		};
	
		/**
		 * @method _handlePointerMove
		 * @protected
		 * @param {Number} id
		 * @param {Event} e
		 * @param {Number} pageX
		 * @param {Number} pageY
		 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
		 **/
		p._handlePointerMove = function(id, e, pageX, pageY, owner) {
			if (this._prevStage && owner === undefined) { return; } // redundant listener.
			if (!this.canvas) { return; }
			var nextStage=this._nextStage, o=this._getPointerData(id);
	
			var inBounds = o.inBounds;
			this._updatePointerPosition(id, e, pageX, pageY);
			if (inBounds || o.inBounds || this.mouseMoveOutside) {
				if (id === -1 && o.inBounds == !inBounds) {
					this._dispatchMouseEvent(this, (inBounds ? "mouseleave" : "mouseenter"), false, id, o, e);
				}
				
				this._dispatchMouseEvent(this, "stagemousemove", false, id, o, e);
				this._dispatchMouseEvent(o.target, "pressmove", true, id, o, e);
			}
			
			nextStage&&nextStage._handlePointerMove(id, e, pageX, pageY, null);
		};
	
		/**
		 * @method _updatePointerPosition
		 * @protected
		 * @param {Number} id
		 * @param {Event} e
		 * @param {Number} pageX
		 * @param {Number} pageY
		 **/
		p._updatePointerPosition = function(id, e, pageX, pageY) {
			var rect = this._getElementRect(this.canvas);
			pageX -= rect.left;
			pageY -= rect.top;
	
			var w = this.canvas.width;
			var h = this.canvas.height;
			pageX /= (rect.right-rect.left)/w;
			pageY /= (rect.bottom-rect.top)/h;
			var o = this._getPointerData(id);
			if (o.inBounds = (pageX >= 0 && pageY >= 0 && pageX <= w-1 && pageY <= h-1)) {
				o.x = pageX;
				o.y = pageY;
			} else if (this.mouseMoveOutside) {
				o.x = pageX < 0 ? 0 : (pageX > w-1 ? w-1 : pageX);
				o.y = pageY < 0 ? 0 : (pageY > h-1 ? h-1 : pageY);
			}
	
			o.posEvtObj = e;
			o.rawX = pageX;
			o.rawY = pageY;
	
			if (id === this._primaryPointerID || id === -1) {
				this.mouseX = o.x;
				this.mouseY = o.y;
				this.mouseInBounds = o.inBounds;
			}
		};
	
		/**
		 * @method _handleMouseUp
		 * @protected
		 * @param {MouseEvent} e
		 **/
		p._handleMouseUp = function(e) {
			this._handlePointerUp(-1, e, false);
		};
	
		/**
		 * @method _handlePointerUp
		 * @protected
		 * @param {Number} id
		 * @param {Event} e
		 * @param {Boolean} clear
		 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
		 **/
		p._handlePointerUp = function(id, e, clear, owner) {
			var nextStage = this._nextStage, o = this._getPointerData(id);
			if (this._prevStage && owner === undefined) { return; } // redundant listener.
			
			var target=null, oTarget = o.target;
			if (!owner && (oTarget || nextStage)) { target = this._getObjectsUnderPoint(o.x, o.y, null, true); }
			
			if (o.down) { this._dispatchMouseEvent(this, "stagemouseup", false, id, o, e, target); o.down = false; }
			
			if (target == oTarget) { this._dispatchMouseEvent(oTarget, "click", true, id, o, e); }
			this._dispatchMouseEvent(oTarget, "pressup", true, id, o, e);
			
			if (clear) {
				if (id==this._primaryPointerID) { this._primaryPointerID = null; }
				delete(this._pointerData[id]);
			} else { o.target = null; }
			
			nextStage&&nextStage._handlePointerUp(id, e, clear, owner || target && this);
		};
	
		/**
		 * @method _handleMouseDown
		 * @protected
		 * @param {MouseEvent} e
		 **/
		p._handleMouseDown = function(e) {
			this._handlePointerDown(-1, e, e.pageX, e.pageY);
		};
	
		/**
		 * @method _handlePointerDown
		 * @protected
		 * @param {Number} id
		 * @param {Event} e
		 * @param {Number} pageX
		 * @param {Number} pageY
		 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
		 **/
		p._handlePointerDown = function(id, e, pageX, pageY, owner) {
			if (this.preventSelection) { e.preventDefault(); }
			if (this._primaryPointerID == null || id === -1) { this._primaryPointerID = id; } // mouse always takes over.
			
			if (pageY != null) { this._updatePointerPosition(id, e, pageX, pageY); }
			var target = null, nextStage = this._nextStage, o = this._getPointerData(id);
			if (!owner) { target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true); }
	
			if (o.inBounds) { this._dispatchMouseEvent(this, "stagemousedown", false, id, o, e, target); o.down = true; }
			this._dispatchMouseEvent(target, "mousedown", true, id, o, e);
			
			nextStage&&nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this);
		};
	
		/**
		 * @method _testMouseOver
		 * @param {Boolean} clear If true, clears the mouseover / rollover (ie. no target)
		 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
		 * @param {Stage} eventTarget The stage that the cursor is actively over.
		 * @protected
		 **/
		p._testMouseOver = function(clear, owner, eventTarget) {
			if (this._prevStage && owner === undefined) { return; } // redundant listener.
			
			var nextStage = this._nextStage;
			if (!this._mouseOverIntervalID) {
				// not enabled for mouseover, but should still relay the event.
				nextStage&&nextStage._testMouseOver(clear, owner, eventTarget);
				return;
			}
			var o = this._getPointerData(-1);
			// only update if the mouse position has changed. This provides a lot of optimization, but has some trade-offs.
			if (!o || (!clear && this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds)) { return; }
			
			var e = o.posEvtObj;
			var isEventTarget = eventTarget || e&&(e.target == this.canvas);
			var target=null, common = -1, cursor="", t, i, l;
			
			if (!owner && (clear || this.mouseInBounds && isEventTarget)) {
				target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
				this._mouseOverX = this.mouseX;
				this._mouseOverY = this.mouseY;
			}
	
			var oldList = this._mouseOverTarget||[];
			var oldTarget = oldList[oldList.length-1];
			var list = this._mouseOverTarget = [];
	
			// generate ancestor list and check for cursor:
			t = target;
			while (t) {
				list.unshift(t);
				if (!cursor) { cursor = t.cursor; }
				t = t.parent;
			}
			this.canvas.style.cursor = cursor;
			if (!owner && eventTarget) { eventTarget.canvas.style.cursor = cursor; }
	
			// find common ancestor:
			for (i=0,l=list.length; i<l; i++) {
				if (list[i] != oldList[i]) { break; }
				common = i;
			}
	
			if (oldTarget != target) {
				this._dispatchMouseEvent(oldTarget, "mouseout", true, -1, o, e, target);
			}
	
			for (i=oldList.length-1; i>common; i--) {
				this._dispatchMouseEvent(oldList[i], "rollout", false, -1, o, e, target);
			}
	
			for (i=list.length-1; i>common; i--) {
				this._dispatchMouseEvent(list[i], "rollover", false, -1, o, e, oldTarget);
			}
	
			if (oldTarget != target) {
				this._dispatchMouseEvent(target, "mouseover", true, -1, o, e, oldTarget);
			}
			
			nextStage&&nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this);
		};
	
		/**
		 * @method _handleDoubleClick
		 * @protected
		 * @param {MouseEvent} e
		 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
		 **/
		p._handleDoubleClick = function(e, owner) {
			var target=null, nextStage=this._nextStage, o=this._getPointerData(-1);
			if (!owner) {
				target = this._getObjectsUnderPoint(o.x, o.y, null, true);
				this._dispatchMouseEvent(target, "dblclick", true, -1, o, e);
			}
			nextStage&&nextStage._handleDoubleClick(e, owner || target && this);
		};
	
		/**
		 * @method _dispatchMouseEvent
		 * @protected
		 * @param {DisplayObject} target
		 * @param {String} type
		 * @param {Boolean} bubbles
		 * @param {Number} pointerId
		 * @param {Object} o
		 * @param {MouseEvent} [nativeEvent]
		 * @param {DisplayObject} [relatedTarget]
		 **/
		p._dispatchMouseEvent = function(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
			// TODO: might be worth either reusing MouseEvent instances, or adding a willTrigger method to avoid GC.
			if (!target || (!bubbles && !target.hasEventListener(type))) { return; }
			/*
			// TODO: account for stage transformations?
			this._mtx = this.getConcatenatedMatrix(this._mtx).invert();
			var pt = this._mtx.transformPoint(o.x, o.y);
			var evt = new createjs.MouseEvent(type, bubbles, false, pt.x, pt.y, nativeEvent, pointerId, pointerId==this._primaryPointerID || pointerId==-1, o.rawX, o.rawY);
			*/
			var evt = new createjs.MouseEvent(type, bubbles, false, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || pointerId === -1, o.rawX, o.rawY, relatedTarget);
			target.dispatchEvent(evt);
		};
	
	
		createjs.Stage = createjs.promote(Stage, "Container");
	}());
	
	//##############################################################################
	// Bitmap.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		
		/**
		 * A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing
		 * HTML element, or a string.
		 *
		 * <h4>Example</h4>
		 *
		 *      var bitmap = new createjs.Bitmap("imagePath.jpg");
		 *
		 * <strong>Notes:</strong>
		 * <ol>
		 *     <li>When a string path or image tag that is not yet loaded is used, the stage may need to be redrawn before it
		 *      will be displayed.</li>
		 *     <li>Bitmaps with an SVG source currently will not respect an alpha value other than 0 or 1. To get around this,
		 *     the Bitmap can be cached.</li>
		 *     <li>Bitmaps with an SVG source will taint the canvas with cross-origin data, which prevents interactivity. This
		 *     happens in all browsers except recent Firefox builds.</li>
		 *     <li>Images loaded cross-origin will throw cross-origin security errors when interacted with using a mouse, using
		 *     methods such as `getObjectUnderPoint`, or using filters, or caching. You can get around this by setting
		 *     `crossOrigin` flags on your images before passing them to EaselJS, eg: `img.crossOrigin="Anonymous";`</li>
		 * </ol>
		 *
		 * @class Bitmap
		 * @extends DisplayObject
		 * @constructor
		 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} imageOrUri The source object or URI to an image to
		 * display. This can be either an Image, Canvas, or Video object, or a string URI to an image file to load and use.
		 * If it is a URI, a new Image object will be constructed and assigned to the .image property.
		 **/
		function Bitmap(imageOrUri) {
			this.DisplayObject_constructor();
			
			
		// public properties:
			/**
			 * The image to render. This can be an Image, a Canvas, or a Video. Not all browsers (especially
			 * mobile browsers) support drawing video to a canvas.
			 * @property image
			 * @type HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
			 **/
			if (typeof imageOrUri == "string") {
				this.image = document.createElement("img");
				this.image.src = imageOrUri;
			} else {
				this.image = imageOrUri;
			}
		
			/**
			 * Specifies an area of the source image to draw. If omitted, the whole image will be drawn.
			 * Note that video sources must have a width / height set to work correctly with `sourceRect`.
			 * @property sourceRect
			 * @type Rectangle
			 * @default null
			 */
			this.sourceRect = null;
		}
		var p = createjs.extend(Bitmap, createjs.DisplayObject);
		
		
	// public methods:
		/**
		 * Constructor alias for backwards compatibility. This method will be removed in future versions.
		 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
		 * @method initialize
		 * @deprecated in favour of `createjs.promote()`
		 **/
		p.initialize = Bitmap; // TODO: deprecated.
	
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			var image = this.image;
			var hasContent = this.cacheCanvas || (image && (image.naturalWidth || image.getContext || image.readyState >= 2));
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 *
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache.
		 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
		 * into itself).
		 * @return {Boolean}
		 **/
		p.draw = function(ctx, ignoreCache) {
			if (this.DisplayObject_draw(ctx, ignoreCache) || !this.image) { return true; }
			var img = this.image, rect = this.sourceRect;
			if (rect) {
				// some browsers choke on out of bound values, so we'll fix them:
				var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height, x = 0, y = 0, w = img.width, h = img.height;
				if (x1 < 0) { x -= x1; x1 = 0; }
				if (x2 > w) { x2 = w; }
				if (y1 < 0) { y -= y1; y1 = 0; }
				if (y2 > h) { y2 = h; }
				ctx.drawImage(img, x1, y1, x2-x1, y2-y1, x, y, x2-x1, y2-y1);
			} else {
				ctx.drawImage(img, 0, 0);
			}
			return true;
		};
		
		//Note, the doc sections below document using the specified APIs (from DisplayObject)  from
		//Bitmap. This is why they have no method implementations.
		
		/**
		 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
		 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
		 *
		 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
		 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
		 * method.
		 * @method cache
		 **/
		
		/**
		 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
		 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
		 *
		 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
		 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
		 * method.
		 * @method updateCache
		 **/
		
		/**
		 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
		 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
		 *
		 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
		 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
		 * method.
		 * @method uncache
		 **/
	
		/**
		 * Docced in superclass.
		 */
		p.getBounds = function() {
			var rect = this.DisplayObject_getBounds();
			if (rect) { return rect; }
			var image = this.image, o = this.sourceRect || image;
			var hasContent = (image && (image.naturalWidth || image.getContext || image.readyState >= 2));
			return hasContent ? this._rectangle.setValues(0, 0, o.width, o.height) : null;
		};
		
		/**
		 * Returns a clone of the Bitmap instance.
		 * @method clone
		 * @return {Bitmap} a clone of the Bitmap instance.
		 **/
		p.clone = function() {
			var o = new Bitmap(this.image);
			if (this.sourceRect) { o.sourceRect = this.sourceRect.clone(); }
			this._cloneProps(o);
			return o;
		};
		
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Bitmap (name="+  this.name +")]";
		};
	
		
		createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject");
	}());
	
	//##############################################################################
	// Sprite.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Displays a frame or sequence of frames (ie. an animation) from a SpriteSheet instance. A sprite sheet is a series of
		 * images (usually animation frames) combined into a single image. For example, an animation consisting of 8 100x100
		 * images could be combined into a 400x200 sprite sheet (4 frames across by 2 high). You can display individual frames,
		 * play frames as an animation, and even sequence animations together.
		 *
		 * See the {{#crossLink "SpriteSheet"}}{{/crossLink}} class for more information on setting up frames and animations.
		 *
		 * <h4>Example</h4>
		 *
		 *      var instance = new createjs.Sprite(spriteSheet);
		 *      instance.gotoAndStop("frameName");
		 *
		 * Until {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} or {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}} is called,
		 * only the first defined frame defined in the sprite sheet will be displayed.
		 *
		 * @class Sprite
		 * @extends DisplayObject
		 * @constructor
		 * @param {SpriteSheet} spriteSheet The SpriteSheet instance to play back. This includes the source image(s), frame
		 * dimensions, and frame data. See {{#crossLink "SpriteSheet"}}{{/crossLink}} for more information.
		 * @param {String|Number} [frameOrAnimation] The frame number or animation to play initially.
		 **/
		function Sprite(spriteSheet, frameOrAnimation) {
			this.DisplayObject_constructor();
			
			
		// public properties:
			/**
			 * The frame index that will be drawn when draw is called. Note that with some {{#crossLink "SpriteSheet"}}{{/crossLink}}
			 * definitions, this will advance non-sequentially. This will always be an integer value.
			 * @property currentFrame
			 * @type {Number}
			 * @default 0
			 * @readonly
			 **/
			this.currentFrame = 0;
		
			/**
			 * Returns the name of the currently playing animation.
			 * @property currentAnimation
			 * @type {String}
			 * @final
			 * @readonly
			 **/
			this.currentAnimation = null;
		
			/**
			 * Prevents the animation from advancing each tick automatically. For example, you could create a sprite
			 * sheet of icons, set paused to true, and display the appropriate icon by setting <code>currentFrame</code>.
			 * @property paused
			 * @type {Boolean}
			 * @default false
			 **/
			this.paused = true;
		
			/**
			 * The SpriteSheet instance to play back. This includes the source image, frame dimensions, and frame
			 * data. See {{#crossLink "SpriteSheet"}}{{/crossLink}} for more information.
			 * @property spriteSheet
			 * @type {SpriteSheet}
			 * @readonly
			 **/
			this.spriteSheet = spriteSheet;
		
			/**
			 * Specifies the current frame index within the currently playing animation. When playing normally, this will increase
			 * from 0 to n-1, where n is the number of frames in the current animation.
			 *
			 * This could be a non-integer value if
			 * using time-based playback (see {{#crossLink "Sprite/framerate"}}{{/crossLink}}, or if the animation's speed is
			 * not an integer.
			 * @property currentAnimationFrame
			 * @type {Number}
			 * @default 0
			 **/
			this.currentAnimationFrame = 0;
		
			/**
			 * By default Sprite instances advance one frame per tick. Specifying a framerate for the Sprite (or its related
			 * SpriteSheet) will cause it to advance based on elapsed time between ticks as appropriate to maintain the target
			 * framerate.
			 *
			 * For example, if a Sprite with a framerate of 10 is placed on a Stage being updated at 40fps, then the Sprite will
			 * advance roughly one frame every 4 ticks. This will not be exact, because the time between each tick will
			 * vary slightly between frames.
			 *
			 * This feature is dependent on the tick event object (or an object with an appropriate "delta" property) being
			 * passed into {{#crossLink "Stage/update"}}{{/crossLink}}.
			 * @property framerate
			 * @type {Number}
			 * @default 0
			 **/
			this.framerate = 0;
		
		
		// private properties:
			/**
			 * Current animation object.
			 * @property _animation
			 * @protected
			 * @type {Object}
			 * @default null
			 **/
			this._animation = null;
		
			/**
			 * Current frame index.
			 * @property _currentFrame
			 * @protected
			 * @type {Number}
			 * @default null
			 **/
			this._currentFrame = null;
			
			/**
			 * Skips the next auto advance. Used by gotoAndPlay to avoid immediately jumping to the next frame
			 * @property _skipAdvance
			 * @protected
			 * @type {Boolean}
			 * @default false
			 **/
			this._skipAdvance = false;
			
			
			if (frameOrAnimation != null) { this.gotoAndPlay(frameOrAnimation); }
		}
		var p = createjs.extend(Sprite, createjs.DisplayObject);
	
		/**
		 * Constructor alias for backwards compatibility. This method will be removed in future versions.
		 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
		 * @method initialize
		 * @deprecated in favour of `createjs.promote()`
		 **/
		p.initialize = Sprite; // TODO: Deprecated. This is for backwards support of FlashCC spritesheet export.
	
	
	// events:
		/**
		 * Dispatched when an animation reaches its ends.
		 * @event animationend
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {String} name The name of the animation that just ended.
		 * @param {String} next The name of the next animation that will be played, or null. This will be the same as name if the animation is looping.
		 * @since 0.6.0
		 */
		 
		/**
		 * Dispatched any time the current frame changes. For example, this could be due to automatic advancement on a tick,
		 * or calling gotoAndPlay() or gotoAndStop().
		 * @event change
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 */
	
	
	// public methods:
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			var hasContent = this.cacheCanvas || this.spriteSheet.complete;
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
		 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
		 * into itself).
		 **/
		p.draw = function(ctx, ignoreCache) {
			if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
			this._normalizeFrame();
			var o = this.spriteSheet.getFrame(this._currentFrame|0);
			if (!o) { return false; }
			var rect = o.rect;
			if (rect.width && rect.height) { ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height); }
			return true;
		};
	
		//Note, the doc sections below document using the specified APIs (from DisplayObject)  from
		//Bitmap. This is why they have no method implementations.
	
		/**
		 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
		 * You should not cache Sprite instances as it can degrade performance.
		 * @method cache
		 **/
	
		/**
		 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
		 * You should not cache Sprite instances as it can degrade performance.
		 * @method updateCache
		 **/
	
		/**
		 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
		 * You should not cache Sprite instances as it can degrade performance.
		 * @method uncache
		 **/
	
		/**
		 * Play (unpause) the current animation. The Sprite will be paused if either {{#crossLink "Sprite/stop"}}{{/crossLink}}
		 * or {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} is called. Single frame animations will remain
		 * unchanged.
		 * @method play
		 **/
		p.play = function() {
			this.paused = false;
		};
	
		/**
		 * Stop playing a running animation. The Sprite will be playing if {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}}
		 * is called. Note that calling {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}} or {{#crossLink "Sprite/play"}}{{/crossLink}}
		 * will resume playback.
		 * @method stop
		 **/
		p.stop = function() {
			this.paused = true;
		};
	
		/**
		 * Sets paused to false and plays the specified animation name, named frame, or frame number.
		 * @method gotoAndPlay
		 * @param {String|Number} frameOrAnimation The frame number or animation name that the playhead should move to
		 * and begin playing.
		 **/
		p.gotoAndPlay = function(frameOrAnimation) {
			this.paused = false;
			this._skipAdvance = true;
			this._goto(frameOrAnimation);
		};
	
		/**
		 * Sets paused to true and seeks to the specified animation name, named frame, or frame number.
		 * @method gotoAndStop
		 * @param {String|Number} frameOrAnimation The frame number or animation name that the playhead should move to
		 * and stop.
		 **/
		p.gotoAndStop = function(frameOrAnimation) {
			this.paused = true;
			this._goto(frameOrAnimation);
		};
	
		/**
		 * Advances the playhead. This occurs automatically each tick by default.
		 * @param [time] {Number} The amount of time in ms to advance by. Only applicable if framerate is set on the Sprite
		 * or its SpriteSheet.
		 * @method advance
		*/
		p.advance = function(time) {
			var fps = this.framerate || this.spriteSheet.framerate;
			var t = (fps && time != null) ? time/(1000/fps) : 1;
			this._normalizeFrame(t);
		};
		
		/**
		 * Returns a {{#crossLink "Rectangle"}}{{/crossLink}} instance defining the bounds of the current frame relative to
		 * the origin. For example, a 90 x 70 frame with <code>regX=50</code> and <code>regY=40</code> would return a
		 * rectangle with [x=-50, y=-40, width=90, height=70]. This ignores transformations on the display object.
		 *
		 * Also see the SpriteSheet {{#crossLink "SpriteSheet/getFrameBounds"}}{{/crossLink}} method.
		 * @method getBounds
		 * @return {Rectangle} A Rectangle instance. Returns null if the frame does not exist, or the image is not fully
		 * loaded.
		 **/
		p.getBounds = function() {
			// TODO: should this normalizeFrame?
			return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
		};
	
		/**
		 * Returns a clone of the Sprite instance. Note that the same SpriteSheet is shared between cloned
		 * instances.
		 * @method clone
		 * @return {Sprite} a clone of the Sprite instance.
		 **/
		p.clone = function() {
			return this._cloneProps(new Sprite(this.spriteSheet));
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Sprite (name="+  this.name +")]";
		};
	
	// private methods:
		/**
		 * @method _cloneProps
		 * @param {Sprite} o
		 * @return {Sprite} o
		 * @protected
		 **/
		p._cloneProps = function(o) {
			this.DisplayObject__cloneProps(o);
			o.currentFrame = this.currentFrame;
			o.currentAnimation = this.currentAnimation;
			o.paused = this.paused;
			o.currentAnimationFrame = this.currentAnimationFrame;
			o.framerate = this.framerate;
			
			o._animation = this._animation;
			o._currentFrame = this._currentFrame;
			o._skipAdvance = this._skipAdvance;
			return o;
		};
		
		/**
		 * Advances the <code>currentFrame</code> if paused is not true. This is called automatically when the {{#crossLink "Stage"}}{{/crossLink}}
		 * ticks.
		 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
		 * @protected
		 * @method _tick
		 **/
		p._tick = function(evtObj) {
			if (!this.paused) {
				if (!this._skipAdvance) { this.advance(evtObj&&evtObj.delta); }
				this._skipAdvance = false;
			}
			this.DisplayObject__tick(evtObj);
		};
	
	
		/**
		 * Normalizes the current frame, advancing animations and dispatching callbacks as appropriate.
		 * @protected
		 * @method _normalizeFrame
		 **/
		p._normalizeFrame = function(frameDelta) {
			frameDelta = frameDelta || 0;
			var animation = this._animation;
			var paused = this.paused;
			var frame = this._currentFrame;
			var l;
			
			if (animation) {
				var speed = animation.speed || 1;
				var animFrame = this.currentAnimationFrame;
				l = animation.frames.length;
				if (animFrame + frameDelta * speed >= l) {
					var next = animation.next;
					if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) {
						// something changed in the event stack, so we shouldn't make any more changes here.
						return;
					} else if (next) {
						// sequence. Automatically calls _normalizeFrame again with the remaining frames.
						return this._goto(next, frameDelta - (l - animFrame) / speed);
					} else {
						// end.
						this.paused = true;
						animFrame = animation.frames.length - 1;
					}
				} else {
					animFrame += frameDelta * speed;
				}
				this.currentAnimationFrame = animFrame;
				this._currentFrame = animation.frames[animFrame | 0]
			} else {
				frame = (this._currentFrame += frameDelta);
				l = this.spriteSheet.getNumFrames();
				if (frame >= l && l > 0) {
					if (!this._dispatchAnimationEnd(animation, frame, paused, l - 1)) {
						// looped.
						if ((this._currentFrame -= l) >= l) { return this._normalizeFrame(); }
					}
				}
			}
			frame = this._currentFrame | 0;
			if (this.currentFrame != frame) {
				this.currentFrame = frame;
				this.dispatchEvent("change");
			}
		};
	
		/**
		 * Dispatches the "animationend" event. Returns true if a handler changed the animation (ex. calling {{#crossLink "Sprite/stop"}}{{/crossLink}},
		 * {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}}, etc.)
		 * @property _dispatchAnimationEnd
		 * @private
		 * @type {Function}
		 **/
		p._dispatchAnimationEnd = function(animation, frame, paused, next, end) {
			var name = animation ? animation.name : null;
			if (this.hasEventListener("animationend")) {
				var evt = new createjs.Event("animationend");
				evt.name = name;
				evt.next = next;
				this.dispatchEvent(evt);
			}
			// did the animation get changed in the event stack?:
			var changed = (this._animation != animation || this._currentFrame != frame);
			// if the animation hasn't changed, but the sprite was paused, then we want to stick to the last frame:
			if (!changed && !paused && this.paused) { this.currentAnimationFrame = end; changed = true; }
			return changed;
		};
	
		/**
		 * Moves the playhead to the specified frame number or animation.
		 * @method _goto
		 * @param {String|Number} frameOrAnimation The frame number or animation that the playhead should move to.
		 * @param {Boolean} [frame] The frame of the animation to go to. Defaults to 0.
		 * @protected
		 **/
		p._goto = function(frameOrAnimation, frame) {
			this.currentAnimationFrame = 0;
			if (isNaN(frameOrAnimation)) {
				var data = this.spriteSheet.getAnimation(frameOrAnimation);
				if (data) {
					this._animation = data;
					this.currentAnimation = frameOrAnimation;
					this._normalizeFrame(frame);
				}
			} else {
				this.currentAnimation = this._animation = null;
				this._currentFrame = frameOrAnimation;
				this._normalizeFrame();
			}
		};
	
	
		createjs.Sprite = createjs.promote(Sprite, "DisplayObject");
	}());
	
	//##############################################################################
	// Shape.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * A Shape allows you to display vector art in the display list. It composites a {{#crossLink "Graphics"}}{{/crossLink}}
		 * instance which exposes all of the vector drawing methods. The Graphics instance can be shared between multiple Shape
		 * instances to display the same vector graphics with different positions or transforms.
		 *
		 * If the vector art will not
		 * change between draws, you may want to use the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method to reduce the
		 * rendering cost.
		 *
		 * <h4>Example</h4>
		 *
		 *      var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 100, 100);
		 *      var shape = new createjs.Shape(graphics);
		 *
		 *      //Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
		 *      var shape = new createjs.Shape();
		 *      shape.graphics.beginFill("#ff0000").drawRect(0, 0, 100, 100);
		 *
		 * @class Shape
		 * @extends DisplayObject
		 * @constructor
		 * @param {Graphics} graphics Optional. The graphics instance to display. If null, a new Graphics instance will be created.
		 **/
		function Shape(graphics) {
			this.DisplayObject_constructor();
			
			
		// public properties:
			/**
			 * The graphics instance to display.
			 * @property graphics
			 * @type Graphics
			 **/
			this.graphics = graphics ? graphics : new createjs.Graphics();
		}
		var p = createjs.extend(Shape, createjs.DisplayObject);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
	// public methods:
		/**
		 * Returns true or false indicating whether the Shape would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the Shape would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			var hasContent = this.cacheCanvas || (this.graphics && !this.graphics.isEmpty());
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
		};
	
		/**
		 * Draws the Shape into the specified context ignoring its visible, alpha, shadow, and transform. Returns true if
		 * the draw was handled (useful for overriding functionality).
		 *
		 * <i>NOTE: This method is mainly for internal use, though it may be useful for advanced uses.</i>
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache. For example,
		 * used for drawing the cache (to prevent it from simply drawing an existing cache back into itself).
		 * @return {Boolean}
		 **/
		p.draw = function(ctx, ignoreCache) {
			if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
			this.graphics.draw(ctx, this);
			return true;
		};
	
		/**
		 * Returns a clone of this Shape. Some properties that are specific to this instance's current context are reverted to
		 * their defaults (for example .parent).
		 * @method clone
		 * @param {Boolean} recursive If true, this Shape's {{#crossLink "Graphics"}}{{/crossLink}} instance will also be
		 * cloned. If false, the Graphics instance will be shared with the new Shape.
		 **/
		p.clone = function(recursive) {
			var g = (recursive && this.graphics) ? this.graphics.clone() : this.graphics;
			return  this._cloneProps(new Shape(g));
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Shape (name="+  this.name +")]";
		};
	
	
		createjs.Shape = createjs.promote(Shape, "DisplayObject");
	}());
	
	//##############################################################################
	// Text.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Display one or more lines of dynamic text (not user editable) in the display list. Line wrapping support (using the
		 * lineWidth) is very basic, wrapping on spaces and tabs only. Note that as an alternative to Text, you can position HTML
		 * text above or below the canvas relative to items in the display list using the {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}}
		 * method, or using {{#crossLink "DOMElement"}}{{/crossLink}}.
		 *
		 * <b>Please note that Text does not support HTML text, and can only display one font style at a time.</b> To use
		 * multiple font styles, you will need to create multiple text instances, and position them manually.
		 *
		 * <h4>Example</h4>
		 *
		 *      var text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
		 *      text.x = 100;
		 *      text.textBaseline = "alphabetic";
		 *
		 * CreateJS Text supports web fonts (the same rules as Canvas). The font must be loaded and supported by the browser
		 * before it can be displayed.
		 *
		 * <strong>Note:</strong> Text can be expensive to generate, so cache instances where possible. Be aware that not all
		 * browsers will render Text exactly the same.
		 * @class Text
		 * @extends DisplayObject
		 * @constructor
		 * @param {String} [text] The text to display.
		 * @param {String} [font] The font style to use. Any valid value for the CSS font attribute is acceptable (ex. "bold
		 * 36px Arial").
		 * @param {String} [color] The color to draw the text in. Any valid value for the CSS color attribute is acceptable (ex.
		 * "#F00", "red", or "#FF0000").
		 **/
		function Text(text, font, color) {
			this.DisplayObject_constructor();
			
			
		// public properties:
			/**
			 * The text to display.
			 * @property text
			 * @type String
			 **/
			this.text = text;
		
			/**
			 * The font style to use. Any valid value for the CSS font attribute is acceptable (ex. "bold 36px Arial").
			 * @property font
			 * @type String
			 **/
			this.font = font;
		
			/**
			 * The color to draw the text in. Any valid value for the CSS color attribute is acceptable (ex. "#F00"). Default is "#000".
			 * It will also accept valid canvas fillStyle values.
			 * @property color
			 * @type String
			 **/
			this.color = color;
		
			/**
			 * The horizontal text alignment. Any of "start", "end", "left", "right", and "center". For detailed
			 * information view the
			 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
			 * whatwg spec</a>. Default is "left".
			 * @property textAlign
			 * @type String
			 **/
			this.textAlign = "left";
		
			/**
			 * The vertical alignment point on the font. Any of "top", "hanging", "middle", "alphabetic", "ideographic", or
			 * "bottom". For detailed information view the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
			 * whatwg spec</a>. Default is "top".
			 * @property textBaseline
			 * @type String
			*/
			this.textBaseline = "top";
		
			/**
			 * The maximum width to draw the text. If maxWidth is specified (not null), the text will be condensed or
			 * shrunk to make it fit in this width. For detailed information view the
			 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
			 * whatwg spec</a>.
			 * @property maxWidth
			 * @type Number
			*/
			this.maxWidth = null;
		
			/**
			 * If greater than 0, the text will be drawn as a stroke (outline) of the specified width.
			 * @property outline
			 * @type Number
			 **/
			this.outline = 0;
		
			/**
			 * Indicates the line height (vertical distance between baselines) for multi-line text. If null or 0,
			 * the value of getMeasuredLineHeight is used.
			 * @property lineHeight
			 * @type Number
			 **/
			this.lineHeight = 0;
		
			/**
			 * Indicates the maximum width for a line of text before it is wrapped to multiple lines. If null,
			 * the text will not be wrapped.
			 * @property lineWidth
			 * @type Number
			 **/
			this.lineWidth = null;
		}
		var p = createjs.extend(Text, createjs.DisplayObject);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
		
	// static properties:
		/**
		 * @property _workingContext
		 * @type CanvasRenderingContext2D
		 * @private
		 **/
		var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
		if (canvas.getContext) { Text._workingContext = canvas.getContext("2d"); canvas.width = canvas.height = 1; }
		
		
	// constants:
		/**
		 * Lookup table for the ratio to offset bounds x calculations based on the textAlign property.
		 * @property H_OFFSETS
		 * @type Object
		 * @protected
		 * @static
		 **/
		Text.H_OFFSETS = {start: 0, left: 0, center: -0.5, end: -1, right: -1};
		
		/**
		 * Lookup table for the ratio to offset bounds y calculations based on the textBaseline property.
		 * @property H_OFFSETS
		 * @type Object
		 * @protected
		 * @static
		 **/
		Text.V_OFFSETS = {top: 0, hanging: -0.01, middle: -0.4, alphabetic: -0.8, ideographic: -0.85, bottom: -1};
	
	
	// public methods:
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			var hasContent = this.cacheCanvas || (this.text != null && this.text !== "");
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
		};
	
		/**
		 * Draws the Text into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
		 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
		 * into itself).
		 **/
		p.draw = function(ctx, ignoreCache) {
			if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
	
			var col = this.color || "#000";
			if (this.outline) { ctx.strokeStyle = col; ctx.lineWidth = this.outline*1; }
			else { ctx.fillStyle = col; }
			
			this._drawText(this._prepContext(ctx));
			return true;
		};
	
		/**
		 * Returns the measured, untransformed width of the text without wrapping. Use getBounds for a more robust value.
		 * @method getMeasuredWidth
		 * @return {Number} The measured, untransformed width of the text.
		 **/
		p.getMeasuredWidth = function() {
			return this._getMeasuredWidth(this.text);
		};
	
		/**
		 * Returns an approximate line height of the text, ignoring the lineHeight property. This is based on the measured
		 * width of a "M" character multiplied by 1.2, which provides an approximate line height for most fonts.
		 * @method getMeasuredLineHeight
		 * @return {Number} an approximate line height of the text, ignoring the lineHeight property. This is
		 * based on the measured width of a "M" character multiplied by 1.2, which approximates em for most fonts.
		 **/
		p.getMeasuredLineHeight = function() {
			return this._getMeasuredWidth("M")*1.2;
		};
	
		/**
		 * Returns the approximate height of multi-line text by multiplying the number of lines against either the
		 * <code>lineHeight</code> (if specified) or {{#crossLink "Text/getMeasuredLineHeight"}}{{/crossLink}}. Note that
		 * this operation requires the text flowing logic to run, which has an associated CPU cost.
		 * @method getMeasuredHeight
		 * @return {Number} The approximate height of the untransformed multi-line text.
		 **/
		p.getMeasuredHeight = function() {
			return this._drawText(null,{}).height;
		};
	
		/**
		 * Docced in superclass.
		 */
		p.getBounds = function() {
			var rect = this.DisplayObject_getBounds();
			if (rect) { return rect; }
			if (this.text == null || this.text === "") { return null; }
			var o = this._drawText(null, {});
			var w = (this.maxWidth && this.maxWidth < o.width) ? this.maxWidth : o.width;
			var x = w * Text.H_OFFSETS[this.textAlign||"left"];
			var lineHeight = this.lineHeight||this.getMeasuredLineHeight();
			var y = lineHeight * Text.V_OFFSETS[this.textBaseline||"top"];
			return this._rectangle.setValues(x, y, w, o.height);
		};
		
		/**
		 * Returns an object with width, height, and lines properties. The width and height are the visual width and height
		 * of the drawn text. The lines property contains an array of strings, one for
		 * each line of text that will be drawn, accounting for line breaks and wrapping. These strings have trailing
		 * whitespace removed.
		 * @method getMetrics
		 * @return {Object} An object with width, height, and lines properties.
		 **/
		p.getMetrics = function() {
			var o = {lines:[]};
			o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
			o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline||"top"];
			return this._drawText(null, o, o.lines);
		};
	
		/**
		 * Returns a clone of the Text instance.
		 * @method clone
		 * @return {Text} a clone of the Text instance.
		 **/
		p.clone = function() {
			return this._cloneProps(new Text(this.text, this.font, this.color));
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Text (text="+  (this.text.length > 20 ? this.text.substr(0, 17)+"..." : this.text) +")]";
		};
	
	
	// private methods:
		/**
		 * @method _cloneProps
		 * @param {Text} o
		 * @protected
		 * @return {Text} o
		 **/
		p._cloneProps = function(o) {
			this.DisplayObject__cloneProps(o);
			o.textAlign = this.textAlign;
			o.textBaseline = this.textBaseline;
			o.maxWidth = this.maxWidth;
			o.outline = this.outline;
			o.lineHeight = this.lineHeight;
			o.lineWidth = this.lineWidth;
			return o;
		};
	
		/**
		 * @method _getWorkingContext
		 * @param {CanvasRenderingContext2D} ctx
		 * @return {CanvasRenderingContext2D}
		 * @protected
		 **/
		p._prepContext = function(ctx) {
			ctx.font = this.font||"10px sans-serif";
			ctx.textAlign = this.textAlign||"left";
			ctx.textBaseline = this.textBaseline||"top";
			return ctx;
		};
	
		/**
		 * Draws multiline text.
		 * @method _drawText
		 * @param {CanvasRenderingContext2D} ctx
		 * @param {Object} o
		 * @param {Array} lines
		 * @return {Object}
		 * @protected
		 **/
		p._drawText = function(ctx, o, lines) {
			var paint = !!ctx;
			if (!paint) {
				ctx = Text._workingContext;
				ctx.save();
				this._prepContext(ctx);
			}
			var lineHeight = this.lineHeight||this.getMeasuredLineHeight();
			
			var maxW = 0, count = 0;
			var hardLines = String(this.text).split(/(?:\r\n|\r|\n)/);
			for (var i=0, l=hardLines.length; i<l; i++) {
				var str = hardLines[i];
				var w = null;
				
				if (this.lineWidth != null && (w = ctx.measureText(str).width) > this.lineWidth) {
					// text wrapping:
					var words = str.split(/(\s)/);
					str = words[0];
					w = ctx.measureText(str).width;
					
					for (var j=1, jl=words.length; j<jl; j+=2) {
						// Line needs to wrap:
						var wordW = ctx.measureText(words[j] + words[j+1]).width;
						if (w + wordW > this.lineWidth) {
							if (paint) { this._drawTextLine(ctx, str, count*lineHeight); }
							if (lines) { lines.push(str); }
							if (w > maxW) { maxW = w; }
							str = words[j+1];
							w = ctx.measureText(str).width;
							count++;
						} else {
							str += words[j] + words[j+1];
							w += wordW;
						}
					}
				}
				
				if (paint) { this._drawTextLine(ctx, str, count*lineHeight); }
				if (lines) { lines.push(str); }
				if (o && w == null) { w = ctx.measureText(str).width; }
				if (w > maxW) { maxW = w; }
				count++;
			}
			
			if (o) {
				o.width = maxW;
				o.height = count*lineHeight;
			}
			if (!paint) { ctx.restore(); }
			return o;
		};
	
		/**
		 * @method _drawTextLine
		 * @param {CanvasRenderingContext2D} ctx
		 * @param {String} text
		 * @param {Number} y
		 * @protected
		 **/
		p._drawTextLine = function(ctx, text, y) {
			// Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:
			if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
			else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
		};
		
		
		/**
		 * @method _getMeasuredWidth
		 * @param {String} text
		 * @protected
		 **/
		p._getMeasuredWidth = function(text) {
			var ctx = Text._workingContext;
			ctx.save();
			var w = this._prepContext(ctx).measureText(text).width;
			ctx.restore();
			return w;
		};
	
	
		createjs.Text = createjs.promote(Text, "DisplayObject");
	}());
	
	//##############################################################################
	// BitmapText.js
	//##############################################################################
	
	this.createjs = this.createjs || {};
	
	(function () {
		"use strict";
	
	
	// constructor:
		/**
		 * Displays text using bitmap glyphs defined in a sprite sheet. Multi-line text is supported
		 * using new line characters, but automatic wrapping is not supported. See the 
		 * {{#crossLink "BitmapText/spriteSheet:property"}}{{/crossLink}}
		 * property for more information on defining glyphs.
		 * 
		 * <strong>Important:</strong> BitmapText extends Container, but is not designed to be used as one.
		 * As such, methods like addChild and removeChild are disabled.
		 * @class BitmapText
		 * @extends DisplayObject
		 * @param {String} [text=""] The text to display.
		 * @param {SpriteSheet} [spriteSheet=null] The spritesheet that defines the character glyphs.
		 * @constructor
		 **/
		function BitmapText(text, spriteSheet) {
			this.Container_constructor();
			
			
		// public properties:
			/**
			 * The text to display.
			 * @property text
			 * @type String
			 * @default ""
			 **/
			this.text = text||"";
			
			/**
			 * A SpriteSheet instance that defines the glyphs for this bitmap text. Each glyph/character
			 * should have a single frame animation defined in the sprite sheet named the same as
			 * corresponding character. For example, the following animation definition:
			 *
			 * 		"A": {frames: [0]}
			 *
			 * would indicate that the frame at index 0 of the spritesheet should be drawn for the "A" character. The short form
			 * is also acceptable:
			 * 
			 * 		"A": 0
			 *
			 * Note that if a character in the text is not found in the sprite sheet, it will also
			 * try to use the alternate case (upper or lower).
			 *
			 * See SpriteSheet for more information on defining sprite sheet data.
			 * @property spriteSheet
			 * @type SpriteSheet
			 * @default null
			 **/
			this.spriteSheet = spriteSheet;
		
			/**
			 * The height of each line of text. If 0, then it will use a line height calculated
			 * by checking for the height of the "1", "T", or "L" character (in that order). If
			 * those characters are not defined, it will use the height of the first frame of the
			 * sprite sheet.
			 * @property lineHeight
			 * @type Number
			 * @default 0
			 **/
			this.lineHeight = 0;
		
			/**
			 * This spacing (in pixels) will be added after each character in the output.
			 * @property letterSpacing
			 * @type Number
			 * @default 0
			 **/
			this.letterSpacing = 0;
		
			/**
			 * If a space character is not defined in the sprite sheet, then empty pixels equal to
			 * spaceWidth will be inserted instead. If 0, then it will use a value calculated
			 * by checking for the width of the "1", "l", "E", or "A" character (in that order). If
			 * those characters are not defined, it will use the width of the first frame of the
			 * sprite sheet.
			 * @property spaceWidth
			 * @type Number
			 * @default 0
			 **/
			this.spaceWidth = 0;
			
			
		// private properties:
		 	/**
			 * @property _oldProps
			 * @type Object
			 * @protected
			 **/
			this._oldProps = {text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0};
		}
		var p = createjs.extend(BitmapText, createjs.Container);
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	// static properties:
		/**
		 * BitmapText uses Sprite instances to draw text. To reduce the creation and destruction of instances (and thus garbage collection), it maintains
		 * an internal object pool of sprite instances to reuse. Increasing this value can cause more sprites to be
		 * retained, slightly increasing memory use, but reducing instantiation.
		 * @property maxPoolSize
		 * @type Number
		 * @static
		 * @default 100
		 **/
		BitmapText.maxPoolSize = 100;
		
		/**
		 * Sprite object pool.
		 * @type {Array}
		 * @static
		 * @private
		 */
		BitmapText._spritePool = [];
	
		
	// public methods:
		/**
		 * Docced in superclass.
		 **/
		p.draw = function(ctx, ignoreCache) {
			if (this.DisplayObject_draw(ctx, ignoreCache)) { return; }
			this._updateText();
			this.Container_draw(ctx, ignoreCache);
		};
		
		/**
		 * Docced in superclass.
		 **/
		p.getBounds = function() {
			this._updateText();
			return this.Container_getBounds();
		};
		
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			var hasContent = this.cacheCanvas || (this.spriteSheet && this.spriteSheet.complete && this.text);
			return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && hasContent);
		};
		
		p.clone = function() {
			return this._cloneProps(new BitmapText(this.text, this.spriteSheet));
		};
		
		/**
		 * <strong>Disabled in BitmapText.</strong>
		 * @method addChild
		 **/
		/**
		 * <strong>Disabled in BitmapText.</strong>
		 * @method addChildAt
		 **/
		/**
		 * <strong>Disabled in BitmapText.</strong>
		 * @method removeChild
		 **/
		/**
		 * <strong>Disabled in BitmapText.</strong>
		 * @method removeChildAt
		 **/
		/**
		 * <strong>Disabled in BitmapText.</strong>
		 * @method removeAllChildren
		 **/
		p.addChild = p.addChildAt = p.removeChild = p.removeChildAt = p.removeAllChildren = function() {};
	
	
	// private methods:
	 	/**
		 * @method _cloneProps
		 * @param {BitmapText} o
		 * @return {BitmapText} o
		 * @protected
		 **/
		p._cloneProps = function(o) {
			this.Container__cloneProps(o);
			o.lineHeight = this.lineHeight;
			o.letterSpacing = this.letterSpacing;
			o.spaceWidth = this.spaceWidth;
			return o;
		};
		
		/**
		 * @method _getFrameIndex
		 * @param {String} character
		 * @param {SpriteSheet} spriteSheet
		 * @return {Number}
		 * @protected
		 **/
		p._getFrameIndex = function(character, spriteSheet) {
			var c, o = spriteSheet.getAnimation(character);
			if (!o) {
				(character != (c = character.toUpperCase())) || (character != (c = character.toLowerCase())) || (c=null);
				if (c) { o = spriteSheet.getAnimation(c); }
			}
			return o && o.frames[0];
		};
		
		/**
		 * @method _getFrame
		 * @param {String} character
		 * @param {SpriteSheet} spriteSheet
		 * @return {Object}
		 * @protected
		 **/
		p._getFrame = function(character, spriteSheet) {
			var index = this._getFrameIndex(character, spriteSheet);
			return index == null ? index : spriteSheet.getFrame(index);
		};
		
		/**
		 * @method _getLineHeight
		 * @param {SpriteSheet} ss
		 * @return {Number}
		 * @protected
		 **/
		p._getLineHeight = function(ss) {
			var frame = this._getFrame("1",ss) || this._getFrame("T",ss) || this._getFrame("L",ss) || ss.getFrame(0);
			return frame ? frame.rect.height : 1;
		};
		/**
		 * @method _getSpaceWidth
		 * @param {SpriteSheet} ss
		 * @return {Number}
		 * @protected
		 **/
		p._getSpaceWidth = function(ss) {
			var frame = this._getFrame("1",ss) || this._getFrame("l",ss) || this._getFrame("e",ss) || this._getFrame("a",ss) || ss.getFrame(0);
			return frame ? frame.rect.width : 1;
		};
		
		/**
		 * @method _drawText
		 * @protected
		 **/
		p._updateText = function() {
			var x=0, y=0, o=this._oldProps, change=false, spaceW=this.spaceWidth, lineH=this.lineHeight, ss=this.spriteSheet;
			var pool=BitmapText._spritePool, kids=this.children, childIndex=0, numKids=kids.length, sprite;
			
			for (var n in o) {
				if (o[n] != this[n]) {
					o[n] = this[n];
					change = true;
				}
			}
			if (!change) { return; }
			
			var hasSpace = !!this._getFrame(" ", ss);
			if (!hasSpace && !spaceW) { spaceW = this._getSpaceWidth(ss); }
			if (!lineH) { lineH = this._getLineHeight(ss); }
			
			for(var i=0, l=this.text.length; i<l; i++) {
				var character = this.text.charAt(i);
				if (character == " " && !hasSpace) {
					x += spaceW;
					continue;
				} else if (character=="\n" || character=="\r") {
					if (character=="\r" && this.text.charAt(i+1) == "\n") { i++; } // crlf
					x = 0;
					y += lineH;
					continue;
				}
	
				var index = this._getFrameIndex(character, ss);
				if (index == null) { continue; }
				
				if (childIndex < numKids) {
					sprite = kids[childIndex];
				} else {
					kids.push(sprite = pool.length ? pool.pop() : new createjs.Sprite());
					sprite.parent = this;
					numKids++;
				}
				sprite.spriteSheet = ss;
				sprite.gotoAndStop(index);
				sprite.x = x;
				sprite.y = y;
				childIndex++;
				
				x += sprite.getBounds().width + this.letterSpacing;
			}
			while (numKids > childIndex) {
				 // faster than removeChild.
				pool.push(sprite = kids.pop());
				sprite.parent = null;
				numKids--;
			}
			if (pool.length > BitmapText.maxPoolSize) { pool.length = BitmapText.maxPoolSize; }
		};
	
	
		createjs.BitmapText = createjs.promote(BitmapText, "Container");
	}());
	
	//##############################################################################
	// MovieClip.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The MovieClip class associates a TweenJS Timeline with an EaselJS {{#crossLink "Container"}}{{/crossLink}}. It allows
		 * you to create objects which encapsulate timeline animations, state changes, and synched actions. Due to the
		 * complexities inherent in correctly setting up a MovieClip, it is largely intended for tool output and is not included
		 * in the main EaselJS library.
		 *
		 * Currently MovieClip only works properly if it is tick based (as opposed to time based) though some concessions have
		 * been made to support time-based timelines in the future.
		 *
		 * <h4>Example</h4>
		 * This example animates two shapes back and forth. The grey shape starts on the left, but we jump to a mid-point in
		 * the animation using {{#crossLink "MovieClip/gotoAndPlay"}}{{/crossLink}}.
		 *
		 *      var stage = new createjs.Stage("canvas");
		 *      createjs.Ticker.addEventListener("tick", stage);
		 *
		 *      var mc = new createjs.MovieClip(null, 0, true, {start:20});
		 *      stage.addChild(mc);
		 *
		 *      var child1 = new createjs.Shape(
		 *          new createjs.Graphics().beginFill("#999999")
		 *              .drawCircle(30,30,30));
		 *      var child2 = new createjs.Shape(
		 *          new createjs.Graphics().beginFill("#5a9cfb")
		 *              .drawCircle(30,30,30));
		 *
		 *      mc.timeline.addTween(
		 *          createjs.Tween.get(child1)
		 *              .to({x:0}).to({x:60}, 50).to({x:0}, 50));
		 *      mc.timeline.addTween(
		 *          createjs.Tween.get(child2)
		 *              .to({x:60}).to({x:0}, 50).to({x:60}, 50));
		 *
		 *      mc.gotoAndPlay("start");
		 *
		 * It is recommended to use <code>tween.to()</code> to animate and set properties (use no duration to have it set
		 * immediately), and the <code>tween.wait()</code> method to create delays between animations. Note that using the
		 * <code>tween.set()</code> method to affect properties will likely not provide the desired result.
		 *
		 * @class MovieClip
		 * @main MovieClip
		 * @extends Container
		 * @constructor
		 * @param {String} [mode=independent] Initial value for the mode property. One of {{#crossLink "MovieClip/INDEPENDENT:property"}}{{/crossLink}},
		 * {{#crossLink "MovieClip/SINGLE_FRAME:property"}}{{/crossLink}}, or {{#crossLink "MovieClip/SYNCHED:property"}}{{/crossLink}}.
		 * The default is {{#crossLink "MovieClip/INDEPENDENT:property"}}{{/crossLink}}.
		 * @param {Number} [startPosition=0] Initial value for the {{#crossLink "MovieClip/startPosition:property"}}{{/crossLink}}
		 * property.
		 * @param {Boolean} [loop=true] Initial value for the {{#crossLink "MovieClip/loop:property"}}{{/crossLink}}
		 * property. The default is `true`.
		 * @param {Object} [labels=null] A hash of labels to pass to the {{#crossLink "MovieClip/timeline:property"}}{{/crossLink}}
		 * instance associated with this MovieClip. Labels only need to be passed if they need to be used.
		 **/
		function MovieClip(mode, startPosition, loop, labels) {
			this.Container_constructor();
			!MovieClip.inited&&MovieClip.init(); // static init
			
			
		// public properties:
			/**
			 * Controls how this MovieClip advances its time. Must be one of 0 (INDEPENDENT), 1 (SINGLE_FRAME), or 2 (SYNCHED).
			 * See each constant for a description of the behaviour.
			 * @property mode
			 * @type String
			 * @default null
			 **/
			this.mode = mode||MovieClip.INDEPENDENT;
		
			/**
			 * Specifies what the first frame to play in this movieclip, or the only frame to display if mode is SINGLE_FRAME.
			 * @property startPosition
			 * @type Number
			 * @default 0
			 */
			this.startPosition = startPosition || 0;
		
			/**
			 * Indicates whether this MovieClip should loop when it reaches the end of its timeline.
			 * @property loop
			 * @type Boolean
			 * @default true
			 */
			this.loop = loop;
		
			/**
			 * The current frame of the movieclip.
			 * @property currentFrame
			 * @type Number
			 * @default 0
			 * @readonly
			 */
			this.currentFrame = 0;
		
			/**
			 * The TweenJS Timeline that is associated with this MovieClip. This is created automatically when the MovieClip
			 * instance is initialized. Animations are created by adding <a href="http://tweenjs.com">TweenJS</a> Tween
			 * instances to the timeline.
			 *
			 * <h4>Example</h4>
			 *
			 *      var tween = createjs.Tween.get(target).to({x:0}).to({x:100}, 30);
			 *      var mc = new createjs.MovieClip();
			 *      mc.timeline.addTween(tween);
			 *
			 * Elements can be added and removed from the timeline by toggling an "_off" property
			 * using the <code>tweenInstance.to()</code> method. Note that using <code>Tween.set</code> is not recommended to
			 * create MovieClip animations. The following example will toggle the target off on frame 0, and then back on for
			 * frame 1. You can use the "visible" property to achieve the same effect.
			 *
			 *      var tween = createjs.Tween.get(target).to({_off:false})
			 *          .wait(1).to({_off:true})
			 *          .wait(1).to({_off:false});
			 *
			 * @property timeline
			 * @type Timeline
			 * @default null
			 */
			this.timeline = new createjs.Timeline(null, labels, {paused:true, position:startPosition, useTicks:true});
		
			/**
			 * If true, the MovieClip's position will not advance when ticked.
			 * @property paused
			 * @type Boolean
			 * @default false
			 */
			this.paused = false;
		
			/**
			 * If true, actions in this MovieClip's tweens will be run when the playhead advances.
			 * @property actionsEnabled
			 * @type Boolean
			 * @default true
			 */
			this.actionsEnabled = true;
		
			/**
			 * If true, the MovieClip will automatically be reset to its first frame whenever the timeline adds
			 * it back onto the display list. This only applies to MovieClip instances with mode=INDEPENDENT.
			 * <br><br>
			 * For example, if you had a character animation with a "body" child MovieClip instance
			 * with different costumes on each frame, you could set body.autoReset = false, so that
			 * you can manually change the frame it is on, without worrying that it will be reset
			 * automatically.
			 * @property autoReset
			 * @type Boolean
			 * @default true
			 */
			this.autoReset = true;
			
			/**
			 * An array of bounds for each frame in the MovieClip. This is mainly intended for tool output.
			 * @property frameBounds
			 * @type Array
			 * @default null
			 */
			this.frameBounds = this.frameBounds||null; // TODO: Deprecated. This is for backwards support of FlashCC
			
			/**
			 * By default MovieClip instances advance one frame per tick. Specifying a framerate for the MovieClip
			 * will cause it to advance based on elapsed time between ticks as appropriate to maintain the target
			 * framerate.
			 *
			 * For example, if a MovieClip with a framerate of 10 is placed on a Stage being updated at 40fps, then the MovieClip will
			 * advance roughly one frame every 4 ticks. This will not be exact, because the time between each tick will
			 * vary slightly between frames.
			 *
			 * This feature is dependent on the tick event object (or an object with an appropriate "delta" property) being
			 * passed into {{#crossLink "Stage/update"}}{{/crossLink}}.
			 * @property framerate
			 * @type {Number}
			 * @default null
			 **/
			this.framerate = null;
			
			
		// private properties:
			/**
			 * @property _synchOffset
			 * @type Number
			 * @default 0
			 * @private
			 */
			this._synchOffset = 0;
		
			/**
			 * @property _prevPos
			 * @type Number
			 * @default -1
			 * @private
			 */
			this._prevPos = -1; // TODO: evaluate using a ._reset Boolean prop instead of -1.
		
			/**
			 * @property _prevPosition
			 * @type Number
			 * @default 0
			 * @private
			 */
			this._prevPosition = 0;
		
			/**
			 * The time remaining from the previous tick, only applicable when .framerate is set.
			 * @property _t
			 * @type Number
			 * @private
			 */
			this._t = 0;
		
			/**
			 * List of display objects that are actively being managed by the MovieClip.
			 * @property _managed
			 * @type Object
			 * @private
			 */
			this._managed = {};
		}
		var p = createjs.extend(MovieClip, createjs.Container);
	
	
	// constants:
		/**
		 * The MovieClip will advance independently of its parent, even if its parent is paused.
		 * This is the default mode.
		 * @property INDEPENDENT
		 * @static
		 * @type String
		 * @default "independent"
		 * @readonly
		 **/
		MovieClip.INDEPENDENT = "independent";
	
		/**
		 * The MovieClip will only display a single frame (as determined by the startPosition property).
		 * @property SINGLE_FRAME
		 * @static
		 * @type String
		 * @default "single"
		 * @readonly
		 **/
		MovieClip.SINGLE_FRAME = "single";
	
		/**
		 * The MovieClip will be advanced only when its parent advances and will be synched to the position of
		 * the parent MovieClip.
		 * @property SYNCHED
		 * @static
		 * @type String
		 * @default "synched"
		 * @readonly
		 **/
		MovieClip.SYNCHED = "synched";
		
		
	// static properties:
		MovieClip.inited = false;
		
		
	// static methods:
		MovieClip.init = function() {
			if (MovieClip.inited) { return; }
			// plugins introduce some overhead to Tween, so we only install this if an MC is instantiated.
			MovieClipPlugin.install();
			MovieClip.inited = true;
		};
		
		
	// getter / setters:
		/**
		 * Use the {{#crossLink "MovieClip/labels:property"}}{{/crossLink}} property instead.
		 * @method getLabels
		 * @return {Array}
		 * @deprecated
		 **/
		p.getLabels = function() {
			return this.timeline.getLabels();
		};
		
		/**
		 * Use the {{#crossLink "MovieClip/currentLabel:property"}}{{/crossLink}} property instead.
		 * @method getCurrentLabel
		 * @return {String}
		 * @deprecated
		 **/
		p.getCurrentLabel = function() {
			this._updateTimeline();
			return this.timeline.getCurrentLabel();
		};
		
		/**
		 * Use the {{#crossLink "MovieClip/duration:property"}}{{/crossLink}} property instead.
		 * @method getDuration
		 * @return {Number}
		 * @protected
		 **/
		p.getDuration = function() {
			return this.timeline.duration;
		};
	
		/**
		 * Returns an array of objects with label and position (aka frame) properties, sorted by position.
		 * Shortcut to TweenJS: Timeline.getLabels();
		 * @property labels
		 * @type {Array}
		 * @readonly
		 **/
		
		/**
		 * Returns the name of the label on or immediately before the current frame. See TweenJS: Timeline.getCurrentLabel()
		 * for more information.
		 * @property currentLabel
		 * @type {String}
		 * @readonly
		 **/
		
		/**
		 * Returns the duration of this MovieClip in seconds or ticks. Identical to {{#crossLink "MovieClip/duration:property"}}{{/crossLink}}
		 * and provided for Flash API compatibility.
		 * @property totalFrames
		 * @type {Number}
		 * @readonly
		 **/
		
		/**
		 * Returns the duration of this MovieClip in seconds or ticks.
		 * @property duration
		 * @type {Number}
		 * @readonly
		 **/
		try {
			Object.defineProperties(p, {
				labels: { get: p.getLabels },
				currentLabel: { get: p.getCurrentLabel },
				totalFrames: { get: p.getDuration },
				duration: { get: p.getDuration }
			});
		} catch (e) {}
	
	
	// public methods:
		/**
		 * Constructor alias for backwards compatibility. This method will be removed in future versions.
		 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
		 * @method initialize
		 * @deprecated in favour of `createjs.promote()`
		 **/
		p.initialize = MovieClip; // TODO: Deprecated. This is for backwards support of FlashCC
	
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 **/
		p.isVisible = function() {
			// children are placed in draw, so we can't determine if we have content.
			return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
		 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
		 * into itself).
		 **/
		p.draw = function(ctx, ignoreCache) {
			// draw to cache first:
			if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
			this._updateTimeline();
			this.Container_draw(ctx, ignoreCache);
			return true;
		};
		
		/**
		 * Sets paused to false.
		 * @method play
		 **/
		p.play = function() {
			this.paused = false;
		};
		
		/**
		 * Sets paused to true.
		 * @method stop
		 **/
		p.stop = function() {
			this.paused = true;
		};
		
		/**
		 * Advances this movie clip to the specified position or label and sets paused to false.
		 * @method gotoAndPlay
		 * @param {String|Number} positionOrLabel The animation name or frame number to go to.
		 **/
		p.gotoAndPlay = function(positionOrLabel) {
			this.paused = false;
			this._goto(positionOrLabel);
		};
		
		/**
		 * Advances this movie clip to the specified position or label and sets paused to true.
		 * @method gotoAndStop
		 * @param {String|Number} positionOrLabel The animation or frame name to go to.
		 **/
		p.gotoAndStop = function(positionOrLabel) {
			this.paused = true;
			this._goto(positionOrLabel);
		};
		
		/**
		 * Advances the playhead. This occurs automatically each tick by default.
		 * @param [time] {Number} The amount of time in ms to advance by. Only applicable if framerate is set.
		 * @method advance
		*/
		p.advance = function(time) {
			// TODO: should we worry at all about clips who change their own modes via frame scripts?
			var independent = MovieClip.INDEPENDENT;
			if (this.mode != independent) { return; }
			
			var o=this, fps = o.framerate;
			while ((o = o.parent) && fps == null) {
				if (o.mode == independent) { fps = o._framerate; }
			}
			this._framerate = fps;
			
			var t = (fps != null && fps != -1 && time != null) ? time/(1000/fps) + this._t : 1;
			var frames = t|0;
			this._t = t-frames; // leftover time
			
			while (!this.paused && frames--) {
				this._prevPosition = (this._prevPos < 0) ? 0 : this._prevPosition+1;
				this._updateTimeline();
			}
		};
		
		/**
		 * MovieClip instances cannot be cloned.
		 * @method clone
		 **/
		p.clone = function() {
			// TODO: add support for this? Need to clone the Timeline & retarget tweens - pretty complex.
			throw("MovieClip cannot be cloned.")
		};
		
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[MovieClip (name="+  this.name +")]";
		};
	
	
	// private methods:
		/**
		 * @method _tick
		 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
		 * function.
		 * @protected
		 **/
		p._tick = function(evtObj) {
			this.advance(evtObj&&evtObj.delta);
			this.Container__tick(evtObj);
		};
		
		/**
		 * @method _goto
		 * @param {String|Number} positionOrLabel The animation name or frame number to go to.
		 * @protected
		 **/
		p._goto = function(positionOrLabel) {
			var pos = this.timeline.resolve(positionOrLabel);
			if (pos == null) { return; }
			// prevent _updateTimeline from overwriting the new position because of a reset:
			if (this._prevPos == -1) { this._prevPos = NaN; }
			this._prevPosition = pos;
			this._t = 0;
			this._updateTimeline();
		};
		
		/**
		 * @method _reset
		 * @private
		 **/
		p._reset = function() {
			this._prevPos = -1;
			this._t = this.currentFrame = 0;
			this.paused = false;
		};
		
		/**
		 * @method _updateTimeline
		 * @protected
		 **/
		p._updateTimeline = function() {
			var tl = this.timeline;
			var synched = this.mode != MovieClip.INDEPENDENT;
			tl.loop = (this.loop==null) ? true : this.loop;
			
			var pos = synched ? this.startPosition + (this.mode==MovieClip.SINGLE_FRAME?0:this._synchOffset) : (this._prevPos < 0 ? 0 : this._prevPosition);
			var mode = synched || !this.actionsEnabled ? createjs.Tween.NONE : null;
			
			// pre-assign currentFrame so it is available to frame scripts:
			this.currentFrame = tl._calcPosition(pos);
			
			// update timeline position, ignoring actions if this is a graphic.
			tl.setPosition(pos, mode);
	
			this._prevPosition = tl._prevPosition;
			if (this._prevPos == tl._prevPos) { return; }
			this.currentFrame = this._prevPos = tl._prevPos;
	
			for (var n in this._managed) { this._managed[n] = 1; }
	
			var tweens = tl._tweens;
			for (var i=0, l=tweens.length; i<l; i++) {
				var tween = tweens[i];
				var target = tween._target;
				if (target == this || tween.passive) { continue; } // TODO: this assumes actions tween has this as the target. Valid?
				var offset = tween._stepPosition;
	
				if (target instanceof createjs.DisplayObject) {
					// motion tween.
					this._addManagedChild(target, offset);
				} else {
					// state tween.
					this._setState(target.state, offset);
				}
			}
	
			var kids = this.children;
			for (i=kids.length-1; i>=0; i--) {
				var id = kids[i].id;
				if (this._managed[id] == 1) {
					this.removeChildAt(i);
					delete(this._managed[id]);
				}
			}
		};
	
		/**
		 * @method _setState
		 * @param {Array} state
		 * @param {Number} offset
		 * @protected
		 **/
		p._setState = function(state, offset) {
			if (!state) { return; }
			for (var i=state.length-1;i>=0;i--) {
				var o = state[i];
				var target = o.t;
				var props = o.p;
				for (var n in props) { target[n] = props[n]; }
				this._addManagedChild(target, offset);
			}
		};
	
		/**
		 * Adds a child to the timeline, and sets it up as a managed child.
		 * @method _addManagedChild
		 * @param {MovieClip} child The child MovieClip to manage
		 * @param {Number} offset
		 * @private
		 **/
		p._addManagedChild = function(child, offset) {
			if (child._off) { return; }
			this.addChildAt(child,0);
	
			if (child instanceof MovieClip) {
				child._synchOffset = offset;
				// TODO: this does not precisely match Flash. Flash loses track of the clip if it is renamed or removed from the timeline, which causes it to reset.
				if (child.mode == MovieClip.INDEPENDENT && child.autoReset && !this._managed[child.id]) { child._reset(); }
			}
			this._managed[child.id] = 2;
		};
		
		/**
		 * @method _getBounds
		 * @param {Matrix2D} matrix
		 * @param {Boolean} ignoreTransform
		 * @return {Rectangle}
		 * @protected
		 **/
		p._getBounds = function(matrix, ignoreTransform) {
			var bounds = this.DisplayObject_getBounds();
			if (!bounds) {
				this._updateTimeline();
				if (this.frameBounds) { bounds = this._rectangle.copy(this.frameBounds[this.currentFrame]); }
			}
			if (bounds) { return this._transformBounds(bounds, matrix, ignoreTransform); }
			return this.Container__getBounds(matrix, ignoreTransform);
		};
	
	
		createjs.MovieClip = createjs.promote(MovieClip, "Container");
	
	
	
	// MovieClipPlugin for TweenJS:
		/**
		 * This plugin works with <a href="http://tweenjs.com" target="_blank">TweenJS</a> to prevent the startPosition
		 * property from tweening.
		 * @private
		 * @class MovieClipPlugin
		 * @constructor
		 **/
		function MovieClipPlugin() {
			throw("MovieClipPlugin cannot be instantiated.")
		}
		
		/**
		 * @method priority
		 * @private
		 **/
		MovieClipPlugin.priority = 100; // very high priority, should run first
	
		/**
		 * @method install
		 * @private
		 **/
		MovieClipPlugin.install = function() {
			createjs.Tween.installPlugin(MovieClipPlugin, ["startPosition"]);
		};
		
		/**
		 * @method init
		 * @param {Tween} tween
		 * @param {String} prop
		 * @param {String|Number|Boolean} value
		 * @private
		 **/
		MovieClipPlugin.init = function(tween, prop, value) {
			return value;
		};
		
		/**
		 * @method step
		 * @private
		 **/
		MovieClipPlugin.step = function() {
			// unused.
		};
	
		/**
		 * @method tween
		 * @param {Tween} tween
		 * @param {String} prop
		 * @param {String | Number | Boolean} value
		 * @param {Array} startValues
		 * @param {Array} endValues
		 * @param {Number} ratio
		 * @param {Object} wait
		 * @param {Object} end
		 * @return {*}
		 */
		MovieClipPlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
			if (!(tween.target instanceof MovieClip)) { return value; }
			return (ratio == 1 ? endValues[prop] : startValues[prop]);
		};
	
	}());
	
	//##############################################################################
	// SpriteSheetUtils.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
		
		
	// constructor:
		/**
		 * The SpriteSheetUtils class is a collection of static methods for working with {{#crossLink "SpriteSheet"}}{{/crossLink}}s.
		 * A sprite sheet is a series of images (usually animation frames) combined into a single image on a regular grid. For
		 * example, an animation consisting of 8 100x100 images could be combined into a 400x200 sprite sheet (4 frames across
		 * by 2 high). The SpriteSheetUtils class uses a static interface and should not be instantiated.
		 * @class SpriteSheetUtils
		 * @static
		 **/
		function SpriteSheetUtils() {
			throw "SpriteSheetUtils cannot be instantiated";
		}
	
	
	// private static properties:
		/**
		 * @property _workingCanvas
		 * @static
		 * @type HTMLCanvasElement | Object
		 * @protected
		*/
		/**
		 * @property _workingContext
		 * @static
		 * @type CanvasRenderingContext2D
		 * @protected
		*/
		var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
		if (canvas.getContext) {
			SpriteSheetUtils._workingCanvas = canvas;
			SpriteSheetUtils._workingContext = canvas.getContext("2d");
			canvas.width = canvas.height = 1;
		}
	
	
	// public static methods:
		/**
		 * <b>This is an experimental method, and may be buggy. Please report issues.</b><br/><br/>
		 * Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both,
		 * and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names
		 * (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method.
		 * <br/><br/>
		 * For example:<br/>
		 * SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true);
		 * The above would add frames that are flipped horizontally AND frames that are flipped vertically.
		 * <br/><br/>
		 * Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some
		 * browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance,
		 * which is why addFlippedFrames is available.
		 * @method addFlippedFrames
		 * @static
		 * @param {SpriteSheet} spriteSheet
		 * @param {Boolean} horizontal If true, horizontally flipped frames will be added.
		 * @param {Boolean} vertical If true, vertically flipped frames will be added.
		 * @param {Boolean} both If true, frames that are flipped both horizontally and vertically will be added.
		 * @deprecated Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
		 **/
		SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
			if (!horizontal && !vertical && !both) { return; }
	
			var count = 0;
			if (horizontal) { SpriteSheetUtils._flip(spriteSheet,++count,true,false); }
			if (vertical) { SpriteSheetUtils._flip(spriteSheet,++count,false,true); }
			if (both) { SpriteSheetUtils._flip(spriteSheet,++count,true,true); }
		};
	
		/**
		 * Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is
		 * to use a spritesheet frame as the source for a bitmap fill.
		 *
		 * <strong>WARNING:</strong> In almost all cases it is better to display a single frame using a {{#crossLink "Sprite"}}{{/crossLink}}
		 * with a {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} call than it is to slice out a frame using this
		 * method and display it with a Bitmap instance. You can also crop an image using the {{#crossLink "Bitmap/sourceRect"}}{{/crossLink}}
		 * property of {{#crossLink "Bitmap"}}{{/crossLink}}.
		 *
		 * The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
		 * @method extractFrame
		 * @static
		 * @param {SpriteSheet} spriteSheet The SpriteSheet instance to extract a frame from.
		 * @param {Number|String} frameOrAnimation The frame number or animation name to extract. If an animation
		 * name is specified, only the first frame of the animation will be extracted.
		 * @return {HTMLImageElement} a single frame of the specified sprite sheet as a new PNG image.
		*/
		SpriteSheetUtils.extractFrame = function(spriteSheet, frameOrAnimation) {
			if (isNaN(frameOrAnimation)) {
				frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0];
			}
			var data = spriteSheet.getFrame(frameOrAnimation);
			if (!data) { return null; }
			var r = data.rect;
			var canvas = SpriteSheetUtils._workingCanvas;
			canvas.width = r.width;
			canvas.height = r.height;
			SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
			var img = document.createElement("img");
			img.src = canvas.toDataURL("image/png");
			return img;
		};
	
		/**
		 * Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed
		 * JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of
		 * images (those with detail that lend itself to JPEG compression) this can provide significant file size savings
		 * versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
		 * @method mergeAlpha
		 * @static
		 * @param {HTMLImageElement} rbgImage The image (or canvas) containing the RGB channels to use.
		 * @param {HTMLImageElement} alphaImage The image (or canvas) containing the alpha channel to use.
		 * @param {HTMLCanvasElement} canvas Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
		 * @return {HTMLCanvasElement} A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
		 * @deprecated Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
		*/
		SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
			if (!canvas) { canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
			canvas.width = Math.max(alphaImage.width, rgbImage.width);
			canvas.height = Math.max(alphaImage.height, rgbImage.height);
			var ctx = canvas.getContext("2d");
			ctx.save();
			ctx.drawImage(rgbImage,0,0);
			ctx.globalCompositeOperation = "destination-in";
			ctx.drawImage(alphaImage,0,0);
			ctx.restore();
			return canvas;
		};
	
	
	// private static methods:
		SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
			var imgs = spriteSheet._images;
			var canvas = SpriteSheetUtils._workingCanvas;
			var ctx = SpriteSheetUtils._workingContext;
			var il = imgs.length/count;
			for (var i=0;i<il;i++) {
				var src = imgs[i];
				src.__tmp = i; // a bit hacky, but faster than doing indexOf below.
				ctx.setTransform(1,0,0,1,0,0);
				ctx.clearRect(0,0,canvas.width+1,canvas.height+1);
				canvas.width = src.width;
				canvas.height = src.height;
				ctx.setTransform(h?-1:1, 0, 0, v?-1:1, h?src.width:0, v?src.height:0);
				ctx.drawImage(src,0,0);
				var img = document.createElement("img");
				img.src = canvas.toDataURL("image/png");
				// work around a strange bug in Safari:
				img.width = src.width;
				img.height = src.height;
				imgs.push(img);
			}
	
			var frames = spriteSheet._frames;
			var fl = frames.length/count;
			for (i=0;i<fl;i++) {
				src = frames[i];
				var rect = src.rect.clone();
				img = imgs[src.image.__tmp+il*count];
	
				var frame = {image:img,rect:rect,regX:src.regX,regY:src.regY};
				if (h) {
					rect.x = img.width-rect.x-rect.width; // update rect
					frame.regX = rect.width-src.regX; // update registration point
				}
				if (v) {
					rect.y = img.height-rect.y-rect.height;  // update rect
					frame.regY = rect.height-src.regY; // update registration point
				}
				frames.push(frame);
			}
	
			var sfx = "_"+(h?"h":"")+(v?"v":"");
			var names = spriteSheet._animations;
			var data = spriteSheet._data;
			var al = names.length/count;
			for (i=0;i<al;i++) {
				var name = names[i];
				src = data[name];
				var anim = {name:name+sfx,speed:src.speed,next:src.next,frames:[]};
				if (src.next) { anim.next += sfx; }
				frames = src.frames;
				for (var j=0,l=frames.length;j<l;j++) {
					anim.frames.push(frames[j]+fl*count);
				}
				data[anim.name] = anim;
				names.push(anim.name);
			}
		};
	
	
		createjs.SpriteSheetUtils = SpriteSheetUtils;
	}());
	
	//##############################################################################
	// SpriteSheetBuilder.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The SpriteSheetBuilder allows you to generate {{#crossLink "SpriteSheet"}}{{/crossLink}} instances at run time
		 * from any display object. This can allow you to maintain your assets as vector graphics (for low file size), and
		 * render them at run time as SpriteSheets for better performance.
		 *
		 * SpriteSheets can be built either synchronously, or asynchronously, so that large SpriteSheets can be generated
		 * without locking the UI.
		 *
		 * Note that the "images" used in the generated SpriteSheet are actually canvas elements, and that they will be
		 * sized to the nearest power of 2 up to the value of {{#crossLink "SpriteSheetBuilder/maxWidth:property"}}{{/crossLink}}
		 * or {{#crossLink "SpriteSheetBuilder/maxHeight:property"}}{{/crossLink}}.
		 * @class SpriteSheetBuilder
		 * @param {Number} [framerate=0] The {{#crossLink "SpriteSheet/framerate:property"}}{{/crossLink}} of
		 * {{#crossLink "SpriteSheet"}}{{/crossLink}} instances that are created.
		 * @extends EventDispatcher
		 * @constructor
		 **/
		function SpriteSheetBuilder(framerate) {
			this.EventDispatcher_constructor();
			
		// public properties:
			/**
			 * The maximum width for the images (not individual frames) in the generated SpriteSheet. It is recommended to
			 * use a power of 2 for this value (ex. 1024, 2048, 4096). If the frames cannot all fit within the max
			 * dimensions, then additional images will be created as needed.
			 * @property maxWidth
			 * @type Number
			 * @default 2048
			*/
			this.maxWidth = 2048;
		
			/**
			 * The maximum height for the images (not individual frames) in the generated SpriteSheet. It is recommended to
			 * use a power of 2 for this value (ex. 1024, 2048, 4096). If the frames cannot all fit within the max
			 * dimensions, then additional images will be created as needed.
			 * @property maxHeight
			 * @type Number
			 * @default 2048
			 **/
			this.maxHeight = 2048;
		
			/**
			 * The SpriteSheet that was generated. This will be null before a build is completed successfully.
			 * @property spriteSheet
			 * @type SpriteSheet
			 **/
			this.spriteSheet = null;
		
			/**
			 * The scale to apply when drawing all frames to the SpriteSheet. This is multiplied against any scale specified
			 * in the addFrame call. This can be used, for example, to generate a SpriteSheet at run time that is tailored
			 * to the a specific device resolution (ex. tablet vs mobile).
			 * @property scale
			 * @type Number
			 * @default 1
			 **/
			this.scale = 1;
		
			/**
			* The padding to use between frames. This is helpful to preserve antialiasing on drawn vector content.
			* @property padding
			* @type Number
			* @default 1
			**/
			this.padding = 1;
		
			/**
			 * A number from 0.01 to 0.99 that indicates what percentage of time the builder can use. This can be
			 * thought of as the number of seconds per second the builder will use. For example, with a timeSlice value of 0.3,
			 * the builder will run 20 times per second, using approximately 15ms per build (30% of available time, or 0.3s per second).
			 * Defaults to 0.3.
			 * @property timeSlice
			 * @type Number
			 * @default 0.3
			 **/
			this.timeSlice = 0.3;
		
			/**
			 * A value between 0 and 1 that indicates the progress of a build, or -1 if a build has not
			 * been initiated.
			 * @property progress
			 * @type Number
			 * @default -1
			 * @readonly
			 */
			this.progress = -1;
	
			/**
			 * A {{#crossLink "SpriteSheet/framerate:property"}}{{/crossLink}} value that will be passed to new {{#crossLink "SpriteSheet"}}{{/crossLink}} instances that are
			 * created. If no framerate is specified (or it is 0), then SpriteSheets will use the {{#crossLink "Ticker"}}{{/crossLink}}
			 * framerate.
			 * @property framerate
			 * @type Number
			 * @default 0
			 */
			this.framerate = framerate || 0;
		
		
		// private properties:
			/**
			 * @property _frames
			 * @protected
			 * @type Array
			 **/
			this._frames = [];
		
			/**
			 * @property _animations
			 * @protected
			 * @type Array
			 **/
			this._animations = {};
		
			/**
			 * @property _data
			 * @protected
			 * @type Array
			 **/
			this._data = null;
		
			/**
			 * @property _nextFrameIndex
			 * @protected
			 * @type Number
			 **/
			this._nextFrameIndex = 0;
		
			/**
			 * @property _index
			 * @protected
			 * @type Number
			 **/
			this._index = 0;
		
			/**
			 * @property _timerID
			 * @protected
			 * @type Number
			 **/
			this._timerID = null;
		
			/**
			 * @property _scale
			 * @protected
			 * @type Number
			 **/
			this._scale = 1;
		}
		var p = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// constants:
		SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
		SpriteSheetBuilder.ERR_RUNNING = "a build is already running";
	
	// events:
		/**
		 * Dispatched when a build completes.
		 * @event complete
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @since 0.6.0
		 */
	
		/**
		 * Dispatched when an asynchronous build has progress.
		 * @event progress
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Number} progress The current progress value (0-1).
		 * @since 0.6.0
		 */
	
	
	// public methods:
		/**
		 * Adds a frame to the {{#crossLink "SpriteSheet"}}{{/crossLink}}. Note that the frame will not be drawn until you
		 * call {{#crossLink "SpriteSheetBuilder/build"}}{{/crossLink}} method. The optional setup params allow you to have
		 * a function run immediately before the draw occurs. For example, this allows you to add a single source multiple
		 * times, but manipulate it or its children to change it to generate different frames.
		 *
		 * Note that the source's transformations (x, y, scale, rotate, alpha) will be ignored, except for regX/Y. To apply
		 * transforms to a source object and have them captured in the SpriteSheet, simply place it into a {{#crossLink "Container"}}{{/crossLink}}
		 * and pass in the Container as the source.
		 * @method addFrame
		 * @param {DisplayObject} source The source {{#crossLink "DisplayObject"}}{{/crossLink}}  to draw as the frame.
		 * @param {Rectangle} [sourceRect] A {{#crossLink "Rectangle"}}{{/crossLink}} defining the portion of the
		 * source to draw to the frame. If not specified, it will look for a `getBounds` method, bounds property, or
		 * `nominalBounds` property on the source to use. If one is not found, the frame will be skipped.
		 * @param {Number} [scale=1] Optional. The scale to draw this frame at. Default is 1.
		 * @param {Function} [setupFunction] A function to call immediately before drawing this frame. It will be called with two parameters: the source, and setupData.
		 * @param {Object} [setupData] Arbitrary setup data to pass to setupFunction as the second parameter.
		 * @return {Number} The index of the frame that was just added, or null if a sourceRect could not be determined.
		 **/
		p.addFrame = function(source, sourceRect, scale, setupFunction, setupData) {
			if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
			var rect = sourceRect||source.bounds||source.nominalBounds;
			if (!rect&&source.getBounds) { rect = source.getBounds(); }
			if (!rect) { return null; }
			scale = scale||1;
			return this._frames.push({source:source, sourceRect:rect, scale:scale, funct:setupFunction, data:setupData, index:this._frames.length, height:rect.height*scale})-1;
		};
	
		/**
		 * Adds an animation that will be included in the created {{#crossLink "SpriteSheet"}}{{/crossLink}}.
		 * @method addAnimation
		 * @param {String} name The name for the animation.
		 * @param {Array} frames An array of frame indexes that comprise the animation. Ex. [3,6,5] would describe an animation
		 * that played frame indexes 3, 6, and 5 in that order.
		 * @param {String} [next] Specifies the name of the animation to continue to after this animation ends. You can
		 * also pass false to have the animation stop when it ends. By default it will loop to the start of the same animation.
		 * @param {Number} [speed] Specifies a frame advance speed for this animation. For example, a value of 0.5 would
		 * cause the animation to advance every second tick. Note that earlier versions used `frequency` instead, which had
		 * the opposite effect.
		 **/
		p.addAnimation = function(name, frames, next, speed) {
			if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
			this._animations[name] = {frames:frames, next:next, speed:speed};
		};
	
		/**
		 * This will take a {{#crossLink "MovieClip"}}{{/crossLink}} instance, and add its frames and labels to this
		 * builder. Labels will be added as an animation running from the label index to the next label. For example, if
		 * there is a label named "foo" at frame 0 and a label named "bar" at frame 10, in a MovieClip with 15 frames, it
		 * will add an animation named "foo" that runs from frame index 0 to 9, and an animation named "bar" that runs from
		 * frame index 10 to 14.
		 *
		 * Note that this will iterate through the full MovieClip with {{#crossLink "MovieClip/actionsEnabled:property"}}{{/crossLink}}
		 * set to `false`, ending on the last frame.
		 * @method addMovieClip
		 * @param {MovieClip} source The source MovieClip instance to add to the SpriteSheet.
		 * @param {Rectangle} [sourceRect] A {{#crossLink "Rectangle"}}{{/crossLink}} defining the portion of the source to
		 * draw to the frame. If not specified, it will look for a {{#crossLink "DisplayObject/getBounds"}}{{/crossLink}}
		 * method, `frameBounds` Array, `bounds` property, or `nominalBounds` property on the source to use. If one is not
		 * found, the MovieClip will be skipped.
		 * @param {Number} [scale=1] The scale to draw the movie clip at.
		 * @param {Function} [setupFunction] A function to call immediately before drawing each frame. It will be called
		 * with three parameters: the source, setupData, and the frame index.
		 * @param {Object} [setupData] Arbitrary setup data to pass to setupFunction as the second parameter.
		 * @param {Function} [labelFunction] This method will be called for each MovieClip label that is added with four
		 * parameters: the label name, the source MovieClip instance, the starting frame index (in the movieclip timeline)
		 * and the end index. It must return a new name for the label/animation, or `false` to exclude the label.
		 **/
		p.addMovieClip = function(source, sourceRect, scale, setupFunction, setupData, labelFunction) {
			if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
			var rects = source.frameBounds;
			var rect = sourceRect||source.bounds||source.nominalBounds;
			if (!rect&&source.getBounds) { rect = source.getBounds(); }
			if (!rect && !rects) { return; }
	
			var i, l, baseFrameIndex = this._frames.length;
			var duration = source.timeline.duration;
			for (i=0; i<duration; i++) {
				var r = (rects&&rects[i]) ? rects[i] : rect;
				this.addFrame(source, r, scale, this._setupMovieClipFrame, {i:i, f:setupFunction, d:setupData});
			}
			var labels = source.timeline._labels;
			var lbls = [];
			for (var n in labels) {
				lbls.push({index:labels[n], label:n});
			}
			if (lbls.length) {
				lbls.sort(function(a,b){ return a.index-b.index; });
				for (i=0,l=lbls.length; i<l; i++) {
					var label = lbls[i].label;
					var start = baseFrameIndex+lbls[i].index;
					var end = baseFrameIndex+((i == l-1) ? duration : lbls[i+1].index);
					var frames = [];
					for (var j=start; j<end; j++) { frames.push(j); }
					if (labelFunction) {
						label = labelFunction(label, source, start, end);
						if (!label) { continue; }
					}
					this.addAnimation(label, frames, true); // for now, this loops all animations.
				}
			}
		};
	
		/**
		 * Builds a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance based on the current frames.
		 * @method build
		 * @return {SpriteSheet} The created SpriteSheet instance, or null if a build is already running or an error
		 * occurred.
		 **/
		p.build = function() {
			if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
			this._startBuild();
			while (this._drawNext()) {}
			this._endBuild();
			return this.spriteSheet;
		};
	
		/**
		 * Asynchronously builds a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance based on the current frames. It will
		 * run 20 times per second, using an amount of time defined by `timeSlice`. When it is complete it will call the
		 * specified callback.
		 * @method buildAsync
		 * @param {Number} [timeSlice] Sets the timeSlice property on this instance.
		 **/
		p.buildAsync = function(timeSlice) {
			if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
			this.timeSlice = timeSlice;
			this._startBuild();
			var _this = this;
			this._timerID = setTimeout(function() { _this._run(); }, 50-Math.max(0.01, Math.min(0.99, this.timeSlice||0.3))*50);
		};
	
		/**
		 * Stops the current asynchronous build.
		 * @method stopAsync
		 **/
		p.stopAsync = function() {
			clearTimeout(this._timerID);
			this._data = null;
		};
	
		/**
		 * SpriteSheetBuilder instances cannot be cloned.
		 * @method clone
		 **/
		p.clone = function() {
			throw("SpriteSheetBuilder cannot be cloned.");
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[SpriteSheetBuilder]";
		};
	
	
	// private methods:
		/**
		 * @method _startBuild
		 * @protected
		 **/
		p._startBuild = function() {
			var pad = this.padding||0;
			this.progress = 0;
			this.spriteSheet = null;
			this._index = 0;
			this._scale = this.scale;
			var dataFrames = [];
			this._data = {
				images: [],
				frames: dataFrames,
				framerate: this.framerate,
				animations: this._animations // TODO: should we "clone" _animations in case someone adds more animations after a build?
			};
	
			var frames = this._frames.slice();
			frames.sort(function(a,b) { return (a.height<=b.height) ? -1 : 1; });
	
			if (frames[frames.length-1].height+pad*2 > this.maxHeight) { throw SpriteSheetBuilder.ERR_DIMENSIONS; }
			var y=0, x=0;
			var img = 0;
			while (frames.length) {
				var o = this._fillRow(frames, y, img, dataFrames, pad);
				if (o.w > x) { x = o.w; }
				y += o.h;
				if (!o.h || !frames.length) {
					var canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");
					canvas.width = this._getSize(x,this.maxWidth);
					canvas.height = this._getSize(y,this.maxHeight);
					this._data.images[img] = canvas;
					if (!o.h) {
						x=y=0;
						img++;
					}
				}
			}
		};
		
		/**
		 * @method _setupMovieClipFrame
		 * @protected
		 * @return {Number} The width & height of the row.
		 **/
		p._setupMovieClipFrame = function(source, data) {
			var ae = source.actionsEnabled;
			source.actionsEnabled = false;
			source.gotoAndStop(data.i);
			source.actionsEnabled = ae;
			data.f&&data.f(source, data.d, data.i);
		};
	
		/**
		 * @method _getSize
		 * @protected
		 * @return {Number} The width & height of the row.
		 **/
		p._getSize = function(size,max) {
			var pow = 4;
			while (Math.pow(2,++pow) < size){}
			return Math.min(max,Math.pow(2,pow));
		};
	
		/**
		 * @method _fillRow
		 * @param {Array} frames
		 * @param {Number} y
		 * @param {HTMLImageElement} img
		 * @param {Object} dataFrames
		 * @param {Number} pad
		 * @protected
		 * @return {Number} The width & height of the row.
		 **/
		p._fillRow = function(frames, y, img, dataFrames, pad) {
			var w = this.maxWidth;
			var maxH = this.maxHeight;
			y += pad;
			var h = maxH-y;
			var x = pad;
			var height = 0;
			for (var i=frames.length-1; i>=0; i--) {
				var frame = frames[i];
				var sc = this._scale*frame.scale;
				var rect = frame.sourceRect;
				var source = frame.source;
				var rx = Math.floor(sc*rect.x-pad);
				var ry = Math.floor(sc*rect.y-pad);
				var rh = Math.ceil(sc*rect.height+pad*2);
				var rw = Math.ceil(sc*rect.width+pad*2);
				if (rw > w) { throw SpriteSheetBuilder.ERR_DIMENSIONS; }
				if (rh > h || x+rw > w) { continue; }
				frame.img = img;
				frame.rect = new createjs.Rectangle(x,y,rw,rh);
				height = height || rh;
				frames.splice(i,1);
				dataFrames[frame.index] = [x,y,rw,rh,img,Math.round(-rx+sc*source.regX-pad),Math.round(-ry+sc*source.regY-pad)];
				x += rw;
			}
			return {w:x, h:height};
		};
	
		/**
		 * @method _endBuild
		 * @protected
		 **/
		p._endBuild = function() {
			this.spriteSheet = new createjs.SpriteSheet(this._data);
			this._data = null;
			this.progress = 1;
			this.dispatchEvent("complete");
		};
	
		/**
		 * @method _run
		 * @protected
		 **/
		p._run = function() {
			var ts = Math.max(0.01, Math.min(0.99, this.timeSlice||0.3))*50;
			var t = (new Date()).getTime()+ts;
			var complete = false;
			while (t > (new Date()).getTime()) {
				if (!this._drawNext()) { complete = true; break; }
			}
			if (complete) {
				this._endBuild();
			} else {
				var _this = this;
				this._timerID = setTimeout(function() { _this._run(); }, 50-ts);
			}
			var p = this.progress = this._index/this._frames.length;
			if (this.hasEventListener("progress")) {
				var evt = new createjs.Event("progress");
				evt.progress = p;
				this.dispatchEvent(evt);
			}
		};
	
		/**
		 * @method _drawNext
		 * @protected
		 * @return Boolean Returns false if this is the last draw.
		 **/
		p._drawNext = function() {
			var frame = this._frames[this._index];
			var sc = frame.scale*this._scale;
			var rect = frame.rect;
			var sourceRect = frame.sourceRect;
			var canvas = this._data.images[frame.img];
			var ctx = canvas.getContext("2d");
			frame.funct&&frame.funct(frame.source, frame.data);
			ctx.save();
			ctx.beginPath();
			ctx.rect(rect.x, rect.y, rect.width, rect.height);
			ctx.clip();
			ctx.translate(Math.ceil(rect.x-sourceRect.x*sc), Math.ceil(rect.y-sourceRect.y*sc));
			ctx.scale(sc,sc);
			frame.source.draw(ctx); // display object will draw itself.
			ctx.restore();
			return (++this._index) < this._frames.length;
		};
	
	
		createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher");
	}());
	
	//##############################################################################
	// DOMElement.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * <b>This class is still experimental, and more advanced use is likely to be buggy. Please report bugs.</b>
		 *
		 * A DOMElement allows you to associate a HTMLElement with the display list. It will be transformed
		 * within the DOM as though it is child of the {{#crossLink "Container"}}{{/crossLink}} it is added to. However, it is
		 * not rendered to canvas, and as such will retain whatever z-index it has relative to the canvas (ie. it will be
		 * drawn in front of or behind the canvas).
		 *
		 * The position of a DOMElement is relative to their parent node in the DOM. It is recommended that
		 * the DOM Object be added to a div that also contains the canvas so that they share the same position
		 * on the page.
		 *
		 * DOMElement is useful for positioning HTML elements over top of canvas content, and for elements
		 * that you want to display outside the bounds of the canvas. For example, a tooltip with rich HTML
		 * content.
		 *
		 * <h4>Mouse Interaction</h4>
		 *
		 * DOMElement instances are not full EaselJS display objects, and do not participate in EaselJS mouse
		 * events or support methods like hitTest. To get mouse events from a DOMElement, you must instead add handlers to
		 * the htmlElement (note, this does not support EventDispatcher)
		 *
		 *      var domElement = new createjs.DOMElement(htmlElement);
		 *      domElement.htmlElement.onclick = function() {
		 *          console.log("clicked");
		 *      }
		 *
		 * @class DOMElement
		 * @extends DisplayObject
		 * @constructor
		 * @param {HTMLElement} htmlElement A reference or id for the DOM element to manage.
		 */
		function DOMElement(htmlElement) {
			this.DisplayObject_constructor();
			
			if (typeof(htmlElement)=="string") { htmlElement = document.getElementById(htmlElement); }
			this.mouseEnabled = false;
			
			var style = htmlElement.style;
			style.position = "absolute";
			style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%";
			
			
		// public properties:
			/**
			 * The DOM object to manage.
			 * @property htmlElement
			 * @type HTMLElement
			 */
			this.htmlElement = htmlElement;
		
		
		// private properties:
			/**
			 * @property _oldMtx
			 * @type Matrix2D
			 * @protected
			 */
			this._oldProps = null;
		}
		var p = createjs.extend(DOMElement, createjs.DisplayObject);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
	// public methods:
		/**
		 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
		 * This does not account for whether it would be visible within the boundaries of the stage.
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method isVisible
		 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
		 */
		p.isVisible = function() {
			return this.htmlElement != null;
		};
	
		/**
		 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
		 * Returns true if the draw was handled (useful for overriding functionality).
		 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
		 * @method draw
		 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
		 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
		 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
		 * into itself).
		 * @return {Boolean}
		 */
		p.draw = function(ctx, ignoreCache) {
			// this relies on the _tick method because draw isn't called if the parent is not visible.
			// the actual update happens in _handleDrawEnd
			return true;
		};
	
		/**
		 * Not applicable to DOMElement.
		 * @method cache
		 */
		p.cache = function() {};
	
		/**
		 * Not applicable to DOMElement.
		 * @method uncache
		 */
		p.uncache = function() {};
	
		/**
		 * Not applicable to DOMElement.
		 * @method updateCache
		 */
		p.updateCache = function() {};
	
		/**
		 * Not applicable to DOMElement.
		 * @method hitTest
		 */
		p.hitTest = function() {};
	
		/**
		 * Not applicable to DOMElement.
		 * @method localToGlobal
		 */
		p.localToGlobal = function() {};
	
		/**
		 * Not applicable to DOMElement.
		 * @method globalToLocal
		 */
		p.globalToLocal = function() {};
	
		/**
		 * Not applicable to DOMElement.
		 * @method localToLocal
		 */
		p.localToLocal = function() {};
	
		/**
		 * DOMElement cannot be cloned. Throws an error.
		 * @method clone
		 */
		p.clone = function() {
			throw("DOMElement cannot be cloned.")
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 */
		p.toString = function() {
			return "[DOMElement (name="+  this.name +")]";
		};
	
		/**
	     * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
		 * are not full EaselJS display objects and do not participate in EaselJS mouse events.
		 * @event click
		 */
	
	     /**
	     * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
	 	 * are not full EaselJS display objects and do not participate in EaselJS mouse events.
		 * @event dblClick
		 */
	
	     /**
	      * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
	 	  * are not full EaselJS display objects and do not participate in EaselJS mouse events.
		  * @event mousedown
		  */
	
	     /**
	      * The HTMLElement can listen for the mouseover event, not the DOMElement instance.
	      * Since DOMElement instances are not full EaselJS display objects and do not participate in EaselJS mouse events.
	      * @event mouseover
		  */
	
	     /**
	      * Not applicable to DOMElement.
		  * @event tick
		  */
	
	
	// private methods:
		/**
		 * @method _tick
		 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
		 * function.
		 * @protected
		 */
		p._tick = function(evtObj) {
			var stage = this.getStage();
			stage&&stage.on("drawend", this._handleDrawEnd, this, true);
			this.DisplayObject__tick(evtObj);
		};
		
		/**
		 * @method _handleDrawEnd
		 * @param {Event} evt
		 * @protected
		 */
		p._handleDrawEnd = function(evt) {
			var o = this.htmlElement;
			if (!o) { return; }
			var style = o.style;
			
			var props = this.getConcatenatedDisplayProps(this._props), mtx = props.matrix;
			
			var visibility = props.visible ? "visible" : "hidden";
			if (visibility != style.visibility) { style.visibility = visibility; }
			if (!props.visible) { return; }
			
			var oldProps = this._oldProps, oldMtx = oldProps&&oldProps.matrix;
			var n = 10000; // precision
			
			if (!oldMtx || !oldMtx.equals(mtx)) {
				var str = "matrix(" + (mtx.a*n|0)/n +","+ (mtx.b*n|0)/n +","+ (mtx.c*n|0)/n +","+ (mtx.d*n|0)/n +","+ (mtx.tx+0.5|0);
				style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str +","+ (mtx.ty+0.5|0) +")";
				style.MozTransform = str +"px,"+ (mtx.ty+0.5|0) +"px)";
				if (!oldProps) { oldProps = this._oldProps = new createjs.DisplayProps(true, NaN); }
				oldProps.matrix.copy(mtx);
			}
			
			if (oldProps.alpha != props.alpha) {
				style.opacity = ""+(props.alpha*n|0)/n;
				oldProps.alpha = props.alpha;
			}
		};
	
	
		createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject");
	}());
	
	//##############################################################################
	// Filter.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Base class that all filters should inherit from. Filters need to be applied to objects that have been cached using
		 * the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method. If an object changes, please cache it again, or use
		 * {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}}. Note that the filters must be applied before caching.
		 *
		 * <h4>Example</h4>
		 *
		 *      myInstance.filters = [
		 *          new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
		 *          new createjs.BlurFilter(5, 5, 10)
		 *      ];
		 *      myInstance.cache(0,0, 100, 100);
		 *
		 * Note that each filter can implement a {{#crossLink "Filter/getBounds"}}{{/crossLink}} method, which returns the
		 * margins that need to be applied in order to fully display the filter. For example, the {{#crossLink "BlurFilter"}}{{/crossLink}}
		 * will cause an object to feather outwards, resulting in a margin around the shape.
		 *
		 * <h4>EaselJS Filters</h4>
		 * EaselJS comes with a number of pre-built filters:
		 * <ul><li>{{#crossLink "AlphaMapFilter"}}{{/crossLink}} : Map a greyscale image to the alpha channel of a display object</li>
		 *      <li>{{#crossLink "AlphaMaskFilter"}}{{/crossLink}}: Map an image's alpha channel to the alpha channel of a display object</li>
		 *      <li>{{#crossLink "BlurFilter"}}{{/crossLink}}: Apply vertical and horizontal blur to a display object</li>
		 *      <li>{{#crossLink "ColorFilter"}}{{/crossLink}}: Color transform a display object</li>
		 *      <li>{{#crossLink "ColorMatrixFilter"}}{{/crossLink}}: Transform an image using a {{#crossLink "ColorMatrix"}}{{/crossLink}}</li>
		 * </ul>
		 *
		 * @class Filter
		 * @constructor
		 **/
		function Filter() {}
		var p = Filter.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// public methods:
		/**
		 * Provides padding values for this filter. That is, how much the filter will extend the visual bounds of an object it is applied to.
		 * @method getBounds
		 * @param {Rectangle} [rect] If specified, the provided Rectangle instance will be expanded by the padding amounts and returned.
		 * @return {Rectangle} If a `rect` param was provided, it is returned. If not, either a new rectangle with the padding values, or null if no padding is required for this filter.
		 **/
		p.getBounds = function(rect) {
			return rect;
		};
	
		/**
		 * Applies the filter to the specified context.
		 * @method applyFilter
		 * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
		 * @param {Number} x The x position to use for the source rect.
		 * @param {Number} y The y position to use for the source rect.
		 * @param {Number} width The width to use for the source rect.
		 * @param {Number} height The height to use for the source rect.
		 * @param {CanvasRenderingContext2D} [targetCtx] The 2D context to draw the result to. Defaults to the context passed to ctx.
		 * @param {Number} [targetX] The x position to draw the result to. Defaults to the value passed to x.
		 * @param {Number} [targetY] The y position to draw the result to. Defaults to the value passed to y.
		 * @return {Boolean} If the filter was applied successfully.
		 **/
		p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
			// this is the default behaviour because most filters access pixel data. It is overridden when not needed.
			targetCtx = targetCtx || ctx;
			if (targetX == null) { targetX = x; }
			if (targetY == null) { targetY = y; }
			try {
				var imageData = ctx.getImageData(x, y, width, height);
			} catch (e) {
				return false;
			}
			if (this._applyFilter(imageData)) {
				targetCtx.putImageData(imageData, targetX, targetY);
				return true;
			}
			return false;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Filter]";
		};
	
		/**
		 * Returns a clone of this Filter instance.
		 * @method clone
		 * @return {Filter} A clone of the current Filter instance.
		 **/
		p.clone = function() {
			return new Filter();
		};
		
	// private methods:
		/**
		 * @method _applyFilter
		 * @param {ImageData} imageData Target ImageData instance.
		 * @return {Boolean}
		 **/
		p._applyFilter = function(imageData) { return true; };
	
	
		createjs.Filter = Filter;
	}());
	
	//##############################################################################
	// BlurFilter.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Applies a box blur to DisplayObjects. Note that this filter is fairly CPU intensive, particularly if the quality is
		 * set higher than 1.
		 *
		 * <h4>Example</h4>
		 * This example creates a red circle, and then applies a 5 pixel blur to it. It uses the {{#crossLink "Filter/getBounds"}}{{/crossLink}}
		 * method to account for the spread that the blur causes.
		 *
		 *      var shape = new createjs.Shape().set({x:100,y:100});
		 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
		 *
		 *      var blurFilter = new createjs.BlurFilter(5, 5, 1);
		 *      shape.filters = [blurFilter];
		 *      var bounds = blurFilter.getBounds();
		 *
		 *      shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
		 *
		 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
		 * @class BlurFilter
		 * @extends Filter
		 * @constructor
		 * @param {Number} [blurX=0] The horizontal blur radius in pixels.
		 * @param {Number} [blurY=0] The vertical blur radius in pixels.
		 * @param {Number} [quality=1] The number of blur iterations.
		 **/
		function BlurFilter( blurX, blurY, quality) {
			if ( isNaN(blurX) || blurX < 0 ) blurX = 0;
			if ( isNaN(blurY) || blurY < 0 ) blurY = 0;
			if ( isNaN(quality) || quality < 1  ) quality = 1;
	
	
			// public properties:
			/**
			 * Horizontal blur radius in pixels
			 * @property blurX
			 * @default 0
			 * @type Number
			 **/
			this.blurX = blurX | 0;
	
			/**
			 * Vertical blur radius in pixels
			 * @property blurY
			 * @default 0
			 * @type Number
			 **/
			this.blurY = blurY | 0;
	
			/**
			 * Number of blur iterations. For example, a value of 1 will produce a rough blur. A value of 2 will produce a
			 * smoother blur, but take twice as long to run.
			 * @property quality
			 * @default 1
			 * @type Number
			 **/
			this.quality = quality | 0;
		}
		var p = createjs.extend(BlurFilter, createjs.Filter);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
	// constants:
		/**
		 * Array of multiply values for blur calculations.
		 * @property MUL_TABLE
		 * @type Array
		 * @protected
		 * @static
		 **/
		BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
	
		/**
		 * Array of shift values for blur calculations.
		 * @property SHG_TABLE
		 * @type Array
		 * @protected
		 * @static
		 **/
		BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
	
	// public methods:
		/** docced in super class **/
		p.getBounds = function (rect) {
			var x = this.blurX|0, y = this.blurY| 0;
			if (x <= 0 && y <= 0) { return rect; }
			var q = Math.pow(this.quality, 0.2);
			return (rect || new createjs.Rectangle()).pad(x*q+1,y*q+1,x*q+1,y*q+1);
		};
	
		/** docced in super class **/
		p.clone = function() {
			return new BlurFilter(this.blurX, this.blurY, this.quality);
		};
	
		/** docced in super class **/
		p.toString = function() {
			return "[BlurFilter]";
		};
	
	
	// private methods:
	
		/** docced in super class **/
		p._applyFilter = function (imageData) {
	
			var radiusX = this.blurX >> 1;
			if (isNaN(radiusX) || radiusX < 0) return false;
			var radiusY = this.blurY >> 1;
			if (isNaN(radiusY) || radiusY < 0) return false;
			if (radiusX == 0 && radiusY == 0) return false;
	
			var iterations = this.quality;
			if (isNaN(iterations) || iterations < 1) iterations = 1;
			iterations |= 0;
			if (iterations > 3) iterations = 3;
			if (iterations < 1) iterations = 1;
	
			var px = imageData.data;
			var x=0, y=0, i=0, p=0, yp=0, yi=0, yw=0, r=0, g=0, b=0, a=0, pr=0, pg=0, pb=0, pa=0;
	
			var divx = (radiusX + radiusX + 1) | 0;
			var divy = (radiusY + radiusY + 1) | 0;
			var w = imageData.width | 0;
			var h = imageData.height | 0;
	
			var w1 = (w - 1) | 0;
			var h1 = (h - 1) | 0;
			var rxp1 = (radiusX + 1) | 0;
			var ryp1 = (radiusY + 1) | 0;
	
			var ssx = {r:0,b:0,g:0,a:0};
			var sx = ssx;
			for ( i = 1; i < divx; i++ )
			{
				sx = sx.n = {r:0,b:0,g:0,a:0};
			}
			sx.n = ssx;
	
			var ssy = {r:0,b:0,g:0,a:0};
			var sy = ssy;
			for ( i = 1; i < divy; i++ )
			{
				sy = sy.n = {r:0,b:0,g:0,a:0};
			}
			sy.n = ssy;
	
			var si = null;
	
	
			var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
			var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
			var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
			var sty = BlurFilter.SHG_TABLE[radiusY] | 0;
	
			while (iterations-- > 0) {
	
				yw = yi = 0;
				var ms = mtx;
				var ss = stx;
				for (y = h; --y > -1;) {
					r = rxp1 * (pr = px[(yi) | 0]);
					g = rxp1 * (pg = px[(yi + 1) | 0]);
					b = rxp1 * (pb = px[(yi + 2) | 0]);
					a = rxp1 * (pa = px[(yi + 3) | 0]);
	
					sx = ssx;
	
					for( i = rxp1; --i > -1; )
					{
						sx.r = pr;
						sx.g = pg;
						sx.b = pb;
						sx.a = pa;
						sx = sx.n;
					}
	
					for( i = 1; i < rxp1; i++ )
					{
						p = (yi + ((w1 < i ? w1 : i) << 2)) | 0;
						r += ( sx.r = px[p]);
						g += ( sx.g = px[p+1]);
						b += ( sx.b = px[p+2]);
						a += ( sx.a = px[p+3]);
	
						sx = sx.n;
					}
	
					si = ssx;
					for ( x = 0; x < w; x++ )
					{
						px[yi++] = (r * ms) >>> ss;
						px[yi++] = (g * ms) >>> ss;
						px[yi++] = (b * ms) >>> ss;
						px[yi++] = (a * ms) >>> ss;
	
						p = ((yw + ((p = x + radiusX + 1) < w1 ? p : w1)) << 2);
	
						r -= si.r - ( si.r = px[p]);
						g -= si.g - ( si.g = px[p+1]);
						b -= si.b - ( si.b = px[p+2]);
						a -= si.a - ( si.a = px[p+3]);
	
						si = si.n;
	
					}
					yw += w;
				}
	
				ms = mty;
				ss = sty;
				for (x = 0; x < w; x++) {
					yi = (x << 2) | 0;
	
					r = (ryp1 * (pr = px[yi])) | 0;
					g = (ryp1 * (pg = px[(yi + 1) | 0])) | 0;
					b = (ryp1 * (pb = px[(yi + 2) | 0])) | 0;
					a = (ryp1 * (pa = px[(yi + 3) | 0])) | 0;
	
					sy = ssy;
					for( i = 0; i < ryp1; i++ )
					{
						sy.r = pr;
						sy.g = pg;
						sy.b = pb;
						sy.a = pa;
						sy = sy.n;
					}
	
					yp = w;
	
					for( i = 1; i <= radiusY; i++ )
					{
						yi = ( yp + x ) << 2;
	
						r += ( sy.r = px[yi]);
						g += ( sy.g = px[yi+1]);
						b += ( sy.b = px[yi+2]);
						a += ( sy.a = px[yi+3]);
	
						sy = sy.n;
	
						if( i < h1 )
						{
							yp += w;
						}
					}
	
					yi = x;
					si = ssy;
					if ( iterations > 0 )
					{
						for ( y = 0; y < h; y++ )
						{
							p = yi << 2;
							px[p+3] = pa =(a * ms) >>> ss;
							if ( pa > 0 )
							{
								px[p]   = ((r * ms) >>> ss );
								px[p+1] = ((g * ms) >>> ss );
								px[p+2] = ((b * ms) >>> ss );
							} else {
								px[p] = px[p+1] = px[p+2] = 0
							}
	
							p = ( x + (( ( p = y + ryp1) < h1 ? p : h1 ) * w )) << 2;
	
							r -= si.r - ( si.r = px[p]);
							g -= si.g - ( si.g = px[p+1]);
							b -= si.b - ( si.b = px[p+2]);
							a -= si.a - ( si.a = px[p+3]);
	
							si = si.n;
	
							yi += w;
						}
					} else {
						for ( y = 0; y < h; y++ )
						{
							p = yi << 2;
							px[p+3] = pa =(a * ms) >>> ss;
							if ( pa > 0 )
							{
								pa = 255 / pa;
								px[p]   = ((r * ms) >>> ss ) * pa;
								px[p+1] = ((g * ms) >>> ss ) * pa;
								px[p+2] = ((b * ms) >>> ss ) * pa;
							} else {
								px[p] = px[p+1] = px[p+2] = 0
							}
	
							p = ( x + (( ( p = y + ryp1) < h1 ? p : h1 ) * w )) << 2;
	
							r -= si.r - ( si.r = px[p]);
							g -= si.g - ( si.g = px[p+1]);
							b -= si.b - ( si.b = px[p+2]);
							a -= si.a - ( si.a = px[p+3]);
	
							si = si.n;
	
							yi += w;
						}
					}
				}
	
			}
			return true;
		};
	
		createjs.BlurFilter = createjs.promote(BlurFilter, "Filter");
	}());
	
	//##############################################################################
	// AlphaMapFilter.js
	//##############################################################################
	
	this.createjs = this.createjs || {};
	
	(function () {
		"use strict";
		
		
	// constructor:
		/**
		 * Applies a greyscale alpha map image (or canvas) to the target, such that the alpha channel of the result will
		 * be copied from the red channel of the map, and the RGB channels will be copied from the target.
		 *
		 * Generally, it is recommended that you use {{#crossLink "AlphaMaskFilter"}}{{/crossLink}}, because it has much
		 * better performance.
		 *
		 * <h4>Example</h4>
		 * This example draws a red->blue box, caches it, and then uses the cache canvas as an alpha map on a 100x100 image.
		 *
		 *       var box = new createjs.Shape();
		 *       box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
		 *       box.graphics.drawRect(0, 0, 100, 100);
		 *       box.cache(0, 0, 100, 100);
		 *
		 *       var bmp = new createjs.Bitmap("path/to/image.jpg");
		 *       bmp.filters = [
		 *           new createjs.AlphaMapFilter(box.cacheCanvas)
		 *       ];
		 *       bmp.cache(0, 0, 100, 100);
		 *       stage.addChild(bmp);
		 *
		 * See {{#crossLink "Filter"}}{{/crossLink}} for more information on applying filters.
		 * @class AlphaMapFilter
		 * @extends Filter
		 * @constructor
		 * @param {HTMLImageElement|HTMLCanvasElement} alphaMap The greyscale image (or canvas) to use as the alpha value for the
		 * result. This should be exactly the same dimensions as the target.
		 **/
		function AlphaMapFilter(alphaMap) {
		
		
		// public properties:
			/**
			 * The greyscale image (or canvas) to use as the alpha value for the result. This should be exactly the same
			 * dimensions as the target.
			 * @property alphaMap
			 * @type HTMLImageElement|HTMLCanvasElement
			 **/
			this.alphaMap = alphaMap;
			
			
		// private properties:
			/**
			 * @property _alphaMap
			 * @protected
			 * @type HTMLImageElement|HTMLCanvasElement
			 **/
			this._alphaMap = null;
			
			/**
			 * @property _mapData
			 * @protected
			 * @type Uint8ClampedArray
			 **/
			this._mapData = null;
		}
		var p = createjs.extend(AlphaMapFilter, createjs.Filter);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
	// public methods:
		/** docced in super class **/
		p.clone = function () {
			var o = new AlphaMapFilter(this.alphaMap);
			o._alphaMap = this._alphaMap;
			o._mapData = this._mapData;
			return o;
		};
	
		/** docced in super class **/
		p.toString = function () {
			return "[AlphaMapFilter]";
		};
	
	
	// private methods:
		/** docced in super class **/
		p._applyFilter = function (imageData) {
			if (!this.alphaMap) { return true; }
			if (!this._prepAlphaMap()) { return false; }
			
			// TODO: update to support scenarios where the target has different dimensions.
			var data = imageData.data;
			var map = this._mapData;
			for(var i=0, l=data.length; i<l; i += 4) { data[i + 3] = map[i] || 0; }
			
			return true;
		};
	
		/**
		 * @method _prepAlphaMap
		 * @protected
		 **/
		p._prepAlphaMap = function () {
			if (!this.alphaMap) { return false; }
			if (this.alphaMap == this._alphaMap && this._mapData) { return true; }
	
			this._mapData = null;
			var map = this._alphaMap = this.alphaMap;
			var canvas = map;
			var ctx;
			if (map instanceof HTMLCanvasElement) {
				ctx = canvas.getContext("2d");
			} else {
				canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
				canvas.width = map.width;
				canvas.height = map.height;
				ctx = canvas.getContext("2d");
				ctx.drawImage(map, 0, 0);
			}
	
			try {
				var imgData = ctx.getImageData(0, 0, map.width, map.height);
			} catch (e) {
				//if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
				return false;
			}
			
			this._mapData = imgData.data;
			return true;
		};
	
	
		createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter");
	}());
	
	//##############################################################################
	// AlphaMaskFilter.js
	//##############################################################################
	
	this.createjs = this.createjs || {};
	
	(function () {
		"use strict";
	
	
	// constructor:
		/**
		 * Applies the alpha from the mask image (or canvas) to the target, such that the alpha channel of the result will
		 * be derived from the mask, and the RGB channels will be copied from the target. This can be used, for example, to
		 * apply an alpha mask to a display object. This can also be used to combine a JPG compressed RGB image with a PNG32
		 * alpha mask, which can result in a much smaller file size than a single PNG32 containing ARGB.
		 *
		 * <b>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters correctly.</b>
		 *
		 * <h4>Example</h4>
		 * This example draws a gradient box, then caches it and uses the "cacheCanvas" as the alpha mask on a 100x100 image.
		 *
		 *      var box = new createjs.Shape();
		 *      box.graphics.beginLinearGradientFill(["#000000", "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
		 *      box.graphics.drawRect(0, 0, 100, 100);
		 *      box.cache(0, 0, 100, 100);
		 *
		 *      var bmp = new createjs.Bitmap("path/to/image.jpg");
		 *      bmp.filters = [
		 *          new createjs.AlphaMaskFilter(box.cacheCanvas)
		 *      ];
		 *      bmp.cache(0, 0, 100, 100);
		 *
		 * See {{#crossLink "Filter"}}{{/crossLink}} for more information on applying filters.
		 * @class AlphaMaskFilter
		 * @extends Filter
		 * @constructor
		 * @param {HTMLImageElement|HTMLCanvasElement} mask
		 **/
		function AlphaMaskFilter(mask) {
		
		
		// public properties:
			/**
			 * The image (or canvas) to use as the mask.
			 * @property mask
			 * @type HTMLImageElement|HTMLCanvasElement
			 **/
			this.mask = mask;
		}
		var p = createjs.extend(AlphaMaskFilter, createjs.Filter);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
		
	
	// public methods:
		/**
		 * Applies the filter to the specified context.
		 *
		 * <strong>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters
		 * correctly.</strong>
		 * @method applyFilter
		 * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
		 * @param {Number} x The x position to use for the source rect.
		 * @param {Number} y The y position to use for the source rect.
		 * @param {Number} width The width to use for the source rect.
		 * @param {Number} height The height to use for the source rect.
		 * @param {CanvasRenderingContext2D} [targetCtx] NOT SUPPORTED IN THIS FILTER. The 2D context to draw the result to. Defaults to the context passed to ctx.
		 * @param {Number} [targetX] NOT SUPPORTED IN THIS FILTER. The x position to draw the result to. Defaults to the value passed to x.
		 * @param {Number} [targetY] NOT SUPPORTED IN THIS FILTER. The y position to draw the result to. Defaults to the value passed to y.
		 * @return {Boolean} If the filter was applied successfully.
		 **/
		p.applyFilter = function (ctx, x, y, width, height, targetCtx, targetX, targetY) {
			if (!this.mask) { return true; }
			targetCtx = targetCtx || ctx;
			if (targetX == null) { targetX = x; }
			if (targetY == null) { targetY = y; }
	
			targetCtx.save();
			if (ctx != targetCtx) {
				// TODO: support targetCtx and targetX/Y
				// clearRect, then draw the ctx in?
				return false;
			}
	
			targetCtx.globalCompositeOperation = "destination-in";
			targetCtx.drawImage(this.mask, targetX, targetY);
			targetCtx.restore();
			return true;
		};
	
		/** docced in super class **/
		p.clone = function () {
			return new AlphaMaskFilter(this.mask);
		};
	
		/** docced in super class **/
		p.toString = function () {
			return "[AlphaMaskFilter]";
		};
	
	
		createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter");
	}());
	
	//##############################################################################
	// ColorFilter.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Applies a color transform to DisplayObjects.
		 *
		 * <h4>Example</h4>
		 * This example draws a red circle, and then transforms it to Blue. This is accomplished by multiplying all the channels
		 * to 0 (except alpha, which is set to 1), and then adding 255 to the blue channel.
		 *
		 *      var shape = new createjs.Shape().set({x:100,y:100});
		 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
		 *
		 *      shape.filters = [
		 *          new createjs.ColorFilter(0,0,0,1, 0,0,255,0)
		 *      ];
		 *      shape.cache(-50, -50, 100, 100);
		 *
		 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
		 * @class ColorFilter
		 * @param {Number} [redMultiplier=1] The amount to multiply against the red channel. This is a range between 0 and 1.
		 * @param {Number} [greenMultiplier=1] The amount to multiply against the green channel. This is a range between 0 and 1.
		 * @param {Number} [blueMultiplier=1] The amount to multiply against the blue channel. This is a range between 0 and 1.
		 * @param {Number} [alphaMultiplier=1] The amount to multiply against the alpha channel. This is a range between 0 and 1.
		 * @param {Number} [redOffset=0] The amount to add to the red channel after it has been multiplied. This is a range
		 * between -255 and 255.
		 * @param {Number} [greenOffset=0] The amount to add to the green channel after it has been multiplied. This is a range
		  * between -255 and 255.
		 * @param {Number} [blueOffset=0] The amount to add to the blue channel after it has been multiplied. This is a range
		  * between -255 and 255.
		 * @param {Number} [alphaOffset=0] The amount to add to the alpha channel after it has been multiplied. This is a range
		  * between -255 and 255.
		 * @constructor
		 * @extends Filter
		 **/
		function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
			
		
		// public properties:
			/**
			 * Red channel multiplier.
			 * @property redMultiplier
			 * @type Number
			 **/
			this.redMultiplier = redMultiplier != null ? redMultiplier : 1;
		
			/**
			 * Green channel multiplier.
			 * @property greenMultiplier
			 * @type Number
			 **/
			this.greenMultiplier = greenMultiplier != null ? greenMultiplier : 1;
		
			/**
			 * Blue channel multiplier.
			 * @property blueMultiplier
			 * @type Number
			 **/
			this.blueMultiplier = blueMultiplier != null ? blueMultiplier : 1;
		
			/**
			 * Alpha channel multiplier.
			 * @property alphaMultiplier
			 * @type Number
			 **/
			this.alphaMultiplier = alphaMultiplier != null ? alphaMultiplier : 1;
		
			/**
			 * Red channel offset (added to value).
			 * @property redOffset
			 * @type Number
			 **/
			this.redOffset = redOffset || 0;
		
			/**
			 * Green channel offset (added to value).
			 * @property greenOffset
			 * @type Number
			 **/
			this.greenOffset = greenOffset || 0;
		
			/**
			 * Blue channel offset (added to value).
			 * @property blueOffset
			 * @type Number
			 **/
			this.blueOffset = blueOffset || 0;
		
			/**
			 * Alpha channel offset (added to value).
			 * @property alphaOffset
			 * @type Number
			 **/
			this.alphaOffset = alphaOffset || 0;
		}
		var p = createjs.extend(ColorFilter, createjs.Filter);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
	// public methods:
		/** docced in super class **/
		p.toString = function() {
			return "[ColorFilter]";
		};
	
		/** docced in super class **/
		p.clone = function() {
			return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
		};
		
	
	// private methods:
		/** docced in super class **/
		p._applyFilter = function(imageData) {
			var data = imageData.data;
			var l = data.length;
			for (var i=0; i<l; i+=4) {
				data[i] = data[i]*this.redMultiplier+this.redOffset;
				data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
				data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
				data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;
			}
			return true;
		};
	
	
		createjs.ColorFilter = createjs.promote(ColorFilter, "Filter");
	}());
	
	//##############################################################################
	// ColorMatrix.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Provides helper functions for assembling a matrix for use with the {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}.
		 * Most methods return the instance to facilitate chained calls.
		 *
		 * <h4>Example</h4>
		 *
		 *      myColorMatrix.adjustHue(20).adjustBrightness(50);
		 *
		 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters, or {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}
		 * for an example of how to use ColorMatrix to change a DisplayObject's color.
		 * @class ColorMatrix
		 * @param {Number} brightness
		 * @param {Number} contrast
		 * @param {Number} saturation
		 * @param {Number} hue
		 * @constructor
		 **/
		function ColorMatrix(brightness, contrast, saturation, hue) {
			this.setColor(brightness, contrast, saturation, hue);
		}
		var p = ColorMatrix.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// constants:
		/**
		 * Array of delta values for contrast calculations.
		 * @property DELTA_INDEX
		 * @type Array
		 * @protected
		 * @static
		 **/
		ColorMatrix.DELTA_INDEX = [
			0,    0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1,  0.11,
			0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
			0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
			0.44, 0.46, 0.48, 0.5,  0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
			0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
			1.0,  1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
			1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0,  2.12, 2.25,
			2.37, 2.50, 2.62, 2.75, 2.87, 3.0,  3.2,  3.4,  3.6,  3.8,
			4.0,  4.3,  4.7,  4.9,  5.0,  5.5,  6.0,  6.5,  6.8,  7.0,
			7.3,  7.5,  7.8,  8.0,  8.4,  8.7,  9.0,  9.4,  9.6,  9.8,
			10.0
		];
	
		/**
		 * Identity matrix values.
		 * @property IDENTITY_MATRIX
		 * @type Array
		 * @protected
		 * @static
		 **/
		ColorMatrix.IDENTITY_MATRIX = [
			1,0,0,0,0,
			0,1,0,0,0,
			0,0,1,0,0,
			0,0,0,1,0,
			0,0,0,0,1
		];
	
		/**
		 * The constant length of a color matrix.
		 * @property LENGTH
		 * @type Number
		 * @protected
		 * @static
		 **/
		ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;
	
	
	// public methods:
		/**
		 * Resets the instance with the specified values.
		 * @method setColor
		 * @param {Number} brightness
		 * @param {Number} contrast
		 * @param {Number} saturation
		 * @param {Number} hue
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 */
		p.setColor = function(brightness,contrast,saturation,hue) {
			return this.reset().adjustColor(brightness,contrast,saturation,hue);
		};
	
		/**
		 * Resets the matrix to identity values.
		 * @method reset
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 */
		p.reset = function() {
			return this.copy(ColorMatrix.IDENTITY_MATRIX);
		};
	
		/**
		 * Shortcut method to adjust brightness, contrast, saturation and hue.
		 * Equivalent to calling adjustHue(hue), adjustContrast(contrast),
		 * adjustBrightness(brightness), adjustSaturation(saturation), in that order.
		 * @method adjustColor
		 * @param {Number} brightness
		 * @param {Number} contrast
		 * @param {Number} saturation
		 * @param {Number} hue
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.adjustColor = function(brightness,contrast,saturation,hue) {
			this.adjustHue(hue);
			this.adjustContrast(contrast);
			this.adjustBrightness(brightness);
			return this.adjustSaturation(saturation);
		};
	
		/**
		 * Adjusts the brightness of pixel color by adding the specified value to the red, green and blue channels.
		 * Positive values will make the image brighter, negative values will make it darker.
		 * @method adjustBrightness
		 * @param {Number} value A value between -255 & 255 that will be added to the RGB channels.
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.adjustBrightness = function(value) {
			if (value == 0 || isNaN(value)) { return this; }
			value = this._cleanValue(value,255);
			this._multiplyMatrix([
				1,0,0,0,value,
				0,1,0,0,value,
				0,0,1,0,value,
				0,0,0,1,0,
				0,0,0,0,1
			]);
			return this;
		};
	
		/**
		 * Adjusts the contrast of pixel color.
		 * Positive values will increase contrast, negative values will decrease contrast.
		 * @method adjustContrast
		 * @param {Number} value A value between -100 & 100.
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.adjustContrast = function(value) {
			if (value == 0 || isNaN(value)) { return this; }
			value = this._cleanValue(value,100);
			var x;
			if (value<0) {
				x = 127+value/100*127;
			} else {
				x = value%1;
				if (x == 0) {
					x = ColorMatrix.DELTA_INDEX[value];
				} else {
					x = ColorMatrix.DELTA_INDEX[(value<<0)]*(1-x)+ColorMatrix.DELTA_INDEX[(value<<0)+1]*x; // use linear interpolation for more granularity.
				}
				x = x*127+127;
			}
			this._multiplyMatrix([
				x/127,0,0,0,0.5*(127-x),
				0,x/127,0,0,0.5*(127-x),
				0,0,x/127,0,0.5*(127-x),
				0,0,0,1,0,
				0,0,0,0,1
			]);
			return this;
		};
	
		/**
		 * Adjusts the color saturation of the pixel.
		 * Positive values will increase saturation, negative values will decrease saturation (trend towards greyscale).
		 * @method adjustSaturation
		 * @param {Number} value A value between -100 & 100.
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.adjustSaturation = function(value) {
			if (value == 0 || isNaN(value)) { return this; }
			value = this._cleanValue(value,100);
			var x = 1+((value > 0) ? 3*value/100 : value/100);
			var lumR = 0.3086;
			var lumG = 0.6094;
			var lumB = 0.0820;
			this._multiplyMatrix([
				lumR*(1-x)+x,lumG*(1-x),lumB*(1-x),0,0,
				lumR*(1-x),lumG*(1-x)+x,lumB*(1-x),0,0,
				lumR*(1-x),lumG*(1-x),lumB*(1-x)+x,0,0,
				0,0,0,1,0,
				0,0,0,0,1
			]);
			return this;
		};
	
	
		/**
		 * Adjusts the hue of the pixel color.
		 * @method adjustHue
		 * @param {Number} value A value between -180 & 180.
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.adjustHue = function(value) {
			if (value == 0 || isNaN(value)) { return this; }
			value = this._cleanValue(value,180)/180*Math.PI;
			var cosVal = Math.cos(value);
			var sinVal = Math.sin(value);
			var lumR = 0.213;
			var lumG = 0.715;
			var lumB = 0.072;
			this._multiplyMatrix([
				lumR+cosVal*(1-lumR)+sinVal*(-lumR),lumG+cosVal*(-lumG)+sinVal*(-lumG),lumB+cosVal*(-lumB)+sinVal*(1-lumB),0,0,
				lumR+cosVal*(-lumR)+sinVal*(0.143),lumG+cosVal*(1-lumG)+sinVal*(0.140),lumB+cosVal*(-lumB)+sinVal*(-0.283),0,0,
				lumR+cosVal*(-lumR)+sinVal*(-(1-lumR)),lumG+cosVal*(-lumG)+sinVal*(lumG),lumB+cosVal*(1-lumB)+sinVal*(lumB),0,0,
				0,0,0,1,0,
				0,0,0,0,1
			]);
			return this;
		};
	
		/**
		 * Concatenates (multiplies) the specified matrix with this one.
		 * @method concat
		 * @param {Array} matrix An array or ColorMatrix instance.
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.concat = function(matrix) {
			matrix = this._fixMatrix(matrix);
			if (matrix.length != ColorMatrix.LENGTH) { return this; }
			this._multiplyMatrix(matrix);
			return this;
		};
	
		/**
		 * Returns a clone of this ColorMatrix.
		 * @method clone
		 * @return {ColorMatrix} A clone of this ColorMatrix.
		 **/
		p.clone = function() {
			return (new ColorMatrix()).copy(this);
		};
	
		/**
		 * Return a length 25 (5x5) array instance containing this matrix's values.
		 * @method toArray
		 * @return {Array} An array holding this matrix's values.
		 **/
		p.toArray = function() {
			var arr = [];
			for (var i= 0, l=ColorMatrix.LENGTH; i<l; i++) {
				arr[i] = this[i];
			}
			return arr;
		};
	
		/**
		 * Copy the specified matrix's values to this matrix.
		 * @method copy
		 * @param {Array} matrix An array or ColorMatrix instance.
		 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
		 * @chainable
		 **/
		p.copy = function(matrix) {
			var l = ColorMatrix.LENGTH;
			for (var i=0;i<l;i++) {
				this[i] = matrix[i];
			}
			return this;
		};
		
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[ColorMatrix]";
		};
	
	
	// private methods:
		/**
		 * @method _multiplyMatrix
		 * @param {Array} matrix
		 * @protected
		 **/
		p._multiplyMatrix = function(matrix) {
			var i, j, k, col = [];
	
			for (i=0;i<5;i++) {
				for (j=0;j<5;j++) {
					col[j] = this[j+i*5];
				}
				for (j=0;j<5;j++) {
					var val=0;
					for (k=0;k<5;k++) {
						val += matrix[j+k*5]*col[k];
					}
					this[j+i*5] = val;
				}
			}
		};
	
		/**
		 * Make sure values are within the specified range, hue has a limit of 180, brightness is 255, others are 100.
		 * @method _cleanValue
		 * @param {Number} value The raw number
		 * @param {Number} limit The maximum that the number can be. The minimum is the limit * -1.
		 * @protected
		 **/
		p._cleanValue = function(value, limit) {
			return Math.min(limit,Math.max(-limit,value));
		};
	
		/**
		 * Makes sure matrixes are 5x5 (25 long).
		 * @method _fixMatrix
		 * @param {Array} matrix
		 * @protected
		 **/
		p._fixMatrix = function(matrix) {
			if (matrix instanceof ColorMatrix) { matrix = matrix.toArray(); }
			if (matrix.length < ColorMatrix.LENGTH) {
				matrix = matrix.slice(0,matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length,ColorMatrix.LENGTH));
			} else if (matrix.length > ColorMatrix.LENGTH) {
				matrix = matrix.slice(0,ColorMatrix.LENGTH);
			}
			return matrix;
		};
	
	
		createjs.ColorMatrix = ColorMatrix;
	}());
	
	//##############################################################################
	// ColorMatrixFilter.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * Allows you to carry out complex color operations such as modifying saturation, brightness, or inverting. See the
		 * {{#crossLink "ColorMatrix"}}{{/crossLink}} for more information on changing colors. For an easier color transform,
		 * consider the {{#crossLink "ColorFilter"}}{{/crossLink}}.
		 *
		 * <h4>Example</h4>
		 * This example creates a red circle, inverts its hue, and then saturates it to brighten it up.
		 *
		 *      var shape = new createjs.Shape().set({x:100,y:100});
		 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
		 *
		 *      var matrix = new createjs.ColorMatrix().adjustHue(180).adjustSaturation(100);
		 *      shape.filters = [
		 *          new createjs.ColorMatrixFilter(matrix)
		 *      ];
		 *
		 *      shape.cache(-50, -50, 100, 100);
		 *
		 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
		 * @class ColorMatrixFilter
		 * @constructor
		 * @extends Filter
		 * @param {Array | ColorMatrix} matrix A 4x5 matrix describing the color operation to perform. See also the {{#crossLink "ColorMatrix"}}{{/crossLink}}
		 * class.
		 **/
		function ColorMatrixFilter(matrix) {
		
			
		// public properties:
			/**
			 * A 4x5 matrix describing the color operation to perform. See also the {{#crossLink "ColorMatrix"}}{{/crossLink}}
			 * @property matrix
			 * @type Array | ColorMatrix
			 **/
			this.matrix = matrix;
		}
		var p = createjs.extend(ColorMatrixFilter, createjs.Filter);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
		
	
	// public methods:
		/** docced in super class **/
		p.toString = function() {
			return "[ColorMatrixFilter]";
		};
	
		/** docced in super class **/
		p.clone = function() {
			return new ColorMatrixFilter(this.matrix);
		};
	
	// private methods:
		/** docced in super class **/
		p._applyFilter = function(imageData) { 
			var data = imageData.data;
			var l = data.length;
			var r,g,b,a;
			var mtx = this.matrix;
			var m0 =  mtx[0],  m1 =  mtx[1],  m2 =  mtx[2],  m3 =  mtx[3],  m4 =  mtx[4];
			var m5 =  mtx[5],  m6 =  mtx[6],  m7 =  mtx[7],  m8 =  mtx[8],  m9 =  mtx[9];
			var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
			var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];
	
			for (var i=0; i<l; i+=4) {
				r = data[i];
				g = data[i+1];
				b = data[i+2];
				a = data[i+3];
				data[i] = r*m0+g*m1+b*m2+a*m3+m4; // red
				data[i+1] = r*m5+g*m6+b*m7+a*m8+m9; // green
				data[i+2] = r*m10+g*m11+b*m12+a*m13+m14; // blue
				data[i+3] = r*m15+g*m16+b*m17+a*m18+m19; // alpha
			}
			return true;
		};
	
	
		createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter");
	}());
	
	//##############################################################################
	// Touch.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
	 * Global utility for working with multi-touch enabled devices in EaselJS. Currently supports W3C Touch API (iOS and
	 * modern Android browser) and the Pointer API (IE), including ms-prefixed events in IE10, and unprefixed in IE11.
	 *
	 * Ensure that you {{#crossLink "Touch/disable"}}{{/crossLink}} touch when cleaning up your application. You do not have
	 * to check if touch is supported to enable it, as it will fail gracefully if it is not supported.
	 *
	 * <h4>Example</h4>
	 *
	 *      var stage = new createjs.Stage("canvasId");
	 *      createjs.Touch.enable(stage);
	 *
	 * <strong>Note:</strong> It is important to disable Touch on a stage that you are no longer using:
	 *
	 *      createjs.Touch.disable(stage);
	 *
	 * @class Touch
	 * @static
	 **/
		function Touch() {
			throw "Touch cannot be instantiated";
		}
	
	
	// public static methods:
		/**
		 * Returns `true` if touch is supported in the current browser.
		 * @method isSupported
		 * @return {Boolean} Indicates whether touch is supported in the current browser.
		 * @static
		 **/
		Touch.isSupported = function() {
			return	!!(('ontouchstart' in window) // iOS & Android
				|| (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) // IE10
				|| (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0)); // IE11+
		};
	
		/**
		 * Enables touch interaction for the specified EaselJS {{#crossLink "Stage"}}{{/crossLink}}. Currently supports iOS
		 * (and compatible browsers, such as modern Android browsers), and IE10/11. Supports both single touch and
		 * multi-touch modes. Extends the EaselJS {{#crossLink "MouseEvent"}}{{/crossLink}} model, but without support for
		 * double click or over/out events. See the MouseEvent {{#crossLink "MouseEvent/pointerId:property"}}{{/crossLink}}
		 * for more information.
		 * @method enable
		 * @param {Stage} stage The {{#crossLink "Stage"}}{{/crossLink}} to enable touch on.
		 * @param {Boolean} [singleTouch=false] If `true`, only a single touch will be active at a time.
		 * @param {Boolean} [allowDefault=false] If `true`, then default gesture actions (ex. scrolling, zooming) will be
		 * allowed when the user is interacting with the target canvas.
		 * @return {Boolean} Returns `true` if touch was successfully enabled on the target stage.
		 * @static
		 **/
		Touch.enable = function(stage, singleTouch, allowDefault) {
			if (!stage || !stage.canvas || !Touch.isSupported()) { return false; }
			if (stage.__touch) { return true; }
	
			// inject required properties on stage:
			stage.__touch = {pointers:{}, multitouch:!singleTouch, preventDefault:!allowDefault, count:0};
	
			// note that in the future we may need to disable the standard mouse event model before adding
			// these to prevent duplicate calls. It doesn't seem to be an issue with iOS devices though.
			if ('ontouchstart' in window) { Touch._IOS_enable(stage); }
			else if (window.navigator['msPointerEnabled'] || window.navigator["pointerEnabled"]) { Touch._IE_enable(stage); }
			return true;
		};
	
		/**
		 * Removes all listeners that were set up when calling `Touch.enable()` on a stage.
		 * @method disable
		 * @param {Stage} stage The {{#crossLink "Stage"}}{{/crossLink}} to disable touch on.
		 * @static
		 **/
		Touch.disable = function(stage) {
			if (!stage) { return; }
			if ('ontouchstart' in window) { Touch._IOS_disable(stage); }
			else if (window.navigator['msPointerEnabled'] || window.navigator["pointerEnabled"]) { Touch._IE_disable(stage); }
			
			delete stage.__touch;
		};
	
	
	// Private static methods:
		/**
		 * @method _IOS_enable
		 * @protected
		 * @param {Stage} stage
		 * @static
		 **/
		Touch._IOS_enable = function(stage) {
			var canvas = stage.canvas;
			var f = stage.__touch.f = function(e) { Touch._IOS_handleEvent(stage,e); };
			canvas.addEventListener("touchstart", f, false);
			canvas.addEventListener("touchmove", f, false);
			canvas.addEventListener("touchend", f, false);
			canvas.addEventListener("touchcancel", f, false);
		};
	
		/**
		 * @method _IOS_disable
		 * @protected
		 * @param {Stage} stage
		 * @static
		 **/
		Touch._IOS_disable = function(stage) {
			var canvas = stage.canvas;
			if (!canvas) { return; }
			var f = stage.__touch.f;
			canvas.removeEventListener("touchstart", f, false);
			canvas.removeEventListener("touchmove", f, false);
			canvas.removeEventListener("touchend", f, false);
			canvas.removeEventListener("touchcancel", f, false);
		};
	
		/**
		 * @method _IOS_handleEvent
		 * @param {Stage} stage
		 * @param {Object} e The event to handle
		 * @protected
		 * @static
		 **/
		Touch._IOS_handleEvent = function(stage, e) {
			if (!stage) { return; }
			if (stage.__touch.preventDefault) { e.preventDefault&&e.preventDefault(); }
			var touches = e.changedTouches;
			var type = e.type;
			for (var i= 0,l=touches.length; i<l; i++) {
				var touch = touches[i];
				var id = touch.identifier;
				if (touch.target != stage.canvas) { continue; }
	
				if (type == "touchstart") {
					this._handleStart(stage, id, e, touch.pageX, touch.pageY);
				} else if (type == "touchmove") {
					this._handleMove(stage, id, e, touch.pageX, touch.pageY);
				} else if (type == "touchend" || type == "touchcancel") {
					this._handleEnd(stage, id, e);
				}
			}
		};
	
		/**
		 * @method _IE_enable
		 * @protected
		 * @param {Stage} stage
		 * @static
		 **/
		Touch._IE_enable = function(stage) {
			var canvas = stage.canvas;
			var f = stage.__touch.f = function(e) { Touch._IE_handleEvent(stage,e); };
	
			if (window.navigator["pointerEnabled"] === undefined) {
				canvas.addEventListener("MSPointerDown", f, false);
				window.addEventListener("MSPointerMove", f, false);
				window.addEventListener("MSPointerUp", f, false);
				window.addEventListener("MSPointerCancel", f, false);
				if (stage.__touch.preventDefault) { canvas.style.msTouchAction = "none"; }
			} else {
				canvas.addEventListener("pointerdown", f, false);
				window.addEventListener("pointermove", f, false);
				window.addEventListener("pointerup", f, false);
				window.addEventListener("pointercancel", f, false);
				if (stage.__touch.preventDefault) { canvas.style.touchAction = "none"; }
	
			}
			stage.__touch.activeIDs = {};
		};
	
		/**
		 * @method _IE_disable
		 * @protected
		 * @param {Stage} stage
		 * @static
		 **/
		Touch._IE_disable = function(stage) {
			var f = stage.__touch.f;
	
			if (window.navigator["pointerEnabled"] === undefined) {
				window.removeEventListener("MSPointerMove", f, false);
				window.removeEventListener("MSPointerUp", f, false);
				window.removeEventListener("MSPointerCancel", f, false);
				if (stage.canvas) {
					stage.canvas.removeEventListener("MSPointerDown", f, false);
				}
			} else {
				window.removeEventListener("pointermove", f, false);
				window.removeEventListener("pointerup", f, false);
				window.removeEventListener("pointercancel", f, false);
				if (stage.canvas) {
					stage.canvas.removeEventListener("pointerdown", f, false);
				}
			}
		};
	
		/**
		 * @method _IE_handleEvent
		 * @param {Stage} stage
		 * @param {Object} e The event to handle.
		 * @protected
		 * @static
		 **/
		Touch._IE_handleEvent = function(stage, e) {
			if (!stage) { return; }
			if (stage.__touch.preventDefault) { e.preventDefault && e.preventDefault(); }
			var type = e.type;
			var id = e.pointerId;
			var ids = stage.__touch.activeIDs;
	
			if (type == "MSPointerDown" || type == "pointerdown") {
				if (e.srcElement != stage.canvas) { return; }
				ids[id] = true;
				this._handleStart(stage, id, e, e.pageX, e.pageY);
			} else if (ids[id]) { // it's an id we're watching
				if (type == "MSPointerMove" || type == "pointermove") {
					this._handleMove(stage, id, e, e.pageX, e.pageY);
				} else if (type == "MSPointerUp" || type == "MSPointerCancel"
						|| type == "pointerup" || type == "pointercancel") {
					delete(ids[id]);
					this._handleEnd(stage, id, e);
				}
			}
		};
	
		/**
		 * @method _handleStart
		 * @param {Stage} stage
		 * @param {String|Number} id
		 * @param {Object} e
		 * @param {Number} x
		 * @param {Number} y
		 * @protected
		 **/
		Touch._handleStart = function(stage, id, e, x, y) {
			var props = stage.__touch;
			if (!props.multitouch && props.count) { return; }
			var ids = props.pointers;
			if (ids[id]) { return; }
			ids[id] = true;
			props.count++;
			stage._handlePointerDown(id, e, x, y);
		};
	
		/**
		 * @method _handleMove
		 * @param {Stage} stage
		 * @param {String|Number} id
		 * @param {Object} e
		 * @param {Number} x
		 * @param {Number} y
		 * @protected
		 **/
		Touch._handleMove = function(stage, id, e, x, y) {
			if (!stage.__touch.pointers[id]) { return; }
			stage._handlePointerMove(id, e, x, y);
		};
	
		/**
		 * @method _handleEnd
		 * @param {Stage} stage
		 * @param {String|Number} id
		 * @param {Object} e
		 * @protected
		 **/
		Touch._handleEnd = function(stage, id, e) {
			// TODO: cancel should be handled differently for proper UI (ex. an up would trigger a click, a cancel would more closely resemble an out).
			var props = stage.__touch;
			var ids = props.pointers;
			if (!ids[id]) { return; }
			props.count--;
			stage._handlePointerUp(id, e, true);
			delete(ids[id]);
		};
	
	
		createjs.Touch = Touch;
	}());
	
	//##############################################################################
	// version.js
	//##############################################################################
	
	this.createjs = this.createjs || {};
	
	(function() {
		"use strict";
	
		/**
		 * Static class holding library specific information such as the version and buildDate of
		 * the library.
		 * @class EaselJS
		 **/
		var s = createjs.EaselJS = createjs.EaselJS || {};
	
		/**
		 * The version string for this release.
		 * @property version
		 * @type String
		 * @static
		 **/
		s.version = /*=version*/"0.8.2"; // injected by build process
	
		/**
		 * The build date for this release in UTC format.
		 * @property buildDate
		 * @type String
		 * @static
		 **/
		s.buildDate = /*=date*/"Thu, 26 Nov 2015 20:44:34 GMT"; // injected by build process
	
	})();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.createjs;
	}.call(window));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*!
	* TweenJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2010 gskinner.com, inc.
	*
	* Permission is hereby granted, free of charge, to any person
	* obtaining a copy of this software and associated documentation
	* files (the "Software"), to deal in the Software without
	* restriction, including without limitation the rights to use,
	* copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the
	* Software is furnished to do so, subject to the following
	* conditions:
	*
	* The above copyright notice and this permission notice shall be
	* included in all copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	* OTHER DEALINGS IN THE SOFTWARE.
	*/
	
	
	//##############################################################################
	// extend.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Sets up the prototype chain and constructor property for a new class.
	 *
	 * This should be called right after creating the class constructor.
	 *
	 * 	function MySubClass() {}
	 * 	createjs.extend(MySubClass, MySuperClass);
	 * 	MySubClass.prototype.doSomething = function() { }
	 *
	 * 	var foo = new MySubClass();
	 * 	console.log(foo instanceof MySuperClass); // true
	 * 	console.log(foo.prototype.constructor === MySubClass); // true
	 *
	 * @method extend
	 * @param {Function} subclass The subclass.
	 * @param {Function} superclass The superclass to extend.
	 * @return {Function} Returns the subclass's new prototype.
	 */
	createjs.extend = function(subclass, superclass) {
		"use strict";
	
		function o() { this.constructor = subclass; }
		o.prototype = superclass.prototype;
		return (subclass.prototype = new o());
	};
	
	//##############################################################################
	// promote.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	/**
	 * @class Utility Methods
	 */
	
	/**
	 * Promotes any methods on the super class that were overridden, by creating an alias in the format `prefix_methodName`.
	 * It is recommended to use the super class's name as the prefix.
	 * An alias to the super class's constructor is always added in the format `prefix_constructor`.
	 * This allows the subclass to call super class methods without using `function.call`, providing better performance.
	 *
	 * For example, if `MySubClass` extends `MySuperClass`, and both define a `draw` method, then calling `promote(MySubClass, "MySuperClass")`
	 * would add a `MySuperClass_constructor` method to MySubClass and promote the `draw` method on `MySuperClass` to the
	 * prototype of `MySubClass` as `MySuperClass_draw`.
	 *
	 * This should be called after the class's prototype is fully defined.
	 *
	 * 	function ClassA(name) {
	 * 		this.name = name;
	 * 	}
	 * 	ClassA.prototype.greet = function() {
	 * 		return "Hello "+this.name;
	 * 	}
	 *
	 * 	function ClassB(name, punctuation) {
	 * 		this.ClassA_constructor(name);
	 * 		this.punctuation = punctuation;
	 * 	}
	 * 	createjs.extend(ClassB, ClassA);
	 * 	ClassB.prototype.greet = function() {
	 * 		return this.ClassA_greet()+this.punctuation;
	 * 	}
	 * 	createjs.promote(ClassB, "ClassA");
	 *
	 * 	var foo = new ClassB("World", "!?!");
	 * 	console.log(foo.greet()); // Hello World!?!
	 *
	 * @method promote
	 * @param {Function} subclass The class to promote super class methods on.
	 * @param {String} prefix The prefix to add to the promoted method names. Usually the name of the superclass.
	 * @return {Function} Returns the subclass.
	 */
	createjs.promote = function(subclass, prefix) {
		"use strict";
	
		var subP = subclass.prototype, supP = (Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;
		if (supP) {
			subP[(prefix+="_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) { subP[prefix + n] = supP[n]; }
			}
		}
		return subclass;
	};
	
	//##############################################################################
	// Event.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	// constructor:
		/**
		 * Contains properties and methods shared by all events for use with
		 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
		 * 
		 * Note that Event objects are often reused, so you should never
		 * rely on an event object's state outside of the call stack it was received in.
		 * @class Event
		 * @param {String} type The event type.
		 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
		 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
		 * @constructor
		 **/
		function Event(type, bubbles, cancelable) {
			
		
		// public properties:
			/**
			 * The type of event.
			 * @property type
			 * @type String
			 **/
			this.type = type;
		
			/**
			 * The object that generated an event.
			 * @property target
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.target = null;
		
			/**
			 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
			 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
			 * is generated from childObj, then a listener on parentObj would receive the event with
			 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
			 * @property currentTarget
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.currentTarget = null;
		
			/**
			 * For bubbling events, this indicates the current event phase:<OL>
			 * 	<LI> capture phase: starting from the top parent to the target</LI>
			 * 	<LI> at target phase: currently being dispatched from the target</LI>
			 * 	<LI> bubbling phase: from the target to the top parent</LI>
			 * </OL>
			 * @property eventPhase
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.eventPhase = 0;
		
			/**
			 * Indicates whether the event will bubble through the display list.
			 * @property bubbles
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.bubbles = !!bubbles;
		
			/**
			 * Indicates whether the default behaviour of this event can be cancelled via
			 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
			 * @property cancelable
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.cancelable = !!cancelable;
		
			/**
			 * The epoch time at which this event was created.
			 * @property timeStamp
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.timeStamp = (new Date()).getTime();
		
			/**
			 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
			 * on this event.
			 * @property defaultPrevented
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.defaultPrevented = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
			 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
			 * @property propagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.propagationStopped = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
			 * on this event.
			 * @property immediatePropagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.immediatePropagationStopped = false;
			
			/**
			 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
			 * @property removed
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.removed = false;
		}
		var p = Event.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	// public methods:
		/**
		 * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true if the event is cancelable.
		 * Mirrors the DOM level 2 event standard. In general, cancelable events that have `preventDefault()` called will
		 * cancel the default behaviour associated with the event.
		 * @method preventDefault
		 **/
		p.preventDefault = function() {
			this.defaultPrevented = this.cancelable&&true;
		};
	
		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopPropagation
		 **/
		p.stopPropagation = function() {
			this.propagationStopped = true;
		};
	
		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
		 * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopImmediatePropagation
		 **/
		p.stopImmediatePropagation = function() {
			this.immediatePropagationStopped = this.propagationStopped = true;
		};
		
		/**
		 * Causes the active listener to be removed via removeEventListener();
		 * 
		 * 		myBtn.addEventListener("click", function(evt) {
		 * 			// do stuff...
		 * 			evt.remove(); // removes this listener.
		 * 		});
		 * 
		 * @method remove
		 **/
		p.remove = function() {
			this.removed = true;
		};
		
		/**
		 * Returns a clone of the Event instance.
		 * @method clone
		 * @return {Event} a clone of the Event instance.
		 **/
		p.clone = function() {
			return new Event(this.type, this.bubbles, this.cancelable);
		};
		
		/**
		 * Provides a chainable shortcut method for setting a number of properties on the instance.
		 *
		 * @method set
		 * @param {Object} props A generic object containing properties to copy to the instance.
		 * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
		 * @chainable
		*/
		p.set = function(props) {
			for (var n in props) { this[n] = props[n]; }
			return this;
		};
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Event (type="+this.type+")]";
		};
	
		createjs.Event = Event;
	}());
	
	//##############################################################################
	// EventDispatcher.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
		 *
		 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
		 * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
		 * 
		 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
		 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
		 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
		 * 
		 * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
		 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The 
		 * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
		 * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
		 * 
		 * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
		 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also 
		 * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
		 *
		 * <h4>Example</h4>
		 * Add EventDispatcher capabilities to the "MyClass" class.
		 *
		 *      EventDispatcher.initialize(MyClass.prototype);
		 *
		 * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
		 *
		 *      instance.addEventListener("eventName", handlerMethod);
		 *      function handlerMethod(event) {
		 *          console.log(event.target + " Was Clicked");
		 *      }
		 *
		 * <b>Maintaining proper scope</b><br />
		 * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
		 * method to subscribe to events simplifies this.
		 *
		 *      instance.addEventListener("click", function(event) {
		 *          console.log(instance == this); // false, scope is ambiguous.
		 *      });
		 *      
		 *      instance.on("click", function(event) {
		 *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
		 *      });
		 * 
		 * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage
		 * scope.
		 *
		 * <b>Browser support</b>
		 * The event model in CreateJS can be used separately from the suite in any project, however the inheritance model
		 * requires modern browsers (IE9+).
		 *      
		 *
		 * @class EventDispatcher
		 * @constructor
		 **/
		function EventDispatcher() {
		
		
		// private properties:
			/**
			 * @protected
			 * @property _listeners
			 * @type Object
			 **/
			this._listeners = null;
			
			/**
			 * @protected
			 * @property _captureListeners
			 * @type Object
			 **/
			this._captureListeners = null;
		}
		var p = EventDispatcher.prototype;
	
		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.
	
	
	// static public methods:
		/**
		 * Static initializer to mix EventDispatcher methods into a target object or prototype.
		 * 
		 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
		 * 		EventDispatcher.initialize(myObject); // add to a specific instance
		 * 
		 * @method initialize
		 * @static
		 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
		 * prototype.
		 **/
		EventDispatcher.initialize = function(target) {
			target.addEventListener = p.addEventListener;
			target.on = p.on;
			target.removeEventListener = target.off =  p.removeEventListener;
			target.removeAllEventListeners = p.removeAllEventListeners;
			target.hasEventListener = p.hasEventListener;
			target.dispatchEvent = p.dispatchEvent;
			target._dispatchEvent = p._dispatchEvent;
			target.willTrigger = p.willTrigger;
		};
		
	
	// public methods:
		/**
		 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
		 * multiple callbacks getting fired.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.addEventListener("click", handleClick);
		 *      function handleClick(event) {
		 *         // Click happened.
		 *      }
		 *
		 * @method addEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function | Object} Returns the listener for chaining or assignment.
		 **/
		p.addEventListener = function(type, listener, useCapture) {
			var listeners;
			if (useCapture) {
				listeners = this._captureListeners = this._captureListeners||{};
			} else {
				listeners = this._listeners = this._listeners||{};
			}
			var arr = listeners[type];
			if (arr) { this.removeEventListener(type, listener, useCapture); }
			arr = listeners[type]; // remove may have deleted the array
			if (!arr) { listeners[type] = [listener];  }
			else { arr.push(listener); }
			return listener;
		};
		
		/**
		 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
		 * only run once, associate arbitrary data with the listener, and remove the listener.
		 * 
		 * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
		 * The wrapper function is returned for use with `removeEventListener` (or `off`).
		 * 
		 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener, or use
		 * {{#crossLink "Event/remove"}}{{/crossLink}}. Likewise, each time you call `on` a NEW wrapper function is subscribed, so multiple calls
		 * to `on` with the same params will create multiple listeners.
		 * 
		 * <h4>Example</h4>
		 * 
		 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
		 * 		function handleClick(evt, data) {
		 * 			data.count -= 1;
		 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
		 * 			if (data.count == 0) {
		 * 				alert("clicked 3 times!");
		 * 				myBtn.off("click", listener);
		 * 				// alternately: evt.remove();
		 * 			}
		 * 		}
		 * 
		 * @method on
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
		 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
		 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
		 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
		 **/
		p.on = function(type, listener, scope, once, data, useCapture) {
			if (listener.handleEvent) {
				scope = scope||listener;
				listener = listener.handleEvent;
			}
			scope = scope||this;
			return this.addEventListener(type, function(evt) {
					listener.call(scope, evt, data);
					once&&evt.remove();
				}, useCapture);
		};
	
		/**
		 * Removes the specified event listener.
		 *
		 * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
		 * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
		 * closure will not work.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.removeEventListener("click", handleClick);
		 *
		 * @method removeEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.removeEventListener = function(type, listener, useCapture) {
			var listeners = useCapture ? this._captureListeners : this._listeners;
			if (!listeners) { return; }
			var arr = listeners[type];
			if (!arr) { return; }
			for (var i=0,l=arr.length; i<l; i++) {
				if (arr[i] == listener) {
					if (l==1) { delete(listeners[type]); } // allows for faster checks.
					else { arr.splice(i,1); }
					break;
				}
			}
		};
		
		/**
		 * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
		 * .on method.
		 * 
		 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener. See 
		 * {{#crossLink "EventDispatcher/on"}}{{/crossLink}} for an example.
		 *
		 * @method off
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.off = p.removeEventListener;
	
		/**
		 * Removes all listeners for the specified type, or all listeners of all types.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Remove all listeners
		 *      displayObject.removeAllEventListeners();
		 *
		 *      // Remove all click listeners
		 *      displayObject.removeAllEventListeners("click");
		 *
		 * @method removeAllEventListeners
		 * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
		 **/
		p.removeAllEventListeners = function(type) {
			if (!type) { this._listeners = this._captureListeners = null; }
			else {
				if (this._listeners) { delete(this._listeners[type]); }
				if (this._captureListeners) { delete(this._captureListeners[type]); }
			}
		};
	
		/**
		 * Dispatches the specified event to all listeners.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Use a string event
		 *      this.dispatchEvent("complete");
		 *
		 *      // Use an Event instance
		 *      var event = new createjs.Event("progress");
		 *      this.dispatchEvent(event);
		 *
		 * @method dispatchEvent
		 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
		 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
		 * dispatchEvent will construct an Event instance if necessary with the specified type. This latter approach can
		 * be used to avoid event object instantiation for non-bubbling events that may not have any listeners.
		 * @param {Boolean} [bubbles] Specifies the `bubbles` value when a string was passed to eventObj.
		 * @param {Boolean} [cancelable] Specifies the `cancelable` value when a string was passed to eventObj.
		 * @return {Boolean} Returns false if `preventDefault()` was called on a cancelable event, true otherwise.
		 **/
		p.dispatchEvent = function(eventObj, bubbles, cancelable) {
			if (typeof eventObj == "string") {
				// skip everything if there's no listeners and it doesn't bubble:
				var listeners = this._listeners;
				if (!bubbles && (!listeners || !listeners[eventObj])) { return true; }
				eventObj = new createjs.Event(eventObj, bubbles, cancelable);
			} else if (eventObj.target && eventObj.clone) {
				// redispatching an active event object, so clone it:
				eventObj = eventObj.clone();
			}
			
			// TODO: it would be nice to eliminate this. Maybe in favour of evtObj instanceof Event? Or !!evtObj.createEvent
			try { eventObj.target = this; } catch (e) {} // try/catch allows redispatching of native events
	
			if (!eventObj.bubbles || !this.parent) {
				this._dispatchEvent(eventObj, 2);
			} else {
				var top=this, list=[top];
				while (top.parent) { list.push(top = top.parent); }
				var i, l=list.length;
	
				// capture & atTarget
				for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
					list[i]._dispatchEvent(eventObj, 1+(i==0));
				}
				// bubbling
				for (i=1; i<l && !eventObj.propagationStopped; i++) {
					list[i]._dispatchEvent(eventObj, 3);
				}
			}
			return !eventObj.defaultPrevented;
		};
	
		/**
		 * Indicates whether there is at least one listener for the specified event type.
		 * @method hasEventListener
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns true if there is at least one listener for the specified event.
		 **/
		p.hasEventListener = function(type) {
			var listeners = this._listeners, captureListeners = this._captureListeners;
			return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
		};
		
		/**
		 * Indicates whether there is at least one listener for the specified event type on this object or any of its
		 * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
		 * specified type is dispatched from this object, it will trigger at least one listener.
		 * 
		 * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
		 * event flow for a listener, not just this object.
		 * @method willTrigger
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
		 **/
		p.willTrigger = function(type) {
			var o = this;
			while (o) {
				if (o.hasEventListener(type)) { return true; }
				o = o.parent;
			}
			return false;
		};
	
		/**
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[EventDispatcher]";
		};
	
	
	// private methods:
		/**
		 * @method _dispatchEvent
		 * @param {Object | String | Event} eventObj
		 * @param {Object} eventPhase
		 * @protected
		 **/
		p._dispatchEvent = function(eventObj, eventPhase) {
			var l, listeners = (eventPhase==1) ? this._captureListeners : this._listeners;
			if (eventObj && listeners) {
				var arr = listeners[eventObj.type];
				if (!arr||!(l=arr.length)) { return; }
				try { eventObj.currentTarget = this; } catch (e) {}
				try { eventObj.eventPhase = eventPhase; } catch (e) {}
				eventObj.removed = false;
				
				arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
				for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
					var o = arr[i];
					if (o.handleEvent) { o.handleEvent(eventObj); }
					else { o(eventObj); }
					if (eventObj.removed) {
						this.off(eventObj.type, o, eventPhase==1);
						eventObj.removed = false;
					}
				}
			}
		};
	
	
		createjs.EventDispatcher = EventDispatcher;
	}());
	
	//##############################################################################
	// Ticker.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor:
		/**
		 * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
		 * event to be notified when a set time interval has elapsed.
		 *
		 * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
		 * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
		 * can not be instantiated.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          // Actions carried out each tick (aka frame)
		 *          if (!event.paused) {
		 *              // Actions carried out when the Ticker is not paused.
		 *          }
		 *      }
		 *
		 * @class Ticker
		 * @uses EventDispatcher
		 * @static
		 **/
		function Ticker() {
			throw "Ticker cannot be instantiated.";
		}
	
	
	// constants:
		/**
		 * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
		 * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
		 * dispatches the tick when the time is within a certain threshold.
		 *
		 * This mode has a higher variance for time between frames than {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}},
		 * but does not require that content be time based as with {{#crossLink "Ticker/RAF:property"}}{{/crossLink}} while
		 * gaining the benefits of that API (screen synch, background throttling).
		 *
		 * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
		 * framerates of 10, 12, 15, 20, and 30 work well.
		 *
		 * Falls back to {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
		 * supported.
		 * @property RAF_SYNCHED
		 * @static
		 * @type {String}
		 * @default "synched"
		 * @readonly
		 **/
		Ticker.RAF_SYNCHED = "synched";
	
		/**
		 * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
		 * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
		 * You can leverage {{#crossLink "Ticker/getTime"}}{{/crossLink}} and the {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
		 * event object's "delta" properties to make this easier.
		 *
		 * Falls back on {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
		 * supported.
		 * @property RAF
		 * @static
		 * @type {String}
		 * @default "raf"
		 * @readonly
		 **/
		Ticker.RAF = "raf";
	
		/**
		 * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
		 * provide the benefits of requestAnimationFrame (screen synch, background throttling).
		 * @property TIMEOUT
		 * @static
		 * @type {String}
		 * @default "timeout"
		 * @readonly
		 **/
		Ticker.TIMEOUT = "timeout";
	
	
	// static events:
		/**
		 * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused using
		 * {{#crossLink "Ticker/setPaused"}}{{/crossLink}}.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      function handleTick(event) {
		 *          console.log("Paused:", event.paused, event.delta);
		 *      }
		 *
		 * @event tick
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Boolean} paused Indicates whether the ticker is currently paused.
		 * @param {Number} delta The time elapsed in ms since the last tick.
		 * @param {Number} time The total time in ms since Ticker was initialized.
		 * @param {Number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
		 * 	you could determine the amount of time that the Ticker has been paused since initialization with `time-runTime`.
		 * @since 0.6.0
		 */
	
	
	// public static properties:
		/**
		 * Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}, and will be removed in a future version. If true, timingMode will
		 * use {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} by default.
		 * @deprecated Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}.
		 * @property useRAF
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		Ticker.useRAF = false;
	
		/**
		 * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use. See
		 * {{#crossLink "Ticker/TIMEOUT"}}{{/crossLink}}, {{#crossLink "Ticker/RAF"}}{{/crossLink}}, and
		 * {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} for mode details.
		 * @property timingMode
		 * @static
		 * @type {String}
		 * @default Ticker.TIMEOUT
		 **/
		Ticker.timingMode = null;
	
		/**
		 * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
		 * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
		 * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
		 * (ex. maxDelta=50 when running at 40fps).
		 * 
		 * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
		 * when using both delta and other values.
		 * 
		 * If 0, there is no maximum.
		 * @property maxDelta
		 * @static
		 * @type {number}
		 * @default 0
		 */
		Ticker.maxDelta = 0;
		
		/**
		 * When the ticker is paused, all listeners will still receive a tick event, but the <code>paused</code> property
		 * of the event will be `true`. Also, while paused the `runTime` will not increase. See {{#crossLink "Ticker/tick:event"}}{{/crossLink}},
		 * {{#crossLink "Ticker/getTime"}}{{/crossLink}}, and {{#crossLink "Ticker/getEventTime"}}{{/crossLink}} for more
		 * info.
		 *
		 * <h4>Example</h4>
		 *
		 *      createjs.Ticker.addEventListener("tick", handleTick);
		 *      createjs.Ticker.paused = true;
		 *      function handleTick(event) {
		 *          console.log(event.paused,
		 *          	createjs.Ticker.getTime(false),
		 *          	createjs.Ticker.getTime(true));
		 *      }
		 *
		 * @property paused
		 * @static
		 * @type {Boolean}
		 * @default false
		 **/
		Ticker.paused = false;
	
	
	// mix-ins:
		// EventDispatcher methods:
		Ticker.removeEventListener = null;
		Ticker.removeAllEventListeners = null;
		Ticker.dispatchEvent = null;
		Ticker.hasEventListener = null;
		Ticker._listeners = null;
		createjs.EventDispatcher.initialize(Ticker); // inject EventDispatcher methods.
		Ticker._addEventListener = Ticker.addEventListener;
		Ticker.addEventListener = function() {
			!Ticker._inited&&Ticker.init();
			return Ticker._addEventListener.apply(Ticker, arguments);
		};
	
	
	// private static properties:
		/**
		 * @property _inited
		 * @static
		 * @type {Boolean}
		 * @protected
		 **/
		Ticker._inited = false;
	
		/**
		 * @property _startTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._startTime = 0;
	
		/**
		 * @property _pausedTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._pausedTime=0;
	
		/**
		 * The number of ticks that have passed
		 * @property _ticks
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._ticks = 0;
	
		/**
		 * The number of ticks that have passed while Ticker has been paused
		 * @property _pausedTicks
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._pausedTicks = 0;
	
		/**
		 * @property _interval
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._interval = 50;
	
		/**
		 * @property _lastTime
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._lastTime = 0;
	
		/**
		 * @property _times
		 * @static
		 * @type {Array}
		 * @protected
		 **/
		Ticker._times = null;
	
		/**
		 * @property _tickTimes
		 * @static
		 * @type {Array}
		 * @protected
		 **/
		Ticker._tickTimes = null;
	
		/**
		 * Stores the timeout or requestAnimationFrame id.
		 * @property _timerId
		 * @static
		 * @type {Number}
		 * @protected
		 **/
		Ticker._timerId = null;
		
		/**
		 * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
		 * if that property changed and a tick hasn't fired.
		 * @property _raf
		 * @static
		 * @type {Boolean}
		 * @protected
		 **/
		Ticker._raf = true;
		
	
	// static getter / setters:
		/**
		 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
		 * @method setInterval
		 * @static
		 * @param {Number} interval
		 * @deprecated
		 **/
		Ticker.setInterval = function(interval) {
			Ticker._interval = interval;
			if (!Ticker._inited) { return; }
			Ticker._setupTick();
		};
	
		/**
		 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
		 * @method getInterval
		 * @static
		 * @return {Number}
		 * @deprecated
		 **/
		Ticker.getInterval = function() {
			return Ticker._interval;
		};
	
		/**
		 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
		 * @method setFPS
		 * @static
		 * @param {Number} value
		 * @deprecated
		 **/
		Ticker.setFPS = function(value) {
			Ticker.setInterval(1000/value);
		};
	
		/**
		 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
		 * @method getFPS
		 * @static
		 * @return {Number}
		 * @deprecated
		 **/
		Ticker.getFPS = function() {
			return 1000/Ticker._interval;
		};
	
		/**
		 * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
		 * Note that actual time between ticks may be more than specified depending on CPU load.
		 * This property is ignored if the ticker is using the `RAF` timing mode.
		 * @property interval
		 * @static
		 * @type {Number}
		 **/
		 
		/**
		 * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
		 * `framerate == 1000/interval`.
		 * @property framerate
		 * @static
		 * @type {Number}
		 **/
		try {
			Object.defineProperties(Ticker, {
				interval: { get: Ticker.getInterval, set: Ticker.setInterval },
				framerate: { get: Ticker.getFPS, set: Ticker.setFPS }
			});
		} catch (e) { console.log(e); }
	
	
	// public static methods:
		/**
		 * Starts the tick. This is called automatically when the first listener is added.
		 * @method init
		 * @static
		 **/
		Ticker.init = function() {
			if (Ticker._inited) { return; }
			Ticker._inited = true;
			Ticker._times = [];
			Ticker._tickTimes = [];
			Ticker._startTime = Ticker._getTime();
			Ticker._times.push(Ticker._lastTime = 0);
			Ticker.interval = Ticker._interval;
		};
		
		/**
		 * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
		 * @method reset
		 * @static
		 **/
		Ticker.reset = function() {
			if (Ticker._raf) {
				var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
				f&&f(Ticker._timerId);
			} else {
				clearTimeout(Ticker._timerId);
			}
			Ticker.removeAllEventListeners("tick");
			Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
			Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
			Ticker._inited = false;
		};
	
		/**
		 * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
		 * because it only measures the time spent within the tick execution stack. 
		 * 
		 * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between 
		 * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that 
		 * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
		 *
		 * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
		 * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
		 * other than the tick is using ~80ms (another script, DOM rendering, etc).
		 * @method getMeasuredTickTime
		 * @static
		 * @param {Number} [ticks] The number of previous ticks over which to measure the average time spent in a tick.
		 * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
		 * @return {Number} The average time spent in a tick in milliseconds.
		 **/
		Ticker.getMeasuredTickTime = function(ticks) {
			var ttl=0, times=Ticker._tickTimes;
			if (!times || times.length < 1) { return -1; }
	
			// by default, calculate average for the past ~1 second:
			ticks = Math.min(times.length, ticks||(Ticker.getFPS()|0));
			for (var i=0; i<ticks; i++) { ttl += times[i]; }
			return ttl/ticks;
		};
	
		/**
		 * Returns the actual frames / ticks per second.
		 * @method getMeasuredFPS
		 * @static
		 * @param {Number} [ticks] The number of previous ticks over which to measure the actual frames / ticks per second.
		 * Defaults to the number of ticks per second.
		 * @return {Number} The actual frames / ticks per second. Depending on performance, this may differ
		 * from the target frames per second.
		 **/
		Ticker.getMeasuredFPS = function(ticks) {
			var times = Ticker._times;
			if (!times || times.length < 2) { return -1; }
	
			// by default, calculate fps for the past ~1 second:
			ticks = Math.min(times.length-1, ticks||(Ticker.getFPS()|0));
			return 1000/((times[0]-times[ticks])/ticks);
		};
	
		/**
		 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
		 * @method setPaused
		 * @static
		 * @param {Boolean} value
		 * @deprecated
		 **/
		Ticker.setPaused = function(value) {
			// TODO: deprecated.
			Ticker.paused = value;
		};
	
		/**
		 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
		 * @method getPaused
		 * @static
		 * @return {Boolean}
		 * @deprecated
		 **/
		Ticker.getPaused = function() {
			// TODO: deprecated.
			return Ticker.paused;
		};
	
		/**
		 * Returns the number of milliseconds that have elapsed since Ticker was initialized via {{#crossLink "Ticker/init"}}.
		 * Returns -1 if Ticker has not been initialized. For example, you could use
		 * this in a time synchronized animation to determine the exact amount of time that has elapsed.
		 * @method getTime
		 * @static
		 * @param {Boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
		 * If false, the value returned will be total time elapsed since the first tick event listener was added.
		 * @return {Number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
		 **/
		Ticker.getTime = function(runTime) {
			return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
		};
	
		/**
		 * Similar to the {{#crossLink "Ticker/getTime"}}{{/crossLink}} method, but returns the time on the most recent {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
		 * event object.
		 * @method getEventTime
		 * @static
		 * @param runTime {Boolean} [runTime=false] If true, the runTime property will be returned instead of time.
		 * @returns {number} The time or runTime property from the most recent tick event or -1.
		 */
		Ticker.getEventTime = function(runTime) {
			return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
		};
		
		/**
		 * Returns the number of ticks that have been broadcast by Ticker.
		 * @method getTicks
		 * @static
		 * @param {Boolean} pauseable Indicates whether to include ticks that would have been broadcast
		 * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
		 * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
		 * value. The default value is false.
		 * @return {Number} of ticks that have been broadcast.
		 **/
		Ticker.getTicks = function(pauseable) {
			return  Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
		};
	
	
	// private static methods:
		/**
		 * @method _handleSynch
		 * @static
		 * @protected
		 **/
		Ticker._handleSynch = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
	
			// run if enough time has elapsed, with a little bit of flexibility to be early:
			if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval-1)*0.97) {
				Ticker._tick();
			}
		};
	
		/**
		 * @method _handleRAF
		 * @static
		 * @protected
		 **/
		Ticker._handleRAF = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
			Ticker._tick();
		};
	
		/**
		 * @method _handleTimeout
		 * @static
		 * @protected
		 **/
		Ticker._handleTimeout = function() {
			Ticker._timerId = null;
			Ticker._setupTick();
			Ticker._tick();
		};
	
		/**
		 * @method _setupTick
		 * @static
		 * @protected
		 **/
		Ticker._setupTick = function() {
			if (Ticker._timerId != null) { return; } // avoid duplicates
	
			var mode = Ticker.timingMode||(Ticker.useRAF&&Ticker.RAF_SYNCHED);
			if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
				var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				if (f) {
					Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
					Ticker._raf = true;
					return;
				}
			}
			Ticker._raf = false;
			Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
		};
	
		/**
		 * @method _tick
		 * @static
		 * @protected
		 **/
		Ticker._tick = function() {
			var paused = Ticker.paused;
			var time = Ticker._getTime();
			var elapsedTime = time-Ticker._lastTime;
			Ticker._lastTime = time;
			Ticker._ticks++;
			
			if (paused) {
				Ticker._pausedTicks++;
				Ticker._pausedTime += elapsedTime;
			}
			
			if (Ticker.hasEventListener("tick")) {
				var event = new createjs.Event("tick");
				var maxDelta = Ticker.maxDelta;
				event.delta = (maxDelta && elapsedTime > maxDelta) ? maxDelta : elapsedTime;
				event.paused = paused;
				event.time = time;
				event.runTime = time-Ticker._pausedTime;
				Ticker.dispatchEvent(event);
			}
			
			Ticker._tickTimes.unshift(Ticker._getTime()-time);
			while (Ticker._tickTimes.length > 100) { Ticker._tickTimes.pop(); }
	
			Ticker._times.unshift(time);
			while (Ticker._times.length > 100) { Ticker._times.pop(); }
		};
	
		/**
		 * @method _getTime
		 * @static
		 * @protected
		 **/
		var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
		Ticker._getTime = function() {
			return ((now&&now.call(performance))||(new Date().getTime())) - Ticker._startTime;
		};
	
	
		createjs.Ticker = Ticker;
	}());
	
	//##############################################################################
	// Tween.js
	//##############################################################################
	
	// TODO: possibly add a END actionsMode (only runs actions that == position)?
	// TODO: evaluate a way to decouple paused from tick registration.
	
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
	
	// constructor
		/**
		 * A Tween instance tweens properties for a single target. Instance methods can be chained for easy construction and sequencing:
		 *
		 * <h4>Example</h4>
		 *
		 *      target.alpha = 1;
		 *	    createjs.Tween.get(target)
		 *	         .wait(500)
		 *	         .to({alpha:0, visible:false}, 1000)
		 *	         .call(handleComplete);
		 *	    function handleComplete() {
		 *	    	//Tween complete
		 *	    }
		 *
		 * Multiple tweens can point to the same instance, however if they affect the same properties there could be unexpected
		 * behaviour. To stop all tweens on an object, use {{#crossLink "Tween/removeTweens"}}{{/crossLink}} or pass `override:true`
		 * in the props argument.
		 *
		 *      createjs.Tween.get(target, {override:true}).to({x:100});
		 *
		 * Subscribe to the {{#crossLink "Tween/change:event"}}{{/crossLink}} event to get notified when a property of the
		 * target is changed.
		 *
		 *      createjs.Tween.get(target, {override:true}).to({x:100}).addEventListener("change", handleChange);
		 *      function handleChange(event) {
		 *          // The tween changed.
		 *      }
		 *
		 * See the Tween {{#crossLink "Tween/get"}}{{/crossLink}} method for additional param documentation.
		 * @class Tween
		 * @param {Object} target The target object that will have its properties tweened.
		 * @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`.
		 * All properties default to false. Supported props are:<UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on this tween.</LI>
		 *    <LI> override: if true, `Tween.removeTweens(target)` will be called to remove any other tweens with the same target.
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this tween.</LI>
		 *    <LI> onChange: specifies a listener for the "change" event.</LI>
		 * </UL>
		 * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual
		 * plugins' documentation for details.
		 * @extends EventDispatcher
		 * @constructor
		 */
		function Tween(target, props, pluginData) {
	
		// public properties:
			/**
			 * Causes this tween to continue playing when a global pause is active. For example, if TweenJS is using {{#crossLink "Ticker"}}{{/crossLink}},
			 * then setting this to true (the default) will cause this tween to be paused when <code>Ticker.setPaused(true)</code>
			 * is called. See the Tween {{#crossLink "Tween/tick"}}{{/crossLink}} method for more info. Can be set via the props
			 * parameter.
			 * @property ignoreGlobalPause
			 * @type Boolean
			 * @default false
			 */
			this.ignoreGlobalPause = false;
		
			/**
			 * If true, the tween will loop when it reaches the end. Can be set via the props param.
			 * @property loop
			 * @type {Boolean}
			 * @default false
			 */
			this.loop = false;
		
			/**
			 * Specifies the total duration of this tween in milliseconds (or ticks if useTicks is true).
			 * This value is automatically updated as you modify the tween. Changing it directly could result in unexpected
			 * behaviour.
			 * @property duration
			 * @type {Number}
			 * @default 0
			 * @readonly
			 */
			this.duration = 0;
		
			/**
			 * Allows you to specify data that will be used by installed plugins. Each plugin uses this differently, but in general
			 * you specify data by setting it to a property of pluginData with the same name as the plugin class.
			 * @example
			 *	myTween.pluginData.PluginClassName = data;
			 * <br/>
			 * Also, most plugins support a property to enable or disable them. This is typically the plugin class name followed by "_enabled".<br/>
			 * @example
			 *	myTween.pluginData.PluginClassName_enabled = false;<br/>
			 * <br/>
			 * Some plugins also store instance data in this object, usually in a property named _PluginClassName.
			 * See the documentation for individual plugins for more details.
			 * @property pluginData
			 * @type {Object}
			 */
			this.pluginData = pluginData || {};
		
			/**
			 * The target of this tween. This is the object on which the tweened properties will be changed. Changing
			 * this property after the tween is created will not have any effect.
			 * @property target
			 * @type {Object}
			 * @readonly
			 */
			this.target = target;
		
			/**
			 * The current normalized position of the tween. This will always be a value between 0 and duration.
			 * Changing this property directly will have no effect.
			 * @property position
			 * @type {Object}
			 * @readonly
			 */
			this.position = null;
		
			/**
			 * Indicates the tween's current position is within a passive wait.
			 * @property passive
			 * @type {Boolean}
			 * @default false
			 * @readonly
			 **/
			this.passive = false;
		
		// private properties:	
			/**
			 * @property _paused
			 * @type {Boolean}
			 * @default false
			 * @protected
			 */
			this._paused = false;
		
			/**
			 * @property _curQueueProps
			 * @type {Object}
			 * @protected
			 */
			this._curQueueProps = {};
		
			/**
			 * @property _initQueueProps
			 * @type {Object}
			 * @protected
			 */
			this._initQueueProps = {};
		
			/**
			 * @property _steps
			 * @type {Array}
			 * @protected
			 */
			this._steps = [];
		
			/**
			 * @property _actions
			 * @type {Array}
			 * @protected
			 */
			this._actions = [];
		
			/**
			 * Raw position.
			 * @property _prevPosition
			 * @type {Number}
			 * @default 0
			 * @protected
			 */
			this._prevPosition = 0;
		
			/**
			 * The position within the current step.
			 * @property _stepPosition
			 * @type {Number}
			 * @default 0
			 * @protected
			 */
			this._stepPosition = 0; // this is needed by MovieClip.
		
			/**
			 * Normalized position.
			 * @property _prevPos
			 * @type {Number}
			 * @default -1
			 * @protected
			 */
			this._prevPos = -1;
		
			/**
			 * @property _target
			 * @type {Object}
			 * @protected
			 */
			this._target = target;
		
			/**
			 * @property _useTicks
			 * @type {Boolean}
			 * @default false
			 * @protected
			 */
			this._useTicks = false;
		
			/**
			 * @property _inited
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._inited = false;
			
			/**
			 * Indicates whether the tween is currently registered with Tween.
			 * @property _registered
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._registered = false;
	
	
			if (props) {
				this._useTicks = props.useTicks;
				this.ignoreGlobalPause = props.ignoreGlobalPause;
				this.loop = props.loop;
				props.onChange && this.addEventListener("change", props.onChange);
				if (props.override) { Tween.removeTweens(target); }
			}
			if (props&&props.paused) { this._paused=true; }
			else { createjs.Tween._register(this,true); }
			if (props&&props.position!=null) { this.setPosition(props.position, Tween.NONE); }
	
		};
	
		var p = createjs.extend(Tween, createjs.EventDispatcher);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
		
	
	// static properties
		/**
		 * Constant defining the none actionsMode for use with setPosition.
		 * @property NONE
		 * @type Number
		 * @default 0
		 * @static
		 */
		Tween.NONE = 0;
	
		/**
		 * Constant defining the loop actionsMode for use with setPosition.
		 * @property LOOP
		 * @type Number
		 * @default 1
		 * @static
		 */
		Tween.LOOP = 1;
	
		/**
		 * Constant defining the reverse actionsMode for use with setPosition.
		 * @property REVERSE
		 * @type Number
		 * @default 2
		 * @static
		 */
		Tween.REVERSE = 2;
	
		/**
		 * Constant returned by plugins to tell the tween not to use default assignment.
		 * @property IGNORE
		 * @type Object
		 * @static
		 */
		Tween.IGNORE = {};
	
		/**
		 * @property _listeners
		 * @type Array[Tween]
		 * @static
		 * @protected
		 */
		Tween._tweens = [];
	
		/**
		 * @property _plugins
		 * @type Object
		 * @static
		 * @protected
		 */
		Tween._plugins = {};
	
	
	// static methods	
		/**
		 * Returns a new tween instance. This is functionally identical to using "new Tween(...)", but looks cleaner
		 * with the chained syntax of TweenJS.
		 * <h4>Example</h4>
		 *
		 *		var tween = createjs.Tween.get(target);
		 *
		 * @method get
		 * @param {Object} target The target object that will have its properties tweened.
		 * @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`).
		 * All properties default to `false`. Supported props are:
		 * <UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on
		 *    this tween.</LI>
		 *    <LI> override: if true, `createjs.Tween.removeTweens(target)` will be called to remove any other tweens with
		 *    the same target.
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this tween.</LI>
		 *    <LI> onChange: specifies a listener for the {{#crossLink "Tween/change:event"}}{{/crossLink}} event.</LI>
		 * </UL>
		 * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual plugins'
		 * documentation for details.
		 * @param {Boolean} [override=false] If true, any previous tweens on the same target will be removed. This is the
		 * same as calling `Tween.removeTweens(target)`.
		 * @return {Tween} A reference to the created tween. Additional chained tweens, method calls, or callbacks can be
		 * applied to the returned tween instance.
		 * @static
		 */
		Tween.get = function(target, props, pluginData, override) {
			if (override) { Tween.removeTweens(target); }
			return new Tween(target, props, pluginData);
		};
	
		/**
		 * Advances all tweens. This typically uses the {{#crossLink "Ticker"}}{{/crossLink}} class, but you can call it
		 * manually if you prefer to use your own "heartbeat" implementation.
		 * @method tick
		 * @param {Number} delta The change in time in milliseconds since the last tick. Required unless all tweens have
		 * `useTicks` set to true.
		 * @param {Boolean} paused Indicates whether a global pause is in effect. Tweens with {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}}
		 * will ignore this, but all others will pause if this is `true`.
		 * @static
		 */
		Tween.tick = function(delta, paused) {
			var tweens = Tween._tweens.slice(); // to avoid race conditions.
			for (var i=tweens.length-1; i>=0; i--) {
				var tween = tweens[i];
				if ((paused && !tween.ignoreGlobalPause) || tween._paused) { continue; }
				tween.tick(tween._useTicks?1:delta);
			}
		};
	
		/**
		 * Handle events that result from Tween being used as an event handler. This is included to allow Tween to handle
		 * {{#crossLink "Ticker/tick:event"}}{{/crossLink}} events from the createjs {{#crossLink "Ticker"}}{{/crossLink}}.
		 * No other events are handled in Tween.
		 * @method handleEvent
		 * @param {Object} event An event object passed in by the {{#crossLink "EventDispatcher"}}{{/crossLink}}. Will
		 * usually be of type "tick".
		 * @private
		 * @static
		 * @since 0.4.2
		 */
		Tween.handleEvent = function(event) {
			if (event.type == "tick") {
				this.tick(event.delta, event.paused);
			}
		};
	
		/**
		 * Removes all existing tweens for a target. This is called automatically by new tweens if the `override`
		 * property is `true`.
		 * @method removeTweens
		 * @param {Object} target The target object to remove existing tweens from.
		 * @static
		 */
		Tween.removeTweens = function(target) {
			if (!target.tweenjs_count) { return; }
			var tweens = Tween._tweens;
			for (var i=tweens.length-1; i>=0; i--) {
				var tween = tweens[i];
				if (tween._target == target) {
					tween._paused = true;
					tweens.splice(i, 1);
				}
			}
			target.tweenjs_count = 0;
		};
	
		/**
		 * Stop and remove all existing tweens.
		 * @method removeAllTweens
		 * @static
		 * @since 0.4.1
		 */
		Tween.removeAllTweens = function() {
			var tweens = Tween._tweens;
			for (var i= 0, l=tweens.length; i<l; i++) {
				var tween = tweens[i];
				tween._paused = true;
				tween.target&&(tween.target.tweenjs_count = 0);
			}
			tweens.length = 0;
		};
	
		/**
		 * Indicates whether there are any active tweens (and how many) on the target object (if specified) or in general.
		 * @method hasActiveTweens
		 * @param {Object} [target] The target to check for active tweens. If not specified, the return value will indicate
		 * if there are any active tweens on any target.
		 * @return {Boolean} If there are active tweens.
		 * @static
		 */
		Tween.hasActiveTweens = function(target) {
			if (target) { return target.tweenjs_count != null && !!target.tweenjs_count; }
			return Tween._tweens && !!Tween._tweens.length;
		};
	
		/**
		 * Installs a plugin, which can modify how certain properties are handled when tweened. See the {{#crossLink "CSSPlugin"}}{{/crossLink}}
		 * for an example of how to write TweenJS plugins.
		 * @method installPlugin
		 * @static
		 * @param {Object} plugin The plugin class to install
		 * @param {Array} properties An array of properties that the plugin will handle.
		 */
		Tween.installPlugin = function(plugin, properties) {
			var priority = plugin.priority;
			if (priority == null) { plugin.priority = priority = 0; }
			for (var i=0,l=properties.length,p=Tween._plugins;i<l;i++) {
				var n = properties[i];
				if (!p[n]) { p[n] = [plugin]; }
				else {
					var arr = p[n];
					for (var j=0,jl=arr.length;j<jl;j++) {
						if (priority < arr[j].priority) { break; }
					}
					p[n].splice(j,0,plugin);
				}
			}
		};
	
		/**
		 * Registers or unregisters a tween with the ticking system.
		 * @method _register
		 * @param {Tween} tween The tween instance to register or unregister.
		 * @param {Boolean} value If `true`, the tween is registered. If `false` the tween is unregistered.
		 * @static
		 * @protected
		 */
		Tween._register = function(tween, value) {
			var target = tween._target;
			var tweens = Tween._tweens;
			if (value && !tween._registered) {
				// TODO: this approach might fail if a dev is using sealed objects in ES5
				if (target) { target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count+1 : 1; }
				tweens.push(tween);
				if (!Tween._inited && createjs.Ticker) { createjs.Ticker.addEventListener("tick", Tween); Tween._inited = true; }
			} else if (!value && tween._registered) {
				if (target) { target.tweenjs_count--; }
				var i = tweens.length;
				while (i--) {
					if (tweens[i] == tween) {
						tweens.splice(i, 1);
						break;
					}
				}
			}
			tween._registered = value;
		};
	
	
	// events:
		/**
		 * Called whenever the tween's position changes.
		 * @event change
		 * @since 0.4.0
		 **/
		
	
	// public methods:
		/**
		 * Queues a wait (essentially an empty tween).
		 * <h4>Example</h4>
		 *
		 *		//This tween will wait 1s before alpha is faded to 0.
		 *		createjs.Tween.get(target).wait(1000).to({alpha:0}, 1000);
		 *
		 * @method wait
		 * @param {Number} duration The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
		 * @param {Boolean} [passive] Tween properties will not be updated during a passive wait. This
		 * is mostly useful for use with {{#crossLink "Timeline"}}{{/crossLink}} instances that contain multiple tweens
		 * affecting the same target at different times.
		 * @return {Tween} This tween instance (for chaining calls).
		 **/
		p.wait = function(duration, passive) {
			if (duration == null || duration <= 0) { return this; }
			var o = this._cloneProps(this._curQueueProps);
			return this._addStep({d:duration, p0:o, e:this._linearEase, p1:o, v:passive});
		};
	
		/**
		 * Queues a tween from the current values to the target properties. Set duration to 0 to jump to these value.
		 * Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric
		 * properties will be set at the end of the specified duration.
		 * <h4>Example</h4>
		 *
		 *		createjs.Tween.get(target).to({alpha:0}, 1000);
		 *
		 * @method to
		 * @param {Object} props An object specifying property target values for this tween (Ex. `{x:300}` would tween the x
		 * property of the target to 300).
		 * @param {Number} [duration=0] The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
		 * @param {Function} [ease="linear"] The easing function to use for this tween. See the {{#crossLink "Ease"}}{{/crossLink}}
		 * class for a list of built-in ease functions.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.to = function(props, duration, ease) {
			if (isNaN(duration) || duration < 0) { duration = 0; }
			return this._addStep({d:duration||0, p0:this._cloneProps(this._curQueueProps), e:ease, p1:this._cloneProps(this._appendQueueProps(props))});
		};
	
		/**
		 * Queues an action to call the specified function.
		 * <h4>Example</h4>
		 *
		 *   	//would call myFunction() after 1 second.
		 *   	myTween.wait(1000).call(myFunction);
		 *
		 * @method call
		 * @param {Function} callback The function to call.
		 * @param {Array} [params]. The parameters to call the function with. If this is omitted, then the function
		 *      will be called with a single param pointing to this tween.
		 * @param {Object} [scope]. The scope to call the function in. If omitted, it will be called in the target's
		 *      scope.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.call = function(callback, params, scope) {
			return this._addAction({f:callback, p:params ? params : [this], o:scope ? scope : this._target});
		};
	
		// TODO: add clarification between this and a 0 duration .to:
		/**
		 * Queues an action to set the specified props on the specified target. If target is null, it will use this tween's
		 * target.
		 * <h4>Example</h4>
		 *
		 *		myTween.wait(1000).set({visible:false},foo);
		 *
		 * @method set
		 * @param {Object} props The properties to set (ex. `{visible:false}`).
		 * @param {Object} [target] The target to set the properties on. If omitted, they will be set on the tween's target.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.set = function(props, target) {
			return this._addAction({f:this._set, o:this, p:[props, target ? target : this._target]});
		};
	
		/**
		 * Queues an action to play (unpause) the specified tween. This enables you to sequence multiple tweens.
		 * <h4>Example</h4>
		 *
		 *		myTween.to({x:100},500).play(otherTween);
		 *
		 * @method play
		 * @param {Tween} tween The tween to play.
		 * @return {Tween} This tween instance (for chaining calls).
		 */
		p.play = function(tween) {
			if (!tween) { tween = this; }
			return this.call(tween.setPaused, [false], tween);
		};
	
		/**
		 * Queues an action to pause the specified tween.
		 * @method pause
		 * @param {Tween} tween The tween to pause. If null, it pauses this tween.
		 * @return {Tween} This tween instance (for chaining calls)
		 */
		p.pause = function(tween) {
			if (!tween) { tween = this; }
			return this.call(tween.setPaused, [true], tween);
		};
	
		/**
		 * Advances the tween to a specified position.
		 * @method setPosition
		 * @param {Number} value The position to seek to in milliseconds (or ticks if useTicks is true).
		 * @param {Number} [actionsMode=1] Specifies how actions are handled (ie. call, set, play, pause):
		 * <ul>
		 *      <li>{{#crossLink "Tween/NONE:property"}}{{/crossLink}} (0) - run no actions.</li>
		 *      <li>{{#crossLink "Tween/LOOP:property"}}{{/crossLink}} (1) - if new position is less than old, then run all
		 *      actions between old and duration, then all actions between 0 and new.</li>
		 *      <li>{{#crossLink "Tween/REVERSE:property"}}{{/crossLink}} (2) - if new position is less than old, run all
		 *      actions between them in reverse.</li>
		 * </ul>
		 * @return {Boolean} Returns `true` if the tween is complete (ie. the full tween has run & {{#crossLink "Tween/loop:property"}}{{/crossLink}}
		 * is `false`).
		 */
		p.setPosition = function(value, actionsMode) {
			if (value < 0) { value = 0; }
			if (actionsMode == null) { actionsMode = 1; }
	
			// normalize position:
			var t = value;
			var end = false;
			if (t >= this.duration) {
				if (this.loop) { t = t%this.duration; }
				else {
					t = this.duration;
					end = true;
				}
			}
			if (t == this._prevPos) { return end; }
	
	
			var prevPos = this._prevPos;
			this.position = this._prevPos = t; // set this in advance in case an action modifies position.
			this._prevPosition = value;
	
			// handle tweens:
			if (this._target) {
				if (end) {
					// addresses problems with an ending zero length step.
					this._updateTargetProps(null,1);
				} else if (this._steps.length > 0) {
					// find our new tween index:
					for (var i=0, l=this._steps.length; i<l; i++) {
						if (this._steps[i].t > t) { break; }
					}
					var step = this._steps[i-1];
					this._updateTargetProps(step,(this._stepPosition = t-step.t)/step.d);
				}
			}
	
			// run actions:
			if (actionsMode != 0 && this._actions.length > 0) {
				if (this._useTicks) {
					// only run the actions we landed on.
					this._runActions(t,t);
				} else if (actionsMode == 1 && t<prevPos) {
					if (prevPos != this.duration) { this._runActions(prevPos, this.duration); }
					this._runActions(0, t, true);
				} else {
					this._runActions(prevPos, t);
				}
			}
	
			if (end) { this.setPaused(true); }
	
	        this.dispatchEvent("change");
			return end;
		};
	
		/**
		 * Advances this tween by the specified amount of time in milliseconds (or ticks if`useTicks` is `true`).
		 * This is normally called automatically by the Tween engine (via {{#crossLink "Tween/tick"}}{{/crossLink}}), but is
		 * exposed for advanced uses.
		 * @method tick
		 * @param {Number} delta The time to advance in milliseconds (or ticks if `useTicks` is `true`).
		 */
		p.tick = function(delta) {
			if (this._paused) { return; }
			this.setPosition(this._prevPosition+delta);
		};
	
		/**
		 * Pauses or plays this tween.
		 * @method setPaused
		 * @param {Boolean} [value=true] Indicates whether the tween should be paused (`true`) or played (`false`).
		 * @return {Tween} This tween instance (for chaining calls)
		 */
		p.setPaused = function(value) {
			if (this._paused === !!value) { return this; }
			this._paused = !!value;
			Tween._register(this, !value);
			return this;
		};
	
		// tiny api (primarily for tool output):
		p.w = p.wait;
		p.t = p.to;
		p.c = p.call;
		p.s = p.set;
	
		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 */
		p.toString = function() {
			return "[Tween]";
		};
	
		/**
		 * @method clone
		 * @protected
		 */
		p.clone = function() {
			throw("Tween can not be cloned.")
		};
	
	// private methods:
		/**
		 * @method _updateTargetProps
		 * @param {Object} step
		 * @param {Number} ratio
		 * @protected
		 */
		p._updateTargetProps = function(step, ratio) {
			var p0,p1,v,v0,v1,arr;
			if (!step && ratio == 1) {
				// GDS: when does this run? Just at the very end? Shouldn't.
				this.passive = false;
				p0 = p1 = this._curQueueProps;
			} else {
				this.passive = !!step.v;
				if (this.passive) { return; } // don't update props.
				// apply ease to ratio.
				if (step.e) { ratio = step.e(ratio,0,1,1); }
				p0 = step.p0;
				p1 = step.p1;
			}
	
			for (var n in this._initQueueProps) {
				if ((v0 = p0[n]) == null) { p0[n] = v0 = this._initQueueProps[n]; }
				if ((v1 = p1[n]) == null) { p1[n] = v1 = v0; }
				if (v0 == v1 || ratio == 0 || ratio == 1 || (typeof(v0) != "number")) {
					// no interpolation - either at start, end, values don't change, or the value is non-numeric.
					v = ratio == 1 ? v1 : v0;
				} else {
					v = v0+(v1-v0)*ratio;
				}
	
				var ignore = false;
				if (arr = Tween._plugins[n]) {
					for (var i=0,l=arr.length;i<l;i++) {
						var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step&&p0==p1, !step);
						if (v2 == Tween.IGNORE) { ignore = true; }
						else { v = v2; }
					}
				}
				if (!ignore) { this._target[n] = v; }
			}
	
		};
	
		/**
		 * @method _runActions
		 * @param {Number} startPos
		 * @param {Number} endPos
		 * @param {Boolean} includeStart
		 * @protected
		 */
		p._runActions = function(startPos, endPos, includeStart) {
			var sPos = startPos;
			var ePos = endPos;
			var i = -1;
			var j = this._actions.length;
			var k = 1;
			if (startPos > endPos) {
				// running backwards, flip everything:
				sPos = endPos;
				ePos = startPos;
				i = j;
				j = k = -1;
			}
			while ((i+=k) != j) {
				var action = this._actions[i];
				var pos = action.t;
				if (pos == ePos || (pos > sPos && pos < ePos) || (includeStart && pos == startPos) ) {
					action.f.apply(action.o, action.p);
				}
			}
		};
	
		/**
		 * @method _appendQueueProps
		 * @param {Object} o
		 * @protected
		 */
		p._appendQueueProps = function(o) {
			var arr,oldValue,i, l, injectProps;
			for (var n in o) {
				if (this._initQueueProps[n] === undefined) {
					oldValue = this._target[n];
	
					// init plugins:
					if (arr = Tween._plugins[n]) {
						for (i=0,l=arr.length;i<l;i++) {
							oldValue = arr[i].init(this, n, oldValue);
						}
					}
					this._initQueueProps[n] = this._curQueueProps[n] = (oldValue===undefined) ? null : oldValue;
				} else {
					oldValue = this._curQueueProps[n];
				}
			}
	
			for (var n in o) {
				oldValue = this._curQueueProps[n];
				if (arr = Tween._plugins[n]) {
					injectProps = injectProps||{};
					for (i=0, l=arr.length;i<l;i++) {
						// TODO: remove the check for .step in the next version. It's here for backwards compatibility.
						if (arr[i].step) { arr[i].step(this, n, oldValue, o[n], injectProps); }
					}
				}
				this._curQueueProps[n] = o[n];
			}
			if (injectProps) { this._appendQueueProps(injectProps); }
			return this._curQueueProps;
		};
	
		/**
		 * @method _cloneProps
		 * @param {Object} props
		 * @protected
		 */
		p._cloneProps = function(props) {
			var o = {};
			for (var n in props) {
				o[n] = props[n];
			}
			return o;
		};
	
		/**
		 * @method _addStep
		 * @param {Object} o
		 * @protected
		 */
		p._addStep = function(o) {
			if (o.d > 0) {
				this._steps.push(o);
				o.t = this.duration;
				this.duration += o.d;
			}
			return this;
		};
	
		/**
		 * @method _addAction
		 * @param {Object} o
		 * @protected
		 */
		p._addAction = function(o) {
			o.t = this.duration;
			this._actions.push(o);
			return this;
		};
	
		/**
		 * @method _set
		 * @param {Object} props
		 * @param {Object} o
		 * @protected
		 */
		p._set = function(props, o) {
			for (var n in props) {
				o[n] = props[n];
			}
		};
	
		createjs.Tween = createjs.promote(Tween, "EventDispatcher");
	
	}());
	
	//##############################################################################
	// Timeline.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	
	(function() {
		"use strict";
		
	
	// constructor	
		/**
		 * The Timeline class synchronizes multiple tweens and allows them to be controlled as a group. Please note that if a
		 * timeline is looping, the tweens on it may appear to loop even if the "loop" property of the tween is false.
		 * @class Timeline
		 * @param {Array} tweens An array of Tweens to add to this timeline. See {{#crossLink "Timeline/addTween"}}{{/crossLink}}
		 * for more info.
		 * @param {Object} labels An object defining labels for using {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}.
		 * See {{#crossLink "Timeline/setLabels"}}{{/crossLink}}
		 * for details.
		 * @param {Object} props The configuration properties to apply to this tween instance (ex. `{loop:true}`). All properties
		 * default to false. Supported props are:<UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the ignoreGlobalPause property on this tween.</LI>
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this timeline.</LI>
		 *    <LI> onChange: specifies a listener to add for the {{#crossLink "Timeline/change:event"}}{{/crossLink}} event.</LI>
		 * </UL>
		 * @extends EventDispatcher
		 * @constructor
		 **/
		function Timeline(tweens, labels, props) {
			this.EventDispatcher_constructor();
	
		// public properties:
			/**
			 * Causes this timeline to continue playing when a global pause is active.
			 * @property ignoreGlobalPause
			 * @type Boolean
			 **/
			this.ignoreGlobalPause = false;
	
			/**
			 * The total duration of this timeline in milliseconds (or ticks if `useTicks `is `true`). This value is usually
			 * automatically updated as you modify the timeline. See {{#crossLink "Timeline/updateDuration"}}{{/crossLink}}
			 * for more information.
			 * @property duration
			 * @type Number
			 * @default 0
			 * @readonly
			 **/
			this.duration = 0;
	
			/**
			 * If true, the timeline will loop when it reaches the end. Can be set via the props param.
			 * @property loop
			 * @type Boolean
			 **/
			this.loop = false;
	
			/**
			 * The current normalized position of the timeline. This will always be a value between 0 and
			 * {{#crossLink "Timeline/duration:property"}}{{/crossLink}}.
			 * Changing this property directly will have no effect.
			 * @property position
			 * @type Object
			 * @readonly
			 **/
			this.position = null;
	
			// private properties:
			/**
			 * @property _paused
			 * @type Boolean
			 * @protected
			 **/
			this._paused = false;
	
			/**
			 * @property _tweens
			 * @type Array[Tween]
			 * @protected
			 **/
			this._tweens = [];
	
			/**
			 * @property _labels
			 * @type Object
			 * @protected
			 **/
			this._labels = null;
	
			/**
			 * @property _labelList
			 * @type Array[Object]
			 * @protected
			 **/
			this._labelList = null;
	
			/**
			 * @property _prevPosition
			 * @type Number
			 * @default 0
			 * @protected
			 **/
			this._prevPosition = 0;
	
			/**
			 * @property _prevPos
			 * @type Number
			 * @default -1
			 * @protected
			 **/
			this._prevPos = -1;
	
			/**
			 * @property _useTicks
			 * @type Boolean
			 * @default false
			 * @protected
			 **/
			this._useTicks = false;
			
			/**
			 * Indicates whether the timeline is currently registered with Tween.
			 * @property _registered
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._registered = false;
	
	
			if (props) {
				this._useTicks = props.useTicks;
				this.loop = props.loop;
				this.ignoreGlobalPause = props.ignoreGlobalPause;
				props.onChange&&this.addEventListener("change", props.onChange);
			}
			if (tweens) { this.addTween.apply(this, tweens); }
			this.setLabels(labels);
			if (props&&props.paused) { this._paused=true; }
			else { createjs.Tween._register(this,true); }
			if (props&&props.position!=null) { this.setPosition(props.position, createjs.Tween.NONE); }
			
		};
		
		var p = createjs.extend(Timeline, createjs.EventDispatcher);
	
		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
		
	// events:
		/**
		 * Called whenever the timeline's position changes.
		 * @event change
		 * @since 0.5.0
		 **/
	
	
	// public methods:
		/**
		 * Adds one or more tweens (or timelines) to this timeline. The tweens will be paused (to remove them from the
		 * normal ticking system) and managed by this timeline. Adding a tween to multiple timelines will result in
		 * unexpected behaviour.
		 * @method addTween
		 * @param {Tween} ...tween The tween(s) to add. Accepts multiple arguments.
		 * @return {Tween} The first tween that was passed in.
		 **/
		p.addTween = function(tween) {
			var l = arguments.length;
			if (l > 1) {
				for (var i=0; i<l; i++) { this.addTween(arguments[i]); }
				return arguments[0];
			} else if (l == 0) { return null; }
			this.removeTween(tween);
			this._tweens.push(tween);
			tween.setPaused(true);
			tween._paused = false;
			tween._useTicks = this._useTicks;
			if (tween.duration > this.duration) { this.duration = tween.duration; }
			if (this._prevPos >= 0) { tween.setPosition(this._prevPos, createjs.Tween.NONE); }
			return tween;
		};
	
		/**
		 * Removes one or more tweens from this timeline.
		 * @method removeTween
		 * @param {Tween} ...tween The tween(s) to remove. Accepts multiple arguments.
		 * @return Boolean Returns `true` if all of the tweens were successfully removed.
		 **/
		p.removeTween = function(tween) {
			var l = arguments.length;
			if (l > 1) {
				var good = true;
				for (var i=0; i<l; i++) { good = good && this.removeTween(arguments[i]); }
				return good;
			} else if (l == 0) { return false; }
	
			var tweens = this._tweens;
			var i = tweens.length;
			while (i--) {
				if (tweens[i] == tween) {
					tweens.splice(i, 1);
					if (tween.duration >= this.duration) { this.updateDuration(); }
					return true;
				}
			}
			return false;
		};
	
		/**
		 * Adds a label that can be used with {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}.
		 * @method addLabel
		 * @param {String} label The label name.
		 * @param {Number} position The position this label represents.
		 **/
		p.addLabel = function(label, position) {
			this._labels[label] = position;
			var list = this._labelList;
			if (list) {
				for (var i= 0,l=list.length; i<l; i++) { if (position < list[i].position) { break; } }
				list.splice(i, 0, {label:label, position:position});
			}
		};
	
		/**
		 * Defines labels for use with gotoAndPlay/Stop. Overwrites any previously set labels.
		 * @method setLabels
		 * @param {Object} o An object defining labels for using {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}
		 * in the form `{labelName:time}` where time is in milliseconds (or ticks if `useTicks` is `true`).
		 **/
		p.setLabels = function(o) {
			this._labels = o ?  o : {};
		};
	
		/**
		 * Returns a sorted list of the labels defined on this timeline.
		 * @method getLabels
		 * @return {Array[Object]} A sorted array of objects with label and position properties.
		 **/
		p.getLabels = function() {
			var list = this._labelList;
			if (!list) {
				list = this._labelList = [];
				var labels = this._labels;
				for (var n in labels) {
					list.push({label:n, position:labels[n]});
				}
				list.sort(function (a,b) { return a.position- b.position; });
			}
			return list;
		};
	
		/**
		 * Returns the name of the label on or immediately before the current position. For example, given a timeline with
		 * two labels, "first" on frame index 4, and "second" on frame 8, getCurrentLabel would return:
		 * <UL>
		 * 		<LI>null if the current position is 2.</LI>
		 * 		<LI>"first" if the current position is 4.</LI>
		 * 		<LI>"first" if the current position is 7.</LI>
		 * 		<LI>"second" if the current position is 15.</LI>
		 * </UL>
		 * @method getCurrentLabel
		 * @return {String} The name of the current label or null if there is no label
		 **/
		p.getCurrentLabel = function() {
			var labels = this.getLabels();
			var pos = this.position;
			var l = labels.length;
			if (l) {
				for (var i = 0; i<l; i++) { if (pos < labels[i].position) { break; } }
				return (i==0) ? null : labels[i-1].label;
			}
			return null;
		};
	
		/**
		 * Unpauses this timeline and jumps to the specified position or label.
		 * @method gotoAndPlay
		 * @param {String|Number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is `true`)
		 * or label to jump to.
		 **/
		p.gotoAndPlay = function(positionOrLabel) {
			this.setPaused(false);
			this._goto(positionOrLabel);
		};
	
		/**
		 * Pauses this timeline and jumps to the specified position or label.
		 * @method gotoAndStop
		 * @param {String|Number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is `true`) or label
		 * to jump to.
		 **/
		p.gotoAndStop = function(positionOrLabel) {
			this.setPaused(true);
			this._goto(positionOrLabel);
		};
	
		/**
		 * Advances the timeline to the specified position.
		 * @method setPosition
		 * @param {Number} value The position to seek to in milliseconds (or ticks if `useTicks` is `true`).
		 * @param {Number} [actionsMode] parameter specifying how actions are handled. See the Tween {{#crossLink "Tween/setPosition"}}{{/crossLink}}
		 * method for more details.
		 * @return {Boolean} Returns `true` if the timeline is complete (ie. the full timeline has run & {{#crossLink "Timeline/loop:property"}}{{/crossLink}}
		 * is `false`).
		 **/
		p.setPosition = function(value, actionsMode) {
			var t = this._calcPosition(value);
			var end = !this.loop && value >= this.duration;
			if (t == this._prevPos) { return end; }
			this._prevPosition = value;
			this.position = this._prevPos = t; // in case an action changes the current frame.
			for (var i=0, l=this._tweens.length; i<l; i++) {
				this._tweens[i].setPosition(t, actionsMode);
				if (t != this._prevPos) { return false; } // an action changed this timeline's position.
			}
			if (end) { this.setPaused(true); }
			this.dispatchEvent("change");
			return end;
		};
	
		/**
		 * Pauses or plays this timeline.
		 * @method setPaused
		 * @param {Boolean} value Indicates whether the tween should be paused (`true`) or played (`false`).
		 **/
		p.setPaused = function(value) {
			this._paused = !!value; 
			createjs.Tween._register(this, !value);
		};
	
		/**
		 * Recalculates the duration of the timeline. The duration is automatically updated when tweens are added or removed,
		 * but this method is useful if you modify a tween after it was added to the timeline.
		 * @method updateDuration
		 **/
		p.updateDuration = function() {
			this.duration = 0;
			for (var i=0,l=this._tweens.length; i<l; i++) {
				var tween = this._tweens[i];
				if (tween.duration > this.duration) { this.duration = tween.duration; }
			}
		};
	
		/**
		 * Advances this timeline by the specified amount of time in milliseconds (or ticks if `useTicks` is `true`).
		 * This is normally called automatically by the Tween engine (via the {{#crossLink "Tween/tick:event"}}{{/crossLink}}
		 * event), but is exposed for advanced uses.
		 * @method tick
		 * @param {Number} delta The time to advance in milliseconds (or ticks if useTicks is true).
		 **/
		p.tick = function(delta) {
			this.setPosition(this._prevPosition+delta);
		};
	
		/**
		 * If a numeric position is passed, it is returned unchanged. If a string is passed, the position of the
		 * corresponding frame label will be returned, or `null` if a matching label is not defined.
		 * @method resolve
		 * @param {String|Number} positionOrLabel A numeric position value or label string.
		 **/
		p.resolve = function(positionOrLabel) {
			var pos = Number(positionOrLabel);
			if (isNaN(pos)) { pos = this._labels[positionOrLabel]; }
			return pos;
		};
	
		/**
		* Returns a string representation of this object.
		* @method toString
		* @return {String} a string representation of the instance.
		**/
		p.toString = function() {
			return "[Timeline]";
		};
	
		/**
		 * @method clone
		 * @protected
		 **/
		p.clone = function() {
			throw("Timeline can not be cloned.")
		};
	
	// private methods:
		/**
		 * @method _goto
		 * @param {String | Number} positionOrLabel
		 * @protected
		 **/
		p._goto = function(positionOrLabel) {
			var pos = this.resolve(positionOrLabel);
			if (pos != null) { this.setPosition(pos); }
		};
		
		/**
		 * @method _calcPosition
		 * @param {Number} value
		 * @return {Number}
		 * @protected
		 **/
		p._calcPosition = function(value) {
			if (value < 0) { return 0; }
			if (value < this.duration) { return value; }
			return this.loop ? value%this.duration : this.duration;
		};
	
		createjs.Timeline = createjs.promote(Timeline, "EventDispatcher");
	
	}());
	
	//##############################################################################
	// Ease.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
		/**
		 * The Ease class provides a collection of easing functions for use with TweenJS. It does not use the standard 4 param
		 * easing signature. Instead it uses a single param which indicates the current linear ratio (0 to 1) of the tween.
		 *
		 * Most methods on Ease can be passed directly as easing functions:
		 *
		 *      Tween.get(target).to({x:100}, 500, Ease.linear);
		 *
		 * However, methods beginning with "get" will return an easing function based on parameter values:
		 *
		 *      Tween.get(target).to({y:200}, 500, Ease.getPowIn(2.2));
		 *
		 * Please see the <a href="http://www.createjs.com/Demos/TweenJS/Tween_SparkTable">spark table demo</a> for an
		 * overview of the different ease types on <a href="http://tweenjs.com">TweenJS.com</a>.
		 *
		 * <em>Equations derived from work by Robert Penner.</em>
		 * @class Ease
		 * @static
		 **/
		function Ease() {
			throw "Ease cannot be instantiated.";
		}
	
	
	// static methods and properties
		/**
		 * @method linear
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.linear = function(t) { return t; };
	
		/**
		 * Identical to linear.
		 * @method none
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.none = Ease.linear;
	
		/**
		 * Mimics the simple -100 to 100 easing in Flash Pro.
		 * @method get
		 * @param {Number} amount A value from -1 (ease in) to 1 (ease out) indicating the strength and direction of the ease.
		 * @static
		 * @return {Function}
		 **/
		Ease.get = function(amount) {
			if (amount < -1) { amount = -1; }
			if (amount > 1) { amount = 1; }
			return function(t) {
				if (amount==0) { return t; }
				if (amount<0) { return t*(t*-amount+1+amount); }
				return t*((2-t)*amount+(1-amount));
			};
		};
	
		/**
		 * Configurable exponential ease.
		 * @method getPowIn
		 * @param {Number} pow The exponent to use (ex. 3 would return a cubic ease).
		 * @static
		 * @return {Function}
		 **/
		Ease.getPowIn = function(pow) {
			return function(t) {
				return Math.pow(t,pow);
			};
		};
	
		/**
		 * Configurable exponential ease.
		 * @method getPowOut
		 * @param {Number} pow The exponent to use (ex. 3 would return a cubic ease).
		 * @static
		 * @return {Function}
		 **/
		Ease.getPowOut = function(pow) {
			return function(t) {
				return 1-Math.pow(1-t,pow);
			};
		};
	
		/**
		 * Configurable exponential ease.
		 * @method getPowInOut
		 * @param {Number} pow The exponent to use (ex. 3 would return a cubic ease).
		 * @static
		 * @return {Function}
		 **/
		Ease.getPowInOut = function(pow) {
			return function(t) {
				if ((t*=2)<1) return 0.5*Math.pow(t,pow);
				return 1-0.5*Math.abs(Math.pow(2-t,pow));
			};
		};
	
		/**
		 * @method quadIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quadIn = Ease.getPowIn(2);
		/**
		 * @method quadOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quadOut = Ease.getPowOut(2);
		/**
		 * @method quadInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quadInOut = Ease.getPowInOut(2);
	
		/**
		 * @method cubicIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.cubicIn = Ease.getPowIn(3);
		/**
		 * @method cubicOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.cubicOut = Ease.getPowOut(3);
		/**
		 * @method cubicInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.cubicInOut = Ease.getPowInOut(3);
	
		/**
		 * @method quartIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quartIn = Ease.getPowIn(4);
		/**
		 * @method quartOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quartOut = Ease.getPowOut(4);
		/**
		 * @method quartInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quartInOut = Ease.getPowInOut(4);
	
		/**
		 * @method quintIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quintIn = Ease.getPowIn(5);
		/**
		 * @method quintOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quintOut = Ease.getPowOut(5);
		/**
		 * @method quintInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.quintInOut = Ease.getPowInOut(5);
	
		/**
		 * @method sineIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.sineIn = function(t) {
			return 1-Math.cos(t*Math.PI/2);
		};
	
		/**
		 * @method sineOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.sineOut = function(t) {
			return Math.sin(t*Math.PI/2);
		};
	
		/**
		 * @method sineInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.sineInOut = function(t) {
			return -0.5*(Math.cos(Math.PI*t) - 1);
		};
	
		/**
		 * Configurable "back in" ease.
		 * @method getBackIn
		 * @param {Number} amount The strength of the ease.
		 * @static
		 * @return {Function}
		 **/
		Ease.getBackIn = function(amount) {
			return function(t) {
				return t*t*((amount+1)*t-amount);
			};
		};
		/**
		 * @method backIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.backIn = Ease.getBackIn(1.7);
	
		/**
		 * Configurable "back out" ease.
		 * @method getBackOut
		 * @param {Number} amount The strength of the ease.
		 * @static
		 * @return {Function}
		 **/
		Ease.getBackOut = function(amount) {
			return function(t) {
				return (--t*t*((amount+1)*t + amount) + 1);
			};
		};
		/**
		 * @method backOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.backOut = Ease.getBackOut(1.7);
	
		/**
		 * Configurable "back in out" ease.
		 * @method getBackInOut
		 * @param {Number} amount The strength of the ease.
		 * @static
		 * @return {Function}
		 **/
		Ease.getBackInOut = function(amount) {
			amount*=1.525;
			return function(t) {
				if ((t*=2)<1) return 0.5*(t*t*((amount+1)*t-amount));
				return 0.5*((t-=2)*t*((amount+1)*t+amount)+2);
			};
		};
		/**
		 * @method backInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.backInOut = Ease.getBackInOut(1.7);
	
		/**
		 * @method circIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.circIn = function(t) {
			return -(Math.sqrt(1-t*t)- 1);
		};
	
		/**
		 * @method circOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.circOut = function(t) {
			return Math.sqrt(1-(--t)*t);
		};
	
		/**
		 * @method circInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.circInOut = function(t) {
			if ((t*=2) < 1) return -0.5*(Math.sqrt(1-t*t)-1);
			return 0.5*(Math.sqrt(1-(t-=2)*t)+1);
		};
	
		/**
		 * @method bounceIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.bounceIn = function(t) {
			return 1-Ease.bounceOut(1-t);
		};
	
		/**
		 * @method bounceOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.bounceOut = function(t) {
			if (t < 1/2.75) {
				return (7.5625*t*t);
			} else if (t < 2/2.75) {
				return (7.5625*(t-=1.5/2.75)*t+0.75);
			} else if (t < 2.5/2.75) {
				return (7.5625*(t-=2.25/2.75)*t+0.9375);
			} else {
				return (7.5625*(t-=2.625/2.75)*t +0.984375);
			}
		};
	
		/**
		 * @method bounceInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.bounceInOut = function(t) {
			if (t<0.5) return Ease.bounceIn (t*2) * .5;
			return Ease.bounceOut(t*2-1)*0.5+0.5;
		};
	
		/**
		 * Configurable elastic ease.
		 * @method getElasticIn
		 * @param {Number} amplitude
		 * @param {Number} period
		 * @static
		 * @return {Function}
		 **/
		Ease.getElasticIn = function(amplitude,period) {
			var pi2 = Math.PI*2;
			return function(t) {
				if (t==0 || t==1) return t;
				var s = period/pi2*Math.asin(1/amplitude);
				return -(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period));
			};
		};
		/**
		 * @method elasticIn
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.elasticIn = Ease.getElasticIn(1,0.3);
	
		/**
		 * Configurable elastic ease.
		 * @method getElasticOut
		 * @param {Number} amplitude
		 * @param {Number} period
		 * @static
		 * @return {Function}
		 **/
		Ease.getElasticOut = function(amplitude,period) {
			var pi2 = Math.PI*2;
			return function(t) {
				if (t==0 || t==1) return t;
				var s = period/pi2 * Math.asin(1/amplitude);
				return (amplitude*Math.pow(2,-10*t)*Math.sin((t-s)*pi2/period )+1);
			};
		};
		/**
		 * @method elasticOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.elasticOut = Ease.getElasticOut(1,0.3);
	
		/**
		 * Configurable elastic ease.
		 * @method getElasticInOut
		 * @param {Number} amplitude
		 * @param {Number} period
		 * @static
		 * @return {Function}
		 **/
		Ease.getElasticInOut = function(amplitude,period) {
			var pi2 = Math.PI*2;
			return function(t) {
				var s = period/pi2 * Math.asin(1/amplitude);
				if ((t*=2)<1) return -0.5*(amplitude*Math.pow(2,10*(t-=1))*Math.sin( (t-s)*pi2/period ));
				return amplitude*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*pi2/period)*0.5+1;
			};
		};
		/**
		 * @method elasticInOut
		 * @param {Number} t
		 * @static
		 * @return {Number}
		 **/
		Ease.elasticInOut = Ease.getElasticInOut(1,0.3*1.5);
	
		createjs.Ease = Ease;
	
	}());
	
	//##############################################################################
	// MotionGuidePlugin.js
	//##############################################################################
	
	this.createjs = this.createjs||{};
	
	(function() {
		"use strict";
	
		/**
		 * A TweenJS plugin for working with motion guides.
		 *
		 * To use, install the plugin after TweenJS has loaded. Next tween the 'guide' property with an object as detailed below.
		 *
		 *       createjs.MotionGuidePlugin.install();
		 *
		 * <h4>Example</h4>
		 *
		 *      // Using a Motion Guide
		 *	    createjs.Tween.get(target).to({guide:{ path:[0,0, 0,200,200,200, 200,0,0,0] }},7000);
		 *	    // Visualizing the line
		 *	    graphics.moveTo(0,0).curveTo(0,200,200,200).curveTo(200,0,0,0);
		 *
		 * Each path needs pre-computation to ensure there's fast performance. Because of the pre-computation there's no
		 * built in support for path changes mid tween. These are the Guide Object's properties:<UL>
		 *      <LI> path: Required, Array : The x/y points used to draw the path with a moveTo and 1 to n curveTo calls.</LI>
		 *      <LI> start: Optional, 0-1 : Initial position, default 0 except for when continuing along the same path.</LI>
		 *      <LI> end: Optional, 0-1 : Final position, default 1 if not specified.</LI>
		 *      <LI> orient: Optional, string : "fixed"/"auto"/"cw"/"ccw"<UL>
		 *				<LI>"fixed" forces the object to face down the path all movement (relative to start rotation),</LI>
		 *      		<LI>"auto" rotates the object along the path relative to the line.</LI>
		 *      		<LI>"cw"/"ccw" force clockwise or counter clockwise rotations including flash like behaviour</LI>
		 * 		</UL></LI>
		 * </UL>
		 * Guide objects should not be shared between tweens even if all properties are identical, the library stores
		 * information on these objects in the background and sharing them can cause unexpected behaviour. Values
		 * outside 0-1 range of tweens will be a "best guess" from the appropriate part of the defined curve.
		 *
		 * @class MotionGuidePlugin
		 * @constructor
		 **/
		function MotionGuidePlugin() {
			throw("MotionGuidePlugin cannot be instantiated.")
		};
	
	
	// static properties:
		/**
		 * @property priority
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.priority = 0; // high priority, should run sooner
	
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotOffS;
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotOffE;
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotNormS;
		/**
		 * @property temporary variable storage
		 * @private
		 * @static
		 */
		MotionGuidePlugin._rotNormE;
	
	
	// static methods
		/**
		 * Installs this plugin for use with TweenJS. Call this once after TweenJS is loaded to enable this plugin.
		 * @method install
		 * @static
		 **/
		MotionGuidePlugin.install = function() {
			createjs.Tween.installPlugin(MotionGuidePlugin, ["guide", "x", "y", "rotation"]);
			return createjs.Tween.IGNORE;
		};
	
		/**
		 * @method init
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.init = function(tween, prop, value) {
			var target = tween.target;
			if(!target.hasOwnProperty("x")){ target.x = 0; }
			if(!target.hasOwnProperty("y")){ target.y = 0; }
			if(!target.hasOwnProperty("rotation")){ target.rotation = 0; }
	
			if(prop=="rotation"){ tween.__needsRot = true; }
			return prop=="guide"?null:value;
		};
	
		/**
		 * @method step
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.step = function(tween, prop, startValue, endValue, injectProps) {
			// other props
			if(prop == "rotation"){
				tween.__rotGlobalS = startValue;
				tween.__rotGlobalE = endValue;
				MotionGuidePlugin.testRotData(tween, injectProps);
			}
			if(prop != "guide"){ return endValue; }
	
			// guide only information - Start -
			var temp, data = endValue;
			if(!data.hasOwnProperty("path")){ data.path = []; }
			var path = data.path;
			if(!data.hasOwnProperty("end")){ data.end = 1; }
			if(!data.hasOwnProperty("start")){
				data.start = (startValue&&startValue.hasOwnProperty("end")&&startValue.path===path)?startValue.end:0;
			}
	
			// Figure out subline information
			if(data.hasOwnProperty("_segments") && data._length){ return endValue; }
			var l = path.length;
			var accuracy = 10;		// Adjust to improve line following precision but sacrifice performance (# of seg)
			if(l >= 6 && (l-2) % 4 == 0){	// Enough points && contains correct number per entry ignoring start
				data._segments = [];
				data._length = 0;
				for(var i=2; i<l; i+=4){
					var sx = path[i-2], sy = path[i-1];
					var cx = path[i+0], cy = path[i+1];
					var ex = path[i+2], ey = path[i+3];
					var oldX = sx, oldY = sy;
					var tempX, tempY, total = 0;
					var sublines = [];
					for(var j=1; j<=accuracy; j++){
						var t = j/accuracy;
						var inv = 1 - t;
						tempX = inv*inv * sx + 2 * inv * t * cx + t*t * ex;
						tempY = inv*inv * sy + 2 * inv * t * cy + t*t * ey;
						total += sublines[sublines.push(Math.sqrt((temp=tempX-oldX)*temp + (temp=tempY-oldY)*temp))-1];
						oldX = tempX;
						oldY = tempY;
					}
					data._segments.push(total);
					data._segments.push(sublines);
					data._length += total;
				}
			} else {
				throw("invalid 'path' data, please see documentation for valid paths");
			}
	
			// Setup x/y tweens
			temp = data.orient;
			data.orient = true;
			var o = {};
			MotionGuidePlugin.calc(data, data.start, o);
			tween.__rotPathS = Number(o.rotation.toFixed(5));
			MotionGuidePlugin.calc(data, data.end, o);
			tween.__rotPathE = Number(o.rotation.toFixed(5));
			data.orient = false;	//here and now we don't know if we need to
			MotionGuidePlugin.calc(data, data.end, injectProps);
			data.orient = temp;
	
			// Setup rotation properties
			if(!data.orient){ return endValue; }
			tween.__guideData = data;
			MotionGuidePlugin.testRotData(tween, injectProps);
			return endValue;
		};
	
		/**
		 * @method testRotData
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.testRotData = function(tween, injectProps){
	
			// no rotation informat? if we need it come back, if we don't use 0 & ensure we have guide data
			if(tween.__rotGlobalS === undefined || tween.__rotGlobalE === undefined){
				if(tween.__needsRot){ return; }
				if(tween._curQueueProps.rotation !== undefined){
					tween.__rotGlobalS = tween.__rotGlobalE = tween._curQueueProps.rotation;
				} else {
					tween.__rotGlobalS = tween.__rotGlobalE = injectProps.rotation = tween.target.rotation || 0;
				}
			}
			if(tween.__guideData === undefined){ return; }
	
			// Process rotation properties
			var data = tween.__guideData;
			var rotGlobalD = tween.__rotGlobalE - tween.__rotGlobalS;
			var rotPathD = tween.__rotPathE - tween.__rotPathS;
			var rot = rotGlobalD - rotPathD;
	
			if(data.orient == "auto"){
				if(rot > 180){			rot -= 360; }
				else if(rot < -180){	rot += 360; }
	
			} else if(data.orient == "cw"){
				while(rot < 0){ rot += 360; }
				if(rot == 0 && rotGlobalD > 0 && rotGlobalD != 180){ rot += 360; }
	
			} else if(data.orient == "ccw"){
				rot = rotGlobalD - ((rotPathD > 180)?(360-rotPathD):(rotPathD));	// sign flipping on path
				while(rot > 0){ rot -= 360; }
				if(rot == 0 && rotGlobalD < 0 && rotGlobalD != -180){ rot -= 360; }
			}
	
			data.rotDelta = rot;
			data.rotOffS = tween.__rotGlobalS - tween.__rotPathS;
	
			// reset
			tween.__rotGlobalS = tween.__rotGlobalE = tween.__guideData = tween.__needsRot = undefined;
		};
	
		/**
		 * @method tween
		 * @protected
		 * @static
		 **/
		MotionGuidePlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
			var data = endValues.guide;
			if(data == undefined || data === startValues.guide){ return value; }
			if(data.lastRatio != ratio){
				// first time through so calculate what I need to
				var t = ((data.end-data.start)*(wait?data.end:ratio)+data.start);
				MotionGuidePlugin.calc(data, t, tween.target);
				switch(data.orient){
					case "cw":		// mix in the original rotation
					case "ccw":
					case "auto": tween.target.rotation += data.rotOffS + data.rotDelta*ratio; break;
					case "fixed":	// follow fixed behaviour to solve potential issues
					default: tween.target.rotation += data.rotOffS; break;
				}
				data.lastRatio = ratio;
			}
			if(prop == "rotation" && ((!data.orient) || data.orient == "false")){ return value; }
			return tween.target[prop];
		};
	
		/**
		 * Determine the appropriate x/y/rotation information about a path for a given ratio along the path.
		 * Assumes a path object with all optional parameters specified.
		 * @param data Data object you would pass to the "guide:" property in a Tween
		 * @param ratio 0-1 Distance along path, values outside 0-1 are "best guess"
		 * @param target Object to copy the results onto, will use a new object if not supplied.
		 * @return {Object} The target object or a new object w/ the tweened properties
		 * @static
		 */
		MotionGuidePlugin.calc = function(data, ratio, target) {
			if(data._segments == undefined){ throw("Missing critical pre-calculated information, please file a bug"); }
			if(target == undefined){ target = {x:0, y:0, rotation:0}; }
			var seg = data._segments;
			var path = data.path;
	
			// find segment
			var pos = data._length * ratio;
			var cap = seg.length - 2;
			var n = 0;
			while(pos > seg[n] && n < cap){
				pos -= seg[n];
				n+=2;
			}
	
			// find subline
			var sublines = seg[n+1];
			var i = 0;
			cap = sublines.length-1;
			while(pos > sublines[i] && i < cap){
				pos -= sublines[i];
				i++;
			}
			var t = (i/++cap)+(pos/(cap*sublines[i]));
	
			// find x/y
			n = (n*2)+2;
			var inv = 1 - t;
			target.x = inv*inv * path[n-2] + 2 * inv * t * path[n+0] + t*t * path[n+2];
			target.y = inv*inv * path[n-1] + 2 * inv * t * path[n+1] + t*t * path[n+3];
	
			// orientation
			if(data.orient){
				target.rotation = 57.2957795 * Math.atan2(
					(path[n+1]-path[n-1])*inv + (path[n+3]-path[n+1])*t,
					(path[n+0]-path[n-2])*inv + (path[n+2]-path[n+0])*t);
			}
	
			return target;
		};
	
		createjs.MotionGuidePlugin = MotionGuidePlugin;
	
	}());
	
	//##############################################################################
	// version.js
	//##############################################################################
	
	this.createjs = this.createjs || {};
	
	(function() {
		"use strict";
	
		/**
		 * Static class holding library specific information such as the version and buildDate of
		 * the library.
		 * @class TweenJS
		 **/
		var s = createjs.TweenJS = createjs.TweenJS || {};
	
		/**
		 * The version string for this release.
		 * @property version
		 * @type String
		 * @static
		 **/
		s.version = /*=version*/"0.6.2"; // injected by build process
	
		/**
		 * The build date for this release in UTC format.
		 * @property buildDate
		 * @type String
		 * @static
		 **/
		s.buildDate = /*=date*/"Thu, 26 Nov 2015 20:44:31 GMT"; // injected by build process
	
	})();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.createjs;
	}.call(window));

/***/ },
/* 8 */
/***/ function(module, exports) {

	var grid;
	
	grid = 10;
	
	module.exports = {
	  _GRID: grid,
	  _GRID_LENGTH: (Math.pow(grid, 2)) - 1,
	  _GRID_SIZE: 50
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var Route, config;
	
	config = __webpack_require__(8);
	
	Route = (function() {
	  function Route() {
	    return new Promise((function(_this) {
	      return function(resolve) {
	        return _this.setData().then(function() {
	          return _this.setNearPoints();
	        }).then(function() {
	          return _this.computeCost();
	        }).then(function() {
	          return _this.computeRoute();
	        }).then(function() {
	          return resolve({
	            point: _this.pointData,
	            route: _this.routeData
	          });
	        });
	      };
	    })(this));
	  }
	
	  Route.prototype.setData = function() {
	    var cost, goalIndex, i, isVisited, j, position, ref, startIndex, type, wallIndex, x_count, y_count;
	    this.pointData = [];
	    x_count = 0;
	    y_count = 0;
	    startIndex = Math.floor(Math.random() * (config._GRID_LENGTH + 1));
	    goalIndex = Math.floor(Math.random() * (config._GRID_LENGTH + 1));
	    for (i = j = 0, ref = config._GRID_LENGTH; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
	      position = [];
	      cost = -1;
	      type = 'route';
	      isVisited = false;
	      wallIndex = Math.floor(Math.random() * (config._GRID_LENGTH + 1));
	      if (i % config._GRID === 0 && i !== 0) {
	        x_count = 0;
	        y_count++;
	      }
	      switch (x_count) {
	        case 0:
	          position.push('left');
	          break;
	        case config._GRID - 1:
	          position.push('right');
	      }
	      switch (y_count) {
	        case 0:
	          position.push('top');
	          break;
	        case config._GRID - 1:
	          position.push('bottom');
	      }
	      if (i === startIndex) {
	        cost = 0;
	        type = 'start';
	      }
	      if (i === goalIndex) {
	        type = 'goal';
	      }
	      if (i !== startIndex && i !== goalIndex && wallIndex > (config._GRID_LENGTH / 1.2)) {
	        type = 'wall';
	      }
	      this.pointData.push({
	        id: i,
	        cost: cost,
	        line: {
	          x: x_count,
	          y: y_count
	        },
	        position: position,
	        type: type,
	        isVisited: isVisited
	      });
	      x_count++;
	    }
	    return Promise.resolve();
	  };
	
	  Route.prototype.setNearPoints = function() {
	    var bottom_id, data, i, j, left_id, len, nearPoints, ref, right_id, top_id;
	    ref = this.pointData;
	    for (i = j = 0, len = ref.length; j < len; i = ++j) {
	      data = ref[i];
	      nearPoints = [];
	      top_id = data.id - config._GRID;
	      bottom_id = data.id + config._GRID;
	      left_id = data.id - 1;
	      right_id = data.id + 1;
	      if (data.position.indexOf('top') === -1) {
	        nearPoints.push(top_id);
	      }
	      if (data.position.indexOf('bottom') === -1) {
	        nearPoints.push(bottom_id);
	      }
	      if (data.position.indexOf('left') === -1) {
	        nearPoints.push(left_id);
	      }
	      if (data.position.indexOf('right') === -1) {
	        nearPoints.push(right_id);
	      }
	      this.pointData[i].nearPoints = nearPoints;
	    }
	    return Promise.resolve();
	  };
	
	  Route.prototype.computeCost = function() {
	    var count, current, data, id, index, j, k, len, len1, ref, ref1, target, targetCost, updateCost;
	    count = 0;
	    while (1) {
	      count++;
	      current = null;
	      ref = this.pointData;
	      for (j = 0, len = ref.length; j < len; j++) {
	        data = ref[j];
	        if (data.isVisited || data.cost === -1) {
	          continue;
	        }
	        if (current === null) {
	          current = data;
	          continue;
	        }
	        if (current.cost > data.cost) {
	          current = data;
	        }
	      }
	      current.isVisited = true;
	      if (!_.find(this.pointData, {
	        isVisited: false
	      })) {
	        break;
	      }
	      ref1 = current.nearPoints;
	      for (k = 0, len1 = ref1.length; k < len1; k++) {
	        id = ref1[k];
	        index = _.findIndex(this.pointData, {
	          id: id
	        });
	        if (index === -1) {
	          continue;
	        }
	        target = this.pointData[index];
	        if (target.type === 'wall') {
	          target.cost = 9999;
	          continue;
	        }
	        targetCost = target.cost === -1 ? 1 : target.cost;
	        updateCost = current.cost + 1;
	        if (target.isVisited && targetCost < updateCost) {
	          continue;
	        }
	        target.cost = updateCost;
	      }
	    }
	    return Promise.resolve();
	  };
	
	  Route.prototype.computeRoute = function() {
	    var costs, count, current, id, j, len, point, pointArr, ref;
	    this.routeData = [];
	    current = _.find(this.pointData, {
	      type: 'goal'
	    });
	    count = 0;
	    while (1) {
	      count++;
	      if (count > config._GRID_LENGTH) {
	        break;
	      }
	      pointArr = [];
	      this.routeData.push(current);
	      if (current.type === 'start') {
	        break;
	      }
	      ref = current.nearPoints;
	      for (j = 0, len = ref.length; j < len; j++) {
	        id = ref[j];
	        point = _.find(this.pointData, {
	          id: id
	        });
	        pointArr.push(point);
	      }
	      costs = _.map(pointArr, function(v) {
	        return v.cost;
	      });
	      current = pointArr[_.indexOf(costs, _.min(costs))];
	    }
	    this.routeData.reverse();
	    return Promise.resolve();
	  };
	
	  return Route;
	
	})();
	
	module.exports = Route;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map