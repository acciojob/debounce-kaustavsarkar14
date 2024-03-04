function debounce(callback, delay, immediate = false) {
   let timer;

  return function(...args) {
    const context = this;

    const later = () => {
      timer = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    const callNow = immediate && !timer;
    
    clearTimeout(timer);

    if (callNow) {
      callback.apply(context, args);
    }

    timer = setTimeout(later, delay);
  };
  }
  
  module.exports = debounce;
