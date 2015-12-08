
function argsToArray (args) {
  let array = [];
  for (let i = 0; i < args.length; i++) {
    array[i] = args[i];
  }
  return array;
}

function LeadPipe (leadStack = null) {
  if (this instanceof LeadPipe) {
    this.leadStack = arrguments.length === 1 && Array.isArray(leadStack) ?
    leadStack : argsToArray(arguments);
    
  }
  else {
    return new LeadPipe(...argsToArray(arguments));
  }
}

LeadPipe.prototype.flow = function (liquid = null) {
  let leadStack = this.leadStack;
  let i = 0;
  liquid = liquid ? liquid : leadStack[i++];
  
  if (leadStack && Array.isArray(leadStack) && i < leadStack.length) {
    let lead;
    
    while (i < leadStack.length) {
      lead = leadStack[i++];
      if (typeof lead !== 'function') {
        if (Array.isArray(lead) && i < leadStack.length &&
        typeof leadStack[i] === 'function') {
          lead = lead.map((fragment) => {
            return fragment instanceof LeadPipe ? 
            fragment.flow(liquid) : fragment;
          });
          liquid = leadStack[i++](...lead);
        }
        else {
          liquid = lead;
        }
      }
      else {
        liquid = lead(liquid);
      }
    }
  }
  return liquid;
};

export default LeadPipe;
