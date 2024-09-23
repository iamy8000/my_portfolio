import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";
export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  };
  return (
    <div className={twMerge("flex", className)} style={maskStyle}>
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
        {/* {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};
