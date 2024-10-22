import {ForwardedRef} from 'react';

function mergeRefs(...refs: ForwardedRef<T>[]) {
  return (node: T) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
// react-merge-refs 라이브러리 써도됨

export {mergeRefs};
