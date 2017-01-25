var bind = function(func, context){
  // save original function
  var originalFunc = func;
  // save context
  var leContext = context;
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var moreArgs = Array.prototype.slice.call(arguments);
    return originalFunc.apply(leContext, args.concat(moreArgs));
  }
};

Function.prototype.bind = function(context) {
  var originalFunc = this;
  var leContext = context;
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    var moreArgs = Array.prototype.slice.call(arguments);
    return originalFunc.apply(leContext, args.concat(moreArgs));
  }
};
