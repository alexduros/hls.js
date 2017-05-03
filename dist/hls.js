(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Hls"] = factory();
	else
		root["Hls"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/hls.js/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

function noop(){}

var fakeLogger={
trace:noop,
debug:noop,
log:noop,
warn:noop,
info:noop,
error:noop};


var exportedLogger=fakeLogger;












function formatMsg(type,msg){
msg='['+type+'] > '+msg;
return msg;
}

function consolePrintFn(type){
var func=self.console[type];
if(func){
return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
if(args[0]){
args[0]=formatMsg(type,args[0]);
}
func.apply(self.console,args);
};
}
return noop;
}

function exportLoggerFunctions(debugConfig){for(var _len2=arguments.length,functions=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){functions[_key2-1]=arguments[_key2];}
functions.forEach(function(type){
exportedLogger[type]=debugConfig[type]?debugConfig[type].bind(debugConfig):consolePrintFn(type);
});
}

var enableLogs=exports.enableLogs=function enableLogs(debugConfig){
if(debugConfig===true||typeof debugConfig==='object'){
exportLoggerFunctions(debugConfig,


'debug',
'log',
'info',
'warn',
'error');



try{
exportedLogger.log();
}catch(e){
exportedLogger=fakeLogger;
}
}else
{
exportedLogger=fakeLogger;
}
};

var logger=exports.logger=exportedLogger;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports={

MEDIA_ATTACHING:'hlsMediaAttaching',

MEDIA_ATTACHED:'hlsMediaAttached',

MEDIA_DETACHING:'hlsMediaDetaching',

MEDIA_DETACHED:'hlsMediaDetached',

BUFFER_RESET:'hlsBufferReset',

BUFFER_CODECS:'hlsBufferCodecs',

BUFFER_CREATED:'hlsBufferCreated',

BUFFER_APPENDING:'hlsBufferAppending',

BUFFER_APPENDED:'hlsBufferAppended',

BUFFER_EOS:'hlsBufferEos',

BUFFER_FLUSHING:'hlsBufferFlushing',

BUFFER_FLUSHED:'hlsBufferFlushed',

MANIFEST_LOADING:'hlsManifestLoading',

MANIFEST_LOADED:'hlsManifestLoaded',

MANIFEST_PARSED:'hlsManifestParsed',

LEVEL_SWITCH:'hlsLevelSwitch',

LEVEL_SWITCHING:'hlsLevelSwitching',

LEVEL_SWITCHED:'hlsLevelSwitched',

LEVEL_LOADING:'hlsLevelLoading',

LEVEL_LOADED:'hlsLevelLoaded',

LEVEL_UPDATED:'hlsLevelUpdated',

LEVEL_PTS_UPDATED:'hlsLevelPtsUpdated',

AUDIO_TRACKS_UPDATED:'hlsAudioTracksUpdated',

AUDIO_TRACK_SWITCH:'hlsAudioTrackSwitch',

AUDIO_TRACK_SWITCHING:'hlsAudioTrackSwitching',

AUDIO_TRACK_SWITCHED:'hlsAudioTrackSwitched',

AUDIO_TRACK_LOADING:'hlsAudioTrackLoading',

AUDIO_TRACK_LOADED:'hlsAudioTrackLoaded',

SUBTITLE_TRACKS_UPDATED:'hlsSubtitleTracksUpdated',

SUBTITLE_TRACK_SWITCH:'hlsSubtitleTrackSwitch',

SUBTITLE_TRACK_LOADING:'hlsSubtitleTrackLoading',

SUBTITLE_TRACK_LOADED:'hlsSubtitleTrackLoaded',

SUBTITLE_FRAG_PROCESSED:'hlsSubtitleFragProcessed',

INIT_PTS_FOUND:'hlsInitPtsFound',

FRAG_LOADING:'hlsFragLoading',

FRAG_LOAD_PROGRESS:'hlsFragLoadProgress',

FRAG_LOAD_EMERGENCY_ABORTED:'hlsFragLoadEmergencyAborted',

FRAG_LOADED:'hlsFragLoaded',

FRAG_DECRYPTED:'hlsFragDecrypted',

FRAG_PARSING_INIT_SEGMENT:'hlsFragParsingInitSegment',

FRAG_PARSING_USERDATA:'hlsFragParsingUserdata',

FRAG_PARSING_METADATA:'hlsFragParsingMetadata',

FRAG_PARSING_DATA:'hlsFragParsingData',

FRAG_PARSED:'hlsFragParsed',

FRAG_BUFFERED:'hlsFragBuffered',

FRAG_CHANGED:'hlsFragChanged',

FPS_DROP:'hlsFpsDrop',

FPS_DROP_LEVEL_CAPPING:'hlsFpsDropLevelCapping',

ERROR:'hlsError',

DESTROYING:'hlsDestroying',

KEY_LOADING:'hlsKeyLoading',

KEY_LOADED:'hlsKeyLoaded',

STREAM_STATE_TRANSITION:'hlsStreamStateTransition'};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var ErrorTypes=exports.ErrorTypes={

NETWORK_ERROR:'networkError',

MEDIA_ERROR:'mediaError',

MUX_ERROR:'muxError',

OTHER_ERROR:'otherError'};


var ErrorDetails=exports.ErrorDetails={

MANIFEST_LOAD_ERROR:'manifestLoadError',

MANIFEST_LOAD_TIMEOUT:'manifestLoadTimeOut',

MANIFEST_PARSING_ERROR:'manifestParsingError',

MANIFEST_INCOMPATIBLE_CODECS_ERROR:'manifestIncompatibleCodecsError',

LEVEL_LOAD_ERROR:'levelLoadError',

LEVEL_LOAD_TIMEOUT:'levelLoadTimeOut',

LEVEL_SWITCH_ERROR:'levelSwitchError',

AUDIO_TRACK_LOAD_ERROR:'audioTrackLoadError',

AUDIO_TRACK_LOAD_TIMEOUT:'audioTrackLoadTimeOut',

FRAG_LOAD_ERROR:'fragLoadError',

FRAG_LOOP_LOADING_ERROR:'fragLoopLoadingError',

FRAG_LOAD_TIMEOUT:'fragLoadTimeOut',

FRAG_DECRYPT_ERROR:'fragDecryptError',


FRAG_PARSING_ERROR:'fragParsingError',

REMUX_ALLOC_ERROR:'remuxAllocError',

KEY_LOAD_ERROR:'keyLoadError',

KEY_LOAD_TIMEOUT:'keyLoadTimeOut',

BUFFER_ADD_CODEC_ERROR:'bufferAddCodecError',

BUFFER_APPEND_ERROR:'bufferAppendError',

BUFFER_APPENDING_ERROR:'bufferAppendingError',

BUFFER_STALLED_ERROR:'bufferStalledError',

BUFFER_FULL_ERROR:'bufferFullError',

BUFFER_SEEK_OVER_HOLE:'bufferSeekOverHole',

BUFFER_NUDGE_ON_STALL:'bufferNudgeOnStall',

INTERNAL_EXCEPTION:'internalException',

WEBVTT_EXCEPTION:'webVTTException'};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();





var _logger=__webpack_require__(0);
var _errors=__webpack_require__(2);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

EventHandler=function(){

function EventHandler(hls){_classCallCheck(this,EventHandler);
this.hls=hls;
this.onEvent=this.onEvent.bind(this);for(var _len=arguments.length,events=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){events[_key-1]=arguments[_key];}
this.handledEvents=events;
this.useGenericHandler=true;

this.registerListeners();
}_createClass(EventHandler,[{key:'destroy',value:function destroy()

{
this.unregisterListeners();
}},{key:'isEventHandler',value:function isEventHandler()

{
return typeof this.handledEvents==='object'&&this.handledEvents.length&&typeof this.onEvent==='function';
}},{key:'registerListeners',value:function registerListeners()

{
if(this.isEventHandler()){
this.handledEvents.forEach(function(event){
if(event==='hlsEventGeneric'){
throw new Error('Forbidden event name: '+event);
}
this.hls.on(event,this.onEvent);
}.bind(this));
}
}},{key:'unregisterListeners',value:function unregisterListeners()

{
if(this.isEventHandler()){
this.handledEvents.forEach(function(event){
this.hls.off(event,this.onEvent);
}.bind(this));
}
}},{key:'onEvent',value:function onEvent(




event,data){
this.onEventGeneric(event,data);
}},{key:'onEventGeneric',value:function onEventGeneric(

event,data){
var eventToFunction=function eventToFunction(event,data){
var funcName='on'+event.replace('hls','');
if(typeof this[funcName]!=='function'){
throw new Error('Event '+event+' has no generic handler in this '+this.constructor.name+' class (tried '+funcName+')');
}
return this[funcName].bind(this,data);
};
try{
eventToFunction.call(this,event,data).call();
}catch(err){
_logger.logger.error('internal error happened while processing '+event+':'+err.message);
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.OTHER_ERROR,details:_errors.ErrorDetails.INTERNAL_EXCEPTION,fatal:false,event:event,err:err});
}
}}]);return EventHandler;}();exports.default=


EventHandler;

/***/ }),
/* 4 */
/***/ (function(module, exports) {





var BufferHelper={
isBuffered:function isBuffered(media,position){
if(media){
var buffered=media.buffered;
for(var i=0;i<buffered.length;i++){
if(position>=buffered.start(i)&&position<=buffered.end(i)){
return true;
}
}
}
return false;
},

bufferInfo:function bufferInfo(media,pos,maxHoleDuration){
if(media){
var vbuffered=media.buffered,buffered=[],i;
for(i=0;i<vbuffered.length;i++){
buffered.push({start:vbuffered.start(i),end:vbuffered.end(i)});
}
return this.bufferedInfo(buffered,pos,maxHoleDuration);
}else{
return{len:0,start:pos,end:pos,nextStart:undefined};
}
},

bufferedInfo:function bufferedInfo(buffered,pos,maxHoleDuration){
var buffered2=[],

bufferLen,bufferStart,bufferEnd,bufferStartNext,i;

buffered.sort(function(a,b){
var diff=a.start-b.start;
if(diff){
return diff;
}else{
return b.end-a.end;
}
});



for(i=0;i<buffered.length;i++){
var buf2len=buffered2.length;
if(buf2len){
var buf2end=buffered2[buf2len-1].end;

if(buffered[i].start-buf2end<maxHoleDuration){




if(buffered[i].end>buf2end){
buffered2[buf2len-1].end=buffered[i].end;
}
}else{

buffered2.push(buffered[i]);
}
}else{

buffered2.push(buffered[i]);
}
}
for(i=0,bufferLen=0,bufferStart=bufferEnd=pos;i<buffered2.length;i++){
var start=buffered2[i].start,
end=buffered2[i].end;

if(pos+maxHoleDuration>=start&&pos<end){

bufferStart=start;
bufferEnd=end;
bufferLen=bufferEnd-pos;
}else if(pos+maxHoleDuration<start){
bufferStartNext=start;
break;
}
}
return{len:bufferLen,start:bufferStart,end:bufferEnd,nextStart:bufferStartNext};
}};


module.exports=BufferHelper;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _aesCrypto=__webpack_require__(29);var _aesCrypto2=_interopRequireDefault(_aesCrypto);
var _fastAesKey=__webpack_require__(31);var _fastAesKey2=_interopRequireDefault(_fastAesKey);
var _aesDecryptor=__webpack_require__(30);var _aesDecryptor2=_interopRequireDefault(_aesDecryptor);

var _errors=__webpack_require__(2);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



Decrypter=function(){
function Decrypter(observer,config){_classCallCheck(this,Decrypter);
this.observer=observer;
this.config=config;
this.logEnabled=true;
try{
var browserCrypto=crypto?crypto:self.crypto;
this.subtle=browserCrypto.subtle||browserCrypto.webkitSubtle;
}catch(e){}
this.disableWebCrypto=!this.subtle;
}_createClass(Decrypter,[{key:'isSync',value:function isSync()

{
return this.disableWebCrypto&&this.config.enableSoftwareAES;
}},{key:'decrypt',value:function decrypt(

data,key,iv,callback){var _this=this;
if(this.disableWebCrypto&&this.config.enableSoftwareAES){
if(this.logEnabled){
_logger.logger.log('JS AES decrypt');
this.logEnabled=false;
}
var decryptor=this.decryptor;
if(!decryptor){
this.decryptor=decryptor=new _aesDecryptor2.default();
}
decryptor.expandKey(key);
callback(decryptor.decrypt(data,0,iv));
}else
{
if(this.logEnabled){
_logger.logger.log('WebCrypto AES decrypt');
this.logEnabled=false;
}
var subtle=this.subtle;
if(this.key!==key){
this.key=key;
this.fastAesKey=new _fastAesKey2.default(subtle,key);
}

this.fastAesKey.expandKey().
then(function(aesKey){

var crypto=new _aesCrypto2.default(subtle,iv);
crypto.decrypt(data,aesKey).
catch(function(err){
_this.onWebCryptoError(err,data,key,iv,callback);
}).
then(function(result){
callback(result);
});
}).
catch(function(err){
_this.onWebCryptoError(err,data,key,iv,callback);
});
}
}},{key:'onWebCryptoError',value:function onWebCryptoError(

err,data,key,iv,callback){
if(this.config.enableSoftwareAES){
_logger.logger.log('WebCrypto Error, disable WebCrypto API');
this.disableWebCrypto=true;
this.logEnabled=true;
this.decrypt(data,key,iv,callback);
}else
{
_logger.logger.error('decrypting error : '+err.message);
this.observer.trigger(Event.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:true,reason:err.message});
}
}},{key:'destroy',value:function destroy()

{
var decryptor=this.decryptor;
if(decryptor){
decryptor.destroy();
this.decryptor=undefined;
}
}}]);return Decrypter;}();exports.default=


Decrypter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {




var _logger=__webpack_require__(0);
var _errors=__webpack_require__(2);

var ADTS={
getAudioConfig:function getAudioConfig(observer,data,offset,audioCodec){
var adtsObjectType,
adtsSampleingIndex,
adtsExtensionSampleingIndex,
adtsChanelConfig,
config,
userAgent=navigator.userAgent.toLowerCase(),
manifestCodec=audioCodec,
adtsSampleingRates=[
96000,88200,
64000,48000,
44100,32000,
24000,22050,
16000,12000,
11025,8000,
7350];

adtsObjectType=((data[offset+2]&0xC0)>>>6)+1;
adtsSampleingIndex=(data[offset+2]&0x3C)>>>2;
if(adtsSampleingIndex>adtsSampleingRates.length-1){
observer.trigger(Event.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_PARSING_ERROR,fatal:true,reason:'invalid ADTS sampling index:'+adtsSampleingIndex});
return;
}
adtsChanelConfig=(data[offset+2]&0x01)<<2;

adtsChanelConfig|=(data[offset+3]&0xC0)>>>6;
_logger.logger.log('manifest codec:'+audioCodec+',ADTS data:type:'+adtsObjectType+',sampleingIndex:'+adtsSampleingIndex+'['+adtsSampleingRates[adtsSampleingIndex]+'Hz],channelConfig:'+adtsChanelConfig);

if(/firefox/i.test(userAgent)){
if(adtsSampleingIndex>=6){
adtsObjectType=5;
config=new Array(4);



adtsExtensionSampleingIndex=adtsSampleingIndex-3;
}else{
adtsObjectType=2;
config=new Array(2);
adtsExtensionSampleingIndex=adtsSampleingIndex;
}

}else if(userAgent.indexOf('android')!==-1){
adtsObjectType=2;
config=new Array(2);
adtsExtensionSampleingIndex=adtsSampleingIndex;
}else{



adtsObjectType=5;
config=new Array(4);

if(audioCodec&&(audioCodec.indexOf('mp4a.40.29')!==-1||
audioCodec.indexOf('mp4a.40.5')!==-1)||
!audioCodec&&adtsSampleingIndex>=6){



adtsExtensionSampleingIndex=adtsSampleingIndex-3;
}else{


if(audioCodec&&audioCodec.indexOf('mp4a.40.2')!==-1&&adtsSampleingIndex>=6&&adtsChanelConfig===1||
!audioCodec&&adtsChanelConfig===1){
adtsObjectType=2;
config=new Array(2);
}
adtsExtensionSampleingIndex=adtsSampleingIndex;
}
}


































config[0]=adtsObjectType<<3;

config[0]|=(adtsSampleingIndex&0x0E)>>1;
config[1]|=(adtsSampleingIndex&0x01)<<7;

config[1]|=adtsChanelConfig<<3;
if(adtsObjectType===5){

config[1]|=(adtsExtensionSampleingIndex&0x0E)>>1;
config[2]=(adtsExtensionSampleingIndex&0x01)<<7;


config[2]|=2<<2;
config[3]=0;
}
return{config:config,samplerate:adtsSampleingRates[adtsSampleingIndex],channelCount:adtsChanelConfig,codec:'mp4a.40.'+adtsObjectType,manifestCodec:manifestCodec};
}};


module.exports=ADTS;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _errors=__webpack_require__(2);
var _decrypter=__webpack_require__(6);var _decrypter2=_interopRequireDefault(_decrypter);
var _aacdemuxer=__webpack_require__(32);var _aacdemuxer2=_interopRequireDefault(_aacdemuxer);
var _mp4demuxer=__webpack_require__(36);var _mp4demuxer2=_interopRequireDefault(_mp4demuxer);
var _tsdemuxer=__webpack_require__(38);var _tsdemuxer2=_interopRequireDefault(_tsdemuxer);
var _mp4Remuxer=__webpack_require__(45);var _mp4Remuxer2=_interopRequireDefault(_mp4Remuxer);
var _passthroughRemuxer=__webpack_require__(46);var _passthroughRemuxer2=_interopRequireDefault(_passthroughRemuxer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

DemuxerInline=function(){

function DemuxerInline(observer,typeSupported,config,vendor){_classCallCheck(this,DemuxerInline);
this.observer=observer;
this.typeSupported=typeSupported;
this.config=config;
this.vendor=vendor;
}_createClass(DemuxerInline,[{key:'destroy',value:function destroy()

{
var demuxer=this.demuxer;
if(demuxer){
demuxer.destroy();
}
}},{key:'push',value:function push(

data,decryptdata,initSegment,audioCodec,videoCodec,timeOffset,discontinuity,trackSwitch,contiguous,duration,accurateTimeOffset,defaultInitPTS){
if(data.byteLength>0&&decryptdata!=null&&decryptdata.key!=null&&decryptdata.method==='AES-128'){
var decrypter=this.decrypter;
if(decrypter==null){
decrypter=this.decrypter=new _decrypter2.default(this.observer,this.config);
}
var localthis=this;

var startTime;
try{
startTime=performance.now();
}catch(error){
startTime=Date.now();
}
decrypter.decrypt(data,decryptdata.key.buffer,decryptdata.iv.buffer,function(decryptedData){
var endTime;
try{
endTime=performance.now();
}catch(error){
endTime=Date.now();
}
localthis.observer.trigger(_events2.default.FRAG_DECRYPTED,{stats:{tstart:startTime,tdecrypt:endTime}});
localthis.pushDecrypted(new Uint8Array(decryptedData),decryptdata,new Uint8Array(initSegment),audioCodec,videoCodec,timeOffset,discontinuity,trackSwitch,contiguous,duration,accurateTimeOffset,defaultInitPTS);
});
}else{
this.pushDecrypted(new Uint8Array(data),decryptdata,new Uint8Array(initSegment),audioCodec,videoCodec,timeOffset,discontinuity,trackSwitch,contiguous,duration,accurateTimeOffset,defaultInitPTS);
}
}},{key:'pushDecrypted',value:function pushDecrypted(

data,decryptdata,initSegment,audioCodec,videoCodec,timeOffset,discontinuity,trackSwitch,contiguous,duration,accurateTimeOffset,defaultInitPTS){
var demuxer=this.demuxer;
if(!demuxer||


discontinuity&&!this.probe(data)){
var observer=this.observer;
var typeSupported=this.typeSupported;
var config=this.config;
var muxConfig=[{demux:_tsdemuxer2.default,remux:_mp4Remuxer2.default},
{demux:_aacdemuxer2.default,remux:_mp4Remuxer2.default},
{demux:_mp4demuxer2.default,remux:_passthroughRemuxer2.default}];


for(var i in muxConfig){
var mux=muxConfig[i];
var probe=mux.demux.probe;
if(probe(data)){
var _remuxer=this.remuxer=new mux.remux(observer,config,typeSupported,this.vendor);
demuxer=new mux.demux(observer,_remuxer,config,typeSupported);
this.probe=probe;
break;
}
}
if(!demuxer){
observer.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_PARSING_ERROR,fatal:true,reason:'no demux matching with content found'});
return;
}
this.demuxer=demuxer;
}
var remuxer=this.remuxer;

if(discontinuity||trackSwitch){
demuxer.resetInitSegment(initSegment,audioCodec,videoCodec,duration);
remuxer.resetInitSegment();
}
if(discontinuity){
demuxer.resetTimeStamp();
remuxer.resetTimeStamp(defaultInitPTS);
}
if(typeof demuxer.setDecryptData==='function'){
demuxer.setDecryptData(decryptdata);
}
demuxer.append(data,timeOffset,contiguous,accurateTimeOffset);
}}]);return DemuxerInline;}();exports.default=


DemuxerInline;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _demuxerInline=__webpack_require__(8);var _demuxerInline2=_interopRequireDefault(_demuxerInline);
var _logger=__webpack_require__(0);
var _errors=__webpack_require__(2);
var _events3=__webpack_require__(5);var _events4=_interopRequireDefault(_events3);
var _webworkifyWebpack=__webpack_require__(55);var _webworkifyWebpack2=_interopRequireDefault(_webworkifyWebpack);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Demuxer=function(){

function Demuxer(hls,id){_classCallCheck(this,Demuxer);
this.hls=hls;
this.id=id;

var observer=this.observer=new _events4.default();
var config=hls.config;
observer.trigger=function trigger(event){for(var _len=arguments.length,data=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){data[_key-1]=arguments[_key];}
observer.emit.apply(observer,[event,event].concat(data));
};

observer.off=function off(event){for(var _len2=arguments.length,data=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){data[_key2-1]=arguments[_key2];}
observer.removeListener.apply(observer,[event].concat(data));
};

var forwardMessage=function(ev,data){
data=data||{};
data.frag=this.frag;
data.id=this.id;
hls.trigger(ev,data);
}.bind(this);


observer.on(_events2.default.FRAG_DECRYPTED,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_INIT_SEGMENT,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_DATA,forwardMessage);
observer.on(_events2.default.FRAG_PARSED,forwardMessage);
observer.on(_events2.default.ERROR,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_METADATA,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_USERDATA,forwardMessage);
observer.on(_events2.default.INIT_PTS_FOUND,forwardMessage);

var typeSupported={
mp4:MediaSource.isTypeSupported('video/mp4'),
mpeg:MediaSource.isTypeSupported('audio/mpeg'),
mp3:MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')};



var vendor=navigator.vendor;
if(config.enableWorker&&typeof Worker!=='undefined'){
_logger.logger.log('demuxing in webworker');
var w=void 0;
try{
w=this.w=(0,_webworkifyWebpack2.default)(/*require.resolve*/(33));
this.onwmsg=this.onWorkerMessage.bind(this);
w.addEventListener('message',this.onwmsg);
w.onerror=function(event){hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.OTHER_ERROR,details:_errors.ErrorDetails.INTERNAL_EXCEPTION,fatal:true,event:'demuxerWorker',err:{message:event.message+' ('+event.filename+':'+event.lineno+')'}});};
w.postMessage({cmd:'init',typeSupported:typeSupported,vendor:vendor,id:id,config:JSON.stringify(config)});
}catch(err){
_logger.logger.error('error while initializing DemuxerWorker, fallback on DemuxerInline');
if(w){

URL.revokeObjectURL(w.objectURL);
}
this.demuxer=new _demuxerInline2.default(observer,typeSupported,config,vendor);
this.w=undefined;
}
}else{
this.demuxer=new _demuxerInline2.default(observer,typeSupported,config,vendor);
}
}_createClass(Demuxer,[{key:'destroy',value:function destroy()

{
var w=this.w;
if(w){
w.removeEventListener('message',this.onwmsg);
w.terminate();
this.w=null;
}else{
var demuxer=this.demuxer;
if(demuxer){
demuxer.destroy();
this.demuxer=null;
}
}
var observer=this.observer;
if(observer){
observer.removeAllListeners();
this.observer=null;
}
}},{key:'push',value:function push(

data,initSegment,audioCodec,videoCodec,frag,duration,accurateTimeOffset,defaultInitPTS){
var w=this.w;
var timeOffset=!isNaN(frag.startDTS)?frag.startDTS:frag.start;
var decryptdata=frag.decryptdata;
var lastFrag=this.frag;
var discontinuity=!(lastFrag&&frag.cc===lastFrag.cc);
var trackSwitch=!(lastFrag&&frag.level===lastFrag.level);
var nextSN=lastFrag&&frag.sn===lastFrag.sn+1;
var contiguous=!trackSwitch&&nextSN;
if(discontinuity){
_logger.logger.log(this.id+':discontinuity detected');
}
if(trackSwitch){
_logger.logger.log(this.id+':switch detected');
}
this.frag=frag;
if(w){

w.postMessage({cmd:'demux',data:data,decryptdata:decryptdata,initSegment:initSegment,audioCodec:audioCodec,videoCodec:videoCodec,timeOffset:timeOffset,discontinuity:discontinuity,trackSwitch:trackSwitch,contiguous:contiguous,duration:duration,accurateTimeOffset:accurateTimeOffset,defaultInitPTS:defaultInitPTS},[data]);
}else{
var demuxer=this.demuxer;
if(demuxer){
demuxer.push(data,decryptdata,initSegment,audioCodec,videoCodec,timeOffset,discontinuity,trackSwitch,contiguous,duration,accurateTimeOffset,defaultInitPTS);
}
}
}},{key:'onWorkerMessage',value:function onWorkerMessage(

ev){
var data=ev.data,
hls=this.hls;

switch(data.event){
case'init':

URL.revokeObjectURL(this.w.objectURL);
break;

case _events2.default.FRAG_PARSING_DATA:
data.data.data1=new Uint8Array(data.data1);
if(data.data2){
data.data.data2=new Uint8Array(data.data2);
}

default:
data.data=data.data||{};
data.data.frag=this.frag;
data.data.id=this.id;
hls.trigger(data.event,data.data);
break;}

}}]);return Demuxer;}();exports.default=


Demuxer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {





var _logger=__webpack_require__(0);

var LevelHelper={

mergeDetails:function mergeDetails(oldDetails,newDetails){
var start=Math.max(oldDetails.startSN,newDetails.startSN)-newDetails.startSN,
end=Math.min(oldDetails.endSN,newDetails.endSN)-newDetails.startSN,
delta=newDetails.startSN-oldDetails.startSN,
oldfragments=oldDetails.fragments,
newfragments=newDetails.fragments,
ccOffset=0,
PTSFrag;


if(end<start){
newDetails.PTSKnown=false;
return;
}

for(var i=start;i<=end;i++){
var oldFrag=oldfragments[delta+i],
newFrag=newfragments[i];
if(newFrag&&oldFrag){
ccOffset=oldFrag.cc-newFrag.cc;
if(!isNaN(oldFrag.startPTS)){
newFrag.start=newFrag.startPTS=oldFrag.startPTS;
newFrag.endPTS=oldFrag.endPTS;
newFrag.duration=oldFrag.duration;
PTSFrag=newFrag;
}
}
}

if(ccOffset){
_logger.logger.log('discontinuity sliding from playlist, take drift into account');
for(i=0;i<newfragments.length;i++){
newfragments[i].cc+=ccOffset;
}
}


if(PTSFrag){
LevelHelper.updateFragPTSDTS(newDetails,PTSFrag,PTSFrag.startPTS,PTSFrag.endPTS,PTSFrag.startDTS,PTSFrag.endDTS);
}else{



if(delta>=0&&delta<oldfragments.length){

var sliding=oldfragments[delta].start;
for(i=0;i<newfragments.length;i++){
newfragments[i].start+=sliding;
}
}
}


newDetails.PTSKnown=oldDetails.PTSKnown;
return;
},

updateFragPTSDTS:function updateFragPTSDTS(details,frag,startPTS,endPTS,startDTS,endDTS){

if(!isNaN(frag.startPTS)){

var deltaPTS=Math.abs(frag.startPTS-startPTS);
if(isNaN(frag.deltaPTS)){
frag.deltaPTS=deltaPTS;
}else{
frag.deltaPTS=Math.max(deltaPTS,frag.deltaPTS);
}
startPTS=Math.min(startPTS,frag.startPTS);
endPTS=Math.max(endPTS,frag.endPTS);
startDTS=Math.min(startDTS,frag.startDTS);
endDTS=Math.max(endDTS,frag.endDTS);
}

var drift=startPTS-frag.start;
frag.start=frag.startPTS=startPTS;
frag.endPTS=endPTS;
frag.startDTS=startDTS;
frag.endDTS=endDTS;
frag.duration=endPTS-startPTS;

var sn=frag.sn;

if(!details||sn<details.startSN||sn>details.endSN){
return 0;
}
var fragIdx,fragments,i;
fragIdx=sn-details.startSN;
fragments=details.fragments;
frag=fragments[fragIdx];

for(i=fragIdx;i>0;i--){
LevelHelper.updatePTS(fragments,i,i-1);
}


for(i=fragIdx;i<fragments.length-1;i++){
LevelHelper.updatePTS(fragments,i,i+1);
}
details.PTSKnown=true;


return drift;
},

updatePTS:function updatePTS(fragments,fromIdx,toIdx){
var fragFrom=fragments[fromIdx],fragTo=fragments[toIdx],fragToPTS=fragTo.startPTS;

if(!isNaN(fragToPTS)){


if(toIdx>fromIdx){
fragFrom.duration=fragToPTS-fragFrom.start;
if(fragFrom.duration<0){
_logger.logger.warn('negative duration computed for frag '+fragFrom.sn+',level '+fragFrom.level+', there should be some duration drift between playlist and fragment!');
}
}else{
fragTo.duration=fragFrom.start-fragToPTS;
if(fragTo.duration<0){
_logger.logger.warn('negative duration computed for frag '+fragTo.sn+',level '+fragTo.level+', there should be some duration drift between playlist and fragment!');
}
}
}else{

if(toIdx>fromIdx){
fragTo.start=fragFrom.start+fragFrom.duration;
}else{
fragTo.start=Math.max(fragFrom.start-fragTo.duration,0);
}
}
}};


module.exports=LevelHelper;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var BinarySearch={















search:function search(list,comparisonFunction){
var minIndex=0;
var maxIndex=list.length-1;
var currentIndex=null;
var currentElement=null;

while(minIndex<=maxIndex){
currentIndex=(minIndex+maxIndex)/2|0;
currentElement=list[currentIndex];

var comparisonResult=comparisonFunction(currentElement);
if(comparisonResult>0){
minIndex=currentIndex+1;
}else
if(comparisonResult<0){
maxIndex=currentIndex-1;
}else
{
return currentElement;
}
}

return null;
}};


module.exports=BinarySearch;

/***/ }),
/* 12 */
/***/ (function(module, exports) {





var TimeRanges={
toString:function toString(r){
var log='',len=r.length;
for(var i=0;i<len;i++){
log+='['+r.start(i).toFixed(3)+','+r.end(i).toFixed(3)+']';
}
return log;
}};


module.exports=TimeRanges;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.fixLineBreaks=undefined;



var _vttcue=__webpack_require__(52);var _vttcue2=_interopRequireDefault(_vttcue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var StringDecoder=function StringDecoder(){
return{
decode:function decode(data){
if(!data){
return'';
}
if(typeof data!=='string'){
throw new Error('Error - expected string data.');
}
return decodeURIComponent(encodeURIComponent(data));
}};

};

function VTTParser(){
this.window=window;
this.state='INITIAL';
this.buffer='';
this.decoder=new StringDecoder();
this.regionList=[];
}



function parseTimeStamp(input){

function computeSeconds(h,m,s,f){
return(h|0)*3600+(m|0)*60+(s|0)+(f|0)/1000;
}

var m=input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
if(!m){
return null;
}

if(m[3]){

return computeSeconds(m[1],m[2],m[3].replace(':',''),m[4]);
}else if(m[1]>59){


return computeSeconds(m[1],m[2],0,m[4]);
}else{

return computeSeconds(0,m[1],m[2],m[4]);
}
}



function Settings(){
this.values=Object.create(null);
}

Settings.prototype={

set:function set(k,v){
if(!this.get(k)&&v!==''){
this.values[k]=v;
}
},





get:function get(k,dflt,defaultKey){
if(defaultKey){
return this.has(k)?this.values[k]:dflt[defaultKey];
}
return this.has(k)?this.values[k]:dflt;
},

has:function has(k){
return k in this.values;
},

alt:function alt(k,v,a){
for(var n=0;n<a.length;++n){
if(v===a[n]){
this.set(k,v);
break;
}
}
},

integer:function integer(k,v){
if(/^-?\d+$/.test(v)){
this.set(k,parseInt(v,10));
}
},

percent:function percent(k,v){
var m;
if(m=v.match(/^([\d]{1,3})(\.[\d]*)?%$/)){
v=parseFloat(v);
if(v>=0&&v<=100){
this.set(k,v);
return true;
}
}
return false;
}};




function parseOptions(input,callback,keyValueDelim,groupDelim){
var groups=groupDelim?input.split(groupDelim):[input];
for(var i in groups){
if(typeof groups[i]!=='string'){
continue;
}
var kv=groups[i].split(keyValueDelim);
if(kv.length!==2){
continue;
}
var k=kv[0];
var v=kv[1];
callback(k,v);
}
}

var defaults=new _vttcue2.default(0,0,0);


var center=defaults.align==='middle'?'middle':'center';

function parseCue(input,cue,regionList){

var oInput=input;

function consumeTimeStamp(){
var ts=parseTimeStamp(input);
if(ts===null){
throw new Error('Malformed timestamp: '+oInput);
}

input=input.replace(/^[^\sa-zA-Z-]+/,'');
return ts;
}


function consumeCueSettings(input,cue){
var settings=new Settings();

parseOptions(input,function(k,v){
switch(k){
case'region':

for(var i=regionList.length-1;i>=0;i--){
if(regionList[i].id===v){
settings.set(k,regionList[i].region);
break;
}
}
break;
case'vertical':
settings.alt(k,v,['rl','lr']);
break;
case'line':
var vals=v.split(','),
vals0=vals[0];
settings.integer(k,vals0);
if(settings.percent(k,vals0)){
settings.set('snapToLines',false);
}
settings.alt(k,vals0,['auto']);
if(vals.length===2){
settings.alt('lineAlign',vals[1],['start',center,'end']);
}
break;
case'position':
vals=v.split(',');
settings.percent(k,vals[0]);
if(vals.length===2){
settings.alt('positionAlign',vals[1],['start',center,'end','line-left','line-right','auto']);
}
break;
case'size':
settings.percent(k,v);
break;
case'align':
settings.alt(k,v,['start',center,'end','left','right']);
break;}

},/:/,/\s/);


cue.region=settings.get('region',null);
cue.vertical=settings.get('vertical','');
var line=settings.get('line','auto');
if(line==='auto'&&defaults.line===-1){

line=-1;
}
cue.line=line;
cue.lineAlign=settings.get('lineAlign','start');
cue.snapToLines=settings.get('snapToLines',true);
cue.size=settings.get('size',100);
cue.align=settings.get('align',center);
var position=settings.get('position','auto');
if(position==='auto'&&defaults.position===50){

position=cue.align==='start'||cue.align==='left'?0:cue.align==='end'||cue.align==='right'?100:50;
}
cue.position=position;
}

function skipWhitespace(){
input=input.replace(/^\s+/,'');
}


skipWhitespace();
cue.startTime=consumeTimeStamp();
skipWhitespace();
if(input.substr(0,3)!=='-->'){
throw new Error('Malformed time stamp (time stamps must be separated by \'-->\'): '+
oInput);
}
input=input.substr(3);
skipWhitespace();
cue.endTime=consumeTimeStamp();


skipWhitespace();
consumeCueSettings(input,cue);
}

function fixLineBreaks(input){
return input.replace(/<br(?: \/)?>/gi,'\n');
}

VTTParser.prototype={
parse:function parse(data){
var self=this;




if(data){

self.buffer+=self.decoder.decode(data,{stream:true});
}

function collectNextLine(){
var buffer=self.buffer;
var pos=0;

buffer=fixLineBreaks(buffer);

while(pos<buffer.length&&buffer[pos]!=='\r'&&buffer[pos]!=='\n'){
++pos;
}
var line=buffer.substr(0,pos);

if(buffer[pos]==='\r'){
++pos;
}
if(buffer[pos]==='\n'){
++pos;
}
self.buffer=buffer.substr(pos);
return line;
}


function parseHeader(input){
parseOptions(input,function(k,v){
switch(k){
case'Region':

console.log('parse region',v);

break;}

},/:/);
}


try{
var line;
if(self.state==='INITIAL'){

if(!/\r\n|\n/.test(self.buffer)){
return this;
}

line=collectNextLine();

var m=line.match(/^WEBVTT([ \t].*)?$/);
if(!m||!m[0]){
throw new Error('Malformed WebVTT signature.');
}

self.state='HEADER';
}

var alreadyCollectedLine=false;
while(self.buffer){

if(!/\r\n|\n/.test(self.buffer)){
return this;
}

if(!alreadyCollectedLine){
line=collectNextLine();
}else{
alreadyCollectedLine=false;
}

switch(self.state){
case'HEADER':

if(/:/.test(line)){
parseHeader(line);
}else if(!line){

self.state='ID';
}
continue;
case'NOTE':

if(!line){
self.state='ID';
}
continue;
case'ID':

if(/^NOTE($|[ \t])/.test(line)){
self.state='NOTE';
break;
}

if(!line){
continue;
}
self.cue=new _vttcue2.default(0,0,'');
self.state='CUE';

if(line.indexOf('-->')===-1){
self.cue.id=line;
continue;
}


case'CUE':

try{
parseCue(line,self.cue,self.regionList);
}catch(e){

self.cue=null;
self.state='BADCUE';
continue;
}
self.state='CUETEXT';
continue;
case'CUETEXT':
var hasSubstring=line.indexOf('-->')!==-1;




if(!line||hasSubstring&&(alreadyCollectedLine=true)){

if(self.oncue){
self.oncue(self.cue);
}
self.cue=null;
self.state='ID';
continue;
}
if(self.cue.text){
self.cue.text+='\n';
}
self.cue.text+=line;
continue;
case'BADCUE':

if(!line){
self.state='ID';
}
continue;}

}
}catch(e){


if(self.state==='CUETEXT'&&self.cue&&self.oncue){
self.oncue(self.cue);
}
self.cue=null;


self.state=self.state==='INITIAL'?'BADWEBVTT':'BADCUE';
}
return this;
},
flush:function flush(){
var self=this;
try{

self.buffer+=self.decoder.decode();

if(self.cue||self.state==='HEADER'){
self.buffer+='\n\n';
self.parse();
}



if(self.state==='INITIAL'){
throw new Error('Malformed WebVTT signature.');
}
}catch(e){
throw e;
}
if(self.onflush){
self.onflush();
}
return this;
}};exports.


fixLineBreaks=fixLineBreaks;exports.default=

VTTParser;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// see https://tools.ietf.org/html/rfc1808

/* jshint ignore:start */
(function(root) { 
/* jshint ignore:end */

  var URL_REGEX = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/;
  var FIRST_SEGMENT_REGEX = /^([^\/;?#]*)(.*)$/;
  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g;

  var URLToolkit = { // jshint ignore:line
    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
    // E.g
    // With opts.alwaysNormalize = false (default, spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
    // With opts.alwaysNormalize = true (default, not spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
    buildAbsoluteURL: function(baseURL, relativeURL, opts) {
      opts = opts || {};
      // remove any remaining space and CRLF
      baseURL = baseURL.trim();
      relativeURL = relativeURL.trim();
      if (!relativeURL) {
        // 2a) If the embedded URL is entirely empty, it inherits the
        // entire base URL (i.e., is set equal to the base URL)
        // and we are done.
        if (!opts.alwaysNormalize) {
          return baseURL;
        }
        var basePartsForNormalise = this.parseURL(baseURL);
        if (!baseParts) {
          throw new Error('Error trying to parse base URL.');
        }
        basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path);
        return URLToolkit.buildURLFromParts(basePartsForNormalise);
      }
      var relativeParts = this.parseURL(relativeURL);
      if (!relativeParts) {
        throw new Error('Error trying to parse relative URL.');
      }
      if (relativeParts.scheme) {
        // 2b) If the embedded URL starts with a scheme name, it is
        // interpreted as an absolute URL and we are done.
        if (!opts.alwaysNormalize) {
          return relativeURL;
        }
        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
        return URLToolkit.buildURLFromParts(relativeParts);
      }
      var baseParts = this.parseURL(baseURL);
      if (!baseParts) {
        throw new Error('Error trying to parse base URL.');
      }
      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
        baseParts.netLoc = pathParts[1];
        baseParts.path = pathParts[2];
      }
      if (baseParts.netLoc && !baseParts.path) {
        baseParts.path = '/';
      }
      var builtParts = {
        // 2c) Otherwise, the embedded URL inherits the scheme of
        // the base URL.
        scheme: baseParts.scheme,
        netLoc: relativeParts.netLoc,
        path: null,
        params: relativeParts.params,
        query: relativeParts.query,
        fragment: relativeParts.fragment
      };
      if (!relativeParts.netLoc) {
        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
        // (if any) of the base URL.
        builtParts.netLoc = baseParts.netLoc;
        // 4) If the embedded URL path is preceded by a slash "/", the
        // path is not relative and we skip to Step 7.
        if (relativeParts.path[0] !== '/') {
          if (!relativeParts.path) {
            // 5) If the embedded URL path is empty (and not preceded by a
            // slash), then the embedded URL inherits the base URL path
            builtParts.path = baseParts.path;
            // 5a) if the embedded URL's <params> is non-empty, we skip to
            // step 7; otherwise, it inherits the <params> of the base
            // URL (if any) and
            if (!relativeParts.params) {
              builtParts.params = baseParts.params;
              // 5b) if the embedded URL's <query> is non-empty, we skip to
              // step 7; otherwise, it inherits the <query> of the base
              // URL (if any) and we skip to step 7.
              if (!relativeParts.query) {
                builtParts.query = baseParts.query;
              }
            }
          } else {
            // 6) The last segment of the base URL's path (anything
            // following the rightmost slash "/", or the entire path if no
            // slash is present) is removed and the embedded URL's path is
            // appended in its place.
            var baseURLPath = baseParts.path;
            var newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) + relativeParts.path;
            builtParts.path = URLToolkit.normalizePath(newPath);
          }
        }
      }
      if (builtParts.path === null) {
        builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path;
      }
      return URLToolkit.buildURLFromParts(builtParts);
    },
    parseURL: function(url) {
      var parts = URL_REGEX.exec(url);
      if (!parts) {
        return null;
      }
      return {
        scheme: parts[1] || '',
        netLoc: parts[2] || '',
        path: parts[3] || '',
        params: parts[4] || '',
        query: parts[5] || '',
        fragment: parts[6] || ''
      };
    },
    normalizePath: function(path) {
      // The following operations are
      // then applied, in order, to the new path:
      // 6a) All occurrences of "./", where "." is a complete path
      // segment, are removed.
      // 6b) If the path ends with "." as a complete path segment,
      // that "." is removed.
      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
      // 6c) All occurrences of "<segment>/../", where <segment> is a
      // complete path segment not equal to "..", are removed.
      // Removal of these path segments is performed iteratively,
      // removing the leftmost matching pattern on each iteration,
      // until no matching pattern remains.
      // 6d) If the path ends with "<segment>/..", where <segment> is a
      // complete path segment not equal to "..", that
      // "<segment>/.." is removed.
      while (path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length) {} // jshint ignore:line
      return path.split('').reverse().join('');
    },
    buildURLFromParts: function(parts) {
      return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment;
    }
  };

/* jshint ignore:start */
  if(true)
    module.exports = URLToolkit;
  else if(typeof define === 'function' && define.amd)
    define([], function() { return URLToolkit; });
  else if(typeof exports === 'object')
    exports["URLToolkit"] = URLToolkit;
  else
    root["URLToolkit"] = URLToolkit;
})(this);
/* jshint ignore:end */


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _urlToolkit=__webpack_require__(14);var _urlToolkit2=_interopRequireDefault(_urlToolkit);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _errors=__webpack_require__(2);
var _playlistLoader=__webpack_require__(43);var _playlistLoader2=_interopRequireDefault(_playlistLoader);
var _fragmentLoader=__webpack_require__(41);var _fragmentLoader2=_interopRequireDefault(_fragmentLoader);
var _keyLoader=__webpack_require__(42);var _keyLoader2=_interopRequireDefault(_keyLoader);

var _streamController=__webpack_require__(25);var _streamController2=_interopRequireDefault(_streamController);
var _levelController=__webpack_require__(24);var _levelController2=_interopRequireDefault(_levelController);
var _id3TrackController=__webpack_require__(23);var _id3TrackController2=_interopRequireDefault(_id3TrackController);

var _logger=__webpack_require__(0);
var _events3=__webpack_require__(5);var _events4=_interopRequireDefault(_events3);
var _config=__webpack_require__(16);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Hls=function(){_createClass(Hls,null,[{key:'isSupported',value:function isSupported()





{
window.MediaSource=window.MediaSource||window.WebKitMediaSource;
return window.MediaSource&&
typeof window.MediaSource.isTypeSupported==='function'&&
window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
}},{key:'version',get:function get(){return "0.7.6";}},{key:'Events',get:function get()

{
return _events2.default;
}},{key:'ErrorTypes',get:function get()

{
return _errors.ErrorTypes;
}},{key:'ErrorDetails',get:function get()

{
return _errors.ErrorDetails;
}},{key:'DefaultConfig',get:function get()

{
if(!Hls.defaultConfig){
return _config.hlsDefaultConfig;
}
return Hls.defaultConfig;
},set:function set(

defaultConfig){
Hls.defaultConfig=defaultConfig;
}}]);

function Hls(){var _this=this;var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Hls);
var defaultConfig=Hls.DefaultConfig;

if((config.liveSyncDurationCount||config.liveMaxLatencyDurationCount)&&(config.liveSyncDuration||config.liveMaxLatencyDuration)){
throw new Error('Illegal hls.js config: don\'t mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration');
}

for(var prop in defaultConfig){
if(prop in config){continue;}
config[prop]=defaultConfig[prop];
}

if(config.liveMaxLatencyDurationCount!==undefined&&config.liveMaxLatencyDurationCount<=config.liveSyncDurationCount){
throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
}

if(config.liveMaxLatencyDuration!==undefined&&(config.liveMaxLatencyDuration<=config.liveSyncDuration||config.liveSyncDuration===undefined)){
throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
}

(0,_logger.enableLogs)(config.debug);
this.config=config;
this._autoLevelCapping=-1;

var observer=this.observer=new _events4.default();
observer.trigger=function trigger(event){for(var _len=arguments.length,data=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){data[_key-1]=arguments[_key];}
observer.emit.apply(observer,[event,event].concat(data));
};

observer.off=function off(event){for(var _len2=arguments.length,data=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){data[_key2-1]=arguments[_key2];}
observer.removeListener.apply(observer,[event].concat(data));
};
this.on=observer.on.bind(observer);
this.off=observer.off.bind(observer);
this.trigger=observer.trigger.bind(observer);


var abrController=this.abrController=new config.abrController(this);
var bufferController=new config.bufferController(this);
var capLevelController=new config.capLevelController(this);
var fpsController=new config.fpsController(this);
var playListLoader=new _playlistLoader2.default(this);
var fragmentLoader=new _fragmentLoader2.default(this);
var keyLoader=new _keyLoader2.default(this);
var id3TrackController=new _id3TrackController2.default(this);


var levelController=this.levelController=new _levelController2.default(this);
var streamController=this.streamController=new _streamController2.default(this);
var networkControllers=[levelController,streamController];


var Controller=config.audioStreamController;
if(Controller){
networkControllers.push(new Controller(this));
}
this.networkControllers=networkControllers;

var coreComponents=[playListLoader,fragmentLoader,keyLoader,abrController,bufferController,capLevelController,fpsController,id3TrackController];


Controller=config.audioTrackController;
if(Controller){
var audioTrackController=new Controller(this);
this.audioTrackController=audioTrackController;
coreComponents.push(audioTrackController);
}

Controller=config.subtitleTrackController;
if(Controller){
var subtitleTrackController=new Controller(this);
this.subtitleTrackController=subtitleTrackController;
coreComponents.push(subtitleTrackController);
}


[config.subtitleStreamController,config.timelineController].forEach(function(Controller){
if(Controller){
coreComponents.push(new Controller(_this));
}
});
this.coreComponents=coreComponents;
}_createClass(Hls,[{key:'destroy',value:function destroy()

{
_logger.logger.log('destroy');
this.trigger(_events2.default.DESTROYING);
this.detachMedia();
this.coreComponents.concat(this.networkControllers).forEach(function(component){component.destroy();});
this.url=null;
this.observer.removeAllListeners();
this._autoLevelCapping=-1;
}},{key:'attachMedia',value:function attachMedia(

media){
_logger.logger.log('attachMedia');
this.media=media;
this.trigger(_events2.default.MEDIA_ATTACHING,{media:media});
}},{key:'detachMedia',value:function detachMedia()

{
_logger.logger.log('detachMedia');
this.trigger(_events2.default.MEDIA_DETACHING);
this.media=null;
}},{key:'loadSource',value:function loadSource(

url){
url=_urlToolkit2.default.buildAbsoluteURL(window.location.href,url,{alwaysNormalize:true});
_logger.logger.log('loadSource:'+url);
this.url=url;

this.trigger(_events2.default.MANIFEST_LOADING,{url:url});
}},{key:'startLoad',value:function startLoad()

{var startPosition=arguments.length>0&&arguments[0]!==undefined?arguments[0]:-1;
_logger.logger.log('startLoad('+startPosition+')');
this.networkControllers.forEach(function(controller){controller.startLoad(startPosition);});
}},{key:'stopLoad',value:function stopLoad()

{
_logger.logger.log('stopLoad');
this.networkControllers.forEach(function(controller){controller.stopLoad();});
}},{key:'swapAudioCodec',value:function swapAudioCodec()

{
_logger.logger.log('swapAudioCodec');
this.streamController.swapAudioCodec();
}},{key:'recoverMediaError',value:function recoverMediaError()

{
_logger.logger.log('recoverMediaError');
var media=this.media;
this.detachMedia();
this.attachMedia(media);
}},{key:'levels',get:function get()


{
return this.levelController.levels;
}},{key:'currentLevel',get:function get()


{
return this.streamController.currentLevel;
},set:function set(


newLevel){
_logger.logger.log('set currentLevel:'+newLevel);
this.loadLevel=newLevel;
this.streamController.immediateLevelSwitch();
}},{key:'nextLevel',get:function get()


{
return this.streamController.nextLevel;
},set:function set(


newLevel){
_logger.logger.log('set nextLevel:'+newLevel);
this.levelController.manualLevel=newLevel;
this.streamController.nextLevelSwitch();
}},{key:'loadLevel',get:function get()


{
return this.levelController.level;
},set:function set(


newLevel){
_logger.logger.log('set loadLevel:'+newLevel);
this.levelController.manualLevel=newLevel;
}},{key:'nextLoadLevel',get:function get()


{
return this.levelController.nextLoadLevel;
},set:function set(


level){
this.levelController.nextLoadLevel=level;
}},{key:'firstLevel',get:function get()



{
return Math.max(this.levelController.firstLevel,this.minAutoLevel);
},set:function set(



newLevel){
_logger.logger.log('set firstLevel:'+newLevel);
this.levelController.firstLevel=newLevel;
}},{key:'startLevel',get:function get()





{
return this.levelController.startLevel;
},set:function set(





newLevel){
_logger.logger.log('set startLevel:'+newLevel);
var hls=this;

if(newLevel!==-1){
newLevel=Math.max(newLevel,hls.minAutoLevel);
}
hls.levelController.startLevel=newLevel;
}},{key:'autoLevelCapping',get:function get()


{
return this._autoLevelCapping;
},set:function set(


newLevel){
_logger.logger.log('set autoLevelCapping:'+newLevel);
this._autoLevelCapping=newLevel;
}},{key:'autoLevelEnabled',get:function get()


{
return this.levelController.manualLevel===-1;
}},{key:'manualLevel',get:function get()


{
return this.levelController.manualLevel;
}},{key:'minAutoLevel',get:function get()


{
var hls=this,levels=hls.levels,minAutoBitrate=hls.config.minAutoBitrate,len=levels?levels.length:0;
for(var i=0;i<len;i++){
var levelNextBitrate=levels[i].realBitrate?Math.max(levels[i].realBitrate,levels[i].bitrate):levels[i].bitrate;
if(levelNextBitrate>minAutoBitrate){
return i;
}
}
return 0;
}},{key:'maxAutoLevel',get:function get()


{
var hls=this;
var levels=hls.levels;
var autoLevelCapping=hls.autoLevelCapping;
var maxAutoLevel=void 0;
if(autoLevelCapping===-1&&levels&&levels.length){
maxAutoLevel=levels.length-1;
}else{
maxAutoLevel=autoLevelCapping;
}
return maxAutoLevel;
}},{key:'nextAutoLevel',get:function get()


{
var hls=this;

return Math.min(Math.max(hls.abrController.nextAutoLevel,hls.minAutoLevel),hls.maxAutoLevel);
},set:function set(




nextLevel){
var hls=this;
hls.abrController.nextAutoLevel=Math.max(hls.minAutoLevel,nextLevel);
}},{key:'audioTracks',get:function get()


{
var audioTrackController=this.audioTrackController;
return audioTrackController?audioTrackController.audioTracks:[];
}},{key:'audioTrack',get:function get()


{
var audioTrackController=this.audioTrackController;
return audioTrackController?audioTrackController.audioTrack:-1;
},set:function set(


audioTrackId){
var audioTrackController=this.audioTrackController;
if(audioTrackController){
audioTrackController.audioTrack=audioTrackId;
}
}},{key:'liveSyncPosition',get:function get()

{
return this.streamController.liveSyncPosition;
}},{key:'subtitleTracks',get:function get()


{
var subtitleTrackController=this.subtitleTrackController;
return subtitleTrackController?subtitleTrackController.subtitleTracks:[];
}},{key:'subtitleTrack',get:function get()


{
var subtitleTrackController=this.subtitleTrackController;
return subtitleTrackController?subtitleTrackController.subtitleTrack:-1;
},set:function set(


subtitleTrackId){
var subtitleTrackController=this.subtitleTrackController;
if(subtitleTrackController){
subtitleTrackController.subtitleTrack=subtitleTrackId;
}
}}]);return Hls;}();exports.default=


Hls;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports,"__esModule",{value:true});exports.hlsDefaultConfig=undefined;

var _abrController=__webpack_require__(17);var _abrController2=_interopRequireDefault(_abrController);
var _bufferController=__webpack_require__(20);var _bufferController2=_interopRequireDefault(_bufferController);
var _capLevelController=__webpack_require__(21);var _capLevelController2=_interopRequireDefault(_capLevelController);
var _fpsController=__webpack_require__(22);var _fpsController2=_interopRequireDefault(_fpsController);
var _xhrLoader=__webpack_require__(54);var _xhrLoader2=_interopRequireDefault(_xhrLoader);


var _audioTrackController=__webpack_require__(19);var _audioTrackController2=_interopRequireDefault(_audioTrackController);
var _audioStreamController=__webpack_require__(18);var _audioStreamController2=_interopRequireDefault(_audioStreamController);



var _cues=__webpack_require__(49);var _cues2=_interopRequireDefault(_cues);
var _timelineController=__webpack_require__(28);var _timelineController2=_interopRequireDefault(_timelineController);
var _subtitleTrackController=__webpack_require__(27);var _subtitleTrackController2=_interopRequireDefault(_subtitleTrackController);
var _subtitleStreamController=__webpack_require__(26);var _subtitleStreamController2=_interopRequireDefault(_subtitleStreamController);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var hlsDefaultConfig=exports.hlsDefaultConfig={
autoStartLoad:true,
startPosition:-1,
defaultAudioCodec:undefined,
debug:false,
capLevelOnFPSDrop:false,
capLevelToPlayerSize:false,
initialLiveManifestSize:1,
maxBufferLength:30,
maxBufferSize:60*1000*1000,
maxBufferHole:0.5,
maxSeekHole:2,
lowBufferWatchdogPeriod:0.5,
highBufferWatchdogPeriod:3,
nudgeOffset:0.1,
nudgeMaxRetry:3,
maxFragLookUpTolerance:0.2,
liveSyncDurationCount:3,
liveMaxLatencyDurationCount:Infinity,
liveSyncDuration:undefined,
liveMaxLatencyDuration:undefined,
maxMaxBufferLength:600,
enableWorker:true,
enableSoftwareAES:true,
manifestLoadingTimeOut:10000,
manifestLoadingMaxRetry:1,
manifestLoadingRetryDelay:1000,
manifestLoadingMaxRetryTimeout:64000,
startLevel:undefined,
levelLoadingTimeOut:10000,
levelLoadingMaxRetry:4,
levelLoadingRetryDelay:1000,
levelLoadingMaxRetryTimeout:64000,
fragLoadingTimeOut:20000,
fragLoadingMaxRetry:6,
fragLoadingRetryDelay:1000,
fragLoadingMaxRetryTimeout:64000,
fragLoadingLoopThreshold:3,
startFragPrefetch:false,
fpsDroppedMonitoringPeriod:5000,
fpsDroppedMonitoringThreshold:0.2,
appendErrorMaxRetry:3,
loader:_xhrLoader2.default,

fLoader:undefined,
pLoader:undefined,
xhrSetup:undefined,
fetchSetup:undefined,
abrController:_abrController2.default,
bufferController:_bufferController2.default,
capLevelController:_capLevelController2.default,
fpsController:_fpsController2.default,

audioStreamController:_audioStreamController2.default,
audioTrackController:_audioTrackController2.default,


subtitleStreamController:_subtitleStreamController2.default,
subtitleTrackController:_subtitleTrackController2.default,
timelineController:_timelineController2.default,
cueHandler:_cues2.default,
enableCEA708Captions:true,
enableWebVTT:true,
captionsTextTrack1Label:'English',
captionsTextTrack1LanguageCode:'en',
captionsTextTrack2Label:'Spanish',
captionsTextTrack2LanguageCode:'es',

stretchShortVideoTrack:false,
forceKeyFrameOnDiscontinuity:true,
abrEwmaFastLive:3,
abrEwmaSlowLive:9,
abrEwmaFastVoD:3,
abrEwmaSlowVoD:9,
abrEwmaDefaultEstimate:5e5,
abrBandWidthFactor:0.95,
abrBandWidthUpFactor:0.7,
abrMaxWithRealBitrate:false,
maxStarvationDelay:4,
maxLoadingDelay:4,
minAutoBitrate:0};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();





var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _bufferHelper=__webpack_require__(4);var _bufferHelper2=_interopRequireDefault(_bufferHelper);
var _errors=__webpack_require__(2);
var _logger=__webpack_require__(0);
var _ewmaBandwidthEstimator=__webpack_require__(50);var _ewmaBandwidthEstimator2=_interopRequireDefault(_ewmaBandwidthEstimator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AbrController=function(_EventHandler){_inherits(AbrController,_EventHandler);

function AbrController(hls){_classCallCheck(this,AbrController);var _this=_possibleConstructorReturn(this,(AbrController.__proto__||Object.getPrototypeOf(AbrController)).call(this,
hls,_events2.default.FRAG_LOADING,
_events2.default.FRAG_LOADED,
_events2.default.FRAG_BUFFERED,
_events2.default.ERROR));
_this.lastLoadedFragLevel=0;
_this._nextAutoLevel=-1;
_this.hls=hls;
_this.onCheck=_this._abandonRulesCheck.bind(_this);return _this;
}_createClass(AbrController,[{key:'destroy',value:function destroy()

{
this.clearTimer();
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onFragLoading',value:function onFragLoading(

data){
var frag=data.frag;
if(frag.type==='main'){
if(!this.timer){
this.timer=setInterval(this.onCheck,100);
}


if(!this._bwEstimator){
var hls=this.hls,
level=data.frag.level,
isLive=hls.levels[level].details.live,
config=hls.config,
ewmaFast=void 0,ewmaSlow=void 0;

if(isLive){
ewmaFast=config.abrEwmaFastLive;
ewmaSlow=config.abrEwmaSlowLive;
}else{
ewmaFast=config.abrEwmaFastVoD;
ewmaSlow=config.abrEwmaSlowVoD;
}
this._bwEstimator=new _ewmaBandwidthEstimator2.default(hls,ewmaSlow,ewmaFast,config.abrEwmaDefaultEstimate);
}
this.fragCurrent=frag;
}
}},{key:'_abandonRulesCheck',value:function _abandonRulesCheck()

{





var hls=this.hls,v=hls.media,frag=this.fragCurrent,loader=frag.loader,minAutoLevel=hls.minAutoLevel;


if(!loader||loader.stats&&loader.stats.aborted){
_logger.logger.warn('frag loader destroy or aborted, disarm abandonRules');
this.clearTimer();
return;
}
var stats=loader.stats;


if(v&&(!v.paused&&v.playbackRate!==0||!v.readyState)&&frag.autoLevel&&frag.level){
var requestDelay=performance.now()-stats.trequest,
playbackRate=Math.abs(v.playbackRate);

if(requestDelay>500*frag.duration/playbackRate){
var levels=hls.levels,
loadRate=Math.max(1,stats.bw?stats.bw/8:stats.loaded*1000/requestDelay),

level=levels[frag.level],
levelBitrate=level.realBitrate?Math.max(level.realBitrate,level.bitrate):level.bitrate,
expectedLen=stats.total?stats.total:Math.max(stats.loaded,Math.round(frag.duration*levelBitrate/8)),
pos=v.currentTime,
fragLoadedDelay=(expectedLen-stats.loaded)/loadRate,
bufferStarvationDelay=(_bufferHelper2.default.bufferInfo(v,pos,hls.config.maxBufferHole).end-pos)/playbackRate;



if(bufferStarvationDelay<2*frag.duration/playbackRate&&fragLoadedDelay>bufferStarvationDelay){
var fragLevelNextLoadedDelay=void 0,nextLoadLevel=void 0;


for(nextLoadLevel=frag.level-1;nextLoadLevel>minAutoLevel;nextLoadLevel--){



var levelNextBitrate=levels[nextLoadLevel].realBitrate?Math.max(levels[nextLoadLevel].realBitrate,levels[nextLoadLevel].bitrate):levels[nextLoadLevel].bitrate;
fragLevelNextLoadedDelay=frag.duration*levelNextBitrate/(8*0.8*loadRate);
if(fragLevelNextLoadedDelay<bufferStarvationDelay){

break;
}
}


if(fragLevelNextLoadedDelay<fragLoadedDelay){
_logger.logger.warn('loading too slow, abort fragment loading and switch to level '+nextLoadLevel+':fragLoadedDelay['+nextLoadLevel+']<fragLoadedDelay['+(frag.level-1)+'];bufferStarvationDelay:'+fragLevelNextLoadedDelay.toFixed(1)+'<'+fragLoadedDelay.toFixed(1)+':'+bufferStarvationDelay.toFixed(1));

hls.nextLoadLevel=nextLoadLevel;

this._bwEstimator.sample(requestDelay,stats.loaded);

loader.abort();

this.clearTimer();
hls.trigger(_events2.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:frag,stats:stats});
}
}
}
}
}},{key:'onFragLoaded',value:function onFragLoaded(

data){
var frag=data.frag;
if(frag.type==='main'&&!isNaN(frag.sn)){

this.clearTimer();

this.lastLoadedFragLevel=frag.level;

this._nextAutoLevel=-1;


if(this.hls.config.abrMaxWithRealBitrate){
var level=this.hls.levels[frag.level];
var loadedBytes=(level.loaded?level.loaded.bytes:0)+data.stats.loaded;
var loadedDuration=(level.loaded?level.loaded.duration:0)+data.frag.duration;
level.loaded={bytes:loadedBytes,duration:loadedDuration};
level.realBitrate=Math.round(8*loadedBytes/loadedDuration);
}

if(data.frag.bitrateTest){
var stats=data.stats;
stats.tparsed=stats.tbuffered=stats.tload;
this.onFragBuffered(data);
}
}
}},{key:'onFragBuffered',value:function onFragBuffered(

data){
var stats=data.stats,frag=data.frag;




if(stats.aborted!==true&&frag.loadCounter===1&&frag.type==='main'&&!isNaN(frag.sn)&&(!frag.bitrateTest||stats.tload===stats.tbuffered)){



var fragLoadingProcessingMs=stats.tparsed-stats.trequest;
_logger.logger.log('latency/loading/parsing/append/kbps:'+Math.round(stats.tfirst-stats.trequest)+'/'+Math.round(stats.tload-stats.tfirst)+'/'+Math.round(stats.tparsed-stats.tload)+'/'+Math.round(stats.tbuffered-stats.tparsed)+'/'+Math.round(8*stats.loaded/(stats.tbuffered-stats.trequest)));
this._bwEstimator.sample(fragLoadingProcessingMs,stats.loaded);
stats.bwEstimate=this._bwEstimator.getEstimate();

if(frag.bitrateTest){
this.bitrateTestDelay=fragLoadingProcessingMs/1000;
}else{
this.bitrateTestDelay=0;
}
}
}},{key:'onError',value:function onError(

data){

switch(data.details){
case _errors.ErrorDetails.FRAG_LOAD_ERROR:
case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
this.clearTimer();
break;
default:
break;}

}},{key:'clearTimer',value:function clearTimer()

{
if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
}},{key:'_findBestLevel',value:function _findBestLevel(






























































currentLevel,currentFragDuration,currentBw,minAutoLevel,maxAutoLevel,maxFetchDuration,bwFactor,bwUpFactor,levels){
for(var i=maxAutoLevel;i>=minAutoLevel;i--){
var levelInfo=levels[i],
levelDetails=levelInfo.details,
avgDuration=levelDetails?levelDetails.totalduration/levelDetails.fragments.length:currentFragDuration,
live=levelDetails?levelDetails.live:false,
adjustedbw=void 0;






if(i<=currentLevel){
adjustedbw=bwFactor*currentBw;
}else{
adjustedbw=bwUpFactor*currentBw;
}
var bitrate=levels[i].realBitrate?Math.max(levels[i].realBitrate,levels[i].bitrate):levels[i].bitrate,
fetchDuration=bitrate*avgDuration/adjustedbw;

_logger.logger.trace('level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: '+i+'/'+Math.round(adjustedbw)+'/'+bitrate+'/'+avgDuration+'/'+maxFetchDuration+'/'+fetchDuration);

if(adjustedbw>bitrate&&(


!fetchDuration||live||fetchDuration<maxFetchDuration)){


return i;
}
}

return-1;
}},{key:'nextAutoLevel',get:function get(){var forcedAutoLevel=this._nextAutoLevel;var bwEstimator=this._bwEstimator;if(forcedAutoLevel!==-1&&(!bwEstimator||!bwEstimator.canEstimate())){return forcedAutoLevel;}var nextABRAutoLevel=this._nextABRAutoLevel;if(forcedAutoLevel!==-1){nextABRAutoLevel=Math.min(forcedAutoLevel,nextABRAutoLevel);}return nextABRAutoLevel;},set:function set(

nextLevel){
this._nextAutoLevel=nextLevel;
}},{key:'_nextABRAutoLevel',get:function get(){var hls=this.hls,maxAutoLevel=hls.maxAutoLevel,levels=hls.levels,config=hls.config,minAutoLevel=hls.minAutoLevel;var v=hls.media,currentLevel=this.lastLoadedFragLevel,currentFragDuration=this.fragCurrent?this.fragCurrent.duration:0,pos=v?v.currentTime:0,playbackRate=v&&v.playbackRate!==0?Math.abs(v.playbackRate):1.0,avgbw=this._bwEstimator?this._bwEstimator.getEstimate():config.abrEwmaDefaultEstimate,bufferStarvationDelay=(_bufferHelper2.default.bufferInfo(v,pos,config.maxBufferHole).end-pos)/playbackRate;var bestLevel=this._findBestLevel(currentLevel,currentFragDuration,avgbw,minAutoLevel,maxAutoLevel,bufferStarvationDelay,config.abrBandWidthFactor,config.abrBandWidthUpFactor,levels);if(bestLevel>=0){return bestLevel;}else{_logger.logger.trace('rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering');var maxStarvationDelay=currentFragDuration?Math.min(currentFragDuration,config.maxStarvationDelay):config.maxStarvationDelay,bwFactor=config.abrBandWidthFactor,bwUpFactor=config.abrBandWidthUpFactor;if(bufferStarvationDelay===0){var bitrateTestDelay=this.bitrateTestDelay;if(bitrateTestDelay){var maxLoadingDelay=currentFragDuration?Math.min(currentFragDuration,config.maxLoadingDelay):config.maxLoadingDelay;maxStarvationDelay=maxLoadingDelay-bitrateTestDelay;_logger.logger.trace('bitrate test took '+Math.round(1000*bitrateTestDelay)+'ms, set first fragment max fetchDuration to '+Math.round(1000*maxStarvationDelay)+' ms');bwFactor=bwUpFactor=1;}}bestLevel=this._findBestLevel(currentLevel,currentFragDuration,avgbw,minAutoLevel,maxAutoLevel,bufferStarvationDelay+maxStarvationDelay,bwFactor,bwUpFactor,levels);return Math.max(bestLevel,0);}}}]);return AbrController;}(_eventHandler2.default);exports.default=


AbrController;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _binarySearch=__webpack_require__(11);var _binarySearch2=_interopRequireDefault(_binarySearch);
var _bufferHelper=__webpack_require__(4);var _bufferHelper2=_interopRequireDefault(_bufferHelper);
var _demuxer=__webpack_require__(9);var _demuxer2=_interopRequireDefault(_demuxer);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _levelHelper=__webpack_require__(10);var _levelHelper2=_interopRequireDefault(_levelHelper);
var _timeRanges=__webpack_require__(12);var _timeRanges2=_interopRequireDefault(_timeRanges);
var _errors=__webpack_require__(2);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var State={
STOPPED:'STOPPED',
STARTING:'STARTING',
IDLE:'IDLE',
PAUSED:'PAUSED',
KEY_LOADING:'KEY_LOADING',
FRAG_LOADING:'FRAG_LOADING',
FRAG_LOADING_WAITING_RETRY:'FRAG_LOADING_WAITING_RETRY',
WAITING_TRACK:'WAITING_TRACK',
PARSING:'PARSING',
PARSED:'PARSED',
BUFFER_FLUSHING:'BUFFER_FLUSHING',
ENDED:'ENDED',
ERROR:'ERROR',
WAITING_INIT_PTS:'WAITING_INIT_PTS'};var


AudioStreamController=function(_EventHandler){_inherits(AudioStreamController,_EventHandler);

function AudioStreamController(hls){_classCallCheck(this,AudioStreamController);var _this=_possibleConstructorReturn(this,(AudioStreamController.__proto__||Object.getPrototypeOf(AudioStreamController)).call(this,
hls,
_events2.default.MEDIA_ATTACHED,
_events2.default.MEDIA_DETACHING,
_events2.default.AUDIO_TRACKS_UPDATED,
_events2.default.AUDIO_TRACK_SWITCHING,
_events2.default.AUDIO_TRACK_LOADED,
_events2.default.KEY_LOADED,
_events2.default.FRAG_LOADED,
_events2.default.FRAG_PARSING_INIT_SEGMENT,
_events2.default.FRAG_PARSING_DATA,
_events2.default.FRAG_PARSED,
_events2.default.ERROR,
_events2.default.BUFFER_CREATED,
_events2.default.BUFFER_APPENDED,
_events2.default.BUFFER_FLUSHED,
_events2.default.INIT_PTS_FOUND));

_this.config=hls.config;
_this.audioCodecSwap=false;
_this.ticks=0;
_this._state=State.STOPPED;
_this.ontick=_this.tick.bind(_this);
_this.initPTS=[];
_this.waitingFragment=null;return _this;
}_createClass(AudioStreamController,[{key:'destroy',value:function destroy()

{
this.stopLoad();
if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
_eventHandler2.default.prototype.destroy.call(this);
this.state=State.STOPPED;
}},{key:'onInitPtsFound',value:function onInitPtsFound(


data){
var demuxerId=data.id,cc=data.frag.cc,initPTS=data.initPTS;
if(demuxerId==='main'){


this.initPTS[cc]=initPTS;
_logger.logger.log('InitPTS for cc:'+cc+' found from video track:'+initPTS);



if(this.state===State.WAITING_INIT_PTS){
_logger.logger.log('sending pending audio frag to demuxer');
this.state=State.FRAG_LOADING;


this.onFragLoaded(this.waitingFragment);

this.waitingFragment=null;
}
}
}},{key:'startLoad',value:function startLoad(

startPosition){
if(this.tracks){
var lastCurrentTime=this.lastCurrentTime;
this.stopLoad();
if(!this.timer){
this.timer=setInterval(this.ontick,100);
}
this.fragLoadError=0;
if(lastCurrentTime>0&&startPosition===-1){
_logger.logger.log('audio:override startPosition with lastCurrentTime @'+lastCurrentTime.toFixed(3));
this.state=State.IDLE;
}else{
this.lastCurrentTime=this.startPosition?this.startPosition:startPosition;
this.state=State.STARTING;
}
this.nextLoadPosition=this.startPosition=this.lastCurrentTime;
this.tick();
}else{
this.startPosition=startPosition;
this.state=State.STOPPED;
}
}},{key:'stopLoad',value:function stopLoad()

{
var frag=this.fragCurrent;
if(frag){
if(frag.loader){
frag.loader.abort();
}
this.fragCurrent=null;
}
this.fragPrevious=null;
if(this.demuxer){
this.demuxer.destroy();
this.demuxer=null;
}
this.state=State.STOPPED;
}},{key:'tick',value:function tick()













{
this.ticks++;
if(this.ticks===1){
this.doTick();
if(this.ticks>1){
setTimeout(this.tick,1);
}
this.ticks=0;
}
}},{key:'doTick',value:function doTick()

{
var pos,track,trackDetails,hls=this.hls,config=hls.config;

switch(this.state){
case State.ERROR:

case State.PAUSED:

case State.BUFFER_FLUSHING:
break;
case State.STARTING:
this.state=State.WAITING_TRACK;
this.loadedmetadata=false;
break;
case State.IDLE:
var tracks=this.tracks;

if(!tracks){
break;
}




if(!this.media&&(
this.startFragRequested||!config.startFragPrefetch)){
break;
}



if(this.loadedmetadata){
pos=this.media.currentTime;
}else{
pos=this.nextLoadPosition;
}
var media=this.mediaBuffer?this.mediaBuffer:this.media,
bufferInfo=_bufferHelper2.default.bufferInfo(media,pos,config.maxBufferHole),
bufferLen=bufferInfo.len,
bufferEnd=bufferInfo.end,
fragPrevious=this.fragPrevious,
maxBufLen=config.maxMaxBufferLength,
audioSwitch=this.audioSwitch,
trackId=this.trackId;


if((bufferLen<maxBufLen||audioSwitch)&&trackId<tracks.length){
trackDetails=tracks[trackId].details;

if(typeof trackDetails==='undefined'){
this.state=State.WAITING_TRACK;
break;
}


if(!audioSwitch&&!trackDetails.live&&fragPrevious&&fragPrevious.sn===trackDetails.endSN){



if(!this.media.seeking||this.media.duration-bufferEnd<fragPrevious.duration/2){

this.hls.trigger(_events2.default.BUFFER_EOS,{type:'audio'});
this.state=State.ENDED;
break;
}
}


var fragments=trackDetails.fragments,
fragLen=fragments.length,
start=fragments[0].start,
end=fragments[fragLen-1].start+fragments[fragLen-1].duration,
frag=void 0;


if(audioSwitch){
if(trackDetails.live&&!trackDetails.PTSKnown){
_logger.logger.log('switching audiotrack, live stream, unknown PTS,load first fragment');
bufferEnd=0;
}else{
bufferEnd=pos;

if(trackDetails.PTSKnown&&pos<start){

if(bufferInfo.end>start||bufferInfo.nextStart){
_logger.logger.log('alt audio track ahead of main track, seek to start of alt audio track');
this.media.currentTime=start+0.05;
}else{
return;
}
}
}
}
if(trackDetails.initSegment&&!trackDetails.initSegment.data){
frag=trackDetails.initSegment;
}else

if(bufferEnd<=start){
frag=fragments[0];
if(trackDetails.live&&frag.loadIdx&&frag.loadIdx===this.fragLoadIdx){


var nextBuffered=bufferInfo.nextStart?bufferInfo.nextStart:start;
_logger.logger.log('no alt audio available @currentTime:'+this.media.currentTime+', seeking @'+(nextBuffered+0.05));
this.media.currentTime=nextBuffered+0.05;
return;
}
}else{
var foundFrag=void 0;
var maxFragLookUpTolerance=config.maxFragLookUpTolerance;
var fragNext=fragPrevious?fragments[fragPrevious.sn-fragments[0].sn+1]:undefined;
var fragmentWithinToleranceTest=function fragmentWithinToleranceTest(candidate){














var candidateLookupTolerance=Math.min(maxFragLookUpTolerance,candidate.duration);
if(candidate.start+candidate.duration-candidateLookupTolerance<=bufferEnd){
return 1;
}else
if(candidate.start-candidateLookupTolerance>bufferEnd&&candidate.start){
return-1;
}
return 0;
};

if(bufferEnd<end){
if(bufferEnd>end-maxFragLookUpTolerance){
maxFragLookUpTolerance=0;
}

if(fragNext&&!fragmentWithinToleranceTest(fragNext)){
foundFrag=fragNext;
}else{
foundFrag=_binarySearch2.default.search(fragments,fragmentWithinToleranceTest);
}
}else{

foundFrag=fragments[fragLen-1];
}
if(foundFrag){
frag=foundFrag;
start=foundFrag.start;

if(fragPrevious&&frag.level===fragPrevious.level&&frag.sn===fragPrevious.sn){
if(frag.sn<trackDetails.endSN){
frag=fragments[frag.sn+1-trackDetails.startSN];
_logger.logger.log('SN just loaded, load next one: '+frag.sn);
}else{
frag=null;
}
}
}
}
if(frag){

if(frag.decryptdata&&frag.decryptdata.uri!=null&&frag.decryptdata.key==null){
_logger.logger.log('Loading key for '+frag.sn+' of ['+trackDetails.startSN+' ,'+trackDetails.endSN+'],track '+trackId);
this.state=State.KEY_LOADING;
hls.trigger(_events2.default.KEY_LOADING,{frag:frag});
}else{
_logger.logger.log('Loading '+frag.sn+' of ['+trackDetails.startSN+' ,'+trackDetails.endSN+'],track '+trackId+', currentTime:'+pos+',bufferEnd:'+bufferEnd.toFixed(3));

if(this.fragLoadIdx!==undefined){
this.fragLoadIdx++;
}else{
this.fragLoadIdx=0;
}
if(frag.loadCounter){
frag.loadCounter++;
var maxThreshold=config.fragLoadingLoopThreshold;

if(frag.loadCounter>maxThreshold&&Math.abs(this.fragLoadIdx-frag.loadIdx)<maxThreshold){
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:false,frag:frag});
return;
}
}else{
frag.loadCounter=1;
}
frag.loadIdx=this.fragLoadIdx;
this.fragCurrent=frag;
this.startFragRequested=true;
if(!isNaN(frag.sn)){
this.nextLoadPosition=frag.start+frag.duration;
}
hls.trigger(_events2.default.FRAG_LOADING,{frag:frag});
this.state=State.FRAG_LOADING;
}
}
}
break;
case State.WAITING_TRACK:
track=this.tracks[this.trackId];

if(track&&track.details){
this.state=State.IDLE;
}
break;
case State.FRAG_LOADING_WAITING_RETRY:
var now=performance.now();
var retryDate=this.retryDate;
media=this.media;
var isSeeking=media&&media.seeking;

if(!retryDate||now>=retryDate||isSeeking){
_logger.logger.log('audioStreamController: retryDate reached, switch back to IDLE state');
this.state=State.IDLE;
}
break;
case State.WAITING_INIT_PTS:
case State.STOPPED:
case State.FRAG_LOADING:
case State.PARSING:
case State.PARSED:
case State.ENDED:
break;
default:
break;}

}},{key:'onMediaAttached',value:function onMediaAttached(

data){
var media=this.media=this.mediaBuffer=data.media;
this.onvseeking=this.onMediaSeeking.bind(this);
this.onvended=this.onMediaEnded.bind(this);
media.addEventListener('seeking',this.onvseeking);
media.addEventListener('ended',this.onvended);
var config=this.config;
if(this.tracks&&config.autoStartLoad){
this.startLoad(config.startPosition);
}
}},{key:'onMediaDetaching',value:function onMediaDetaching()

{
var media=this.media;
if(media&&media.ended){
_logger.logger.log('MSE detaching and video ended, reset startPosition');
this.startPosition=this.lastCurrentTime=0;
}


var tracks=this.tracks;
if(tracks){

tracks.forEach(function(track){
if(track.details){
track.details.fragments.forEach(function(fragment){
fragment.loadCounter=undefined;
});
}
});
}

if(media){
media.removeEventListener('seeking',this.onvseeking);
media.removeEventListener('ended',this.onvended);
this.onvseeking=this.onvseeked=this.onvended=null;
}
this.media=this.mediaBuffer=null;
this.loadedmetadata=false;
this.stopLoad();
}},{key:'onMediaSeeking',value:function onMediaSeeking()

{
if(this.state===State.ENDED){

this.state=State.IDLE;
}
if(this.media){
this.lastCurrentTime=this.media.currentTime;
}

if(this.fragLoadIdx!==undefined){
this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold;
}

this.tick();
}},{key:'onMediaEnded',value:function onMediaEnded()

{

this.startPosition=this.lastCurrentTime=0;
}},{key:'onAudioTracksUpdated',value:function onAudioTracksUpdated(


data){
_logger.logger.log('audio tracks updated');
this.tracks=data.audioTracks;
}},{key:'onAudioTrackSwitching',value:function onAudioTrackSwitching(

data){

var altAudio=!!data.url;
this.trackId=data.id;
this.state=State.IDLE;

this.fragCurrent=null;
this.state=State.PAUSED;
this.waitingFragment=null;

if(!altAudio){
if(this.demuxer){
this.demuxer.destroy();
this.demuxer=null;
}
}else{

if(!this.timer){
this.timer=setInterval(this.ontick,100);
}
}


if(altAudio){
this.audioSwitch=true;

this.state=State.IDLE;

if(this.fragLoadIdx!==undefined){
this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold;
}
}
this.tick();
}},{key:'onAudioTrackLoaded',value:function onAudioTrackLoaded(

data){
var newDetails=data.details,
trackId=data.id,
track=this.tracks[trackId],
duration=newDetails.totalduration,
sliding=0;

_logger.logger.log('track '+trackId+' loaded ['+newDetails.startSN+','+newDetails.endSN+'],duration:'+duration);

if(newDetails.live){
var curDetails=track.details;
if(curDetails&&newDetails.fragments.length>0){

_levelHelper2.default.mergeDetails(curDetails,newDetails);
sliding=newDetails.fragments[0].start;


if(newDetails.PTSKnown){
_logger.logger.log('live audio playlist sliding:'+sliding.toFixed(3));
}else{
_logger.logger.log('live audio playlist - outdated PTS, unknown sliding');
}
}else{
newDetails.PTSKnown=false;
_logger.logger.log('live audio playlist - first load, unknown sliding');
}
}else{
newDetails.PTSKnown=false;
}
track.details=newDetails;


if(!this.startFragRequested){

if(this.startPosition===-1){

var startTimeOffset=newDetails.startTimeOffset;
if(!isNaN(startTimeOffset)){
_logger.logger.log('start time offset found in playlist, adjust startPosition to '+startTimeOffset);
this.startPosition=startTimeOffset;
}else{
this.startPosition=0;
}
}
this.nextLoadPosition=this.startPosition;
}

if(this.state===State.WAITING_TRACK){
this.state=State.IDLE;
}

this.tick();
}},{key:'onKeyLoaded',value:function onKeyLoaded()

{
if(this.state===State.KEY_LOADING){
this.state=State.IDLE;
this.tick();
}
}},{key:'onFragLoaded',value:function onFragLoaded(

data){
var fragCurrent=this.fragCurrent,
fragLoaded=data.frag;
if(this.state===State.FRAG_LOADING&&
fragCurrent&&
fragLoaded.type==='audio'&&
fragLoaded.level===fragCurrent.level&&
fragLoaded.sn===fragCurrent.sn){
var track=this.tracks[this.trackId],
details=track.details,
duration=details.totalduration,
trackId=fragCurrent.level,
sn=fragCurrent.sn,
cc=fragCurrent.cc,
audioCodec=this.config.defaultAudioCodec||track.audioCodec||'mp4a.40.2',
stats=this.stats=data.stats;
if(sn==='initSegment'){
this.state=State.IDLE;

stats.tparsed=stats.tbuffered=performance.now();
details.initSegment.data=data.payload;
this.hls.trigger(_events2.default.FRAG_BUFFERED,{stats:stats,frag:fragCurrent,id:'audio'});
this.tick();
}else{
this.state=State.PARSING;

this.appended=false;
if(!this.demuxer){
this.demuxer=new _demuxer2.default(this.hls,'audio');
}


var initPTS=this.initPTS[cc];
var initSegmentData=details.initSegment?details.initSegment.data:[];
if(details.initSegment||initPTS!==undefined){
this.pendingBuffering=true;
_logger.logger.log('Demuxing '+sn+' of ['+details.startSN+' ,'+details.endSN+'],track '+trackId);

var accurateTimeOffset=false;
this.demuxer.push(data.payload,initSegmentData,audioCodec,null,fragCurrent,duration,accurateTimeOffset,initPTS);
}else{
_logger.logger.log('unknown video PTS for continuity counter '+cc+', waiting for video PTS before demuxing audio frag '+sn+' of ['+details.startSN+' ,'+details.endSN+'],track '+trackId);
this.waitingFragment=data;
this.state=State.WAITING_INIT_PTS;
}
}
}
this.fragLoadError=0;
}},{key:'onFragParsingInitSegment',value:function onFragParsingInitSegment(

data){
var fragCurrent=this.fragCurrent;
var fragNew=data.frag;
if(fragCurrent&&
data.id==='audio'&&
fragNew.sn===fragCurrent.sn&&
fragNew.level===fragCurrent.level&&
this.state===State.PARSING){
var tracks=data.tracks,track=void 0;


if(tracks.video){
delete tracks.video;
}


track=tracks.audio;
if(track){
track.levelCodec='mp4a.40.2';
track.id=data.id;
this.hls.trigger(_events2.default.BUFFER_CODECS,tracks);
_logger.logger.log('audio track:audio,container:'+track.container+',codecs[level/parsed]=['+track.levelCodec+'/'+track.codec+']');
var initSegment=track.initSegment;
if(initSegment){
var appendObj={type:'audio',data:initSegment,parent:'audio',content:'initSegment'};
if(this.audioSwitch){
this.pendingData=[appendObj];
}else{
this.appended=true;

this.pendingBuffering=true;
this.hls.trigger(_events2.default.BUFFER_APPENDING,appendObj);
}
}

this.tick();
}
}
}},{key:'onFragParsingData',value:function onFragParsingData(

data){var _this2=this;
var fragCurrent=this.fragCurrent;
var fragNew=data.frag;
if(fragCurrent&&
data.id==='audio'&&
data.type==='audio'&&
fragNew.sn===fragCurrent.sn&&
fragNew.level===fragCurrent.level&&
this.state===State.PARSING){
var trackId=this.trackId,
track=this.tracks[trackId],
hls=this.hls;

if(isNaN(data.endPTS)){
data.endPTS=data.startPTS+fragCurrent.duration;
data.endDTS=data.startDTS+fragCurrent.duration;
}

_logger.logger.log('parsed '+data.type+',PTS:['+data.startPTS.toFixed(3)+','+data.endPTS.toFixed(3)+'],DTS:['+data.startDTS.toFixed(3)+'/'+data.endDTS.toFixed(3)+'],nb:'+data.nb);
_levelHelper2.default.updateFragPTSDTS(track.details,fragCurrent,data.startPTS,data.endPTS);

var audioSwitch=this.audioSwitch,media=this.media,appendOnBufferFlush=false;

if(audioSwitch&&media){
if(media.readyState){
var currentTime=media.currentTime;
_logger.logger.log('switching audio track : currentTime:'+currentTime);
if(currentTime>=data.startPTS){
_logger.logger.log('switching audio track : flushing all audio');
this.state=State.BUFFER_FLUSHING;
hls.trigger(_events2.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:'audio'});
appendOnBufferFlush=true;

this.audioSwitch=false;
hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED,{id:trackId});
}
}else{

this.audioSwitch=false;
hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED,{id:trackId});
}
}


var pendingData=this.pendingData;
if(!this.audioSwitch){
[data.data1,data.data2].forEach(function(buffer){
if(buffer&&buffer.length){
pendingData.push({type:data.type,data:buffer,parent:'audio',content:'data'});
}
});
if(!appendOnBufferFlush&&pendingData.length){
pendingData.forEach(function(appendObj){


if(_this2.state===State.PARSING){

_this2.pendingBuffering=true;
_this2.hls.trigger(_events2.default.BUFFER_APPENDING,appendObj);
}
});
this.pendingData=[];
this.appended=true;
}
}

this.tick();
}
}},{key:'onFragParsed',value:function onFragParsed(

data){
var fragCurrent=this.fragCurrent;
var fragNew=data.frag;
if(fragCurrent&&
data.id==='audio'&&
fragNew.sn===fragCurrent.sn&&
fragNew.level===fragCurrent.level&&
this.state===State.PARSING){
this.stats.tparsed=performance.now();
this.state=State.PARSED;
this._checkAppendedParsed();
}
}},{key:'onBufferCreated',value:function onBufferCreated(


data){
var audioTrack=data.tracks.audio;
if(audioTrack){
this.mediaBuffer=audioTrack.buffer;
this.loadedmetadata=true;
}
}},{key:'onBufferAppended',value:function onBufferAppended(

data){
if(data.parent==='audio'){
var state=this.state;
if(state===State.PARSING||state===State.PARSED){

this.pendingBuffering=data.pending>0;
this._checkAppendedParsed();
}
}
}},{key:'_checkAppendedParsed',value:function _checkAppendedParsed()

{

if(this.state===State.PARSED&&(!this.appended||!this.pendingBuffering)){
var frag=this.fragCurrent,stats=this.stats,hls=this.hls;
if(frag){
this.fragPrevious=frag;
stats.tbuffered=performance.now();
hls.trigger(_events2.default.FRAG_BUFFERED,{stats:stats,frag:frag,id:'audio'});
var media=this.mediaBuffer?this.mediaBuffer:this.media;
_logger.logger.log('audio buffered : '+_timeRanges2.default.toString(media.buffered));
if(this.audioSwitch&&this.appended){
this.audioSwitch=false;
hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED,{id:this.trackId});
}
this.state=State.IDLE;
}
this.tick();
}
}},{key:'onError',value:function onError(

data){
var frag=data.frag;

if(frag&&frag.type!=='audio'){
return;
}
switch(data.details){
case _errors.ErrorDetails.FRAG_LOAD_ERROR:
case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
if(!data.fatal){
var loadError=this.fragLoadError;
if(loadError){
loadError++;
}else{
loadError=1;
}
var config=this.config;
if(loadError<=config.fragLoadingMaxRetry){
this.fragLoadError=loadError;

frag.loadCounter=0;

var delay=Math.min(Math.pow(2,loadError-1)*config.fragLoadingRetryDelay,config.fragLoadingMaxRetryTimeout);
_logger.logger.warn('audioStreamController: frag loading failed, retry in '+delay+' ms');
this.retryDate=performance.now()+delay;

this.state=State.FRAG_LOADING_WAITING_RETRY;
}else{
_logger.logger.error('audioStreamController: '+data.details+' reaches max retry, redispatch as fatal ...');

data.fatal=true;
this.state=State.ERROR;
}
}
break;
case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
case _errors.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
case _errors.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
case _errors.ErrorDetails.KEY_LOAD_ERROR:
case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:

if(this.state!==State.ERROR){

this.state=data.fatal?State.ERROR:State.IDLE;
_logger.logger.warn('audioStreamController: '+data.details+' while loading frag,switch to '+this.state+' state ...');
}
break;
case _errors.ErrorDetails.BUFFER_FULL_ERROR:

if(data.parent==='audio'&&(this.state===State.PARSING||this.state===State.PARSED)){
var media=this.mediaBuffer,
currentTime=this.media.currentTime,
mediaBuffered=media&&_bufferHelper2.default.isBuffered(media,currentTime)&&_bufferHelper2.default.isBuffered(media,currentTime+0.5);

if(mediaBuffered){
var _config=this.config;
if(_config.maxMaxBufferLength>=_config.maxBufferLength){

_config.maxMaxBufferLength/=2;
_logger.logger.warn('audio:reduce max buffer length to '+_config.maxMaxBufferLength+'s');

this.fragLoadIdx+=2*_config.fragLoadingLoopThreshold;
}
this.state=State.IDLE;
}else{



_logger.logger.warn('buffer full error also media.currentTime is not buffered, flush audio buffer');
this.fragCurrent=null;

this.state=State.BUFFER_FLUSHING;
this.hls.trigger(_events2.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:'audio'});
}
}
break;
default:
break;}

}},{key:'onBufferFlushed',value:function onBufferFlushed()

{var _this3=this;
var pendingData=this.pendingData;
if(pendingData&&pendingData.length){
_logger.logger.log('appending pending audio data on Buffer Flushed');
pendingData.forEach(function(appendObj){
_this3.hls.trigger(_events2.default.BUFFER_APPENDING,appendObj);
});
this.appended=true;
this.pendingData=[];
this.state=State.PARSED;
}else{

this.state=State.IDLE;

this.fragPrevious=null;
this.tick();
}
}},{key:'state',set:function set(nextState){if(this.state!==nextState){var previousState=this.state;this._state=nextState;_logger.logger.log('audio stream:'+previousState+'->'+nextState);}},get:function get(){return this._state;}}]);return AudioStreamController;}(_eventHandler2.default);exports.default=

AudioStreamController;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AudioTrackController=function(_EventHandler){_inherits(AudioTrackController,_EventHandler);

function AudioTrackController(hls){_classCallCheck(this,AudioTrackController);var _this=_possibleConstructorReturn(this,(AudioTrackController.__proto__||Object.getPrototypeOf(AudioTrackController)).call(this,
hls,_events2.default.MANIFEST_LOADING,
_events2.default.MANIFEST_LOADED,
_events2.default.AUDIO_TRACK_LOADED));
_this.ticks=0;
_this.ontick=_this.tick.bind(_this);return _this;
}_createClass(AudioTrackController,[{key:'destroy',value:function destroy()

{
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'tick',value:function tick()
{
this.ticks++;
if(this.ticks===1){
this.doTick();
if(this.ticks>1){
setTimeout(this.tick,1);
}
this.ticks=0;
}
}},{key:'doTick',value:function doTick()
{
this.updateTrack(this.trackId);
}},{key:'onManifestLoading',value:function onManifestLoading()
{

this.tracks=[];
this.trackId=-1;
}},{key:'onManifestLoaded',value:function onManifestLoaded(

data){var _this2=this;
var tracks=data.audioTracks||[];
var defaultFound=false;
this.tracks=tracks;
this.hls.trigger(_events2.default.AUDIO_TRACKS_UPDATED,{audioTracks:tracks});

var id=0;
tracks.forEach(function(track){
if(track.default){
_this2.audioTrack=id;
defaultFound=true;
return;
}
id++;
});
if(defaultFound===false&&tracks.length){
_logger.logger.log('no default audio track defined, use first audio track as default');
this.audioTrack=0;
}
}},{key:'onAudioTrackLoaded',value:function onAudioTrackLoaded(

data){
if(data.id<this.tracks.length){
_logger.logger.log('audioTrack '+data.id+' loaded');
this.tracks[data.id].details=data.details;

if(data.details.live&&!this.timer){


this.timer=setInterval(this.ontick,1000*data.details.targetduration);
}
if(!data.details.live&&this.timer){

clearInterval(this.timer);
this.timer=null;
}
}
}},{key:'setAudioTrackInternal',value:function setAudioTrackInternal(


















newId){

if(newId>=0&&newId<this.tracks.length){

if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
this.trackId=newId;
_logger.logger.log('switching to audioTrack '+newId);
var audioTrack=this.tracks[newId],
hls=this.hls,
type=audioTrack.type,
url=audioTrack.url,
eventObj={id:newId,type:type,url:url};

hls.trigger(_events2.default.AUDIO_TRACK_SWITCH,eventObj);
hls.trigger(_events2.default.AUDIO_TRACK_SWITCHING,eventObj);

var details=audioTrack.details;
if(url&&(details===undefined||details.live===true)){

_logger.logger.log('(re)loading playlist for audioTrack '+newId);
hls.trigger(_events2.default.AUDIO_TRACK_LOADING,{url:url,id:newId});
}
}
}},{key:'updateTrack',value:function updateTrack(

newId){

if(newId>=0&&newId<this.tracks.length){

if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
this.trackId=newId;
_logger.logger.log('updating audioTrack '+newId);
var audioTrack=this.tracks[newId],url=audioTrack.url;

var details=audioTrack.details;
if(url&&(details===undefined||details.live===true)){

_logger.logger.log('(re)loading playlist for audioTrack '+newId);
this.hls.trigger(_events2.default.AUDIO_TRACK_LOADING,{url:url,id:newId});
}
}
}},{key:'audioTracks',get:function get(){return this.tracks;}},{key:'audioTrack',get:function get(){return this.trackId;},set:function set(audioTrackId){if(this.trackId!==audioTrackId||this.tracks[audioTrackId].details===undefined){this.setAudioTrackInternal(audioTrackId);}}}]);return AudioTrackController;}(_eventHandler2.default);exports.default=


AudioTrackController;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _logger=__webpack_require__(0);
var _errors=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


BufferController=function(_EventHandler){_inherits(BufferController,_EventHandler);

function BufferController(hls){_classCallCheck(this,BufferController);var _this=_possibleConstructorReturn(this,(BufferController.__proto__||Object.getPrototypeOf(BufferController)).call(this,
hls,
_events2.default.MEDIA_ATTACHING,
_events2.default.MEDIA_DETACHING,
_events2.default.MANIFEST_PARSED,
_events2.default.BUFFER_RESET,
_events2.default.BUFFER_APPENDING,
_events2.default.BUFFER_CODECS,
_events2.default.BUFFER_EOS,
_events2.default.BUFFER_FLUSHING,
_events2.default.LEVEL_PTS_UPDATED,
_events2.default.LEVEL_UPDATED));



_this._msDuration=null;

_this._levelDuration=null;


_this.onsbue=_this.onSBUpdateEnd.bind(_this);
_this.onsbe=_this.onSBUpdateError.bind(_this);
_this.pendingTracks={};
_this.tracks={};return _this;
}_createClass(BufferController,[{key:'destroy',value:function destroy()

{
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onLevelPtsUpdated',value:function onLevelPtsUpdated(

data){
var type=data.type;
var audioTrack=this.tracks.audio;








if(type==='audio'&&audioTrack&&audioTrack.container==='audio/mpeg'){
var audioBuffer=this.sourceBuffer.audio;
var delta=Math.abs(audioBuffer.timestampOffset-data.start);


if(delta>0.1){
var updating=audioBuffer.updating;

try{
audioBuffer.abort();
}catch(err){
updating=true;
_logger.logger.warn('can not abort audio buffer: '+err);
}

if(!updating){
_logger.logger.warn('change mpeg audio timestamp offset from '+audioBuffer.timestampOffset+' to '+data.start);
audioBuffer.timestampOffset=data.start;
}else{
this.audioTimestampOffset=data.start;
}
}
}
}},{key:'onManifestParsed',value:function onManifestParsed(

data){
var audioExpected=data.audio,
videoExpected=data.video,
sourceBufferNb=0;




if(data.altAudio&&(audioExpected||videoExpected)){
sourceBufferNb=(audioExpected?1:0)+(videoExpected?1:0);
_logger.logger.log(sourceBufferNb+' sourceBuffer(s) expected');
}
this.sourceBufferNb=sourceBufferNb;
}},{key:'onMediaAttaching',value:function onMediaAttaching(

data){
var media=this.media=data.media;
if(media){

var ms=this.mediaSource=new MediaSource();

this.onmso=this.onMediaSourceOpen.bind(this);
this.onmse=this.onMediaSourceEnded.bind(this);
this.onmsc=this.onMediaSourceClose.bind(this);
ms.addEventListener('sourceopen',this.onmso);
ms.addEventListener('sourceended',this.onmse);
ms.addEventListener('sourceclose',this.onmsc);

media.src=URL.createObjectURL(ms);
}
}},{key:'onMediaDetaching',value:function onMediaDetaching()

{
_logger.logger.log('media source detaching');
var ms=this.mediaSource;
if(ms){
if(ms.readyState==='open'){
try{




ms.endOfStream();
}catch(err){
_logger.logger.warn('onMediaDetaching:'+err.message+' while calling endOfStream');
}
}
ms.removeEventListener('sourceopen',this.onmso);
ms.removeEventListener('sourceended',this.onmse);
ms.removeEventListener('sourceclose',this.onmsc);



if(this.media){
URL.revokeObjectURL(this.media.src);
this.media.removeAttribute('src');
this.media.load();
}

this.mediaSource=null;
this.media=null;
this.pendingTracks={};
this.tracks={};
this.sourceBuffer={};
this.flushRange=[];
this.segments=[];
this.appended=0;
}
this.onmso=this.onmse=this.onmsc=null;
this.hls.trigger(_events2.default.MEDIA_DETACHED);
}},{key:'onMediaSourceOpen',value:function onMediaSourceOpen()

{
_logger.logger.log('media source opened');
this.hls.trigger(_events2.default.MEDIA_ATTACHED,{media:this.media});
var mediaSource=this.mediaSource;
if(mediaSource){

mediaSource.removeEventListener('sourceopen',this.onmso);
}
this.checkPendingTracks();
}},{key:'checkPendingTracks',value:function checkPendingTracks()

{

var pendingTracks=this.pendingTracks,
pendingTracksNb=Object.keys(pendingTracks).length;

if(pendingTracksNb&&(
this.sourceBufferNb<=pendingTracksNb||
this.sourceBufferNb===0)){

this.createSourceBuffers(pendingTracks);
this.pendingTracks={};

this.doAppending();
}
}},{key:'onMediaSourceClose',value:function onMediaSourceClose()

{
_logger.logger.log('media source closed');
}},{key:'onMediaSourceEnded',value:function onMediaSourceEnded()

{
_logger.logger.log('media source ended');
}},{key:'onSBUpdateEnd',value:function onSBUpdateEnd()


{

if(this.audioTimestampOffset){
var audioBuffer=this.sourceBuffer.audio;
_logger.logger.warn('change mpeg audio timestamp offset from '+audioBuffer.timestampOffset+' to '+this.audioTimestampOffset);
audioBuffer.timestampOffset=this.audioTimestampOffset;
delete this.audioTimestampOffset;
}

if(this._needsFlush){
this.doFlush();
}

if(this._needsEos){
this.checkEos();
}
this.appending=false;
var parent=this.parent;

var pending=this.segments.reduce(function(counter,segment){return segment.parent===parent?counter+1:counter;},0);
this.hls.trigger(_events2.default.BUFFER_APPENDED,{parent:parent,pending:pending});


if(!this._needsFlush){
this.doAppending();
}

this.updateMediaElementDuration();
}},{key:'onSBUpdateError',value:function onSBUpdateError(

event){
_logger.logger.error('sourceBuffer error:',event);



this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:false});

}},{key:'onBufferReset',value:function onBufferReset()

{
var sourceBuffer=this.sourceBuffer;
for(var type in sourceBuffer){
var sb=sourceBuffer[type];
try{
this.mediaSource.removeSourceBuffer(sb);
sb.removeEventListener('updateend',this.onsbue);
sb.removeEventListener('error',this.onsbe);
}catch(err){
}
}
this.sourceBuffer={};
this.flushRange=[];
this.segments=[];
this.appended=0;
}},{key:'onBufferCodecs',value:function onBufferCodecs(

tracks){


if(Object.keys(this.sourceBuffer).length===0){
for(var trackName in tracks){this.pendingTracks[trackName]=tracks[trackName];}
var mediaSource=this.mediaSource;
if(mediaSource&&mediaSource.readyState==='open'){

this.checkPendingTracks();
}
}
}},{key:'createSourceBuffers',value:function createSourceBuffers(


tracks){
var sourceBuffer=this.sourceBuffer,mediaSource=this.mediaSource;

for(var trackName in tracks){
if(!sourceBuffer[trackName]){
var track=tracks[trackName];

var codec=track.levelCodec||track.codec;
var mimeType=track.container+';codecs='+codec;
_logger.logger.log('creating sourceBuffer('+mimeType+')');
try{
var sb=sourceBuffer[trackName]=mediaSource.addSourceBuffer(mimeType);
sb.addEventListener('updateend',this.onsbue);
sb.addEventListener('error',this.onsbe);
this.tracks[trackName]={codec:codec,container:track.container};
track.buffer=sb;
}catch(err){
_logger.logger.error('error while trying to add sourceBuffer:'+err.message);
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:false,err:err,mimeType:mimeType});
}
}
}
this.hls.trigger(_events2.default.BUFFER_CREATED,{tracks:tracks});
}},{key:'onBufferAppending',value:function onBufferAppending(

data){
if(!this._needsFlush){
if(!this.segments){
this.segments=[data];
}else{
this.segments.push(data);
}
this.doAppending();
}
}},{key:'onBufferAppendFail',value:function onBufferAppendFail(

data){
_logger.logger.error('sourceBuffer error:',data.event);



this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:false});
}},{key:'onBufferEos',value:function onBufferEos(


data){
var sb=this.sourceBuffer;
var dataType=data.type;
for(var type in sb){
if(!dataType||type===dataType){
if(!sb[type].ended){
sb[type].ended=true;
_logger.logger.log(type+' sourceBuffer now EOS');
}
}
}
this.checkEos();
}},{key:'checkEos',value:function checkEos()


{
var sb=this.sourceBuffer,mediaSource=this.mediaSource;
if(!mediaSource||mediaSource.readyState!=='open'){
this._needsEos=false;
return;
}
for(var type in sb){
var sbobj=sb[type];
if(!sbobj.ended){
return;
}
if(sbobj.updating){
this._needsEos=true;
return;
}
}
_logger.logger.log('all media data available, signal endOfStream() to MediaSource and stop loading fragment');

try{
mediaSource.endOfStream();
}catch(e){
_logger.logger.warn('exception while calling mediaSource.endOfStream()');
}
this._needsEos=false;
}},{key:'onBufferFlushing',value:function onBufferFlushing(


data){
this.flushRange.push({start:data.startOffset,end:data.endOffset,type:data.type});

this.flushBufferCounter=0;
this.doFlush();
}},{key:'onLevelUpdated',value:function onLevelUpdated(

event){
var details=event.details;
if(details.fragments.length===0){
return;
}
this._levelDuration=details.totalduration+details.fragments[0].start;
this.updateMediaElementDuration();
}},{key:'updateMediaElementDuration',value:function updateMediaElementDuration()


{
var media=this.media,
mediaSource=this.mediaSource,
sourceBuffer=this.sourceBuffer,
levelDuration=this._levelDuration;
if(levelDuration===null||!media||!mediaSource||!sourceBuffer||media.readyState===0||mediaSource.readyState!=='open'){
return;
}
for(var type in sourceBuffer){
if(sourceBuffer[type].updating){

return;
}
}
if(this._msDuration===null){

this._msDuration=mediaSource.duration;
}
var duration=media.duration;




if(levelDuration>this._msDuration&&levelDuration>duration||duration===Infinity||isNaN(duration)){
_logger.logger.log('Updating mediasource duration to '+levelDuration.toFixed(3));
this._msDuration=mediaSource.duration=levelDuration;
}
}},{key:'doFlush',value:function doFlush()

{

while(this.flushRange.length){
var range=this.flushRange[0];

if(this.flushBuffer(range.start,range.end,range.type)){

this.flushRange.shift();
this.flushBufferCounter=0;
}else{
this._needsFlush=true;

return;
}
}
if(this.flushRange.length===0){

this._needsFlush=false;


var appended=0;
var sourceBuffer=this.sourceBuffer;
try{
for(var type in sourceBuffer){
appended+=sourceBuffer[type].buffered.length;
}
}catch(error){


_logger.logger.error('error while accessing sourceBuffer.buffered');
}
this.appended=appended;
this.hls.trigger(_events2.default.BUFFER_FLUSHED);
}
}},{key:'doAppending',value:function doAppending()

{
var hls=this.hls,sourceBuffer=this.sourceBuffer,segments=this.segments;
if(Object.keys(sourceBuffer).length){
if(this.media.error){
this.segments=[];
_logger.logger.error('trying to append although a media error occured, flush segment and abort');
return;
}
if(this.appending){

return;
}
if(segments&&segments.length){
var segment=segments.shift();
try{
var type=segment.type,sb=sourceBuffer[type];
if(sb){
if(!sb.updating){

sb.ended=false;

this.parent=segment.parent;
sb.appendBuffer(segment.data);
this.appendError=0;
this.appended++;
this.appending=true;
}else{
segments.unshift(segment);
}
}else{



this.onSBUpdateEnd();
}
}catch(err){

_logger.logger.error('error while trying to append buffer:'+err.message);
segments.unshift(segment);
var event={type:_errors.ErrorTypes.MEDIA_ERROR,parent:segment.parent};
if(err.code!==22){
if(this.appendError){
this.appendError++;
}else{
this.appendError=1;
}
event.details=_errors.ErrorDetails.BUFFER_APPEND_ERROR;



if(this.appendError>hls.config.appendErrorMaxRetry){
_logger.logger.log('fail '+hls.config.appendErrorMaxRetry+' times to append segment in sourceBuffer');
segments=[];
event.fatal=true;
hls.trigger(_events2.default.ERROR,event);
return;
}else{
event.fatal=false;
hls.trigger(_events2.default.ERROR,event);
}
}else{


this.segments=[];
event.details=_errors.ErrorDetails.BUFFER_FULL_ERROR;
event.fatal=false;
hls.trigger(_events2.default.ERROR,event);
return;
}
}
}
}
}},{key:'flushBuffer',value:function flushBuffer(






startOffset,endOffset,typeIn){
var sb,i,bufStart,bufEnd,flushStart,flushEnd,sourceBuffer=this.sourceBuffer;
if(Object.keys(sourceBuffer).length){
_logger.logger.log('flushBuffer,pos/start/end: '+this.media.currentTime.toFixed(3)+'/'+startOffset+'/'+endOffset);

if(this.flushBufferCounter<this.appended){
for(var type in sourceBuffer){


if(typeIn&&type!==typeIn){
continue;
}
sb=sourceBuffer[type];

sb.ended=false;
if(!sb.updating){
try{
for(i=0;i<sb.buffered.length;i++){
bufStart=sb.buffered.start(i);
bufEnd=sb.buffered.end(i);

if(navigator.userAgent.toLowerCase().indexOf('firefox')!==-1&&endOffset===Number.POSITIVE_INFINITY){
flushStart=startOffset;
flushEnd=endOffset;
}else{
flushStart=Math.max(bufStart,startOffset);
flushEnd=Math.min(bufEnd,endOffset);
}





if(Math.min(flushEnd,bufEnd)-flushStart>0.5){
this.flushBufferCounter++;
_logger.logger.log('flush '+type+' ['+flushStart+','+flushEnd+'], of ['+bufStart+','+bufEnd+'], pos:'+this.media.currentTime);
sb.remove(flushStart,flushEnd);
return false;
}
}
}catch(e){
_logger.logger.warn('exception while accessing sourcebuffer, it might have been removed from MediaSource');
}
}else{



_logger.logger.warn('cannot flush, sb updating in progress');
return false;
}
}
}else{
_logger.logger.warn('abort flushing too many retries');
}
_logger.logger.log('buffer flushed');
}

return true;
}}]);return BufferController;}(_eventHandler2.default);exports.default=


BufferController;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CapLevelController=function(_EventHandler){_inherits(CapLevelController,_EventHandler);
function CapLevelController(hls){_classCallCheck(this,CapLevelController);return _possibleConstructorReturn(this,(CapLevelController.__proto__||Object.getPrototypeOf(CapLevelController)).call(this,
hls,
_events2.default.FPS_DROP_LEVEL_CAPPING,
_events2.default.MEDIA_ATTACHING,
_events2.default.MANIFEST_PARSED));
}_createClass(CapLevelController,[{key:'destroy',value:function destroy()

{
if(this.hls.config.capLevelToPlayerSize){
this.media=this.restrictedLevels=null;
this.autoLevelCapping=Number.POSITIVE_INFINITY;
if(this.timer){
this.timer=clearInterval(this.timer);
}
}
}},{key:'onFpsDropLevelCapping',value:function onFpsDropLevelCapping(

data){
if(!this.restrictedLevels){
this.restrictedLevels=[];
}
if(!this.isLevelRestricted(data.droppedLevel)){
this.restrictedLevels.push(data.droppedLevel);
}
}},{key:'onMediaAttaching',value:function onMediaAttaching(

data){
this.media=data.media instanceof HTMLVideoElement?data.media:null;
}},{key:'onManifestParsed',value:function onManifestParsed(

data){
var hls=this.hls;
if(hls.config.capLevelToPlayerSize){
this.autoLevelCapping=Number.POSITIVE_INFINITY;
this.levels=data.levels;
hls.firstLevel=this.getMaxLevel(data.firstLevel);
clearInterval(this.timer);
this.timer=setInterval(this.detectPlayerSize.bind(this),1000);
this.detectPlayerSize();
}
}},{key:'detectPlayerSize',value:function detectPlayerSize()

{
if(this.media){
var levelsLength=this.levels?this.levels.length:0;
if(levelsLength){
var hls=this.hls;
hls.autoLevelCapping=this.getMaxLevel(levelsLength-1);
if(hls.autoLevelCapping>this.autoLevelCapping){


hls.streamController.nextLevelSwitch();
}
this.autoLevelCapping=hls.autoLevelCapping;
}
}
}},{key:'getMaxLevel',value:function getMaxLevel(




capLevelIndex){
var result=0,
i=void 0,
level=void 0,
mWidth=this.mediaWidth,
mHeight=this.mediaHeight,
lWidth=0,
lHeight=0;

for(i=0;i<=capLevelIndex;i++){
level=this.levels[i];
if(this.isLevelRestricted(i)){
break;
}
result=i;
lWidth=level.width;
lHeight=level.height;
if(mWidth<=lWidth||mHeight<=lHeight){
break;
}
}
return result;
}},{key:'isLevelRestricted',value:function isLevelRestricted(

level){
return this.restrictedLevels&&this.restrictedLevels.indexOf(level)!==-1?true:false;
}},{key:'contentScaleFactor',get:function get()

{
var pixelRatio=1;
try{
pixelRatio=window.devicePixelRatio;
}catch(e){}
return pixelRatio;
}},{key:'mediaWidth',get:function get()

{
var width=void 0;
var media=this.media;
if(media){
width=media.width||media.clientWidth||media.offsetWidth;
width*=this.contentScaleFactor;
}
return width;
}},{key:'mediaHeight',get:function get()

{
var height=void 0;
var media=this.media;
if(media){
height=media.height||media.clientHeight||media.offsetHeight;
height*=this.contentScaleFactor;
}
return height;
}}]);return CapLevelController;}(_eventHandler2.default);exports.default=


CapLevelController;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

FPSController=function(_EventHandler){_inherits(FPSController,_EventHandler);

function FPSController(hls){_classCallCheck(this,FPSController);return _possibleConstructorReturn(this,(FPSController.__proto__||Object.getPrototypeOf(FPSController)).call(this,
hls,_events2.default.MEDIA_ATTACHING));
}_createClass(FPSController,[{key:'destroy',value:function destroy()

{
if(this.timer){
clearInterval(this.timer);
}
this.isVideoPlaybackQualityAvailable=false;
}},{key:'onMediaAttaching',value:function onMediaAttaching(

data){
var config=this.hls.config;
if(config.capLevelOnFPSDrop){
var video=this.video=data.media instanceof HTMLVideoElement?data.media:null;
if(typeof video.getVideoPlaybackQuality==='function'){
this.isVideoPlaybackQualityAvailable=true;
}
clearInterval(this.timer);
this.timer=setInterval(this.checkFPSInterval.bind(this),config.fpsDroppedMonitoringPeriod);
}
}},{key:'checkFPS',value:function checkFPS(

video,decodedFrames,droppedFrames){
var currentTime=performance.now();
if(decodedFrames){
if(this.lastTime){
var currentPeriod=currentTime-this.lastTime,
currentDropped=droppedFrames-this.lastDroppedFrames,
currentDecoded=decodedFrames-this.lastDecodedFrames,
droppedFPS=1000*currentDropped/currentPeriod,
hls=this.hls;
hls.trigger(_events2.default.FPS_DROP,{currentDropped:currentDropped,currentDecoded:currentDecoded,totalDroppedFrames:droppedFrames});
if(droppedFPS>0){

if(currentDropped>hls.config.fpsDroppedMonitoringThreshold*currentDecoded){
var currentLevel=hls.currentLevel;
_logger.logger.warn('drop FPS ratio greater than max allowed value for currentLevel: '+currentLevel);
if(currentLevel>0&&(hls.autoLevelCapping===-1||hls.autoLevelCapping>=currentLevel)){
currentLevel=currentLevel-1;
hls.trigger(_events2.default.FPS_DROP_LEVEL_CAPPING,{level:currentLevel,droppedLevel:hls.currentLevel});
hls.autoLevelCapping=currentLevel;
hls.streamController.nextLevelSwitch();
}
}
}
}
this.lastTime=currentTime;
this.lastDroppedFrames=droppedFrames;
this.lastDecodedFrames=decodedFrames;
}
}},{key:'checkFPSInterval',value:function checkFPSInterval()

{
var video=this.video;
if(video){
if(this.isVideoPlaybackQualityAvailable){
var videoPlaybackQuality=video.getVideoPlaybackQuality();
this.checkFPS(video,videoPlaybackQuality.totalVideoFrames,videoPlaybackQuality.droppedVideoFrames);
}else{
this.checkFPS(video,video.webkitDecodedFrameCount,video.webkitDroppedFrameCount);
}
}
}}]);return FPSController;}(_eventHandler2.default);exports.default=


FPSController;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ID3TrackController=function(_EventHandler){_inherits(ID3TrackController,_EventHandler);

function ID3TrackController(hls){_classCallCheck(this,ID3TrackController);var _this=_possibleConstructorReturn(this,(ID3TrackController.__proto__||Object.getPrototypeOf(ID3TrackController)).call(this,
hls,
_events2.default.MEDIA_ATTACHED,
_events2.default.MEDIA_DETACHING,
_events2.default.FRAG_PARSING_METADATA));
_this.id3Track=undefined;
_this.media=undefined;return _this;
}_createClass(ID3TrackController,[{key:'destroy',value:function destroy()

{
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onMediaAttached',value:function onMediaAttached(


data){
this.media=data.media;
if(!this.media){
return;
}

this.id3Track=this.media.addTextTrack('metadata','id3');
this.id3Track.mode='hidden';
}},{key:'onMediaDetaching',value:function onMediaDetaching()

{
this.media=undefined;
}},{key:'onFragParsingMetadata',value:function onFragParsingMetadata(

data){
var fragment=data.frag;
var samples=data.samples;
var startTime=fragment.start;
var endTime=fragment.start+fragment.duration;

if(startTime===endTime){
endTime+=0.0001;
}




var Cue=window.WebKitDataCue||window.VTTCue||window.TextTrackCue;

for(var i=0;i<samples.length;i++){
var id3Frame=this.parseID3Frame(samples[i].data);
var frame=this.decodeID3Frame(id3Frame);
if(frame){
var cue=new Cue(startTime,endTime,'');
cue.value=frame;
this.id3Track.addCue(cue);
}
}
}},{key:'parseID3Frame',value:function parseID3Frame(

data){
if(data.length<21){
return undefined;
}












if(data[0]===73&&
data[1]===68&&
data[2]===51){

var type=String.fromCharCode(data[10],data[11],data[12],data[13]);
data=data.subarray(20);
return{type:type,data:data};
}
}},{key:'decodeID3Frame',value:function decodeID3Frame(

frame){
if(frame.type==='TXXX'){
return this.decodeTxxxFrame(frame);
}else if(frame.type==='PRIV'){
return this.decodePrivFrame(frame);
}else if(frame.type[0]==='T'){
return this.decodeTextFrame(frame);
}else{
return undefined;
}
}},{key:'decodeTxxxFrame',value:function decodeTxxxFrame(

frame){






if(frame.size<2){
return undefined;
}

if(frame.data[0]!==3){

return undefined;
}

var index=1;
var description=this.utf8ArrayToStr(frame.data.subarray(index));

index+=description.length+1;
var value=this.utf8ArrayToStr(frame.data.subarray(index));

return{key:'TXXX',description:description,data:value};
}},{key:'decodeTextFrame',value:function decodeTextFrame(

frame){






if(frame.size<2){
return undefined;
}

if(frame.data[0]!==3){

return undefined;
}

var data=frame.data.subarray(1);
return{key:frame.type,data:this.utf8ArrayToStr(data)};
}},{key:'decodePrivFrame',value:function decodePrivFrame(

frame){




if(frame.size<2){
return undefined;
}

var owner=this.utf8ArrayToStr(frame.data);
var privateData=frame.data.subarray(owner.length+1);

return{key:'PRIV',info:owner,data:privateData.buffer};
}},{key:'utf8ArrayToStr',value:function utf8ArrayToStr(










array){

var char2=void 0;
var char3=void 0;
var out='';
var i=0;
var length=array.length;

while(i<length){
var c=array[i++];
switch(c>>4){
case 0:
return out;
case 1:case 2:case 3:case 4:case 5:case 6:case 7:

out+=String.fromCharCode(c);
break;
case 12:case 13:

char2=array[i++];
out+=String.fromCharCode((c&0x1F)<<6|char2&0x3F);
break;
case 14:

char2=array[i++];
char3=array[i++];
out+=String.fromCharCode((c&0x0F)<<12|
(char2&0x3F)<<6|
(char3&0x3F)<<0);
break;}

}

return out;
}}]);return ID3TrackController;}(_eventHandler2.default);exports.default=


ID3TrackController;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _logger=__webpack_require__(0);
var _errors=__webpack_require__(2);
var _bufferHelper=__webpack_require__(4);var _bufferHelper2=_interopRequireDefault(_bufferHelper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

LevelController=function(_EventHandler){_inherits(LevelController,_EventHandler);

function LevelController(hls){_classCallCheck(this,LevelController);var _this=_possibleConstructorReturn(this,(LevelController.__proto__||Object.getPrototypeOf(LevelController)).call(this,
hls,
_events2.default.MANIFEST_LOADED,
_events2.default.LEVEL_LOADED,
_events2.default.FRAG_LOADED,
_events2.default.ERROR));
_this.ontick=_this.tick.bind(_this);
_this._manualLevel=-1;return _this;
}_createClass(LevelController,[{key:'destroy',value:function destroy()

{
if(this.timer){
clearTimeout(this.timer);
this.timer=null;
}
this._manualLevel=-1;
}},{key:'startLoad',value:function startLoad()

{
this.canload=true;
var levels=this._levels;

if(levels){
levels.forEach(function(level){
level.loadError=0;
var levelDetails=level.details;
if(levelDetails&&levelDetails.live){
level.details=undefined;
}
});
}

if(this.timer){
this.tick();
}
}},{key:'stopLoad',value:function stopLoad()

{
this.canload=false;
}},{key:'onManifestLoaded',value:function onManifestLoaded(

data){
var levels0=[],
levels=[],
bitrateStart,
bitrateSet={},
videoCodecFound=false,
audioCodecFound=false,
hls=this.hls,
brokenmp4inmp3=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),
checkSupported=function checkSupported(type,codec){return MediaSource.isTypeSupported(type+'/mp4;codecs='+codec);};


data.levels.forEach(function(level){
if(level.videoCodec){
videoCodecFound=true;
}

if(brokenmp4inmp3&&level.audioCodec&&level.audioCodec.indexOf('mp4a.40.34')!==-1){
level.audioCodec=undefined;
}
if(level.audioCodec||level.attrs&&level.attrs.AUDIO){
audioCodecFound=true;
}
var redundantLevelId=bitrateSet[level.bitrate];
if(redundantLevelId===undefined){
bitrateSet[level.bitrate]=levels0.length;
level.url=[level.url];
level.urlId=0;
levels0.push(level);
}else{
levels0[redundantLevelId].url.push(level.url);
}
});


if(videoCodecFound&&audioCodecFound){
levels0.forEach(function(level){
if(level.videoCodec){
levels.push(level);
}
});
}else{
levels=levels0;
}

levels=levels.filter(function(level){
var audioCodec=level.audioCodec,videoCodec=level.videoCodec;
return(!audioCodec||checkSupported('audio',audioCodec))&&(
!videoCodec||checkSupported('video',videoCodec));
});

if(levels.length){

bitrateStart=levels[0].bitrate;

levels.sort(function(a,b){
return a.bitrate-b.bitrate;
});
this._levels=levels;

for(var i=0;i<levels.length;i++){
if(levels[i].bitrate===bitrateStart){
this._firstLevel=i;
_logger.logger.log('manifest loaded,'+levels.length+' level(s) found, first bitrate:'+bitrateStart);
break;
}
}
hls.trigger(_events2.default.MANIFEST_PARSED,{levels:levels,firstLevel:this._firstLevel,stats:data.stats,audio:audioCodecFound,video:videoCodecFound,altAudio:data.audioTracks.length>0});
}else{
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:true,url:hls.url,reason:'no level with compatible codecs found in manifest'});
}
return;
}},{key:'setLevelInternal',value:function setLevelInternal(


















newLevel){
var levels=this._levels;
var hls=this.hls;

if(newLevel>=0&&newLevel<levels.length){

if(this.timer){
clearTimeout(this.timer);
this.timer=null;
}
if(this._level!==newLevel){
_logger.logger.log('switching to level '+newLevel);
this._level=newLevel;
var levelProperties=levels[newLevel];
levelProperties.level=newLevel;

hls.trigger(_events2.default.LEVEL_SWITCH,levelProperties);
hls.trigger(_events2.default.LEVEL_SWITCHING,levelProperties);
}
var level=levels[newLevel],levelDetails=level.details;

if(!levelDetails||levelDetails.live===true){

var urlId=level.urlId;
hls.trigger(_events2.default.LEVEL_LOADING,{url:level.url[urlId],level:newLevel,id:urlId});
}
}else{

hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.OTHER_ERROR,details:_errors.ErrorDetails.LEVEL_SWITCH_ERROR,level:newLevel,fatal:false,reason:'invalid level idx'});
}
}},{key:'onError',value:function onError(










































data){
if(data.fatal){
return;
}

var details=data.details,hls=this.hls,levelId=void 0,level=void 0,levelError=false;

switch(details){
case _errors.ErrorDetails.FRAG_LOAD_ERROR:
case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
case _errors.ErrorDetails.KEY_LOAD_ERROR:
case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
levelId=data.frag.level;
break;
case _errors.ErrorDetails.LEVEL_LOAD_ERROR:
case _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT:
levelId=data.context.level;
levelError=true;
break;
case _errors.ErrorDetails.REMUX_ALLOC_ERROR:
levelId=data.level;
break;
default:
break;}





if(levelId!==undefined){
level=this._levels[levelId];
if(!level.loadError){
level.loadError=1;
}else{
level.loadError++;
}


var nbRedundantLevel=level.url.length;
if(nbRedundantLevel>1&&level.loadError<nbRedundantLevel){
level.urlId=(level.urlId+1)%nbRedundantLevel;
level.details=undefined;
_logger.logger.warn('level controller,'+details+' for level '+levelId+': switching to redundant stream id '+level.urlId);
}else{

var recoverable=this._manualLevel===-1&&levelId;
if(recoverable){
_logger.logger.warn('level controller,'+details+': switch-down for next fragment');
hls.nextAutoLevel=Math.max(0,levelId-1);
}else if(level&&level.details&&level.details.live){
_logger.logger.warn('level controller,'+details+' on live stream, discard');
if(levelError){

this._level=undefined;
}

}else if(details===_errors.ErrorDetails.LEVEL_LOAD_ERROR||
details===_errors.ErrorDetails.LEVEL_LOAD_TIMEOUT){
var media=hls.media,

mediaBuffered=media&&_bufferHelper2.default.isBuffered(media,media.currentTime)&&_bufferHelper2.default.isBuffered(media,media.currentTime+0.5);
if(mediaBuffered){
var retryDelay=hls.config.levelLoadingRetryDelay;
_logger.logger.warn('level controller,'+details+', but media buffered, retry in '+retryDelay+'ms');
this.timer=setTimeout(this.ontick,retryDelay);
}else{
_logger.logger.error('cannot recover '+details+' error');
this._level=undefined;

if(this.timer){
clearTimeout(this.timer);
this.timer=null;
}

data.fatal=true;
}
}
}
}
}},{key:'onFragLoaded',value:function onFragLoaded(


data){
var fragLoaded=data.frag;
if(fragLoaded&&fragLoaded.type==='main'){
var level=this._levels[fragLoaded.level];
if(level){
level.loadError=0;
}
}
}},{key:'onLevelLoaded',value:function onLevelLoaded(

data){
var levelId=data.level;

if(levelId===this._level){
var curLevel=this._levels[levelId];

curLevel.loadError=0;
var newDetails=data.details;

if(newDetails.live){
var reloadInterval=1000*(newDetails.averagetargetduration?newDetails.averagetargetduration:newDetails.targetduration),
curDetails=curLevel.details;
if(curDetails&&newDetails.endSN===curDetails.endSN){



reloadInterval/=2;
_logger.logger.log('same live playlist, reload twice faster');
}

reloadInterval-=performance.now()-data.stats.trequest;

reloadInterval=Math.max(1000,Math.round(reloadInterval));
_logger.logger.log('live playlist, reload in '+reloadInterval+' ms');
this.timer=setTimeout(this.ontick,reloadInterval);
}else{
this.timer=null;
}
}
}},{key:'tick',value:function tick()

{
var levelId=this._level;
if(levelId!==undefined&&this.canload){
var level=this._levels[levelId];
if(level&&level.url){
var urlId=level.urlId;
this.hls.trigger(_events2.default.LEVEL_LOADING,{url:level.url[urlId],level:levelId,id:urlId});
}
}
}},{key:'levels',get:function get(){return this._levels;}},{key:'level',get:function get(){return this._level;},set:function set(newLevel){var levels=this._levels;if(levels&&levels.length>newLevel){if(this._level!==newLevel||levels[newLevel].details===undefined){this.setLevelInternal(newLevel);}}}},{key:'manualLevel',get:function get(){return this._manualLevel;},set:function set(newLevel){this._manualLevel=newLevel;if(this._startLevel===undefined){this._startLevel=newLevel;}if(newLevel!==-1){this.level=newLevel;}}},{key:'firstLevel',get:function get(){return this._firstLevel;},set:function set(newLevel){this._firstLevel=newLevel;}},{key:'startLevel',get:function get(){if(this._startLevel===undefined){var configStartLevel=this.hls.config.startLevel;if(configStartLevel!==undefined){return configStartLevel;}else{return this._firstLevel;}}else{return this._startLevel;}},set:function set(newLevel){this._startLevel=newLevel;}},{key:'nextLoadLevel',get:function get()

{
if(this._manualLevel!==-1){
return this._manualLevel;
}else{
return this.hls.nextAutoLevel;
}
},set:function set(

nextLevel){
this.level=nextLevel;
if(this._manualLevel===-1){
this.hls.nextAutoLevel=nextLevel;
}
}}]);return LevelController;}(_eventHandler2.default);exports.default=


LevelController;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _binarySearch=__webpack_require__(11);var _binarySearch2=_interopRequireDefault(_binarySearch);
var _bufferHelper=__webpack_require__(4);var _bufferHelper2=_interopRequireDefault(_bufferHelper);
var _demuxer=__webpack_require__(9);var _demuxer2=_interopRequireDefault(_demuxer);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _levelHelper=__webpack_require__(10);var _levelHelper2=_interopRequireDefault(_levelHelper);
var _timeRanges=__webpack_require__(12);var _timeRanges2=_interopRequireDefault(_timeRanges);
var _errors=__webpack_require__(2);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var State={
STOPPED:'STOPPED',
IDLE:'IDLE',
KEY_LOADING:'KEY_LOADING',
FRAG_LOADING:'FRAG_LOADING',
FRAG_LOADING_WAITING_RETRY:'FRAG_LOADING_WAITING_RETRY',
WAITING_LEVEL:'WAITING_LEVEL',
PARSING:'PARSING',
PARSED:'PARSED',
BUFFER_FLUSHING:'BUFFER_FLUSHING',
ENDED:'ENDED',
ERROR:'ERROR'};var


StreamController=function(_EventHandler){_inherits(StreamController,_EventHandler);

function StreamController(hls){_classCallCheck(this,StreamController);var _this=_possibleConstructorReturn(this,(StreamController.__proto__||Object.getPrototypeOf(StreamController)).call(this,
hls,
_events2.default.MEDIA_ATTACHED,
_events2.default.MEDIA_DETACHING,
_events2.default.MANIFEST_LOADING,
_events2.default.MANIFEST_PARSED,
_events2.default.LEVEL_LOADED,
_events2.default.KEY_LOADED,
_events2.default.FRAG_LOADED,
_events2.default.FRAG_LOAD_EMERGENCY_ABORTED,
_events2.default.FRAG_PARSING_INIT_SEGMENT,
_events2.default.FRAG_PARSING_DATA,
_events2.default.FRAG_PARSED,
_events2.default.ERROR,
_events2.default.AUDIO_TRACK_SWITCHING,
_events2.default.AUDIO_TRACK_SWITCHED,
_events2.default.BUFFER_CREATED,
_events2.default.BUFFER_APPENDED,
_events2.default.BUFFER_FLUSHED));

_this.config=hls.config;
_this.audioCodecSwap=false;
_this.ticks=0;
_this._state=State.STOPPED;
_this.ontick=_this.tick.bind(_this);return _this;
}_createClass(StreamController,[{key:'destroy',value:function destroy()

{
this.stopLoad();
if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
_eventHandler2.default.prototype.destroy.call(this);
this.state=State.STOPPED;
}},{key:'startLoad',value:function startLoad(

startPosition){
if(this.levels){
var lastCurrentTime=this.lastCurrentTime,hls=this.hls;
this.stopLoad();
if(!this.timer){
this.timer=setInterval(this.ontick,100);
}
this.level=-1;
this.fragLoadError=0;
if(!this.startFragRequested){

var startLevel=hls.startLevel;
if(startLevel===-1){

startLevel=0;
this.bitrateTest=true;
}


this.level=hls.nextLoadLevel=startLevel;
this.loadedmetadata=false;
}

if(lastCurrentTime>0&&startPosition===-1){
_logger.logger.log('override startPosition with lastCurrentTime @'+lastCurrentTime.toFixed(3));
startPosition=lastCurrentTime;
}
this.state=State.IDLE;
this.nextLoadPosition=this.startPosition=this.lastCurrentTime=startPosition;
this.tick();
}else{
this.forceStartLoad=true;
this.state=State.STOPPED;
}
}},{key:'stopLoad',value:function stopLoad()

{
var frag=this.fragCurrent;
if(frag){
if(frag.loader){
frag.loader.abort();
}
this.fragCurrent=null;
}
this.fragPrevious=null;
if(this.demuxer){
this.demuxer.destroy();
this.demuxer=null;
}
this.state=State.STOPPED;
this.forceStartLoad=false;
}},{key:'tick',value:function tick()

{
this.ticks++;
if(this.ticks===1){
this.doTick();
if(this.ticks>1){
setTimeout(this.tick,1);
}
this.ticks=0;
}
}},{key:'doTick',value:function doTick()

{
switch(this.state){
case State.ERROR:

break;
case State.BUFFER_FLUSHING:

this.fragLoadError=0;
break;
case State.IDLE:
this._doTickIdle();
break;
case State.WAITING_LEVEL:
var level=this.levels[this.level];

if(level&&level.details){
this.state=State.IDLE;
}
break;
case State.FRAG_LOADING_WAITING_RETRY:
var now=performance.now();
var retryDate=this.retryDate;

if(!retryDate||now>=retryDate||this.media&&this.media.seeking){
_logger.logger.log('mediaController: retryDate reached, switch back to IDLE state');
this.state=State.IDLE;
}
break;
case State.ERROR:
case State.STOPPED:
case State.FRAG_LOADING:
case State.PARSING:
case State.PARSED:
case State.ENDED:
break;
default:
break;}


this._checkBuffer();

this._checkFragmentChanged();
}},{key:'_doTickIdle',value:function _doTickIdle()




{
var hls=this.hls,
config=hls.config,
media=this.media;





if(this.levelLastLoaded!==undefined&&!media&&(
this.startFragRequested||!config.startFragPrefetch)){
return;
}


var pos=void 0;
if(this.loadedmetadata){
pos=media.currentTime;
}else{
pos=this.nextLoadPosition;
}

var level=hls.nextLoadLevel,
levelInfo=this.levels[level],
levelBitrate=levelInfo.bitrate,
maxBufLen=void 0;


if(levelBitrate){
maxBufLen=Math.max(8*config.maxBufferSize/levelBitrate,config.maxBufferLength);
}else{
maxBufLen=config.maxBufferLength;
}
maxBufLen=Math.min(maxBufLen,config.maxMaxBufferLength);




var bufferInfo=_bufferHelper2.default.bufferInfo(this.mediaBuffer?this.mediaBuffer:media,pos,config.maxBufferHole),
bufferLen=bufferInfo.len;

if(bufferLen>=maxBufLen){
return;
}


_logger.logger.trace('buffer length of '+bufferLen.toFixed(3)+' is below max of '+maxBufLen.toFixed(3)+'. checking for more payload ...');


this.level=hls.nextLoadLevel=level;

var levelDetails=levelInfo.details;



if(typeof levelDetails==='undefined'||levelDetails.live&&this.levelLastLoaded!==level){
this.state=State.WAITING_LEVEL;
return;
}


var fragPrevious=this.fragPrevious;
if(!levelDetails.live&&fragPrevious&&fragPrevious.sn===levelDetails.endSN){


var duration=Math.min(media.duration,fragPrevious.start+fragPrevious.duration);




if(duration-Math.max(bufferInfo.end,fragPrevious.start)<=Math.max(0.2,fragPrevious.duration/2)){

var data={};
if(this.altAudio){
data.type='video';
}
this.hls.trigger(_events2.default.BUFFER_EOS,data);
this.state=State.ENDED;
return;
}
}


this._fetchPayloadOrEos(pos,bufferInfo,levelDetails);
}},{key:'_fetchPayloadOrEos',value:function _fetchPayloadOrEos(

pos,bufferInfo,levelDetails){
var fragPrevious=this.fragPrevious,
level=this.level,
fragments=levelDetails.fragments,
fragLen=fragments.length;


if(fragLen===0){
return;
}


var start=fragments[0].start,
end=fragments[fragLen-1].start+fragments[fragLen-1].duration,
bufferEnd=bufferInfo.end,
frag=void 0;

if(levelDetails.initSegment&&!levelDetails.initSegment.data){
frag=levelDetails.initSegment;
}else{

if(levelDetails.live){
var initialLiveManifestSize=this.config.initialLiveManifestSize;
if(fragLen<initialLiveManifestSize){
_logger.logger.warn('Can not start playback of a level, reason: not enough fragments '+fragLen+' < '+initialLiveManifestSize);
return;
}

frag=this._ensureFragmentAtLivePoint(levelDetails,bufferEnd,start,end,fragPrevious,fragments,fragLen);

if(frag===null){
return;
}

}else{

if(bufferEnd<start){
frag=fragments[0];
}
}
}
if(!frag){
frag=this._findFragment(start,fragPrevious,fragLen,fragments,bufferEnd,end,levelDetails);
}
if(frag){
this._loadFragmentOrKey(frag,level,levelDetails,pos,bufferEnd);
}
return;
}},{key:'_ensureFragmentAtLivePoint',value:function _ensureFragmentAtLivePoint(

levelDetails,bufferEnd,start,end,fragPrevious,fragments,fragLen){
var config=this.hls.config,media=this.media;

var frag=void 0;



var maxLatency=config.liveMaxLatencyDuration!==undefined?config.liveMaxLatencyDuration:config.liveMaxLatencyDurationCount*levelDetails.targetduration;

if(bufferEnd<Math.max(start-config.maxFragLookUpTolerance,end-maxLatency)){
var liveSyncPosition=this.liveSyncPosition=this.computeLivePosition(start,levelDetails);
_logger.logger.log('buffer end: '+bufferEnd.toFixed(3)+' is located too far from the end of live sliding playlist, reset currentTime to : '+liveSyncPosition.toFixed(3));
bufferEnd=liveSyncPosition;
if(media&&media.readyState&&media.duration>liveSyncPosition){
media.currentTime=liveSyncPosition;
}
}











if(levelDetails.PTSKnown&&bufferEnd>end&&media&&media.readyState){
return null;
}

if(this.startFragRequested&&!levelDetails.PTSKnown){




if(fragPrevious){
var targetSN=fragPrevious.sn+1;
if(targetSN>=levelDetails.startSN&&targetSN<=levelDetails.endSN){
frag=fragments[targetSN-levelDetails.startSN];
_logger.logger.log('live playlist, switching playlist, load frag with next SN: '+frag.sn);
}
}
if(!frag){



frag=fragments[Math.min(fragLen-1,Math.round(fragLen/2))];
_logger.logger.log('live playlist, switching playlist, unknown, load middle frag : '+frag.sn);
}
}
return frag;
}},{key:'_findFragment',value:function _findFragment(

start,fragPrevious,fragLen,fragments,bufferEnd,end,levelDetails){
var config=this.hls.config;
var frag=void 0;
var foundFrag=void 0;
var maxFragLookUpTolerance=config.maxFragLookUpTolerance;
var fragNext=fragPrevious?fragments[fragPrevious.sn-fragments[0].sn+1]:undefined;
var fragmentWithinToleranceTest=function fragmentWithinToleranceTest(candidate){














var candidateLookupTolerance=Math.min(maxFragLookUpTolerance,candidate.duration);
if(candidate.start+candidate.duration-candidateLookupTolerance<=bufferEnd){
return 1;
}else
if(candidate.start-candidateLookupTolerance>bufferEnd&&candidate.start){
return-1;
}
return 0;
};

if(bufferEnd<end){
if(bufferEnd>end-maxFragLookUpTolerance){
maxFragLookUpTolerance=0;
}

if(fragNext&&!fragmentWithinToleranceTest(fragNext)){
foundFrag=fragNext;
}else{
foundFrag=_binarySearch2.default.search(fragments,fragmentWithinToleranceTest);
}
}else{

foundFrag=fragments[fragLen-1];
}
if(foundFrag){
frag=foundFrag;
var curSNIdx=frag.sn-levelDetails.startSN;
var sameLevel=fragPrevious&&frag.level===fragPrevious.level;
var prevFrag=fragments[curSNIdx-1];
var nextFrag=fragments[curSNIdx+1];

if(sameLevel&&frag.sn===fragPrevious.sn){
if(frag.sn<levelDetails.endSN){
var deltaPTS=fragPrevious.deltaPTS;




if(deltaPTS&&deltaPTS>config.maxBufferHole&&fragPrevious.dropped&&curSNIdx){
frag=prevFrag;
_logger.logger.warn('SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this');

fragPrevious.loadCounter--;
}else{
frag=nextFrag;
_logger.logger.log('SN just loaded, load next one: '+frag.sn);
}
}else{
frag=null;
}
}else if(frag.dropped&&!sameLevel){

if(nextFrag&&nextFrag.backtracked){
_logger.logger.warn('Already backtracked from fragment '+(curSNIdx+1)+', will not backtrack to fragment '+curSNIdx+'. Loading fragment '+(curSNIdx+1));
frag=nextFrag;
}else{


_logger.logger.warn('Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe');
frag.dropped=0;
if(prevFrag){
if(prevFrag.loadCounter){
prevFrag.loadCounter--;
}
frag=prevFrag;
}else{
frag=null;
}
}
}
}
return frag;
}},{key:'_loadFragmentOrKey',value:function _loadFragmentOrKey(

frag,level,levelDetails,pos,bufferEnd){
var hls=this.hls,
config=hls.config;


if(frag.decryptdata&&frag.decryptdata.uri!=null&&frag.decryptdata.key==null){
_logger.logger.log('Loading key for '+frag.sn+' of ['+levelDetails.startSN+' ,'+levelDetails.endSN+'],level '+level);
this.state=State.KEY_LOADING;
hls.trigger(_events2.default.KEY_LOADING,{frag:frag});
}else{
_logger.logger.log('Loading '+frag.sn+' of ['+levelDetails.startSN+' ,'+levelDetails.endSN+'],level '+level+', currentTime:'+pos.toFixed(3)+',bufferEnd:'+bufferEnd.toFixed(3));

if(this.fragLoadIdx!==undefined){
this.fragLoadIdx++;
}else{
this.fragLoadIdx=0;
}
if(frag.loadCounter){
frag.loadCounter++;
var maxThreshold=config.fragLoadingLoopThreshold;

if(frag.loadCounter>maxThreshold&&Math.abs(this.fragLoadIdx-frag.loadIdx)<maxThreshold){
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:false,frag:frag});
return;
}
}else{
frag.loadCounter=1;
}
frag.loadIdx=this.fragLoadIdx;
this.fragCurrent=frag;
this.startFragRequested=true;
if(!isNaN(frag.sn)){
this.nextLoadPosition=frag.start+frag.duration;
}
frag.autoLevel=hls.autoLevelEnabled;
frag.bitrateTest=this.bitrateTest;
hls.trigger(_events2.default.FRAG_LOADING,{frag:frag});

if(!this.demuxer){
this.demuxer=new _demuxer2.default(hls,'main');
}
this.state=State.FRAG_LOADING;
return;
}
}},{key:'getBufferedFrag',value:function getBufferedFrag(














position){
return _binarySearch2.default.search(this._bufferedFrags,function(frag){
if(position<frag.startPTS){
return-1;
}else if(position>frag.endPTS){
return 1;
}
return 0;
});
}},{key:'followingBufferedFrag',value:function followingBufferedFrag(






















frag){
if(frag){

return this.getBufferedFrag(frag.endPTS+0.5);
}
return null;
}},{key:'_checkFragmentChanged',value:function _checkFragmentChanged()










{
var fragPlayingCurrent,currentTime,video=this.media;
if(video&&video.readyState&&video.seeking===false){
currentTime=video.currentTime;






if(currentTime>video.playbackRate*this.lastCurrentTime){
this.lastCurrentTime=currentTime;
}
if(_bufferHelper2.default.isBuffered(video,currentTime)){
fragPlayingCurrent=this.getBufferedFrag(currentTime);
}else if(_bufferHelper2.default.isBuffered(video,currentTime+0.1)){





fragPlayingCurrent=this.getBufferedFrag(currentTime+0.1);
}
if(fragPlayingCurrent){
var fragPlaying=fragPlayingCurrent;
if(fragPlaying!==this.fragPlaying){
this.hls.trigger(_events2.default.FRAG_CHANGED,{frag:fragPlaying});
var fragPlayingLevel=fragPlaying.level;
if(!this.fragPlaying||this.fragPlaying.level!==fragPlayingLevel){
this.hls.trigger(_events2.default.LEVEL_SWITCHED,{level:fragPlayingLevel});
}
this.fragPlaying=fragPlaying;
}
}
}
}},{key:'immediateLevelSwitch',value:function immediateLevelSwitch()







{
_logger.logger.log('immediateLevelSwitch');
if(!this.immediateSwitch){
this.immediateSwitch=true;
var media=this.media,previouslyPaused=void 0;
if(media){
previouslyPaused=media.paused;
media.pause();
}else{

previouslyPaused=true;
}
this.previouslyPaused=previouslyPaused;
}
var fragCurrent=this.fragCurrent;
if(fragCurrent&&fragCurrent.loader){
fragCurrent.loader.abort();
}
this.fragCurrent=null;

this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold;

this.flushMainBuffer(0,Number.POSITIVE_INFINITY);
}},{key:'immediateLevelSwitchEnd',value:function immediateLevelSwitchEnd()






{
var media=this.media;
if(media&&media.buffered.length){
this.immediateSwitch=false;
if(_bufferHelper2.default.isBuffered(media,media.currentTime)){

media.currentTime-=0.0001;
}
if(!this.previouslyPaused){
media.play();
}
}
}},{key:'nextLevelSwitch',value:function nextLevelSwitch()

{





var media=this.media;

if(media&&media.readyState){
var fetchdelay=void 0,fragPlayingCurrent=void 0,nextBufferedFrag=void 0;

this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold;
fragPlayingCurrent=this.getBufferedFrag(media.currentTime);
if(fragPlayingCurrent&&fragPlayingCurrent.startPTS>1){


this.flushMainBuffer(0,fragPlayingCurrent.startPTS-1);
}
if(!media.paused){

var nextLevelId=this.hls.nextLoadLevel,nextLevel=this.levels[nextLevelId],fragLastKbps=this.fragLastKbps;
if(fragLastKbps&&this.fragCurrent){
fetchdelay=this.fragCurrent.duration*nextLevel.bitrate/(1000*fragLastKbps)+1;
}else{
fetchdelay=0;
}
}else{
fetchdelay=0;
}


nextBufferedFrag=this.getBufferedFrag(media.currentTime+fetchdelay);
if(nextBufferedFrag){

nextBufferedFrag=this.followingBufferedFrag(nextBufferedFrag);
if(nextBufferedFrag){

var fragCurrent=this.fragCurrent;
if(fragCurrent&&fragCurrent.loader){
fragCurrent.loader.abort();
}
this.fragCurrent=null;

this.flushMainBuffer(nextBufferedFrag.startPTS,Number.POSITIVE_INFINITY);
}
}
}
}},{key:'flushMainBuffer',value:function flushMainBuffer(

startOffset,endOffset){
this.state=State.BUFFER_FLUSHING;
var flushScope={startOffset:startOffset,endOffset:endOffset};

if(this.altAudio){
flushScope.type='video';
}
this.hls.trigger(_events2.default.BUFFER_FLUSHING,flushScope);
}},{key:'onMediaAttached',value:function onMediaAttached(

data){
var media=this.media=this.mediaBuffer=data.media;
this.onvseeking=this.onMediaSeeking.bind(this);
this.onvseeked=this.onMediaSeeked.bind(this);
this.onvended=this.onMediaEnded.bind(this);
media.addEventListener('seeking',this.onvseeking);
media.addEventListener('seeked',this.onvseeked);
media.addEventListener('ended',this.onvended);
var config=this.config;
if(this.levels&&config.autoStartLoad){
this.hls.startLoad(config.startPosition);
}
}},{key:'onMediaDetaching',value:function onMediaDetaching()

{
var media=this.media;
if(media&&media.ended){
_logger.logger.log('MSE detaching and video ended, reset startPosition');
this.startPosition=this.lastCurrentTime=0;
}


var levels=this.levels;
if(levels){

levels.forEach(function(level){
if(level.details){
level.details.fragments.forEach(function(fragment){
fragment.loadCounter=undefined;
fragment.backtracked=undefined;
});
}
});
}

if(media){
media.removeEventListener('seeking',this.onvseeking);
media.removeEventListener('seeked',this.onvseeked);
media.removeEventListener('ended',this.onvended);
this.onvseeking=this.onvseeked=this.onvended=null;
}
this.media=this.mediaBuffer=null;
this.loadedmetadata=false;
this.stopLoad();
}},{key:'onMediaSeeking',value:function onMediaSeeking()

{
var media=this.media,currentTime=media?media.currentTime:undefined,config=this.config;
_logger.logger.log('media seeking to '+currentTime.toFixed(3));
if(this.state===State.FRAG_LOADING){
var mediaBuffer=this.mediaBuffer?this.mediaBuffer:media;
var bufferInfo=_bufferHelper2.default.bufferInfo(mediaBuffer,currentTime,this.config.maxBufferHole),
fragCurrent=this.fragCurrent;

if(bufferInfo.len===0&&fragCurrent){
var tolerance=config.maxFragLookUpTolerance,
fragStartOffset=fragCurrent.start-tolerance,
fragEndOffset=fragCurrent.start+fragCurrent.duration+tolerance;

if(currentTime<fragStartOffset||currentTime>fragEndOffset){
if(fragCurrent.loader){
_logger.logger.log('seeking outside of buffer while fragment load in progress, cancel fragment load');
fragCurrent.loader.abort();
}
this.fragCurrent=null;
this.fragPrevious=null;

this.state=State.IDLE;
}else{
_logger.logger.log('seeking outside of buffer but within currently loaded fragment range');
}
}
}else if(this.state===State.ENDED){

this.state=State.IDLE;
}
if(media){
this.lastCurrentTime=currentTime;
}

if(this.state!==State.FRAG_LOADING&&this.fragLoadIdx!==undefined){
this.fragLoadIdx+=2*config.fragLoadingLoopThreshold;
}

if(!this.loadedmetadata){
this.nextLoadPosition=this.startPosition=currentTime;
}

this.tick();
}},{key:'onMediaSeeked',value:function onMediaSeeked()

{
_logger.logger.log('media seeked to '+this.media.currentTime.toFixed(3));

this.tick();
}},{key:'onMediaEnded',value:function onMediaEnded()

{
_logger.logger.log('media ended');

this.startPosition=this.lastCurrentTime=0;
}},{key:'onManifestLoading',value:function onManifestLoading()


{

_logger.logger.log('trigger BUFFER_RESET');
this.hls.trigger(_events2.default.BUFFER_RESET);
this._bufferedFrags=[];
this.stalled=false;
this.startPosition=this.lastCurrentTime=0;
}},{key:'onManifestParsed',value:function onManifestParsed(

data){
var aac=false,heaac=false,codec;
data.levels.forEach(function(level){

codec=level.audioCodec;
if(codec){
if(codec.indexOf('mp4a.40.2')!==-1){
aac=true;
}
if(codec.indexOf('mp4a.40.5')!==-1){
heaac=true;
}
}
});
this.audioCodecSwitch=aac&&heaac;
if(this.audioCodecSwitch){
_logger.logger.log('both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC');
}
this.levels=data.levels;
this.startLevelLoaded=false;
this.startFragRequested=false;
var config=this.config;
if(config.autoStartLoad||this.forceStartLoad){
this.hls.startLoad(config.startPosition);
}
}},{key:'onLevelLoaded',value:function onLevelLoaded(

data){
var newDetails=data.details,
newLevelId=data.level,
curLevel=this.levels[newLevelId],
duration=newDetails.totalduration,
sliding=0;

_logger.logger.log('level '+newLevelId+' loaded ['+newDetails.startSN+','+newDetails.endSN+'],duration:'+duration);
this.levelLastLoaded=newLevelId;

if(newDetails.live){
var curDetails=curLevel.details;
if(curDetails&&newDetails.fragments.length>0){

_levelHelper2.default.mergeDetails(curDetails,newDetails);
sliding=newDetails.fragments[0].start;
this.liveSyncPosition=this.computeLivePosition(sliding,curDetails);
if(newDetails.PTSKnown){
_logger.logger.log('live playlist sliding:'+sliding.toFixed(3));
}else{
_logger.logger.log('live playlist - outdated PTS, unknown sliding');
}
}else{
newDetails.PTSKnown=false;
_logger.logger.log('live playlist - first load, unknown sliding');
}
}else{
newDetails.PTSKnown=false;
}

curLevel.details=newDetails;
this.hls.trigger(_events2.default.LEVEL_UPDATED,{details:newDetails,level:newLevelId});

if(this.startFragRequested===false){

if(this.startPosition===-1||this.lastCurrentTime===-1){

var startTimeOffset=newDetails.startTimeOffset;
if(!isNaN(startTimeOffset)){
if(startTimeOffset<0){
_logger.logger.log('negative start time offset '+startTimeOffset+', count from end of last fragment');
startTimeOffset=sliding+duration+startTimeOffset;
}
_logger.logger.log('start time offset found in playlist, adjust startPosition to '+startTimeOffset);
this.startPosition=startTimeOffset;
}else{

if(newDetails.live){
this.startPosition=this.computeLivePosition(sliding,newDetails);
_logger.logger.log('configure startPosition to '+this.startPosition);
}else{
this.startPosition=0;
}
}
this.lastCurrentTime=this.startPosition;
}
this.nextLoadPosition=this.startPosition;
}

if(this.state===State.WAITING_LEVEL){
this.state=State.IDLE;
}

this.tick();
}},{key:'onKeyLoaded',value:function onKeyLoaded()

{
if(this.state===State.KEY_LOADING){
this.state=State.IDLE;
this.tick();
}
}},{key:'onFragLoaded',value:function onFragLoaded(

data){
var fragCurrent=this.fragCurrent,
fragLoaded=data.frag;
if(this.state===State.FRAG_LOADING&&
fragCurrent&&
fragLoaded.type==='main'&&
fragLoaded.level===fragCurrent.level&&
fragLoaded.sn===fragCurrent.sn){
var stats=data.stats,
currentLevel=this.levels[fragCurrent.level],
details=currentLevel.details;
_logger.logger.log('Loaded  '+fragCurrent.sn+' of ['+details.startSN+' ,'+details.endSN+'],level '+fragCurrent.level);

this.bitrateTest=false;
this.stats=stats;


if(fragLoaded.bitrateTest===true&&this.hls.nextLoadLevel){

this.state=State.IDLE;
this.startFragRequested=false;
stats.tparsed=stats.tbuffered=performance.now();
this.hls.trigger(_events2.default.FRAG_BUFFERED,{stats:stats,frag:fragCurrent,id:'main'});
this.tick();
}else if(fragLoaded.sn==='initSegment'){
this.state=State.IDLE;
stats.tparsed=stats.tbuffered=performance.now();
details.initSegment.data=data.payload;
this.hls.trigger(_events2.default.FRAG_BUFFERED,{stats:stats,frag:fragCurrent,id:'main'});
this.tick();
}else{
this.state=State.PARSING;

var duration=details.totalduration,
level=fragCurrent.level,
sn=fragCurrent.sn,
audioCodec=this.config.defaultAudioCodec||currentLevel.audioCodec;
if(this.audioCodecSwap){
_logger.logger.log('swapping playlist audio codec');
if(audioCodec===undefined){
audioCodec=this.lastAudioCodec;
}
if(audioCodec){
if(audioCodec.indexOf('mp4a.40.5')!==-1){
audioCodec='mp4a.40.2';
}else{
audioCodec='mp4a.40.5';
}
}
}
this.pendingBuffering=true;
this.appended=false;
_logger.logger.log('Parsing '+sn+' of ['+details.startSN+' ,'+details.endSN+'],level '+level+', cc '+fragCurrent.cc);
var demuxer=this.demuxer;
if(!demuxer){
demuxer=this.demuxer=new _demuxer2.default(this.hls,'main');
}

var media=this.media;
var mediaSeeking=media&&media.seeking;
var accurateTimeOffset=!mediaSeeking&&(details.PTSKnown||!details.live);
var initSegmentData=details.initSegment?details.initSegment.data:[];
demuxer.push(data.payload,initSegmentData,audioCodec,currentLevel.videoCodec,fragCurrent,duration,accurateTimeOffset,undefined);
}
}
this.fragLoadError=0;
}},{key:'onFragParsingInitSegment',value:function onFragParsingInitSegment(

data){
var fragCurrent=this.fragCurrent;
var fragNew=data.frag;
if(fragCurrent&&
data.id==='main'&&
fragNew.sn===fragCurrent.sn&&
fragNew.level===fragCurrent.level&&
this.state===State.PARSING){
var tracks=data.tracks,trackName,track;


if(tracks.audio&&this.altAudio){
delete tracks.audio;
}

track=tracks.audio;
if(track){
var audioCodec=this.levels[this.level].audioCodec,
ua=navigator.userAgent.toLowerCase();
if(audioCodec&&this.audioCodecSwap){
_logger.logger.log('swapping playlist audio codec');
if(audioCodec.indexOf('mp4a.40.5')!==-1){
audioCodec='mp4a.40.2';
}else{
audioCodec='mp4a.40.5';
}
}




if(this.audioCodecSwitch){

if(track.metadata.channelCount!==1&&

ua.indexOf('firefox')===-1){
audioCodec='mp4a.40.5';
}
}

if(ua.indexOf('android')!==-1&&track.container!=='audio/mpeg'){
audioCodec='mp4a.40.2';
_logger.logger.log('Android: force audio codec to '+audioCodec);
}
track.levelCodec=audioCodec;
track.id=data.id;
}
track=tracks.video;
if(track){
track.levelCodec=this.levels[this.level].videoCodec;
track.id=data.id;
}
this.hls.trigger(_events2.default.BUFFER_CODECS,tracks);

for(trackName in tracks){
track=tracks[trackName];
_logger.logger.log('main track:'+trackName+',container:'+track.container+',codecs[level/parsed]=['+track.levelCodec+'/'+track.codec+']');
var initSegment=track.initSegment;
if(initSegment){
this.appended=true;

this.pendingBuffering=true;
this.hls.trigger(_events2.default.BUFFER_APPENDING,{type:trackName,data:initSegment,parent:'main',content:'initSegment'});
}
}

this.tick();
}
}},{key:'onFragParsingData',value:function onFragParsingData(

data){var _this2=this;
var fragCurrent=this.fragCurrent;
var fragNew=data.frag;
if(fragCurrent&&
data.id==='main'&&
fragNew.sn===fragCurrent.sn&&
fragNew.level===fragCurrent.level&&
!(data.type==='audio'&&this.altAudio)&&
this.state===State.PARSING){
var level=this.levels[this.level],
frag=fragCurrent;
if(isNaN(data.endPTS)){
data.endPTS=data.startPTS+fragCurrent.duration;
data.endDTS=data.startDTS+fragCurrent.duration;
}

_logger.logger.log('Parsed '+data.type+',PTS:['+data.startPTS.toFixed(3)+','+data.endPTS.toFixed(3)+'],DTS:['+data.startDTS.toFixed(3)+'/'+data.endDTS.toFixed(3)+'],nb:'+data.nb+',dropped:'+(data.dropped||0));


if(data.type==='video'){
frag.dropped=data.dropped;
if(frag.dropped){
if(!frag.backtracked){



frag.backtracked=true;
this.nextLoadPosition=data.startPTS;
this.state=State.IDLE;
this.tick();
return;
}else{
_logger.logger.warn('Already backtracked on this fragment, appending with the gap');
}
}else{

frag.backtracked=false;
}
}

var drift=_levelHelper2.default.updateFragPTSDTS(level.details,frag,data.startPTS,data.endPTS,data.startDTS,data.endDTS),
hls=this.hls;
hls.trigger(_events2.default.LEVEL_PTS_UPDATED,{details:level.details,level:this.level,drift:drift,type:data.type,start:data.startPTS,end:data.endPTS});


[data.data1,data.data2].forEach(function(buffer){


if(buffer&&buffer.length&&_this2.state===State.PARSING){
_this2.appended=true;

_this2.pendingBuffering=true;
hls.trigger(_events2.default.BUFFER_APPENDING,{type:data.type,data:buffer,parent:'main',content:'data'});
}
});

this.tick();
}
}},{key:'onFragParsed',value:function onFragParsed(

data){
var fragCurrent=this.fragCurrent;
var fragNew=data.frag;
if(fragCurrent&&
data.id==='main'&&
fragNew.sn===fragCurrent.sn&&
fragNew.level===fragCurrent.level&&
this.state===State.PARSING){
this.stats.tparsed=performance.now();
this.state=State.PARSED;
this._checkAppendedParsed();
}
}},{key:'onAudioTrackSwitching',value:function onAudioTrackSwitching(

data){

var altAudio=!!data.url,
trackId=data.id;



if(!altAudio){
if(this.mediaBuffer!==this.media){
_logger.logger.log('switching on main audio, use media.buffered to schedule main fragment loading');
this.mediaBuffer=this.media;
var fragCurrent=this.fragCurrent;

if(fragCurrent.loader){
_logger.logger.log('switching to main audio track, cancel main fragment load');
fragCurrent.loader.abort();
}
this.fragCurrent=null;
this.fragPrevious=null;

if(this.demuxer){
this.demuxer.destroy();
this.demuxer=null;
}

this.state=State.IDLE;
}
var hls=this.hls;

hls.trigger(_events2.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:'audio'});
hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED,{id:trackId});
this.altAudio=false;
}
}},{key:'onAudioTrackSwitched',value:function onAudioTrackSwitched(

data){
var trackId=data.id,
altAudio=!!this.hls.audioTracks[trackId].url;
if(altAudio){
var videoBuffer=this.videoBuffer;

if(videoBuffer&&this.mediaBuffer!==videoBuffer){
_logger.logger.log('switching on alternate audio, use video.buffered to schedule main fragment loading');
this.mediaBuffer=videoBuffer;
}
}
this.altAudio=altAudio;
this.tick();
}},{key:'onBufferCreated',value:function onBufferCreated(



data){
var tracks=data.tracks,mediaTrack=void 0,name=void 0,alternate=false;
for(var type in tracks){
var track=tracks[type];
if(track.id==='main'){
name=type;
mediaTrack=track;

if(type==='video'){
this.videoBuffer=tracks[type].buffer;
}
}else{
alternate=true;
}
}
if(alternate&&mediaTrack){
_logger.logger.log('alternate track found, use '+name+'.buffered to schedule main fragment loading');
this.mediaBuffer=mediaTrack.buffer;
}else{
this.mediaBuffer=this.media;
}
}},{key:'onBufferAppended',value:function onBufferAppended(

data){
if(data.parent==='main'){
var state=this.state;
if(state===State.PARSING||state===State.PARSED){

this.pendingBuffering=data.pending>0;
this._checkAppendedParsed();
}
}
}},{key:'_checkAppendedParsed',value:function _checkAppendedParsed()

{

if(this.state===State.PARSED&&(!this.appended||!this.pendingBuffering)){
var frag=this.fragCurrent;
if(frag){
var media=this.mediaBuffer?this.mediaBuffer:this.media;
_logger.logger.log('main buffered : '+_timeRanges2.default.toString(media.buffered));

var bufferedFrags=this._bufferedFrags.filter(function(frag){return _bufferHelper2.default.isBuffered(media,(frag.startPTS+frag.endPTS)/2);});

bufferedFrags.push(frag);

this._bufferedFrags=bufferedFrags.sort(function(a,b){return a.startPTS-b.startPTS;});
this.fragPrevious=frag;
var stats=this.stats;
stats.tbuffered=performance.now();

this.fragLastKbps=Math.round(8*stats.total/(stats.tbuffered-stats.tfirst));
this.hls.trigger(_events2.default.FRAG_BUFFERED,{stats:stats,frag:frag,id:'main'});
this.state=State.IDLE;
}
this.tick();
}
}},{key:'onError',value:function onError(

data){
var frag=data.frag||this.fragCurrent;

if(frag&&frag.type!=='main'){
return;
}
var media=this.media,

mediaBuffered=media&&_bufferHelper2.default.isBuffered(media,media.currentTime)&&_bufferHelper2.default.isBuffered(media,media.currentTime+0.5);
switch(data.details){
case _errors.ErrorDetails.FRAG_LOAD_ERROR:
case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
case _errors.ErrorDetails.KEY_LOAD_ERROR:
case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
if(!data.fatal){
var loadError=this.fragLoadError;
if(loadError){
loadError++;
}else{
loadError=1;
}
var config=this.config;

if(loadError<=config.fragLoadingMaxRetry||mediaBuffered||frag.autoLevel&&frag.level){
this.fragLoadError=loadError;

frag.loadCounter=0;

var delay=Math.min(Math.pow(2,loadError-1)*config.fragLoadingRetryDelay,config.fragLoadingMaxRetryTimeout);
_logger.logger.warn('mediaController: frag loading failed, retry in '+delay+' ms');
this.retryDate=performance.now()+delay;



if(!this.loadedmetadata){
this.startFragRequested=false;
this.nextLoadPosition=this.startPosition;
}
this.state=State.FRAG_LOADING_WAITING_RETRY;
}else{
_logger.logger.error('mediaController: '+data.details+' reaches max retry, redispatch as fatal ...');

data.fatal=true;
this.state=State.ERROR;
}
}
break;
case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
if(!data.fatal){

if(mediaBuffered){


this._reduceMaxBufferLength(frag.duration);
this.state=State.IDLE;
}else{


if(!frag.autoLevel||frag.level===0){

data.fatal=true;
this.state=State.ERROR;
}
}
}
break;
case _errors.ErrorDetails.LEVEL_LOAD_ERROR:
case _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT:
if(this.state!==State.ERROR){
if(data.fatal){

this.state=State.ERROR;
_logger.logger.warn('streamController: '+data.details+',switch to '+this.state+' state ...');
}else{

if(this.state===State.WAITING_LEVEL){
this.state=State.IDLE;
}
}
}
break;
case _errors.ErrorDetails.BUFFER_FULL_ERROR:

if(data.parent==='main'&&(this.state===State.PARSING||this.state===State.PARSED)){

if(mediaBuffered){
this._reduceMaxBufferLength(this.config.maxBufferLength);
this.state=State.IDLE;
}else{



_logger.logger.warn('buffer full error also media.currentTime is not buffered, flush everything');
this.fragCurrent=null;

this.flushMainBuffer(0,Number.POSITIVE_INFINITY);
}
}
break;
default:
break;}

}},{key:'_reduceMaxBufferLength',value:function _reduceMaxBufferLength(

minLength){
var config=this.config;
if(config.maxMaxBufferLength>=minLength){

config.maxMaxBufferLength/=2;
_logger.logger.warn('main:reduce max buffer length to '+config.maxMaxBufferLength+'s');

this.fragLoadIdx+=2*config.fragLoadingLoopThreshold;
}
}},{key:'_checkBuffer',value:function _checkBuffer()

{
var media=this.media;

if(media&&media.readyState){
var currentTime=media.currentTime,
mediaBuffer=this.mediaBuffer?this.mediaBuffer:media,
buffered=mediaBuffer.buffered;

if(!this.loadedmetadata&&buffered.length){
this.loadedmetadata=true;


var startPosition=media.seeking?currentTime:this.startPosition,
startPositionBuffered=_bufferHelper2.default.isBuffered(mediaBuffer,startPosition);

if(currentTime!==startPosition||!startPositionBuffered){
_logger.logger.log('target start position:'+startPosition);

if(!startPositionBuffered){
startPosition=buffered.start(0);
_logger.logger.log('target start position not buffered, seek to buffered.start(0) '+startPosition);
}
_logger.logger.log('adjust currentTime from '+currentTime+' to '+startPosition);
media.currentTime=startPosition;
}
}else if(this.immediateSwitch){
this.immediateLevelSwitchEnd();
}else{
var bufferInfo=_bufferHelper2.default.bufferInfo(media,currentTime,0),
expectedPlaying=!(media.paused||
media.ended||
media.buffered.length===0),
jumpThreshold=0.5,
playheadMoving=currentTime!==this.lastCurrentTime,
config=this.config;

if(playheadMoving){

if(this.stallReported){
_logger.logger.warn('playback not stuck anymore @'+currentTime+', after '+Math.round(performance.now()-this.stalled)+'ms');
this.stallReported=false;
}
this.stalled=undefined;
this.nudgeRetry=0;
}else{

if(expectedPlaying){

var tnow=performance.now();
var hls=this.hls;
if(!this.stalled){

this.stalled=tnow;
this.stallReported=false;
}else{


var stalledDuration=tnow-this.stalled;
var bufferLen=bufferInfo.len;
var nudgeRetry=this.nudgeRetry||0;

if(bufferLen<=jumpThreshold&&stalledDuration>config.lowBufferWatchdogPeriod*1000){

if(!this.stallReported){
this.stallReported=true;
_logger.logger.warn('playback stalling in low buffer @'+currentTime);
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_STALLED_ERROR,fatal:false,buffer:bufferLen});
}


var nextBufferStart=bufferInfo.nextStart,delta=nextBufferStart-currentTime;
if(nextBufferStart&&
delta<config.maxSeekHole&&
delta>0){
this.nudgeRetry=++nudgeRetry;
var nudgeOffset=nudgeRetry*config.nudgeOffset;


_logger.logger.log('adjust currentTime from '+media.currentTime+' to next buffered @ '+nextBufferStart+' + nudge '+nudgeOffset);
media.currentTime=nextBufferStart+nudgeOffset;

this.stalled=undefined;
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:false,hole:nextBufferStart+nudgeOffset-currentTime});
}
}else if(bufferLen>jumpThreshold&&stalledDuration>config.highBufferWatchdogPeriod*1000){

if(!this.stallReported){
this.stallReported=true;
_logger.logger.warn('playback stalling in high buffer @'+currentTime);
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_STALLED_ERROR,fatal:false,buffer:bufferLen});
}

this.stalled=undefined;
this.nudgeRetry=++nudgeRetry;
if(nudgeRetry<config.nudgeMaxRetry){
var _currentTime=media.currentTime;
var targetTime=_currentTime+nudgeRetry*config.nudgeOffset;
_logger.logger.log('adjust currentTime from '+_currentTime+' to '+targetTime);

media.currentTime=targetTime;
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:false});
}else{
_logger.logger.error('still stuck in high buffer @'+currentTime+' after '+config.nudgeMaxRetry+', raise fatal error');
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.BUFFER_STALLED_ERROR,fatal:true});
}
}
}
}
}
}
}
}},{key:'onFragLoadEmergencyAborted',value:function onFragLoadEmergencyAborted()

{
this.state=State.IDLE;


if(!this.loadedmetadata){
this.startFragRequested=false;
this.nextLoadPosition=this.startPosition;
}
this.tick();
}},{key:'onBufferFlushed',value:function onBufferFlushed()

{



var media=this.mediaBuffer?this.mediaBuffer:this.media;
this._bufferedFrags=this._bufferedFrags.filter(function(frag){return _bufferHelper2.default.isBuffered(media,(frag.startPTS+frag.endPTS)/2);});


this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold;

this.state=State.IDLE;

this.fragPrevious=null;
}},{key:'swapAudioCodec',value:function swapAudioCodec()

{
this.audioCodecSwap=!this.audioCodecSwap;
}},{key:'computeLivePosition',value:function computeLivePosition(

sliding,levelDetails){
var targetLatency=this.config.liveSyncDuration!==undefined?this.config.liveSyncDuration:this.config.liveSyncDurationCount*levelDetails.targetduration;
return sliding+Math.max(0,levelDetails.totalduration-targetLatency);
}},{key:'state',set:function set(nextState){if(this.state!==nextState){var previousState=this.state;this._state=nextState;_logger.logger.log('main stream:'+previousState+'->'+nextState);this.hls.trigger(_events2.default.STREAM_STATE_TRANSITION,{previousState:previousState,nextState:nextState});}},get:function get(){return this._state;}},{key:'currentLevel',get:function get(){var media=this.media;if(media){var frag=this.getBufferedFrag(media.currentTime);if(frag){return frag.level;}}return-1;}},{key:'nextBufferedFrag',get:function get(){var media=this.media;if(media){return this.followingBufferedFrag(this.getBufferedFrag(media.currentTime));}else{return null;}}},{key:'nextLevel',get:function get(){var frag=this.nextBufferedFrag;if(frag){return frag.level;}else{return-1;}}},{key:'liveSyncPosition',get:function get()

{
return this._liveSyncPosition;
},set:function set(

value){
this._liveSyncPosition=value;
}}]);return StreamController;}(_eventHandler2.default);exports.default=

StreamController;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

SubtitleStreamController=function(_EventHandler){_inherits(SubtitleStreamController,_EventHandler);

function SubtitleStreamController(hls){_classCallCheck(this,SubtitleStreamController);var _this=_possibleConstructorReturn(this,(SubtitleStreamController.__proto__||Object.getPrototypeOf(SubtitleStreamController)).call(this,
hls,
_events2.default.ERROR,
_events2.default.SUBTITLE_TRACKS_UPDATED,
_events2.default.SUBTITLE_TRACK_SWITCH,
_events2.default.SUBTITLE_TRACK_LOADED,
_events2.default.SUBTITLE_FRAG_PROCESSED));
_this.config=hls.config;
_this.vttFragSNsProcessed={};
_this.vttFragQueues=undefined;
_this.currentlyProcessing=null;
_this.currentTrackId=-1;return _this;
}_createClass(SubtitleStreamController,[{key:'destroy',value:function destroy()

{
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'clearVttFragQueues',value:function clearVttFragQueues()


{var _this2=this;
this.vttFragQueues={};
this.tracks.forEach(function(track){
_this2.vttFragQueues[track.id]=[];
});
}},{key:'nextFrag',value:function nextFrag()


{
if(this.currentlyProcessing===null&&this.currentTrackId>-1&&this.vttFragQueues[this.currentTrackId].length){
var frag=this.currentlyProcessing=this.vttFragQueues[this.currentTrackId].shift();
this.hls.trigger(_events2.default.FRAG_LOADING,{frag:frag});
}
}},{key:'onSubtitleFragProcessed',value:function onSubtitleFragProcessed(


data){
if(data.success){
this.vttFragSNsProcessed[data.frag.trackId].push(data.frag.sn);
}
this.currentlyProcessing=null;
this.nextFrag();
}},{key:'onError',value:function onError(


data){
var frag=data.frag;

if(frag&&frag.type!=='subtitle'){
return;
}
if(this.currentlyProcessing){
this.currentlyProcessing=null;
this.nextFrag();
}
}},{key:'onSubtitleTracksUpdated',value:function onSubtitleTracksUpdated(


data){var _this3=this;
_logger.logger.log('subtitle tracks updated');
this.tracks=data.subtitleTracks;
this.clearVttFragQueues();
this.vttFragSNsProcessed={};
this.tracks.forEach(function(track){
_this3.vttFragSNsProcessed[track.id]=[];
});
}},{key:'onSubtitleTrackSwitch',value:function onSubtitleTrackSwitch(

data){
this.currentTrackId=data.id;
this.clearVttFragQueues();
}},{key:'onSubtitleTrackLoaded',value:function onSubtitleTrackLoaded(


data){
var processedFragSNs=this.vttFragSNsProcessed[data.id],
fragQueue=this.vttFragQueues[data.id],
currentFragSN=!!this.currentlyProcessing?this.currentlyProcessing.sn:-1;

var alreadyProcessed=function alreadyProcessed(frag){
return processedFragSNs.indexOf(frag.sn)>-1;
};

var alreadyInQueue=function alreadyInQueue(frag){
return fragQueue.some(function(fragInQueue){return fragInQueue.sn===frag.sn;});
};


data.details.fragments.forEach(function(frag){
if(!(alreadyProcessed(frag)||frag.sn===currentFragSN||alreadyInQueue(frag))){

frag.trackId=data.id;
fragQueue.push(frag);
}
});

this.nextFrag();
}}]);return SubtitleStreamController;}(_eventHandler2.default);exports.default=

SubtitleStreamController;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

function filterSubtitleTracks(textTrackList){
var tracks=[];
for(var i=0;i<textTrackList.length;i++){
if(textTrackList[i].kind==='subtitles'){
tracks.push(textTrackList[i]);
}
}
return tracks;
}var

SubtitleTrackController=function(_EventHandler){_inherits(SubtitleTrackController,_EventHandler);

function SubtitleTrackController(hls){_classCallCheck(this,SubtitleTrackController);var _this=_possibleConstructorReturn(this,(SubtitleTrackController.__proto__||Object.getPrototypeOf(SubtitleTrackController)).call(this,
hls,
_events2.default.MEDIA_ATTACHED,
_events2.default.MEDIA_DETACHING,
_events2.default.MANIFEST_LOADING,
_events2.default.MANIFEST_LOADED,
_events2.default.SUBTITLE_TRACK_LOADED));
_this.tracks=[];
_this.trackId=-1;
_this.media=undefined;return _this;
}_createClass(SubtitleTrackController,[{key:'destroy',value:function destroy()

{
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onMediaAttached',value:function onMediaAttached(


data){var _this2=this;
this.media=data.media;
if(!this.media){
return;
}

this.media.textTracks.addEventListener('change',function(){

if(!_this2.media){
return;
}

var trackId=-1;
var tracks=filterSubtitleTracks(_this2.media.textTracks);
for(var id=0;id<tracks.length;id++){
if(tracks[id].mode==='showing'){
trackId=id;
}
}

_this2.subtitleTrack=trackId;
});
}},{key:'onMediaDetaching',value:function onMediaDetaching()

{

this.media=undefined;
}},{key:'onManifestLoading',value:function onManifestLoading()


{
this.tracks=[];
this.trackId=-1;
}},{key:'onManifestLoaded',value:function onManifestLoaded(


data){var _this3=this;
var tracks=data.subtitles||[];
var defaultFound=false;
this.tracks=tracks;
this.trackId=-1;
this.hls.trigger(_events2.default.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:tracks});



tracks.forEach(function(track){
if(track.default){
_this3.subtitleTrack=track.id;
defaultFound=true;
}
});
}},{key:'onTick',value:function onTick()


{
var trackId=this.trackId;
var subtitleTrack=this.tracks[trackId];
if(!subtitleTrack){
return;
}

var details=subtitleTrack.details;

if(details===undefined||details.live===true){

_logger.logger.log('(re)loading playlist for subtitle track '+trackId);
this.hls.trigger(_events2.default.SUBTITLE_TRACK_LOADING,{url:subtitleTrack.url,id:trackId});
}
}},{key:'onSubtitleTrackLoaded',value:function onSubtitleTrackLoaded(

data){var _this4=this;
if(data.id<this.tracks.length){
_logger.logger.log('subtitle track '+data.id+' loaded');
this.tracks[data.id].details=data.details;

if(data.details.live&&!this.timer){


this.timer=setInterval(function(){
_this4.onTick();
},1000*data.details.targetduration,this);
}
if(!data.details.live&&this.timer){

clearInterval(this.timer);
this.timer=null;
}
}
}},{key:'setSubtitleTrackInternal',value:function setSubtitleTrackInternal(


















newId){

if(newId>=0&&newId<this.tracks.length){

if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
this.trackId=newId;
_logger.logger.log('switching to subtitle track '+newId);
var subtitleTrack=this.tracks[newId];
this.hls.trigger(_events2.default.SUBTITLE_TRACK_SWITCH,{id:newId});

var details=subtitleTrack.details;
if(details===undefined||details.live===true){

_logger.logger.log('(re)loading playlist for subtitle track '+newId);
this.hls.trigger(_events2.default.SUBTITLE_TRACK_LOADING,{url:subtitleTrack.url,id:newId});
}
}
}},{key:'subtitleTracks',get:function get(){return this.tracks;}},{key:'subtitleTrack',get:function get(){return this.trackId;},set:function set(subtitleTrackId){if(this.trackId!==subtitleTrackId){this.setSubtitleTrackInternal(subtitleTrackId);}}}]);return SubtitleTrackController;}(_eventHandler2.default);exports.default=


SubtitleTrackController;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _cea608Parser=__webpack_require__(48);var _cea608Parser2=_interopRequireDefault(_cea608Parser);
var _webvttParser=__webpack_require__(53);var _webvttParser2=_interopRequireDefault(_webvttParser);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

function clearCurrentCues(track){
if(track&&track.cues){
while(track.cues.length>0){
track.removeCue(track.cues[0]);
}
}
}

function reuseVttTextTrack(inUseTrack,manifestTrack){
return inUseTrack&&inUseTrack.label===manifestTrack.name&&!(inUseTrack.textTrack1||inUseTrack.textTrack2);
}

function intersection(x1,x2,y1,y2){
return Math.min(x2,y2)-Math.max(x1,y1);
}var

TimelineController=function(_EventHandler){_inherits(TimelineController,_EventHandler);

function TimelineController(hls){_classCallCheck(this,TimelineController);var _this=_possibleConstructorReturn(this,(TimelineController.__proto__||Object.getPrototypeOf(TimelineController)).call(this,
hls,_events2.default.MEDIA_ATTACHING,
_events2.default.MEDIA_DETACHING,
_events2.default.FRAG_PARSING_USERDATA,
_events2.default.MANIFEST_LOADING,
_events2.default.MANIFEST_LOADED,
_events2.default.FRAG_LOADED,
_events2.default.LEVEL_SWITCHING,
_events2.default.INIT_PTS_FOUND));

_this.hls=hls;
_this.config=hls.config;
_this.enabled=true;
_this.Cues=hls.config.cueHandler;
_this.textTracks=[];
_this.tracks=[];
_this.unparsedVttFrags=[];
_this.initPTS=undefined;
_this.cueRanges=[];

if(_this.config.enableCEA708Captions)
{
var self=_this;
var sendAddTrackEvent=function sendAddTrackEvent(track,media)
{
var e=null;
try{
e=new window.Event('addtrack');
}catch(err){

e=document.createEvent('Event');
e.initEvent('addtrack',false,false);
}
e.track=track;
media.dispatchEvent(e);
};

var channel1=
{
'newCue':function newCue(startTime,endTime,screen)
{
if(!self.textTrack1)
{

var existingTrack1=self.getExistingTrack('1');
if(!existingTrack1)
{
var textTrack1=self.createTextTrack('captions',self.config.captionsTextTrack1Label,self.config.captionsTextTrack1LanguageCode);
if(textTrack1){
textTrack1.textTrack1=true;
self.textTrack1=textTrack1;
}
}else

{
self.textTrack1=existingTrack1;
clearCurrentCues(self.textTrack1);

sendAddTrackEvent(self.textTrack1,self.media);
}
}
self.addCues('textTrack1',startTime,endTime,screen);
}};


var channel2=
{
'newCue':function newCue(startTime,endTime,screen)
{
if(!self.textTrack2)
{

var existingTrack2=self.getExistingTrack('2');
if(!existingTrack2)
{
var textTrack2=self.createTextTrack('captions',self.config.captionsTextTrack2Label,self.config.captionsTextTrack1LanguageCode);
if(textTrack2){
textTrack2.textTrack2=true;
self.textTrack2=textTrack2;
}
}else

{
self.textTrack2=existingTrack2;
clearCurrentCues(self.textTrack2);

sendAddTrackEvent(self.textTrack2,self.media);
}
}
self.addCues('textTrack2',startTime,endTime,screen);
}};


_this.cea608Parser=new _cea608Parser2.default(0,channel1,channel2);
}return _this;
}_createClass(TimelineController,[{key:'addCues',value:function addCues(

channel,startTime,endTime,screen){

var ranges=this.cueRanges;
var merged=false;
for(var i=ranges.length;i--;){
var cueRange=ranges[i];
var overlap=intersection(cueRange[0],cueRange[1],startTime,endTime);
if(overlap>=0){
cueRange[0]=Math.min(cueRange[0],startTime);
cueRange[1]=Math.max(cueRange[1],endTime);
merged=true;
if(overlap/(endTime-startTime)>0.5){
return;
}
}
}
if(!merged){
ranges.push([startTime,endTime]);
}
this.Cues.newCue(this[channel],startTime,endTime,screen);
}},{key:'onInitPtsFound',value:function onInitPtsFound(


data){var _this2=this;
if(typeof this.initPTS==='undefined'){
this.initPTS=data.initPTS;
}



if(this.unparsedVttFrags.length){
this.unparsedVttFrags.forEach(function(frag){
_this2.onFragLoaded(frag);
});
this.unparsedVttFrags=[];
}
}},{key:'getExistingTrack',value:function getExistingTrack(

channelNumber){
var media=this.media;
if(media){
for(var i=0;i<media.textTracks.length;i++){
var textTrack=media.textTracks[i];
var propName='textTrack'+channelNumber;
if(textTrack[propName]===true){
return textTrack;
}
}
}
return null;
}},{key:'createTextTrack',value:function createTextTrack(

kind,label,lang){
var media=this.media;
if(media)
{
return media.addTextTrack(kind,label,lang);
}
}},{key:'destroy',value:function destroy()

{
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onMediaAttaching',value:function onMediaAttaching(

data){
this.media=data.media;
}},{key:'onMediaDetaching',value:function onMediaDetaching()

{
clearCurrentCues(this.textTrack1);
clearCurrentCues(this.textTrack2);
}},{key:'onManifestLoading',value:function onManifestLoading()


{
this.lastSn=-1;
this.prevCC=-1;
this.vttCCs={ccOffset:0,presentationOffset:0};


var media=this.media;
if(media){
var textTracks=media.textTracks;
if(textTracks){
for(var i=0;i<textTracks.length;i++){
clearCurrentCues(textTracks[i]);
}
}
}
}},{key:'onManifestLoaded',value:function onManifestLoaded(

data){var _this3=this;
this.textTracks=[];
this.unparsedVttFrags=this.unparsedVttFrags||[];
this.initPTS=undefined;
this.cueRanges=[];

if(this.config.enableWebVTT){
this.tracks=data.subtitles||[];
var inUseTracks=this.media?this.media.textTracks:[];

this.tracks.forEach(function(track,index){
var textTrack=void 0;
if(index<inUseTracks.length){
var inUseTrack=inUseTracks[index];

if(reuseVttTextTrack(inUseTrack,track)){
textTrack=inUseTrack;
}
}
if(!textTrack){
textTrack=_this3.createTextTrack('subtitles',track.name,track.lang);
}
textTrack.mode=track.default?'showing':'hidden';
_this3.textTracks.push(textTrack);
});
}
}},{key:'onLevelSwitching',value:function onLevelSwitching()

{
this.enabled=this.hls.currentLevel.closedCaptions!=='NONE';
}},{key:'onFragLoaded',value:function onFragLoaded(

data){
var frag=data.frag,
payload=data.payload;
if(frag.type==='main'){
var sn=frag.sn;

if(sn!==this.lastSn+1){
this.cea608Parser.reset();
}
this.lastSn=sn;
}else

if(frag.type==='subtitle'){
if(payload.byteLength){

if(typeof this.initPTS==='undefined'){
this.unparsedVttFrags.push(data);
return;
}
var vttCCs=this.vttCCs;
if(!vttCCs[frag.cc]){
vttCCs[frag.cc]={start:frag.start,prevCC:this.prevCC,new:true};
this.prevCC=frag.cc;
}
var textTracks=this.textTracks,
hls=this.hls;


_webvttParser2.default.parse(payload,this.initPTS,vttCCs,frag.cc,function(cues){

cues.forEach(function(cue){
textTracks[frag.trackId].addCue(cue);
});
hls.trigger(_events2.default.SUBTITLE_FRAG_PROCESSED,{success:true,frag:frag});
},
function(e){

_logger.logger.log('Failed to parse VTT cue: '+e);
hls.trigger(_events2.default.SUBTITLE_FRAG_PROCESSED,{success:false,frag:frag});
});
}else
{

this.hls.trigger(_events2.default.SUBTITLE_FRAG_PROCESSED,{success:false,frag:frag});
}
}
}},{key:'onFragParsingUserdata',value:function onFragParsingUserdata(

data){


if(this.enabled&&this.config.enableCEA708Captions){
for(var i=0;i<data.samples.length;i++){
var ccdatas=this.extractCea608Data(data.samples[i].bytes);
this.cea608Parser.addData(data.samples[i].pts,ccdatas);
}
}
}},{key:'extractCea608Data',value:function extractCea608Data(

byteArray){
var count=byteArray[0]&31;
var position=2;
var tmpByte,ccbyte1,ccbyte2,ccValid,ccType;
var actualCCBytes=[];

for(var j=0;j<count;j++){
tmpByte=byteArray[position++];
ccbyte1=0x7F&byteArray[position++];
ccbyte2=0x7F&byteArray[position++];
ccValid=(4&tmpByte)!==0;
ccType=3&tmpByte;

if(ccbyte1===0&&ccbyte2===0){
continue;
}

if(ccValid){
if(ccType===0)
{
actualCCBytes.push(ccbyte1);
actualCCBytes.push(ccbyte2);
}
}
}
return actualCCBytes;
}}]);return TimelineController;}(_eventHandler2.default);exports.default=


TimelineController;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var AESCrypto=function(){
function AESCrypto(subtle,iv){_classCallCheck(this,AESCrypto);
this.subtle=subtle;
this.aesIV=iv;
}_createClass(AESCrypto,[{key:'decrypt',value:function decrypt(

data,key){
return this.subtle.decrypt({name:'AES-CBC',iv:this.aesIV},key,data);
}}]);return AESCrypto;}();exports.default=AESCrypto;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var AESDecryptor=function(){
function AESDecryptor(){_classCallCheck(this,AESDecryptor);

this.rcon=[0x0,0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x1b,0x36];
this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)];
this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)];
this.sBox=new Uint32Array(256);
this.invSBox=new Uint32Array(256);


this.key=new Uint32Array(0);

this.initTable();
}_createClass(AESDecryptor,[{key:'uint8ArrayToUint32Array_',value:function uint8ArrayToUint32Array_(


arrayBuffer){
var view=new DataView(arrayBuffer);
var newArray=new Uint32Array(4);
for(var i=0;i<4;i++){
newArray[i]=view.getUint32(i*4);
}
return newArray;
}},{key:'initTable',value:function initTable()

{
var sBox=this.sBox;
var invSBox=this.invSBox;
var subMix=this.subMix;
var subMix0=subMix[0];
var subMix1=subMix[1];
var subMix2=subMix[2];
var subMix3=subMix[3];
var invSubMix=this.invSubMix;
var invSubMix0=invSubMix[0];
var invSubMix1=invSubMix[1];
var invSubMix2=invSubMix[2];
var invSubMix3=invSubMix[3];

var d=new Uint32Array(256);
var x=0;
var xi=0;
var i=0;
for(i=0;i<256;i++){
if(i<128){
d[i]=i<<1;
}else{
d[i]=i<<1^0x11b;
}
}

for(i=0;i<256;i++){
var sx=xi^xi<<1^xi<<2^xi<<3^xi<<4;
sx=sx>>>8^sx&0xff^0x63;
sBox[x]=sx;
invSBox[sx]=x;


var x2=d[x];
var x4=d[x2];
var x8=d[x4];


var t=d[sx]*0x101^sx*0x1010100;
subMix0[x]=t<<24|t>>>8;
subMix1[x]=t<<16|t>>>16;
subMix2[x]=t<<8|t>>>24;
subMix3[x]=t;


t=x8*0x1010101^x4*0x10001^x2*0x101^x*0x1010100;
invSubMix0[sx]=t<<24|t>>>8;
invSubMix1[sx]=t<<16|t>>>16;
invSubMix2[sx]=t<<8|t>>>24;
invSubMix3[sx]=t;


if(!x){
x=xi=1;
}else{
x=x2^d[d[d[x8^x2]]];
xi^=d[d[xi]];
}
}
}},{key:'expandKey',value:function expandKey(

keyBuffer){

var key=this.uint8ArrayToUint32Array_(keyBuffer);
var sameKey=true;
var offset=0;

while(offset<key.length&&sameKey){
sameKey=key[offset]===this.key[offset];
offset++;
}

if(sameKey){
return;
}

this.key=key;
var keySize=this.keySize=key.length;

if(keySize!==4&&keySize!==6&&keySize!==8){
throw new Error('Invalid aes key size='+keySize);
}

var ksRows=this.ksRows=(keySize+6+1)*4;
var ksRow=void 0;
var invKsRow=void 0;

var keySchedule=this.keySchedule=new Uint32Array(ksRows);
var invKeySchedule=this.invKeySchedule=new Uint32Array(ksRows);
var sbox=this.sBox;
var rcon=this.rcon;

var invSubMix=this.invSubMix;
var invSubMix0=invSubMix[0];
var invSubMix1=invSubMix[1];
var invSubMix2=invSubMix[2];
var invSubMix3=invSubMix[3];

var prev=void 0;
var t=void 0;

for(ksRow=0;ksRow<ksRows;ksRow++){
if(ksRow<keySize){
prev=keySchedule[ksRow]=key[ksRow];
continue;
}
t=prev;

if(ksRow%keySize===0){

t=t<<8|t>>>24;


t=sbox[t>>>24]<<24|sbox[t>>>16&0xff]<<16|sbox[t>>>8&0xff]<<8|sbox[t&0xff];


t^=rcon[ksRow/keySize|0]<<24;
}else if(keySize>6&&ksRow%keySize===4){

t=sbox[t>>>24]<<24|sbox[t>>>16&0xff]<<16|sbox[t>>>8&0xff]<<8|sbox[t&0xff];
}

keySchedule[ksRow]=prev=(keySchedule[ksRow-keySize]^t)>>>0;
}

for(invKsRow=0;invKsRow<ksRows;invKsRow++){
ksRow=ksRows-invKsRow;
if(invKsRow&3){
t=keySchedule[ksRow];
}else{
t=keySchedule[ksRow-4];
}

if(invKsRow<4||ksRow<=4){
invKeySchedule[invKsRow]=t;
}else{
invKeySchedule[invKsRow]=invSubMix0[sbox[t>>>24]]^invSubMix1[sbox[t>>>16&0xff]]^invSubMix2[sbox[t>>>8&0xff]]^invSubMix3[sbox[t&0xff]];
}

invKeySchedule[invKsRow]=invKeySchedule[invKsRow]>>>0;
}
}},{key:'networkToHostOrderSwap',value:function networkToHostOrderSwap(


word){
return word<<24|(word&0xff00)<<8|(word&0xff0000)>>8|word>>>24;
}},{key:'decrypt',value:function decrypt(

inputArrayBuffer,offset,aesIV){
var nRounds=this.keySize+6;
var invKeySchedule=this.invKeySchedule;
var invSBOX=this.invSBox;

var invSubMix=this.invSubMix;
var invSubMix0=invSubMix[0];
var invSubMix1=invSubMix[1];
var invSubMix2=invSubMix[2];
var invSubMix3=invSubMix[3];

var initVector=this.uint8ArrayToUint32Array_(aesIV);
var initVector0=initVector[0];
var initVector1=initVector[1];
var initVector2=initVector[2];
var initVector3=initVector[3];

var inputInt32=new Int32Array(inputArrayBuffer);
var outputInt32=new Int32Array(inputInt32.length);

var t0=void 0,t1=void 0,t2=void 0,t3=void 0;
var s0=void 0,s1=void 0,s2=void 0,s3=void 0;
var inputWords0=void 0,inputWords1=void 0,inputWords2=void 0,inputWords3=void 0;

var ksRow,i;
var swapWord=this.networkToHostOrderSwap;

while(offset<inputInt32.length){
inputWords0=swapWord(inputInt32[offset]);
inputWords1=swapWord(inputInt32[offset+1]);
inputWords2=swapWord(inputInt32[offset+2]);
inputWords3=swapWord(inputInt32[offset+3]);

s0=inputWords0^invKeySchedule[0];
s1=inputWords3^invKeySchedule[1];
s2=inputWords2^invKeySchedule[2];
s3=inputWords1^invKeySchedule[3];

ksRow=4;


for(i=1;i<nRounds;i++){
t0=invSubMix0[s0>>>24]^invSubMix1[s1>>16&0xff]^invSubMix2[s2>>8&0xff]^invSubMix3[s3&0xff]^invKeySchedule[ksRow];
t1=invSubMix0[s1>>>24]^invSubMix1[s2>>16&0xff]^invSubMix2[s3>>8&0xff]^invSubMix3[s0&0xff]^invKeySchedule[ksRow+1];
t2=invSubMix0[s2>>>24]^invSubMix1[s3>>16&0xff]^invSubMix2[s0>>8&0xff]^invSubMix3[s1&0xff]^invKeySchedule[ksRow+2];
t3=invSubMix0[s3>>>24]^invSubMix1[s0>>16&0xff]^invSubMix2[s1>>8&0xff]^invSubMix3[s2&0xff]^invKeySchedule[ksRow+3];

s0=t0;
s1=t1;
s2=t2;
s3=t3;

ksRow=ksRow+4;
}


t0=invSBOX[s0>>>24]<<24^invSBOX[s1>>16&0xff]<<16^invSBOX[s2>>8&0xff]<<8^invSBOX[s3&0xff]^invKeySchedule[ksRow];
t1=invSBOX[s1>>>24]<<24^invSBOX[s2>>16&0xff]<<16^invSBOX[s3>>8&0xff]<<8^invSBOX[s0&0xff]^invKeySchedule[ksRow+1];
t2=invSBOX[s2>>>24]<<24^invSBOX[s3>>16&0xff]<<16^invSBOX[s0>>8&0xff]<<8^invSBOX[s1&0xff]^invKeySchedule[ksRow+2];
t3=invSBOX[s3>>>24]<<24^invSBOX[s0>>16&0xff]<<16^invSBOX[s1>>8&0xff]<<8^invSBOX[s2&0xff]^invKeySchedule[ksRow+3];
ksRow=ksRow+3;


outputInt32[offset]=swapWord(t0^initVector0);
outputInt32[offset+1]=swapWord(t3^initVector1);
outputInt32[offset+2]=swapWord(t2^initVector2);
outputInt32[offset+3]=swapWord(t1^initVector3);


initVector0=inputWords0;
initVector1=inputWords1;
initVector2=inputWords2;
initVector3=inputWords3;

offset=offset+4;
}

return outputInt32.buffer;
}},{key:'destroy',value:function destroy()

{
this.key=undefined;
this.keySize=undefined;
this.ksRows=undefined;

this.sBox=undefined;
this.invSBox=undefined;
this.subMix=undefined;
this.invSubMix=undefined;
this.keySchedule=undefined;
this.invKeySchedule=undefined;

this.rcon=undefined;
}}]);return AESDecryptor;}();exports.default=


AESDecryptor;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var FastAESKey=function(){
function FastAESKey(subtle,key){_classCallCheck(this,FastAESKey);
this.subtle=subtle;
this.key=key;
}_createClass(FastAESKey,[{key:'expandKey',value:function expandKey()

{
return this.subtle.importKey('raw',this.key,{name:'AES-CBC'},false,['encrypt','decrypt']);
}}]);return FastAESKey;}();exports.default=


FastAESKey;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _adts=__webpack_require__(7);var _adts2=_interopRequireDefault(_adts);
var _logger=__webpack_require__(0);
var _id=__webpack_require__(35);var _id2=_interopRequireDefault(_id);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

AACDemuxer=function(){

function AACDemuxer(observer,remuxer,config){_classCallCheck(this,AACDemuxer);
this.observer=observer;
this.config=config;
this.remuxer=remuxer;
}_createClass(AACDemuxer,[{key:'resetInitSegment',value:function resetInitSegment(

initSegment,audioCodec,videoCodec,duration){
this._aacTrack={container:'audio/adts',type:'audio',id:-1,sequenceNumber:0,isAAC:true,samples:[],len:0,manifestCodec:audioCodec,duration:duration,inputTimeScale:90000};
}},{key:'resetTimeStamp',value:function resetTimeStamp()

{
}},{key:'append',value:function append(


















data,timeOffset,contiguous,accurateTimeOffset){
var track,
id3=new _id2.default(data),
pts=90*id3.timeStamp,
config,frameLength,frameDuration,frameIndex,offset,headerLength,stamp,len,aacSample;

track=this._aacTrack;


for(offset=id3.length,len=data.length;offset<len-1;offset++){
if(data[offset]===0xff&&(data[offset+1]&0xf0)===0xf0){
break;
}
}

if(!track.samplerate){
config=_adts2.default.getAudioConfig(this.observer,data,offset,track.manifestCodec);
track.config=config.config;
track.samplerate=config.samplerate;
track.channelCount=config.channelCount;
track.codec=config.codec;
_logger.logger.log('parsed codec:'+track.codec+',rate:'+config.samplerate+',nb channel:'+config.channelCount);
}
frameIndex=0;
frameDuration=1024*90000/track.samplerate;
while(offset+5<len){

headerLength=!!(data[offset+1]&0x01)?7:9;

frameLength=(data[offset+3]&0x03)<<11|
data[offset+4]<<3|
(data[offset+5]&0xE0)>>>5;
frameLength-=headerLength;


if(frameLength>0&&offset+headerLength+frameLength<=len){
stamp=pts+frameIndex*frameDuration;

aacSample={unit:data.subarray(offset+headerLength,offset+headerLength+frameLength),pts:stamp,dts:stamp};
track.samples.push(aacSample);
track.len+=frameLength;
offset+=frameLength+headerLength;
frameIndex++;

for(;offset<len-1;offset++){
if(data[offset]===0xff&&(data[offset+1]&0xf0)===0xf0){
break;
}
}
}else{
break;
}
}
this.remuxer.remux(track,
{samples:[]},
{samples:[{pts:pts,dts:pts,unit:id3.payload}],inputTimeScale:90000},
{samples:[]},
timeOffset,
contiguous,
accurateTimeOffset);
}},{key:'destroy',value:function destroy()

{
}}],[{key:'probe',value:function probe(data){var id3=new _id2.default(data),offset,len;if(id3.hasTimeStamp){for(offset=id3.length,len=data.length;offset<len-1;offset++){if(data[offset]===0xff&&(data[offset+1]&0xf0)===0xf0){return true;}}}return false;}}]);return AACDemuxer;}();exports.default=



AACDemuxer;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});




var _demuxerInline=__webpack_require__(8);var _demuxerInline2=_interopRequireDefault(_demuxerInline);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _logger=__webpack_require__(0);
var _events3=__webpack_require__(5);var _events4=_interopRequireDefault(_events3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var DemuxerWorker=function DemuxerWorker(self){

var observer=new _events4.default();
observer.trigger=function trigger(event){for(var _len=arguments.length,data=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){data[_key-1]=arguments[_key];}
observer.emit.apply(observer,[event,event].concat(data));
};

observer.off=function off(event){for(var _len2=arguments.length,data=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){data[_key2-1]=arguments[_key2];}
observer.removeListener.apply(observer,[event].concat(data));
};

var forwardMessage=function forwardMessage(ev,data){
self.postMessage({event:ev,data:data});
};

self.addEventListener('message',function(ev){
var data=ev.data;

switch(data.cmd){
case'init':
var config=JSON.parse(data.config);
self.demuxer=new _demuxerInline2.default(observer,data.typeSupported,config,data.vendor);
try{
(0,_logger.enableLogs)(config.debug===true);
}catch(err){
console.warn('demuxerWorker: unable to enable logs');
}

forwardMessage('init',null);
break;
case'demux':
self.demuxer.push(data.data,data.decryptdata,data.initSegment,data.audioCodec,data.videoCodec,data.timeOffset,data.discontinuity,data.trackSwitch,data.contiguous,data.duration,data.accurateTimeOffset,data.defaultInitPTS);
break;
default:
break;}

});


observer.on(_events2.default.FRAG_DECRYPTED,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_INIT_SEGMENT,forwardMessage);
observer.on(_events2.default.FRAG_PARSED,forwardMessage);
observer.on(_events2.default.ERROR,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_METADATA,forwardMessage);
observer.on(_events2.default.FRAG_PARSING_USERDATA,forwardMessage);
observer.on(_events2.default.INIT_PTS_FOUND,forwardMessage);


observer.on(_events2.default.FRAG_PARSING_DATA,function(ev,data){
var transferable=[];
var message={event:ev,data:data};
if(data.data1){
message.data1=data.data1.buffer;
transferable.push(data.data1.buffer);
delete data.data1;
}
if(data.data2){
message.data2=data.data2.buffer;
transferable.push(data.data2.buffer);
delete data.data2;
}
self.postMessage(message,transferable);
});
};exports.default=

DemuxerWorker;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _logger=__webpack_require__(0);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ExpGolomb=function(){

function ExpGolomb(data){_classCallCheck(this,ExpGolomb);
this.data=data;

this.bytesAvailable=data.byteLength;

this.word=0;

this.bitsAvailable=0;
}_createClass(ExpGolomb,[{key:'loadWord',value:function loadWord()


{
var
data=this.data,
bytesAvailable=this.bytesAvailable,
position=data.byteLength-bytesAvailable,
workingBytes=new Uint8Array(4),
availableBytes=Math.min(4,bytesAvailable);
if(availableBytes===0){
throw new Error('no bytes available');
}
workingBytes.set(data.subarray(position,position+availableBytes));
this.word=new DataView(workingBytes.buffer).getUint32(0);

this.bitsAvailable=availableBytes*8;
this.bytesAvailable-=availableBytes;
}},{key:'skipBits',value:function skipBits(


count){
var skipBytes;
if(this.bitsAvailable>count){
this.word<<=count;
this.bitsAvailable-=count;
}else{
count-=this.bitsAvailable;
skipBytes=count>>3;
count-=skipBytes>>3;
this.bytesAvailable-=skipBytes;
this.loadWord();
this.word<<=count;
this.bitsAvailable-=count;
}
}},{key:'readBits',value:function readBits(


size){
var
bits=Math.min(this.bitsAvailable,size),
valu=this.word>>>32-bits;
if(size>32){
_logger.logger.error('Cannot read more than 32 bits at a time');
}
this.bitsAvailable-=bits;
if(this.bitsAvailable>0){
this.word<<=bits;
}else if(this.bytesAvailable>0){
this.loadWord();
}
bits=size-bits;
if(bits>0&&this.bitsAvailable){
return valu<<bits|this.readBits(bits);
}else{
return valu;
}
}},{key:'skipLZ',value:function skipLZ()


{
var leadingZeroCount;
for(leadingZeroCount=0;leadingZeroCount<this.bitsAvailable;++leadingZeroCount){
if(0!==(this.word&0x80000000>>>leadingZeroCount)){

this.word<<=leadingZeroCount;
this.bitsAvailable-=leadingZeroCount;
return leadingZeroCount;
}
}

this.loadWord();
return leadingZeroCount+this.skipLZ();
}},{key:'skipUEG',value:function skipUEG()


{
this.skipBits(1+this.skipLZ());
}},{key:'skipEG',value:function skipEG()


{
this.skipBits(1+this.skipLZ());
}},{key:'readUEG',value:function readUEG()


{
var clz=this.skipLZ();
return this.readBits(clz+1)-1;
}},{key:'readEG',value:function readEG()


{
var valu=this.readUEG();
if(0x01&valu){

return 1+valu>>>1;
}else{
return-1*(valu>>>1);
}
}},{key:'readBoolean',value:function readBoolean()



{
return 1===this.readBits(1);
}},{key:'readUByte',value:function readUByte()


{
return this.readBits(8);
}},{key:'readUShort',value:function readUShort()


{
return this.readBits(16);
}},{key:'readUInt',value:function readUInt()

{
return this.readBits(32);
}},{key:'skipScalingList',value:function skipScalingList(








count){
var
lastScale=8,
nextScale=8,
j,
deltaScale;
for(j=0;j<count;j++){
if(nextScale!==0){
deltaScale=this.readEG();
nextScale=(lastScale+deltaScale+256)%256;
}
lastScale=nextScale===0?lastScale:nextScale;
}
}},{key:'readSPS',value:function readSPS()










{
var
frameCropLeftOffset=0,
frameCropRightOffset=0,
frameCropTopOffset=0,
frameCropBottomOffset=0,
profileIdc,profileCompat,levelIdc,
numRefFramesInPicOrderCntCycle,picWidthInMbsMinus1,
picHeightInMapUnitsMinus1,
frameMbsOnlyFlag,
scalingListCount,
i,
readUByte=this.readUByte.bind(this),
readBits=this.readBits.bind(this),
readUEG=this.readUEG.bind(this),
readBoolean=this.readBoolean.bind(this),
skipBits=this.skipBits.bind(this),
skipEG=this.skipEG.bind(this),
skipUEG=this.skipUEG.bind(this),
skipScalingList=this.skipScalingList.bind(this);

readUByte();
profileIdc=readUByte();
profileCompat=readBits(5);
skipBits(3);
levelIdc=readUByte();
skipUEG();

if(profileIdc===100||
profileIdc===110||
profileIdc===122||
profileIdc===244||
profileIdc===44||
profileIdc===83||
profileIdc===86||
profileIdc===118||
profileIdc===128){
var chromaFormatIdc=readUEG();
if(chromaFormatIdc===3){
skipBits(1);
}
skipUEG();
skipUEG();
skipBits(1);
if(readBoolean()){
scalingListCount=chromaFormatIdc!==3?8:12;
for(i=0;i<scalingListCount;i++){
if(readBoolean()){
if(i<6){
skipScalingList(16);
}else{
skipScalingList(64);
}
}
}
}
}
skipUEG();
var picOrderCntType=readUEG();
if(picOrderCntType===0){
readUEG();
}else if(picOrderCntType===1){
skipBits(1);
skipEG();
skipEG();
numRefFramesInPicOrderCntCycle=readUEG();
for(i=0;i<numRefFramesInPicOrderCntCycle;i++){
skipEG();
}
}
skipUEG();
skipBits(1);
picWidthInMbsMinus1=readUEG();
picHeightInMapUnitsMinus1=readUEG();
frameMbsOnlyFlag=readBits(1);
if(frameMbsOnlyFlag===0){
skipBits(1);
}
skipBits(1);
if(readBoolean()){
frameCropLeftOffset=readUEG();
frameCropRightOffset=readUEG();
frameCropTopOffset=readUEG();
frameCropBottomOffset=readUEG();
}
var pixelRatio=[1,1];
if(readBoolean()){

if(readBoolean()){

var aspectRatioIdc=readUByte();
switch(aspectRatioIdc){
case 1:pixelRatio=[1,1];break;
case 2:pixelRatio=[12,11];break;
case 3:pixelRatio=[10,11];break;
case 4:pixelRatio=[16,11];break;
case 5:pixelRatio=[40,33];break;
case 6:pixelRatio=[24,11];break;
case 7:pixelRatio=[20,11];break;
case 8:pixelRatio=[32,11];break;
case 9:pixelRatio=[80,33];break;
case 10:pixelRatio=[18,11];break;
case 11:pixelRatio=[15,11];break;
case 12:pixelRatio=[64,33];break;
case 13:pixelRatio=[160,99];break;
case 14:pixelRatio=[4,3];break;
case 15:pixelRatio=[3,2];break;
case 16:pixelRatio=[2,1];break;
case 255:{
pixelRatio=[readUByte()<<8|readUByte(),readUByte()<<8|readUByte()];
break;
}}

}
}
return{
width:Math.ceil((picWidthInMbsMinus1+1)*16-frameCropLeftOffset*2-frameCropRightOffset*2),
height:(2-frameMbsOnlyFlag)*(picHeightInMapUnitsMinus1+1)*16-(frameMbsOnlyFlag?2:4)*(frameCropTopOffset+frameCropBottomOffset),
pixelRatio:pixelRatio};

}},{key:'readSliceType',value:function readSliceType()

{

this.readUByte();

this.readUEG();

return this.readUEG();
}}]);return ExpGolomb;}();exports.default=


ExpGolomb;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _logger=__webpack_require__(0);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


ID3=function(){

function ID3(data){_classCallCheck(this,ID3);
this._hasTimeStamp=false;
var offset=0,byte1,byte2,byte3,byte4,tagSize,endPos,header,len;
do{
header=this.readUTF(data,offset,3);
offset+=3;

if(header==='ID3'){

offset+=3;

byte1=data[offset++]&0x7f;
byte2=data[offset++]&0x7f;
byte3=data[offset++]&0x7f;
byte4=data[offset++]&0x7f;
tagSize=(byte1<<21)+(byte2<<14)+(byte3<<7)+byte4;
endPos=offset+tagSize;



this._parseID3Frames(data,offset,endPos);
offset=endPos;
}else if(header==='3DI'){

offset+=7;
_logger.logger.log('3DI footer found, end: '+offset);
}else{
offset-=3;
len=offset;
if(len){

if(!this.hasTimeStamp){
_logger.logger.warn('ID3 tag found, but no timestamp');
}
this._length=len;
this._payload=data.subarray(0,len);
}
return;
}
}while(true);
}_createClass(ID3,[{key:'readUTF',value:function readUTF(

data,start,len){

var result='',offset=start,end=start+len;
do{
result+=String.fromCharCode(data[offset++]);
}while(offset<end);
return result;
}},{key:'_parseID3Frames',value:function _parseID3Frames(

data,offset,endPos){
var tagId,tagLen,tagStart,tagFlags,timestamp;
while(offset+8<=endPos){
tagId=this.readUTF(data,offset,4);
offset+=4;

tagLen=data[offset++]<<24+
data[offset++]<<16+
data[offset++]<<8+
data[offset++];

tagFlags=data[offset++]<<8+
data[offset++];

tagStart=offset;

switch(tagId){
case'PRIV':


if(this.readUTF(data,offset,44)==='com.apple.streaming.transportStreamTimestamp'){
offset+=44;


offset+=4;


var pts33Bit=data[offset++]&0x1;
this._hasTimeStamp=true;

timestamp=((data[offset++]<<23)+(
data[offset++]<<15)+(
data[offset++]<<7)+
data[offset++])/45;

if(pts33Bit){
timestamp+=47721858.84;
}
timestamp=Math.round(timestamp);
_logger.logger.trace('ID3 timestamp found: '+timestamp);
this._timeStamp=timestamp;
}
break;
default:
break;}

}
}},{key:'hasTimeStamp',get:function get()

{
return this._hasTimeStamp;
}},{key:'timeStamp',get:function get()

{
return this._timeStamp;
}},{key:'length',get:function get()

{
return this._length;
}},{key:'payload',get:function get()

{
return this._payload;
}}]);return ID3;}();exports.default=



ID3;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


MP4Demuxer=function(){

function MP4Demuxer(observer,remuxer){_classCallCheck(this,MP4Demuxer);
this.observer=observer;
this.remuxer=remuxer;
}_createClass(MP4Demuxer,[{key:'resetTimeStamp',value:function resetTimeStamp()

{

}},{key:'resetInitSegment',value:function resetInitSegment(

initSegment,audioCodec,videoCodec,duration){

var initData=this.initData=MP4Demuxer.parseInitSegment(initSegment);
var tracks={};
if(initData.audio){
tracks.audio={container:'audio/mp4',codec:audioCodec,initSegment:initSegment};
}
if(initData.video){
tracks.video={container:'video/mp4',codec:videoCodec,initSegment:initSegment};
}
this.observer.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT,{tracks:tracks});
}},{key:'append',value:function append(






















































































































































































data,timeOffset,contiguous,accurateTimeOffset){
var initData=this.initData;
var startDTS=MP4Demuxer.startDTS(initData,data);
this.remuxer.remux(initData.audio,initData.video,null,null,startDTS,contiguous,accurateTimeOffset,data);
}},{key:'destroy',value:function destroy()

{
}}],[{key:'probe',value:function probe(data){if(data.length>=8){var dataType=MP4Demuxer.bin2str(data.subarray(4,8));return['moof','ftyp','styp'].indexOf(dataType)>=0;}return false;}},{key:'bin2str',value:function bin2str(buffer){return String.fromCharCode.apply(null,buffer);}},{key:'findBox',value:function findBox(data,path){var results=[],i,size,type,end,subresults;if(!path.length){return null;}for(i=0;i<data.byteLength;){size=data[i]<<24;size|=data[i+1]<<16;size|=data[i+2]<<8;size|=data[i+3];type=MP4Demuxer.bin2str(data.subarray(i+4,i+8));end=size>1?i+size:data.byteLength;if(type===path[0]){if(path.length===1){results.push(data.subarray(i+8,end));}else{subresults=MP4Demuxer.findBox(data.subarray(i+8,end),path.slice(1));if(subresults.length){results=results.concat(subresults);}}}i=end;}return results;}},{key:'parseInitSegment',value:function parseInitSegment(initSegment){var result=[];var traks=MP4Demuxer.findBox(initSegment,['moov','trak']);traks.forEach(function(trak){var tkhd=MP4Demuxer.findBox(trak,['tkhd'])[0];if(tkhd){var version=tkhd[0];var index=version===0?12:20;var trackId=tkhd[index]<<24|tkhd[index+1]<<16|tkhd[index+2]<<8|tkhd[index+3];trackId=trackId<0?4294967296+trackId:trackId;var mdhd=MP4Demuxer.findBox(trak,['mdia','mdhd'])[0];if(mdhd){version=mdhd[0];index=version===0?12:20;var timescale=mdhd[index]<<24|mdhd[index+1]<<16|mdhd[index+2]<<8|mdhd[index+3];var hdlr=MP4Demuxer.findBox(trak,['mdia','hdlr'])[0];if(hdlr){var hdlrType=MP4Demuxer.bin2str(hdlr.subarray(8,12));var type={'soun':'audio','vide':'video'}[hdlrType];if(type){result[trackId]={timescale:timescale,type:type};result[type]={timescale:timescale,id:trackId};}}}}});return result;}},{key:'startDTS',value:function startDTS(initData,fragment){var trafs,baseTimes,result;trafs=MP4Demuxer.findBox(fragment,['moof','traf']);baseTimes=[].concat.apply([],trafs.map(function(traf){return MP4Demuxer.findBox(traf,['tfhd']).map(function(tfhd){var id,scale,baseTime;id=tfhd[4]<<24|tfhd[5]<<16|tfhd[6]<<8|tfhd[7];scale=initData[id].timescale||90e3;baseTime=MP4Demuxer.findBox(traf,['tfdt']).map(function(tfdt){var version,result;version=tfdt[0];result=tfdt[4]<<24|tfdt[5]<<16|tfdt[6]<<8|tfdt[7];if(version===1){result*=Math.pow(2,32);result+=tfdt[8]<<24|tfdt[9]<<16|tfdt[10]<<8|tfdt[11];}return result;})[0];baseTime=baseTime||Infinity;return baseTime/scale;});}));result=Math.min.apply(null,baseTimes);return isFinite(result)?result:0;}}]);return MP4Demuxer;}();exports.default=



MP4Demuxer;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _decrypter=__webpack_require__(6);var _decrypter2=_interopRequireDefault(_decrypter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

SampleAesDecrypter=function(){

function SampleAesDecrypter(observer,config,decryptdata,discardEPB){_classCallCheck(this,SampleAesDecrypter);
this.decryptdata=decryptdata;
this.discardEPB=discardEPB;
this.decrypter=new _decrypter2.default(observer,config);
}_createClass(SampleAesDecrypter,[{key:'decryptBuffer',value:function decryptBuffer(

encryptedData,callback){
this.decrypter.decrypt(encryptedData,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,callback);
}},{key:'decryptAacSample',value:function decryptAacSample(


samples,sampleIndex,callback,sync){
var curUnit=samples[sampleIndex].unit;
var encryptedData=curUnit.subarray(16,curUnit.length-curUnit.length%16);
var encryptedBuffer=encryptedData.buffer.slice(
encryptedData.byteOffset,
encryptedData.byteOffset+encryptedData.length);

var localthis=this;
this.decryptBuffer(encryptedBuffer,function(decryptedData){
decryptedData=new Uint8Array(decryptedData);
curUnit.set(decryptedData,16);

if(!sync){
localthis.decryptAacSamples(samples,sampleIndex+1,callback);
}
});
}},{key:'decryptAacSamples',value:function decryptAacSamples(

samples,sampleIndex,callback){
for(;;sampleIndex++){
if(sampleIndex>=samples.length){
callback();
return;
}

if(samples[sampleIndex].unit.length<32){
continue;
}

var sync=this.decrypter.isSync();

this.decryptAacSample(samples,sampleIndex,callback,sync);

if(!sync){
return;
}
}
}},{key:'getAvcEncryptedData',value:function getAvcEncryptedData(


decodedData){
var encryptedDataLen=Math.floor((decodedData.length-48)/160)*16+16;
var encryptedData=new Int8Array(encryptedDataLen);
var outputPos=0;
for(var inputPos=32;inputPos<=decodedData.length-16;inputPos+=160,outputPos+=16){
encryptedData.set(decodedData.subarray(inputPos,inputPos+16),outputPos);
}
return encryptedData;
}},{key:'getAvcDecryptedUnit',value:function getAvcDecryptedUnit(

decodedData,decryptedData){
decryptedData=new Uint8Array(decryptedData);
var inputPos=0;
for(var outputPos=32;outputPos<=decodedData.length-16;outputPos+=160,inputPos+=16){
decodedData.set(decryptedData.subarray(inputPos,inputPos+16),outputPos);
}
return decodedData;
}},{key:'decryptAvcSample',value:function decryptAvcSample(

samples,sampleIndex,unitIndex,callback,curUnit,sync){
var decodedData=this.discardEPB(curUnit.data);
var encryptedData=this.getAvcEncryptedData(decodedData);
var localthis=this;

this.decryptBuffer(encryptedData.buffer,function(decryptedData){
curUnit.data=localthis.getAvcDecryptedUnit(decodedData,decryptedData);

if(!sync){
localthis.decryptAvcSamples(samples,sampleIndex,unitIndex+1,callback);
}
});
}},{key:'decryptAvcSamples',value:function decryptAvcSamples(

samples,sampleIndex,unitIndex,callback){
for(;;sampleIndex++,unitIndex=0){
if(sampleIndex>=samples.length){
callback();
return;
}

var curUnits=samples[sampleIndex].units;
for(;;unitIndex++){
if(unitIndex>=curUnits.length){
break;
}

var curUnit=curUnits[unitIndex];
if(curUnit.length<=48||curUnit.type!==1&&curUnit.type!==5){
continue;
}

var sync=this.decrypter.isSync();

this.decryptAvcSample(samples,sampleIndex,unitIndex,callback,curUnit,sync);

if(!sync){
return;
}
}
}
}}]);return SampleAesDecrypter;}();exports.default=


SampleAesDecrypter;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();










var _adts=__webpack_require__(7);var _adts2=_interopRequireDefault(_adts);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _expGolomb=__webpack_require__(34);var _expGolomb2=_interopRequireDefault(_expGolomb);
var _sampleAes=__webpack_require__(37);var _sampleAes2=_interopRequireDefault(_sampleAes);

var _logger=__webpack_require__(0);
var _errors=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

TSDemuxer=function(){

function TSDemuxer(observer,remuxer,config,typeSupported){_classCallCheck(this,TSDemuxer);
this.observer=observer;
this.config=config;
this.typeSupported=typeSupported;
this.remuxer=remuxer;
this.sampleAes=null;
}_createClass(TSDemuxer,[{key:'setDecryptData',value:function setDecryptData(

decryptdata){
if(decryptdata!=null&&decryptdata.key!=null&&decryptdata.method==='SAMPLE-AES'){
this.sampleAes=new _sampleAes2.default(this.observer,this.config,decryptdata,this.discardEPB);
}else{
this.sampleAes=null;
}
}},{key:'resetInitSegment',value:function resetInitSegment(










initSegment,audioCodec,videoCodec,duration){
this.pmtParsed=false;
this._pmtId=-1;
this._avcTrack={container:'video/mp2t',type:'video',id:-1,inputTimeScale:90000,sequenceNumber:0,samples:[],len:0,dropped:0};
this._audioTrack={container:'video/mp2t',type:'audio',id:-1,inputTimeScale:90000,sequenceNumber:0,samples:[],len:0,isAAC:true};
this._id3Track={type:'id3',id:-1,inputTimeScale:90000,sequenceNumber:0,samples:[],len:0};
this._txtTrack={type:'text',id:-1,inputTimeScale:90000,sequenceNumber:0,samples:[],len:0};

this.aacOverFlow=null;
this.aacLastPTS=null;
this.avcSample=null;
this.audioCodec=audioCodec;
this.videoCodec=videoCodec;
this._duration=duration;
}},{key:'resetTimeStamp',value:function resetTimeStamp()

{
}},{key:'append',value:function append(


data,timeOffset,contiguous,accurateTimeOffset){
var start,len=data.length,stt,pid,atf,offset,pes,
unknownPIDs=false;
this.contiguous=contiguous;
var pmtParsed=this.pmtParsed,
avcTrack=this._avcTrack,
audioTrack=this._audioTrack,
id3Track=this._id3Track,
avcId=avcTrack.id,
audioId=audioTrack.id,
id3Id=id3Track.id,
pmtId=this._pmtId,
avcData=avcTrack.pesData,
audioData=audioTrack.pesData,
id3Data=id3Track.pesData,
parsePAT=this._parsePAT,
parsePMT=this._parsePMT,
parsePES=this._parsePES,
parseAVCPES=this._parseAVCPES.bind(this),
parseAACPES=this._parseAACPES.bind(this),
parseMPEGPES=this._parseMPEGPES.bind(this),
parseID3PES=this._parseID3PES.bind(this);


len-=len%188;

for(start=0;start<len;start+=188){
if(data[start]===0x47){
stt=!!(data[start+1]&0x40);

pid=((data[start+1]&0x1f)<<8)+data[start+2];
atf=(data[start+3]&0x30)>>4;

if(atf>1){
offset=start+5+data[start+4];

if(offset===start+188){
continue;
}
}else{
offset=start+4;
}
switch(pid){
case avcId:
if(stt){
if(avcData&&(pes=parsePES(avcData))){
parseAVCPES(pes,false);
}
avcData={data:[],size:0};
}
if(avcData){
avcData.data.push(data.subarray(offset,start+188));
avcData.size+=start+188-offset;
}
break;
case audioId:
if(stt){
if(audioData&&(pes=parsePES(audioData))){
if(audioTrack.isAAC){
parseAACPES(pes);
}else{
parseMPEGPES(pes);
}
}
audioData={data:[],size:0};
}
if(audioData){
audioData.data.push(data.subarray(offset,start+188));
audioData.size+=start+188-offset;
}
break;
case id3Id:
if(stt){
if(id3Data&&(pes=parsePES(id3Data))){
parseID3PES(pes);
}
id3Data={data:[],size:0};
}
if(id3Data){
id3Data.data.push(data.subarray(offset,start+188));
id3Data.size+=start+188-offset;
}
break;
case 0:
if(stt){
offset+=data[offset]+1;
}
pmtId=this._pmtId=parsePAT(data,offset);
break;
case pmtId:
if(stt){
offset+=data[offset]+1;
}
var parsedPIDs=parsePMT(data,offset,this.typeSupported.mpeg===true||this.typeSupported.mp3===true,this.sampleAes!=null);





avcId=parsedPIDs.avc;
if(avcId>0){
avcTrack.id=avcId;
}
audioId=parsedPIDs.audio;
if(audioId>0){
audioTrack.id=audioId;
audioTrack.isAAC=parsedPIDs.isAAC;
}
id3Id=parsedPIDs.id3;
if(id3Id>0){
id3Track.id=id3Id;
}
if(unknownPIDs&&!pmtParsed){
_logger.logger.log('reparse from beginning');
unknownPIDs=false;

start=-188;
}
pmtParsed=this.pmtParsed=true;
break;
case 17:
case 0x1fff:
break;
default:
unknownPIDs=true;
break;}

}else{
this.observer.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_PARSING_ERROR,fatal:false,reason:'TS packet did not start with 0x47'});
}
}

if(avcData&&(pes=parsePES(avcData))){
parseAVCPES(pes,true);
avcTrack.pesData=null;
}else{

avcTrack.pesData=avcData;
}

if(audioData&&(pes=parsePES(audioData))){
if(audioTrack.isAAC){
parseAACPES(pes);
}else{
parseMPEGPES(pes);
}
audioTrack.pesData=null;
}else{
if(audioData&&audioData.size){
_logger.logger.log('last AAC PES packet truncated,might overlap between fragments');
}

audioTrack.pesData=audioData;
}

if(id3Data&&(pes=parsePES(id3Data))){
parseID3PES(pes);
id3Track.pesData=null;
}else{

id3Track.pesData=id3Data;
}

if(this.sampleAes==null){
this.remuxer.remux(audioTrack,avcTrack,id3Track,this._txtTrack,timeOffset,contiguous,accurateTimeOffset);
}else{
this.decryptAndRemux(audioTrack,avcTrack,id3Track,this._txtTrack,timeOffset,contiguous,accurateTimeOffset);
}
}},{key:'decryptAndRemux',value:function decryptAndRemux(

audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset){
if(audioTrack.samples&&audioTrack.isAAC){
var localthis=this;
this.sampleAes.decryptAacSamples(audioTrack.samples,0,function(){
localthis.decryptAndRemuxAvc(audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset);
});
}else{
this.decryptAndRemuxAvc(audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset);
}
}},{key:'decryptAndRemuxAvc',value:function decryptAndRemuxAvc(

audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset){
if(videoTrack.samples){
var localthis=this;
this.sampleAes.decryptAvcSamples(videoTrack.samples,0,0,function(){
localthis.remuxer.remux(audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset);
});
}else{
this.remuxer.remux(audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset);
}
}},{key:'destroy',value:function destroy()

{
this._initPTS=this._initDTS=undefined;
this._duration=0;
}},{key:'_parsePAT',value:function _parsePAT(

data,offset){

return(data[offset+10]&0x1F)<<8|data[offset+11];

}},{key:'_parsePMT',value:function _parsePMT(

data,offset,mpegSupported,isSampleAes){
var sectionLength,tableEnd,programInfoLength,pid,result={audio:-1,avc:-1,id3:-1,isAAC:true};
sectionLength=(data[offset+1]&0x0f)<<8|data[offset+2];
tableEnd=offset+3+sectionLength-4;


programInfoLength=(data[offset+10]&0x0f)<<8|data[offset+11];

offset+=12+programInfoLength;
while(offset<tableEnd){
pid=(data[offset+1]&0x1F)<<8|data[offset+2];
switch(data[offset]){
case 0xcf:
if(!isSampleAes){
_logger.logger.log('unkown stream type:'+data[offset]);
break;
}



case 0x0f:

if(result.audio===-1){
result.audio=pid;
}
break;


case 0x15:

if(result.id3===-1){
result.id3=pid;
}
break;

case 0xdb:
if(!isSampleAes){
_logger.logger.log('unkown stream type:'+data[offset]);
break;
}



case 0x1b:

if(result.avc===-1){
result.avc=pid;
}
break;



case 0x03:
case 0x04:

if(!mpegSupported){
_logger.logger.log('MPEG audio found, not supported in this browser for now');
}else if(result.audio===-1){
result.audio=pid;
result.isAAC=false;
}
break;

case 0x24:
_logger.logger.warn('HEVC stream type found, not supported for now');
break;

default:
_logger.logger.log('unkown stream type:'+data[offset]);
break;}



offset+=((data[offset+3]&0x0F)<<8|data[offset+4])+5;
}
return result;
}},{key:'_parsePES',value:function _parsePES(

stream){
var i=0,frag,pesFlags,pesPrefix,pesLen,pesHdrLen,pesData,pesPts,pesDts,payloadStartOffset,data=stream.data;

if(!stream||stream.size===0){
return null;
}




while(data[0].length<19&&data.length>1){
var newData=new Uint8Array(data[0].length+data[1].length);
newData.set(data[0]);
newData.set(data[1],data[0].length);
data[0]=newData;
data.splice(1,1);
}

frag=data[0];
pesPrefix=(frag[0]<<16)+(frag[1]<<8)+frag[2];
if(pesPrefix===1){
pesLen=(frag[4]<<8)+frag[5];


if(pesLen&&pesLen>stream.size-6){
return null;
}
pesFlags=frag[7];
if(pesFlags&0xC0){



pesPts=(frag[9]&0x0E)*536870912+
(frag[10]&0xFF)*4194304+
(frag[11]&0xFE)*16384+
(frag[12]&0xFF)*128+
(frag[13]&0xFE)/2;

if(pesPts>4294967295){

pesPts-=8589934592;
}
if(pesFlags&0x40){
pesDts=(frag[14]&0x0E)*536870912+
(frag[15]&0xFF)*4194304+
(frag[16]&0xFE)*16384+
(frag[17]&0xFF)*128+
(frag[18]&0xFE)/2;

if(pesDts>4294967295){

pesDts-=8589934592;
}
if(pesPts-pesDts>60*90000){
_logger.logger.warn(Math.round((pesPts-pesDts)/90000)+'s delta between PTS and DTS, align them');
pesPts=pesDts;
}
}else{
pesDts=pesPts;
}
}
pesHdrLen=frag[8];

payloadStartOffset=pesHdrLen+9;

stream.size-=payloadStartOffset;

pesData=new Uint8Array(stream.size);
for(var j=0,dataLen=data.length;j<dataLen;j++){
frag=data[j];
var len=frag.byteLength;
if(payloadStartOffset){
if(payloadStartOffset>len){

payloadStartOffset-=len;
continue;
}else{

frag=frag.subarray(payloadStartOffset);
len-=payloadStartOffset;
payloadStartOffset=0;
}
}
pesData.set(frag,i);
i+=len;
}
if(pesLen){

pesLen-=pesHdrLen+3;
}
return{data:pesData,pts:pesPts,dts:pesDts,len:pesLen};
}else{
return null;
}
}},{key:'pushAccesUnit',value:function pushAccesUnit(

avcSample,avcTrack){
if(avcSample.units.length&&avcSample.frame){
var samples=avcTrack.samples;
var nbSamples=samples.length;




if(!this.config.forceKeyFrameOnDiscontinuity||
avcSample.key===true||
avcTrack.sps&&(nbSamples||this.contiguous)){
avcSample.id=nbSamples;
samples.push(avcSample);
}else{

avcTrack.dropped++;
}
}
if(avcSample.debug.length){
_logger.logger.log(avcSample.pts+'/'+avcSample.dts+':'+avcSample.debug);
}
}},{key:'_parseAVCPES',value:function _parseAVCPES(

pes,last){var _this=this;

var track=this._avcTrack,
units=this._parseAVCNALu(pes.data),
debug=false,
expGolombDecoder,
avcSample=this.avcSample,
push,
i;

pes.data=null;

units.forEach(function(unit){
switch(unit.type){

case 1:
push=true;
if(debug&&avcSample){
avcSample.debug+='NDR ';
}
avcSample.frame=true;

var data=unit.data;
if(data.length>4){
var sliceType=new _expGolomb2.default(data).readSliceType();





if(sliceType===2||sliceType===4||sliceType===7||sliceType===9){
avcSample.key=true;
}
}
break;

case 5:
push=true;

if(!avcSample){
avcSample=_this.avcSample=_this._createAVCSample(true,pes.pts,pes.dts,'');
}
if(debug){
avcSample.debug+='IDR ';
}
avcSample.key=true;
avcSample.frame=true;
break;

case 6:
push=true;
if(debug&&avcSample){
avcSample.debug+='SEI ';
}
expGolombDecoder=new _expGolomb2.default(_this.discardEPB(unit.data));


expGolombDecoder.readUByte();

var payloadType=0;
var payloadSize=0;
var endOfCaptions=false;
var b=0;

while(!endOfCaptions&&expGolombDecoder.bytesAvailable>1){
payloadType=0;
do{
b=expGolombDecoder.readUByte();
payloadType+=b;
}while(b===0xFF);


payloadSize=0;
do{
b=expGolombDecoder.readUByte();
payloadSize+=b;
}while(b===0xFF);



if(payloadType===4&&expGolombDecoder.bytesAvailable!==0){

endOfCaptions=true;

var countryCode=expGolombDecoder.readUByte();

if(countryCode===181){
var providerCode=expGolombDecoder.readUShort();

if(providerCode===49){
var userStructure=expGolombDecoder.readUInt();

if(userStructure===0x47413934){
var userDataType=expGolombDecoder.readUByte();


if(userDataType===3){
var firstByte=expGolombDecoder.readUByte();
var secondByte=expGolombDecoder.readUByte();

var totalCCs=31&firstByte;
var byteArray=[firstByte,secondByte];

for(i=0;i<totalCCs;i++){

byteArray.push(expGolombDecoder.readUByte());
byteArray.push(expGolombDecoder.readUByte());
byteArray.push(expGolombDecoder.readUByte());
}

_this._insertSampleInOrder(_this._txtTrack.samples,{type:3,pts:pes.pts,bytes:byteArray});
}
}
}
}
}else
if(payloadSize<expGolombDecoder.bytesAvailable)
{
for(i=0;i<payloadSize;i++)
{
expGolombDecoder.readUByte();
}
}
}
break;

case 7:
push=true;
if(debug&&avcSample){
avcSample.debug+='SPS ';
}
if(!track.sps){
expGolombDecoder=new _expGolomb2.default(unit.data);
var config=expGolombDecoder.readSPS();
track.width=config.width;
track.height=config.height;
track.pixelRatio=config.pixelRatio;
track.sps=[unit.data];
track.duration=_this._duration;
var codecarray=unit.data.subarray(1,4);
var codecstring='avc1.';
for(i=0;i<3;i++){
var h=codecarray[i].toString(16);
if(h.length<2){
h='0'+h;
}
codecstring+=h;
}
track.codec=codecstring;
}
break;

case 8:
push=true;
if(debug&&avcSample){
avcSample.debug+='PPS ';
}
if(!track.pps){
track.pps=[unit.data];
}
break;

case 9:
push=false;
if(avcSample){
_this.pushAccesUnit(avcSample,track);
}
avcSample=_this.avcSample=_this._createAVCSample(false,pes.pts,pes.dts,debug?'AUD ':'');
break;

case 12:
push=false;
break;
default:
push=false;
if(avcSample){
avcSample.debug+='unknown NAL '+unit.type+' ';
}
break;}

if(avcSample&&push){
var _units=avcSample.units;
_units.push(unit);
}
});

if(last&&avcSample){
this.pushAccesUnit(avcSample,track);
this.avcSample=null;
}
}},{key:'_createAVCSample',value:function _createAVCSample(

key,pts,dts,debug){
return{key:key,pts:pts,dts:dts,units:[],debug:debug};
}},{key:'_insertSampleInOrder',value:function _insertSampleInOrder(

arr,data){
var len=arr.length;
if(len>0){
if(data.pts>=arr[len-1].pts)
{
arr.push(data);
}else
{
for(var pos=len-1;pos>=0;pos--){
if(data.pts<arr[pos].pts){
arr.splice(pos,0,data);
break;
}
}
}
}else
{
arr.push(data);
}
}},{key:'_getLastNalUnit',value:function _getLastNalUnit()

{
var avcSample=this.avcSample,lastUnit=void 0;

if(!avcSample||avcSample.units.length===0){
var track=this._avcTrack,samples=track.samples;
avcSample=samples[samples.length-1];
}
if(avcSample){
var units=avcSample.units;
lastUnit=units[units.length-1];
}
return lastUnit;
}},{key:'_parseAVCNALu',value:function _parseAVCNALu(

array){
var i=0,len=array.byteLength,value,overflow,track=this._avcTrack,state=track.naluState||0,lastState=state;
var units=[],unit,unitType,lastUnitStart=-1,lastUnitType;


if(state===-1){

lastUnitStart=0;

lastUnitType=array[0]&0x1f;
state=0;
i=1;
}

while(i<len){
value=array[i++];

if(!state){
state=value?0:1;
continue;
}
if(state===1){
state=value?0:2;
continue;
}

if(!value){
state=3;
}else if(value===1){
if(lastUnitStart>=0){
unit={data:array.subarray(lastUnitStart,i-state-1),type:lastUnitType};

units.push(unit);
}else{




var lastUnit=this._getLastNalUnit();
if(lastUnit){
if(lastState&&i<=4-lastState){



if(lastUnit.state){

lastUnit.data=lastUnit.data.subarray(0,lastUnit.data.byteLength-lastState);
}
}

overflow=i-state-1;
if(overflow>0){

var tmp=new Uint8Array(lastUnit.data.byteLength+overflow);
tmp.set(lastUnit.data,0);
tmp.set(array.subarray(0,overflow),lastUnit.data.byteLength);
lastUnit.data=tmp;
}
}
}

if(i<len){
unitType=array[i]&0x1f;

lastUnitStart=i;
lastUnitType=unitType;
state=0;
}else{

state=-1;
}
}else{
state=0;
}
}
if(lastUnitStart>=0&&state>=0){
unit={data:array.subarray(lastUnitStart,len),type:lastUnitType,state:state};
units.push(unit);

}

if(units.length===0){

var _lastUnit=this._getLastNalUnit();
if(_lastUnit){
var _tmp=new Uint8Array(_lastUnit.data.byteLength+array.byteLength);
_tmp.set(_lastUnit.data,0);
_tmp.set(array,_lastUnit.data.byteLength);
_lastUnit.data=_tmp;
}
}
track.naluState=state;
return units;
}},{key:'discardEPB',value:function discardEPB(




data){
var length=data.byteLength,
EPBPositions=[],
i=1,
newLength,newData;


while(i<length-2){
if(data[i]===0&&
data[i+1]===0&&
data[i+2]===0x03){
EPBPositions.push(i+2);
i+=2;
}else{
i++;
}
}



if(EPBPositions.length===0){
return data;
}


newLength=length-EPBPositions.length;
newData=new Uint8Array(newLength);
var sourceIndex=0;

for(i=0;i<newLength;sourceIndex++,i++){
if(sourceIndex===EPBPositions[0]){

sourceIndex++;

EPBPositions.shift();
}
newData[i]=data[sourceIndex];
}
return newData;
}},{key:'_parseAACPES',value:function _parseAACPES(

pes){
var track=this._audioTrack,
data=pes.data,
pts=pes.pts,
startOffset=0,
aacOverFlow=this.aacOverFlow,
aacLastPTS=this.aacLastPTS,
config,frameLength,frameDuration,frameIndex,offset,headerLength,stamp,len,aacSample;
if(aacOverFlow){
var tmp=new Uint8Array(aacOverFlow.byteLength+data.byteLength);
tmp.set(aacOverFlow,0);
tmp.set(data,aacOverFlow.byteLength);

data=tmp;
}

for(offset=startOffset,len=data.length;offset<len-1;offset++){
if(data[offset]===0xff&&(data[offset+1]&0xf0)===0xf0){
break;
}
}

if(offset){
var reason,fatal;
if(offset<len-1){
reason='AAC PES did not start with ADTS header,offset:'+offset;
fatal=false;
}else{
reason='no ADTS header found in AAC PES';
fatal=true;
}
_logger.logger.warn('parsing error:'+reason);
this.observer.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_PARSING_ERROR,fatal:fatal,reason:reason});
if(fatal){
return;
}
}
if(!track.samplerate){
var audioCodec=this.audioCodec;
config=_adts2.default.getAudioConfig(this.observer,data,offset,audioCodec);
track.config=config.config;
track.samplerate=config.samplerate;
track.channelCount=config.channelCount;
track.codec=config.codec;
track.manifestCodec=config.manifestCodec;
track.duration=this._duration;
_logger.logger.log('parsed codec:'+track.codec+',rate:'+config.samplerate+',nb channel:'+config.channelCount);
}
frameIndex=0;
frameDuration=1024*90000/track.samplerate;



if(aacOverFlow&&aacLastPTS){
var newPTS=aacLastPTS+frameDuration;
if(Math.abs(newPTS-pts)>1){
_logger.logger.log('AAC: align PTS for overlapping frames by '+Math.round((newPTS-pts)/90));
pts=newPTS;
}
}

while(offset+5<len){

headerLength=!!(data[offset+1]&0x01)?7:9;

frameLength=(data[offset+3]&0x03)<<11|
data[offset+4]<<3|
(data[offset+5]&0xE0)>>>5;
frameLength-=headerLength;


if(frameLength>0&&offset+headerLength+frameLength<=len){
stamp=pts+frameIndex*frameDuration;

aacSample={unit:data.subarray(offset+headerLength,offset+headerLength+frameLength),pts:stamp,dts:stamp};
track.samples.push(aacSample);
track.len+=frameLength;
offset+=frameLength+headerLength;
frameIndex++;

for(;offset<len-1;offset++){
if(data[offset]===0xff&&(data[offset+1]&0xf0)===0xf0){
break;
}
}
}else{
break;
}
}
if(offset<len){
aacOverFlow=data.subarray(offset,len);

}else{
aacOverFlow=null;
}
this.aacOverFlow=aacOverFlow;
this.aacLastPTS=stamp;
}},{key:'_parseMPEGPES',value:function _parseMPEGPES(

pes){
var data=pes.data;
var pts=pes.pts;
var length=data.length;
var frameIndex=0;
var offset=0;
var parsed;

while(offset<length&&
(parsed=this._parseMpeg(data,offset,length,frameIndex++,pts))>0){
offset+=parsed;
}
}},{key:'_onMpegFrame',value:function _onMpegFrame(

data,bitRate,sampleRate,channelCount,frameIndex,pts){
var frameDuration=1152/sampleRate*1000;
var stamp=pts+frameIndex*frameDuration;
var track=this._audioTrack;

track.config=[];
track.channelCount=channelCount;
track.samplerate=sampleRate;
track.duration=this._duration;
track.samples.push({unit:data,pts:stamp,dts:stamp});
track.len+=data.length;
}},{key:'_onMpegNoise',value:function _onMpegNoise(

data){
_logger.logger.warn('mpeg audio has noise: '+data.length+' bytes');
}},{key:'_parseMpeg',value:function _parseMpeg(

data,start,end,frameIndex,pts){
var BitratesMap=[
32,64,96,128,160,192,224,256,288,320,352,384,416,448,
32,48,56,64,80,96,112,128,160,192,224,256,320,384,
32,40,48,56,64,80,96,112,128,160,192,224,256,320,
32,48,56,64,80,96,112,128,144,160,176,192,224,256,
8,16,24,32,40,48,56,64,80,96,112,128,144,160];
var SamplingRateMap=[44100,48000,32000,22050,24000,16000,11025,12000,8000];

if(start+2>end){
return-1;
}
if(data[start]===0xFF||(data[start+1]&0xE0)===0xE0){

if(start+24>end){
return-1;
}
var headerB=data[start+1]>>3&3;
var headerC=data[start+1]>>1&3;
var headerE=data[start+2]>>4&15;
var headerF=data[start+2]>>2&3;
var headerG=!!(data[start+2]&2);
if(headerB!==1&&headerE!==0&&headerE!==15&&headerF!==3){
var columnInBitrates=headerB===3?3-headerC:headerC===3?3:4;
var bitRate=BitratesMap[columnInBitrates*14+headerE-1]*1000;
var columnInSampleRates=headerB===3?0:headerB===2?1:2;
var sampleRate=SamplingRateMap[columnInSampleRates*3+headerF];
var padding=headerG?1:0;
var channelCount=data[start+3]>>6===3?1:2;
var frameLength=headerC===3?
(headerB===3?12:6)*bitRate/sampleRate+padding<<2:
(headerB===3?144:72)*bitRate/sampleRate+padding|0;
if(start+frameLength>end){
return-1;
}
if(this._onMpegFrame){
this._onMpegFrame(data.subarray(start,start+frameLength),bitRate,sampleRate,channelCount,frameIndex,pts);
}
return frameLength;
}
}

var offset=start+2;
while(offset<end){
if(data[offset-1]===0xFF&&(data[offset]&0xE0)===0xE0){

if(this._onMpegNoise){
this._onMpegNoise(data.subarray(start,offset-1));
}
return offset-start-1;
}
offset++;
}
return-1;
}},{key:'_parseID3PES',value:function _parseID3PES(

pes){
this._id3Track.samples.push(pes);
}}],[{key:'probe',value:function probe(data){if(data.length>=3*188&&data[0]===0x47&&data[188]===0x47&&data[2*188]===0x47){return true;}else{return false;}}}]);return TSDemuxer;}();exports.default=


TSDemuxer;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



AAC=function(){function AAC(){_classCallCheck(this,AAC);}_createClass(AAC,null,[{key:'getSilentFrame',value:function getSilentFrame(
codec,channelCount){
switch(codec){
case'mp4a.40.2':
if(channelCount===1){
return new Uint8Array([0x00,0xc8,0x00,0x80,0x23,0x80]);
}else if(channelCount===2){
return new Uint8Array([0x21,0x00,0x49,0x90,0x02,0x19,0x00,0x23,0x80]);
}else if(channelCount===3){
return new Uint8Array([0x00,0xc8,0x00,0x80,0x20,0x84,0x01,0x26,0x40,0x08,0x64,0x00,0x8e]);
}else if(channelCount===4){
return new Uint8Array([0x00,0xc8,0x00,0x80,0x20,0x84,0x01,0x26,0x40,0x08,0x64,0x00,0x80,0x2c,0x80,0x08,0x02,0x38]);
}else if(channelCount===5){
return new Uint8Array([0x00,0xc8,0x00,0x80,0x20,0x84,0x01,0x26,0x40,0x08,0x64,0x00,0x82,0x30,0x04,0x99,0x00,0x21,0x90,0x02,0x38]);
}else if(channelCount===6){
return new Uint8Array([0x00,0xc8,0x00,0x80,0x20,0x84,0x01,0x26,0x40,0x08,0x64,0x00,0x82,0x30,0x04,0x99,0x00,0x21,0x90,0x02,0x00,0xb2,0x00,0x20,0x08,0xe0]);
}
break;

default:
if(channelCount===1){

return new Uint8Array([0x1,0x40,0x22,0x80,0xa3,0x4e,0xe6,0x80,0xba,0x8,0x0,0x0,0x0,0x1c,0x6,0xf1,0xc1,0xa,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5e]);
}else if(channelCount===2){

return new Uint8Array([0x1,0x40,0x22,0x80,0xa3,0x5e,0xe6,0x80,0xba,0x8,0x0,0x0,0x0,0x0,0x95,0x0,0x6,0xf1,0xa1,0xa,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5e]);
}else if(channelCount===3){

return new Uint8Array([0x1,0x40,0x22,0x80,0xa3,0x5e,0xe6,0x80,0xba,0x8,0x0,0x0,0x0,0x0,0x95,0x0,0x6,0xf1,0xa1,0xa,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5a,0x5e]);
}
break;}

return null;
}}]);return AAC;}();exports.default=


AAC;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {




module.exports=__webpack_require__(15).default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _errors=__webpack_require__(2);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

FragmentLoader=function(_EventHandler){_inherits(FragmentLoader,_EventHandler);

function FragmentLoader(hls){_classCallCheck(this,FragmentLoader);var _this=_possibleConstructorReturn(this,(FragmentLoader.__proto__||Object.getPrototypeOf(FragmentLoader)).call(this,
hls,_events2.default.FRAG_LOADING));
_this.loaders={};return _this;
}_createClass(FragmentLoader,[{key:'destroy',value:function destroy()

{
var loaders=this.loaders;
for(var loaderName in loaders){
var loader=loaders[loaderName];
if(loader){
loader.destroy();
}
}
this.loaders={};
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onFragLoading',value:function onFragLoading(

data){
var frag=data.frag,
type=frag.type,
loader=this.loaders[type],
config=this.hls.config;

frag.loaded=0;
if(loader){
_logger.logger.warn('abort previous fragment loader for type:'+type);
loader.abort();
}
loader=this.loaders[type]=frag.loader=typeof config.fLoader!=='undefined'?new config.fLoader(config):new config.loader(config);

var loaderContext=void 0,loaderConfig=void 0,loaderCallbacks=void 0;
loaderContext={url:frag.url,frag:frag,responseType:'arraybuffer',progressData:false};
var start=frag.byteRangeStartOffset,end=frag.byteRangeEndOffset;
if(!isNaN(start)&&!isNaN(end)){
loaderContext.rangeStart=start;
loaderContext.rangeEnd=end;
}
loaderConfig={timeout:config.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:config.fragLoadingMaxRetryTimeout};
loaderCallbacks={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)};
loader.load(loaderContext,loaderConfig,loaderCallbacks);
}},{key:'loadsuccess',value:function loadsuccess(

response,stats,context){
var payload=response.data,frag=context.frag;

frag.loader=undefined;
this.loaders[frag.type]=undefined;
this.hls.trigger(_events2.default.FRAG_LOADED,{payload:payload,frag:frag,stats:stats});
}},{key:'loaderror',value:function loaderror(

response,context){
var loader=context.loader;
if(loader){
loader.abort();
}
this.loaders[context.type]=undefined;
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.FRAG_LOAD_ERROR,fatal:false,frag:context.frag,response:response});
}},{key:'loadtimeout',value:function loadtimeout(

stats,context){
var loader=context.loader;
if(loader){
loader.abort();
}
this.loaders[context.type]=undefined;
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:false,frag:context.frag});
}},{key:'loadprogress',value:function loadprogress(


stats,context,data){
var frag=context.frag;
frag.loaded=stats.loaded;
this.hls.trigger(_events2.default.FRAG_LOAD_PROGRESS,{frag:frag,stats:stats});
}}]);return FragmentLoader;}(_eventHandler2.default);exports.default=


FragmentLoader;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _errors=__webpack_require__(2);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

KeyLoader=function(_EventHandler){_inherits(KeyLoader,_EventHandler);

function KeyLoader(hls){_classCallCheck(this,KeyLoader);var _this=_possibleConstructorReturn(this,(KeyLoader.__proto__||Object.getPrototypeOf(KeyLoader)).call(this,
hls,_events2.default.KEY_LOADING));
_this.loaders={};
_this.decryptkey=null;
_this.decrypturl=null;return _this;
}_createClass(KeyLoader,[{key:'destroy',value:function destroy()

{
for(var loaderName in this.loaders){
var loader=this.loaders[loaderName];
if(loader){
loader.destroy();
}
}
this.loaders={};
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onKeyLoading',value:function onKeyLoading(

data){
var frag=data.frag,
type=frag.type,
loader=this.loaders[type],
decryptdata=frag.decryptdata,
uri=decryptdata.uri;

if(uri!==this.decrypturl||this.decryptkey===null){
var config=this.hls.config;

if(loader){
_logger.logger.warn('abort previous key loader for type:'+type);
loader.abort();
}
frag.loader=this.loaders[type]=new config.loader(config);
this.decrypturl=uri;
this.decryptkey=null;

var loaderContext=void 0,loaderConfig=void 0,loaderCallbacks=void 0;
loaderContext={url:uri,frag:frag,responseType:'arraybuffer'};
loaderConfig={timeout:config.fragLoadingTimeOut,maxRetry:config.fragLoadingMaxRetry,retryDelay:config.fragLoadingRetryDelay,maxRetryDelay:config.fragLoadingMaxRetryTimeout};
loaderCallbacks={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};
frag.loader.load(loaderContext,loaderConfig,loaderCallbacks);
}else if(this.decryptkey){

decryptdata.key=this.decryptkey;
this.hls.trigger(_events2.default.KEY_LOADED,{frag:frag});
}
}},{key:'loadsuccess',value:function loadsuccess(

response,stats,context){
var frag=context.frag;
this.decryptkey=frag.decryptdata.key=new Uint8Array(response.data);

frag.loader=undefined;
this.loaders[frag.type]=undefined;
this.hls.trigger(_events2.default.KEY_LOADED,{frag:frag});
}},{key:'loaderror',value:function loaderror(

response,context){
var frag=context.frag,
loader=frag.loader;
if(loader){
loader.abort();
}
this.loaders[context.type]=undefined;
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.KEY_LOAD_ERROR,fatal:false,frag:frag,response:response});
}},{key:'loadtimeout',value:function loadtimeout(

stats,context){
var frag=context.frag,
loader=frag.loader;
if(loader){
loader.abort();
}
this.loaders[context.type]=undefined;
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:false,frag:frag});
}}]);return KeyLoader;}(_eventHandler2.default);exports.default=


KeyLoader;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _urlToolkit=__webpack_require__(14);var _urlToolkit2=_interopRequireDefault(_urlToolkit);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _eventHandler=__webpack_require__(3);var _eventHandler2=_interopRequireDefault(_eventHandler);
var _errors=__webpack_require__(2);
var _attrList=__webpack_require__(47);var _attrList2=_interopRequireDefault(_attrList);
var _logger=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}


var MASTER_PLAYLIST_REGEX=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;
var MASTER_PLAYLIST_MEDIA_REGEX=/#EXT-X-MEDIA:(.*)/g;
var LEVEL_PLAYLIST_REGEX_FAST=/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*))?|(?!#)(\S.+)|#EXT-X-BYTERANGE: *(.+)|#EXT-X-PROGRAM-DATE-TIME:(.+)|#.*/g;
var LEVEL_PLAYLIST_REGEX_SLOW=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/;var

LevelKey=function(){

function LevelKey(){_classCallCheck(this,LevelKey);
this.method=null;
this.key=null;
this.iv=null;
this._uri=null;
}_createClass(LevelKey,[{key:'uri',get:function get()

{
if(!this._uri&&this.reluri){
this._uri=_urlToolkit2.default.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:true});
}
return this._uri;
}}]);return LevelKey;}();var



Fragment=function(){

function Fragment(){_classCallCheck(this,Fragment);
this._url=null;
this._byteRange=null;
this._decryptdata=null;
this.tagList=[];
}_createClass(Fragment,[{key:'createInitializationVector',value:function createInitializationVector(























































segmentNumber){
var uint8View=new Uint8Array(16);

for(var i=12;i<16;i++){
uint8View[i]=segmentNumber>>8*(15-i)&0xff;
}

return uint8View;
}},{key:'fragmentDecryptdataFromLevelkey',value:function fragmentDecryptdataFromLevelkey(







levelkey,segmentNumber){
var decryptdata=levelkey;

if(levelkey&&levelkey.method&&levelkey.uri&&!levelkey.iv){
decryptdata=new LevelKey();
decryptdata.method=levelkey.method;
decryptdata.baseuri=levelkey.baseuri;
decryptdata.reluri=levelkey.reluri;
decryptdata.iv=this.createInitializationVector(segmentNumber);
}

return decryptdata;
}},{key:'cloneObj',value:function cloneObj(

obj){
return JSON.parse(JSON.stringify(obj));
}},{key:'url',get:function get(){if(!this._url&&this.relurl){this._url=_urlToolkit2.default.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:true});}return this._url;},set:function set(value){this._url=value;}},{key:'programDateTime',get:function get(){if(!this._programDateTime&&this.rawProgramDateTime){this._programDateTime=new Date(Date.parse(this.rawProgramDateTime));}return this._programDateTime;}},{key:'byteRange',get:function get(){if(!this._byteRange){var byteRange=this._byteRange=[];if(this.rawByteRange){var params=this.rawByteRange.split('@',2);if(params.length===1){var lastByteRangeEndOffset=this.lastByteRangeEndOffset;byteRange[0]=lastByteRangeEndOffset?lastByteRangeEndOffset:0;}else{byteRange[0]=parseInt(params[1]);}byteRange[1]=parseInt(params[0])+byteRange[0];}}return this._byteRange;}},{key:'byteRangeStartOffset',get:function get(){return this.byteRange[0];}},{key:'byteRangeEndOffset',get:function get(){return this.byteRange[1];}},{key:'decryptdata',get:function get(){if(!this._decryptdata){this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn);}return this._decryptdata;}}]);return Fragment;}();var


PlaylistLoader=function(_EventHandler){_inherits(PlaylistLoader,_EventHandler);

function PlaylistLoader(hls){_classCallCheck(this,PlaylistLoader);var _this=_possibleConstructorReturn(this,(PlaylistLoader.__proto__||Object.getPrototypeOf(PlaylistLoader)).call(this,
hls,
_events2.default.MANIFEST_LOADING,
_events2.default.LEVEL_LOADING,
_events2.default.AUDIO_TRACK_LOADING,
_events2.default.SUBTITLE_TRACK_LOADING));
_this.loaders={};return _this;
}_createClass(PlaylistLoader,[{key:'destroy',value:function destroy()

{
for(var loaderName in this.loaders){
var loader=this.loaders[loaderName];
if(loader){
loader.destroy();
}
}
this.loaders={};
_eventHandler2.default.prototype.destroy.call(this);
}},{key:'onManifestLoading',value:function onManifestLoading(

data){
this.load(data.url,{type:'manifest'});
}},{key:'onLevelLoading',value:function onLevelLoading(

data){
this.load(data.url,{type:'level',level:data.level,id:data.id});
}},{key:'onAudioTrackLoading',value:function onAudioTrackLoading(

data){
this.load(data.url,{type:'audioTrack',id:data.id});
}},{key:'onSubtitleTrackLoading',value:function onSubtitleTrackLoading(

data){
this.load(data.url,{type:'subtitleTrack',id:data.id});
}},{key:'load',value:function load(

url,context){
var loader=this.loaders[context.type];
if(loader){
var loaderContext=loader.context;
if(loaderContext&&loaderContext.url===url){
_logger.logger.trace('playlist request ongoing');
return;
}else{
_logger.logger.warn('abort previous loader for type:'+context.type);
loader.abort();
}
}
var config=this.hls.config,
retry=void 0,
timeout=void 0,
retryDelay=void 0,
maxRetryDelay=void 0;
if(context.type==='manifest'){
retry=config.manifestLoadingMaxRetry;
timeout=config.manifestLoadingTimeOut;
retryDelay=config.manifestLoadingRetryDelay;
maxRetryDelay=config.manifestLoadingMaxRetryTimeout;
}else{
retry=config.levelLoadingMaxRetry;
timeout=config.levelLoadingTimeOut;
retryDelay=config.levelLoadingRetryDelay;
maxRetryDelay=config.levelLoadingMaxRetryTimeout;
_logger.logger.log('loading playlist for '+context.type+' '+(context.level||context.id));
}
loader=this.loaders[context.type]=context.loader=typeof config.pLoader!=='undefined'?new config.pLoader(config):new config.loader(config);
context.url=url;
context.responseType='';

var loaderConfig=void 0,loaderCallbacks=void 0;
loaderConfig={timeout:timeout,maxRetry:retry,retryDelay:retryDelay,maxRetryDelay:maxRetryDelay};
loaderCallbacks={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};
loader.load(context,loaderConfig,loaderCallbacks);
}},{key:'resolve',value:function resolve(

url,baseUrl){
return _urlToolkit2.default.buildAbsoluteURL(baseUrl,url,{alwaysNormalize:true});
}},{key:'parseMasterPlaylist',value:function parseMasterPlaylist(

string,baseurl){
var levels=[],result=void 0;
MASTER_PLAYLIST_REGEX.lastIndex=0;
while((result=MASTER_PLAYLIST_REGEX.exec(string))!=null){
var level={};

var attrs=level.attrs=new _attrList2.default(result[1]);
level.url=this.resolve(result[2],baseurl);

var resolution=attrs.decimalResolution('RESOLUTION');
if(resolution){
level.width=resolution.width;
level.height=resolution.height;
}
level.bitrate=attrs.decimalInteger('AVERAGE-BANDWIDTH')||attrs.decimalInteger('BANDWIDTH');
level.name=attrs.NAME;

var codecs=attrs.CODECS;
if(codecs){
codecs=codecs.split(/[ ,]+/);
for(var i=0;i<codecs.length;i++){
var codec=codecs[i];
if(codec.indexOf('avc1')!==-1){
level.videoCodec=this.avc1toavcoti(codec);
}else{
level.audioCodec=codec;
}
}
}

levels.push(level);
}
return levels;
}},{key:'parseMasterPlaylistMedia',value:function parseMasterPlaylistMedia(

string,baseurl,type){
var result=void 0,medias=[],id=0;
MASTER_PLAYLIST_MEDIA_REGEX.lastIndex=0;
while((result=MASTER_PLAYLIST_MEDIA_REGEX.exec(string))!=null){
var media={};
var attrs=new _attrList2.default(result[1]);
if(attrs.TYPE===type){
media.groupId=attrs['GROUP-ID'];
media.name=attrs.NAME;
media.type=type;
media.default=attrs.DEFAULT==='YES';
media.autoselect=attrs.AUTOSELECT==='YES';
media.forced=attrs.FORCED==='YES';
if(attrs.URI){
media.url=this.resolve(attrs.URI,baseurl);
}
media.lang=attrs.LANGUAGE;
if(!media.name){
media.name=media.lang;
}
media.id=id++;
medias.push(media);
}
}
return medias;
}},{key:'avc1toavcoti',value:function avc1toavcoti(

codec){
var result,avcdata=codec.split('.');
if(avcdata.length>2){
result=avcdata.shift()+'.';
result+=parseInt(avcdata.shift()).toString(16);
result+=('000'+parseInt(avcdata.shift()).toString(16)).substr(-4);
}else{
result=codec;
}
return result;
}},{key:'parseLevelPlaylist',value:function parseLevelPlaylist(

string,baseurl,id,type){
var currentSN=0,
totalduration=0,
level={type:null,version:null,url:baseurl,fragments:[],live:true,startSN:0},
levelkey=new LevelKey(),
cc=0,
prevFrag=null,
frag=new Fragment(),
result,
i;

LEVEL_PLAYLIST_REGEX_FAST.lastIndex=0;

while((result=LEVEL_PLAYLIST_REGEX_FAST.exec(string))!==null){
var duration=result[1];
if(duration){
frag.duration=parseFloat(duration);

var title=(' '+result[2]).slice(1);
frag.title=title?title:null;
frag.tagList.push(title?['INF',duration,title]:['INF',duration]);
}else if(result[3]){
if(!isNaN(frag.duration)){
var sn=currentSN++;
frag.type=type;
frag.start=totalduration;
frag.levelkey=levelkey;
frag.sn=sn;
frag.level=id;
frag.cc=cc;
frag.baseurl=baseurl;

frag.relurl=(' '+result[3]).slice(1);

level.fragments.push(frag);
prevFrag=frag;
totalduration+=frag.duration;

frag=new Fragment();
}
}else if(result[4]){
frag.rawByteRange=(' '+result[4]).slice(1);
if(prevFrag){
var lastByteRangeEndOffset=prevFrag.byteRangeEndOffset;
if(lastByteRangeEndOffset){
frag.lastByteRangeEndOffset=lastByteRangeEndOffset;
}
}
}else if(result[5]){

frag.rawProgramDateTime=(' '+result[5]).slice(1);
frag.tagList.push(['PROGRAM-DATE-TIME',frag.rawProgramDateTime]);
}else{
result=result[0].match(LEVEL_PLAYLIST_REGEX_SLOW);
for(i=1;i<result.length;i++){
if(result[i]!==undefined){
break;
}
}


var value1=(' '+result[i+1]).slice(1);
var value2=(' '+result[i+2]).slice(1);

switch(result[i]){
case'#':
frag.tagList.push(value2?[value1,value2]:[value1]);
break;
case'PLAYLIST-TYPE':
level.type=value1.toUpperCase();
break;
case'MEDIA-SEQUENCE':
currentSN=level.startSN=parseInt(value1);
break;
case'TARGETDURATION':
level.targetduration=parseFloat(value1);
break;
case'VERSION':
level.version=parseInt(value1);
break;
case'EXTM3U':
break;
case'ENDLIST':
level.live=false;
break;
case'DIS':
cc++;
frag.tagList.push(['DIS']);
break;
case'DISCONTINUITY-SEQ':
cc=parseInt(value1);
break;
case'KEY':

var decryptparams=value1;
var keyAttrs=new _attrList2.default(decryptparams);
var decryptmethod=keyAttrs.enumeratedString('METHOD'),
decrypturi=keyAttrs.URI,
decryptiv=keyAttrs.hexadecimalInteger('IV');
if(decryptmethod){
levelkey=new LevelKey();
if(decrypturi&&['AES-128','SAMPLE-AES'].indexOf(decryptmethod)>=0){
levelkey.method=decryptmethod;

levelkey.baseuri=baseurl;
levelkey.reluri=decrypturi;
levelkey.key=null;

levelkey.iv=decryptiv;
}
}
break;
case'START':
var startParams=value1;
var startAttrs=new _attrList2.default(startParams);
var startTimeOffset=startAttrs.decimalFloatingPoint('TIME-OFFSET');

if(!isNaN(startTimeOffset)){
level.startTimeOffset=startTimeOffset;
}
break;
case'MAP':
var mapAttrs=new _attrList2.default(value1);
frag.relurl=mapAttrs.URI;
frag.rawByteRange=mapAttrs.BYTERANGE;
frag.baseurl=baseurl;
frag.level=id;
frag.type=type;
frag.sn='initSegment';
level.initSegment=frag;
frag=new Fragment();
break;
default:
_logger.logger.warn('line parsed but not handled: '+result);
break;}

}
}
frag=prevFrag;

if(frag&&!frag.relurl){
level.fragments.pop();
totalduration-=frag.duration;
}
level.totalduration=totalduration;
level.averagetargetduration=totalduration/level.fragments.length;
level.endSN=currentSN-1;
return level;
}},{key:'loadsuccess',value:function loadsuccess(

response,stats,context){
var string=response.data,
url=response.url,
type=context.type,
id=context.id,
level=context.level,
hls=this.hls;

this.loaders[type]=undefined;


if(url===undefined||url.indexOf('data:')===0){

url=context.url;
}
stats.tload=performance.now();

if(string.indexOf('#EXTM3U')===0){
if(string.indexOf('#EXTINF:')>0){
var isLevel=type!=='audioTrack'&&type!=='subtitleTrack',
levelId=!isNaN(level)?level:!isNaN(id)?id:0,
levelDetails=this.parseLevelPlaylist(string,url,levelId,type==='audioTrack'?'audio':type==='subtitleTrack'?'subtitle':'main');
levelDetails.tload=stats.tload;
if(type==='manifest'){

hls.trigger(_events2.default.MANIFEST_LOADED,{levels:[{url:url,details:levelDetails}],audioTracks:[],url:url,stats:stats});
}
stats.tparsed=performance.now();
if(levelDetails.targetduration){
if(isLevel){
hls.trigger(_events2.default.LEVEL_LOADED,{details:levelDetails,level:level||0,id:id||0,stats:stats});
}else{
if(type==='audioTrack'){
hls.trigger(_events2.default.AUDIO_TRACK_LOADED,{details:levelDetails,id:id,stats:stats});
}else
if(type==='subtitleTrack'){
hls.trigger(_events2.default.SUBTITLE_TRACK_LOADED,{details:levelDetails,id:id,stats:stats});
}
}
}else{
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:true,url:url,reason:'invalid targetduration'});
}
}else{
var levels=this.parseMasterPlaylist(string,url);

if(levels.length){
var audioTracks=this.parseMasterPlaylistMedia(string,url,'AUDIO');
var subtitles=this.parseMasterPlaylistMedia(string,url,'SUBTITLES');
if(audioTracks.length){

var embeddedAudioFound=false;
audioTracks.forEach(function(audioTrack){
if(!audioTrack.url){
embeddedAudioFound=true;
}
});


if(embeddedAudioFound===false&&levels[0].audioCodec&&!levels[0].attrs.AUDIO){
_logger.logger.log('audio codec signaled in quality level, but no embedded audio track signaled, create one');
audioTracks.unshift({type:'main',name:'main'});
}
}
hls.trigger(_events2.default.MANIFEST_LOADED,{levels:levels,audioTracks:audioTracks,subtitles:subtitles,url:url,stats:stats});
}else{
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:true,url:url,reason:'no level found in manifest'});
}
}
}else{
hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:_errors.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:true,url:url,reason:'no EXTM3U delimiter'});
}
}},{key:'loaderror',value:function loaderror(

response,context){
var details,fatal,loader=context.loader;
switch(context.type){
case'manifest':
details=_errors.ErrorDetails.MANIFEST_LOAD_ERROR;
fatal=true;
break;
case'level':
details=_errors.ErrorDetails.LEVEL_LOAD_ERROR;
fatal=false;
break;
case'audioTrack':
details=_errors.ErrorDetails.AUDIO_TRACK_LOAD_ERROR;
fatal=false;
break;}

if(loader){
loader.abort();
this.loaders[context.type]=undefined;
}
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:details,fatal:fatal,url:loader.url,loader:loader,response:response,context:context});
}},{key:'loadtimeout',value:function loadtimeout(

stats,context){
var details,fatal,loader=context.loader;
switch(context.type){
case'manifest':
details=_errors.ErrorDetails.MANIFEST_LOAD_TIMEOUT;
fatal=true;
break;
case'level':
details=_errors.ErrorDetails.LEVEL_LOAD_TIMEOUT;
fatal=false;
break;
case'audioTrack':
details=_errors.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT;
fatal=false;
break;}

if(loader){
loader.abort();
this.loaders[context.type]=undefined;
}
this.hls.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.NETWORK_ERROR,details:details,fatal:fatal,url:loader.url,loader:loader,context:context});
}}]);return PlaylistLoader;}(_eventHandler2.default);exports.default=


PlaylistLoader;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var UINT32_MAX=Math.pow(2,32)-1;var

MP4=function(){function MP4(){_classCallCheck(this,MP4);}_createClass(MP4,null,[{key:'init',value:function init()
{
MP4.types={
avc1:[],
avcC:[],
btrt:[],
dinf:[],
dref:[],
esds:[],
ftyp:[],
hdlr:[],
mdat:[],
mdhd:[],
mdia:[],
mfhd:[],
minf:[],
moof:[],
moov:[],
mp4a:[],
'.mp3':[],
mvex:[],
mvhd:[],
pasp:[],
sdtp:[],
stbl:[],
stco:[],
stsc:[],
stsd:[],
stsz:[],
stts:[],
tfdt:[],
tfhd:[],
traf:[],
trak:[],
trun:[],
trex:[],
tkhd:[],
vmhd:[],
smhd:[]};


var i;
for(i in MP4.types){
if(MP4.types.hasOwnProperty(i)){
MP4.types[i]=[
i.charCodeAt(0),
i.charCodeAt(1),
i.charCodeAt(2),
i.charCodeAt(3)];

}
}

var videoHdlr=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x76,0x69,0x64,0x65,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x56,0x69,0x64,0x65,
0x6f,0x48,0x61,0x6e,
0x64,0x6c,0x65,0x72,0x00]);


var audioHdlr=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x73,0x6f,0x75,0x6e,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x53,0x6f,0x75,0x6e,
0x64,0x48,0x61,0x6e,
0x64,0x6c,0x65,0x72,0x00]);


MP4.HDLR_TYPES={
'video':videoHdlr,
'audio':audioHdlr};


var dref=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,0x00,0x01,
0x00,0x00,0x00,0x0c,
0x75,0x72,0x6c,0x20,
0x00,
0x00,0x00,0x01]);


var stco=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00]);


MP4.STTS=MP4.STSC=MP4.STCO=stco;

MP4.STSZ=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00]);

MP4.VMHD=new Uint8Array([
0x00,
0x00,0x00,0x01,
0x00,0x00,
0x00,0x00,
0x00,0x00,
0x00,0x00]);

MP4.SMHD=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,
0x00,0x00]);


MP4.STSD=new Uint8Array([
0x00,
0x00,0x00,0x00,
0x00,0x00,0x00,0x01]);

var majorBrand=new Uint8Array([105,115,111,109]);
var avc1Brand=new Uint8Array([97,118,99,49]);
var minorVersion=new Uint8Array([0,0,0,1]);

MP4.FTYP=MP4.box(MP4.types.ftyp,majorBrand,minorVersion,majorBrand,avc1Brand);
MP4.DINF=MP4.box(MP4.types.dinf,MP4.box(MP4.types.dref,dref));
}},{key:'box',value:function box(

type){
var
payload=Array.prototype.slice.call(arguments,1),
size=8,
i=payload.length,
len=i,
result;

while(i--){
size+=payload[i].byteLength;
}
result=new Uint8Array(size);
result[0]=size>>24&0xff;
result[1]=size>>16&0xff;
result[2]=size>>8&0xff;
result[3]=size&0xff;
result.set(type,4);

for(i=0,size=8;i<len;i++){

result.set(payload[i],size);
size+=payload[i].byteLength;
}
return result;
}},{key:'hdlr',value:function hdlr(

type){
return MP4.box(MP4.types.hdlr,MP4.HDLR_TYPES[type]);
}},{key:'mdat',value:function mdat(

data){
return MP4.box(MP4.types.mdat,data);
}},{key:'mdhd',value:function mdhd(

timescale,duration){
duration*=timescale;
var upperWordDuration=Math.floor(duration/(UINT32_MAX+1));
var lowerWordDuration=Math.floor(duration%(UINT32_MAX+1));
return MP4.box(MP4.types.mdhd,new Uint8Array([
0x01,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x02,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x03,
timescale>>24&0xFF,
timescale>>16&0xFF,
timescale>>8&0xFF,
timescale&0xFF,
upperWordDuration>>24,
upperWordDuration>>16&0xFF,
upperWordDuration>>8&0xFF,
upperWordDuration&0xFF,
lowerWordDuration>>24,
lowerWordDuration>>16&0xFF,
lowerWordDuration>>8&0xFF,
lowerWordDuration&0xFF,
0x55,0xc4,
0x00,0x00]));

}},{key:'mdia',value:function mdia(

track){
return MP4.box(MP4.types.mdia,MP4.mdhd(track.timescale,track.duration),MP4.hdlr(track.type),MP4.minf(track));
}},{key:'mfhd',value:function mfhd(

sequenceNumber){
return MP4.box(MP4.types.mfhd,new Uint8Array([
0x00,
0x00,0x00,0x00,
sequenceNumber>>24,
sequenceNumber>>16&0xFF,
sequenceNumber>>8&0xFF,
sequenceNumber&0xFF]));

}},{key:'minf',value:function minf(

track){
if(track.type==='audio'){
return MP4.box(MP4.types.minf,MP4.box(MP4.types.smhd,MP4.SMHD),MP4.DINF,MP4.stbl(track));
}else{
return MP4.box(MP4.types.minf,MP4.box(MP4.types.vmhd,MP4.VMHD),MP4.DINF,MP4.stbl(track));
}
}},{key:'moof',value:function moof(

sn,baseMediaDecodeTime,track){
return MP4.box(MP4.types.moof,MP4.mfhd(sn),MP4.traf(track,baseMediaDecodeTime));
}},{key:'moov',value:function moov(



tracks){
var
i=tracks.length,
boxes=[];

while(i--){
boxes[i]=MP4.trak(tracks[i]);
}

return MP4.box.apply(null,[MP4.types.moov,MP4.mvhd(tracks[0].timescale,tracks[0].duration)].concat(boxes).concat(MP4.mvex(tracks)));
}},{key:'mvex',value:function mvex(

tracks){
var
i=tracks.length,
boxes=[];

while(i--){
boxes[i]=MP4.trex(tracks[i]);
}
return MP4.box.apply(null,[MP4.types.mvex].concat(boxes));
}},{key:'mvhd',value:function mvhd(

timescale,duration){
duration*=timescale;
var upperWordDuration=Math.floor(duration/(UINT32_MAX+1));
var lowerWordDuration=Math.floor(duration%(UINT32_MAX+1));
var
bytes=new Uint8Array([
0x01,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x02,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x03,
timescale>>24&0xFF,
timescale>>16&0xFF,
timescale>>8&0xFF,
timescale&0xFF,
upperWordDuration>>24,
upperWordDuration>>16&0xFF,
upperWordDuration>>8&0xFF,
upperWordDuration&0xFF,
lowerWordDuration>>24,
lowerWordDuration>>16&0xFF,
lowerWordDuration>>8&0xFF,
lowerWordDuration&0xFF,
0x00,0x01,0x00,0x00,
0x01,0x00,
0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x01,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x01,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x40,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0xff,0xff,0xff,0xff]);

return MP4.box(MP4.types.mvhd,bytes);
}},{key:'sdtp',value:function sdtp(

track){
var
samples=track.samples||[],
bytes=new Uint8Array(4+samples.length),
flags,
i;


for(i=0;i<samples.length;i++){
flags=samples[i].flags;
bytes[i+4]=flags.dependsOn<<4|
flags.isDependedOn<<2|
flags.hasRedundancy;
}

return MP4.box(MP4.types.sdtp,bytes);
}},{key:'stbl',value:function stbl(

track){
return MP4.box(MP4.types.stbl,MP4.stsd(track),MP4.box(MP4.types.stts,MP4.STTS),MP4.box(MP4.types.stsc,MP4.STSC),MP4.box(MP4.types.stsz,MP4.STSZ),MP4.box(MP4.types.stco,MP4.STCO));
}},{key:'avc1',value:function avc1(

track){
var sps=[],pps=[],i,data,len;


for(i=0;i<track.sps.length;i++){
data=track.sps[i];
len=data.byteLength;
sps.push(len>>>8&0xFF);
sps.push(len&0xFF);
sps=sps.concat(Array.prototype.slice.call(data));
}


for(i=0;i<track.pps.length;i++){
data=track.pps[i];
len=data.byteLength;
pps.push(len>>>8&0xFF);
pps.push(len&0xFF);
pps=pps.concat(Array.prototype.slice.call(data));
}

var avcc=MP4.box(MP4.types.avcC,new Uint8Array([
0x01,
sps[3],
sps[4],
sps[5],
0xfc|3,
0xE0|track.sps.length].
concat(sps).concat([
track.pps.length]).
concat(pps))),
width=track.width,
height=track.height,
hSpacing=track.pixelRatio[0],
vSpacing=track.pixelRatio[1];

return MP4.box(MP4.types.avc1,new Uint8Array([
0x00,0x00,0x00,
0x00,0x00,0x00,
0x00,0x01,
0x00,0x00,
0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
width>>8&0xFF,
width&0xff,
height>>8&0xFF,
height&0xff,
0x00,0x48,0x00,0x00,
0x00,0x48,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x01,
0x12,
0x64,0x61,0x69,0x6C,
0x79,0x6D,0x6F,0x74,
0x69,0x6F,0x6E,0x2F,
0x68,0x6C,0x73,0x2E,
0x6A,0x73,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,
0x00,0x18,
0x11,0x11]),
avcc,
MP4.box(MP4.types.btrt,new Uint8Array([
0x00,0x1c,0x9c,0x80,
0x00,0x2d,0xc6,0xc0,
0x00,0x2d,0xc6,0xc0])),
MP4.box(MP4.types.pasp,new Uint8Array([
hSpacing>>24,
hSpacing>>16&0xFF,
hSpacing>>8&0xFF,
hSpacing&0xFF,
vSpacing>>24,
vSpacing>>16&0xFF,
vSpacing>>8&0xFF,
vSpacing&0xFF])));

}},{key:'esds',value:function esds(

track){
var configlen=track.config.length;
return new Uint8Array([
0x00,
0x00,0x00,0x00,

0x03,
0x17+configlen,
0x00,0x01,
0x00,

0x04,
0x0f+configlen,
0x40,
0x15,
0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,

0x05].
concat([configlen]).concat(track.config).concat([0x06,0x01,0x02]));
}},{key:'mp4a',value:function mp4a(

track){
var samplerate=track.samplerate;
return MP4.box(MP4.types.mp4a,new Uint8Array([
0x00,0x00,0x00,
0x00,0x00,0x00,
0x00,0x01,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,track.channelCount,
0x00,0x10,
0x00,0x00,0x00,0x00,
samplerate>>8&0xFF,
samplerate&0xff,
0x00,0x00]),
MP4.box(MP4.types.esds,MP4.esds(track)));
}},{key:'mp3',value:function mp3(

track){
var samplerate=track.samplerate;
return MP4.box(MP4.types['.mp3'],new Uint8Array([
0x00,0x00,0x00,
0x00,0x00,0x00,
0x00,0x01,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,track.channelCount,
0x00,0x10,
0x00,0x00,0x00,0x00,
samplerate>>8&0xFF,
samplerate&0xff,
0x00,0x00]));
}},{key:'stsd',value:function stsd(

track){
if(track.type==='audio'){
if(!track.isAAC&&track.codec==='mp3'){
return MP4.box(MP4.types.stsd,MP4.STSD,MP4.mp3(track));
}
return MP4.box(MP4.types.stsd,MP4.STSD,MP4.mp4a(track));
}else{
return MP4.box(MP4.types.stsd,MP4.STSD,MP4.avc1(track));
}
}},{key:'tkhd',value:function tkhd(

track){
var id=track.id,
duration=track.duration*track.timescale,
width=track.width,
height=track.height,
upperWordDuration=Math.floor(duration/(UINT32_MAX+1)),
lowerWordDuration=Math.floor(duration%(UINT32_MAX+1));
return MP4.box(MP4.types.tkhd,new Uint8Array([
0x01,
0x00,0x00,0x07,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x02,
0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x03,
id>>24&0xFF,
id>>16&0xFF,
id>>8&0xFF,
id&0xFF,
0x00,0x00,0x00,0x00,
upperWordDuration>>24,
upperWordDuration>>16&0xFF,
upperWordDuration>>8&0xFF,
upperWordDuration&0xFF,
lowerWordDuration>>24,
lowerWordDuration>>16&0xFF,
lowerWordDuration>>8&0xFF,
lowerWordDuration&0xFF,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,
0x00,0x00,
0x00,0x00,
0x00,0x00,
0x00,0x01,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x01,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x40,0x00,0x00,0x00,
width>>8&0xFF,
width&0xFF,
0x00,0x00,
height>>8&0xFF,
height&0xFF,
0x00,0x00]));

}},{key:'traf',value:function traf(

track,baseMediaDecodeTime){
var sampleDependencyTable=MP4.sdtp(track),
id=track.id,
upperWordBaseMediaDecodeTime=Math.floor(baseMediaDecodeTime/(UINT32_MAX+1)),
lowerWordBaseMediaDecodeTime=Math.floor(baseMediaDecodeTime%(UINT32_MAX+1));
return MP4.box(MP4.types.traf,
MP4.box(MP4.types.tfhd,new Uint8Array([
0x00,
0x00,0x00,0x00,
id>>24,
id>>16&0XFF,
id>>8&0XFF,
id&0xFF])),

MP4.box(MP4.types.tfdt,new Uint8Array([
0x01,
0x00,0x00,0x00,
upperWordBaseMediaDecodeTime>>24,
upperWordBaseMediaDecodeTime>>16&0XFF,
upperWordBaseMediaDecodeTime>>8&0XFF,
upperWordBaseMediaDecodeTime&0xFF,
lowerWordBaseMediaDecodeTime>>24,
lowerWordBaseMediaDecodeTime>>16&0XFF,
lowerWordBaseMediaDecodeTime>>8&0XFF,
lowerWordBaseMediaDecodeTime&0xFF])),

MP4.trun(track,
sampleDependencyTable.length+
16+
20+
8+
16+
8+
8),
sampleDependencyTable);
}},{key:'trak',value:function trak(






track){
track.duration=track.duration||0xffffffff;
return MP4.box(MP4.types.trak,MP4.tkhd(track),MP4.mdia(track));
}},{key:'trex',value:function trex(

track){
var id=track.id;
return MP4.box(MP4.types.trex,new Uint8Array([
0x00,
0x00,0x00,0x00,
id>>24,
id>>16&0XFF,
id>>8&0XFF,
id&0xFF,
0x00,0x00,0x00,0x01,
0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,
0x00,0x01,0x00,0x01]));

}},{key:'trun',value:function trun(

track,offset){
var samples=track.samples||[],
len=samples.length,
arraylen=12+16*len,
array=new Uint8Array(arraylen),
i,sample,duration,size,flags,cts;
offset+=8+arraylen;
array.set([
0x00,
0x00,0x0f,0x01,
len>>>24&0xFF,
len>>>16&0xFF,
len>>>8&0xFF,
len&0xFF,
offset>>>24&0xFF,
offset>>>16&0xFF,
offset>>>8&0xFF,
offset&0xFF],
0);
for(i=0;i<len;i++){
sample=samples[i];
duration=sample.duration;
size=sample.size;
flags=sample.flags;
cts=sample.cts;
array.set([
duration>>>24&0xFF,
duration>>>16&0xFF,
duration>>>8&0xFF,
duration&0xFF,
size>>>24&0xFF,
size>>>16&0xFF,
size>>>8&0xFF,
size&0xFF,
flags.isLeading<<2|flags.dependsOn,
flags.isDependedOn<<6|
flags.hasRedundancy<<4|
flags.paddingValue<<1|
flags.isNonSync,
flags.degradPrio&0xF0<<8,
flags.degradPrio&0x0F,
cts>>>24&0xFF,
cts>>>16&0xFF,
cts>>>8&0xFF,
cts&0xFF],
12+16*i);
}
return MP4.box(MP4.types.trun,array);
}},{key:'initSegment',value:function initSegment(

tracks){
if(!MP4.types){
MP4.init();
}
var movie=MP4.moov(tracks),result;
result=new Uint8Array(MP4.FTYP.byteLength+movie.byteLength);
result.set(MP4.FTYP);
result.set(movie,MP4.FTYP.byteLength);
return result;
}}]);return MP4;}();exports.default=


MP4;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();




var _aac=__webpack_require__(39);var _aac2=_interopRequireDefault(_aac);
var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);
var _logger=__webpack_require__(0);
var _mp4Generator=__webpack_require__(44);var _mp4Generator2=_interopRequireDefault(_mp4Generator);
var _errors=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

MP4Remuxer=function(){
function MP4Remuxer(observer,config,typeSupported,vendor){_classCallCheck(this,MP4Remuxer);
this.observer=observer;
this.config=config;
this.typeSupported=typeSupported;
var userAgent=navigator.userAgent;
this.isSafari=vendor&&vendor.indexOf('Apple')>-1&&userAgent&&!userAgent.match('CriOS');
this.ISGenerated=false;
}_createClass(MP4Remuxer,[{key:'destroy',value:function destroy()

{
}},{key:'resetTimeStamp',value:function resetTimeStamp(

defaultTimeStamp){
this._initPTS=this._initDTS=defaultTimeStamp;
}},{key:'resetInitSegment',value:function resetInitSegment()

{
this.ISGenerated=false;
}},{key:'remux',value:function remux(

audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset){

if(!this.ISGenerated){
this.generateIS(audioTrack,videoTrack,timeOffset);
}

if(this.ISGenerated){



if(audioTrack.samples.length){

if(!audioTrack.timescale){
_logger.logger.warn('regenerate InitSegment as audio detected');
this.generateIS(audioTrack,videoTrack,timeOffset);
}
var audioData=this.remuxAudio(audioTrack,timeOffset,contiguous,accurateTimeOffset);

if(videoTrack.samples.length){
var audioTrackLength=void 0;
if(audioData){
audioTrackLength=audioData.endPTS-audioData.startPTS;
}

if(!videoTrack.timescale){
_logger.logger.warn('regenerate InitSegment as video detected');
this.generateIS(audioTrack,videoTrack,timeOffset);
}
this.remuxVideo(videoTrack,timeOffset,contiguous,audioTrackLength);
}
}else{
var videoData=void 0;

if(videoTrack.samples.length){
videoData=this.remuxVideo(videoTrack,timeOffset,contiguous);
}
if(videoData&&audioTrack.codec){
this.remuxEmptyAudio(audioTrack,timeOffset,contiguous,videoData);
}
}
}

if(id3Track.samples.length){
this.remuxID3(id3Track,timeOffset);
}

if(textTrack.samples.length){
this.remuxText(textTrack,timeOffset);
}

this.observer.trigger(_events2.default.FRAG_PARSED);
}},{key:'generateIS',value:function generateIS(

audioTrack,videoTrack,timeOffset){
var observer=this.observer,
audioSamples=audioTrack.samples,
videoSamples=videoTrack.samples,
typeSupported=this.typeSupported,
container='audio/mp4',
tracks={},
data={tracks:tracks},
computePTSDTS=this._initPTS===undefined,
initPTS,initDTS;

if(computePTSDTS){
initPTS=initDTS=Infinity;
}
if(audioTrack.config&&audioSamples.length){




audioTrack.timescale=audioTrack.samplerate;
_logger.logger.log('audio sampling rate : '+audioTrack.samplerate);
if(!audioTrack.isAAC){
if(typeSupported.mpeg){
container='audio/mpeg';
audioTrack.codec='';
}else if(typeSupported.mp3){
audioTrack.codec='mp3';
}
}
tracks.audio={
container:container,
codec:audioTrack.codec,
initSegment:!audioTrack.isAAC&&typeSupported.mpeg?new Uint8Array():_mp4Generator2.default.initSegment([audioTrack]),
metadata:{
channelCount:audioTrack.channelCount}};


if(computePTSDTS){

initPTS=initDTS=audioSamples[0].pts-audioTrack.inputTimeScale*timeOffset;
}
}

if(videoTrack.sps&&videoTrack.pps&&videoSamples.length){


var inputTimeScale=videoTrack.inputTimeScale;
videoTrack.timescale=inputTimeScale;
tracks.video={
container:'video/mp4',
codec:videoTrack.codec,
initSegment:_mp4Generator2.default.initSegment([videoTrack]),
metadata:{
width:videoTrack.width,
height:videoTrack.height}};


if(computePTSDTS){
initPTS=Math.min(initPTS,videoSamples[0].pts-inputTimeScale*timeOffset);
initDTS=Math.min(initDTS,videoSamples[0].dts-inputTimeScale*timeOffset);
this.observer.trigger(_events2.default.INIT_PTS_FOUND,{initPTS:initPTS});
}
}

if(Object.keys(tracks).length){
observer.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT,data);
this.ISGenerated=true;
if(computePTSDTS){
this._initPTS=initPTS;
this._initDTS=initDTS;
}
}else{
observer.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MEDIA_ERROR,details:_errors.ErrorDetails.FRAG_PARSING_ERROR,fatal:false,reason:'no audio/video samples found'});
}
}},{key:'remuxVideo',value:function remuxVideo(

track,timeOffset,contiguous,audioTrackLength){
var offset=8,
timeScale=track.timescale,
mp4SampleDuration,
mdat,moof,
firstPTS,firstDTS,
nextDTS,
lastPTS,lastDTS,
inputSamples=track.samples,
outputSamples=[],
nbSamples=inputSamples.length,
ptsNormalize=this._PTSNormalize,
initDTS=this._initDTS;















inputSamples.sort(function(a,b){
var deltadts=a.dts-b.dts;
var deltapts=a.pts-b.pts;
return deltadts?deltadts:deltapts?deltapts:a.id-b.id;
});


var PTSDTSshift=inputSamples.reduce(function(prev,curr){return Math.max(Math.min(prev,curr.pts-curr.dts),-18000);},0);
if(PTSDTSshift<0){
_logger.logger.warn('PTS < DTS detected in video samples, shifting DTS by '+Math.round(PTSDTSshift/90)+' ms to overcome this issue');
for(var i=0;i<inputSamples.length;i++){
inputSamples[i].dts+=PTSDTSshift;
}
}



var nextAvcDts=void 0;

if(contiguous){

nextAvcDts=this.nextAvcDts;
}else{

nextAvcDts=timeOffset*timeScale;
}


var sample=inputSamples[0];
firstDTS=Math.max(ptsNormalize(sample.dts-initDTS,nextAvcDts),0);
firstPTS=Math.max(ptsNormalize(sample.pts-initDTS,nextAvcDts),0);


var delta=Math.round((firstDTS-nextAvcDts)/90);

if(contiguous){
if(delta){
if(delta>1){
_logger.logger.log('AVC:'+delta+' ms hole between fragments detected,filling it');
}else if(delta<-1){
_logger.logger.log('AVC:'+-delta+' ms overlapping between fragments detected');
}

firstDTS=nextAvcDts;
inputSamples[0].dts=firstDTS+initDTS;

firstPTS=Math.max(firstPTS-delta,nextAvcDts);
inputSamples[0].pts=firstPTS+initDTS;
_logger.logger.log('Video/PTS/DTS adjusted: '+Math.round(firstPTS/90)+'/'+Math.round(firstDTS/90)+',delta:'+delta+' ms');
}
}
nextDTS=firstDTS;


sample=inputSamples[inputSamples.length-1];
lastDTS=Math.max(ptsNormalize(sample.dts-initDTS,nextAvcDts),0);
lastPTS=Math.max(ptsNormalize(sample.pts-initDTS,nextAvcDts),0);
lastPTS=Math.max(lastPTS,lastDTS);

var isSafari=this.isSafari;



if(isSafari){
mp4SampleDuration=Math.round((lastDTS-firstDTS)/(inputSamples.length-1));
}

var nbNalu=0,naluLen=0;
for(var _i=0;_i<nbSamples;_i++){

var _sample=inputSamples[_i],units=_sample.units,nbUnits=units.length,sampleLen=0;
for(var j=0;j<nbUnits;j++){
sampleLen+=units[j].data.length;
}
naluLen+=sampleLen;
nbNalu+=nbUnits;
_sample.length=sampleLen;


if(isSafari){

_sample.dts=firstDTS+_i*mp4SampleDuration;
}else{

_sample.dts=Math.max(ptsNormalize(_sample.dts-initDTS,nextAvcDts),firstDTS);
}


_sample.pts=Math.max(ptsNormalize(_sample.pts-initDTS,nextAvcDts),_sample.dts);
}



var mdatSize=naluLen+4*nbNalu+8;
try{
mdat=new Uint8Array(mdatSize);
}catch(err){
this.observer.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MUX_ERROR,details:_errors.ErrorDetails.REMUX_ALLOC_ERROR,fatal:false,bytes:mdatSize,reason:'fail allocating video mdat '+mdatSize});
return;
}
var view=new DataView(mdat.buffer);
view.setUint32(0,mdatSize);
mdat.set(_mp4Generator2.default.types.mdat,4);

for(var _i2=0;_i2<nbSamples;_i2++){
var avcSample=inputSamples[_i2],
avcSampleUnits=avcSample.units,
mp4SampleLength=0,
compositionTimeOffset=void 0;

for(var _j=0,_nbUnits=avcSampleUnits.length;_j<_nbUnits;_j++){
var unit=avcSampleUnits[_j],
unitData=unit.data,
unitDataLen=unit.data.byteLength;
view.setUint32(offset,unitDataLen);
offset+=4;
mdat.set(unitData,offset);
offset+=unitDataLen;
mp4SampleLength+=4+unitDataLen;
}

if(!isSafari){

if(_i2<nbSamples-1){
mp4SampleDuration=inputSamples[_i2+1].dts-avcSample.dts;
}else{
var config=this.config,
lastFrameDuration=avcSample.dts-inputSamples[_i2>0?_i2-1:_i2].dts;
if(config.stretchShortVideoTrack){





var maxBufferHole=config.maxBufferHole,
maxSeekHole=config.maxSeekHole,
gapTolerance=Math.floor(Math.min(maxBufferHole,maxSeekHole)*timeScale),
deltaToFrameEnd=(audioTrackLength?firstPTS+audioTrackLength*timeScale:this.nextAudioPts)-avcSample.pts;
if(deltaToFrameEnd>gapTolerance){


mp4SampleDuration=deltaToFrameEnd-lastFrameDuration;
if(mp4SampleDuration<0){
mp4SampleDuration=lastFrameDuration;
}
_logger.logger.log('It is approximately '+deltaToFrameEnd/90+' ms to the next segment; using duration '+mp4SampleDuration/90+' ms for the last video frame.');
}else{
mp4SampleDuration=lastFrameDuration;
}
}else{
mp4SampleDuration=lastFrameDuration;
}
}
compositionTimeOffset=Math.round(avcSample.pts-avcSample.dts);
}else{
compositionTimeOffset=Math.max(0,mp4SampleDuration*Math.round((avcSample.pts-avcSample.dts)/mp4SampleDuration));
}



outputSamples.push({
size:mp4SampleLength,

duration:mp4SampleDuration,
cts:compositionTimeOffset,
flags:{
isLeading:0,
isDependedOn:0,
hasRedundancy:0,
degradPrio:0,
dependsOn:avcSample.key?2:1,
isNonSync:avcSample.key?0:1}});


}

this.nextAvcDts=lastDTS+mp4SampleDuration;
var dropped=track.dropped;
track.len=0;
track.nbNalu=0;
track.dropped=0;
if(outputSamples.length&&navigator.userAgent.toLowerCase().indexOf('chrome')>-1){
var flags=outputSamples[0].flags;


flags.dependsOn=2;
flags.isNonSync=0;
}
track.samples=outputSamples;
moof=_mp4Generator2.default.moof(track.sequenceNumber++,firstDTS,track);
track.samples=[];

var data={
data1:moof,
data2:mdat,
startPTS:firstPTS/timeScale,
endPTS:(lastPTS+mp4SampleDuration)/timeScale,
startDTS:firstDTS/timeScale,
endDTS:this.nextAvcDts/timeScale,
type:'video',
nb:outputSamples.length,
dropped:dropped};

this.observer.trigger(_events2.default.FRAG_PARSING_DATA,data);
return data;
}},{key:'remuxAudio',value:function remuxAudio(

track,timeOffset,contiguous,accurateTimeOffset){
var inputTimeScale=track.inputTimeScale,
mp4timeScale=track.timescale,
scaleFactor=inputTimeScale/mp4timeScale,
mp4SampleDuration=track.isAAC?1024:1152,
inputSampleDuration=mp4SampleDuration*scaleFactor,
ptsNormalize=this._PTSNormalize,
initDTS=this._initDTS,
rawMPEG=!track.isAAC&&this.typeSupported.mpeg;

var view,
offset=rawMPEG?0:8,
audioSample,mp4Sample,
unit,
mdat,moof,
firstPTS,firstDTS,lastDTS,
pts,dts,ptsnorm,dtsnorm,
outputSamples=[],
inputSamples=[],
fillFrame,newStamp,
nextAudioPts;

track.samples.sort(function(a,b){
return a.pts-b.pts;
});
inputSamples=track.samples;










nextAudioPts=this.nextAudioPts;
contiguous|=inputSamples.length&&nextAudioPts&&(
accurateTimeOffset&&Math.abs(timeOffset-nextAudioPts/inputTimeScale)<0.1||
Math.abs(inputSamples[0].pts-nextAudioPts-initDTS)<20*inputSampleDuration);


if(!contiguous){

nextAudioPts=timeOffset*inputTimeScale;
}







if(accurateTimeOffset&&track.isAAC){
for(var i=0,nextPtsNorm=nextAudioPts;i<inputSamples.length;){

var sample=inputSamples[i],
ptsNorm=ptsNormalize(sample.pts-initDTS,nextAudioPts),
delta=ptsNorm-nextPtsNorm;


if(delta<=-inputSampleDuration){
_logger.logger.warn('Dropping audio frame @ '+(nextPtsNorm/inputTimeScale).toFixed(3)+'s due to '+Math.round(Math.abs(1000*delta/inputTimeScale))+' ms overlap.');
inputSamples.splice(i,1);
track.len-=sample.unit.length;

}else


if(delta>=inputSampleDuration&&nextPtsNorm){
var missing=Math.round(delta/inputSampleDuration);
_logger.logger.warn('Injecting '+missing+' audio frame @ '+(nextPtsNorm/inputTimeScale).toFixed(3)+'s due to '+Math.round(1000*delta/inputTimeScale)+' ms gap.');
for(var j=0;j<missing;j++){
newStamp=nextPtsNorm+initDTS;
newStamp=Math.max(newStamp,initDTS);
fillFrame=_aac2.default.getSilentFrame(track.manifestCodec||track.codec,track.channelCount);
if(!fillFrame){
_logger.logger.log('Unable to get silent frame for given audio codec; duplicating last frame instead.');
fillFrame=sample.unit.subarray();
}
inputSamples.splice(i,0,{unit:fillFrame,pts:newStamp,dts:newStamp});
track.len+=fillFrame.length;
nextPtsNorm+=inputSampleDuration;
i+=1;
}


sample.pts=sample.dts=nextPtsNorm+initDTS;
nextPtsNorm+=inputSampleDuration;
i+=1;
}else

{
if(Math.abs(delta)>0.1*inputSampleDuration){

}
nextPtsNorm+=inputSampleDuration;
if(i===0){
sample.pts=sample.dts=initDTS+nextAudioPts;
}else{
sample.pts=sample.dts=inputSamples[i-1].pts+inputSampleDuration;
}
i+=1;
}
}
}


for(var _j2=0,_nbSamples=inputSamples.length;_j2<_nbSamples;_j2++){
audioSample=inputSamples[_j2];
unit=audioSample.unit;
pts=audioSample.pts-initDTS;
dts=audioSample.dts-initDTS;


if(lastDTS!==undefined){
ptsnorm=ptsNormalize(pts,lastDTS);
dtsnorm=ptsNormalize(dts,lastDTS);
mp4Sample.duration=Math.round((dtsnorm-lastDTS)/scaleFactor);
}else{
ptsnorm=ptsNormalize(pts,nextAudioPts);
dtsnorm=ptsNormalize(dts,nextAudioPts);
var _delta=Math.round(1000*(ptsnorm-nextAudioPts)/inputTimeScale),
numMissingFrames=0;


if(contiguous&&track.isAAC){

if(_delta){
if(_delta>0){
numMissingFrames=Math.round((ptsnorm-nextAudioPts)/inputSampleDuration);
_logger.logger.log(_delta+' ms hole between AAC samples detected,filling it');
if(numMissingFrames>0){
fillFrame=_aac2.default.getSilentFrame(track.manifestCodec||track.codec,track.channelCount);
if(!fillFrame){
fillFrame=unit.subarray();
}
track.len+=numMissingFrames*fillFrame.length;
}

}else if(_delta<-12){

_logger.logger.log('drop overlapping AAC sample, expected/parsed/delta:'+(nextAudioPts/inputTimeScale).toFixed(3)+'s/'+(ptsnorm/inputTimeScale).toFixed(3)+'s/'+-_delta+'ms');
track.len-=unit.byteLength;
continue;
}

ptsnorm=dtsnorm=nextAudioPts;
}
}

firstPTS=Math.max(0,ptsnorm);
firstDTS=Math.max(0,dtsnorm);
if(track.len>0){




var mdatSize=rawMPEG?track.len:track.len+8;
try{
mdat=new Uint8Array(mdatSize);
}catch(err){
this.observer.trigger(_events2.default.ERROR,{type:_errors.ErrorTypes.MUX_ERROR,details:_errors.ErrorDetails.REMUX_ALLOC_ERROR,fatal:false,bytes:mdatSize,reason:'fail allocating audio mdat '+mdatSize});
return;
}
if(!rawMPEG){
view=new DataView(mdat.buffer);
view.setUint32(0,mdatSize);
mdat.set(_mp4Generator2.default.types.mdat,4);
}
}else{

return;
}
for(var _i3=0;_i3<numMissingFrames;_i3++){
newStamp=ptsnorm-(numMissingFrames-_i3)*inputSampleDuration;
fillFrame=_aac2.default.getSilentFrame(track.manifestCodec||track.codec,track.channelCount);
if(!fillFrame){
_logger.logger.log('Unable to get silent frame for given audio codec; duplicating this frame instead.');
fillFrame=unit.subarray();
}
mdat.set(fillFrame,offset);
offset+=fillFrame.byteLength;
mp4Sample={
size:fillFrame.byteLength,
cts:0,
duration:1024,
flags:{
isLeading:0,
isDependedOn:0,
hasRedundancy:0,
degradPrio:0,
dependsOn:1}};


outputSamples.push(mp4Sample);
}
}
mdat.set(unit,offset);
var unitLen=unit.byteLength;
offset+=unitLen;

mp4Sample={
size:unitLen,
cts:0,
duration:0,
flags:{
isLeading:0,
isDependedOn:0,
hasRedundancy:0,
degradPrio:0,
dependsOn:1}};


outputSamples.push(mp4Sample);
lastDTS=dtsnorm;
}
var lastSampleDuration=0;
var nbSamples=outputSamples.length;

if(nbSamples>=2){
lastSampleDuration=outputSamples[nbSamples-2].duration;
mp4Sample.duration=lastSampleDuration;
}
if(nbSamples){

this.nextAudioPts=ptsnorm+scaleFactor*lastSampleDuration;

track.len=0;
track.samples=outputSamples;
if(rawMPEG){
moof=new Uint8Array();
}else{
moof=_mp4Generator2.default.moof(track.sequenceNumber++,firstDTS/scaleFactor,track);
}
track.samples=[];
var audioData={
data1:moof,
data2:mdat,
startPTS:firstPTS/inputTimeScale,
endPTS:this.nextAudioPts/inputTimeScale,
startDTS:firstDTS/inputTimeScale,
endDTS:(dtsnorm+scaleFactor*lastSampleDuration)/inputTimeScale,
type:'audio',
nb:nbSamples};

this.observer.trigger(_events2.default.FRAG_PARSING_DATA,audioData);
return audioData;
}
return null;
}},{key:'remuxEmptyAudio',value:function remuxEmptyAudio(

track,timeOffset,contiguous,videoData){
var inputTimeScale=track.inputTimeScale,
mp4timeScale=track.samplerate?track.samplerate:inputTimeScale,
scaleFactor=inputTimeScale/mp4timeScale,
nextAudioPts=this.nextAudioPts,


startDTS=(nextAudioPts!==undefined?nextAudioPts:videoData.startDTS*inputTimeScale)+this._initDTS,
endDTS=videoData.endDTS*inputTimeScale+this._initDTS,

sampleDuration=1024,
frameDuration=scaleFactor*sampleDuration,


nbSamples=Math.ceil((endDTS-startDTS)/frameDuration),


silentFrame=_aac2.default.getSilentFrame(track.manifestCodec||track.codec,track.channelCount);

_logger.logger.warn('remux empty Audio');

if(!silentFrame){
_logger.logger.trace('Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!');
return;
}

var samples=[];
for(var i=0;i<nbSamples;i++){
var stamp=startDTS+i*frameDuration;
samples.push({unit:silentFrame,pts:stamp,dts:stamp});
track.len+=silentFrame.length;
}
track.samples=samples;

this.remuxAudio(track,timeOffset,contiguous);
}},{key:'remuxID3',value:function remuxID3(

track,timeOffset){
var length=track.samples.length,sample;
var inputTimeScale=track.inputTimeScale;
var initPTS=this._initPTS;
var initDTS=this._initDTS;

if(length){
for(var index=0;index<length;index++){
sample=track.samples[index];


sample.pts=(sample.pts-initPTS)/inputTimeScale;
sample.dts=(sample.dts-initDTS)/inputTimeScale;
}
this.observer.trigger(_events2.default.FRAG_PARSING_METADATA,{
samples:track.samples});

}

track.samples=[];
timeOffset=timeOffset;
}},{key:'remuxText',value:function remuxText(

track,timeOffset){
track.samples.sort(function(a,b){
return a.pts-b.pts;
});

var length=track.samples.length,sample;
var inputTimeScale=track.inputTimeScale;
var initPTS=this._initPTS;

if(length){
for(var index=0;index<length;index++){
sample=track.samples[index];


sample.pts=(sample.pts-initPTS)/inputTimeScale;
}
this.observer.trigger(_events2.default.FRAG_PARSING_USERDATA,{
samples:track.samples});

}

track.samples=[];
timeOffset=timeOffset;
}},{key:'_PTSNormalize',value:function _PTSNormalize(

value,reference){
var offset;
if(reference===undefined){
return value;
}
if(reference<value){

offset=-8589934592;
}else{

offset=8589934592;
}



while(Math.abs(value-reference)>4294967296){
value+=offset;
}
return value;
}}]);return MP4Remuxer;}();exports.default=



MP4Remuxer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _events=__webpack_require__(1);var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

PassThroughRemuxer=function(){
function PassThroughRemuxer(observer){_classCallCheck(this,PassThroughRemuxer);
this.observer=observer;
}_createClass(PassThroughRemuxer,[{key:'destroy',value:function destroy()

{
}},{key:'resetTimeStamp',value:function resetTimeStamp()

{
}},{key:'resetInitSegment',value:function resetInitSegment()

{
}},{key:'remux',value:function remux(

audioTrack,videoTrack,id3Track,textTrack,timeOffset,contiguous,accurateTimeOffset,rawData){
var observer=this.observer;
var streamType='';
if(audioTrack){
streamType+='audio';
}
if(videoTrack){
streamType+='video';
}
observer.trigger(_events2.default.FRAG_PARSING_DATA,{
data1:rawData,
startPTS:timeOffset,
startDTS:timeOffset,
type:streamType,
nb:1,
dropped:0});


observer.trigger(_events2.default.FRAG_PARSED);
}}]);return PassThroughRemuxer;}();exports.default=


PassThroughRemuxer;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DECIMAL_RESOLUTION_REGEX=/^(\d+)x(\d+)$/;
var ATTR_LIST_REGEX=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;var


AttrList=function(){

function AttrList(attrs){_classCallCheck(this,AttrList);
if(typeof attrs==='string'){
attrs=AttrList.parseAttrList(attrs);
}
for(var attr in attrs){
if(attrs.hasOwnProperty(attr)){
this[attr]=attrs[attr];
}
}
}_createClass(AttrList,[{key:'decimalInteger',value:function decimalInteger(

attrName){
var intValue=parseInt(this[attrName],10);
if(intValue>Number.MAX_SAFE_INTEGER){
return Infinity;
}
return intValue;
}},{key:'hexadecimalInteger',value:function hexadecimalInteger(

attrName){
if(this[attrName]){
var stringValue=(this[attrName]||'0x').slice(2);
stringValue=(stringValue.length&1?'0':'')+stringValue;

var value=new Uint8Array(stringValue.length/2);
for(var i=0;i<stringValue.length/2;i++){
value[i]=parseInt(stringValue.slice(i*2,i*2+2),16);
}
return value;
}else{
return null;
}
}},{key:'hexadecimalIntegerAsNumber',value:function hexadecimalIntegerAsNumber(

attrName){
var intValue=parseInt(this[attrName],16);
if(intValue>Number.MAX_SAFE_INTEGER){
return Infinity;
}
return intValue;
}},{key:'decimalFloatingPoint',value:function decimalFloatingPoint(

attrName){
return parseFloat(this[attrName]);
}},{key:'enumeratedString',value:function enumeratedString(

attrName){
return this[attrName];
}},{key:'decimalResolution',value:function decimalResolution(

attrName){
var res=DECIMAL_RESOLUTION_REGEX.exec(this[attrName]);
if(res===null){
return undefined;
}
return{
width:parseInt(res[1],10),
height:parseInt(res[2],10)};

}}],[{key:'parseAttrList',value:function parseAttrList(

input){
var match,attrs={};
ATTR_LIST_REGEX.lastIndex=0;
while((match=ATTR_LIST_REGEX.exec(input))!==null){
var value=match[2],quote='"';

if(value.indexOf(quote)===0&&
value.lastIndexOf(quote)===value.length-1){
value=value.slice(1,-1);
}
attrs[match[1]]=value;
}
return attrs;
}}]);return AttrList;}();exports.default=



AttrList;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}








































var specialCea608CharsCodes={
0x2a:0xe1,
0x5c:0xe9,
0x5e:0xed,
0x5f:0xf3,
0x60:0xfa,
0x7b:0xe7,
0x7c:0xf7,
0x7d:0xd1,
0x7e:0xf1,
0x7f:0x2588,



0x80:0xae,
0x81:0xb0,
0x82:0xbd,
0x83:0xbf,
0x84:0x2122,
0x85:0xa2,
0x86:0xa3,
0x87:0x266a,
0x88:0xe0,
0x89:0x20,
0x8a:0xe8,
0x8b:0xe2,
0x8c:0xea,
0x8d:0xee,
0x8e:0xf4,
0x8f:0xfb,


0x90:0xc1,
0x91:0xc9,
0x92:0xd3,
0x93:0xda,
0x94:0xdc,
0x95:0xfc,
0x96:0x2018,
0x97:0xa1,
0x98:0x2a,
0x99:0x2019,
0x9a:0x2501,
0x9b:0xa9,
0x9c:0x2120,
0x9d:0x2022,
0x9e:0x201c,
0x9f:0x201d,
0xa0:0xc0,
0xa1:0xc2,
0xa2:0xc7,
0xa3:0xc8,
0xa4:0xca,
0xa5:0xcb,
0xa6:0xeb,
0xa7:0xce,
0xa8:0xcf,
0xa9:0xef,
0xaa:0xd4,
0xab:0xd9,
0xac:0xf9,
0xad:0xdb,
0xae:0xab,
0xaf:0xbb,


0xb0:0xc3,
0xb1:0xe3,
0xb2:0xcd,
0xb3:0xcc,
0xb4:0xec,
0xb5:0xd2,
0xb6:0xf2,
0xb7:0xd5,
0xb8:0xf5,
0xb9:0x7b,
0xba:0x7d,
0xbb:0x5c,
0xbc:0x5e,
0xbd:0x5f,
0xbe:0x7c,
0xbf:0x223c,
0xc0:0xc4,
0xc1:0xe4,
0xc2:0xd6,
0xc3:0xf6,
0xc4:0xdf,
0xc5:0xa5,
0xc6:0xa4,
0xc7:0x2503,
0xc8:0xc5,
0xc9:0xe5,
0xca:0xd8,
0xcb:0xf8,
0xcc:0x250f,
0xcd:0x2513,
0xce:0x2517,
0xcf:0x251b};





var getCharForByte=function getCharForByte(byte){
var charCode=byte;
if(specialCea608CharsCodes.hasOwnProperty(byte)){
charCode=specialCea608CharsCodes[byte];
}
return String.fromCharCode(charCode);
};

var NR_ROWS=15,
NR_COLS=100;

var rowsLowCh1={0x11:1,0x12:3,0x15:5,0x16:7,0x17:9,0x10:11,0x13:12,0x14:14};
var rowsHighCh1={0x11:2,0x12:4,0x15:6,0x16:8,0x17:10,0x13:13,0x14:15};
var rowsLowCh2={0x19:1,0x1A:3,0x1D:5,0x1E:7,0x1F:9,0x18:11,0x1B:12,0x1C:14};
var rowsHighCh2={0x19:2,0x1A:4,0x1D:6,0x1E:8,0x1F:10,0x1B:13,0x1C:15};

var backgroundColors=['white','green','blue','cyan','red','yellow','magenta','black','transparent'];




var logger={
verboseFilter:{'DATA':3,'DEBUG':3,'INFO':2,'WARNING':2,'TEXT':1,'ERROR':0},
time:null,
verboseLevel:0,
setTime:function setTime(newTime){
this.time=newTime;
},
log:function log(severity,msg){
var minLevel=this.verboseFilter[severity];
if(this.verboseLevel>=minLevel){
console.log(this.time+' ['+severity+'] '+msg);
}
}};


var numArrayToHexArray=function numArrayToHexArray(numArray){
var hexArray=[];
for(var j=0;j<numArray.length;j++){
hexArray.push(numArray[j].toString(16));
}
return hexArray;
};var

PenState=function(){

function PenState(foreground,underline,italics,background,flash){_classCallCheck(this,PenState);
this.foreground=foreground||'white';
this.underline=underline||false;
this.italics=italics||false;
this.background=background||'black';
this.flash=flash||false;
}_createClass(PenState,[{key:'reset',value:function reset()

{
this.foreground='white';
this.underline=false;
this.italics=false;
this.background='black';
this.flash=false;
}},{key:'setStyles',value:function setStyles(

styles){
var attribs=['foreground','underline','italics','background','flash'];
for(var i=0;i<attribs.length;i++){
var style=attribs[i];
if(styles.hasOwnProperty(style)){
this[style]=styles[style];
}
}
}},{key:'isDefault',value:function isDefault()

{
return this.foreground==='white'&&!this.underline&&!this.italics&&
this.background==='black'&&!this.flash;
}},{key:'equals',value:function equals(

other){
return this.foreground===other.foreground&&
this.underline===other.underline&&
this.italics===other.italics&&
this.background===other.background&&
this.flash===other.flash;
}},{key:'copy',value:function copy(

newPenState){
this.foreground=newPenState.foreground;
this.underline=newPenState.underline;
this.italics=newPenState.italics;
this.background=newPenState.background;
this.flash=newPenState.flash;
}},{key:'toString',value:function toString()

{
return'color='+this.foreground+', underline='+this.underline+', italics='+this.italics+
', background='+this.background+', flash='+this.flash;
}}]);return PenState;}();var






StyledUnicodeChar=function(){


function StyledUnicodeChar(uchar,foreground,underline,italics,background,flash){_classCallCheck(this,StyledUnicodeChar);
this.uchar=uchar||' ';
this.penState=new PenState(foreground,underline,italics,background,flash);
}_createClass(StyledUnicodeChar,[{key:'reset',value:function reset()

{
this.uchar=' ';
this.penState.reset();
}},{key:'setChar',value:function setChar(

uchar,newPenState){
this.uchar=uchar;
this.penState.copy(newPenState);
}},{key:'setPenState',value:function setPenState(

newPenState){
this.penState.copy(newPenState);
}},{key:'equals',value:function equals(

other){
return this.uchar===other.uchar&&this.penState.equals(other.penState);
}},{key:'copy',value:function copy(

newChar){
this.uchar=newChar.uchar;
this.penState.copy(newChar.penState);
}},{key:'isEmpty',value:function isEmpty()

{
return this.uchar===' '&&this.penState.isDefault();
}}]);return StyledUnicodeChar;}();var






Row=function(){
function Row(){_classCallCheck(this,Row);
this.chars=[];
for(var i=0;i<NR_COLS;i++){
this.chars.push(new StyledUnicodeChar());
}
this.pos=0;
this.currPenState=new PenState();
}_createClass(Row,[{key:'equals',value:function equals(

other){
var equal=true;
for(var i=0;i<NR_COLS;i++){
if(!this.chars[i].equals(other.chars[i])){
equal=false;
break;
}
}
return equal;
}},{key:'copy',value:function copy(

other){
for(var i=0;i<NR_COLS;i++){
this.chars[i].copy(other.chars[i]);
}
}},{key:'isEmpty',value:function isEmpty()

{
var empty=true;
for(var i=0;i<NR_COLS;i++){
if(!this.chars[i].isEmpty()){
empty=false;
break;
}
}
return empty;
}},{key:'setCursor',value:function setCursor(




absPos){
if(this.pos!==absPos){
this.pos=absPos;
}
if(this.pos<0){
logger.log('ERROR','Negative cursor position '+this.pos);
this.pos=0;
}else if(this.pos>NR_COLS){
logger.log('ERROR','Too large cursor position '+this.pos);
this.pos=NR_COLS;
}
}},{key:'moveCursor',value:function moveCursor(




relPos){
var newPos=this.pos+relPos;
if(relPos>1){
for(var i=this.pos+1;i<newPos+1;i++){
this.chars[i].setPenState(this.currPenState);
}
}
this.setCursor(newPos);
}},{key:'backSpace',value:function backSpace()




{
this.moveCursor(-1);
this.chars[this.pos].setChar(' ',this.currPenState);
}},{key:'insertChar',value:function insertChar(

byte){
if(byte>=0x90){
this.backSpace();
}
var char=getCharForByte(byte);
if(this.pos>=NR_COLS){
logger.log('ERROR','Cannot insert '+byte.toString(16)+
' ('+char+') at position '+this.pos+'. Skipping it!');
return;
}
this.chars[this.pos].setChar(char,this.currPenState);
this.moveCursor(1);
}},{key:'clearFromPos',value:function clearFromPos(

startPos){
var i;
for(i=startPos;i<NR_COLS;i++){
this.chars[i].reset();
}
}},{key:'clear',value:function clear()

{
this.clearFromPos(0);
this.pos=0;
this.currPenState.reset();
}},{key:'clearToEndOfRow',value:function clearToEndOfRow()

{
this.clearFromPos(this.pos);
}},{key:'getTextString',value:function getTextString()

{
var chars=[];
var empty=true;
for(var i=0;i<NR_COLS;i++){
var char=this.chars[i].uchar;
if(char!==' '){
empty=false;
}
chars.push(char);
}
if(empty){
return'';
}else{
return chars.join('');
}
}},{key:'setPenStyles',value:function setPenStyles(

styles){
this.currPenState.setStyles(styles);
var currChar=this.chars[this.pos];
currChar.setPenState(this.currPenState);
}}]);return Row;}();var






CaptionScreen=function(){

function CaptionScreen(){_classCallCheck(this,CaptionScreen);
this.rows=[];
for(var i=0;i<NR_ROWS;i++){
this.rows.push(new Row());
}
this.currRow=NR_ROWS-1;
this.nrRollUpRows=null;
this.reset();
}_createClass(CaptionScreen,[{key:'reset',value:function reset()

{
for(var i=0;i<NR_ROWS;i++){
this.rows[i].clear();
}
this.currRow=NR_ROWS-1;
}},{key:'equals',value:function equals(

other){
var equal=true;
for(var i=0;i<NR_ROWS;i++){
if(!this.rows[i].equals(other.rows[i])){
equal=false;
break;
}
}
return equal;
}},{key:'copy',value:function copy(

other){
for(var i=0;i<NR_ROWS;i++){
this.rows[i].copy(other.rows[i]);
}
}},{key:'isEmpty',value:function isEmpty()

{
var empty=true;
for(var i=0;i<NR_ROWS;i++){
if(!this.rows[i].isEmpty()){
empty=false;
break;
}
}
return empty;
}},{key:'backSpace',value:function backSpace()

{
var row=this.rows[this.currRow];
row.backSpace();
}},{key:'clearToEndOfRow',value:function clearToEndOfRow()

{
var row=this.rows[this.currRow];
row.clearToEndOfRow();
}},{key:'insertChar',value:function insertChar(




char){
var row=this.rows[this.currRow];
row.insertChar(char);
}},{key:'setPen',value:function setPen(

styles){
var row=this.rows[this.currRow];
row.setPenStyles(styles);
}},{key:'moveCursor',value:function moveCursor(

relPos){
var row=this.rows[this.currRow];
row.moveCursor(relPos);
}},{key:'setCursor',value:function setCursor(

absPos){
logger.log('INFO','setCursor: '+absPos);
var row=this.rows[this.currRow];
row.setCursor(absPos);
}},{key:'setPAC',value:function setPAC(

pacData){
logger.log('INFO','pacData = '+JSON.stringify(pacData));
var newRow=pacData.row-1;
if(this.nrRollUpRows&&newRow<this.nrRollUpRows-1){
newRow=this.nrRollUpRows-1;
}


if(this.nrRollUpRows&&this.currRow!==newRow){

for(var i=0;i<NR_ROWS;i++){
this.rows[i].clear();
}



var topRowIndex=this.currRow+1-this.nrRollUpRows;


var lastOutputScreen=this.lastOutputScreen;
if(lastOutputScreen){
var prevLineTime=lastOutputScreen.rows[topRowIndex].cueStartTime;
if(prevLineTime&&prevLineTime<logger.time){
for(var _i=0;_i<this.nrRollUpRows;_i++){
this.rows[newRow-this.nrRollUpRows+_i+1].copy(lastOutputScreen.rows[topRowIndex+_i]);
}
}
}
}

this.currRow=newRow;
var row=this.rows[this.currRow];
if(pacData.indent!==null){
var indent=pacData.indent;
var prevPos=Math.max(indent-1,0);
row.setCursor(pacData.indent);
pacData.color=row.chars[prevPos].penState.foreground;
}
var styles={foreground:pacData.color,underline:pacData.underline,italics:pacData.italics,background:'black',flash:false};
this.setPen(styles);
}},{key:'setBkgData',value:function setBkgData(




bkgData){

logger.log('INFO','bkgData = '+JSON.stringify(bkgData));
this.backSpace();
this.setPen(bkgData);
this.insertChar(0x20);
}},{key:'setRollUpRows',value:function setRollUpRows(

nrRows){
this.nrRollUpRows=nrRows;
}},{key:'rollUp',value:function rollUp()

{
if(this.nrRollUpRows===null){
logger.log('DEBUG','roll_up but nrRollUpRows not set yet');
return;
}
logger.log('TEXT',this.getDisplayText());
var topRowIndex=this.currRow+1-this.nrRollUpRows;
var topRow=this.rows.splice(topRowIndex,1)[0];
topRow.clear();
this.rows.splice(this.currRow,0,topRow);
logger.log('INFO','Rolling up');

}},{key:'getDisplayText',value:function getDisplayText(




asOneRow){
asOneRow=asOneRow||false;
var displayText=[];
var text='';
var rowNr=-1;
for(var i=0;i<NR_ROWS;i++){
var rowText=this.rows[i].getTextString();
if(rowText){
rowNr=i+1;
if(asOneRow){
displayText.push('Row '+rowNr+': \''+rowText+'\'');
}else{
displayText.push(rowText.trim());
}
}
}
if(displayText.length>0){
if(asOneRow){
text='['+displayText.join(' | ')+']';
}else{
text=displayText.join('\n');
}
}
return text;
}},{key:'getTextAndFormat',value:function getTextAndFormat()

{
return this.rows;
}}]);return CaptionScreen;}();var




Cea608Channel=function(){

function Cea608Channel(channelNumber,outputFilter){_classCallCheck(this,Cea608Channel);

this.chNr=channelNumber;
this.outputFilter=outputFilter;
this.mode=null;
this.verbose=0;
this.displayedMemory=new CaptionScreen();
this.nonDisplayedMemory=new CaptionScreen();
this.lastOutputScreen=new CaptionScreen();
this.currRollUpRow=this.displayedMemory.rows[NR_ROWS-1];
this.writeScreen=this.displayedMemory;
this.mode=null;
this.cueStartTime=null;
}_createClass(Cea608Channel,[{key:'reset',value:function reset()

{
this.mode=null;
this.displayedMemory.reset();
this.nonDisplayedMemory.reset();
this.lastOutputScreen.reset();
this.currRollUpRow=this.displayedMemory.rows[NR_ROWS-1];
this.writeScreen=this.displayedMemory;
this.mode=null;
this.cueStartTime=null;
this.lastCueEndTime=null;
}},{key:'getHandler',value:function getHandler()

{
return this.outputFilter;
}},{key:'setHandler',value:function setHandler(

newHandler){
this.outputFilter=newHandler;
}},{key:'setPAC',value:function setPAC(

pacData){
this.writeScreen.setPAC(pacData);
}},{key:'setBkgData',value:function setBkgData(

bkgData){
this.writeScreen.setBkgData(bkgData);
}},{key:'setMode',value:function setMode(

newMode){
if(newMode===this.mode){
return;
}
this.mode=newMode;
logger.log('INFO','MODE='+newMode);
if(this.mode==='MODE_POP-ON'){
this.writeScreen=this.nonDisplayedMemory;
}else{
this.writeScreen=this.displayedMemory;
this.writeScreen.reset();
}
if(this.mode!=='MODE_ROLL-UP'){
this.displayedMemory.nrRollUpRows=null;
this.nonDisplayedMemory.nrRollUpRows=null;
}
this.mode=newMode;
}},{key:'insertChars',value:function insertChars(

chars){
for(var i=0;i<chars.length;i++){
this.writeScreen.insertChar(chars[i]);
}
var screen=this.writeScreen===this.displayedMemory?'DISP':'NON_DISP';
logger.log('INFO',screen+': '+this.writeScreen.getDisplayText(true));
if(this.mode==='MODE_PAINT-ON'||this.mode==='MODE_ROLL-UP'){
logger.log('TEXT','DISPLAYED: '+this.displayedMemory.getDisplayText(true));
this.outputDataUpdate();
}
}},{key:'ccRCL',value:function ccRCL()

{
logger.log('INFO','RCL - Resume Caption Loading');
this.setMode('MODE_POP-ON');
}},{key:'ccBS',value:function ccBS()

{
logger.log('INFO','BS - BackSpace');
if(this.mode==='MODE_TEXT'){
return;
}
this.writeScreen.backSpace();
if(this.writeScreen===this.displayedMemory){
this.outputDataUpdate();
}
}},{key:'ccAOF',value:function ccAOF()

{
return;
}},{key:'ccAON',value:function ccAON()

{
return;
}},{key:'ccDER',value:function ccDER()

{
logger.log('INFO','DER- Delete to End of Row');
this.writeScreen.clearToEndOfRow();
this.outputDataUpdate();
}},{key:'ccRU',value:function ccRU(

nrRows){
logger.log('INFO','RU('+nrRows+') - Roll Up');
this.writeScreen=this.displayedMemory;
this.setMode('MODE_ROLL-UP');
this.writeScreen.setRollUpRows(nrRows);
}},{key:'ccFON',value:function ccFON()

{
logger.log('INFO','FON - Flash On');
this.writeScreen.setPen({flash:true});
}},{key:'ccRDC',value:function ccRDC()

{
logger.log('INFO','RDC - Resume Direct Captioning');
this.setMode('MODE_PAINT-ON');
}},{key:'ccTR',value:function ccTR()

{
logger.log('INFO','TR');
this.setMode('MODE_TEXT');
}},{key:'ccRTD',value:function ccRTD()

{
logger.log('INFO','RTD');
this.setMode('MODE_TEXT');
}},{key:'ccEDM',value:function ccEDM()

{
logger.log('INFO','EDM - Erase Displayed Memory');
this.displayedMemory.reset();
this.outputDataUpdate();
}},{key:'ccCR',value:function ccCR()

{
logger.log('CR - Carriage Return');
this.writeScreen.rollUp();
this.outputDataUpdate();
}},{key:'ccENM',value:function ccENM()

{
logger.log('INFO','ENM - Erase Non-displayed Memory');
this.nonDisplayedMemory.reset();
}},{key:'ccEOC',value:function ccEOC()

{
logger.log('INFO','EOC - End Of Caption');
if(this.mode==='MODE_POP-ON'){
var tmp=this.displayedMemory;
this.displayedMemory=this.nonDisplayedMemory;
this.nonDisplayedMemory=tmp;
this.writeScreen=this.nonDisplayedMemory;
logger.log('TEXT','DISP: '+this.displayedMemory.getDisplayText());
}
this.outputDataUpdate();
}},{key:'ccTO',value:function ccTO(

nrCols){
logger.log('INFO','TO('+nrCols+') - Tab Offset');
this.writeScreen.moveCursor(nrCols);
}},{key:'ccMIDROW',value:function ccMIDROW(

secondByte){
var styles={flash:false};
styles.underline=secondByte%2===1;
styles.italics=secondByte>=0x2e;
if(!styles.italics){
var colorIndex=Math.floor(secondByte/2)-0x10;
var colors=['white','green','blue','cyan','red','yellow','magenta'];
styles.foreground=colors[colorIndex];
}else{
styles.foreground='white';
}
logger.log('INFO','MIDROW: '+JSON.stringify(styles));
this.writeScreen.setPen(styles);
}},{key:'outputDataUpdate',value:function outputDataUpdate()

{
var t=logger.time;
if(t===null){
return;
}
if(this.outputFilter){
if(this.outputFilter.updateData){
this.outputFilter.updateData(t,this.displayedMemory);
}
if(this.cueStartTime===null&&!this.displayedMemory.isEmpty()){
this.cueStartTime=t;
}else{
if(!this.displayedMemory.equals(this.lastOutputScreen)){
if(this.outputFilter.newCue){
this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen);
}
this.cueStartTime=this.displayedMemory.isEmpty()?null:t;
}
}
this.lastOutputScreen.copy(this.displayedMemory);
}
}},{key:'cueSplitAtTime',value:function cueSplitAtTime(

t){
if(this.outputFilter){
if(!this.displayedMemory.isEmpty()){
if(this.outputFilter.newCue){
this.outputFilter.newCue(this.cueStartTime,t,this.displayedMemory);
}
this.cueStartTime=t;
}
}
}}]);return Cea608Channel;}();var


Cea608Parser=function(){

function Cea608Parser(field,out1,out2){_classCallCheck(this,Cea608Parser);
this.field=field||1;
this.outputs=[out1,out2];
this.channels=[new Cea608Channel(1,out1),new Cea608Channel(2,out2)];
this.currChNr=-1;
this.lastCmdA=null;
this.lastCmdB=null;
this.bufferedData=[];
this.startTime=null;
this.lastTime=null;
this.dataCounters={'padding':0,'char':0,'cmd':0,'other':0};
}_createClass(Cea608Parser,[{key:'getHandler',value:function getHandler(

index){
return this.channels[index].getHandler();
}},{key:'setHandler',value:function setHandler(

index,newHandler){
this.channels[index].setHandler(newHandler);
}},{key:'addData',value:function addData(




t,byteList){
var cmdFound,a,b,
charsFound=false;

this.lastTime=t;
logger.setTime(t);

for(var i=0;i<byteList.length;i+=2){
a=byteList[i]&0x7f;
b=byteList[i+1]&0x7f;
if(a===0&&b===0){
this.dataCounters.padding+=2;
continue;
}else{
logger.log('DATA','['+numArrayToHexArray([byteList[i],byteList[i+1]])+'] -> ('+numArrayToHexArray([a,b])+')');
}
cmdFound=this.parseCmd(a,b);
if(!cmdFound){
cmdFound=this.parseMidrow(a,b);
}
if(!cmdFound){
cmdFound=this.parsePAC(a,b);
}
if(!cmdFound){
cmdFound=this.parseBackgroundAttributes(a,b);
}
if(!cmdFound){
charsFound=this.parseChars(a,b);
if(charsFound){
if(this.currChNr&&this.currChNr>=0){
var channel=this.channels[this.currChNr-1];
channel.insertChars(charsFound);
}else{
logger.log('WARNING','No channel found yet. TEXT-MODE?');
}
}
}
if(cmdFound){
this.dataCounters.cmd+=2;
}else if(charsFound){
this.dataCounters.char+=2;
}else{
this.dataCounters.other+=2;
logger.log('WARNING','Couldn\'t parse cleaned data '+numArrayToHexArray([a,b])+
' orig: '+numArrayToHexArray([byteList[i],byteList[i+1]]));
}
}
}},{key:'parseCmd',value:function parseCmd(





a,b){
var chNr=null;

var cond1=(a===0x14||a===0x1C)&&0x20<=b&&b<=0x2F;
var cond2=(a===0x17||a===0x1F)&&0x21<=b&&b<=0x23;
if(!(cond1||cond2)){
return false;
}

if(a===this.lastCmdA&&b===this.lastCmdB){
this.lastCmdA=null;
this.lastCmdB=null;
logger.log('DEBUG','Repeated command ('+numArrayToHexArray([a,b])+') is dropped');
return true;
}

if(a===0x14||a===0x17){
chNr=1;
}else{
chNr=2;
}

var channel=this.channels[chNr-1];

if(a===0x14||a===0x1C){
if(b===0x20){
channel.ccRCL();
}else if(b===0x21){
channel.ccBS();
}else if(b===0x22){
channel.ccAOF();
}else if(b===0x23){
channel.ccAON();
}else if(b===0x24){
channel.ccDER();
}else if(b===0x25){
channel.ccRU(2);
}else if(b===0x26){
channel.ccRU(3);
}else if(b===0x27){
channel.ccRU(4);
}else if(b===0x28){
channel.ccFON();
}else if(b===0x29){
channel.ccRDC();
}else if(b===0x2A){
channel.ccTR();
}else if(b===0x2B){
channel.ccRTD();
}else if(b===0x2C){
channel.ccEDM();
}else if(b===0x2D){
channel.ccCR();
}else if(b===0x2E){
channel.ccENM();
}else if(b===0x2F){
channel.ccEOC();
}
}else{
channel.ccTO(b-0x20);
}
this.lastCmdA=a;
this.lastCmdB=b;
this.currChNr=chNr;
return true;
}},{key:'parseMidrow',value:function parseMidrow(





a,b){
var chNr=null;

if((a===0x11||a===0x19)&&0x20<=b&&b<=0x2f){
if(a===0x11){
chNr=1;
}else{
chNr=2;
}
if(chNr!==this.currChNr){
logger.log('ERROR','Mismatch channel in midrow parsing');
return false;
}
var channel=this.channels[chNr-1];
channel.ccMIDROW(b);
logger.log('DEBUG','MIDROW ('+numArrayToHexArray([a,b])+')');
return true;
}
return false;
}},{key:'parsePAC',value:function parsePAC(




a,b){

var chNr=null;
var row=null;

var case1=(0x11<=a&&a<=0x17||0x19<=a&&a<=0x1F)&&0x40<=b&&b<=0x7F;
var case2=(a===0x10||a===0x18)&&0x40<=b&&b<=0x5F;
if(!(case1||case2)){
return false;
}

if(a===this.lastCmdA&&b===this.lastCmdB){
this.lastCmdA=null;
this.lastCmdB=null;
return true;
}

chNr=a<=0x17?1:2;

if(0x40<=b&&b<=0x5F){
row=chNr===1?rowsLowCh1[a]:rowsLowCh2[a];
}else{
row=chNr===1?rowsHighCh1[a]:rowsHighCh2[a];
}
var pacData=this.interpretPAC(row,b);
var channel=this.channels[chNr-1];
channel.setPAC(pacData);
this.lastCmdA=a;
this.lastCmdB=b;
this.currChNr=chNr;
return true;
}},{key:'interpretPAC',value:function interpretPAC(





row,byte){
var pacIndex=byte;
var pacData={color:null,italics:false,indent:null,underline:false,row:row};

if(byte>0x5F){
pacIndex=byte-0x60;
}else{
pacIndex=byte-0x40;
}
pacData.underline=(pacIndex&1)===1;
if(pacIndex<=0xd){
pacData.color=['white','green','blue','cyan','red','yellow','magenta','white'][Math.floor(pacIndex/2)];
}else if(pacIndex<=0xf){
pacData.italics=true;
pacData.color='white';
}else{
pacData.indent=Math.floor((pacIndex-0x10)/2)*4;
}
return pacData;
}},{key:'parseChars',value:function parseChars(





a,b){

var channelNr=null,
charCodes=null,
charCode1=null;

if(a>=0x19){
channelNr=2;
charCode1=a-8;
}else{
channelNr=1;
charCode1=a;
}
if(0x11<=charCode1&&charCode1<=0x13){

var oneCode=b;
if(charCode1===0x11){
oneCode=b+0x50;
}else if(charCode1===0x12){
oneCode=b+0x70;
}else{
oneCode=b+0x90;
}
logger.log('INFO','Special char \''+getCharForByte(oneCode)+'\' in channel '+channelNr);
charCodes=[oneCode];
}else if(0x20<=a&&a<=0x7f){
charCodes=b===0?[a]:[a,b];
}
if(charCodes){
var hexCodes=numArrayToHexArray(charCodes);
logger.log('DEBUG','Char codes =  '+hexCodes.join(','));
this.lastCmdA=null;
this.lastCmdB=null;
}
return charCodes;
}},{key:'parseBackgroundAttributes',value:function parseBackgroundAttributes(





a,b){
var bkgData,
index,
chNr,
channel;

var case1=(a===0x10||a===0x18)&&0x20<=b&&b<=0x2f;
var case2=(a===0x17||a===0x1f)&&0x2d<=b&&b<=0x2f;
if(!(case1||case2)){
return false;
}
bkgData={};
if(a===0x10||a===0x18){
index=Math.floor((b-0x20)/2);
bkgData.background=backgroundColors[index];
if(b%2===1){
bkgData.background=bkgData.background+'_semi';
}
}else if(b===0x2d){
bkgData.background='transparent';
}else{
bkgData.foreground='black';
if(b===0x2f){
bkgData.underline=true;
}
}
chNr=a<0x18?1:2;
channel=this.channels[chNr-1];
channel.setBkgData(bkgData);
this.lastCmdA=null;
this.lastCmdB=null;
return true;
}},{key:'reset',value:function reset()




{
for(var i=0;i<this.channels.length;i++){
if(this.channels[i]){
this.channels[i].reset();
}
}
this.lastCmdA=null;
this.lastCmdB=null;
}},{key:'cueSplitAtTime',value:function cueSplitAtTime(




t){
for(var i=0;i<this.channels.length;i++){
if(this.channels[i]){
this.channels[i].cueSplitAtTime(t);
}
}
}}]);return Cea608Parser;}();exports.default=


Cea608Parser;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _vttparser=__webpack_require__(13);

var Cues={

newCue:function newCue(track,startTime,endTime,captionScreen){
var row;
var cue;
var indenting;
var indent;
var text;
var VTTCue=window.VTTCue||window.TextTrackCue;

for(var r=0;r<captionScreen.rows.length;r++)
{
row=captionScreen.rows[r];
indenting=true;
indent=0;
text='';

if(!row.isEmpty())
{
for(var c=0;c<row.chars.length;c++)
{
if(row.chars[c].uchar.match(/\s/)&&indenting)
{
indent++;
}else

{
text+=row.chars[c].uchar;
indenting=false;
}
}

row.cueStartTime=startTime;


if(startTime===endTime)
{
endTime+=0.0001;
}

cue=new VTTCue(startTime,endTime,(0,_vttparser.fixLineBreaks)(text.trim()));

if(indent>=16)
{
indent--;
}else

{
indent++;
}



if(navigator.userAgent.match(/Firefox\//))
{
cue.line=r+1;
}else

{
cue.line=r>7?r-2:r+1;
}
cue.align='left';

cue.position=Math.max(0,Math.min(100,100*(indent/32)+(navigator.userAgent.match(/Firefox\//)?50:0)));
track.addCue(cue);
}
}
}};



module.exports=Cues;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();







var _ewma=__webpack_require__(51);var _ewma2=_interopRequireDefault(_ewma);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


EwmaBandWidthEstimator=function(){

function EwmaBandWidthEstimator(hls,slow,fast,defaultEstimate){_classCallCheck(this,EwmaBandWidthEstimator);
this.hls=hls;
this.defaultEstimate_=defaultEstimate;
this.minWeight_=0.001;
this.minDelayMs_=50;
this.slow_=new _ewma2.default(slow);
this.fast_=new _ewma2.default(fast);
}_createClass(EwmaBandWidthEstimator,[{key:'sample',value:function sample(

durationMs,numBytes){
durationMs=Math.max(durationMs,this.minDelayMs_);
var bandwidth=8000*numBytes/durationMs,


weight=durationMs/1000;
this.fast_.sample(weight,bandwidth);
this.slow_.sample(weight,bandwidth);
}},{key:'canEstimate',value:function canEstimate()

{
var fast=this.fast_;
return fast&&fast.getTotalWeight()>=this.minWeight_;
}},{key:'getEstimate',value:function getEstimate()


{
if(this.canEstimate()){




return Math.min(this.fast_.getEstimate(),this.slow_.getEstimate());
}else{
return this.defaultEstimate_;
}
}},{key:'destroy',value:function destroy()

{
}}]);return EwmaBandWidthEstimator;}();exports.default=

EwmaBandWidthEstimator;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var





EWMA=function(){


function EWMA(halfLife){_classCallCheck(this,EWMA);

this.alpha_=halfLife?Math.exp(Math.log(0.5)/halfLife):0;
this.estimate_=0;
this.totalWeight_=0;
}_createClass(EWMA,[{key:"sample",value:function sample(

weight,value){
var adjAlpha=Math.pow(this.alpha_,weight);
this.estimate_=value*(1-adjAlpha)+adjAlpha*this.estimate_;
this.totalWeight_+=weight;
}},{key:"getTotalWeight",value:function getTotalWeight()

{
return this.totalWeight_;
}},{key:"getEstimate",value:function getEstimate()

{
if(this.alpha_){
var zeroFactor=1-Math.pow(this.alpha_,this.totalWeight_);
return this.estimate_/zeroFactor;
}else{
return this.estimate_;
}
}}]);return EWMA;}();exports.default=


EWMA;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=















function(){
if(typeof window!=='undefined'&&window.VTTCue){
return window.VTTCue;
}

var autoKeyword='auto';
var directionSetting={
'':true,
lr:true,
rl:true};

var alignSetting={
start:true,
middle:true,
end:true,
left:true,
right:true};


function findDirectionSetting(value){
if(typeof value!=='string'){
return false;
}
var dir=directionSetting[value.toLowerCase()];
return dir?value.toLowerCase():false;
}

function findAlignSetting(value){
if(typeof value!=='string'){
return false;
}
var align=alignSetting[value.toLowerCase()];
return align?value.toLowerCase():false;
}

function extend(obj){
var i=1;
for(;i<arguments.length;i++){
var cobj=arguments[i];
for(var p in cobj){
obj[p]=cobj[p];
}
}

return obj;
}

function VTTCue(startTime,endTime,text){
var cue=this;
var isIE8=function(){
if(typeof navigator==='undefined'){
return;
}
return /MSIE\s8\.0/.test(navigator.userAgent);
}();
var baseObj={};

if(isIE8){
cue=document.createElement('custom');
}else{
baseObj.enumerable=true;
}









cue.hasBeenReset=false;






var _id='';
var _pauseOnExit=false;
var _startTime=startTime;
var _endTime=endTime;
var _text=text;
var _region=null;
var _vertical='';
var _snapToLines=true;
var _line='auto';
var _lineAlign='start';
var _position=50;
var _positionAlign='middle';
var _size=50;
var _align='middle';

Object.defineProperty(cue,'id',extend({},baseObj,{
get:function get(){
return _id;
},
set:function set(value){
_id=''+value;
}}));


Object.defineProperty(cue,'pauseOnExit',extend({},baseObj,{
get:function get(){
return _pauseOnExit;
},
set:function set(value){
_pauseOnExit=!!value;
}}));


Object.defineProperty(cue,'startTime',extend({},baseObj,{
get:function get(){
return _startTime;
},
set:function set(value){
if(typeof value!=='number'){
throw new TypeError('Start time must be set to a number.');
}
_startTime=value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'endTime',extend({},baseObj,{
get:function get(){
return _endTime;
},
set:function set(value){
if(typeof value!=='number'){
throw new TypeError('End time must be set to a number.');
}
_endTime=value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'text',extend({},baseObj,{
get:function get(){
return _text;
},
set:function set(value){
_text=''+value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'region',extend({},baseObj,{
get:function get(){
return _region;
},
set:function set(value){
_region=value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'vertical',extend({},baseObj,{
get:function get(){
return _vertical;
},
set:function set(value){
var setting=findDirectionSetting(value);

if(setting===false){
throw new SyntaxError('An invalid or illegal string was specified.');
}
_vertical=setting;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'snapToLines',extend({},baseObj,{
get:function get(){
return _snapToLines;
},
set:function set(value){
_snapToLines=!!value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'line',extend({},baseObj,{
get:function get(){
return _line;
},
set:function set(value){
if(typeof value!=='number'&&value!==autoKeyword){
throw new SyntaxError('An invalid number or illegal string was specified.');
}
_line=value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'lineAlign',extend({},baseObj,{
get:function get(){
return _lineAlign;
},
set:function set(value){
var setting=findAlignSetting(value);
if(!setting){
throw new SyntaxError('An invalid or illegal string was specified.');
}
_lineAlign=setting;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'position',extend({},baseObj,{
get:function get(){
return _position;
},
set:function set(value){
if(value<0||value>100){
throw new Error('Position must be between 0 and 100.');
}
_position=value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'positionAlign',extend({},baseObj,{
get:function get(){
return _positionAlign;
},
set:function set(value){
var setting=findAlignSetting(value);
if(!setting){
throw new SyntaxError('An invalid or illegal string was specified.');
}
_positionAlign=setting;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'size',extend({},baseObj,{
get:function get(){
return _size;
},
set:function set(value){
if(value<0||value>100){
throw new Error('Size must be between 0 and 100.');
}
_size=value;
this.hasBeenReset=true;
}}));


Object.defineProperty(cue,'align',extend({},baseObj,{
get:function get(){
return _align;
},
set:function set(value){
var setting=findAlignSetting(value);
if(!setting){
throw new SyntaxError('An invalid or illegal string was specified.');
}
_align=setting;
this.hasBeenReset=true;
}}));







cue.displayState=undefined;

if(isIE8){
return cue;
}
}





VTTCue.prototype.getCueAsHTML=function(){

var WebVTT=window.WebVTT;
return WebVTT.convertCueToDOMTree(window,this.text);
};

return VTTCue;
}();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var _vttparser=__webpack_require__(13);var _vttparser2=_interopRequireDefault(_vttparser);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var cueString2millis=function cueString2millis(timeString){
var ts=parseInt(timeString.substr(-3));
var secs=parseInt(timeString.substr(-6,2));
var mins=parseInt(timeString.substr(-9,2));
var hours=timeString.length>9?parseInt(timeString.substr(0,timeString.indexOf(':'))):0;

if(isNaN(ts)||isNaN(secs)||isNaN(mins)||isNaN(hours)){
return-1;
}

ts+=1000*secs;
ts+=60*1000*mins;
ts+=60*60*1000*hours;

return ts;
};

var calculateOffset=function calculateOffset(vttCCs,cc,presentationTime){
var currCC=vttCCs[cc];
var prevCC=vttCCs[currCC.prevCC];



if(!prevCC||!prevCC.new&&currCC.new){
vttCCs.ccOffset=vttCCs.presentationOffset=currCC.start;
currCC.new=false;
return;
}



while(prevCC&&prevCC.new){
vttCCs.ccOffset+=currCC.start-prevCC.start;
currCC.new=false;
currCC=prevCC;
prevCC=vttCCs[currCC.prevCC];
}

vttCCs.presentationOffset=presentationTime;
};

var WebVTTParser={
parse:function parse(vttByteArray,syncPTS,vttCCs,cc,callBack,errorCallBack){

var re=/\r\n|\n\r|\n|\r/g;
var vttLines=String.fromCharCode.apply(null,new Uint8Array(vttByteArray)).trim().replace(re,'\n').split('\n');
var cueTime='00:00.000';
var mpegTs=0;
var localTime=0;
var presentationTime=0;
var cues=[];
var parsingError=void 0;
var inHeader=true;



var parser=new _vttparser2.default();

parser.oncue=function(cue){

var currCC=vttCCs[cc];
var cueOffset=vttCCs.ccOffset;


if(currCC&&currCC.new){
if(localTime){

cueOffset=vttCCs.ccOffset=currCC.start;
}else{
calculateOffset(vttCCs,cc,presentationTime);
}
}

if(presentationTime&&!localTime){

cueOffset=presentationTime+vttCCs.ccOffset-vttCCs.presentationOffset;
}

cue.startTime+=cueOffset-localTime;
cue.endTime+=cueOffset-localTime;


cue.text=decodeURIComponent(escape(cue.text));
if(cue.endTime>0){
cues.push(cue);
}
};

parser.onparsingerror=function(e){
parsingError=e;
};

parser.onflush=function(){
if(parsingError&&errorCallBack){
errorCallBack(parsingError);
return;
}
callBack(cues);
};


vttLines.forEach(function(line){
if(inHeader){

if(line.startsWith('X-TIMESTAMP-MAP=')){

inHeader=false;

line.substr(16).split(',').forEach(function(timestamp){
if(timestamp.startsWith('LOCAL:')){
cueTime=timestamp.substr(6);
}else if(timestamp.startsWith('MPEGTS:')){
mpegTs=parseInt(timestamp.substr(7));
}
});
try{


syncPTS=syncPTS<0?syncPTS+8589934592:syncPTS;

mpegTs-=syncPTS;

localTime=cueString2millis(cueTime)/1000;

presentationTime=mpegTs/90000;

if(localTime===-1){
parsingError=new Error('Malformed X-TIMESTAMP-MAP: '+line);
}
}
catch(e){
parsingError=new Error('Malformed X-TIMESTAMP-MAP: '+line);
}

return;
}else if(line===''){
inHeader=false;
}
}

parser.parse(line+'\n');
});

parser.flush();
}};



module.exports=WebVTTParser;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _logger=__webpack_require__(0);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

XhrLoader=function(){

function XhrLoader(config){_classCallCheck(this,XhrLoader);
if(config&&config.xhrSetup){
this.xhrSetup=config.xhrSetup;
}
}_createClass(XhrLoader,[{key:'destroy',value:function destroy()

{
this.abort();
this.loader=null;
}},{key:'abort',value:function abort()

{
var loader=this.loader;
if(loader&&loader.readyState!==4){
this.stats.aborted=true;
loader.abort();
}

window.clearTimeout(this.requestTimeout);
this.requestTimeout=null;
window.clearTimeout(this.retryTimeout);
this.retryTimeout=null;
}},{key:'load',value:function load(

context,config,callbacks){
this.context=context;
this.config=config;
this.callbacks=callbacks;
this.stats={trequest:performance.now(),retry:0};
this.retryDelay=config.retryDelay;
this.loadInternal();
}},{key:'loadInternal',value:function loadInternal()

{
var xhr,context=this.context;

if(typeof XDomainRequest!=='undefined'){
xhr=this.loader=new XDomainRequest();
}else{
xhr=this.loader=new XMLHttpRequest();
}
var stats=this.stats;
stats.tfirst=0;
stats.loaded=0;
var xhrSetup=this.xhrSetup;
if(xhrSetup){
try{
xhrSetup(xhr,context.url);
}catch(e){


xhr.open('GET',context.url,true);
xhrSetup(xhr,context.url);
}
}

if(!xhr.readyState){
xhr.open('GET',context.url,true);
}
if(context.rangeEnd){
xhr.setRequestHeader('Range','bytes='+context.rangeStart+'-'+(context.rangeEnd-1));
}
xhr.onreadystatechange=this.readystatechange.bind(this);
xhr.onprogress=this.loadprogress.bind(this);
xhr.responseType=context.responseType;


this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout);
xhr.send();
}},{key:'readystatechange',value:function readystatechange(

event){
var xhr=event.currentTarget,
readyState=xhr.readyState,
stats=this.stats,
context=this.context,
config=this.config;


if(stats.aborted){
return;
}


if(readyState>=2){

window.clearTimeout(this.requestTimeout);
if(stats.tfirst===0){
stats.tfirst=Math.max(performance.now(),stats.trequest);
}
if(readyState===4){
var status=xhr.status;

if(status>=200&&status<300){
stats.tload=Math.max(stats.tfirst,performance.now());
var data=void 0,len=void 0;
if(context.responseType==='arraybuffer'){
data=xhr.response;
len=data.byteLength;
}else{
data=xhr.responseText;
len=data.length;
}
stats.loaded=stats.total=len;
var response={url:xhr.responseURL,data:data};
this.callbacks.onSuccess(response,stats,context);
}else{

if(stats.retry>=config.maxRetry||status>=400&&status<499){
_logger.logger.error(status+' while loading '+context.url);
this.callbacks.onError({code:status,text:xhr.statusText},context);
}else{

_logger.logger.warn(status+' while loading '+context.url+', retrying in '+this.retryDelay+'...');

this.destroy();

this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay);

this.retryDelay=Math.min(2*this.retryDelay,config.maxRetryDelay);
stats.retry++;
}
}
}else{

this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),config.timeout);
}
}
}},{key:'loadtimeout',value:function loadtimeout()

{
_logger.logger.warn('timeout while loading '+this.context.url);
this.callbacks.onTimeout(this.stats,this.context);
}},{key:'loadprogress',value:function loadprogress(

event){
var stats=this.stats;
stats.loaded=event.loaded;
if(event.lengthComputable){
stats.total=event.total;
}
var onProgress=this.callbacks.onProgress;
if(onProgress){

onProgress(stats,this.context,null);
}
}}]);return XhrLoader;}();exports.default=


XhrLoader;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function getModuleDependencies (module) {
  var retval = []
  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/)
  if (!wrapperSignature) return retval

  var webpackRequireName = wrapperSignature[1]
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + '\\((\/\\*.*?\\*\/)?\s?.*?([\\.|\\-|\\w|\/|@]+).*?\\)', 'g') // additional chars when output.pathinfo is true
  var match
  while ((match = re.exec(fnString))) {
    retval.push(match[3])
  }
  return retval
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = [moduleId]
  var requiredModules = []
  var seenModules = {}

  while (modulesQueue.length) {
    var moduleToCheck = modulesQueue.pop()
    if (seenModules[moduleToCheck] || !sources[moduleToCheck]) continue
    seenModules[moduleToCheck] = true
    requiredModules.push(moduleToCheck)
    var newModules = getModuleDependencies(sources[moduleToCheck])
    modulesQueue = modulesQueue.concat(newModules)
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {}
  var sources = __webpack_require__.m

  var requiredModules = options.all ? Object.keys(sources) : getRequiredModules(sources, moduleId)
  var src = '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[id].toString() }).join(',') + '})(self);'

  var blob = new window.Blob([src], { type: 'text/javascript' })
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl

  return worker
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=hls.js.map