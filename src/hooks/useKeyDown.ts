import { useState, useEffect } from 'react';

export default function useKey(eventKey: string) {
  const [ isPressed, setIsPressed ] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === eventKey) {
        setIsPressed(true);
      }
    };

    document.body.addEventListener('keydown', onKeyDown);
      
    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
      setIsPressed(false);
    };
  });

  return isPressed;
}