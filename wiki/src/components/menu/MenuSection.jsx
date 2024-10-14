import { useRef } from "react";
import { memo } from "react";
import { useState, useEffect } from "react";
function MenuSection(props) {
  useEffect(() => {
    if (window) {
      if (window.globalCount === undefined) {
        window.globalCount = 0;
      }
      console.log(window.globalCount++);
    }
  });
  const drop = useRef(props.drop);
  function toggleDrop() {
    drop.current = !drop.current;
  }
  const Content = memo(function Content() {
    useEffect(() => {
    if (window) {
      if (window.globalCount === undefined) {
        window.globalCount = 0;
      }
      console.log(window.globalCount++);
    }
  });
    if (!drop.current) return null;
    return <div className="mt-2 mb-4">{props.children}</div>;
  });
  return <div>
      <div className="flex items-center cursor-pointer transition-colors select-none hover:text-tkm_purple" onClick={toggleDrop}>
        <span className="font-bold">#</span>
        <div className="ml-1.5 text-lg">{props.title}</div>
      </div>
      <Content />
    </div>;
}
export default MenuSection;