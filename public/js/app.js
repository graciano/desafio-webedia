/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//todo modularize this file

//dependencies from webpack
window.$ = window.jQuery = __webpack_require__(0);
var MediumEditor = __webpack_require__(5);
var debounce = __webpack_require__(4);

//function to send any form in laravel
// from my gist https://gist.github.com/graciano/4c41cc3c139ae5c7db70
var sendAjaxFormLaravel = function sendAjaxFormLaravel(form, callbacks) {
    var formAction = form.attr('action');
    var formMethod = form.attr('method');
    var formData = void 0;
    if (formMethod.toLowerCase() == 'post') {
        formData = form.serializeArray();
        $.ajaxSetup({
            headers: { 'X-CSRF-Token': window.Laravel.csrfToken }
        });
    } else formData = form.serialize();

    $.ajax({
        type: formMethod,
        url: formAction,
        data: formData,
        cache: false,
        success: callbacks && callbacks.hasOwnProperty('success') ? callbacks.success : function (data) {
            console.log(data);
            console.log("success");
        },
        error: callbacks && callbacks.hasOwnProperty('error') ? callbacks.error : function (data) {
            console.log(data);
            console.log("error");
        }
    }, "json");
};
var pureTextFromHtml = function pureTextFromHtml(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};

$(document).ready(function () {
    //push menu handling
    var $menuLeft = $('.pushmenu-left');
    var $buttonMenu = $('#button-menu');

    $buttonMenu.click(function () {
        $('body').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });

    //text editor handling
    var editorSelector = "#post-editor";
    //post form
    var $form = $("#form-post");

    //creating medium like wysiwyg
    var mediumEditor = new MediumEditor(editorSelector);

    // creating a debounce, to avoid performance issues
    // using a one second debounce
    var debounceSaveChanges = debounce(function () {
        console.log('saving changes');
        var $inputHtml = $form.find("input[name='html_content']");
        $inputHtml.val($(editorSelector).html());
        sendAjaxFormLaravel($form);
    }, 1000);

    //mutation observer of content editable created bu medium editor
    // to save post via ajax
    var saveChangesObserver = new MutationObserver(debounceSaveChanges);
    var editor = document.querySelector(editorSelector);

    var observerOptions = {
        attributes: true,
        childList: true,
        characterData: true
    };

    if (!window.Laravel.newPost) {
        //activating observer in editor element
        saveChangesObserver.observe(editor, observerOptions);
    } else {
        (function () {
            //handling new post page
            // object to check if some of the fields were changed by the user
            var changedFields = {
                'title': false,
                'slug': false,
                'preview_text': false,
                'lead': false,
                'excerpt': false
            };

            var _loop = function _loop(field) {
                if (changedFields.hasOwnProperty(field)) {
                    $("#field-" + field).on('change', function (ev) {
                        changedFields[field] = true;
                    });
                }
            };

            for (var field in changedFields) {
                _loop(field);
            }
            //
            var changeHrefObserver = void 0;
            var debouceHrefChange = debounce(function () {
                console.log('starting function');
                var $inputHtml = $form.find("input[name='html_content']");
                $inputHtml.val($(editorSelector).html());
                //generating values for fields from text if they're not changed
                // by the user
                var text = pureTextFromHtml($inputHtml.val());
                for (var field in changedFields) {
                    if (changedFields.hasOwnProperty(field) && !changedFields[field] && field != 'slug') {

                        var $input = $("#field-" + field);
                        var length = parseInt($input.attr('data-length'));
                        length = isNaN(length) ? 10 : length;
                        length = Math.min(length, text.length);
                        $input.val(text.substring(0, length));
                    }
                }
                // save the post if it's bigger than 300 characters and
                // change the window to a edit post one
                if (text.length > 300) {
                    console.log('entered if');
                    sendAjaxFormLaravel($form, {
                        success: function success(data) {
                            console.log(data);
                            //change form to edit post instead of new post
                            $form.attr('action', data['action']);
                            var inputMethod = data['input-method'];
                            $form.append(inputMethod);

                            //getting generated slug if its different
                            var $inputSlug = $('#field-slug');
                            $inputSlug.val(data['post']['slug']);

                            //changing URL for when the user presses F5
                            history.pushState(data, "Write Post - Webedia", data['edit-url']);
                            //now that is an edit post page, swap the observers
                            changeHrefObserver.disconnect();
                            saveChangesObserver.observe(editor, observerOptions);
                        }
                    });
                }
            }, 1000);

            changeHrefObserver = new MutationObserver(debouceHrefChange);
            changeHrefObserver.observe(editor, observerOptions);
        })();
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Date.now || now

function now() {
    return new Date().getTime()
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var now = __webpack_require__(3);

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_RESULT__;/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

// Full polyfill for browsers with no classList support
if (!("classList" in document.createElement("_"))) {
  (function (view) {

  "use strict";

  if (!('Element' in view)) return;

  var
      classListProp = "classList"
    , protoProp = "prototype"
    , elemCtrProto = view.Element[protoProp]
    , objCtr = Object
    , strTrim = String[protoProp].trim || function () {
      return this.replace(/^\s+|\s+$/g, "");
    }
    , arrIndexOf = Array[protoProp].indexOf || function (item) {
      var
          i = 0
        , len = this.length
      ;
      for (; i < len; i++) {
        if (i in this && this[i] === item) {
          return i;
        }
      }
      return -1;
    }
    // Vendors: please allow content code to instantiate DOMExceptions
    , DOMEx = function (type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    }
    , checkTokenAndGetIndex = function (classList, token) {
      if (token === "") {
        throw new DOMEx(
            "SYNTAX_ERR"
          , "An invalid or illegal string was specified"
        );
      }
      if (/\s/.test(token)) {
        throw new DOMEx(
            "INVALID_CHARACTER_ERR"
          , "String contains an invalid character"
        );
      }
      return arrIndexOf.call(classList, token);
    }
    , ClassList = function (elem) {
      var
          trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
        , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
        , i = 0
        , len = classes.length
      ;
      for (; i < len; i++) {
        this.push(classes[i]);
      }
      this._updateClassName = function () {
        elem.setAttribute("class", this.toString());
      };
    }
    , classListProto = ClassList[protoProp] = []
    , classListGetter = function () {
      return new ClassList(this);
    }
  ;
  // Most DOMException implementations don't allow calling DOMException's toString()
  // on non-DOMExceptions. Error's toString() is sufficient here.
  DOMEx[protoProp] = Error[protoProp];
  classListProto.item = function (i) {
    return this[i] || null;
  };
  classListProto.contains = function (token) {
    token += "";
    return checkTokenAndGetIndex(this, token) !== -1;
  };
  classListProto.add = function () {
    var
        tokens = arguments
      , i = 0
      , l = tokens.length
      , token
      , updated = false
    ;
    do {
      token = tokens[i] + "";
      if (checkTokenAndGetIndex(this, token) === -1) {
        this.push(token);
        updated = true;
      }
    }
    while (++i < l);

    if (updated) {
      this._updateClassName();
    }
  };
  classListProto.remove = function () {
    var
        tokens = arguments
      , i = 0
      , l = tokens.length
      , token
      , updated = false
      , index
    ;
    do {
      token = tokens[i] + "";
      index = checkTokenAndGetIndex(this, token);
      while (index !== -1) {
        this.splice(index, 1);
        updated = true;
        index = checkTokenAndGetIndex(this, token);
      }
    }
    while (++i < l);

    if (updated) {
      this._updateClassName();
    }
  };
  classListProto.toggle = function (token, force) {
    token += "";

    var
        result = this.contains(token)
      , method = result ?
        force !== true && "remove"
      :
        force !== false && "add"
    ;

    if (method) {
      this[method](token);
    }

    if (force === true || force === false) {
      return force;
    } else {
      return !result;
    }
  };
  classListProto.toString = function () {
    return this.join(" ");
  };

  if (objCtr.defineProperty) {
    var classListPropDesc = {
        get: classListGetter
      , enumerable: true
      , configurable: true
    };
    try {
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    } catch (ex) { // IE 8 doesn't support enumerable:true
      if (ex.number === -0x7FF5EC54) {
        classListPropDesc.enumerable = false;
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
      }
    }
  } else if (objCtr[protoProp].__defineGetter__) {
    elemCtrProto.__defineGetter__(classListProp, classListGetter);
  }

  }(self));
}

/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: X11/MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

(function (view) {
  "use strict";

  view.URL = view.URL || view.webkitURL;

  if (view.Blob && view.URL) {
    try {
      new Blob;
      return;
    } catch (e) {}
  }

  // Internally we use a BlobBuilder implementation to base Blob off of
  // in order to support older browsers that only have BlobBuilder
  var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {
    var
        get_class = function(object) {
        return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
      }
      , FakeBlobBuilder = function BlobBuilder() {
        this.data = [];
      }
      , FakeBlob = function Blob(data, type, encoding) {
        this.data = data;
        this.size = data.length;
        this.type = type;
        this.encoding = encoding;
      }
      , FBB_proto = FakeBlobBuilder.prototype
      , FB_proto = FakeBlob.prototype
      , FileReaderSync = view.FileReaderSync
      , FileException = function(type) {
        this.code = this[this.name = type];
      }
      , file_ex_codes = (
          "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
        + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
      ).split(" ")
      , file_ex_code = file_ex_codes.length
      , real_URL = view.URL || view.webkitURL || view
      , real_create_object_URL = real_URL.createObjectURL
      , real_revoke_object_URL = real_URL.revokeObjectURL
      , URL = real_URL
      , btoa = view.btoa
      , atob = view.atob

      , ArrayBuffer = view.ArrayBuffer
      , Uint8Array = view.Uint8Array

      , origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/
    ;
    FakeBlob.fake = FB_proto.fake = true;
    while (file_ex_code--) {
      FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
    }
    // Polyfill URL
    if (!real_URL.createObjectURL) {
      URL = view.URL = function(uri) {
        var
            uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
          , uri_origin
        ;
        uri_info.href = uri;
        if (!("origin" in uri_info)) {
          if (uri_info.protocol.toLowerCase() === "data:") {
            uri_info.origin = null;
          } else {
            uri_origin = uri.match(origin);
            uri_info.origin = uri_origin && uri_origin[1];
          }
        }
        return uri_info;
      };
    }
    URL.createObjectURL = function(blob) {
      var
          type = blob.type
        , data_URI_header
      ;
      if (type === null) {
        type = "application/octet-stream";
      }
      if (blob instanceof FakeBlob) {
        data_URI_header = "data:" + type;
        if (blob.encoding === "base64") {
          return data_URI_header + ";base64," + blob.data;
        } else if (blob.encoding === "URI") {
          return data_URI_header + "," + decodeURIComponent(blob.data);
        } if (btoa) {
          return data_URI_header + ";base64," + btoa(blob.data);
        } else {
          return data_URI_header + "," + encodeURIComponent(blob.data);
        }
      } else if (real_create_object_URL) {
        return real_create_object_URL.call(real_URL, blob);
      }
    };
    URL.revokeObjectURL = function(object_URL) {
      if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
        real_revoke_object_URL.call(real_URL, object_URL);
      }
    };
    FBB_proto.append = function(data/*, endings*/) {
      var bb = this.data;
      // decode data to a binary string
      if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
        var
            str = ""
          , buf = new Uint8Array(data)
          , i = 0
          , buf_len = buf.length
        ;
        for (; i < buf_len; i++) {
          str += String.fromCharCode(buf[i]);
        }
        bb.push(str);
      } else if (get_class(data) === "Blob" || get_class(data) === "File") {
        if (FileReaderSync) {
          var fr = new FileReaderSync;
          bb.push(fr.readAsBinaryString(data));
        } else {
          // async FileReader won't work as BlobBuilder is sync
          throw new FileException("NOT_READABLE_ERR");
        }
      } else if (data instanceof FakeBlob) {
        if (data.encoding === "base64" && atob) {
          bb.push(atob(data.data));
        } else if (data.encoding === "URI") {
          bb.push(decodeURIComponent(data.data));
        } else if (data.encoding === "raw") {
          bb.push(data.data);
        }
      } else {
        if (typeof data !== "string") {
          data += ""; // convert unsupported types to strings
        }
        // decode UTF-16 to binary string
        bb.push(unescape(encodeURIComponent(data)));
      }
    };
    FBB_proto.getBlob = function(type) {
      if (!arguments.length) {
        type = null;
      }
      return new FakeBlob(this.data.join(""), type, "raw");
    };
    FBB_proto.toString = function() {
      return "[object BlobBuilder]";
    };
    FB_proto.slice = function(start, end, type) {
      var args = arguments.length;
      if (args < 3) {
        type = null;
      }
      return new FakeBlob(
          this.data.slice(start, args > 1 ? end : this.data.length)
        , type
        , this.encoding
      );
    };
    FB_proto.toString = function() {
      return "[object Blob]";
    };
    FB_proto.close = function() {
      this.size = 0;
      delete this.data;
    };
    return FakeBlobBuilder;
  }(view));

  view.Blob = function(blobParts, options) {
    var type = options ? (options.type || "") : "";
    var builder = new BlobBuilder();
    if (blobParts) {
      for (var i = 0, len = blobParts.length; i < len; i++) {
        if (Uint8Array && blobParts[i] instanceof Uint8Array) {
          builder.append(blobParts[i].buffer);
        }
        else {
          builder.append(blobParts[i]);
        }
      }
    }
    var blob = builder.getBlob(type);
    if (!blob.slice && blob.webkitSlice) {
      blob.slice = blob.webkitSlice;
    }
    return blob;
  };

  var getPrototypeOf = Object.getPrototypeOf || function(object) {
    return object.__proto__;
  };
  view.Blob.prototype = getPrototypeOf(new view.Blob());
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));

(function (root, factory) {
    'use strict';
    var isElectron = typeof module === 'object' && typeof process !== 'undefined' && process && process.versions && process.versions.electron;
    if (!isElectron && typeof module === 'object') {
        module.exports = factory;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return factory;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        root.MediumEditor = factory;
    }
}(this, function () {

    'use strict';

function MediumEditor(elements, options) {
    'use strict';
    return this.init(elements, options);
}

MediumEditor.extensions = {};
/*jshint unused: true */
(function (window) {
    'use strict';

    function copyInto(overwrite, dest) {
        var prop,
            sources = Array.prototype.slice.call(arguments, 2);
        dest = dest || {};
        for (var i = 0; i < sources.length; i++) {
            var source = sources[i];
            if (source) {
                for (prop in source) {
                    if (source.hasOwnProperty(prop) &&
                        typeof source[prop] !== 'undefined' &&
                        (overwrite || dest.hasOwnProperty(prop) === false)) {
                        dest[prop] = source[prop];
                    }
                }
            }
        }
        return dest;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    // Some browsers (including phantom) don't return true for Node.contains(child)
    // if child is a text node.  Detect these cases here and use a fallback
    // for calls to Util.isDescendant()
    var nodeContainsWorksWithTextNodes = false;
    try {
        var testParent = document.createElement('div'),
            testText = document.createTextNode(' ');
        testParent.appendChild(testText);
        nodeContainsWorksWithTextNodes = testParent.contains(testText);
    } catch (exc) {}

    var Util = {

        // http://stackoverflow.com/questions/17907445/how-to-detect-ie11#comment30165888_17907562
        // by rg89
        isIE: ((navigator.appName === 'Microsoft Internet Explorer') || ((navigator.appName === 'Netscape') && (new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})').exec(navigator.userAgent) !== null))),

        isEdge: (/Edge\/\d+/).exec(navigator.userAgent) !== null,

        // if firefox
        isFF: (navigator.userAgent.toLowerCase().indexOf('firefox') > -1),

        // http://stackoverflow.com/a/11752084/569101
        isMac: (window.navigator.platform.toUpperCase().indexOf('MAC') >= 0),

        // https://github.com/jashkenas/underscore
        // Lonely letter MUST USE the uppercase code
        keyCode: {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            DELETE: 46,
            K: 75, // K keycode, and not k
            M: 77,
            V: 86
        },

        /**
         * Returns true if it's metaKey on Mac, or ctrlKey on non-Mac.
         * See #591
         */
        isMetaCtrlKey: function (event) {
            if ((Util.isMac && event.metaKey) || (!Util.isMac && event.ctrlKey)) {
                return true;
            }

            return false;
        },

        /**
         * Returns true if the key associated to the event is inside keys array
         *
         * @see : https://github.com/jquery/jquery/blob/0705be475092aede1eddae01319ec931fb9c65fc/src/event.js#L473-L484
         * @see : http://stackoverflow.com/q/4471582/569101
         */
        isKey: function (event, keys) {
            var keyCode = Util.getKeyCode(event);

            // it's not an array let's just compare strings!
            if (false === Array.isArray(keys)) {
                return keyCode === keys;
            }

            if (-1 === keys.indexOf(keyCode)) {
                return false;
            }

            return true;
        },

        getKeyCode: function (event) {
            var keyCode = event.which;

            // getting the key code from event
            if (null === keyCode) {
                keyCode = event.charCode !== null ? event.charCode : event.keyCode;
            }

            return keyCode;
        },

        blockContainerElementNames: [
            // elements our editor generates
            'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'li', 'ol',
            // all other known block elements
            'address', 'article', 'aside', 'audio', 'canvas', 'dd', 'dl', 'dt', 'fieldset',
            'figcaption', 'figure', 'footer', 'form', 'header', 'hgroup', 'main', 'nav',
            'noscript', 'output', 'section', 'video',
            'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'
        ],

        emptyElementNames: ['br', 'col', 'colgroup', 'hr', 'img', 'input', 'source', 'wbr'],

        extend: function extend(/* dest, source1, source2, ...*/) {
            var args = [true].concat(Array.prototype.slice.call(arguments));
            return copyInto.apply(this, args);
        },

        defaults: function defaults(/*dest, source1, source2, ...*/) {
            var args = [false].concat(Array.prototype.slice.call(arguments));
            return copyInto.apply(this, args);
        },

        /*
         * Create a link around the provided text nodes which must be adjacent to each other and all be
         * descendants of the same closest block container. If the preconditions are not met, unexpected
         * behavior will result.
         */
        createLink: function (document, textNodes, href, target) {
            var anchor = document.createElement('a');
            Util.moveTextRangeIntoElement(textNodes[0], textNodes[textNodes.length - 1], anchor);
            anchor.setAttribute('href', href);
            if (target) {
                anchor.setAttribute('target', target);
            }
            return anchor;
        },

        /*
         * Given the provided match in the format {start: 1, end: 2} where start and end are indices into the
         * textContent of the provided element argument, modify the DOM inside element to ensure that the text
         * identified by the provided match can be returned as text nodes that contain exactly that text, without
         * any additional text at the beginning or end of the returned array of adjacent text nodes.
         *
         * The only DOM manipulation performed by this function is splitting the text nodes, non-text nodes are
         * not affected in any way.
         */
        findOrCreateMatchingTextNodes: function (document, element, match) {
            var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, null, false),
                matchedNodes = [],
                currentTextIndex = 0,
                startReached = false,
                currentNode = null,
                newNode = null;

            while ((currentNode = treeWalker.nextNode()) !== null) {
                if (currentNode.nodeType > 3) {
                    continue;
                } else if (currentNode.nodeType === 3) {
                    if (!startReached && match.start < (currentTextIndex + currentNode.nodeValue.length)) {
                        startReached = true;
                        newNode = Util.splitStartNodeIfNeeded(currentNode, match.start, currentTextIndex);
                    }
                    if (startReached) {
                        Util.splitEndNodeIfNeeded(currentNode, newNode, match.end, currentTextIndex);
                    }
                    if (startReached && currentTextIndex === match.end) {
                        break; // Found the node(s) corresponding to the link. Break out and move on to the next.
                    } else if (startReached && currentTextIndex > (match.end + 1)) {
                        throw new Error('PerformLinking overshot the target!'); // should never happen...
                    }

                    if (startReached) {
                        matchedNodes.push(newNode || currentNode);
                    }

                    currentTextIndex += currentNode.nodeValue.length;
                    if (newNode !== null) {
                        currentTextIndex += newNode.nodeValue.length;
                        // Skip the newNode as we'll already have pushed it to the matches
                        treeWalker.nextNode();
                    }
                    newNode = null;
                } else if (currentNode.tagName.toLowerCase() === 'img') {
                    if (!startReached && (match.start <= currentTextIndex)) {
                        startReached = true;
                    }
                    if (startReached) {
                        matchedNodes.push(currentNode);
                    }
                }
            }
            return matchedNodes;
        },

        /*
         * Given the provided text node and text coordinates, split the text node if needed to make it align
         * precisely with the coordinates.
         *
         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.
         */
        splitStartNodeIfNeeded: function (currentNode, matchStartIndex, currentTextIndex) {
            if (matchStartIndex !== currentTextIndex) {
                return currentNode.splitText(matchStartIndex - currentTextIndex);
            }
            return null;
        },

        /*
         * Given the provided text node and text coordinates, split the text node if needed to make it align
         * precisely with the coordinates. The newNode argument should from the result of Util.splitStartNodeIfNeeded,
         * if that function has been called on the same currentNode.
         *
         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.
         */
        splitEndNodeIfNeeded: function (currentNode, newNode, matchEndIndex, currentTextIndex) {
            var textIndexOfEndOfFarthestNode,
                endSplitPoint;
            textIndexOfEndOfFarthestNode = currentTextIndex + currentNode.nodeValue.length +
                    (newNode ? newNode.nodeValue.length : 0) - 1;
            endSplitPoint = matchEndIndex - currentTextIndex -
                    (newNode ? currentNode.nodeValue.length : 0);
            if (textIndexOfEndOfFarthestNode >= matchEndIndex &&
                    currentTextIndex !== textIndexOfEndOfFarthestNode &&
                    endSplitPoint !== 0) {
                (newNode || currentNode).splitText(endSplitPoint);
            }
        },

        /*
        * Take an element, and break up all of its text content into unique pieces such that:
         * 1) All text content of the elements are in separate blocks. No piece of text content should span
         *    across multiple blocks. This means no element return by this function should have
         *    any blocks as children.
         * 2) The union of the textcontent of all of the elements returned here covers all
         *    of the text within the element.
         *
         *
         * EXAMPLE:
         * In the event that we have something like:
         *
         * <blockquote>
         *   <p>Some Text</p>
         *   <ol>
         *     <li>List Item 1</li>
         *     <li>List Item 2</li>
         *   </ol>
         * </blockquote>
         *
         * This function would return these elements as an array:
         *   [ <p>Some Text</p>, <li>List Item 1</li>, <li>List Item 2</li> ]
         *
         * Since the <blockquote> and <ol> elements contain blocks within them they are not returned.
         * Since the <p> and <li>'s don't contain block elements and cover all the text content of the
         * <blockquote> container, they are the elements returned.
         */
        splitByBlockElements: function (element) {
            if (element.nodeType !== 3 && element.nodeType !== 1) {
                return [];
            }

            var toRet = [],
                blockElementQuery = MediumEditor.util.blockContainerElementNames.join(',');

            if (element.nodeType === 3 || element.querySelectorAll(blockElementQuery).length === 0) {
                return [element];
            }

            for (var i = 0; i < element.childNodes.length; i++) {
                var child = element.childNodes[i];
                if (child.nodeType === 3) {
                    toRet.push(child);
                } else if (child.nodeType === 1) {
                    var blockElements = child.querySelectorAll(blockElementQuery);
                    if (blockElements.length === 0) {
                        toRet.push(child);
                    } else {
                        toRet = toRet.concat(MediumEditor.util.splitByBlockElements(child));
                    }
                }
            }

            return toRet;
        },

        // Find the next node in the DOM tree that represents any text that is being
        // displayed directly next to the targetNode (passed as an argument)
        // Text that appears directly next to the current node can be:
        //  - A sibling text node
        //  - A descendant of a sibling element
        //  - A sibling text node of an ancestor
        //  - A descendant of a sibling element of an ancestor
        findAdjacentTextNodeWithContent: function findAdjacentTextNodeWithContent(rootNode, targetNode, ownerDocument) {
            var pastTarget = false,
                nextNode,
                nodeIterator = ownerDocument.createNodeIterator(rootNode, NodeFilter.SHOW_TEXT, null, false);

            // Use a native NodeIterator to iterate over all the text nodes that are descendants
            // of the rootNode.  Once past the targetNode, choose the first non-empty text node
            nextNode = nodeIterator.nextNode();
            while (nextNode) {
                if (nextNode === targetNode) {
                    pastTarget = true;
                } else if (pastTarget) {
                    if (nextNode.nodeType === 3 && nextNode.nodeValue && nextNode.nodeValue.trim().length > 0) {
                        break;
                    }
                }
                nextNode = nodeIterator.nextNode();
            }

            return nextNode;
        },

        // Find an element's previous sibling within a medium-editor element
        // If one doesn't exist, find the closest ancestor's previous sibling
        findPreviousSibling: function (node) {
            if (!node || Util.isMediumEditorElement(node)) {
                return false;
            }

            var previousSibling = node.previousSibling;
            while (!previousSibling && !Util.isMediumEditorElement(node.parentNode)) {
                node = node.parentNode;
                previousSibling = node.previousSibling;
            }

            return previousSibling;
        },

        isDescendant: function isDescendant(parent, child, checkEquality) {
            if (!parent || !child) {
                return false;
            }
            if (parent === child) {
                return !!checkEquality;
            }
            // If parent is not an element, it can't have any descendants
            if (parent.nodeType !== 1) {
                return false;
            }
            if (nodeContainsWorksWithTextNodes || child.nodeType !== 3) {
                return parent.contains(child);
            }
            var node = child.parentNode;
            while (node !== null) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },

        // https://github.com/jashkenas/underscore
        isElement: function isElement(obj) {
            return !!(obj && obj.nodeType === 1);
        },

        // https://github.com/jashkenas/underscore
        throttle: function (func, wait) {
            var THROTTLE_INTERVAL = 50,
                context,
                args,
                result,
                timeout = null,
                previous = 0,
                later = function () {
                    previous = Date.now();
                    timeout = null;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                };

            if (!wait && wait !== 0) {
                wait = THROTTLE_INTERVAL;
            }

            return function () {
                var now = Date.now(),
                    remaining = wait - (now - previous);

                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },

        traverseUp: function (current, testElementFunction) {
            if (!current) {
                return false;
            }

            do {
                if (current.nodeType === 1) {
                    if (testElementFunction(current)) {
                        return current;
                    }
                    // do not traverse upwards past the nearest containing editor
                    if (Util.isMediumEditorElement(current)) {
                        return false;
                    }
                }

                current = current.parentNode;
            } while (current);

            return false;
        },

        htmlEntities: function (str) {
            // converts special characters (like <) into their escaped/encoded values (like &lt;).
            // This allows you to show to display the string without the browser reading it as HTML.
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },

        // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
        insertHTMLCommand: function (doc, html) {
            var selection, range, el, fragment, node, lastNode, toReplace,
                res = false,
                ecArgs = ['insertHTML', false, html];

            /* Edge's implementation of insertHTML is just buggy right now:
             * - Doesn't allow leading white space at the beginning of an element
             * - Found a case when a <font size="2"> tag was inserted when calling alignCenter inside a blockquote
             *
             * There are likely other bugs, these are just the ones we found so far.
             * For now, let's just use the same fallback we did for IE
             */
            if (!MediumEditor.util.isEdge && doc.queryCommandSupported('insertHTML')) {
                try {
                    return doc.execCommand.apply(doc, ecArgs);
                } catch (ignore) {}
            }

            selection = doc.getSelection();
            if (selection.rangeCount) {
                range = selection.getRangeAt(0);
                toReplace = range.commonAncestorContainer;

                // https://github.com/yabwe/medium-editor/issues/748
                // If the selection is an empty editor element, create a temporary text node inside of the editor
                // and select it so that we don't delete the editor element
                if (Util.isMediumEditorElement(toReplace) && !toReplace.firstChild) {
                    range.selectNode(toReplace.appendChild(doc.createTextNode('')));
                } else if ((toReplace.nodeType === 3 && range.startOffset === 0 && range.endOffset === toReplace.nodeValue.length) ||
                        (toReplace.nodeType !== 3 && toReplace.innerHTML === range.toString())) {
                    // Ensure range covers maximum amount of nodes as possible
                    // By moving up the DOM and selecting ancestors whose only child is the range
                    while (!Util.isMediumEditorElement(toReplace) &&
                            toReplace.parentNode &&
                            toReplace.parentNode.childNodes.length === 1 &&
                            !Util.isMediumEditorElement(toReplace.parentNode)) {
                        toReplace = toReplace.parentNode;
                    }
                    range.selectNode(toReplace);
                }
                range.deleteContents();

                el = doc.createElement('div');
                el.innerHTML = html;
                fragment = doc.createDocumentFragment();
                while (el.firstChild) {
                    node = el.firstChild;
                    lastNode = fragment.appendChild(node);
                }
                range.insertNode(fragment);

                // Preserve the selection:
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    MediumEditor.selection.selectRange(doc, range);
                }
                res = true;
            }

            // https://github.com/yabwe/medium-editor/issues/992
            // If we're monitoring calls to execCommand, notify listeners as if a real call had happened
            if (doc.execCommand.callListeners) {
                doc.execCommand.callListeners(ecArgs, res);
            }
            return res;
        },

        execFormatBlock: function (doc, tagName) {
            // Get the top level block element that contains the selection
            var blockContainer = Util.getTopBlockContainer(MediumEditor.selection.getSelectionStart(doc)),
                childNodes;

            // Special handling for blockquote
            if (tagName === 'blockquote') {
                if (blockContainer) {
                    childNodes = Array.prototype.slice.call(blockContainer.childNodes);
                    // Check if the blockquote has a block element as a child (nested blocks)
                    if (childNodes.some(function (childNode) {
                        return Util.isBlockContainer(childNode);
                    })) {
                        // FF handles blockquote differently on formatBlock
                        // allowing nesting, we need to use outdent
                        // https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla
                        return doc.execCommand('outdent', false, null);
                    }
                }

                // When IE blockquote needs to be called as indent
                // http://stackoverflow.com/questions/1816223/rich-text-editor-with-blockquote-function/1821777#1821777
                if (Util.isIE) {
                    return doc.execCommand('indent', false, tagName);
                }
            }

            // If the blockContainer is already the element type being passed in
            // treat it as 'undo' formatting and just convert it to a <p>
            if (blockContainer && tagName === blockContainer.nodeName.toLowerCase()) {
                tagName = 'p';
            }

            // When IE we need to add <> to heading elements
            // http://stackoverflow.com/questions/10741831/execcommand-formatblock-headings-in-ie
            if (Util.isIE) {
                tagName = '<' + tagName + '>';
            }

            // When FF, IE and Edge, we have to handle blockquote node seperately as 'formatblock' does not work.
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands
            if (blockContainer && blockContainer.nodeName.toLowerCase() === 'blockquote') {
                // For IE, just use outdent
                if (Util.isIE && tagName === '<p>') {
                    return doc.execCommand('outdent', false, tagName);
                }

                // For Firefox and Edge, make sure there's a nested block element before calling outdent
                if ((Util.isFF || Util.isEdge) && tagName === 'p') {
                    childNodes = Array.prototype.slice.call(blockContainer.childNodes);
                    // If there are some non-block elements we need to wrap everything in a <p> before we outdent
                    if (childNodes.some(function (childNode) {
                        return !Util.isBlockContainer(childNode);
                    })) {
                        doc.execCommand('formatBlock', false, tagName);
                    }
                    return doc.execCommand('outdent', false, tagName);
                }
            }

            return doc.execCommand('formatBlock', false, tagName);
        },

        /**
         * Set target to blank on the given el element
         *
         * TODO: not sure if this should be here
         *
         * When creating a link (using core -> createLink) the selection returned by Firefox will be the parent of the created link
         * instead of the created link itself (as it is for Chrome for example), so we retrieve all "a" children to grab the good one by
         * using `anchorUrl` to ensure that we are adding target="_blank" on the good one.
         * This isn't a bulletproof solution anyway ..
         */
        setTargetBlank: function (el, anchorUrl) {
            var i, url = anchorUrl || false;
            if (el.nodeName.toLowerCase() === 'a') {
                el.target = '_blank';
            } else {
                el = el.getElementsByTagName('a');

                for (i = 0; i < el.length; i += 1) {
                    if (false === url || url === el[i].attributes.href.value) {
                        el[i].target = '_blank';
                    }
                }
            }
        },

        /*
         * this function is called to explicitly remove the target='_blank' as FF holds on to _blank value even
         * after unchecking the checkbox on anchor form
         */
        removeTargetBlank: function (el, anchorUrl) {
            var i;
            if (el.nodeName.toLowerCase() === 'a') {
                el.removeAttribute('target');
            } else {
                el = el.getElementsByTagName('a');

                for (i = 0; i < el.length; i += 1) {
                    if (anchorUrl === el[i].attributes.href.value) {
                        el[i].removeAttribute('target');
                    }
                }
            }
        },

        /*
         * this function adds one or several classes on an a element.
         * if el parameter is not an a, it will look for a children of el.
         * if no a children are found, it will look for the a parent.
         */
        addClassToAnchors: function (el, buttonClass) {
            var classes = buttonClass.split(' '),
                i,
                j;
            if (el.nodeName.toLowerCase() === 'a') {
                for (j = 0; j < classes.length; j += 1) {
                    el.classList.add(classes[j]);
                }
            } else {
                var aChildren = el.getElementsByTagName('a');
                if (aChildren.length === 0) {
                    var parentAnchor = Util.getClosestTag(el, 'a');
                    el = parentAnchor ? [parentAnchor] : [];
                } else {
                    el = aChildren;
                }
                for (i = 0; i < el.length; i += 1) {
                    for (j = 0; j < classes.length; j += 1) {
                        el[i].classList.add(classes[j]);
                    }
                }
            }
        },

        isListItem: function (node) {
            if (!node) {
                return false;
            }
            if (node.nodeName.toLowerCase() === 'li') {
                return true;
            }

            var parentNode = node.parentNode,
                tagName = parentNode.nodeName.toLowerCase();
            while (tagName === 'li' || (!Util.isBlockContainer(parentNode) && tagName !== 'div')) {
                if (tagName === 'li') {
                    return true;
                }
                parentNode = parentNode.parentNode;
                if (parentNode) {
                    tagName = parentNode.nodeName.toLowerCase();
                } else {
                    return false;
                }
            }
            return false;
        },

        cleanListDOM: function (ownerDocument, element) {
            if (element.nodeName.toLowerCase() !== 'li') {
                return;
            }

            var list = element.parentElement;

            if (list.parentElement.nodeName.toLowerCase() === 'p') { // yes we need to clean up
                Util.unwrap(list.parentElement, ownerDocument);

                // move cursor at the end of the text inside the list
                // for some unknown reason, the cursor is moved to end of the "visual" line
                MediumEditor.selection.moveCursor(ownerDocument, element.firstChild, element.firstChild.textContent.length);
            }
        },

        /* splitDOMTree
         *
         * Given a root element some descendant element, split the root element
         * into its own element containing the descendant element and all elements
         * on the left or right side of the descendant ('right' is default)
         *
         * example:
         *
         *         <div>
         *      /    |   \
         *  <span> <span> <span>
         *   / \    / \    / \
         *  1   2  3   4  5   6
         *
         *  If I wanted to split this tree given the <div> as the root and "4" as the leaf
         *  the result would be (the prime ' marks indicates nodes that are created as clones):
         *
         *   SPLITTING OFF 'RIGHT' TREE       SPLITTING OFF 'LEFT' TREE
         *
         *     <div>            <div>'              <div>'      <div>
         *      / \              / \                 / \          |
         * <span> <span>   <span>' <span>       <span> <span>   <span>
         *   / \    |        |      / \           /\     /\       /\
         *  1   2   3        4     5   6         1  2   3  4     5  6
         *
         *  The above example represents splitting off the 'right' or 'left' part of a tree, where
         *  the <div>' would be returned as an element not appended to the DOM, and the <div>
         *  would remain in place where it was
         *
        */
        splitOffDOMTree: function (rootNode, leafNode, splitLeft) {
            var splitOnNode = leafNode,
                createdNode = null,
                splitRight = !splitLeft;

            // loop until we hit the root
            while (splitOnNode !== rootNode) {
                var currParent = splitOnNode.parentNode,
                    newParent = currParent.cloneNode(false),
                    targetNode = (splitRight ? splitOnNode : currParent.firstChild),
                    appendLast;

                // Create a new parent element which is a clone of the current parent
                if (createdNode) {
                    if (splitRight) {
                        // If we're splitting right, add previous created element before siblings
                        newParent.appendChild(createdNode);
                    } else {
                        // If we're splitting left, add previous created element last
                        appendLast = createdNode;
                    }
                }
                createdNode = newParent;

                while (targetNode) {
                    var sibling = targetNode.nextSibling;
                    // Special handling for the 'splitNode'
                    if (targetNode === splitOnNode) {
                        if (!targetNode.hasChildNodes()) {
                            targetNode.parentNode.removeChild(targetNode);
                        } else {
                            // For the node we're splitting on, if it has children, we need to clone it
                            // and not just move it
                            targetNode = targetNode.cloneNode(false);
                        }
                        // If the resulting split node has content, add it
                        if (targetNode.textContent) {
                            createdNode.appendChild(targetNode);
                        }

                        targetNode = (splitRight ? sibling : null);
                    } else {
                        // For general case, just remove the element and only
                        // add it to the split tree if it contains something
                        targetNode.parentNode.removeChild(targetNode);
                        if (targetNode.hasChildNodes() || targetNode.textContent) {
                            createdNode.appendChild(targetNode);
                        }

                        targetNode = sibling;
                    }
                }

                // If we had an element we wanted to append at the end, do that now
                if (appendLast) {
                    createdNode.appendChild(appendLast);
                }

                splitOnNode = currParent;
            }

            return createdNode;
        },

        moveTextRangeIntoElement: function (startNode, endNode, newElement) {
            if (!startNode || !endNode) {
                return false;
            }

            var rootNode = Util.findCommonRoot(startNode, endNode);
            if (!rootNode) {
                return false;
            }

            if (endNode === startNode) {
                var temp = startNode.parentNode,
                    sibling = startNode.nextSibling;
                temp.removeChild(startNode);
                newElement.appendChild(startNode);
                if (sibling) {
                    temp.insertBefore(newElement, sibling);
                } else {
                    temp.appendChild(newElement);
                }
                return newElement.hasChildNodes();
            }

            // create rootChildren array which includes all the children
            // we care about
            var rootChildren = [],
                firstChild,
                lastChild,
                nextNode;
            for (var i = 0; i < rootNode.childNodes.length; i++) {
                nextNode = rootNode.childNodes[i];
                if (!firstChild) {
                    if (Util.isDescendant(nextNode, startNode, true)) {
                        firstChild = nextNode;
                    }
                } else {
                    if (Util.isDescendant(nextNode, endNode, true)) {
                        lastChild = nextNode;
                        break;
                    } else {
                        rootChildren.push(nextNode);
                    }
                }
            }

            var afterLast = lastChild.nextSibling,
                fragment = rootNode.ownerDocument.createDocumentFragment();

            // build up fragment on startNode side of tree
            if (firstChild === startNode) {
                firstChild.parentNode.removeChild(firstChild);
                fragment.appendChild(firstChild);
            } else {
                fragment.appendChild(Util.splitOffDOMTree(firstChild, startNode));
            }

            // add any elements between firstChild & lastChild
            rootChildren.forEach(function (element) {
                element.parentNode.removeChild(element);
                fragment.appendChild(element);
            });

            // build up fragment on endNode side of the tree
            if (lastChild === endNode) {
                lastChild.parentNode.removeChild(lastChild);
                fragment.appendChild(lastChild);
            } else {
                fragment.appendChild(Util.splitOffDOMTree(lastChild, endNode, true));
            }

            // Add fragment into passed in element
            newElement.appendChild(fragment);

            if (lastChild.parentNode === rootNode) {
                // If last child is in the root, insert newElement in front of it
                rootNode.insertBefore(newElement, lastChild);
            } else if (afterLast) {
                // If last child was removed, but it had a sibling, insert in front of it
                rootNode.insertBefore(newElement, afterLast);
            } else {
                // lastChild was removed and was the last actual element just append
                rootNode.appendChild(newElement);
            }

            return newElement.hasChildNodes();
        },

        /* based on http://stackoverflow.com/a/6183069 */
        depthOfNode: function (inNode) {
            var theDepth = 0,
                node = inNode;
            while (node.parentNode !== null) {
                node = node.parentNode;
                theDepth++;
            }
            return theDepth;
        },

        findCommonRoot: function (inNode1, inNode2) {
            var depth1 = Util.depthOfNode(inNode1),
                depth2 = Util.depthOfNode(inNode2),
                node1 = inNode1,
                node2 = inNode2;

            while (depth1 !== depth2) {
                if (depth1 > depth2) {
                    node1 = node1.parentNode;
                    depth1 -= 1;
                } else {
                    node2 = node2.parentNode;
                    depth2 -= 1;
                }
            }

            while (node1 !== node2) {
                node1 = node1.parentNode;
                node2 = node2.parentNode;
            }

            return node1;
        },
        /* END - based on http://stackoverflow.com/a/6183069 */

        isElementAtBeginningOfBlock: function (node) {
            var textVal,
                sibling;
            while (!Util.isBlockContainer(node) && !Util.isMediumEditorElement(node)) {
                sibling = node;
                while (sibling = sibling.previousSibling) {
                    textVal = sibling.nodeType === 3 ? sibling.nodeValue : sibling.textContent;
                    if (textVal.length > 0) {
                        return false;
                    }
                }
                node = node.parentNode;
            }
            return true;
        },

        isMediumEditorElement: function (element) {
            return element && element.getAttribute && !!element.getAttribute('data-medium-editor-element');
        },

        getContainerEditorElement: function (element) {
            return Util.traverseUp(element, function (node) {
                return Util.isMediumEditorElement(node);
            });
        },

        isBlockContainer: function (element) {
            return element && element.nodeType !== 3 && Util.blockContainerElementNames.indexOf(element.nodeName.toLowerCase()) !== -1;
        },

        /* Finds the closest ancestor which is a block container element
         * If element is within editor element but not within any other block element,
         * the editor element is returned
         */
        getClosestBlockContainer: function (node) {
            return Util.traverseUp(node, function (node) {
                return Util.isBlockContainer(node) || Util.isMediumEditorElement(node);
            });
        },

        /* Finds highest level ancestor element which is a block container element
         * If element is within editor element but not within any other block element,
         * the editor element is returned
         */
        getTopBlockContainer: function (element) {
            var topBlock = Util.isBlockContainer(element) ? element : false;
            Util.traverseUp(element, function (el) {
                if (Util.isBlockContainer(el)) {
                    topBlock = el;
                }
                if (!topBlock && Util.isMediumEditorElement(el)) {
                    topBlock = el;
                    return true;
                }
                return false;
            });
            return topBlock;
        },

        getFirstSelectableLeafNode: function (element) {
            while (element && element.firstChild) {
                element = element.firstChild;
            }

            // We don't want to set the selection to an element that can't have children, this messes up Gecko.
            element = Util.traverseUp(element, function (el) {
                return Util.emptyElementNames.indexOf(el.nodeName.toLowerCase()) === -1;
            });
            // Selecting at the beginning of a table doesn't work in PhantomJS.
            if (element.nodeName.toLowerCase() === 'table') {
                var firstCell = element.querySelector('th, td');
                if (firstCell) {
                    element = firstCell;
                }
            }
            return element;
        },

        // TODO: remove getFirstTextNode AND _getFirstTextNode when jumping in 6.0.0 (no code references)
        getFirstTextNode: function (element) {
            Util.warn('getFirstTextNode is deprecated and will be removed in version 6.0.0');
            return Util._getFirstTextNode(element);
        },

        _getFirstTextNode: function (element) {
            if (element.nodeType === 3) {
                return element;
            }

            for (var i = 0; i < element.childNodes.length; i++) {
                var textNode = Util._getFirstTextNode(element.childNodes[i]);
                if (textNode !== null) {
                    return textNode;
                }
            }
            return null;
        },

        ensureUrlHasProtocol: function (url) {
            if (url.indexOf('://') === -1) {
                return 'http://' + url;
            }
            return url;
        },

        warn: function () {
            if (window.console !== undefined && typeof window.console.warn === 'function') {
                window.console.warn.apply(window.console, arguments);
            }
        },

        deprecated: function (oldName, newName, version) {
            // simple deprecation warning mechanism.
            var m = oldName + ' is deprecated, please use ' + newName + ' instead.';
            if (version) {
                m += ' Will be removed in ' + version;
            }
            Util.warn(m);
        },

        deprecatedMethod: function (oldName, newName, args, version) {
            // run the replacement and warn when someone calls a deprecated method
            Util.deprecated(oldName, newName, version);
            if (typeof this[newName] === 'function') {
                this[newName].apply(this, args);
            }
        },

        cleanupAttrs: function (el, attrs) {
            attrs.forEach(function (attr) {
                el.removeAttribute(attr);
            });
        },

        cleanupTags: function (el, tags) {
            if (tags.indexOf(el.nodeName.toLowerCase()) !== -1) {
                el.parentNode.removeChild(el);
            }
        },

        unwrapTags: function (el, tags) {
            if (tags.indexOf(el.nodeName.toLowerCase()) !== -1) {
                MediumEditor.util.unwrap(el, document);
            }
        },

        // get the closest parent
        getClosestTag: function (el, tag) {
            return Util.traverseUp(el, function (element) {
                return element.nodeName.toLowerCase() === tag.toLowerCase();
            });
        },

        unwrap: function (el, doc) {
            var fragment = doc.createDocumentFragment(),
                nodes = Array.prototype.slice.call(el.childNodes);

            // cast nodeList to array since appending child
            // to a different node will alter length of el.childNodes
            for (var i = 0; i < nodes.length; i++) {
                fragment.appendChild(nodes[i]);
            }

            if (fragment.childNodes.length) {
                el.parentNode.replaceChild(fragment, el);
            } else {
                el.parentNode.removeChild(el);
            }
        },

        guid: function () {
            function _s4() {
                return Math
                    .floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4();
        }
    };

    MediumEditor.util = Util;
}(window));

(function () {
    'use strict';

    var Extension = function (options) {
        MediumEditor.util.extend(this, options);
    };

    Extension.extend = function (protoProps) {
        // magic extender thinger. mostly borrowed from backbone/goog.inherits
        // place this function on some thing you want extend-able.
        //
        // example:
        //
        //      function Thing(args){
        //          this.options = args;
        //      }
        //
        //      Thing.prototype = { foo: "bar" };
        //      Thing.extend = extenderify;
        //
        //      var ThingTwo = Thing.extend({ foo: "baz" });
        //
        //      var thingOne = new Thing(); // foo === "bar"
        //      var thingTwo = new ThingTwo(); // foo === "baz"
        //
        //      which seems like some simply shallow copy nonsense
        //      at first, but a lot more is going on there.
        //
        //      passing a `constructor` to the extend props
        //      will cause the instance to instantiate through that
        //      instead of the parent's constructor.

        var parent = this,
            child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.

        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () {
                return parent.apply(this, arguments);
            };
        }

        // das statics (.extend comes over, so your subclass can have subclasses too)
        MediumEditor.util.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function () {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();

        if (protoProps) {
            MediumEditor.util.extend(child.prototype, protoProps);
        }

        // todo: $super?

        return child;
    };

    Extension.prototype = {
        /* init: [function]
         *
         * Called by MediumEditor during initialization.
         * The .base property will already have been set to
         * current instance of MediumEditor when this is called.
         * All helper methods will exist as well
         */
        init: function () {},

        /* base: [MediumEditor instance]
         *
         * If not overriden, this will be set to the current instance
         * of MediumEditor, before the init method is called
         */
        base: undefined,

        /* name: [string]
         *
         * 'name' of the extension, used for retrieving the extension.
         * If not set, MediumEditor will set this to be the key
         * used when passing the extension into MediumEditor via the
         * 'extensions' option
         */
        name: undefined,

        /* checkState: [function (node)]
         *
         * If implemented, this function will be called one or more times
         * the state of the editor & toolbar are updated.
         * When the state is updated, the editor does the following:
         *
         * 1) Find the parent node containing the current selection
         * 2) Call checkState on the extension, passing the node as an argument
         * 3) Get the parent node of the previous node
         * 4) Repeat steps #2 and #3 until we move outside the parent contenteditable
         */
        checkState: undefined,

        /* destroy: [function ()]
         *
         * This method should remove any created html, custom event handlers
         * or any other cleanup tasks that should be performed.
         * If implemented, this function will be called when MediumEditor's
         * destroy method has been called.
         */
        destroy: undefined,

        /* As alternatives to checkState, these functions provide a more structured
         * path to updating the state of an extension (usually a button) whenever
         * the state of the editor & toolbar are updated.
         */

        /* queryCommandState: [function ()]
         *
         * If implemented, this function will be called once on each extension
         * when the state of the editor/toolbar is being updated.
         *
         * If this function returns a non-null value, the extension will
         * be ignored as the code climbs the dom tree.
         *
         * If this function returns true, and the setActive() function is defined
         * setActive() will be called
         */
        queryCommandState: undefined,

        /* isActive: [function ()]
         *
         * If implemented, this function will be called when MediumEditor
         * has determined that this extension is 'active' for the current selection.
         * This may be called when the editor & toolbar are being updated,
         * but only if queryCommandState() or isAlreadyApplied() functions
         * are implemented, and when called, return true.
         */
        isActive: undefined,

        /* isAlreadyApplied: [function (node)]
         *
         * If implemented, this function is similar to checkState() in
         * that it will be called repeatedly as MediumEditor moves up
         * the DOM to update the editor & toolbar after a state change.
         *
         * NOTE: This function will NOT be called if checkState() has
         * been implemented. This function will NOT be called if
         * queryCommandState() is implemented and returns a non-null
         * value when called
         */
        isAlreadyApplied: undefined,

        /* setActive: [function ()]
         *
         * If implemented, this function is called when MediumEditor knows
         * that this extension is currently enabled.  Currently, this
         * function is called when updating the editor & toolbar, and
         * only if queryCommandState() or isAlreadyApplied(node) return
         * true when called
         */
        setActive: undefined,

        /* setInactive: [function ()]
         *
         * If implemented, this function is called when MediumEditor knows
         * that this extension is currently disabled.  Curently, this
         * is called at the beginning of each state change for
         * the editor & toolbar. After calling this, MediumEditor
         * will attempt to update the extension, either via checkState()
         * or the combination of queryCommandState(), isAlreadyApplied(node),
         * isActive(), and setActive()
         */
        setInactive: undefined,

        /* getInteractionElements: [function ()]
         *
         * If the extension renders any elements that the user can interact with,
         * this method should be implemented and return the root element or an array
         * containing all of the root elements. MediumEditor will call this function
         * during interaction to see if the user clicked on something outside of the editor.
         * The elements are used to check if the target element of a click or
         * other user event is a descendant of any extension elements.
         * This way, the editor can also count user interaction within editor elements as
         * interactions with the editor, and thus not trigger 'blur'
         */
        getInteractionElements: undefined,

        /************************ Helpers ************************
         * The following are helpers that are either set by MediumEditor
         * during initialization, or are helper methods which either
         * route calls to the MediumEditor instance or provide common
         * functionality for all extensions
         *********************************************************/

        /* window: [Window]
         *
         * If not overriden, this will be set to the window object
         * to be used by MediumEditor and its extensions.  This is
         * passed via the 'contentWindow' option to MediumEditor
         * and is the global 'window' object by default
         */
        'window': undefined,

        /* document: [Document]
         *
         * If not overriden, this will be set to the document object
         * to be used by MediumEditor and its extensions. This is
         * passed via the 'ownerDocument' optin to MediumEditor
         * and is the global 'document' object by default
         */
        'document': undefined,

        /* getEditorElements: [function ()]
         *
         * Helper function which returns an array containing
         * all the contenteditable elements for this instance
         * of MediumEditor
         */
        getEditorElements: function () {
            return this.base.elements;
        },

        /* getEditorId: [function ()]
         *
         * Helper function which returns a unique identifier
         * for this instance of MediumEditor
         */
        getEditorId: function () {
            return this.base.id;
        },

        /* getEditorOptions: [function (option)]
         *
         * Helper function which returns the value of an option
         * used to initialize this instance of MediumEditor
         */
        getEditorOption: function (option) {
            return this.base.options[option];
        }
    };

    /* List of method names to add to the prototype of Extension
     * Each of these methods will be defined as helpers that
     * just call directly into the MediumEditor instance.
     *
     * example for 'on' method:
     * Extension.prototype.on = function () {
     *     return this.base.on.apply(this.base, arguments);
     * }
     */
    [
        // general helpers
        'execAction',

        // event handling
        'on',
        'off',
        'subscribe',
        'trigger'

    ].forEach(function (helper) {
        Extension.prototype[helper] = function () {
            return this.base[helper].apply(this.base, arguments);
        };
    });

    MediumEditor.Extension = Extension;
})();

(function () {
    'use strict';

    function filterOnlyParentElements(node) {
        if (MediumEditor.util.isBlockContainer(node)) {
            return NodeFilter.FILTER_ACCEPT;
        } else {
            return NodeFilter.FILTER_SKIP;
        }
    }

    var Selection = {
        findMatchingSelectionParent: function (testElementFunction, contentWindow) {
            var selection = contentWindow.getSelection(),
                range,
                current;

            if (selection.rangeCount === 0) {
                return false;
            }

            range = selection.getRangeAt(0);
            current = range.commonAncestorContainer;

            return MediumEditor.util.traverseUp(current, testElementFunction);
        },

        getSelectionElement: function (contentWindow) {
            return this.findMatchingSelectionParent(function (el) {
                return MediumEditor.util.isMediumEditorElement(el);
            }, contentWindow);
        },

        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
        // Tim Down
        exportSelection: function (root, doc) {
            if (!root) {
                return null;
            }

            var selectionState = null,
                selection = doc.getSelection();

            if (selection.rangeCount > 0) {
                var range = selection.getRangeAt(0),
                    preSelectionRange = range.cloneRange(),
                    start;

                preSelectionRange.selectNodeContents(root);
                preSelectionRange.setEnd(range.startContainer, range.startOffset);
                start = preSelectionRange.toString().length;

                selectionState = {
                    start: start,
                    end: start + range.toString().length
                };

                // Check to see if the selection starts with any images
                // if so we need to make sure the the beginning of the selection is
                // set correctly when importing selection
                if (this.doesRangeStartWithImages(range, doc)) {
                    selectionState.startsWithImage = true;
                }

                // Check to see if the selection has any trailing images
                // if so, this this means we need to look for them when we import selection
                var trailingImageCount = this.getTrailingImageCount(root, selectionState, range.endContainer, range.endOffset);
                if (trailingImageCount) {
                    selectionState.trailingImageCount = trailingImageCount;
                }

                // If start = 0 there may still be an empty paragraph before it, but we don't care.
                if (start !== 0) {
                    var emptyBlocksIndex = this.getIndexRelativeToAdjacentEmptyBlocks(doc, root, range.startContainer, range.startOffset);
                    if (emptyBlocksIndex !== -1) {
                        selectionState.emptyBlocksIndex = emptyBlocksIndex;
                    }
                }
            }

            return selectionState;
        },

        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
        // Tim Down
        //
        // {object} selectionState - the selection to import
        // {DOMElement} root - the root element the selection is being restored inside of
        // {Document} doc - the document to use for managing selection
        // {boolean} [favorLaterSelectionAnchor] - defaults to false. If true, import the cursor immediately
        //      subsequent to an anchor tag if it would otherwise be placed right at the trailing edge inside the
        //      anchor. This cursor positioning, even though visually equivalent to the user, can affect behavior
        //      in MS IE.
        importSelection: function (selectionState, root, doc, favorLaterSelectionAnchor) {
            if (!selectionState || !root) {
                return;
            }

            var range = doc.createRange();
            range.setStart(root, 0);
            range.collapse(true);

            var node = root,
                nodeStack = [],
                charIndex = 0,
                foundStart = false,
                foundEnd = false,
                trailingImageCount = 0,
                stop = false,
                nextCharIndex,
                allowRangeToStartAtEndOfNode = false,
                lastTextNode = null;

            // When importing selection, the start of the selection may lie at the end of an element
            // or at the beginning of an element.  Since visually there is no difference between these 2
            // we will try to move the selection to the beginning of an element since this is generally
            // what users will expect and it's a more predictable behavior.
            //
            // However, there are some specific cases when we don't want to do this:
            //  1) We're attempting to move the cursor outside of the end of an anchor [favorLaterSelectionAnchor = true]
            //  2) The selection starts with an image, which is special since an image doesn't have any 'content'
            //     as far as selection and ranges are concerned
            //  3) The selection starts after a specified number of empty block elements (selectionState.emptyBlocksIndex)
            //
            // For these cases, we want the selection to start at a very specific location, so we should NOT
            // automatically move the cursor to the beginning of the first actual chunk of text
            if (favorLaterSelectionAnchor || selectionState.startsWithImage || typeof selectionState.emptyBlocksIndex !== 'undefined') {
                allowRangeToStartAtEndOfNode = true;
            }

            while (!stop && node) {
                // Only iterate over elements and text nodes
                if (node.nodeType > 3) {
                    node = nodeStack.pop();
                    continue;
                }

                // If we hit a text node, we need to add the amount of characters to the overall count
                if (node.nodeType === 3 && !foundEnd) {
                    nextCharIndex = charIndex + node.length;
                    // Check if we're at or beyond the start of the selection we're importing
                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {
                        // NOTE: We only want to allow a selection to start at the END of an element if
                        //  allowRangeToStartAtEndOfNode is true
                        if (allowRangeToStartAtEndOfNode || selectionState.start < nextCharIndex) {
                            range.setStart(node, selectionState.start - charIndex);
                            foundStart = true;
                        }
                        // We're at the end of a text node where the selection could start but we shouldn't
                        // make the selection start here because allowRangeToStartAtEndOfNode is false.
                        // However, we should keep a reference to this node in case there aren't any more
                        // text nodes after this, so that we have somewhere to import the selection to
                        else {
                            lastTextNode = node;
                        }
                    }
                    // We've found the start of the selection, check if we're at or beyond the end of the selection we're importing
                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {
                        if (!selectionState.trailingImageCount) {
                            range.setEnd(node, selectionState.end - charIndex);
                            stop = true;
                        } else {
                            foundEnd = true;
                        }
                    }
                    charIndex = nextCharIndex;
                } else {
                    if (selectionState.trailingImageCount && foundEnd) {
                        if (node.nodeName.toLowerCase() === 'img') {
                            trailingImageCount++;
                        }
                        if (trailingImageCount === selectionState.trailingImageCount) {
                            // Find which index the image is in its parent's children
                            var endIndex = 0;
                            while (node.parentNode.childNodes[endIndex] !== node) {
                                endIndex++;
                            }
                            range.setEnd(node.parentNode, endIndex + 1);
                            stop = true;
                        }
                    }

                    if (!stop && node.nodeType === 1) {
                        // this is an element
                        // add all its children to the stack
                        var i = node.childNodes.length - 1;
                        while (i >= 0) {
                            nodeStack.push(node.childNodes[i]);
                            i -= 1;
                        }
                    }
                }

                if (!stop) {
                    node = nodeStack.pop();
                }
            }

            // If we've gone through the entire text but didn't find the beginning of a text node
            // to make the selection start at, we should fall back to starting the selection
            // at the END of the last text node we found
            if (!foundStart && lastTextNode) {
                range.setStart(lastTextNode, lastTextNode.length);
                range.setEnd(lastTextNode, lastTextNode.length);
            }

            if (typeof selectionState.emptyBlocksIndex !== 'undefined') {
                range = this.importSelectionMoveCursorPastBlocks(doc, root, selectionState.emptyBlocksIndex, range);
            }

            // If the selection is right at the ending edge of a link, put it outside the anchor tag instead of inside.
            if (favorLaterSelectionAnchor) {
                range = this.importSelectionMoveCursorPastAnchor(selectionState, range);
            }

            this.selectRange(doc, range);
        },

        // Utility method called from importSelection only
        importSelectionMoveCursorPastAnchor: function (selectionState, range) {
            var nodeInsideAnchorTagFunction = function (node) {
                return node.nodeName.toLowerCase() === 'a';
            };
            if (selectionState.start === selectionState.end &&
                    range.startContainer.nodeType === 3 &&
                    range.startOffset === range.startContainer.nodeValue.length &&
                    MediumEditor.util.traverseUp(range.startContainer, nodeInsideAnchorTagFunction)) {
                var prevNode = range.startContainer,
                    currentNode = range.startContainer.parentNode;
                while (currentNode !== null && currentNode.nodeName.toLowerCase() !== 'a') {
                    if (currentNode.childNodes[currentNode.childNodes.length - 1] !== prevNode) {
                        currentNode = null;
                    } else {
                        prevNode = currentNode;
                        currentNode = currentNode.parentNode;
                    }
                }
                if (currentNode !== null && currentNode.nodeName.toLowerCase() === 'a') {
                    var currentNodeIndex = null;
                    for (var i = 0; currentNodeIndex === null && i < currentNode.parentNode.childNodes.length; i++) {
                        if (currentNode.parentNode.childNodes[i] === currentNode) {
                            currentNodeIndex = i;
                        }
                    }
                    range.setStart(currentNode.parentNode, currentNodeIndex + 1);
                    range.collapse(true);
                }
            }
            return range;
        },

        // Uses the emptyBlocksIndex calculated by getIndexRelativeToAdjacentEmptyBlocks
        // to move the cursor back to the start of the correct paragraph
        importSelectionMoveCursorPastBlocks: function (doc, root, index, range) {
            var treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),
                startContainer = range.startContainer,
                startBlock,
                targetNode,
                currIndex = 0;
            index = index || 1; // If index is 0, we still want to move to the next block

            // Chrome counts newlines and spaces that separate block elements as actual elements.
            // If the selection is inside one of these text nodes, and it has a previous sibling
            // which is a block element, we want the treewalker to start at the previous sibling
            // and NOT at the parent of the textnode
            if (startContainer.nodeType === 3 && MediumEditor.util.isBlockContainer(startContainer.previousSibling)) {
                startBlock = startContainer.previousSibling;
            } else {
                startBlock = MediumEditor.util.getClosestBlockContainer(startContainer);
            }

            // Skip over empty blocks until we hit the block we want the selection to be in
            while (treeWalker.nextNode()) {
                if (!targetNode) {
                    // Loop through all blocks until we hit the starting block element
                    if (startBlock === treeWalker.currentNode) {
                        targetNode = treeWalker.currentNode;
                    }
                } else {
                    targetNode = treeWalker.currentNode;
                    currIndex++;
                    // We hit the target index, bail
                    if (currIndex === index) {
                        break;
                    }
                    // If we find a non-empty block, ignore the emptyBlocksIndex and just put selection here
                    if (targetNode.textContent.length > 0) {
                        break;
                    }
                }
            }

            if (!targetNode) {
                targetNode = startBlock;
            }

            // We're selecting a high-level block node, so make sure the cursor gets moved into the deepest
            // element at the beginning of the block
            range.setStart(MediumEditor.util.getFirstSelectableLeafNode(targetNode), 0);

            return range;
        },

        // Returns -1 unless the cursor is at the beginning of a paragraph/block
        // If the paragraph/block is preceeded by empty paragraphs/block (with no text)
        // it will return the number of empty paragraphs before the cursor.
        // Otherwise, it will return 0, which indicates the cursor is at the beginning
        // of a paragraph/block, and not at the end of the paragraph/block before it
        getIndexRelativeToAdjacentEmptyBlocks: function (doc, root, cursorContainer, cursorOffset) {
            // If there is text in front of the cursor, that means there isn't only empty blocks before it
            if (cursorContainer.textContent.length > 0 && cursorOffset > 0) {
                return -1;
            }

            // Check if the block that contains the cursor has any other text in front of the cursor
            var node = cursorContainer;
            if (node.nodeType !== 3) {
                node = cursorContainer.childNodes[cursorOffset];
            }
            if (node) {
                // The element isn't at the beginning of a block, so it has content before it
                if (!MediumEditor.util.isElementAtBeginningOfBlock(node)) {
                    return -1;
                }

                var previousSibling = MediumEditor.util.findPreviousSibling(node);
                // If there is no previous sibling, this is the first text element in the editor
                if (!previousSibling) {
                    return -1;
                }
                // If the previous sibling has text, then there are no empty blocks before this
                else if (previousSibling.nodeValue) {
                    return -1;
                }
            }

            // Walk over block elements, counting number of empty blocks between last piece of text
            // and the block the cursor is in
            var closestBlock = MediumEditor.util.getClosestBlockContainer(cursorContainer),
                treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),
                emptyBlocksCount = 0;
            while (treeWalker.nextNode()) {
                var blockIsEmpty = treeWalker.currentNode.textContent === '';
                if (blockIsEmpty || emptyBlocksCount > 0) {
                    emptyBlocksCount += 1;
                }
                if (treeWalker.currentNode === closestBlock) {
                    return emptyBlocksCount;
                }
                if (!blockIsEmpty) {
                    emptyBlocksCount = 0;
                }
            }

            return emptyBlocksCount;
        },

        // Returns true if the selection range begins with an image tag
        // Returns false if the range starts with any non empty text nodes
        doesRangeStartWithImages: function (range, doc) {
            if (range.startOffset !== 0 || range.startContainer.nodeType !== 1) {
                return false;
            }

            if (range.startContainer.nodeName.toLowerCase() === 'img') {
                return true;
            }

            var img = range.startContainer.querySelector('img');
            if (!img) {
                return false;
            }

            var treeWalker = doc.createTreeWalker(range.startContainer, NodeFilter.SHOW_ALL, null, false);
            while (treeWalker.nextNode()) {
                var next = treeWalker.currentNode;
                // If we hit the image, then there isn't any text before the image so
                // the image is at the beginning of the range
                if (next === img) {
                    break;
                }
                // If we haven't hit the iamge, but found text that contains content
                // then the range doesn't start with an image
                if (next.nodeValue) {
                    return false;
                }
            }

            return true;
        },

        getTrailingImageCount: function (root, selectionState, endContainer, endOffset) {
            // If the endOffset of a range is 0, the endContainer doesn't contain images
            // If the endContainer is a text node, there are no trailing images
            if (endOffset === 0 || endContainer.nodeType !== 1) {
                return 0;
            }

            // If the endContainer isn't an image, and doesn't have an image descendants
            // there are no trailing images
            if (endContainer.nodeName.toLowerCase() !== 'img' && !endContainer.querySelector('img')) {
                return 0;
            }

            var lastNode = endContainer.childNodes[endOffset - 1];
            while (lastNode.hasChildNodes()) {
                lastNode = lastNode.lastChild;
            }

            var node = root,
                nodeStack = [],
                charIndex = 0,
                foundStart = false,
                foundEnd = false,
                stop = false,
                nextCharIndex,
                trailingImages = 0;

            while (!stop && node) {
                // Only iterate over elements and text nodes
                if (node.nodeType > 3) {
                    node = nodeStack.pop();
                    continue;
                }

                if (node.nodeType === 3 && !foundEnd) {
                    trailingImages = 0;
                    nextCharIndex = charIndex + node.length;
                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {
                        foundStart = true;
                    }
                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {
                        foundEnd = true;
                    }
                    charIndex = nextCharIndex;
                } else {
                    if (node.nodeName.toLowerCase() === 'img') {
                        trailingImages++;
                    }

                    if (node === lastNode) {
                        stop = true;
                    } else if (node.nodeType === 1) {
                        // this is an element
                        // add all its children to the stack
                        var i = node.childNodes.length - 1;
                        while (i >= 0) {
                            nodeStack.push(node.childNodes[i]);
                            i -= 1;
                        }
                    }
                }

                if (!stop) {
                    node = nodeStack.pop();
                }
            }

            return trailingImages;
        },

        // determine if the current selection contains any 'content'
        // content being any non-white space text or an image
        selectionContainsContent: function (doc) {
            var sel = doc.getSelection();

            // collapsed selection or selection withour range doesn't contain content
            if (!sel || sel.isCollapsed || !sel.rangeCount) {
                return false;
            }

            // if toString() contains any text, the selection contains some content
            if (sel.toString().trim() !== '') {
                return true;
            }

            // if selection contains only image(s), it will return empty for toString()
            // so check for an image manually
            var selectionNode = this.getSelectedParentElement(sel.getRangeAt(0));
            if (selectionNode) {
                if (selectionNode.nodeName.toLowerCase() === 'img' ||
                    (selectionNode.nodeType === 1 && selectionNode.querySelector('img'))) {
                    return true;
                }
            }

            return false;
        },

        selectionInContentEditableFalse: function (contentWindow) {
            // determine if the current selection is exclusively inside
            // a contenteditable="false", though treat the case of an
            // explicit contenteditable="true" inside a "false" as false.
            var sawtrue,
                sawfalse = this.findMatchingSelectionParent(function (el) {
                    var ce = el && el.getAttribute('contenteditable');
                    if (ce === 'true') {
                        sawtrue = true;
                    }
                    return el.nodeName !== '#text' && ce === 'false';
                }, contentWindow);

            return !sawtrue && sawfalse;
        },

        // http://stackoverflow.com/questions/4176923/html-of-selected-text
        // by Tim Down
        getSelectionHtml: function getSelectionHtml(doc) {
            var i,
                html = '',
                sel = doc.getSelection(),
                len,
                container;
            if (sel.rangeCount) {
                container = doc.createElement('div');
                for (i = 0, len = sel.rangeCount; i < len; i += 1) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                html = container.innerHTML;
            }
            return html;
        },

        /**
         *  Find the caret position within an element irrespective of any inline tags it may contain.
         *
         *  @param {DOMElement} An element containing the cursor to find offsets relative to.
         *  @param {Range} A Range representing cursor position. Will window.getSelection if none is passed.
         *  @return {Object} 'left' and 'right' attributes contain offsets from begining and end of Element
         */
        getCaretOffsets: function getCaretOffsets(element, range) {
            var preCaretRange, postCaretRange;

            if (!range) {
                range = window.getSelection().getRangeAt(0);
            }

            preCaretRange = range.cloneRange();
            postCaretRange = range.cloneRange();

            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);

            postCaretRange.selectNodeContents(element);
            postCaretRange.setStart(range.endContainer, range.endOffset);

            return {
                left: preCaretRange.toString().length,
                right: postCaretRange.toString().length
            };
        },

        // http://stackoverflow.com/questions/15867542/range-object-get-selection-parent-node-chrome-vs-firefox
        rangeSelectsSingleNode: function (range) {
            var startNode = range.startContainer;
            return startNode === range.endContainer &&
                startNode.hasChildNodes() &&
                range.endOffset === range.startOffset + 1;
        },

        getSelectedParentElement: function (range) {
            if (!range) {
                return null;
            }

            // Selection encompasses a single element
            if (this.rangeSelectsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
                return range.startContainer.childNodes[range.startOffset];
            }

            // Selection range starts inside a text node, so get its parent
            if (range.startContainer.nodeType === 3) {
                return range.startContainer.parentNode;
            }

            // Selection starts inside an element
            return range.startContainer;
        },

        getSelectedElements: function (doc) {
            var selection = doc.getSelection(),
                range,
                toRet,
                currNode;

            if (!selection.rangeCount || selection.isCollapsed || !selection.getRangeAt(0).commonAncestorContainer) {
                return [];
            }

            range = selection.getRangeAt(0);

            if (range.commonAncestorContainer.nodeType === 3) {
                toRet = [];
                currNode = range.commonAncestorContainer;
                while (currNode.parentNode && currNode.parentNode.childNodes.length === 1) {
                    toRet.push(currNode.parentNode);
                    currNode = currNode.parentNode;
                }

                return toRet;
            }

            return [].filter.call(range.commonAncestorContainer.getElementsByTagName('*'), function (el) {
                return (typeof selection.containsNode === 'function') ? selection.containsNode(el, true) : true;
            });
        },

        selectNode: function (node, doc) {
            var range = doc.createRange();
            range.selectNodeContents(node);
            this.selectRange(doc, range);
        },

        select: function (doc, startNode, startOffset, endNode, endOffset) {
            var range = doc.createRange();
            range.setStart(startNode, startOffset);
            if (endNode) {
                range.setEnd(endNode, endOffset);
            } else {
                range.collapse(true);
            }
            this.selectRange(doc, range);
            return range;
        },

        /**
         *  Clear the current highlighted selection and set the caret to the start or the end of that prior selection, defaults to end.
         *
         *  @param {DomDocument} doc            Current document
         *  @param {boolean} moveCursorToStart  A boolean representing whether or not to set the caret to the beginning of the prior selection.
         */
        clearSelection: function (doc, moveCursorToStart) {
            if (moveCursorToStart) {
                doc.getSelection().collapseToStart();
            } else {
                doc.getSelection().collapseToEnd();
            }
        },

        /**
         * Move cursor to the given node with the given offset.
         *
         * @param  {DomDocument} doc     Current document
         * @param  {DomElement}  node    Element where to jump
         * @param  {integer}     offset  Where in the element should we jump, 0 by default
         */
        moveCursor: function (doc, node, offset) {
            this.select(doc, node, offset);
        },

        getSelectionRange: function (ownerDocument) {
            var selection = ownerDocument.getSelection();
            if (selection.rangeCount === 0) {
                return null;
            }
            return selection.getRangeAt(0);
        },

        selectRange: function (ownerDocument, range) {
            var selection = ownerDocument.getSelection();

            selection.removeAllRanges();
            selection.addRange(range);
        },

        // http://stackoverflow.com/questions/1197401/how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contentedi
        // by You
        getSelectionStart: function (ownerDocument) {
            var node = ownerDocument.getSelection().anchorNode,
                startNode = (node && node.nodeType === 3 ? node.parentNode : node);

            return startNode;
        }
    };

    MediumEditor.selection = Selection;
}());

(function () {
    'use strict';

    function isElementDescendantOfExtension(extensions, element) {
        return extensions.some(function (extension) {
            if (typeof extension.getInteractionElements !== 'function') {
                return false;
            }

            var extensionElements = extension.getInteractionElements();
            if (!extensionElements) {
                return false;
            }

            if (!Array.isArray(extensionElements)) {
                extensionElements = [extensionElements];
            }
            return extensionElements.some(function (el) {
                return MediumEditor.util.isDescendant(el, element, true);
            });
        });
    }

    var Events = function (instance) {
        this.base = instance;
        this.options = this.base.options;
        this.events = [];
        this.disabledEvents = {};
        this.customEvents = {};
        this.listeners = {};
    };

    Events.prototype = {
        InputEventOnContenteditableSupported: !MediumEditor.util.isIE && !MediumEditor.util.isEdge,

        // Helpers for event handling

        attachDOMEvent: function (targets, event, listener, useCapture) {
            var win = this.base.options.contentWindow,
                doc = this.base.options.ownerDocument;

            targets = MediumEditor.util.isElement(targets) || [win, doc].indexOf(targets) > -1 ? [targets] : targets;

            Array.prototype.forEach.call(targets, function (target) {
                target.addEventListener(event, listener, useCapture);
                this.events.push([target, event, listener, useCapture]);
            }.bind(this));
        },

        detachDOMEvent: function (targets, event, listener, useCapture) {
            var index, e,
                win = this.base.options.contentWindow,
                doc = this.base.options.ownerDocument;

            if (targets !== null) {
                targets = MediumEditor.util.isElement(targets) || [win, doc].indexOf(targets) > -1 ? [targets] : targets;

                Array.prototype.forEach.call(targets, function (target) {
                    index = this.indexOfListener(target, event, listener, useCapture);
                    if (index !== -1) {
                        e = this.events.splice(index, 1)[0];
                        e[0].removeEventListener(e[1], e[2], e[3]);
                    }
                }.bind(this));
            }
        },

        indexOfListener: function (target, event, listener, useCapture) {
            var i, n, item;
            for (i = 0, n = this.events.length; i < n; i = i + 1) {
                item = this.events[i];
                if (item[0] === target && item[1] === event && item[2] === listener && item[3] === useCapture) {
                    return i;
                }
            }
            return -1;
        },

        detachAllDOMEvents: function () {
            var e = this.events.pop();
            while (e) {
                e[0].removeEventListener(e[1], e[2], e[3]);
                e = this.events.pop();
            }
        },

        detachAllEventsFromElement: function (element) {
            var filtered = this.events.filter(function (e) {
                return e && e[0].getAttribute && e[0].getAttribute('medium-editor-index') === element.getAttribute('medium-editor-index');
            });

            for (var i = 0, len = filtered.length; i < len; i++) {
                var e = filtered[i];
                this.detachDOMEvent(e[0], e[1], e[2], e[3]);
            }
        },

        // Attach all existing handlers to a new element
        attachAllEventsToElement: function (element) {
            if (this.listeners['editableInput']) {
                this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;
            }

            if (this.eventsCache) {
                this.eventsCache.forEach(function (e) {
                    this.attachDOMEvent(element, e['name'], e['handler'].bind(this));
                }, this);
            }
        },

        enableCustomEvent: function (event) {
            if (this.disabledEvents[event] !== undefined) {
                delete this.disabledEvents[event];
            }
        },

        disableCustomEvent: function (event) {
            this.disabledEvents[event] = true;
        },

        // custom events
        attachCustomEvent: function (event, listener) {
            this.setupListener(event);
            if (!this.customEvents[event]) {
                this.customEvents[event] = [];
            }
            this.customEvents[event].push(listener);
        },

        detachCustomEvent: function (event, listener) {
            var index = this.indexOfCustomListener(event, listener);
            if (index !== -1) {
                this.customEvents[event].splice(index, 1);
                // TODO: If array is empty, should detach internal listeners via destroyListener()
            }
        },

        indexOfCustomListener: function (event, listener) {
            if (!this.customEvents[event] || !this.customEvents[event].length) {
                return -1;
            }

            return this.customEvents[event].indexOf(listener);
        },

        detachAllCustomEvents: function () {
            this.customEvents = {};
            // TODO: Should detach internal listeners here via destroyListener()
        },

        triggerCustomEvent: function (name, data, editable) {
            if (this.customEvents[name] && !this.disabledEvents[name]) {
                this.customEvents[name].forEach(function (listener) {
                    listener(data, editable);
                });
            }
        },

        // Cleaning up

        destroy: function () {
            this.detachAllDOMEvents();
            this.detachAllCustomEvents();
            this.detachExecCommand();

            if (this.base.elements) {
                this.base.elements.forEach(function (element) {
                    element.removeAttribute('data-medium-focused');
                });
            }
        },

        // Listening to calls to document.execCommand

        // Attach a listener to be notified when document.execCommand is called
        attachToExecCommand: function () {
            if (this.execCommandListener) {
                return;
            }

            // Store an instance of the listener so:
            // 1) We only attach to execCommand once
            // 2) We can remove the listener later
            this.execCommandListener = function (execInfo) {
                this.handleDocumentExecCommand(execInfo);
            }.bind(this);

            // Ensure that execCommand has been wrapped correctly
            this.wrapExecCommand();

            // Add listener to list of execCommand listeners
            this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener);
        },

        // Remove our listener for calls to document.execCommand
        detachExecCommand: function () {
            var doc = this.options.ownerDocument;
            if (!this.execCommandListener || !doc.execCommand.listeners) {
                return;
            }

            // Find the index of this listener in the array of listeners so it can be removed
            var index = doc.execCommand.listeners.indexOf(this.execCommandListener);
            if (index !== -1) {
                doc.execCommand.listeners.splice(index, 1);
            }

            // If the list of listeners is now empty, put execCommand back to its original state
            if (!doc.execCommand.listeners.length) {
                this.unwrapExecCommand();
            }
        },

        // Wrap document.execCommand in a custom method so we can listen to calls to it
        wrapExecCommand: function () {
            var doc = this.options.ownerDocument;

            // Ensure all instance of MediumEditor only wrap execCommand once
            if (doc.execCommand.listeners) {
                return;
            }

            // Helper method to call all listeners to execCommand
            var callListeners = function (args, result) {
                if (doc.execCommand.listeners) {
                    doc.execCommand.listeners.forEach(function (listener) {
                        listener({
                            command: args[0],
                            value: args[2],
                            args: args,
                            result: result
                        });
                    });
                }
            },

                // Create a wrapper method for execCommand which will:
                // 1) Call document.execCommand with the correct arguments
                // 2) Loop through any listeners and notify them that execCommand was called
                //    passing extra info on the call
                // 3) Return the result
                wrapper = function () {
                    var result = doc.execCommand.orig.apply(this, arguments);

                    if (!doc.execCommand.listeners) {
                        return result;
                    }

                    var args = Array.prototype.slice.call(arguments);
                    callListeners(args, result);

                    return result;
                };

            // Store a reference to the original execCommand
            wrapper.orig = doc.execCommand;

            // Attach an array for storing listeners
            wrapper.listeners = [];

            // Helper for notifying listeners
            wrapper.callListeners = callListeners;

            // Overwrite execCommand
            doc.execCommand = wrapper;
        },

        // Revert document.execCommand back to its original self
        unwrapExecCommand: function () {
            var doc = this.options.ownerDocument;
            if (!doc.execCommand.orig) {
                return;
            }

            // Use the reference to the original execCommand to revert back
            doc.execCommand = doc.execCommand.orig;
        },

        // Listening to browser events to emit events medium-editor cares about
        setupListener: function (name) {
            if (this.listeners[name]) {
                return;
            }

            switch (name) {
                case 'externalInteraction':
                    // Detecting when user has interacted with elements outside of MediumEditor
                    this.attachDOMEvent(this.options.ownerDocument.body, 'mousedown', this.handleBodyMousedown.bind(this), true);
                    this.attachDOMEvent(this.options.ownerDocument.body, 'click', this.handleBodyClick.bind(this), true);
                    this.attachDOMEvent(this.options.ownerDocument.body, 'focus', this.handleBodyFocus.bind(this), true);
                    break;
                case 'blur':
                    // Detecting when focus is lost
                    this.setupListener('externalInteraction');
                    break;
                case 'focus':
                    // Detecting when focus moves into some part of MediumEditor
                    this.setupListener('externalInteraction');
                    break;
                case 'editableInput':
                    // setup cache for knowing when the content has changed
                    this.contentCache = {};
                    this.base.elements.forEach(function (element) {
                        this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;
                    }, this);

                    // Attach to the 'oninput' event, handled correctly by most browsers
                    if (this.InputEventOnContenteditableSupported) {
                        this.attachToEachElement('input', this.handleInput);
                    }

                    // For browsers which don't support the input event on contenteditable (IE)
                    // we'll attach to 'selectionchange' on the document and 'keypress' on the editables
                    if (!this.InputEventOnContenteditableSupported) {
                        this.setupListener('editableKeypress');
                        this.keypressUpdateInput = true;
                        this.attachDOMEvent(document, 'selectionchange', this.handleDocumentSelectionChange.bind(this));
                        // Listen to calls to execCommand
                        this.attachToExecCommand();
                    }
                    break;
                case 'editableClick':
                    // Detecting click in the contenteditables
                    this.attachToEachElement('click', this.handleClick);
                    break;
                case 'editableBlur':
                    // Detecting blur in the contenteditables
                    this.attachToEachElement('blur', this.handleBlur);
                    break;
                case 'editableKeypress':
                    // Detecting keypress in the contenteditables
                    this.attachToEachElement('keypress', this.handleKeypress);
                    break;
                case 'editableKeyup':
                    // Detecting keyup in the contenteditables
                    this.attachToEachElement('keyup', this.handleKeyup);
                    break;
                case 'editableKeydown':
                    // Detecting keydown on the contenteditables
                    this.attachToEachElement('keydown', this.handleKeydown);
                    break;
                case 'editableKeydownSpace':
                    // Detecting keydown for SPACE on the contenteditables
                    this.setupListener('editableKeydown');
                    break;
                case 'editableKeydownEnter':
                    // Detecting keydown for ENTER on the contenteditables
                    this.setupListener('editableKeydown');
                    break;
                case 'editableKeydownTab':
                    // Detecting keydown for TAB on the contenteditable
                    this.setupListener('editableKeydown');
                    break;
                case 'editableKeydownDelete':
                    // Detecting keydown for DELETE/BACKSPACE on the contenteditables
                    this.setupListener('editableKeydown');
                    break;
                case 'editableMouseover':
                    // Detecting mouseover on the contenteditables
                    this.attachToEachElement('mouseover', this.handleMouseover);
                    break;
                case 'editableDrag':
                    // Detecting dragover and dragleave on the contenteditables
                    this.attachToEachElement('dragover', this.handleDragging);
                    this.attachToEachElement('dragleave', this.handleDragging);
                    break;
                case 'editableDrop':
                    // Detecting drop on the contenteditables
                    this.attachToEachElement('drop', this.handleDrop);
                    break;
                // TODO: We need to have a custom 'paste' event separate from 'editablePaste'
                // Need to think about the way to introduce this without breaking folks
                case 'editablePaste':
                    // Detecting paste on the contenteditables
                    this.attachToEachElement('paste', this.handlePaste);
                    break;
            }
            this.listeners[name] = true;
        },

        attachToEachElement: function (name, handler) {
            // build our internal cache to know which element got already what handler attached
            if (!this.eventsCache) {
                this.eventsCache = [];
            }

            this.base.elements.forEach(function (element) {
                this.attachDOMEvent(element, name, handler.bind(this));
            }, this);

            this.eventsCache.push({ 'name': name, 'handler': handler });
        },

        cleanupElement: function (element) {
            var index = element.getAttribute('medium-editor-index');
            if (index) {
                this.detachAllEventsFromElement(element);
                if (this.contentCache) {
                    delete this.contentCache[index];
                }
            }
        },

        focusElement: function (element) {
            element.focus();
            this.updateFocus(element, { target: element, type: 'focus' });
        },

        updateFocus: function (target, eventObj) {
            var hadFocus = this.base.getFocusedElement(),
                toFocus;

            // For clicks, we need to know if the mousedown that caused the click happened inside the existing focused element
            // or one of the extension elements.  If so, we don't want to focus another element
            if (hadFocus &&
                eventObj.type === 'click' &&
                this.lastMousedownTarget &&
                (MediumEditor.util.isDescendant(hadFocus, this.lastMousedownTarget, true) ||
                    isElementDescendantOfExtension(this.base.extensions, this.lastMousedownTarget))) {
                toFocus = hadFocus;
            }

            if (!toFocus) {
                this.base.elements.some(function (element) {
                    // If the target is part of an editor element, this is the element getting focus
                    if (!toFocus && (MediumEditor.util.isDescendant(element, target, true))) {
                        toFocus = element;
                    }

                    // bail if we found an element that's getting focus
                    return !!toFocus;
                }, this);
            }

            // Check if the target is external (not part of the editor, toolbar, or any other extension)
            var externalEvent = !MediumEditor.util.isDescendant(hadFocus, target, true) &&
                !isElementDescendantOfExtension(this.base.extensions, target);

            if (toFocus !== hadFocus) {
                // If element has focus, and focus is going outside of editor
                // Don't blur focused element if clicking on editor, toolbar, or anchorpreview
                if (hadFocus && externalEvent) {
                    // Trigger blur on the editable that has lost focus
                    hadFocus.removeAttribute('data-medium-focused');
                    this.triggerCustomEvent('blur', eventObj, hadFocus);
                }

                // If focus is going into an editor element
                if (toFocus) {
                    // Trigger focus on the editable that now has focus
                    toFocus.setAttribute('data-medium-focused', true);
                    this.triggerCustomEvent('focus', eventObj, toFocus);
                }
            }

            if (externalEvent) {
                this.triggerCustomEvent('externalInteraction', eventObj);
            }
        },

        updateInput: function (target, eventObj) {
            if (!this.contentCache) {
                return;
            }
            // An event triggered which signifies that the user may have changed someting
            // Look in our cache of input for the contenteditables to see if something changed
            var index = target.getAttribute('medium-editor-index'),
                html = target.innerHTML;

            if (html !== this.contentCache[index]) {
                // The content has changed since the last time we checked, fire the event
                this.triggerCustomEvent('editableInput', eventObj, target);
            }
            this.contentCache[index] = html;
        },

        handleDocumentSelectionChange: function (event) {
            // When selectionchange fires, target and current target are set
            // to document, since this is where the event is handled
            // However, currentTarget will have an 'activeElement' property
            // which will point to whatever element has focus.
            if (event.currentTarget && event.currentTarget.activeElement) {
                var activeElement = event.currentTarget.activeElement,
                    currentTarget;
                // We can look at the 'activeElement' to determine if the selectionchange has
                // happened within a contenteditable owned by this instance of MediumEditor
                this.base.elements.some(function (element) {
                    if (MediumEditor.util.isDescendant(element, activeElement, true)) {
                        currentTarget = element;
                        return true;
                    }
                    return false;
                }, this);

                // We know selectionchange fired within one of our contenteditables
                if (currentTarget) {
                    this.updateInput(currentTarget, { target: activeElement, currentTarget: currentTarget });
                }
            }
        },

        handleDocumentExecCommand: function () {
            // document.execCommand has been called
            // If one of our contenteditables currently has focus, we should
            // attempt to trigger the 'editableInput' event
            var target = this.base.getFocusedElement();
            if (target) {
                this.updateInput(target, { target: target, currentTarget: target });
            }
        },

        handleBodyClick: function (event) {
            this.updateFocus(event.target, event);
        },

        handleBodyFocus: function (event) {
            this.updateFocus(event.target, event);
        },

        handleBodyMousedown: function (event) {
            this.lastMousedownTarget = event.target;
        },

        handleInput: function (event) {
            this.updateInput(event.currentTarget, event);
        },

        handleClick: function (event) {
            this.triggerCustomEvent('editableClick', event, event.currentTarget);
        },

        handleBlur: function (event) {
            this.triggerCustomEvent('editableBlur', event, event.currentTarget);
        },

        handleKeypress: function (event) {
            this.triggerCustomEvent('editableKeypress', event, event.currentTarget);

            // If we're doing manual detection of the editableInput event we need
            // to check for input changes during 'keypress'
            if (this.keypressUpdateInput) {
                var eventObj = { target: event.target, currentTarget: event.currentTarget };

                // In IE, we need to let the rest of the event stack complete before we detect
                // changes to input, so using setTimeout here
                setTimeout(function () {
                    this.updateInput(eventObj.currentTarget, eventObj);
                }.bind(this), 0);
            }
        },

        handleKeyup: function (event) {
            this.triggerCustomEvent('editableKeyup', event, event.currentTarget);
        },

        handleMouseover: function (event) {
            this.triggerCustomEvent('editableMouseover', event, event.currentTarget);
        },

        handleDragging: function (event) {
            this.triggerCustomEvent('editableDrag', event, event.currentTarget);
        },

        handleDrop: function (event) {
            this.triggerCustomEvent('editableDrop', event, event.currentTarget);
        },

        handlePaste: function (event) {
            this.triggerCustomEvent('editablePaste', event, event.currentTarget);
        },

        handleKeydown: function (event) {

            this.triggerCustomEvent('editableKeydown', event, event.currentTarget);

            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.SPACE)) {
                return this.triggerCustomEvent('editableKeydownSpace', event, event.currentTarget);
            }

            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) || (event.ctrlKey && MediumEditor.util.isKey(event, MediumEditor.util.keyCode.M))) {
                return this.triggerCustomEvent('editableKeydownEnter', event, event.currentTarget);
            }

            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.TAB)) {
                return this.triggerCustomEvent('editableKeydownTab', event, event.currentTarget);
            }

            if (MediumEditor.util.isKey(event, [MediumEditor.util.keyCode.DELETE, MediumEditor.util.keyCode.BACKSPACE])) {
                return this.triggerCustomEvent('editableKeydownDelete', event, event.currentTarget);
            }
        }
    };

    MediumEditor.Events = Events;
}());

(function () {
    'use strict';

    var Button = MediumEditor.Extension.extend({

        /* Button Options */

        /* action: [string]
         * The action argument to pass to MediumEditor.execAction()
         * when the button is clicked
         */
        action: undefined,

        /* aria: [string]
         * The value to add as the aria-label attribute of the button
         * element displayed in the toolbar.
         * This is also used as the tooltip for the button
         */
        aria: undefined,

        /* tagNames: [Array]
         * NOTE: This is not used if useQueryState is set to true.
         *
         * Array of element tag names that would indicate that this
         * button has already been applied. If this action has already
         * been applied, the button will be displayed as 'active' in the toolbar
         *
         * Example:
         * For 'bold', if the text is ever within a <b> or <strong>
         * tag that indicates the text is already bold. So the array
         * of tagNames for bold would be: ['b', 'strong']
         */
        tagNames: undefined,

        /* style: [Object]
         * NOTE: This is not used if useQueryState is set to true.
         *
         * A pair of css property & value(s) that indicate that this
         * button has already been applied. If this action has already
         * been applied, the button will be displayed as 'active' in the toolbar
         * Properties of the object:
         *   prop [String]: name of the css property
         *   value [String]: value(s) of the css property
         *                   multiple values can be separated by a '|'
         *
         * Example:
         * For 'bold', if the text is ever within an element with a 'font-weight'
         * style property set to '700' or 'bold', that indicates the text
         * is already bold.  So the style object for bold would be:
         * { prop: 'font-weight', value: '700|bold' }
         */
        style: undefined,

        /* useQueryState: [boolean]
         * Enables/disables whether this button should use the built-in
         * document.queryCommandState() method to determine whether
         * the action has already been applied.  If the action has already
         * been applied, the button will be displayed as 'active' in the toolbar
         *
         * Example:
         * For 'bold', if this is set to true, the code will call:
         * document.queryCommandState('bold') which will return true if the
         * browser thinks the text is already bold, and false otherwise
         */
        useQueryState: undefined,

        /* contentDefault: [string]
         * Default innerHTML to put inside the button
         */
        contentDefault: undefined,

        /* contentFA: [string]
         * The innerHTML to use for the content of the button
         * if the `buttonLabels` option for MediumEditor is set to 'fontawesome'
         */
        contentFA: undefined,

        /* classList: [Array]
         * An array of classNames (strings) to be added to the button
         */
        classList: undefined,

        /* attrs: [object]
         * A set of key-value pairs to add to the button as custom attributes
         */
        attrs: undefined,

        // The button constructor can optionally accept the name of a built-in button
        // (ie 'bold', 'italic', etc.)
        // When the name of a button is passed, it will initialize itself with the
        // configuration for that button
        constructor: function (options) {
            if (Button.isBuiltInButton(options)) {
                MediumEditor.Extension.call(this, this.defaults[options]);
            } else {
                MediumEditor.Extension.call(this, options);
            }
        },

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.button = this.createButton();
            this.on(this.button, 'click', this.handleClick.bind(this));
        },

        /* getButton: [function ()]
         *
         * If implemented, this function will be called when
         * the toolbar is being created.  The DOM Element returned
         * by this function will be appended to the toolbar along
         * with any other buttons.
         */
        getButton: function () {
            return this.button;
        },

        getAction: function () {
            return (typeof this.action === 'function') ? this.action(this.base.options) : this.action;
        },

        getAria: function () {
            return (typeof this.aria === 'function') ? this.aria(this.base.options) : this.aria;
        },

        getTagNames: function () {
            return (typeof this.tagNames === 'function') ? this.tagNames(this.base.options) : this.tagNames;
        },

        createButton: function () {
            var button = this.document.createElement('button'),
                content = this.contentDefault,
                ariaLabel = this.getAria(),
                buttonLabels = this.getEditorOption('buttonLabels');
            // Add class names
            button.classList.add('medium-editor-action');
            button.classList.add('medium-editor-action-' + this.name);
            if (this.classList) {
                this.classList.forEach(function (className) {
                    button.classList.add(className);
                });
            }

            // Add attributes
            button.setAttribute('data-action', this.getAction());
            if (ariaLabel) {
                button.setAttribute('title', ariaLabel);
                button.setAttribute('aria-label', ariaLabel);
            }
            if (this.attrs) {
                Object.keys(this.attrs).forEach(function (attr) {
                    button.setAttribute(attr, this.attrs[attr]);
                }, this);
            }

            if (buttonLabels === 'fontawesome' && this.contentFA) {
                content = this.contentFA;
            }
            button.innerHTML = content;
            return button;
        },

        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var action = this.getAction();

            if (action) {
                this.execAction(action);
            }
        },

        isActive: function () {
            return this.button.classList.contains(this.getEditorOption('activeButtonClass'));
        },

        setInactive: function () {
            this.button.classList.remove(this.getEditorOption('activeButtonClass'));
            delete this.knownState;
        },

        setActive: function () {
            this.button.classList.add(this.getEditorOption('activeButtonClass'));
            delete this.knownState;
        },

        queryCommandState: function () {
            var queryState = null;
            if (this.useQueryState) {
                queryState = this.base.queryCommandState(this.getAction());
            }
            return queryState;
        },

        isAlreadyApplied: function (node) {
            var isMatch = false,
                tagNames = this.getTagNames(),
                styleVals,
                computedStyle;

            if (this.knownState === false || this.knownState === true) {
                return this.knownState;
            }

            if (tagNames && tagNames.length > 0) {
                isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
            }

            if (!isMatch && this.style) {
                styleVals = this.style.value.split('|');
                computedStyle = this.window.getComputedStyle(node, null).getPropertyValue(this.style.prop);
                styleVals.forEach(function (val) {
                    if (!this.knownState) {
                        isMatch = (computedStyle.indexOf(val) !== -1);
                        // text-decoration is not inherited by default
                        // so if the computed style for text-decoration doesn't match
                        // don't write to knownState so we can fallback to other checks
                        if (isMatch || this.style.prop !== 'text-decoration') {
                            this.knownState = isMatch;
                        }
                    }
                }, this);
            }

            return isMatch;
        }
    });

    Button.isBuiltInButton = function (name) {
        return (typeof name === 'string') && MediumEditor.extensions.button.prototype.defaults.hasOwnProperty(name);
    };

    MediumEditor.extensions.button = Button;
}());

(function () {
    'use strict';

    /* MediumEditor.extensions.button.defaults: [Object]
     * Set of default config options for all of the built-in MediumEditor buttons
     */
    MediumEditor.extensions.button.prototype.defaults = {
        'bold': {
            name: 'bold',
            action: 'bold',
            aria: 'bold',
            tagNames: ['b', 'strong'],
            style: {
                prop: 'font-weight',
                value: '700|bold'
            },
            useQueryState: true,
            contentDefault: '<b>B</b>',
            contentFA: '<i class="fa fa-bold"></i>'
        },
        'italic': {
            name: 'italic',
            action: 'italic',
            aria: 'italic',
            tagNames: ['i', 'em'],
            style: {
                prop: 'font-style',
                value: 'italic'
            },
            useQueryState: true,
            contentDefault: '<b><i>I</i></b>',
            contentFA: '<i class="fa fa-italic"></i>'
        },
        'underline': {
            name: 'underline',
            action: 'underline',
            aria: 'underline',
            tagNames: ['u'],
            style: {
                prop: 'text-decoration',
                value: 'underline'
            },
            useQueryState: true,
            contentDefault: '<b><u>U</u></b>',
            contentFA: '<i class="fa fa-underline"></i>'
        },
        'strikethrough': {
            name: 'strikethrough',
            action: 'strikethrough',
            aria: 'strike through',
            tagNames: ['strike'],
            style: {
                prop: 'text-decoration',
                value: 'line-through'
            },
            useQueryState: true,
            contentDefault: '<s>A</s>',
            contentFA: '<i class="fa fa-strikethrough"></i>'
        },
        'superscript': {
            name: 'superscript',
            action: 'superscript',
            aria: 'superscript',
            tagNames: ['sup'],
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
            // useQueryState: true
            contentDefault: '<b>x<sup>1</sup></b>',
            contentFA: '<i class="fa fa-superscript"></i>'
        },
        'subscript': {
            name: 'subscript',
            action: 'subscript',
            aria: 'subscript',
            tagNames: ['sub'],
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
            // useQueryState: true
            contentDefault: '<b>x<sub>1</sub></b>',
            contentFA: '<i class="fa fa-subscript"></i>'
        },
        'image': {
            name: 'image',
            action: 'image',
            aria: 'image',
            tagNames: ['img'],
            contentDefault: '<b>image</b>',
            contentFA: '<i class="fa fa-picture-o"></i>'
        },
        'html': {
            name: 'html',
            action: 'html',
            aria: 'evaluate html',
            tagNames: ['iframe', 'object'],
            contentDefault: '<b>html</b>',
            contentFA: '<i class="fa fa-code"></i>'
        },
        'orderedlist': {
            name: 'orderedlist',
            action: 'insertorderedlist',
            aria: 'ordered list',
            tagNames: ['ol'],
            useQueryState: true,
            contentDefault: '<b>1.</b>',
            contentFA: '<i class="fa fa-list-ol"></i>'
        },
        'unorderedlist': {
            name: 'unorderedlist',
            action: 'insertunorderedlist',
            aria: 'unordered list',
            tagNames: ['ul'],
            useQueryState: true,
            contentDefault: '<b>&bull;</b>',
            contentFA: '<i class="fa fa-list-ul"></i>'
        },
        'indent': {
            name: 'indent',
            action: 'indent',
            aria: 'indent',
            tagNames: [],
            contentDefault: '<b>&rarr;</b>',
            contentFA: '<i class="fa fa-indent"></i>'
        },
        'outdent': {
            name: 'outdent',
            action: 'outdent',
            aria: 'outdent',
            tagNames: [],
            contentDefault: '<b>&larr;</b>',
            contentFA: '<i class="fa fa-outdent"></i>'
        },
        'justifyCenter': {
            name: 'justifyCenter',
            action: 'justifyCenter',
            aria: 'center justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'center'
            },
            contentDefault: '<b>C</b>',
            contentFA: '<i class="fa fa-align-center"></i>'
        },
        'justifyFull': {
            name: 'justifyFull',
            action: 'justifyFull',
            aria: 'full justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'justify'
            },
            contentDefault: '<b>J</b>',
            contentFA: '<i class="fa fa-align-justify"></i>'
        },
        'justifyLeft': {
            name: 'justifyLeft',
            action: 'justifyLeft',
            aria: 'left justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'left'
            },
            contentDefault: '<b>L</b>',
            contentFA: '<i class="fa fa-align-left"></i>'
        },
        'justifyRight': {
            name: 'justifyRight',
            action: 'justifyRight',
            aria: 'right justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'right'
            },
            contentDefault: '<b>R</b>',
            contentFA: '<i class="fa fa-align-right"></i>'
        },
        // Known inline elements that are not removed, or not removed consistantly across browsers:
        // <span>, <label>, <br>
        'removeFormat': {
            name: 'removeFormat',
            aria: 'remove formatting',
            action: 'removeFormat',
            contentDefault: '<b>X</b>',
            contentFA: '<i class="fa fa-eraser"></i>'
        },

        /***** Buttons for appending block elements (append-<element> action) *****/

        'quote': {
            name: 'quote',
            action: 'append-blockquote',
            aria: 'blockquote',
            tagNames: ['blockquote'],
            contentDefault: '<b>&ldquo;</b>',
            contentFA: '<i class="fa fa-quote-right"></i>'
        },
        'pre': {
            name: 'pre',
            action: 'append-pre',
            aria: 'preformatted text',
            tagNames: ['pre'],
            contentDefault: '<b>0101</b>',
            contentFA: '<i class="fa fa-code fa-lg"></i>'
        },
        'h1': {
            name: 'h1',
            action: 'append-h1',
            aria: 'header type one',
            tagNames: ['h1'],
            contentDefault: '<b>H1</b>',
            contentFA: '<i class="fa fa-header"><sup>1</sup>'
        },
        'h2': {
            name: 'h2',
            action: 'append-h2',
            aria: 'header type two',
            tagNames: ['h2'],
            contentDefault: '<b>H2</b>',
            contentFA: '<i class="fa fa-header"><sup>2</sup>'
        },
        'h3': {
            name: 'h3',
            action: 'append-h3',
            aria: 'header type three',
            tagNames: ['h3'],
            contentDefault: '<b>H3</b>',
            contentFA: '<i class="fa fa-header"><sup>3</sup>'
        },
        'h4': {
            name: 'h4',
            action: 'append-h4',
            aria: 'header type four',
            tagNames: ['h4'],
            contentDefault: '<b>H4</b>',
            contentFA: '<i class="fa fa-header"><sup>4</sup>'
        },
        'h5': {
            name: 'h5',
            action: 'append-h5',
            aria: 'header type five',
            tagNames: ['h5'],
            contentDefault: '<b>H5</b>',
            contentFA: '<i class="fa fa-header"><sup>5</sup>'
        },
        'h6': {
            name: 'h6',
            action: 'append-h6',
            aria: 'header type six',
            tagNames: ['h6'],
            contentDefault: '<b>H6</b>',
            contentFA: '<i class="fa fa-header"><sup>6</sup>'
        }
    };

})();

(function () {
    'use strict';

    /* Base functionality for an extension which will display
     * a 'form' inside the toolbar
     */
    var FormExtension = MediumEditor.extensions.button.extend({

        init: function () {
            MediumEditor.extensions.button.prototype.init.apply(this, arguments);
        },

        // default labels for the form buttons
        formSaveLabel: '&#10003;',
        formCloseLabel: '&times;',

        /* activeClass: [string]
         * set class which added to shown form
         */
        activeClass: 'medium-editor-toolbar-form-active',

        /* hasForm: [boolean]
         *
         * Setting this to true will cause getForm() to be called
         * when the toolbar is created, so the form can be appended
         * inside the toolbar container
         */
        hasForm: true,

        /* getForm: [function ()]
         *
         * When hasForm is true, this function must be implemented
         * and return a DOM Element which will be appended to
         * the toolbar container. The form should start hidden, and
         * the extension can choose when to hide/show it
         */
        getForm: function () {},

        /* isDisplayed: [function ()]
         *
         * This function should return true/false reflecting
         * whether the form is currently displayed
         */
        isDisplayed: function () {
            if (this.hasForm) {
                return this.getForm().classList.contains(this.activeClass);
            }
            return false;
        },

        /* hideForm: [function ()]
         *
         * This function should show the form element inside
         * the toolbar container
         */
        showForm: function () {
            if (this.hasForm) {
                this.getForm().classList.add(this.activeClass);
            }
        },

        /* hideForm: [function ()]
         *
         * This function should hide the form element inside
         * the toolbar container
         */
        hideForm: function () {
            if (this.hasForm) {
                this.getForm().classList.remove(this.activeClass);
            }
        },

        /************************ Helpers ************************
         * The following are helpers that are either set by MediumEditor
         * during initialization, or are helper methods which either
         * route calls to the MediumEditor instance or provide common
         * functionality for all form extensions
         *********************************************************/

        /* showToolbarDefaultActions: [function ()]
         *
         * Helper method which will turn back the toolbar after canceling
         * the customized form
         */
        showToolbarDefaultActions: function () {
            var toolbar = this.base.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.showToolbarDefaultActions();
            }
        },

        /* hideToolbarDefaultActions: [function ()]
         *
         * Helper function which will hide the default contents of the
         * toolbar, but leave the toolbar container in the same state
         * to allow a form to display its custom contents inside the toolbar
         */
        hideToolbarDefaultActions: function () {
            var toolbar = this.base.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.hideToolbarDefaultActions();
            }
        },

        /* setToolbarPosition: [function ()]
         *
         * Helper function which will update the size and position
         * of the toolbar based on the toolbar content and the current
         * position of the user's selection
         */
        setToolbarPosition: function () {
            var toolbar = this.base.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.setToolbarPosition();
            }
        }
    });

    MediumEditor.extensions.form = FormExtension;
})();
(function () {
    'use strict';

    var AnchorForm = MediumEditor.extensions.form.extend({
        /* Anchor Form Options */

        /* customClassOption: [string]  (previously options.anchorButton + options.anchorButtonClass)
         * Custom class name the user can optionally have added to their created links (ie 'button').
         * If passed as a non-empty string, a checkbox will be displayed allowing the user to choose
         * whether to have the class added to the created link or not.
         */
        customClassOption: null,

        /* customClassOptionText: [string]
         * text to be shown in the checkbox when the __customClassOption__ is being used.
         */
        customClassOptionText: 'Button',

        /* linkValidation: [boolean]  (previously options.checkLinkFormat)
         * enables/disables check for common URL protocols on anchor links.
         */
        linkValidation: false,

        /* placeholderText: [string]  (previously options.anchorInputPlaceholder)
         * text to be shown as placeholder of the anchor input.
         */
        placeholderText: 'Paste or type a link',

        /* targetCheckbox: [boolean]  (previously options.anchorTarget)
         * enables/disables displaying a "Open in new window" checkbox, which when checked
         * changes the `target` attribute of the created link.
         */
        targetCheckbox: false,

        /* targetCheckboxText: [string]  (previously options.anchorInputCheckboxLabel)
         * text to be shown in the checkbox enabled via the __targetCheckbox__ option.
         */
        targetCheckboxText: 'Open in new window',

        // Options for the Button base class
        name: 'anchor',
        action: 'createLink',
        aria: 'link',
        tagNames: ['a'],
        contentDefault: '<b>#</b>',
        contentFA: '<i class="fa fa-link"></i>',

        init: function () {
            MediumEditor.extensions.form.prototype.init.apply(this, arguments);

            this.subscribe('editableKeydown', this.handleKeydown.bind(this));
        },

        // Called when the button the toolbar is clicked
        // Overrides ButtonExtension.handleClick
        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var range = MediumEditor.selection.getSelectionRange(this.document);

            if (range.startContainer.nodeName.toLowerCase() === 'a' ||
                range.endContainer.nodeName.toLowerCase() === 'a' ||
                MediumEditor.util.getClosestTag(MediumEditor.selection.getSelectedParentElement(range), 'a')) {
                return this.execAction('unlink');
            }

            if (!this.isDisplayed()) {
                this.showForm();
            }

            return false;
        },

        // Called when user hits the defined shortcut (CTRL / COMMAND + K)
        handleKeydown: function (event) {
            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.K) && MediumEditor.util.isMetaCtrlKey(event) && !event.shiftKey) {
                this.handleClick(event);
            }
        },

        // Called by medium-editor to append form to the toolbar
        getForm: function () {
            if (!this.form) {
                this.form = this.createForm();
            }
            return this.form;
        },

        getTemplate: function () {
            var template = [
                '<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'
            ];

            template.push(
                '<a href="#" class="medium-editor-toolbar-save">',
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : this.formSaveLabel,
                '</a>'
            );

            template.push('<a href="#" class="medium-editor-toolbar-close">',
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : this.formCloseLabel,
                '</a>');

            // both of these options are slightly moot with the ability to
            // override the various form buildup/serialize functions.

            if (this.targetCheckbox) {
                // fixme: ideally, this targetCheckboxText would be a formLabel too,
                // figure out how to deprecate? also consider `fa-` icon default implcations.
                template.push(
                    '<div class="medium-editor-toolbar-form-row">',
                    '<input type="checkbox" class="medium-editor-toolbar-anchor-target">',
                    '<label>',
                    this.targetCheckboxText,
                    '</label>',
                    '</div>'
                );
            }

            if (this.customClassOption) {
                // fixme: expose this `Button` text as a formLabel property, too
                // and provide similar access to a `fa-` icon default.
                template.push(
                    '<div class="medium-editor-toolbar-form-row">',
                    '<input type="checkbox" class="medium-editor-toolbar-anchor-button">',
                    '<label>',
                    this.customClassOptionText,
                    '</label>',
                    '</div>'
                );
            }

            return template.join('');

        },

        // Used by medium-editor when the default toolbar is to be displayed
        isDisplayed: function () {
            return MediumEditor.extensions.form.prototype.isDisplayed.apply(this);
        },

        hideForm: function () {
            MediumEditor.extensions.form.prototype.hideForm.apply(this);
            this.getInput().value = '';
        },

        showForm: function (opts) {
            var input = this.getInput(),
                targetCheckbox = this.getAnchorTargetCheckbox(),
                buttonCheckbox = this.getAnchorButtonCheckbox();

            opts = opts || { value: '' };
            // TODO: This is for backwards compatability
            // We don't need to support the 'string' argument in 6.0.0
            if (typeof opts === 'string') {
                opts = {
                    value: opts
                };
            }

            this.base.saveSelection();
            this.hideToolbarDefaultActions();
            MediumEditor.extensions.form.prototype.showForm.apply(this);
            this.setToolbarPosition();

            input.value = opts.value;
            input.focus();

            // If we have a target checkbox, we want it to be checked/unchecked
            // based on whether the existing link has target=_blank
            if (targetCheckbox) {
                targetCheckbox.checked = opts.target === '_blank';
            }

            // If we have a custom class checkbox, we want it to be checked/unchecked
            // based on whether an existing link already has the class
            if (buttonCheckbox) {
                var classList = opts.buttonClass ? opts.buttonClass.split(' ') : [];
                buttonCheckbox.checked = (classList.indexOf(this.customClassOption) !== -1);
            }
        },

        // Called by core when tearing down medium-editor (destroy)
        destroy: function () {
            if (!this.form) {
                return false;
            }

            if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
            }

            delete this.form;
        },

        // core methods

        getFormOpts: function () {
            // no notion of private functions? wanted `_getFormOpts`
            var targetCheckbox = this.getAnchorTargetCheckbox(),
                buttonCheckbox = this.getAnchorButtonCheckbox(),
                opts = {
                    value: this.getInput().value.trim()
                };

            if (this.linkValidation) {
                opts.value = this.checkLinkFormat(opts.value);
            }

            opts.target = '_self';
            if (targetCheckbox && targetCheckbox.checked) {
                opts.target = '_blank';
            }

            if (buttonCheckbox && buttonCheckbox.checked) {
                opts.buttonClass = this.customClassOption;
            }

            return opts;
        },

        doFormSave: function () {
            var opts = this.getFormOpts();
            this.completeFormSave(opts);
        },

        completeFormSave: function (opts) {
            this.base.restoreSelection();
            this.execAction(this.action, opts);
            this.base.checkSelection();
        },

        ensureEncodedUri: function (str) {
            return str === decodeURI(str) ? encodeURI(str) : str;
        },

        ensureEncodedUriComponent: function (str) {
            return str === decodeURIComponent(str) ? encodeURIComponent(str) : str;
        },

        ensureEncodedParam: function (param) {
            var split = param.split('='),
                key = split[0],
                val = split[1];

            return key + (val === undefined ? '' : '=' + this.ensureEncodedUriComponent(val));
        },

        ensureEncodedQuery: function (queryString) {
            return queryString.split('&').map(this.ensureEncodedParam.bind(this)).join('&');
        },

        checkLinkFormat: function (value) {
            // Matches any alphabetical characters followed by ://
            // Matches protocol relative "//"
            // Matches common external protocols "mailto:" "tel:" "maps:"
            // Matches relative hash link, begins with "#"
            var urlSchemeRegex = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i,
                hasScheme = urlSchemeRegex.test(value),
                scheme = '',
                // telRegex is a regex for checking if the string is a telephone number
                telRegex = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/,
                urlParts = value.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/),
                path = urlParts[1],
                query = urlParts[2],
                fragment = urlParts[3];

            if (telRegex.test(value)) {
                return 'tel:' + value;
            }

            if (!hasScheme) {
                var host = path.split('/')[0];
                // if the host part of the path looks like a hostname
                if (host.match(/.+(\.|:).+/) || host === 'localhost') {
                    scheme = 'http://';
                }
            }

            return scheme +
                // Ensure path is encoded
                this.ensureEncodedUri(path) +
                // Ensure query is encoded
                (query === undefined ? '' : '?' + this.ensureEncodedQuery(query)) +
                // Include fragment unencoded as encodeUriComponent is too
                // heavy handed for the many characters allowed in a fragment
                (fragment === undefined ? '' : '#' + fragment);
        },

        doFormCancel: function () {
            this.base.restoreSelection();
            this.base.checkSelection();
        },

        // form creation and event handling
        attachFormEvents: function (form) {
            var close = form.querySelector('.medium-editor-toolbar-close'),
                save = form.querySelector('.medium-editor-toolbar-save'),
                input = form.querySelector('.medium-editor-toolbar-input');

            // Handle clicks on the form itself
            this.on(form, 'click', this.handleFormClick.bind(this));

            // Handle typing in the textbox
            this.on(input, 'keyup', this.handleTextboxKeyup.bind(this));

            // Handle close button clicks
            this.on(close, 'click', this.handleCloseClick.bind(this));

            // Handle save button clicks (capture)
            this.on(save, 'click', this.handleSaveClick.bind(this), true);

        },

        createForm: function () {
            var doc = this.document,
                form = doc.createElement('div');

            // Anchor Form (div)
            form.className = 'medium-editor-toolbar-form';
            form.id = 'medium-editor-toolbar-form-anchor-' + this.getEditorId();
            form.innerHTML = this.getTemplate();
            this.attachFormEvents(form);

            return form;
        },

        getInput: function () {
            return this.getForm().querySelector('input.medium-editor-toolbar-input');
        },

        getAnchorTargetCheckbox: function () {
            return this.getForm().querySelector('.medium-editor-toolbar-anchor-target');
        },

        getAnchorButtonCheckbox: function () {
            return this.getForm().querySelector('.medium-editor-toolbar-anchor-button');
        },

        handleTextboxKeyup: function (event) {
            // For ENTER -> create the anchor
            if (event.keyCode === MediumEditor.util.keyCode.ENTER) {
                event.preventDefault();
                this.doFormSave();
                return;
            }

            // For ESCAPE -> close the form
            if (event.keyCode === MediumEditor.util.keyCode.ESCAPE) {
                event.preventDefault();
                this.doFormCancel();
            }
        },

        handleFormClick: function (event) {
            // make sure not to hide form when clicking inside the form
            event.stopPropagation();
        },

        handleSaveClick: function (event) {
            // Clicking Save -> create the anchor
            event.preventDefault();
            this.doFormSave();
        },

        handleCloseClick: function (event) {
            // Click Close -> close the form
            event.preventDefault();
            this.doFormCancel();
        }
    });

    MediumEditor.extensions.anchor = AnchorForm;
}());

(function () {
    'use strict';

    var AnchorPreview = MediumEditor.Extension.extend({
        name: 'anchor-preview',

        // Anchor Preview Options

        /* hideDelay: [number]  (previously options.anchorPreviewHideDelay)
         * time in milliseconds to show the anchor tag preview after the mouse has left the anchor tag.
         */
        hideDelay: 500,

        /* previewValueSelector: [string]
         * the default selector to locate where to put the activeAnchor value in the preview
         */
        previewValueSelector: 'a',

        /* showWhenToolbarIsVisible: [boolean]
         * determines whether the anchor tag preview shows up when the toolbar is visible
         */
        showWhenToolbarIsVisible: false,

        /* showOnEmptyLinks: [boolean]
        * determines whether the anchor tag preview shows up on links with href="" or href="#something"
        */
        showOnEmptyLinks: true,

        init: function () {
            this.anchorPreview = this.createPreview();

            this.getEditorOption('elementsContainer').appendChild(this.anchorPreview);

            this.attachToEditables();
        },

        getInteractionElements: function () {
            return this.getPreviewElement();
        },

        // TODO: Remove this function in 6.0.0
        getPreviewElement: function () {
            return this.anchorPreview;
        },

        createPreview: function () {
            var el = this.document.createElement('div');

            el.id = 'medium-editor-anchor-preview-' + this.getEditorId();
            el.className = 'medium-editor-anchor-preview';
            el.innerHTML = this.getTemplate();

            this.on(el, 'click', this.handleClick.bind(this));

            return el;
        },

        getTemplate: function () {
            return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">' +
                '    <a class="medium-editor-toolbar-anchor-preview-inner"></a>' +
                '</div>';
        },

        destroy: function () {
            if (this.anchorPreview) {
                if (this.anchorPreview.parentNode) {
                    this.anchorPreview.parentNode.removeChild(this.anchorPreview);
                }
                delete this.anchorPreview;
            }
        },

        hidePreview: function () {
            if (this.anchorPreview) {
                this.anchorPreview.classList.remove('medium-editor-anchor-preview-active');
            }
            this.activeAnchor = null;
        },

        showPreview: function (anchorEl) {
            if (this.anchorPreview.classList.contains('medium-editor-anchor-preview-active') ||
                    anchorEl.getAttribute('data-disable-preview')) {
                return true;
            }

            if (this.previewValueSelector) {
                this.anchorPreview.querySelector(this.previewValueSelector).textContent = anchorEl.attributes.href.value;
                this.anchorPreview.querySelector(this.previewValueSelector).href = anchorEl.attributes.href.value;
            }

            this.anchorPreview.classList.add('medium-toolbar-arrow-over');
            this.anchorPreview.classList.remove('medium-toolbar-arrow-under');

            if (!this.anchorPreview.classList.contains('medium-editor-anchor-preview-active')) {
                this.anchorPreview.classList.add('medium-editor-anchor-preview-active');
            }

            this.activeAnchor = anchorEl;

            this.positionPreview();
            this.attachPreviewHandlers();

            return this;
        },

        positionPreview: function (activeAnchor) {
            activeAnchor = activeAnchor || this.activeAnchor;
            var containerWidth = this.window.innerWidth,
                buttonHeight = this.anchorPreview.offsetHeight,
                boundary = activeAnchor.getBoundingClientRect(),
                diffLeft = this.diffLeft,
                diffTop = this.diffTop,
                elementsContainer = this.getEditorOption('elementsContainer'),
                elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
                relativeBoundary = {},
                halfOffsetWidth, defaultLeft, middleBoundary, elementsContainerBoundary, top;

            halfOffsetWidth = this.anchorPreview.offsetWidth / 2;
            var toolbarExtension = this.base.getExtensionByName('toolbar');
            if (toolbarExtension) {
                diffLeft = toolbarExtension.diffLeft;
                diffTop = toolbarExtension.diffTop;
            }
            defaultLeft = diffLeft - halfOffsetWidth;

            // If container element is absolute / fixed, recalculate boundaries to be relative to the container
            if (elementsContainerAbsolute) {
                elementsContainerBoundary = elementsContainer.getBoundingClientRect();
                ['top', 'left'].forEach(function (key) {
                    relativeBoundary[key] = boundary[key] - elementsContainerBoundary[key];
                });

                relativeBoundary.width = boundary.width;
                relativeBoundary.height = boundary.height;
                boundary = relativeBoundary;

                containerWidth = elementsContainerBoundary.width;

                // Adjust top position according to container scroll position
                top = elementsContainer.scrollTop;
            } else {
                // Adjust top position according to window scroll position
                top = this.window.pageYOffset;
            }

            middleBoundary = boundary.left + boundary.width / 2;
            top += buttonHeight + boundary.top + boundary.height - diffTop - this.anchorPreview.offsetHeight;

            this.anchorPreview.style.top = Math.round(top) + 'px';
            this.anchorPreview.style.right = 'initial';
            if (middleBoundary < halfOffsetWidth) {
                this.anchorPreview.style.left = defaultLeft + halfOffsetWidth + 'px';
                this.anchorPreview.style.right = 'initial';
            } else if ((containerWidth - middleBoundary) < halfOffsetWidth) {
                this.anchorPreview.style.left = 'auto';
                this.anchorPreview.style.right = 0;
            } else {
                this.anchorPreview.style.left = defaultLeft + middleBoundary + 'px';
                this.anchorPreview.style.right = 'initial';
            }
        },

        attachToEditables: function () {
            this.subscribe('editableMouseover', this.handleEditableMouseover.bind(this));
            this.subscribe('positionedToolbar', this.handlePositionedToolbar.bind(this));
        },

        handlePositionedToolbar: function () {
            // If the toolbar is visible and positioned, we don't need to hide the preview
            // when showWhenToolbarIsVisible is true
            if (!this.showWhenToolbarIsVisible) {
                this.hidePreview();
            }
        },

        handleClick: function (event) {
            var anchorExtension = this.base.getExtensionByName('anchor'),
                activeAnchor = this.activeAnchor;

            if (anchorExtension && activeAnchor) {
                event.preventDefault();

                this.base.selectElement(this.activeAnchor);

                // Using setTimeout + delay because:
                // We may actually be displaying the anchor form, which should be controlled by delay
                this.base.delay(function () {
                    if (activeAnchor) {
                        var opts = {
                            value: activeAnchor.attributes.href.value,
                            target: activeAnchor.getAttribute('target'),
                            buttonClass: activeAnchor.getAttribute('class')
                        };
                        anchorExtension.showForm(opts);
                        activeAnchor = null;
                    }
                }.bind(this));
            }

            this.hidePreview();
        },

        handleAnchorMouseout: function () {
            this.anchorToPreview = null;
            this.off(this.activeAnchor, 'mouseout', this.instanceHandleAnchorMouseout);
            this.instanceHandleAnchorMouseout = null;
        },

        handleEditableMouseover: function (event) {
            var target = MediumEditor.util.getClosestTag(event.target, 'a');

            if (false === target) {
                return;
            }

            // Detect empty href attributes
            // The browser will make href="" or href="#top"
            // into absolute urls when accessed as event.target.href, so check the html
            if (!this.showOnEmptyLinks &&
                (!/href=["']\S+["']/.test(target.outerHTML) || /href=["']#\S+["']/.test(target.outerHTML))) {
                return true;
            }

            // only show when toolbar is not present
            var toolbar = this.base.getExtensionByName('toolbar');
            if (!this.showWhenToolbarIsVisible && toolbar && toolbar.isDisplayed && toolbar.isDisplayed()) {
                return true;
            }

            // detach handler for other anchor in case we hovered multiple anchors quickly
            if (this.activeAnchor && this.activeAnchor !== target) {
                this.detachPreviewHandlers();
            }

            this.anchorToPreview = target;

            this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this);
            this.on(this.anchorToPreview, 'mouseout', this.instanceHandleAnchorMouseout);
            // Using setTimeout + delay because:
            // - We're going to show the anchor preview according to the configured delay
            //   if the mouse has not left the anchor tag in that time
            this.base.delay(function () {
                if (this.anchorToPreview) {
                    this.showPreview(this.anchorToPreview);
                }
            }.bind(this));
        },

        handlePreviewMouseover: function () {
            this.lastOver = (new Date()).getTime();
            this.hovering = true;
        },

        handlePreviewMouseout: function (event) {
            if (!event.relatedTarget || !/anchor-preview/.test(event.relatedTarget.className)) {
                this.hovering = false;
            }
        },

        updatePreview: function () {
            if (this.hovering) {
                return true;
            }
            var durr = (new Date()).getTime() - this.lastOver;
            if (durr > this.hideDelay) {
                // hide the preview 1/2 second after mouse leaves the link
                this.detachPreviewHandlers();
            }
        },

        detachPreviewHandlers: function () {
            // cleanup
            clearInterval(this.intervalTimer);
            if (this.instanceHandlePreviewMouseover) {
                this.off(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);
                this.off(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);
                if (this.activeAnchor) {
                    this.off(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);
                    this.off(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);
                }
            }

            this.hidePreview();

            this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null;
        },

        // TODO: break up method and extract out handlers
        attachPreviewHandlers: function () {
            this.lastOver = (new Date()).getTime();
            this.hovering = true;

            this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this);
            this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this);

            this.intervalTimer = setInterval(this.updatePreview.bind(this), 200);

            this.on(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);
            this.on(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);
            this.on(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);
            this.on(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);
        }
    });

    MediumEditor.extensions.anchorPreview = AnchorPreview;
}());

(function () {
    'use strict';

    var WHITESPACE_CHARS,
        KNOWN_TLDS_FRAGMENT,
        LINK_REGEXP_TEXT,
        KNOWN_TLDS_REGEXP,
        LINK_REGEXP;

    WHITESPACE_CHARS = [' ', '\t', '\n', '\r', '\u00A0', '\u2000', '\u2001', '\u2002', '\u2003',
                                    '\u2028', '\u2029'];
    KNOWN_TLDS_FRAGMENT = 'com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|' +
        'xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|' +
        'bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|' +
        'fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|' +
        'is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|' +
        'mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|' +
        'pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|' +
        'tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw';

    LINK_REGEXP_TEXT =
        '(' +
        // Version of Gruber URL Regexp optimized for JS: http://stackoverflow.com/a/17733640
        '((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](' + KNOWN_TLDS_FRAGMENT + ')\\\/)\\S+(?:[^\\s`!\\[\\]{};:\'\".,?\u00AB\u00BB\u201C\u201D\u2018\u2019]))' +
        // Addition to above Regexp to support bare domains/one level subdomains with common non-i18n TLDs and without www prefix:
        ')|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(' + KNOWN_TLDS_FRAGMENT + '))';

    KNOWN_TLDS_REGEXP = new RegExp('^(' + KNOWN_TLDS_FRAGMENT + ')$', 'i');

    LINK_REGEXP = new RegExp(LINK_REGEXP_TEXT, 'gi');

    function nodeIsNotInsideAnchorTag(node) {
        return !MediumEditor.util.getClosestTag(node, 'a');
    }

    var AutoLink = MediumEditor.Extension.extend({
        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.disableEventHandling = false;
            this.subscribe('editableKeypress', this.onKeypress.bind(this));
            this.subscribe('editableBlur', this.onBlur.bind(this));
            // MS IE has it's own auto-URL detect feature but ours is better in some ways. Be consistent.
            this.document.execCommand('AutoUrlDetect', false, false);
        },

        isLastInstance: function () {
            var activeInstances = 0;
            for (var i = 0; i < this.window._mediumEditors.length; i++) {
                var editor = this.window._mediumEditors[i];
                if (editor !== null && editor.getExtensionByName('autoLink') !== undefined) {
                    activeInstances++;
                }
            }
            return activeInstances === 1;
        },

        destroy: function () {
            // Turn AutoUrlDetect back on
            if (this.document.queryCommandSupported('AutoUrlDetect') && this.isLastInstance()) {
                this.document.execCommand('AutoUrlDetect', false, true);
            }
        },

        onBlur: function (blurEvent, editable) {
            this.performLinking(editable);
        },

        onKeypress: function (keyPressEvent) {
            if (this.disableEventHandling) {
                return;
            }

            if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.SPACE, MediumEditor.util.keyCode.ENTER])) {
                clearTimeout(this.performLinkingTimeout);
                // Saving/restoring the selection in the middle of a keypress doesn't work well...
                this.performLinkingTimeout = setTimeout(function () {
                    try {
                        var sel = this.base.exportSelection();
                        if (this.performLinking(keyPressEvent.target)) {
                            // pass true for favorLaterSelectionAnchor - this is needed for links at the end of a
                            // paragraph in MS IE, or MS IE causes the link to be deleted right after adding it.
                            this.base.importSelection(sel, true);
                        }
                    } catch (e) {
                        if (window.console) {
                            window.console.error('Failed to perform linking', e);
                        }
                        this.disableEventHandling = true;
                    }
                }.bind(this), 0);
            }
        },

        performLinking: function (contenteditable) {
            /*
            Perform linking on blockElement basis, blockElements are HTML elements with text content and without
            child element.

            Example:
            - HTML content
            <blockquote>
              <p>link.</p>
              <p>my</p>
            </blockquote>

            - blockElements
            [<p>link.</p>, <p>my</p>]

            otherwise the detection can wrongly find the end of one paragraph and the beginning of another paragraph
            to constitute a link, such as a paragraph ending "link." and the next paragraph beginning with "my" is
            interpreted into "link.my" and the code tries to create a link across blockElements - which doesn't work
            and is terrible.
            (Medium deletes the spaces/returns between P tags so the textContent ends up without paragraph spacing)
            */
            var blockElements = MediumEditor.util.splitByBlockElements(contenteditable),
                documentModified = false;
            if (blockElements.length === 0) {
                blockElements = [contenteditable];
            }
            for (var i = 0; i < blockElements.length; i++) {
                documentModified = this.removeObsoleteAutoLinkSpans(blockElements[i]) || documentModified;
                documentModified = this.performLinkingWithinElement(blockElements[i]) || documentModified;
            }
            this.base.events.updateInput(contenteditable, { target: contenteditable, currentTarget: contenteditable });
            return documentModified;
        },

        removeObsoleteAutoLinkSpans: function (element) {
            if (!element || element.nodeType === 3) {
                return false;
            }

            var spans = element.querySelectorAll('span[data-auto-link="true"]'),
                documentModified = false;

            for (var i = 0; i < spans.length; i++) {
                var textContent = spans[i].textContent;
                if (textContent.indexOf('://') === -1) {
                    textContent = MediumEditor.util.ensureUrlHasProtocol(textContent);
                }
                if (spans[i].getAttribute('data-href') !== textContent && nodeIsNotInsideAnchorTag(spans[i])) {
                    documentModified = true;
                    var trimmedTextContent = textContent.replace(/\s+$/, '');
                    if (spans[i].getAttribute('data-href') === trimmedTextContent) {
                        var charactersTrimmed = textContent.length - trimmedTextContent.length,
                            subtree = MediumEditor.util.splitOffDOMTree(spans[i], this.splitTextBeforeEnd(spans[i], charactersTrimmed));
                        spans[i].parentNode.insertBefore(subtree, spans[i].nextSibling);
                    } else {
                        // Some editing has happened to the span, so just remove it entirely. The user can put it back
                        // around just the href content if they need to prevent it from linking
                        MediumEditor.util.unwrap(spans[i], this.document);
                    }
                }
            }
            return documentModified;
        },

        splitTextBeforeEnd: function (element, characterCount) {
            var treeWalker = this.document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false),
                lastChildNotExhausted = true;

            // Start the tree walker at the last descendant of the span
            while (lastChildNotExhausted) {
                lastChildNotExhausted = treeWalker.lastChild() !== null;
            }

            var currentNode,
                currentNodeValue,
                previousNode;
            while (characterCount > 0 && previousNode !== null) {
                currentNode = treeWalker.currentNode;
                currentNodeValue = currentNode.nodeValue;
                if (currentNodeValue.length > characterCount) {
                    previousNode = currentNode.splitText(currentNodeValue.length - characterCount);
                    characterCount = 0;
                } else {
                    previousNode = treeWalker.previousNode();
                    characterCount -= currentNodeValue.length;
                }
            }
            return previousNode;
        },

        performLinkingWithinElement: function (element) {
            var matches = this.findLinkableText(element),
                linkCreated = false;

            for (var matchIndex = 0; matchIndex < matches.length; matchIndex++) {
                var matchingTextNodes = MediumEditor.util.findOrCreateMatchingTextNodes(this.document, element,
                        matches[matchIndex]);
                if (this.shouldNotLink(matchingTextNodes)) {
                    continue;
                }
                this.createAutoLink(matchingTextNodes, matches[matchIndex].href);
            }
            return linkCreated;
        },

        shouldNotLink: function (textNodes) {
            var shouldNotLink = false;
            for (var i = 0; i < textNodes.length && shouldNotLink === false; i++) {
                // Do not link if the text node is either inside an anchor or inside span[data-auto-link]
                shouldNotLink = !!MediumEditor.util.traverseUp(textNodes[i], function (node) {
                    return node.nodeName.toLowerCase() === 'a' ||
                        (node.getAttribute && node.getAttribute('data-auto-link') === 'true');
                });
            }
            return shouldNotLink;
        },

        findLinkableText: function (contenteditable) {
            var textContent = contenteditable.textContent,
                match = null,
                matches = [];

            while ((match = LINK_REGEXP.exec(textContent)) !== null) {
                var matchOk = true,
                    matchEnd = match.index + match[0].length;
                // If the regexp detected something as a link that has text immediately preceding/following it, bail out.
                matchOk = (match.index === 0 || WHITESPACE_CHARS.indexOf(textContent[match.index - 1]) !== -1) &&
                    (matchEnd === textContent.length || WHITESPACE_CHARS.indexOf(textContent[matchEnd]) !== -1);
                // If the regexp detected a bare domain that doesn't use one of our expected TLDs, bail out.
                matchOk = matchOk && (match[0].indexOf('/') !== -1 ||
                    KNOWN_TLDS_REGEXP.test(match[0].split('.').pop().split('?').shift()));

                if (matchOk) {
                    matches.push({
                        href: match[0],
                        start: match.index,
                        end: matchEnd
                    });
                }
            }
            return matches;
        },

        createAutoLink: function (textNodes, href) {
            href = MediumEditor.util.ensureUrlHasProtocol(href);
            var anchor = MediumEditor.util.createLink(this.document, textNodes, href, this.getEditorOption('targetBlank') ? '_blank' : null),
                span = this.document.createElement('span');
            span.setAttribute('data-auto-link', 'true');
            span.setAttribute('data-href', href);
            anchor.insertBefore(span, anchor.firstChild);
            while (anchor.childNodes.length > 1) {
                span.appendChild(anchor.childNodes[1]);
            }
        }

    });

    MediumEditor.extensions.autoLink = AutoLink;
}());

(function () {
    'use strict';

    var CLASS_DRAG_OVER = 'medium-editor-dragover';

    function clearClassNames(element) {
        var editable = MediumEditor.util.getContainerEditorElement(element),
            existing = Array.prototype.slice.call(editable.parentElement.querySelectorAll('.' + CLASS_DRAG_OVER));

        existing.forEach(function (el) {
            el.classList.remove(CLASS_DRAG_OVER);
        });
    }

    var FileDragging = MediumEditor.Extension.extend({
        name: 'fileDragging',

        allowedTypes: ['image'],

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.subscribe('editableDrag', this.handleDrag.bind(this));
            this.subscribe('editableDrop', this.handleDrop.bind(this));
        },

        handleDrag: function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

            var target = event.target.classList ? event.target : event.target.parentElement;

            // Ensure the class gets removed from anything that had it before
            clearClassNames(target);

            if (event.type === 'dragover') {
                target.classList.add(CLASS_DRAG_OVER);
            }
        },

        handleDrop: function (event) {
            // Prevent file from opening in the current window
            event.preventDefault();
            event.stopPropagation();
            // Select the dropping target, and set the selection to the end of the target
            // https://github.com/yabwe/medium-editor/issues/980
            this.base.selectElement(event.target);
            var selection = this.base.exportSelection();
            selection.start = selection.end;
            this.base.importSelection(selection);
            // IE9 does not support the File API, so prevent file from opening in the window
            // but also don't try to actually get the file
            if (event.dataTransfer.files) {
                Array.prototype.slice.call(event.dataTransfer.files).forEach(function (file) {
                    if (this.isAllowedFile(file)) {
                        if (file.type.match('image')) {
                            this.insertImageFile(file);
                        }
                    }
                }, this);
            }

            // Make sure we remove our class from everything
            clearClassNames(event.target);
        },

        isAllowedFile: function (file) {
            return this.allowedTypes.some(function (fileType) {
                return !!file.type.match(fileType);
            });
        },

        insertImageFile: function (file) {
            if (typeof FileReader !== 'function') {
                return;
            }
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            // attach the onload event handler, makes it easier to listen in with jasmine
            fileReader.addEventListener('load', function (e) {
                var addImageElement = this.document.createElement('img');
                addImageElement.src = e.target.result;
                MediumEditor.util.insertHTMLCommand(this.document, addImageElement.outerHTML);
            }.bind(this));
        }
    });

    MediumEditor.extensions.fileDragging = FileDragging;
}());

(function () {
    'use strict';

    var KeyboardCommands = MediumEditor.Extension.extend({
        name: 'keyboard-commands',

        /* KeyboardCommands Options */

        /* commands: [Array]
         * Array of objects describing each command and the combination of keys that will trigger it
         * Required for each object:
         *   command [String] (argument passed to editor.execAction())
         *   key [String] (keyboard character that triggers this command)
         *   meta [boolean] (whether the ctrl/meta key has to be active or inactive)
         *   shift [boolean] (whether the shift key has to be active or inactive)
         *   alt [boolean] (whether the alt key has to be active or inactive)
         */
        commands: [
            {
                command: 'bold',
                key: 'B',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'italic',
                key: 'I',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'underline',
                key: 'U',
                meta: true,
                shift: false,
                alt: false
            }
        ],

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.subscribe('editableKeydown', this.handleKeydown.bind(this));
            this.keys = {};
            this.commands.forEach(function (command) {
                var keyCode = command.key.charCodeAt(0);
                if (!this.keys[keyCode]) {
                    this.keys[keyCode] = [];
                }
                this.keys[keyCode].push(command);
            }, this);
        },

        handleKeydown: function (event) {
            var keyCode = MediumEditor.util.getKeyCode(event);
            if (!this.keys[keyCode]) {
                return;
            }

            var isMeta = MediumEditor.util.isMetaCtrlKey(event),
                isShift = !!event.shiftKey,
                isAlt = !!event.altKey;

            this.keys[keyCode].forEach(function (data) {
                if (data.meta === isMeta &&
                    data.shift === isShift &&
                    (data.alt === isAlt ||
                     undefined === data.alt)) { // TODO deprecated: remove check for undefined === data.alt when jumping to 6.0.0
                    event.preventDefault();
                    event.stopPropagation();

                    // command can be a function to execute
                    if (typeof data.command === 'function') {
                        data.command.apply(this);
                    }
                    // command can be false so the shortcut is just disabled
                    else if (false !== data.command) {
                        this.execAction(data.command);
                    }
                }
            }, this);
        }
    });

    MediumEditor.extensions.keyboardCommands = KeyboardCommands;
}());

(function () {
    'use strict';

    var FontNameForm = MediumEditor.extensions.form.extend({

        name: 'fontname',
        action: 'fontName',
        aria: 'change font name',
        contentDefault: '&#xB1;', // ±
        contentFA: '<i class="fa fa-font"></i>',

        fonts: ['', 'Arial', 'Verdana', 'Times New Roman'],

        init: function () {
            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
        },

        // Called when the button the toolbar is clicked
        // Overrides ButtonExtension.handleClick
        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!this.isDisplayed()) {
                // Get FontName of current selection (convert to string since IE returns this as number)
                var fontName = this.document.queryCommandValue('fontName') + '';
                this.showForm(fontName);
            }

            return false;
        },

        // Called by medium-editor to append form to the toolbar
        getForm: function () {
            if (!this.form) {
                this.form = this.createForm();
            }
            return this.form;
        },

        // Used by medium-editor when the default toolbar is to be displayed
        isDisplayed: function () {
            return this.getForm().style.display === 'block';
        },

        hideForm: function () {
            this.getForm().style.display = 'none';
            this.getSelect().value = '';
        },

        showForm: function (fontName) {
            var select = this.getSelect();

            this.base.saveSelection();
            this.hideToolbarDefaultActions();
            this.getForm().style.display = 'block';
            this.setToolbarPosition();

            select.value = fontName || '';
            select.focus();
        },

        // Called by core when tearing down medium-editor (destroy)
        destroy: function () {
            if (!this.form) {
                return false;
            }

            if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
            }

            delete this.form;
        },

        // core methods

        doFormSave: function () {
            this.base.restoreSelection();
            this.base.checkSelection();
        },

        doFormCancel: function () {
            this.base.restoreSelection();
            this.clearFontName();
            this.base.checkSelection();
        },

        // form creation and event handling
        createForm: function () {
            var doc = this.document,
                form = doc.createElement('div'),
                select = doc.createElement('select'),
                close = doc.createElement('a'),
                save = doc.createElement('a'),
                option;

            // Font Name Form (div)
            form.className = 'medium-editor-toolbar-form';
            form.id = 'medium-editor-toolbar-form-fontname-' + this.getEditorId();

            // Handle clicks on the form itself
            this.on(form, 'click', this.handleFormClick.bind(this));

            // Add font names
            for (var i = 0; i<this.fonts.length; i++) {
                option = doc.createElement('option');
                option.innerHTML = this.fonts[i];
                option.value = this.fonts[i];
                select.appendChild(option);
            }

            select.className = 'medium-editor-toolbar-select';
            form.appendChild(select);

            // Handle typing in the textbox
            this.on(select, 'change', this.handleFontChange.bind(this));

            // Add save buton
            save.setAttribute('href', '#');
            save.className = 'medium-editor-toobar-save';
            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                             '<i class="fa fa-check"></i>' :
                             '&#10003;';
            form.appendChild(save);

            // Handle save button clicks (capture)
            this.on(save, 'click', this.handleSaveClick.bind(this), true);

            // Add close button
            close.setAttribute('href', '#');
            close.className = 'medium-editor-toobar-close';
            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                              '<i class="fa fa-times"></i>' :
                              '&times;';
            form.appendChild(close);

            // Handle close button clicks
            this.on(close, 'click', this.handleCloseClick.bind(this));

            return form;
        },

        getSelect: function () {
            return this.getForm().querySelector('select.medium-editor-toolbar-select');
        },

        clearFontName: function () {
            MediumEditor.selection.getSelectedElements(this.document).forEach(function (el) {
                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('face')) {
                    el.removeAttribute('face');
                }
            });
        },

        handleFontChange: function () {
            var font = this.getSelect().value;
            if (font === '') {
                this.clearFontName();
            } else {
                this.execAction('fontName', { value: font });
            }
        },

        handleFormClick: function (event) {
            // make sure not to hide form when clicking inside the form
            event.stopPropagation();
        },

        handleSaveClick: function (event) {
            // Clicking Save -> create the font size
            event.preventDefault();
            this.doFormSave();
        },

        handleCloseClick: function (event) {
            // Click Close -> close the form
            event.preventDefault();
            this.doFormCancel();
        }
    });

    MediumEditor.extensions.fontName = FontNameForm;
}());

(function () {
    'use strict';

    var FontSizeForm = MediumEditor.extensions.form.extend({

        name: 'fontsize',
        action: 'fontSize',
        aria: 'increase/decrease font size',
        contentDefault: '&#xB1;', // ±
        contentFA: '<i class="fa fa-text-height"></i>',

        init: function () {
            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
        },

        // Called when the button the toolbar is clicked
        // Overrides ButtonExtension.handleClick
        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!this.isDisplayed()) {
                // Get fontsize of current selection (convert to string since IE returns this as number)
                var fontSize = this.document.queryCommandValue('fontSize') + '';
                this.showForm(fontSize);
            }

            return false;
        },

        // Called by medium-editor to append form to the toolbar
        getForm: function () {
            if (!this.form) {
                this.form = this.createForm();
            }
            return this.form;
        },

        // Used by medium-editor when the default toolbar is to be displayed
        isDisplayed: function () {
            return this.getForm().style.display === 'block';
        },

        hideForm: function () {
            this.getForm().style.display = 'none';
            this.getInput().value = '';
        },

        showForm: function (fontSize) {
            var input = this.getInput();

            this.base.saveSelection();
            this.hideToolbarDefaultActions();
            this.getForm().style.display = 'block';
            this.setToolbarPosition();

            input.value = fontSize || '';
            input.focus();
        },

        // Called by core when tearing down medium-editor (destroy)
        destroy: function () {
            if (!this.form) {
                return false;
            }

            if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
            }

            delete this.form;
        },

        // core methods

        doFormSave: function () {
            this.base.restoreSelection();
            this.base.checkSelection();
        },

        doFormCancel: function () {
            this.base.restoreSelection();
            this.clearFontSize();
            this.base.checkSelection();
        },

        // form creation and event handling
        createForm: function () {
            var doc = this.document,
                form = doc.createElement('div'),
                input = doc.createElement('input'),
                close = doc.createElement('a'),
                save = doc.createElement('a');

            // Font Size Form (div)
            form.className = 'medium-editor-toolbar-form';
            form.id = 'medium-editor-toolbar-form-fontsize-' + this.getEditorId();

            // Handle clicks on the form itself
            this.on(form, 'click', this.handleFormClick.bind(this));

            // Add font size slider
            input.setAttribute('type', 'range');
            input.setAttribute('min', '1');
            input.setAttribute('max', '7');
            input.className = 'medium-editor-toolbar-input';
            form.appendChild(input);

            // Handle typing in the textbox
            this.on(input, 'change', this.handleSliderChange.bind(this));

            // Add save buton
            save.setAttribute('href', '#');
            save.className = 'medium-editor-toobar-save';
            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                             '<i class="fa fa-check"></i>' :
                             '&#10003;';
            form.appendChild(save);

            // Handle save button clicks (capture)
            this.on(save, 'click', this.handleSaveClick.bind(this), true);

            // Add close button
            close.setAttribute('href', '#');
            close.className = 'medium-editor-toobar-close';
            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                              '<i class="fa fa-times"></i>' :
                              '&times;';
            form.appendChild(close);

            // Handle close button clicks
            this.on(close, 'click', this.handleCloseClick.bind(this));

            return form;
        },

        getInput: function () {
            return this.getForm().querySelector('input.medium-editor-toolbar-input');
        },

        clearFontSize: function () {
            MediumEditor.selection.getSelectedElements(this.document).forEach(function (el) {
                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('size')) {
                    el.removeAttribute('size');
                }
            });
        },

        handleSliderChange: function () {
            var size = this.getInput().value;
            if (size === '4') {
                this.clearFontSize();
            } else {
                this.execAction('fontSize', { value: size });
            }
        },

        handleFormClick: function (event) {
            // make sure not to hide form when clicking inside the form
            event.stopPropagation();
        },

        handleSaveClick: function (event) {
            // Clicking Save -> create the font size
            event.preventDefault();
            this.doFormSave();
        },

        handleCloseClick: function (event) {
            // Click Close -> close the form
            event.preventDefault();
            this.doFormCancel();
        }
    });

    MediumEditor.extensions.fontSize = FontSizeForm;
}());
(function () {
    'use strict';

    /* Helpers and internal variables that don't need to be members of actual paste handler */

    var pasteBinDefaultContent = '%ME_PASTEBIN%',
        lastRange = null,
        keyboardPasteEditable = null,
        stopProp = function (event) {
            event.stopPropagation();
        };

    /*jslint regexp: true*/
    /*
        jslint does not allow character negation, because the negation
        will not match any unicode characters. In the regexes in this
        block, negation is used specifically to match the end of an html
        tag, and in fact unicode characters *should* be allowed.
    */
    function createReplacements() {
        return [
            // Remove anything but the contents within the BODY element
            [new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ''],

            // cleanup comments added by Chrome when pasting html
            [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ''],

            // Trailing BR elements
            [new RegExp(/<br>$/i), ''],

            // replace two bogus tags that begin pastes from google docs
            [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ''],
            [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ''],

             // un-html spaces and newlines inserted by OS X
            [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), ' '],
            [new RegExp(/<br class="Apple-interchange-newline">/g), '<br>'],

            // replace google docs italics+bold with a span to be replaced once the html is inserted
            [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'],

            // replace google docs italics with a span to be replaced once the html is inserted
            [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'],

            //[replace google docs bolds with a span to be replaced once the html is inserted
            [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'],

             // replace manually entered b/i/a tags with real ones
            [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), '<$1$2>'],

             // replace manually a tags with real ones, converting smart-quotes from google docs
            [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'],

            // Newlines between paragraphs in html have no syntactic value,
            // but then have a tendency to accidentally become additional paragraphs down the line
            [new RegExp(/<\/p>\n+/gi), '</p>'],
            [new RegExp(/\n+<p/gi), '<p'],

            // Microsoft Word makes these odd tags, like <o:p></o:p>
            [new RegExp(/<\/?o:[a-z]*>/gi), ''],

            // Microsoft Word adds some special elements around list items
            [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), '$1']
        ];
    }
    /*jslint regexp: false*/

    /**
     * Gets various content types out of the Clipboard API. It will also get the
     * plain text using older IE and WebKit API.
     *
     * @param {event} event Event fired on paste.
     * @param {win} reference to window
     * @param {doc} reference to document
     * @return {Object} Object with mime types and data for those mime types.
     */
    function getClipboardContent(event, win, doc) {
        var dataTransfer = event.clipboardData || win.clipboardData || doc.dataTransfer,
            data = {};

        if (!dataTransfer) {
            return data;
        }

        // Use old WebKit/IE API
        if (dataTransfer.getData) {
            var legacyText = dataTransfer.getData('Text');
            if (legacyText && legacyText.length > 0) {
                data['text/plain'] = legacyText;
            }
        }

        if (dataTransfer.types) {
            for (var i = 0; i < dataTransfer.types.length; i++) {
                var contentType = dataTransfer.types[i];
                data[contentType] = dataTransfer.getData(contentType);
            }
        }

        return data;
    }

    var PasteHandler = MediumEditor.Extension.extend({
        /* Paste Options */

        /* forcePlainText: [boolean]
         * Forces pasting as plain text.
         */
        forcePlainText: true,

        /* cleanPastedHTML: [boolean]
         * cleans pasted content from different sources, like google docs etc.
         */
        cleanPastedHTML: false,

        /* preCleanReplacements: [Array]
         * custom pairs (2 element arrays) of RegExp and replacement text to use during past when
         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.
         * These replacements are executed before any medium editor defined replacements.
         */
        preCleanReplacements: [],

        /* cleanReplacements: [Array]
         * custom pairs (2 element arrays) of RegExp and replacement text to use during paste when
         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.
         * These replacements are executed after any medium editor defined replacements.
         */
        cleanReplacements: [],

        /* cleanAttrs:: [Array]
         * list of element attributes to remove during paste when __cleanPastedHTML__ is `true` or when
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
         */
        cleanAttrs: ['class', 'style', 'dir'],

        /* cleanTags: [Array]
         * list of element tag names to remove during paste when __cleanPastedHTML__ is `true` or when
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
         */
        cleanTags: ['meta'],

        /* unwrapTags: [Array]
         * list of element tag names to unwrap (remove the element tag but retain its child elements)
         * during paste when __cleanPastedHTML__ is `true` or when
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
         */
        unwrapTags: [],

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            if (this.forcePlainText || this.cleanPastedHTML) {
                this.subscribe('editableKeydown', this.handleKeydown.bind(this));
                // We need access to the full event data in paste
                // so we can't use the editablePaste event here
                this.getEditorElements().forEach(function (element) {
                    this.on(element, 'paste', this.handlePaste.bind(this));
                }, this);
                this.subscribe('addElement', this.handleAddElement.bind(this));
            }
        },

        handleAddElement: function (event, editable) {
            this.on(editable, 'paste', this.handlePaste.bind(this));
        },

        destroy: function () {
            // Make sure pastebin is destroyed in case it's still around for some reason
            if (this.forcePlainText || this.cleanPastedHTML) {
                this.removePasteBin();
            }
        },

        handlePaste: function (event, editable) {
            if (event.defaultPrevented) {
                return;
            }

            var clipboardContent = getClipboardContent(event, this.window, this.document),
                pastedHTML = clipboardContent['text/html'],
                pastedPlain = clipboardContent['text/plain'];

            if (this.window.clipboardData && event.clipboardData === undefined && !pastedHTML) {
                // If window.clipboardData exists, but event.clipboardData doesn't exist,
                // we're probably in IE. IE only has two possibilities for clipboard
                // data format: 'Text' and 'URL'.
                //
                // For IE, we'll fallback to 'Text' for text/html
                pastedHTML = pastedPlain;
            }

            if (pastedHTML || pastedPlain) {
                event.preventDefault();

                this.doPaste(pastedHTML, pastedPlain, editable);
            }
        },

        doPaste: function (pastedHTML, pastedPlain, editable) {
            var paragraphs,
                html = '',
                p;

            if (this.cleanPastedHTML && pastedHTML) {
                return this.cleanPaste(pastedHTML);
            }

            if (!(this.getEditorOption('disableReturn') || (editable && editable.getAttribute('data-disable-return')))) {
                paragraphs = pastedPlain.split(/[\r\n]+/g);
                // If there are no \r\n in data, don't wrap in <p>
                if (paragraphs.length > 1) {
                    for (p = 0; p < paragraphs.length; p += 1) {
                        if (paragraphs[p] !== '') {
                            html += '<p>' + MediumEditor.util.htmlEntities(paragraphs[p]) + '</p>';
                        }
                    }
                } else {
                    html = MediumEditor.util.htmlEntities(paragraphs[0]);
                }
            } else {
                html = MediumEditor.util.htmlEntities(pastedPlain);
            }
            MediumEditor.util.insertHTMLCommand(this.document, html);
        },

        handlePasteBinPaste: function (event) {
            if (event.defaultPrevented) {
                this.removePasteBin();
                return;
            }

            var clipboardContent = getClipboardContent(event, this.window, this.document),
                pastedHTML = clipboardContent['text/html'],
                pastedPlain = clipboardContent['text/plain'],
                editable = keyboardPasteEditable;

            // If we have valid html already, or we're not in cleanPastedHTML mode
            // we can ignore the paste bin and just paste now
            if (!this.cleanPastedHTML || pastedHTML) {
                event.preventDefault();
                this.removePasteBin();
                this.doPaste(pastedHTML, pastedPlain, editable);

                // The event handling code listens for paste on the editable element
                // in order to trigger the editablePaste event.  Since this paste event
                // is happening on the pastebin, the event handling code never knows about it
                // So, we have to trigger editablePaste manually
                this.trigger('editablePaste', { currentTarget: editable, target: editable }, editable);
                return;
            }

            // We need to look at the paste bin, so do a setTimeout to let the paste
            // fall through into the paste bin
            setTimeout(function () {
                // Only look for HTML if we're in cleanPastedHTML mode
                if (this.cleanPastedHTML) {
                    // If clipboard didn't have HTML, try the paste bin
                    pastedHTML = this.getPasteBinHtml();
                }

                // If we needed the paste bin, we're done with it now, remove it
                this.removePasteBin();

                // Handle the paste with the html from the paste bin
                this.doPaste(pastedHTML, pastedPlain, editable);

                // The event handling code listens for paste on the editable element
                // in order to trigger the editablePaste event.  Since this paste event
                // is happening on the pastebin, the event handling code never knows about it
                // So, we have to trigger editablePaste manually
                this.trigger('editablePaste', { currentTarget: editable, target: editable }, editable);
            }.bind(this), 0);
        },

        handleKeydown: function (event, editable) {
            // if it's not Ctrl+V, do nothing
            if (!(MediumEditor.util.isKey(event, MediumEditor.util.keyCode.V) && MediumEditor.util.isMetaCtrlKey(event))) {
                return;
            }

            event.stopImmediatePropagation();

            this.removePasteBin();
            this.createPasteBin(editable);
        },

        createPasteBin: function (editable) {
            var rects,
                range = MediumEditor.selection.getSelectionRange(this.document),
                top = this.window.pageYOffset;

            keyboardPasteEditable = editable;

            if (range) {
                rects = range.getClientRects();

                // on empty line, rects is empty so we grab information from the first container of the range
                if (rects.length) {
                    top += rects[0].top;
                } else {
                    top += range.startContainer.getBoundingClientRect().top;
                }
            }

            lastRange = range;

            var pasteBinElm = this.document.createElement('div');
            pasteBinElm.id = this.pasteBinId = 'medium-editor-pastebin-' + (+Date.now());
            pasteBinElm.setAttribute('style', 'border: 1px red solid; position: absolute; top: ' + top + 'px; width: 10px; height: 10px; overflow: hidden; opacity: 0');
            pasteBinElm.setAttribute('contentEditable', true);
            pasteBinElm.innerHTML = pasteBinDefaultContent;

            this.document.body.appendChild(pasteBinElm);

            // avoid .focus() to stop other event (actually the paste event)
            this.on(pasteBinElm, 'focus', stopProp);
            this.on(pasteBinElm, 'focusin', stopProp);
            this.on(pasteBinElm, 'focusout', stopProp);

            pasteBinElm.focus();

            MediumEditor.selection.selectNode(pasteBinElm, this.document);

            if (!this.boundHandlePaste) {
                this.boundHandlePaste = this.handlePasteBinPaste.bind(this);
            }

            this.on(pasteBinElm, 'paste', this.boundHandlePaste);
        },

        removePasteBin: function () {
            if (null !== lastRange) {
                MediumEditor.selection.selectRange(this.document, lastRange);
                lastRange = null;
            }

            if (null !== keyboardPasteEditable) {
                keyboardPasteEditable = null;
            }

            var pasteBinElm = this.getPasteBin();
            if (!pasteBinElm) {
                return;
            }

            if (pasteBinElm) {
                this.off(pasteBinElm, 'focus', stopProp);
                this.off(pasteBinElm, 'focusin', stopProp);
                this.off(pasteBinElm, 'focusout', stopProp);
                this.off(pasteBinElm, 'paste', this.boundHandlePaste);
                pasteBinElm.parentElement.removeChild(pasteBinElm);
            }
        },

        getPasteBin: function () {
            return this.document.getElementById(this.pasteBinId);
        },

        getPasteBinHtml: function () {
            var pasteBinElm = this.getPasteBin();

            if (!pasteBinElm) {
                return false;
            }

            // WebKit has a nice bug where it clones the paste bin if you paste from for example notepad
            // so we need to force plain text mode in this case
            if (pasteBinElm.firstChild && pasteBinElm.firstChild.id === 'mcepastebin') {
                return false;
            }

            var pasteBinHtml = pasteBinElm.innerHTML;

            // If paste bin is empty try using plain text mode
            // since that is better than nothing right
            if (!pasteBinHtml || pasteBinHtml === pasteBinDefaultContent) {
                return false;
            }

            return pasteBinHtml;
        },

        cleanPaste: function (text) {
            var i, elList, tmp, workEl,
                multiline = /<p|<br|<div/.test(text),
                replacements = [].concat(
                    this.preCleanReplacements || [],
                    createReplacements(),
                    this.cleanReplacements || []);

            for (i = 0; i < replacements.length; i += 1) {
                text = text.replace(replacements[i][0], replacements[i][1]);
            }

            if (!multiline) {
                return this.pasteHTML(text);
            }

            // create a temporary div to cleanup block elements
            tmp = this.document.createElement('div');

            // double br's aren't converted to p tags, but we want paragraphs.
            tmp.innerHTML = '<p>' + text.split('<br><br>').join('</p><p>') + '</p>';

            // block element cleanup
            elList = tmp.querySelectorAll('a,p,div,br');
            for (i = 0; i < elList.length; i += 1) {
                workEl = elList[i];

                // Microsoft Word replaces some spaces with newlines.
                // While newlines between block elements are meaningless, newlines within
                // elements are sometimes actually spaces.
                workEl.innerHTML = workEl.innerHTML.replace(/\n/gi, ' ');

                switch (workEl.nodeName.toLowerCase()) {
                    case 'p':
                    case 'div':
                        this.filterCommonBlocks(workEl);
                        break;
                    case 'br':
                        this.filterLineBreak(workEl);
                        break;
                }
            }

            this.pasteHTML(tmp.innerHTML);
        },

        pasteHTML: function (html, options) {
            options = MediumEditor.util.defaults({}, options, {
                cleanAttrs: this.cleanAttrs,
                cleanTags: this.cleanTags,
                unwrapTags: this.unwrapTags
            });

            var elList, workEl, i, fragmentBody, pasteBlock = this.document.createDocumentFragment();

            pasteBlock.appendChild(this.document.createElement('body'));

            fragmentBody = pasteBlock.querySelector('body');
            fragmentBody.innerHTML = html;

            this.cleanupSpans(fragmentBody);

            elList = fragmentBody.querySelectorAll('*');
            for (i = 0; i < elList.length; i += 1) {
                workEl = elList[i];

                if ('a' === workEl.nodeName.toLowerCase() && this.getEditorOption('targetBlank')) {
                    MediumEditor.util.setTargetBlank(workEl);
                }

                MediumEditor.util.cleanupAttrs(workEl, options.cleanAttrs);
                MediumEditor.util.cleanupTags(workEl, options.cleanTags);
                MediumEditor.util.unwrapTags(workEl, options.unwrapTags);
            }

            MediumEditor.util.insertHTMLCommand(this.document, fragmentBody.innerHTML.replace(/&nbsp;/g, ' '));
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        isCommonBlock: function (el) {
            return (el && (el.nodeName.toLowerCase() === 'p' || el.nodeName.toLowerCase() === 'div'));
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        filterCommonBlocks: function (el) {
            if (/^\s*$/.test(el.textContent) && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        filterLineBreak: function (el) {
            if (this.isCommonBlock(el.previousElementSibling)) {
                // remove stray br's following common block elements
                this.removeWithParent(el);
            } else if (this.isCommonBlock(el.parentNode) && (el.parentNode.firstChild === el || el.parentNode.lastChild === el)) {
                // remove br's just inside open or close tags of a div/p
                this.removeWithParent(el);
            } else if (el.parentNode && el.parentNode.childElementCount === 1 && el.parentNode.textContent === '') {
                // and br's that are the only child of elements other than div/p
                this.removeWithParent(el);
            }
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        // remove an element, including its parent, if it is the only element within its parent
        removeWithParent: function (el) {
            if (el && el.parentNode) {
                if (el.parentNode.parentNode && el.parentNode.childElementCount === 1) {
                    el.parentNode.parentNode.removeChild(el.parentNode);
                } else {
                    el.parentNode.removeChild(el);
                }
            }
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        cleanupSpans: function (containerEl) {
            var i,
                el,
                newEl,
                spans = containerEl.querySelectorAll('.replace-with'),
                isCEF = function (el) {
                    return (el && el.nodeName !== '#text' && el.getAttribute('contenteditable') === 'false');
                };

            for (i = 0; i < spans.length; i += 1) {
                el = spans[i];
                newEl = this.document.createElement(el.classList.contains('bold') ? 'b' : 'i');

                if (el.classList.contains('bold') && el.classList.contains('italic')) {
                    // add an i tag as well if this has both italics and bold
                    newEl.innerHTML = '<i>' + el.innerHTML + '</i>';
                } else {
                    newEl.innerHTML = el.innerHTML;
                }
                el.parentNode.replaceChild(newEl, el);
            }

            spans = containerEl.querySelectorAll('span');
            for (i = 0; i < spans.length; i += 1) {
                el = spans[i];

                // bail if span is in contenteditable = false
                if (MediumEditor.util.traverseUp(el, isCEF)) {
                    return false;
                }

                // remove empty spans, replace others with their contents
                MediumEditor.util.unwrap(el, this.document);
            }
        }
    });

    MediumEditor.extensions.paste = PasteHandler;
}());

(function () {
    'use strict';

    var Placeholder = MediumEditor.Extension.extend({
        name: 'placeholder',

        /* Placeholder Options */

        /* text: [string]
         * Text to display in the placeholder
         */
        text: 'Type your text',

        /* hideOnClick: [boolean]
         * Should we hide the placeholder on click (true) or when user starts typing (false)
         */
        hideOnClick: true,

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.initPlaceholders();
            this.attachEventHandlers();
        },

        initPlaceholders: function () {
            this.getEditorElements().forEach(this.initElement, this);
        },

        handleAddElement: function (event, editable) {
            this.initElement(editable);
        },

        initElement: function (el) {
            if (!el.getAttribute('data-placeholder')) {
                el.setAttribute('data-placeholder', this.text);
            }
            this.updatePlaceholder(el);
        },

        destroy: function () {
            this.getEditorElements().forEach(this.cleanupElement, this);
        },

        handleRemoveElement: function (event, editable) {
            this.cleanupElement(editable);
        },

        cleanupElement: function (el) {
            if (el.getAttribute('data-placeholder') === this.text) {
                el.removeAttribute('data-placeholder');
            }
        },

        showPlaceholder: function (el) {
            if (el) {
                // https://github.com/yabwe/medium-editor/issues/234
                // In firefox, styling the placeholder with an absolutely positioned
                // pseudo element causes the cursor to appear in a bad location
                // when the element is completely empty, so apply a different class to
                // style it with a relatively positioned pseudo element
                if (MediumEditor.util.isFF && el.childNodes.length === 0) {
                    el.classList.add('medium-editor-placeholder-relative');
                    el.classList.remove('medium-editor-placeholder');
                } else {
                    el.classList.add('medium-editor-placeholder');
                    el.classList.remove('medium-editor-placeholder-relative');
                }
            }
        },

        hidePlaceholder: function (el) {
            if (el) {
                el.classList.remove('medium-editor-placeholder');
                el.classList.remove('medium-editor-placeholder-relative');
            }
        },

        updatePlaceholder: function (el, dontShow) {
            // If the element has content, hide the placeholder
            if (el.querySelector('img, blockquote, ul, ol, table') || (el.textContent.replace(/^\s+|\s+$/g, '') !== '')) {
                return this.hidePlaceholder(el);
            }

            if (!dontShow) {
                this.showPlaceholder(el);
            }
        },

        attachEventHandlers: function () {
            if (this.hideOnClick) {
                // For the 'hideOnClick' option, the placeholder should always be hidden on focus
                this.subscribe('focus', this.handleFocus.bind(this));
            }

            // If the editor has content, it should always hide the placeholder
            this.subscribe('editableInput', this.handleInput.bind(this));

            // When the editor loses focus, check if the placeholder should be visible
            this.subscribe('blur', this.handleBlur.bind(this));

            // Need to know when elements are added/removed from the editor
            this.subscribe('addElement', this.handleAddElement.bind(this));
            this.subscribe('removeElement', this.handleRemoveElement.bind(this));
        },

        handleInput: function (event, element) {
            // If the placeholder should be hidden on focus and the
            // element has focus, don't show the placeholder
            var dontShow = this.hideOnClick && (element === this.base.getFocusedElement());

            // Editor's content has changed, check if the placeholder should be hidden
            this.updatePlaceholder(element, dontShow);
        },

        handleFocus: function (event, element) {
            // Editor has focus, hide the placeholder
            this.hidePlaceholder(element);
        },

        handleBlur: function (event, element) {
            // Editor has lost focus, check if the placeholder should be shown
            this.updatePlaceholder(element);
        }
    });

    MediumEditor.extensions.placeholder = Placeholder;
}());

(function () {
    'use strict';

    var Toolbar = MediumEditor.Extension.extend({
        name: 'toolbar',

        /* Toolbar Options */

        /* align: ['left'|'center'|'right']
         * When the __static__ option is true, this aligns the static toolbar
         * relative to the medium-editor element.
         */
        align: 'center',

        /* allowMultiParagraphSelection: [boolean]
         * enables/disables whether the toolbar should be displayed when
         * selecting multiple paragraphs/block elements
         */
        allowMultiParagraphSelection: true,

        /* buttons: [Array]
         * the names of the set of buttons to display on the toolbar.
         */
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],

        /* diffLeft: [Number]
         * value in pixels to be added to the X axis positioning of the toolbar.
         */
        diffLeft: 0,

        /* diffTop: [Number]
         * value in pixels to be added to the Y axis positioning of the toolbar.
         */
        diffTop: -10,

        /* firstButtonClass: [string]
         * CSS class added to the first button in the toolbar.
         */
        firstButtonClass: 'medium-editor-button-first',

        /* lastButtonClass: [string]
         * CSS class added to the last button in the toolbar.
         */
        lastButtonClass: 'medium-editor-button-last',

        /* standardizeSelectionStart: [boolean]
         * enables/disables standardizing how the beginning of a range is decided
         * between browsers whenever the selected text is analyzed for updating toolbar buttons status.
         */
        standardizeSelectionStart: false,

        /* static: [boolean]
         * enable/disable the toolbar always displaying in the same location
         * relative to the medium-editor element.
         */
        static: false,

        /* sticky: [boolean]
         * When the __static__ option is true, this enables/disables the toolbar
         * "sticking" to the viewport and staying visible on the screen while
         * the page scrolls.
         */
        sticky: false,

        /* stickyTopOffset: [Number]
         * Value in pixel of the top offset above the toolbar
         */
        stickyTopOffset: 0,

        /* updateOnEmptySelection: [boolean]
         * When the __static__ option is true, this enables/disables updating
         * the state of the toolbar buttons even when the selection is collapsed
         * (there is no selection, just a cursor).
         */
        updateOnEmptySelection: false,

        /* relativeContainer: [node]
         * appending the toolbar to a given node instead of body
         */
        relativeContainer: null,

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.initThrottledMethods();

            if (!this.relativeContainer) {
                this.getEditorOption('elementsContainer').appendChild(this.getToolbarElement());
            } else {
                this.relativeContainer.appendChild(this.getToolbarElement());
            }
        },

        // Helper method to execute method for every extension, but ignoring the toolbar extension
        forEachExtension: function (iterator, context) {
            return this.base.extensions.forEach(function (command) {
                if (command === this) {
                    return;
                }
                return iterator.apply(context || this, arguments);
            }, this);
        },

        // Toolbar creation/deletion

        createToolbar: function () {
            var toolbar = this.document.createElement('div');

            toolbar.id = 'medium-editor-toolbar-' + this.getEditorId();
            toolbar.className = 'medium-editor-toolbar';

            if (this.static) {
                toolbar.className += ' static-toolbar';
            } else if (this.relativeContainer) {
                toolbar.className += ' medium-editor-relative-toolbar';
            } else {
                toolbar.className += ' medium-editor-stalker-toolbar';
            }

            toolbar.appendChild(this.createToolbarButtons());

            // Add any forms that extensions may have
            this.forEachExtension(function (extension) {
                if (extension.hasForm) {
                    toolbar.appendChild(extension.getForm());
                }
            });

            this.attachEventHandlers();

            return toolbar;
        },

        createToolbarButtons: function () {
            var ul = this.document.createElement('ul'),
                li,
                btn,
                buttons,
                extension,
                buttonName,
                buttonOpts;

            ul.id = 'medium-editor-toolbar-actions' + this.getEditorId();
            ul.className = 'medium-editor-toolbar-actions';
            ul.style.display = 'block';

            this.buttons.forEach(function (button) {
                if (typeof button === 'string') {
                    buttonName = button;
                    buttonOpts = null;
                } else {
                    buttonName = button.name;
                    buttonOpts = button;
                }

                // If the button already exists as an extension, it'll be returned
                // othwerise it'll create the default built-in button
                extension = this.base.addBuiltInExtension(buttonName, buttonOpts);

                if (extension && typeof extension.getButton === 'function') {
                    btn = extension.getButton(this.base);
                    li = this.document.createElement('li');
                    if (MediumEditor.util.isElement(btn)) {
                        li.appendChild(btn);
                    } else {
                        li.innerHTML = btn;
                    }
                    ul.appendChild(li);
                }
            }, this);

            buttons = ul.querySelectorAll('button');
            if (buttons.length > 0) {
                buttons[0].classList.add(this.firstButtonClass);
                buttons[buttons.length - 1].classList.add(this.lastButtonClass);
            }

            return ul;
        },

        destroy: function () {
            if (this.toolbar) {
                if (this.toolbar.parentNode) {
                    this.toolbar.parentNode.removeChild(this.toolbar);
                }
                delete this.toolbar;
            }
        },

        // Toolbar accessors

        getInteractionElements: function () {
            return this.getToolbarElement();
        },

        getToolbarElement: function () {
            if (!this.toolbar) {
                this.toolbar = this.createToolbar();
            }

            return this.toolbar;
        },

        getToolbarActionsElement: function () {
            return this.getToolbarElement().querySelector('.medium-editor-toolbar-actions');
        },

        // Toolbar event handlers

        initThrottledMethods: function () {
            // throttledPositionToolbar is throttled because:
            // - It will be called when the browser is resizing, which can fire many times very quickly
            // - For some event (like resize) a slight lag in UI responsiveness is OK and provides performance benefits
            this.throttledPositionToolbar = MediumEditor.util.throttle(function () {
                if (this.base.isActive) {
                    this.positionToolbarIfShown();
                }
            }.bind(this));
        },

        attachEventHandlers: function () {
            // MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
            this.subscribe('blur', this.handleBlur.bind(this));
            this.subscribe('focus', this.handleFocus.bind(this));

            // Updating the state of the toolbar as things change
            this.subscribe('editableClick', this.handleEditableClick.bind(this));
            this.subscribe('editableKeyup', this.handleEditableKeyup.bind(this));

            // Handle mouseup on document for updating the selection in the toolbar
            this.on(this.document.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this));

            // Add a scroll event for sticky toolbar
            if (this.static && this.sticky) {
                // On scroll (capture), re-position the toolbar
                this.on(this.window, 'scroll', this.handleWindowScroll.bind(this), true);
            }

            // On resize, re-position the toolbar
            this.on(this.window, 'resize', this.handleWindowResize.bind(this));
        },

        handleWindowScroll: function () {
            this.positionToolbarIfShown();
        },

        handleWindowResize: function () {
            this.throttledPositionToolbar();
        },

        handleDocumentMouseup: function (event) {
            // Do not trigger checkState when mouseup fires over the toolbar
            if (event &&
                    event.target &&
                    MediumEditor.util.isDescendant(this.getToolbarElement(), event.target)) {
                return false;
            }
            this.checkState();
        },

        handleEditableClick: function () {
            // Delay the call to checkState to handle bug where selection is empty
            // immediately after clicking inside a pre-existing selection
            setTimeout(function () {
                this.checkState();
            }.bind(this), 0);
        },

        handleEditableKeyup: function () {
            this.checkState();
        },

        handleBlur: function () {
            // Kill any previously delayed calls to hide the toolbar
            clearTimeout(this.hideTimeout);

            // Blur may fire even if we have a selection, so we want to prevent any delayed showToolbar
            // calls from happening in this specific case
            clearTimeout(this.delayShowTimeout);

            // Delay the call to hideToolbar to handle bug with multiple editors on the page at once
            this.hideTimeout = setTimeout(function () {
                this.hideToolbar();
            }.bind(this), 1);
        },

        handleFocus: function () {
            this.checkState();
        },

        // Hiding/showing toolbar

        isDisplayed: function () {
            return this.getToolbarElement().classList.contains('medium-editor-toolbar-active');
        },

        showToolbar: function () {
            clearTimeout(this.hideTimeout);
            if (!this.isDisplayed()) {
                this.getToolbarElement().classList.add('medium-editor-toolbar-active');
                this.trigger('showToolbar', {}, this.base.getFocusedElement());
            }
        },

        hideToolbar: function () {
            if (this.isDisplayed()) {
                this.getToolbarElement().classList.remove('medium-editor-toolbar-active');
                this.trigger('hideToolbar', {}, this.base.getFocusedElement());
            }
        },

        isToolbarDefaultActionsDisplayed: function () {
            return this.getToolbarActionsElement().style.display === 'block';
        },

        hideToolbarDefaultActions: function () {
            if (this.isToolbarDefaultActionsDisplayed()) {
                this.getToolbarActionsElement().style.display = 'none';
            }
        },

        showToolbarDefaultActions: function () {
            this.hideExtensionForms();

            if (!this.isToolbarDefaultActionsDisplayed()) {
                this.getToolbarActionsElement().style.display = 'block';
            }

            // Using setTimeout + options.delay because:
            // We will actually be displaying the toolbar, which should be controlled by options.delay
            this.delayShowTimeout = this.base.delay(function () {
                this.showToolbar();
            }.bind(this));
        },

        hideExtensionForms: function () {
            // Hide all extension forms
            this.forEachExtension(function (extension) {
                if (extension.hasForm && extension.isDisplayed()) {
                    extension.hideForm();
                }
            });
        },

        // Responding to changes in user selection

        // Checks for existance of multiple block elements in the current selection
        multipleBlockElementsSelected: function () {
            var regexEmptyHTMLTags = /<[^\/>][^>]*><\/[^>]+>/gim, // http://stackoverflow.com/questions/3129738/remove-empty-tags-using-regex
                regexBlockElements = new RegExp('<(' + MediumEditor.util.blockContainerElementNames.join('|') + ')[^>]*>', 'g'),
                selectionHTML = MediumEditor.selection.getSelectionHtml(this.document).replace(regexEmptyHTMLTags, ''), // Filter out empty blocks from selection
                hasMultiParagraphs = selectionHTML.match(regexBlockElements); // Find how many block elements are within the html

            return !!hasMultiParagraphs && hasMultiParagraphs.length > 1;
        },

        modifySelection: function () {
            var selection = this.window.getSelection(),
                selectionRange = selection.getRangeAt(0);

            /*
            * In firefox, there are cases (ie doubleclick of a word) where the selectionRange start
            * will be at the very end of an element.  In other browsers, the selectionRange start
            * would instead be at the very beginning of an element that actually has content.
            * example:
            *   <span>foo</span><span>bar</span>
            *
            * If the text 'bar' is selected, most browsers will have the selectionRange start at the beginning
            * of the 'bar' span.  However, there are cases where firefox will have the selectionRange start
            * at the end of the 'foo' span.  The contenteditable behavior will be ok, but if there are any
            * properties on the 'bar' span, they won't be reflected accurately in the toolbar
            * (ie 'Bold' button wouldn't be active)
            *
            * So, for cases where the selectionRange start is at the end of an element/node, find the next
            * adjacent text node that actually has content in it, and move the selectionRange start there.
            */
            if (this.standardizeSelectionStart &&
                    selectionRange.startContainer.nodeValue &&
                    (selectionRange.startOffset === selectionRange.startContainer.nodeValue.length)) {
                var adjacentNode = MediumEditor.util.findAdjacentTextNodeWithContent(MediumEditor.selection.getSelectionElement(this.window), selectionRange.startContainer, this.document);
                if (adjacentNode) {
                    var offset = 0;
                    while (adjacentNode.nodeValue.substr(offset, 1).trim().length === 0) {
                        offset = offset + 1;
                    }
                    selectionRange = MediumEditor.selection.select(this.document, adjacentNode, offset,
                        selectionRange.endContainer, selectionRange.endOffset);
                }
            }
        },

        checkState: function () {
            if (this.base.preventSelectionUpdates) {
                return;
            }

            // If no editable has focus OR selection is inside contenteditable = false
            // hide toolbar
            if (!this.base.getFocusedElement() ||
                    MediumEditor.selection.selectionInContentEditableFalse(this.window)) {
                return this.hideToolbar();
            }

            // If there's no selection element, selection element doesn't belong to this editor
            // or toolbar is disabled for this selection element
            // hide toolbar
            var selectionElement = MediumEditor.selection.getSelectionElement(this.window);
            if (!selectionElement ||
                    this.getEditorElements().indexOf(selectionElement) === -1 ||
                    selectionElement.getAttribute('data-disable-toolbar')) {
                return this.hideToolbar();
            }

            // Now we know there's a focused editable with a selection

            // If the updateOnEmptySelection option is true, show the toolbar
            if (this.updateOnEmptySelection && this.static) {
                return this.showAndUpdateToolbar();
            }

            // If we don't have a 'valid' selection -> hide toolbar
            if (!MediumEditor.selection.selectionContainsContent(this.document) ||
                (this.allowMultiParagraphSelection === false && this.multipleBlockElementsSelected())) {
                return this.hideToolbar();
            }

            this.showAndUpdateToolbar();
        },

        // Updating the toolbar

        showAndUpdateToolbar: function () {
            this.modifySelection();
            this.setToolbarButtonStates();
            this.trigger('positionToolbar', {}, this.base.getFocusedElement());
            this.showToolbarDefaultActions();
            this.setToolbarPosition();
        },

        setToolbarButtonStates: function () {
            this.forEachExtension(function (extension) {
                if (typeof extension.isActive === 'function' &&
                    typeof extension.setInactive === 'function') {
                    extension.setInactive();
                }
            });

            this.checkActiveButtons();
        },

        checkActiveButtons: function () {
            var manualStateChecks = [],
                queryState = null,
                selectionRange = MediumEditor.selection.getSelectionRange(this.document),
                parentNode,
                updateExtensionState = function (extension) {
                    if (typeof extension.checkState === 'function') {
                        extension.checkState(parentNode);
                    } else if (typeof extension.isActive === 'function' &&
                               typeof extension.isAlreadyApplied === 'function' &&
                               typeof extension.setActive === 'function') {
                        if (!extension.isActive() && extension.isAlreadyApplied(parentNode)) {
                            extension.setActive();
                        }
                    }
                };

            if (!selectionRange) {
                return;
            }

            // Loop through all extensions
            this.forEachExtension(function (extension) {
                // For those extensions where we can use document.queryCommandState(), do so
                if (typeof extension.queryCommandState === 'function') {
                    queryState = extension.queryCommandState();
                    // If queryCommandState returns a valid value, we can trust the browser
                    // and don't need to do our manual checks
                    if (queryState !== null) {
                        if (queryState && typeof extension.setActive === 'function') {
                            extension.setActive();
                        }
                        return;
                    }
                }
                // We can't use queryCommandState for this extension, so add to manualStateChecks
                manualStateChecks.push(extension);
            });

            parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);

            // Make sure the selection parent isn't outside of the contenteditable
            if (!this.getEditorElements().some(function (element) {
                    return MediumEditor.util.isDescendant(element, parentNode, true);
                })) {
                return;
            }

            // Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
            while (parentNode) {
                manualStateChecks.forEach(updateExtensionState);

                // we can abort the search upwards if we leave the contentEditable element
                if (MediumEditor.util.isMediumEditorElement(parentNode)) {
                    break;
                }
                parentNode = parentNode.parentNode;
            }
        },

        // Positioning toolbar

        positionToolbarIfShown: function () {
            if (this.isDisplayed()) {
                this.setToolbarPosition();
            }
        },

        setToolbarPosition: function () {
            var container = this.base.getFocusedElement(),
                selection = this.window.getSelection();

            // If there isn't a valid selection, bail
            if (!container) {
                return this;
            }

            if (this.static || !selection.isCollapsed) {
                this.showToolbar();

                // we don't need any absolute positioning if relativeContainer is set
                if (!this.relativeContainer) {
                    if (this.static) {
                        this.positionStaticToolbar(container);
                    } else {
                        this.positionToolbar(selection);
                    }
                }

                this.trigger('positionedToolbar', {}, this.base.getFocusedElement());
            }
        },

        positionStaticToolbar: function (container) {
            // position the toolbar at left 0, so we can get the real width of the toolbar
            this.getToolbarElement().style.left = '0';

            // document.documentElement for IE 9
            var scrollTop = (this.document.documentElement && this.document.documentElement.scrollTop) || this.document.body.scrollTop,
                windowWidth = this.window.innerWidth,
                toolbarElement = this.getToolbarElement(),
                containerRect = container.getBoundingClientRect(),
                containerTop = containerRect.top + scrollTop,
                containerCenter = (containerRect.left + (containerRect.width / 2)),
                toolbarHeight = toolbarElement.offsetHeight,
                toolbarWidth = toolbarElement.offsetWidth,
                halfOffsetWidth = toolbarWidth / 2,
                targetLeft;

            if (this.sticky) {
                // If it's beyond the height of the editor, position it at the bottom of the editor
                if (scrollTop > (containerTop + container.offsetHeight - toolbarHeight - this.stickyTopOffset)) {
                    toolbarElement.style.top = (containerTop + container.offsetHeight - toolbarHeight) + 'px';
                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');
                // Stick the toolbar to the top of the window
                } else if (scrollTop > (containerTop - toolbarHeight - this.stickyTopOffset)) {
                    toolbarElement.classList.add('medium-editor-sticky-toolbar');
                    toolbarElement.style.top = this.stickyTopOffset + 'px';
                // Normal static toolbar position
                } else {
                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');
                    toolbarElement.style.top = containerTop - toolbarHeight + 'px';
                }
            } else {
                toolbarElement.style.top = containerTop - toolbarHeight + 'px';
            }

            switch (this.align) {
                case 'left':
                    targetLeft = containerRect.left;
                    break;

                case 'right':
                    targetLeft = containerRect.right - toolbarWidth;
                    break;

                case 'center':
                    targetLeft = containerCenter - halfOffsetWidth;
                    break;
            }

            if (targetLeft < 0) {
                targetLeft = 0;
            } else if ((targetLeft + toolbarWidth) > windowWidth) {
                targetLeft = (windowWidth - Math.ceil(toolbarWidth) - 1);
            }

            toolbarElement.style.left = targetLeft + 'px';
        },

        positionToolbar: function (selection) {
            // position the toolbar at left 0, so we can get the real width of the toolbar
            this.getToolbarElement().style.left = '0';
            this.getToolbarElement().style.right = 'initial';

            var range = selection.getRangeAt(0),
                boundary = range.getBoundingClientRect();

            // Handle selections with just images
            if (!boundary || ((boundary.height === 0 && boundary.width === 0) && range.startContainer === range.endContainer)) {
                // If there's a nested image, use that for the bounding rectangle
                if (range.startContainer.nodeType === 1 && range.startContainer.querySelector('img')) {
                    boundary = range.startContainer.querySelector('img').getBoundingClientRect();
                } else {
                    boundary = range.startContainer.getBoundingClientRect();
                }
            }

            var containerWidth = this.window.innerWidth,
                toolbarElement = this.getToolbarElement(),
                toolbarHeight = toolbarElement.offsetHeight,
                toolbarWidth = toolbarElement.offsetWidth,
                halfOffsetWidth = toolbarWidth / 2,
                buttonHeight = 50,
                defaultLeft = this.diffLeft - halfOffsetWidth,
                elementsContainer = this.getEditorOption('elementsContainer'),
                elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
                positions = {},
                relativeBoundary = {},
                middleBoundary, elementsContainerBoundary;

            // If container element is absolute / fixed, recalculate boundaries to be relative to the container
            if (elementsContainerAbsolute) {
                elementsContainerBoundary = elementsContainer.getBoundingClientRect();
                ['top', 'left'].forEach(function (key) {
                    relativeBoundary[key] = boundary[key] - elementsContainerBoundary[key];
                });

                relativeBoundary.width = boundary.width;
                relativeBoundary.height = boundary.height;
                boundary = relativeBoundary;

                containerWidth = elementsContainerBoundary.width;

                // Adjust top position according to container scroll position
                positions.top = elementsContainer.scrollTop;
            } else {
                // Adjust top position according to window scroll position
                positions.top = this.window.pageYOffset;
            }

            middleBoundary = boundary.left + boundary.width / 2;
            positions.top += boundary.top - toolbarHeight;

            if (boundary.top < buttonHeight) {
                toolbarElement.classList.add('medium-toolbar-arrow-over');
                toolbarElement.classList.remove('medium-toolbar-arrow-under');
                positions.top += buttonHeight + boundary.height - this.diffTop;
            } else {
                toolbarElement.classList.add('medium-toolbar-arrow-under');
                toolbarElement.classList.remove('medium-toolbar-arrow-over');
                positions.top += this.diffTop;
            }

            if (middleBoundary < halfOffsetWidth) {
                positions.left = defaultLeft + halfOffsetWidth;
                positions.right = 'initial';
            } else if ((containerWidth - middleBoundary) < halfOffsetWidth) {
                positions.left = 'auto';
                positions.right = 0;
            } else {
                positions.left = defaultLeft + middleBoundary;
                positions.right = 'initial';
            }

            ['top', 'left', 'right'].forEach(function (key) {
                toolbarElement.style[key] = positions[key] + (isNaN(positions[key]) ? '' : 'px');
            });
        }
    });

    MediumEditor.extensions.toolbar = Toolbar;
}());

(function () {
    'use strict';

    var ImageDragging = MediumEditor.Extension.extend({
        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.subscribe('editableDrag', this.handleDrag.bind(this));
            this.subscribe('editableDrop', this.handleDrop.bind(this));
        },

        handleDrag: function (event) {
            var className = 'medium-editor-dragover';
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

            if (event.type === 'dragover') {
                event.target.classList.add(className);
            } else if (event.type === 'dragleave') {
                event.target.classList.remove(className);
            }
        },

        handleDrop: function (event) {
            var className = 'medium-editor-dragover',
                files;
            event.preventDefault();
            event.stopPropagation();

            // IE9 does not support the File API, so prevent file from opening in a new window
            // but also don't try to actually get the file
            if (event.dataTransfer.files) {
                files = Array.prototype.slice.call(event.dataTransfer.files, 0);
                files.some(function (file) {
                    if (file.type.match('image')) {
                        var fileReader, id;
                        fileReader = new FileReader();
                        fileReader.readAsDataURL(file);

                        id = 'medium-img-' + (+new Date());
                        MediumEditor.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + id + '" />');

                        fileReader.onload = function () {
                            var img = this.document.getElementById(id);
                            if (img) {
                                img.removeAttribute('id');
                                img.removeAttribute('class');
                                img.src = fileReader.result;
                            }
                        }.bind(this);
                    }
                }.bind(this));
            }
            event.target.classList.remove(className);
        }
    });

    MediumEditor.extensions.imageDragging = ImageDragging;
}());

(function () {
    'use strict';

    // Event handlers that shouldn't be exposed externally

    function handleDisableExtraSpaces(event) {
        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            textContent = node.textContent,
            caretPositions = MediumEditor.selection.getCaretOffsets(node);

        if ((textContent[caretPositions.left - 1] === undefined) || (textContent[caretPositions.left - 1].trim() === '') || (textContent[caretPositions.left] !== undefined && textContent[caretPositions.left].trim() === '')) {
            event.preventDefault();
        }
    }

    function handleDisabledEnterKeydown(event, element) {
        if (this.options.disableReturn || element.getAttribute('data-disable-return')) {
            event.preventDefault();
        } else if (this.options.disableDoubleReturn || element.getAttribute('data-disable-double-return')) {
            var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument);

            // if current text selection is empty OR previous sibling text is empty OR it is not a list
            if ((node && node.textContent.trim() === '' && node.nodeName.toLowerCase() !== 'li') ||
                (node.previousElementSibling && node.previousElementSibling.nodeName.toLowerCase() !== 'br' &&
                 node.previousElementSibling.textContent.trim() === '')) {
                event.preventDefault();
            }
        }
    }

    function handleTabKeydown(event) {
        // Override tab only for pre nodes
        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            tag = node && node.nodeName.toLowerCase();

        if (tag === 'pre') {
            event.preventDefault();
            MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, '    ');
        }

        // Tab to indent list structures!
        if (MediumEditor.util.isListItem(node)) {
            event.preventDefault();

            // If Shift is down, outdent, otherwise indent
            if (event.shiftKey) {
                this.options.ownerDocument.execCommand('outdent', false, null);
            } else {
                this.options.ownerDocument.execCommand('indent', false, null);
            }
        }
    }

    function handleBlockDeleteKeydowns(event) {
        var p, node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            tagName = node.nodeName.toLowerCase(),
            isEmpty = /^(\s+|<br\/?>)?$/i,
            isHeader = /h\d/i;

        if (MediumEditor.util.isKey(event, [MediumEditor.util.keyCode.BACKSPACE, MediumEditor.util.keyCode.ENTER]) &&
                // has a preceeding sibling
                node.previousElementSibling &&
                // in a header
                isHeader.test(tagName) &&
                // at the very end of the block
                MediumEditor.selection.getCaretOffsets(node).left === 0) {
            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) && isEmpty.test(node.previousElementSibling.innerHTML)) {
                // backspacing the begining of a header into an empty previous element will
                // change the tagName of the current node to prevent one
                // instead delete previous node and cancel the event.
                node.previousElementSibling.parentNode.removeChild(node.previousElementSibling);
                event.preventDefault();
            } else if (!this.options.disableDoubleReturn && MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER)) {
                // hitting return in the begining of a header will create empty header elements before the current one
                // instead, make "<p><br></p>" element, which are what happens if you hit return in an empty paragraph
                p = this.options.ownerDocument.createElement('p');
                p.innerHTML = '<br>';
                node.previousElementSibling.parentNode.insertBefore(p, node);
                event.preventDefault();
            }
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.DELETE) &&
                    // between two sibling elements
                    node.nextElementSibling &&
                    node.previousElementSibling &&
                    // not in a header
                    !isHeader.test(tagName) &&
                    // in an empty tag
                    isEmpty.test(node.innerHTML) &&
                    // when the next tag *is* a header
                    isHeader.test(node.nextElementSibling.nodeName.toLowerCase())) {
            // hitting delete in an empty element preceding a header, ex:
            //  <p>[CURSOR]</p><h1>Header</h1>
            // Will cause the h1 to become a paragraph.
            // Instead, delete the paragraph node and move the cursor to the begining of the h1

            // remove node and move cursor to start of header
            MediumEditor.selection.moveCursor(this.options.ownerDocument, node.nextElementSibling);

            node.previousElementSibling.parentNode.removeChild(node);

            event.preventDefault();
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
                tagName === 'li' &&
                // hitting backspace inside an empty li
                isEmpty.test(node.innerHTML) &&
                // is first element (no preceeding siblings)
                !node.previousElementSibling &&
                // parent also does not have a sibling
                !node.parentElement.previousElementSibling &&
                // is not the only li in a list
                node.nextElementSibling &&
                node.nextElementSibling.nodeName.toLowerCase() === 'li') {
            // backspacing in an empty first list element in the first list (with more elements) ex:
            //  <ul><li>[CURSOR]</li><li>List Item 2</li></ul>
            // will remove the first <li> but add some extra element before (varies based on browser)
            // Instead, this will:
            // 1) remove the list element
            // 2) create a paragraph before the list
            // 3) move the cursor into the paragraph

            // create a paragraph before the list
            p = this.options.ownerDocument.createElement('p');
            p.innerHTML = '<br>';
            node.parentElement.parentElement.insertBefore(p, node.parentElement);

            // move the cursor into the new paragraph
            MediumEditor.selection.moveCursor(this.options.ownerDocument, p);

            // remove the list element
            node.parentElement.removeChild(node);

            event.preventDefault();
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
                (MediumEditor.util.getClosestTag(node, 'blockquote') !== false) &&
                MediumEditor.selection.getCaretOffsets(node).left === 0) {

            // when cursor is at the begining of the element and the element is <blockquote>
            // then pressing backspace key should change the <blockquote> to a <p> tag
            event.preventDefault();
            MediumEditor.util.execFormatBlock(this.options.ownerDocument, 'p');
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) &&
                (MediumEditor.util.getClosestTag(node, 'blockquote') !== false) &&
                MediumEditor.selection.getCaretOffsets(node).right === 0) {

            // when cursor is at the end of <blockquote>,
            // then pressing enter key should create <p> tag, not <blockquote>
            p = this.options.ownerDocument.createElement('p');
            p.innerHTML = '<br>';
            node.parentElement.insertBefore(p, node.nextSibling);

            // move the cursor into the new paragraph
            MediumEditor.selection.moveCursor(this.options.ownerDocument, p);

            event.preventDefault();
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
                MediumEditor.util.isMediumEditorElement(node.parentElement) &&
                !node.previousElementSibling &&
                node.nextElementSibling &&
                isEmpty.test(node.innerHTML)) {

            // when cursor is in the first element, it's empty and user presses backspace,
            // do delete action instead to get rid of the first element and move caret to 2nd
            event.preventDefault();
            MediumEditor.selection.moveCursor(this.options.ownerDocument, node.nextSibling);
            node.parentElement.removeChild(node);
        }
    }

    function handleKeyup(event) {
        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            tagName;

        if (!node) {
            return;
        }

        // https://github.com/yabwe/medium-editor/issues/994
        // Firefox thrown an error when calling `formatBlock` on an empty editable blockContainer that's not a <div>
        if (MediumEditor.util.isMediumEditorElement(node) && node.children.length === 0 && !MediumEditor.util.isBlockContainer(node)) {
            this.options.ownerDocument.execCommand('formatBlock', false, 'p');
        }

        // https://github.com/yabwe/medium-editor/issues/834
        // https://github.com/yabwe/medium-editor/pull/382
        // Don't call format block if this is a block element (ie h1, figCaption, etc.)
        if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) &&
            !MediumEditor.util.isListItem(node) &&
            !MediumEditor.util.isBlockContainer(node)) {

            tagName = node.nodeName.toLowerCase();
            // For anchor tags, unlink
            if (tagName === 'a') {
                this.options.ownerDocument.execCommand('unlink', false, null);
            } else if (!event.shiftKey && !event.ctrlKey) {
                this.options.ownerDocument.execCommand('formatBlock', false, 'p');
            }
        }
    }

    function handleEditableInput(event, editable) {
        var textarea = editable.parentNode.querySelector('textarea[medium-editor-textarea-id="' + editable.getAttribute('medium-editor-textarea-id') + '"]');
        if (textarea) {
            textarea.value = editable.innerHTML.trim();
        }
    }

    // Internal helper methods which shouldn't be exposed externally

    function addToEditors(win) {
        if (!win._mediumEditors) {
            // To avoid breaking users who are assuming that the unique id on
            // medium-editor elements will start at 1, inserting a 'null' in the
            // array so the unique-id can always map to the index of the editor instance
            win._mediumEditors = [null];
        }

        // If this already has a unique id, re-use it
        if (!this.id) {
            this.id = win._mediumEditors.length;
        }

        win._mediumEditors[this.id] = this;
    }

    function removeFromEditors(win) {
        if (!win._mediumEditors || !win._mediumEditors[this.id]) {
            return;
        }

        /* Setting the instance to null in the array instead of deleting it allows:
         * 1) Each instance to preserve its own unique-id, even after being destroyed
         *    and initialized again
         * 2) The unique-id to always correspond to an index in the array of medium-editor
         *    instances. Thus, we will be able to look at a contenteditable, and determine
         *    which instance it belongs to, by indexing into the global array.
         */
        win._mediumEditors[this.id] = null;
    }

    function createElementsArray(selector, doc, filterEditorElements) {
        var elements = [];

        if (!selector) {
            selector = [];
        }
        // If string, use as query selector
        if (typeof selector === 'string') {
            selector = doc.querySelectorAll(selector);
        }
        // If element, put into array
        if (MediumEditor.util.isElement(selector)) {
            selector = [selector];
        }

        if (filterEditorElements) {
            // Remove elements that have already been initialized by the editor
            // selecotr might not be an array (ie NodeList) so use for loop
            for (var i = 0; i < selector.length; i++) {
                var el = selector[i];
                if (MediumEditor.util.isElement(el) &&
                    !el.getAttribute('data-medium-editor-element') &&
                    !el.getAttribute('medium-editor-textarea-id')) {
                    elements.push(el);
                }
            }
        } else {
            // Convert NodeList (or other array like object) into an array
            elements = Array.prototype.slice.apply(selector);
        }

        return elements;
    }

    function cleanupTextareaElement(element) {
        var textarea = element.parentNode.querySelector('textarea[medium-editor-textarea-id="' + element.getAttribute('medium-editor-textarea-id') + '"]');
        if (textarea) {
            // Un-hide the textarea
            textarea.classList.remove('medium-editor-hidden');
            textarea.removeAttribute('medium-editor-textarea-id');
        }
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    function setExtensionDefaults(extension, defaults) {
        Object.keys(defaults).forEach(function (prop) {
            if (extension[prop] === undefined) {
                extension[prop] = defaults[prop];
            }
        });
        return extension;
    }

    function initExtension(extension, name, instance) {
        var extensionDefaults = {
            'window': instance.options.contentWindow,
            'document': instance.options.ownerDocument,
            'base': instance
        };

        // Add default options into the extension
        extension = setExtensionDefaults(extension, extensionDefaults);

        // Call init on the extension
        if (typeof extension.init === 'function') {
            extension.init();
        }

        // Set extension name (if not already set)
        if (!extension.name) {
            extension.name = name;
        }
        return extension;
    }

    function isToolbarEnabled() {
        // If any of the elements don't have the toolbar disabled
        // We need a toolbar
        if (this.elements.every(function (element) {
                return !!element.getAttribute('data-disable-toolbar');
            })) {
            return false;
        }

        return this.options.toolbar !== false;
    }

    function isAnchorPreviewEnabled() {
        // If toolbar is disabled, don't add
        if (!isToolbarEnabled.call(this)) {
            return false;
        }

        return this.options.anchorPreview !== false;
    }

    function isPlaceholderEnabled() {
        return this.options.placeholder !== false;
    }

    function isAutoLinkEnabled() {
        return this.options.autoLink !== false;
    }

    function isImageDraggingEnabled() {
        return this.options.imageDragging !== false;
    }

    function isKeyboardCommandsEnabled() {
        return this.options.keyboardCommands !== false;
    }

    function shouldUseFileDraggingExtension() {
        // Since the file-dragging extension replaces the image-dragging extension,
        // we need to check if the user passed an overrided image-dragging extension.
        // If they have, to avoid breaking users, we won't use file-dragging extension.
        return !this.options.extensions['imageDragging'];
    }

    function createContentEditable(textarea) {
        var div = this.options.ownerDocument.createElement('div'),
            now = Date.now(),
            uniqueId = 'medium-editor-' + now,
            atts = textarea.attributes;

        // Some browsers can move pretty fast, since we're using a timestamp
        // to make a unique-id, ensure that the id is actually unique on the page
        while (this.options.ownerDocument.getElementById(uniqueId)) {
            now++;
            uniqueId = 'medium-editor-' + now;
        }

        div.className = textarea.className;
        div.id = uniqueId;
        div.innerHTML = textarea.value;

        textarea.setAttribute('medium-editor-textarea-id', uniqueId);

        // re-create all attributes from the textearea to the new created div
        for (var i = 0, n = atts.length; i < n; i++) {
            // do not re-create existing attributes
            if (!div.hasAttribute(atts[i].nodeName)) {
                div.setAttribute(atts[i].nodeName, atts[i].nodeValue);
            }
        }

        // If textarea has a form, listen for reset on the form to clear
        // the content of the created div
        if (textarea.form) {
            this.on(textarea.form, 'reset', function (event) {
                if (!event.defaultPrevented) {
                    this.resetContent(this.options.ownerDocument.getElementById(uniqueId));
                }
            }.bind(this));
        }

        textarea.classList.add('medium-editor-hidden');
        textarea.parentNode.insertBefore(
            div,
            textarea
        );

        return div;
    }

    function initElement(element, editorId) {
        if (!element.getAttribute('data-medium-editor-element')) {
            if (element.nodeName.toLowerCase() === 'textarea') {
                element = createContentEditable.call(this, element);

                // Make sure we only attach to editableInput once for <textarea> elements
                if (!this.instanceHandleEditableInput) {
                    this.instanceHandleEditableInput = handleEditableInput.bind(this);
                    this.subscribe('editableInput', this.instanceHandleEditableInput);
                }
            }

            if (!this.options.disableEditing && !element.getAttribute('data-disable-editing')) {
                element.setAttribute('contentEditable', true);
                element.setAttribute('spellcheck', this.options.spellcheck);
            }

            // Make sure we only attach to editableKeydownEnter once for disable-return options
            if (!this.instanceHandleEditableKeydownEnter) {
                if (element.getAttribute('data-disable-return') || element.getAttribute('data-disable-double-return')) {
                    this.instanceHandleEditableKeydownEnter = handleDisabledEnterKeydown.bind(this);
                    this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter);
                }
            }

            // if we're not disabling return, add a handler to help handle cleanup
            // for certain cases when enter is pressed
            if (!this.options.disableReturn && !element.getAttribute('data-disable-return')) {
                this.on(element, 'keyup', handleKeyup.bind(this));
            }

            var elementId = MediumEditor.util.guid();

            element.setAttribute('data-medium-editor-element', true);
            element.classList.add('medium-editor-element');
            element.setAttribute('role', 'textbox');
            element.setAttribute('aria-multiline', true);
            element.setAttribute('data-medium-editor-editor-index', editorId);
            // TODO: Merge data-medium-editor-element and medium-editor-index attributes for 6.0.0
            // medium-editor-index is not named correctly anymore and can be re-purposed to signify
            // whether the element has been initialized or not
            element.setAttribute('medium-editor-index', elementId);
            initialContent[elementId] = element.innerHTML;

            this.events.attachAllEventsToElement(element);
        }

        return element;
    }

    function attachHandlers() {
        // attach to tabs
        this.subscribe('editableKeydownTab', handleTabKeydown.bind(this));

        // Bind keys which can create or destroy a block element: backspace, delete, return
        this.subscribe('editableKeydownDelete', handleBlockDeleteKeydowns.bind(this));
        this.subscribe('editableKeydownEnter', handleBlockDeleteKeydowns.bind(this));

        // Bind double space event
        if (this.options.disableExtraSpaces) {
            this.subscribe('editableKeydownSpace', handleDisableExtraSpaces.bind(this));
        }

        // Make sure we only attach to editableKeydownEnter once for disable-return options
        if (!this.instanceHandleEditableKeydownEnter) {
            // disabling return or double return
            if (this.options.disableReturn || this.options.disableDoubleReturn) {
                this.instanceHandleEditableKeydownEnter = handleDisabledEnterKeydown.bind(this);
                this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter);
            }
        }
    }

    function initExtensions() {

        this.extensions = [];

        // Passed in extensions
        Object.keys(this.options.extensions).forEach(function (name) {
            // Always save the toolbar extension for last
            if (name !== 'toolbar' && this.options.extensions[name]) {
                this.extensions.push(initExtension(this.options.extensions[name], name, this));
            }
        }, this);

        // 4 Cases for imageDragging + fileDragging extensons:
        //
        // 1. ImageDragging ON + No Custom Image Dragging Extension:
        //    * Use fileDragging extension (default options)
        // 2. ImageDragging OFF + No Custom Image Dragging Extension:
        //    * Use fileDragging extension w/ images turned off
        // 3. ImageDragging ON + Custom Image Dragging Extension:
        //    * Don't use fileDragging (could interfere with custom image dragging extension)
        // 4. ImageDragging OFF + Custom Image Dragging:
        //    * Don't use fileDragging (could interfere with custom image dragging extension)
        if (shouldUseFileDraggingExtension.call(this)) {
            var opts = this.options.fileDragging;
            if (!opts) {
                opts = {};

                // Image is in the 'allowedTypes' list by default.
                // If imageDragging is off override the 'allowedTypes' list with an empty one
                if (!isImageDraggingEnabled.call(this)) {
                    opts.allowedTypes = [];
                }
            }
            this.addBuiltInExtension('fileDragging', opts);
        }

        // Built-in extensions
        var builtIns = {
            paste: true,
            'anchor-preview': isAnchorPreviewEnabled.call(this),
            autoLink: isAutoLinkEnabled.call(this),
            keyboardCommands: isKeyboardCommandsEnabled.call(this),
            placeholder: isPlaceholderEnabled.call(this)
        };
        Object.keys(builtIns).forEach(function (name) {
            if (builtIns[name]) {
                this.addBuiltInExtension(name);
            }
        }, this);

        // Users can pass in a custom toolbar extension
        // so check for that first and if it's not present
        // just create the default toolbar
        var toolbarExtension = this.options.extensions['toolbar'];
        if (!toolbarExtension && isToolbarEnabled.call(this)) {
            // Backwards compatability
            var toolbarOptions = MediumEditor.util.extend({}, this.options.toolbar, {
                allowMultiParagraphSelection: this.options.allowMultiParagraphSelection // deprecated
            });
            toolbarExtension = new MediumEditor.extensions.toolbar(toolbarOptions);
        }

        // If the toolbar is not disabled, so we actually have an extension
        // initialize it and add it to the extensions array
        if (toolbarExtension) {
            this.extensions.push(initExtension(toolbarExtension, 'toolbar', this));
        }
    }

    function mergeOptions(defaults, options) {
        var deprecatedProperties = [
            ['allowMultiParagraphSelection', 'toolbar.allowMultiParagraphSelection']
        ];
        // warn about using deprecated properties
        if (options) {
            deprecatedProperties.forEach(function (pair) {
                if (options.hasOwnProperty(pair[0]) && options[pair[0]] !== undefined) {
                    MediumEditor.util.deprecated(pair[0], pair[1], 'v6.0.0');
                }
            });
        }

        return MediumEditor.util.defaults({}, options, defaults);
    }

    function execActionInternal(action, opts) {
        /*jslint regexp: true*/
        var appendAction = /^append-(.+)$/gi,
            justifyAction = /justify([A-Za-z]*)$/g, /* Detecting if is justifyCenter|Right|Left */
            match,
            cmdValueArgument;
        /*jslint regexp: false*/

        // Actions starting with 'append-' should attempt to format a block of text ('formatBlock') using a specific
        // type of block element (ie append-blockquote, append-h1, append-pre, etc.)
        match = appendAction.exec(action);
        if (match) {
            return MediumEditor.util.execFormatBlock(this.options.ownerDocument, match[1]);
        }

        if (action === 'fontSize') {
            // TODO: Deprecate support for opts.size in 6.0.0
            if (opts.size) {
                MediumEditor.util.deprecated('.size option for fontSize command', '.value', '6.0.0');
            }
            cmdValueArgument = opts.value || opts.size;
            return this.options.ownerDocument.execCommand('fontSize', false, cmdValueArgument);
        }

        if (action === 'fontName') {
            // TODO: Deprecate support for opts.name in 6.0.0
            if (opts.name) {
                MediumEditor.util.deprecated('.name option for fontName command', '.value', '6.0.0');
            }
            cmdValueArgument = opts.value || opts.name;
            return this.options.ownerDocument.execCommand('fontName', false, cmdValueArgument);
        }

        if (action === 'createLink') {
            return this.createLink(opts);
        }

        if (action === 'image') {
            var src = this.options.contentWindow.getSelection().toString().trim();
            return this.options.ownerDocument.execCommand('insertImage', false, src);
        }

        if (action === 'html') {
            var html = this.options.contentWindow.getSelection().toString().trim();
            return MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, html);
        }

        /* Issue: https://github.com/yabwe/medium-editor/issues/595
         * If the action is to justify the text */
        if (justifyAction.exec(action)) {
            var result = this.options.ownerDocument.execCommand(action, false, null),
                parentNode = MediumEditor.selection.getSelectedParentElement(MediumEditor.selection.getSelectionRange(this.options.ownerDocument));
            if (parentNode) {
                cleanupJustifyDivFragments.call(this, MediumEditor.util.getTopBlockContainer(parentNode));
            }

            return result;
        }

        cmdValueArgument = opts && opts.value;
        return this.options.ownerDocument.execCommand(action, false, cmdValueArgument);
    }

    /* If we've just justified text within a container block
     * Chrome may have removed <br> elements and instead wrapped lines in <div> elements
     * with a text-align property.  If so, we want to fix this
     */
    function cleanupJustifyDivFragments(blockContainer) {
        if (!blockContainer) {
            return;
        }

        var textAlign,
            childDivs = Array.prototype.slice.call(blockContainer.childNodes).filter(function (element) {
                var isDiv = element.nodeName.toLowerCase() === 'div';
                if (isDiv && !textAlign) {
                    textAlign = element.style.textAlign;
                }
                return isDiv;
            });

        /* If we found child <div> elements with text-align style attributes
         * we should fix this by:
         *
         * 1) Unwrapping each <div> which has a text-align style
         * 2) Insert a <br> element after each set of 'unwrapped' div children
         * 3) Set the text-align style of the parent block element
         */
        if (childDivs.length) {
            // Since we're mucking with the HTML, preserve selection
            this.saveSelection();
            childDivs.forEach(function (div) {
                if (div.style.textAlign === textAlign) {
                    var lastChild = div.lastChild;
                    if (lastChild) {
                        // Instead of a div, extract the child elements and add a <br>
                        MediumEditor.util.unwrap(div, this.options.ownerDocument);
                        var br = this.options.ownerDocument.createElement('BR');
                        lastChild.parentNode.insertBefore(br, lastChild.nextSibling);
                    }
                }
            }, this);
            blockContainer.style.textAlign = textAlign;
            // We're done, so restore selection
            this.restoreSelection();
        }
    }

    var initialContent = {};

    MediumEditor.prototype = {
        // NOT DOCUMENTED - exposed for backwards compatability
        init: function (elements, options) {
            this.options = mergeOptions.call(this, this.defaults, options);
            this.origElements = elements;

            if (!this.options.elementsContainer) {
                this.options.elementsContainer = this.options.ownerDocument.body;
            }

            return this.setup();
        },

        setup: function () {
            if (this.isActive) {
                return;
            }

            addToEditors.call(this, this.options.contentWindow);
            this.events = new MediumEditor.Events(this);
            this.elements = [];

            this.addElements(this.origElements);

            if (this.elements.length === 0) {
                return;
            }

            this.isActive = true;

            // Call initialization helpers
            initExtensions.call(this);
            attachHandlers.call(this);
        },

        destroy: function () {
            if (!this.isActive) {
                return;
            }

            this.isActive = false;

            this.extensions.forEach(function (extension) {
                if (typeof extension.destroy === 'function') {
                    extension.destroy();
                }
            }, this);

            this.events.destroy();

            this.elements.forEach(function (element) {
                // Reset elements content, fix for issue where after editor destroyed the red underlines on spelling errors are left
                if (this.options.spellcheck) {
                    element.innerHTML = element.innerHTML;
                }

                // cleanup extra added attributes
                element.removeAttribute('contentEditable');
                element.removeAttribute('spellcheck');
                element.removeAttribute('data-medium-editor-element');
                element.classList.remove('medium-editor-element');
                element.removeAttribute('role');
                element.removeAttribute('aria-multiline');
                element.removeAttribute('medium-editor-index');
                element.removeAttribute('data-medium-editor-editor-index');

                // Remove any elements created for textareas
                if (element.getAttribute('medium-editor-textarea-id')) {
                    cleanupTextareaElement(element);
                }
            }, this);
            this.elements = [];
            this.instanceHandleEditableKeydownEnter = null;
            this.instanceHandleEditableInput = null;

            removeFromEditors.call(this, this.options.contentWindow);
        },

        on: function (target, event, listener, useCapture) {
            this.events.attachDOMEvent(target, event, listener, useCapture);

            return this;
        },

        off: function (target, event, listener, useCapture) {
            this.events.detachDOMEvent(target, event, listener, useCapture);

            return this;
        },

        subscribe: function (event, listener) {
            this.events.attachCustomEvent(event, listener);

            return this;
        },

        unsubscribe: function (event, listener) {
            this.events.detachCustomEvent(event, listener);

            return this;
        },

        trigger: function (name, data, editable) {
            this.events.triggerCustomEvent(name, data, editable);

            return this;
        },

        delay: function (fn) {
            var self = this;
            return setTimeout(function () {
                if (self.isActive) {
                    fn();
                }
            }, this.options.delay);
        },

        serialize: function () {
            var i,
                elementid,
                content = {},
                len = this.elements.length;

            for (i = 0; i < len; i += 1) {
                elementid = (this.elements[i].id !== '') ? this.elements[i].id : 'element-' + i;
                content[elementid] = {
                    value: this.elements[i].innerHTML.trim()
                };
            }
            return content;
        },

        getExtensionByName: function (name) {
            var extension;
            if (this.extensions && this.extensions.length) {
                this.extensions.some(function (ext) {
                    if (ext.name === name) {
                        extension = ext;
                        return true;
                    }
                    return false;
                });
            }
            return extension;
        },

        /**
         * NOT DOCUMENTED - exposed as a helper for other extensions to use
         */
        addBuiltInExtension: function (name, opts) {
            var extension = this.getExtensionByName(name),
                merged;
            if (extension) {
                return extension;
            }

            switch (name) {
                case 'anchor':
                    merged = MediumEditor.util.extend({}, this.options.anchor, opts);
                    extension = new MediumEditor.extensions.anchor(merged);
                    break;
                case 'anchor-preview':
                    extension = new MediumEditor.extensions.anchorPreview(this.options.anchorPreview);
                    break;
                case 'autoLink':
                    extension = new MediumEditor.extensions.autoLink();
                    break;
                case 'fileDragging':
                    extension = new MediumEditor.extensions.fileDragging(opts);
                    break;
                case 'fontname':
                    extension = new MediumEditor.extensions.fontName(this.options.fontName);
                    break;
                case 'fontsize':
                    extension = new MediumEditor.extensions.fontSize(opts);
                    break;
                case 'keyboardCommands':
                    extension = new MediumEditor.extensions.keyboardCommands(this.options.keyboardCommands);
                    break;
                case 'paste':
                    extension = new MediumEditor.extensions.paste(this.options.paste);
                    break;
                case 'placeholder':
                    extension = new MediumEditor.extensions.placeholder(this.options.placeholder);
                    break;
                default:
                    // All of the built-in buttons for MediumEditor are extensions
                    // so check to see if the extension we're creating is a built-in button
                    if (MediumEditor.extensions.button.isBuiltInButton(name)) {
                        if (opts) {
                            merged = MediumEditor.util.defaults({}, opts, MediumEditor.extensions.button.prototype.defaults[name]);
                            extension = new MediumEditor.extensions.button(merged);
                        } else {
                            extension = new MediumEditor.extensions.button(name);
                        }
                    }
            }

            if (extension) {
                this.extensions.push(initExtension(extension, name, this));
            }

            return extension;
        },

        stopSelectionUpdates: function () {
            this.preventSelectionUpdates = true;
        },

        startSelectionUpdates: function () {
            this.preventSelectionUpdates = false;
        },

        checkSelection: function () {
            var toolbar = this.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.checkState();
            }
            return this;
        },

        // Wrapper around document.queryCommandState for checking whether an action has already
        // been applied to the current selection
        queryCommandState: function (action) {
            var fullAction = /^full-(.+)$/gi,
                match,
                queryState = null;

            // Actions starting with 'full-' need to be modified since this is a medium-editor concept
            match = fullAction.exec(action);
            if (match) {
                action = match[1];
            }

            try {
                queryState = this.options.ownerDocument.queryCommandState(action);
            } catch (exc) {
                queryState = null;
            }

            return queryState;
        },

        execAction: function (action, opts) {
            /*jslint regexp: true*/
            var fullAction = /^full-(.+)$/gi,
                match,
                result;
            /*jslint regexp: false*/

            // Actions starting with 'full-' should be applied to to the entire contents of the editable element
            // (ie full-bold, full-append-pre, etc.)
            match = fullAction.exec(action);
            if (match) {
                // Store the current selection to be restored after applying the action
                this.saveSelection();
                // Select all of the contents before calling the action
                this.selectAllContents();
                result = execActionInternal.call(this, match[1], opts);
                // Restore the previous selection
                this.restoreSelection();
            } else {
                result = execActionInternal.call(this, action, opts);
            }

            // do some DOM clean-up for known browser issues after the action
            if (action === 'insertunorderedlist' || action === 'insertorderedlist') {
                MediumEditor.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement());
            }

            this.checkSelection();
            return result;
        },

        getSelectedParentElement: function (range) {
            if (range === undefined) {
                range = this.options.contentWindow.getSelection().getRangeAt(0);
            }
            return MediumEditor.selection.getSelectedParentElement(range);
        },

        selectAllContents: function () {
            var currNode = MediumEditor.selection.getSelectionElement(this.options.contentWindow);

            if (currNode) {
                // Move to the lowest descendant node that still selects all of the contents
                while (currNode.children.length === 1) {
                    currNode = currNode.children[0];
                }

                this.selectElement(currNode);
            }
        },

        selectElement: function (element) {
            MediumEditor.selection.selectNode(element, this.options.ownerDocument);

            var selElement = MediumEditor.selection.getSelectionElement(this.options.contentWindow);
            if (selElement) {
                this.events.focusElement(selElement);
            }
        },

        getFocusedElement: function () {
            var focused;
            this.elements.some(function (element) {
                // Find the element that has focus
                if (!focused && element.getAttribute('data-medium-focused')) {
                    focused = element;
                }

                // bail if we found the element that had focus
                return !!focused;
            }, this);

            return focused;
        },

        // Export the state of the selection in respect to one of this
        // instance of MediumEditor's elements
        exportSelection: function () {
            var selectionElement = MediumEditor.selection.getSelectionElement(this.options.contentWindow),
                editableElementIndex = this.elements.indexOf(selectionElement),
                selectionState = null;

            if (editableElementIndex >= 0) {
                selectionState = MediumEditor.selection.exportSelection(selectionElement, this.options.ownerDocument);
            }

            if (selectionState !== null && editableElementIndex !== 0) {
                selectionState.editableElementIndex = editableElementIndex;
            }

            return selectionState;
        },

        saveSelection: function () {
            this.selectionState = this.exportSelection();
        },

        // Restore a selection based on a selectionState returned by a call
        // to MediumEditor.exportSelection
        importSelection: function (selectionState, favorLaterSelectionAnchor) {
            if (!selectionState) {
                return;
            }

            var editableElement = this.elements[selectionState.editableElementIndex || 0];
            MediumEditor.selection.importSelection(selectionState, editableElement, this.options.ownerDocument, favorLaterSelectionAnchor);
        },

        restoreSelection: function () {
            this.importSelection(this.selectionState);
        },

        createLink: function (opts) {
            var currentEditor = MediumEditor.selection.getSelectionElement(this.options.contentWindow),
                customEvent = {},
                targetUrl;

            // Make sure the selection is within an element this editor is tracking
            if (this.elements.indexOf(currentEditor) === -1) {
                return;
            }

            try {
                this.events.disableCustomEvent('editableInput');
                // TODO: Deprecate support for opts.url in 6.0.0
                if (opts.url) {
                    MediumEditor.util.deprecated('.url option for createLink', '.value', '6.0.0');
                }
                targetUrl = opts.url || opts.value;
                if (targetUrl && targetUrl.trim().length > 0) {
                    var currentSelection = this.options.contentWindow.getSelection();
                    if (currentSelection) {
                        var currRange = currentSelection.getRangeAt(0),
                            commonAncestorContainer = currRange.commonAncestorContainer,
                            exportedSelection,
                            startContainerParentElement,
                            endContainerParentElement,
                            textNodes;

                        // If the selection is contained within a single text node
                        // and the selection starts at the beginning of the text node,
                        // MSIE still says the startContainer is the parent of the text node.
                        // If the selection is contained within a single text node, we
                        // want to just use the default browser 'createLink', so we need
                        // to account for this case and adjust the commonAncestorContainer accordingly
                        if (currRange.endContainer.nodeType === 3 &&
                            currRange.startContainer.nodeType !== 3 &&
                            currRange.startOffset === 0 &&
                            currRange.startContainer.firstChild === currRange.endContainer) {
                            commonAncestorContainer = currRange.endContainer;
                        }

                        startContainerParentElement = MediumEditor.util.getClosestBlockContainer(currRange.startContainer);
                        endContainerParentElement = MediumEditor.util.getClosestBlockContainer(currRange.endContainer);

                        // If the selection is not contained within a single text node
                        // but the selection is contained within the same block element
                        // we want to make sure we create a single link, and not multiple links
                        // which can happen with the built in browser functionality
                        if (commonAncestorContainer.nodeType !== 3 && commonAncestorContainer.textContent.length !== 0 && startContainerParentElement === endContainerParentElement) {
                            var parentElement = (startContainerParentElement || currentEditor),
                                fragment = this.options.ownerDocument.createDocumentFragment();

                            // since we are going to create a link from an extracted text,
                            // be sure that if we are updating a link, we won't let an empty link behind (see #754)
                            // (Workaroung for Chrome)
                            this.execAction('unlink');

                            exportedSelection = this.exportSelection();
                            fragment.appendChild(parentElement.cloneNode(true));

                            if (currentEditor === parentElement) {
                                // We have to avoid the editor itself being wiped out when it's the only block element,
                                // as our reference inside this.elements gets detached from the page when insertHTML runs.
                                // If we just use [parentElement, 0] and [parentElement, parentElement.childNodes.length]
                                // as the range boundaries, this happens whenever parentElement === currentEditor.
                                // The tradeoff to this workaround is that a orphaned tag can sometimes be left behind at
                                // the end of the editor's content.
                                // In Gecko:
                                // as an empty <strong></strong> if parentElement.lastChild is a <strong> tag.
                                // In WebKit:
                                // an invented <br /> tag at the end in the same situation
                                MediumEditor.selection.select(
                                    this.options.ownerDocument,
                                    parentElement.firstChild,
                                    0,
                                    parentElement.lastChild,
                                    parentElement.lastChild.nodeType === 3 ?
                                    parentElement.lastChild.nodeValue.length : parentElement.lastChild.childNodes.length
                                );
                            } else {
                                MediumEditor.selection.select(
                                    this.options.ownerDocument,
                                    parentElement,
                                    0,
                                    parentElement,
                                    parentElement.childNodes.length
                                );
                            }

                            var modifiedExportedSelection = this.exportSelection();

                            textNodes = MediumEditor.util.findOrCreateMatchingTextNodes(
                                this.options.ownerDocument,
                                fragment,
                                {
                                    start: exportedSelection.start - modifiedExportedSelection.start,
                                    end: exportedSelection.end - modifiedExportedSelection.start,
                                    editableElementIndex: exportedSelection.editableElementIndex
                                }
                            );
                            // If textNodes are not present, when changing link on images
                            // ex: <a><img src="http://image.test.com"></a>, change fragment to currRange.startContainer
                            // and set textNodes array to [imageElement, imageElement]
                            if (textNodes.length === 0) {
                                fragment = this.options.ownerDocument.createDocumentFragment();
                                fragment.appendChild(commonAncestorContainer.cloneNode(true));
                                textNodes = [fragment.firstChild.firstChild, fragment.firstChild.lastChild];
                            }

                            // Creates the link in the document fragment
                            MediumEditor.util.createLink(this.options.ownerDocument, textNodes, targetUrl.trim());

                            // Chrome trims the leading whitespaces when inserting HTML, which messes up restoring the selection.
                            var leadingWhitespacesCount = (fragment.firstChild.innerHTML.match(/^\s+/) || [''])[0].length;

                            // Now move the created link back into the original document in a way to preserve undo/redo history
                            MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, fragment.firstChild.innerHTML.replace(/^\s+/, ''));
                            exportedSelection.start -= leadingWhitespacesCount;
                            exportedSelection.end -= leadingWhitespacesCount;

                            this.importSelection(exportedSelection);
                        } else {
                            this.options.ownerDocument.execCommand('createLink', false, targetUrl);
                        }

                        if (this.options.targetBlank || opts.target === '_blank') {
                            MediumEditor.util.setTargetBlank(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), targetUrl);
                        } else {
                            MediumEditor.util.removeTargetBlank(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), targetUrl);
                        }

                        if (opts.buttonClass) {
                            MediumEditor.util.addClassToAnchors(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), opts.buttonClass);
                        }
                    }
                }
                // Fire input event for backwards compatibility if anyone was listening directly to the DOM input event
                if (this.options.targetBlank || opts.target === '_blank' || opts.buttonClass) {
                    customEvent = this.options.ownerDocument.createEvent('HTMLEvents');
                    customEvent.initEvent('input', true, true, this.options.contentWindow);
                    for (var i = 0, len = this.elements.length; i < len; i += 1) {
                        this.elements[i].dispatchEvent(customEvent);
                    }
                }
            } finally {
                this.events.enableCustomEvent('editableInput');
            }
            // Fire our custom editableInput event
            this.events.triggerCustomEvent('editableInput', customEvent, currentEditor);
        },

        cleanPaste: function (text) {
            this.getExtensionByName('paste').cleanPaste(text);
        },

        pasteHTML: function (html, options) {
            this.getExtensionByName('paste').pasteHTML(html, options);
        },

        setContent: function (html, index) {
            index = index || 0;

            if (this.elements[index]) {
                var target = this.elements[index];
                target.innerHTML = html;
                this.checkContentChanged(target);
            }
        },

        getContent: function (index) {
            index = index || 0;

            if (this.elements[index]) {
                return this.elements[index].innerHTML.trim();
            }
            return null;
        },

        checkContentChanged: function (editable) {
            editable = editable || MediumEditor.selection.getSelectionElement(this.options.contentWindow);
            this.events.updateInput(editable, { target: editable, currentTarget: editable });
        },

        resetContent: function (element) {
            // For all elements that exist in the this.elements array, we can assume:
            // - Its initial content has been set in the initialContent object
            // - It has a medium-editor-index attribute which is the key value in the initialContent object

            if (element) {
                var index = this.elements.indexOf(element);
                if (index !== -1) {
                    this.setContent(initialContent[element.getAttribute('medium-editor-index')], index);
                }
                return;
            }

            this.elements.forEach(function (el, idx) {
                this.setContent(initialContent[el.getAttribute('medium-editor-index')], idx);
            }, this);
        },

        addElements: function (selector) {
            // Convert elements into an array
            var elements = createElementsArray(selector, this.options.ownerDocument, true);

            // Do we have elements to add now?
            if (elements.length === 0) {
                return false;
            }

            elements.forEach(function (element) {
                // Initialize all new elements (we check that in those functions don't worry)
                element = initElement.call(this, element, this.id);

                // Add new elements to our internal elements array
                this.elements.push(element);

                // Trigger event so extensions can know when an element has been added
                this.trigger('addElement', { target: element, currentTarget: element }, element);
            }, this);
        },

        removeElements: function (selector) {
            // Convert elements into an array
            var elements = createElementsArray(selector, this.options.ownerDocument),
                toRemove = elements.map(function (el) {
                    // For textareas, make sure we're looking at the editor div and not the textarea itself
                    if (el.getAttribute('medium-editor-textarea-id') && el.parentNode) {
                        return el.parentNode.querySelector('div[medium-editor-textarea-id="' + el.getAttribute('medium-editor-textarea-id') + '"]');
                    } else {
                        return el;
                    }
                });

            this.elements = this.elements.filter(function (element) {
                // If this is an element we want to remove
                if (toRemove.indexOf(element) !== -1) {
                    this.events.cleanupElement(element);
                    if (element.getAttribute('medium-editor-textarea-id')) {
                        cleanupTextareaElement(element);
                    }
                    // Trigger event so extensions can clean-up elements that are being removed
                    this.trigger('removeElement', { target: element, currentTarget: element }, element);
                    return false;
                }
                return true;
            }, this);
        }
    };

    MediumEditor.getEditorFromElement = function (element) {
        var index = element.getAttribute('data-medium-editor-editor-index'),
            win = element && element.ownerDocument && (element.ownerDocument.defaultView || element.ownerDocument.parentWindow);
        if (win && win._mediumEditors && win._mediumEditors[index]) {
            return win._mediumEditors[index];
        }
        return null;
    };
}());

(function () {
    // summary: The default options hash used by the Editor

    MediumEditor.prototype.defaults = {
        activeButtonClass: 'medium-editor-button-active',
        buttonLabels: false,
        delay: 0,
        disableReturn: false,
        disableDoubleReturn: false,
        disableExtraSpaces: false,
        disableEditing: false,
        autoLink: false,
        elementsContainer: false,
        contentWindow: window,
        ownerDocument: document,
        targetBlank: false,
        extensions: {},
        spellcheck: true
    };
})();

MediumEditor.parseVersionString = function (release) {
    var split = release.split('-'),
        version = split[0].split('.'),
        preRelease = (split.length > 1) ? split[1] : '';
    return {
        major: parseInt(version[0], 10),
        minor: parseInt(version[1], 10),
        revision: parseInt(version[2], 10),
        preRelease: preRelease,
        toString: function () {
            return [version[0], version[1], version[2]].join('.') + (preRelease ? '-' + preRelease : '');
        }
    };
};

MediumEditor.version = MediumEditor.parseVersionString.call(this, ({
    // grunt-bump looks for this:
    'version': '5.23.0'
}).version);

    return MediumEditor;
}()));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);