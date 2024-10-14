import { useEffect } from "react";

export function SummonPresetValues(reward) {
  useEffect(() => {
    if (window) {
      if (window.globalCount === undefined) {
        window.globalCount = 0;
      }
      console.log(window.globalCount++);
    }
  });
  return <h1>Summon Preset</h1>;
}
export function SummonPresetEditable(reward) {
  useEffect(() => {
    if (window) {
      if (window.globalCount === undefined) {
        window.globalCount = 0;
      }
      console.log(window.globalCount++);
    }
  });
  return <h1>Summon Preset</h1>;
}