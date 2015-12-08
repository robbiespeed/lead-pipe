'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function argsToArray(args) {
  var array = [];
  for (var i = 0; i < args.length; i++) {
    array[i] = args[i];
  }
  return array;
}

function LeadPipe() {
  var leadStack = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  if (this instanceof LeadPipe) {
    this.leadStack = arrguments.length === 1 && Array.isArray(leadStack) ? leadStack : argsToArray(arguments);
  } else {
    return new (_bind.apply(LeadPipe, [null].concat(_toConsumableArray(argsToArray(arguments)))))();
  }
}

LeadPipe.prototype.flow = function () {
  var liquid = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  var leadStack = this.leadStack;
  var i = 0;
  liquid = liquid ? liquid : leadStack[i++];

  if (leadStack && Array.isArray(leadStack) && i < leadStack.length) {
    var lead = undefined;

    while (i < leadStack.length) {
      lead = leadStack[i++];
      if (typeof lead !== 'function') {
        if (Array.isArray(lead) && i < leadStack.length && typeof leadStack[i] === 'function') {
          lead = lead.map(function (fragment) {
            return fragment instanceof LeadPipe ? fragment.flow(liquid) : fragment;
          });
          liquid = leadStack[i++].apply(leadStack, _toConsumableArray(lead));
        } else {
          liquid = lead;
        }
      } else {
        liquid = lead(liquid);
      }
    }
  }
  return liquid;
};

exports['default'] = LeadPipe;
module.exports = exports['default'];