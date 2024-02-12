// hooks/useOnScreen.js
import { useEffect, useState } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
  // State to store whether element is visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures effect is only run on mount and unmount

  return isVisible;
};

export default useOnScreen;
