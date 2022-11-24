import { useEffect, useState } from "react";

export const cleanObject = (obj: object) => {
  const res = { ...obj };
  // Object.keys(res).forEach((key) => {
  //   const value = res[key];
  //   if (isFalsy(value)) {
  //     delete res[key];
  //   }
  // });
  return res;
};

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// export const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       func(...param);
//     }, delay);
//   };
// };

export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
