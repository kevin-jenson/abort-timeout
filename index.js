const ato = (func) => {
  let timeout;

  return {
      set: (ms, ...args) => {
          timeout = setTimeout(func, ms, ...args);
      },
      cancel: () => {
          if (timeout) {
              clearTimeout(timeout);
          }
      }
  };
};

export default ato;