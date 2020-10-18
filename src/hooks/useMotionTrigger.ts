import { useState, useEffect } from "react";
import {
  useInView,
  InViewHookResponse,
  IntersectionOptions,
} from "react-intersection-observer";

const useMotionTrigger = (
  props: IntersectionOptions = { threshold: 0, triggerOnce: true }
): [InViewHookResponse[0], boolean] => {
  const [ref, inView] = useInView(props);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  return [ref, inView && isMounted];
};

export default useMotionTrigger;
