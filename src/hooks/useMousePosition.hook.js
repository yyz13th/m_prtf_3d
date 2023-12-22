import { useEffect, useRef, useState } from 'react';

const useMousePosition = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = (event.clientX - canvasRect.left) / canvasRect.width * 2 - 1;
      const y = -(event.clientY - canvasRect.top) / canvasRect.height * 2 + 1;
      setMousePosition({ x, y });
    };

    canvasRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      // canvasRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { canvasRef, mousePosition };
};

export default useMousePosition;