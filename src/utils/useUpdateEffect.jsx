import { useEffect, useRef } from "react";

export const useUpdateEffect = (callback, dependencies) => {
  const isMounted = useRef(() => false);

  useEffect(() => {
    if (!isMounted.current) return () => (isMounted.current = !isMounted.current);
    return callback();
  }, dependencies);
};
