import { useState, useEffect } from 'react';

function useFadeIn(duration = 500) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = () => {
      let start = null;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;

        setOpacity(Math.min(elapsed / duration, 1));

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    fadeIn();

    return () => {
      setOpacity(0);
    };
  }, [duration]);

  return { opacity };
}

export default useFadeIn;