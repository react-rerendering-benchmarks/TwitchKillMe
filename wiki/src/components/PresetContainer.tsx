import { Preset, PresetType } from "../types";
import { ResolveDisplay } from "./presets";
export default function PresetContainer({
  id,
  item
}: {
  id: string;
  item: Preset;
}) {
  console.log(window.globalCount++);
  return <div className="w-full rounded-md bg-tkm_black text-tkm_white_dark">
      <div className="text-xs">ID: {id}</div>
      <div>
        <ResolveDisplay preset={item.preset} reward={item.reward} type={0} />
      </div>
    </div>;
}