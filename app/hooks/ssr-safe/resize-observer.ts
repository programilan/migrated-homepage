import { useEffect, useRef, useState } from "react";

export default function useResizeObserver<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [entry, setEntry] = useState<ResizeObserverEntry>();

  useEffect(() => {
    if (typeof window === "undefined") {
      // SSR: do nothing
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      setEntry(entry);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, entry] as const;
}
