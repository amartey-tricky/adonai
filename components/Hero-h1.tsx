import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function HeroH1() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Welcome> to Adonai", "&amp; The church of your destiny"],
      typeSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1 className="text-2xl text-slate-900">
      <span ref={el} />
    </h1>
  );
}
