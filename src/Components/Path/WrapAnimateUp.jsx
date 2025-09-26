import React, { Fragment } from "react";
const WrapAnimateUp = ({ step, children, direction = "bottom" }) => {
  return (
    <Fragment>
      <div className="overflow-hidden relative">
        <div className="opacity-0 pointer-events-none w-full">{children}</div>
        <div
          className={
            "absolute w-full transition-all duration-700 " +
            (direction == "bottom"
              ? step > 3
                ? "left-0 top-0 "
                : "left-0 top-[120%]"
              : direction == "left"
              ? step > 3
                ? "left-0 top-0 "
                : "-left-[120%] top-0"
              : direction == "right"
              ? step > 3
                ? "right-0 top-0 "
                : "-right-[120%] top-0"
              : step > 3
              ? "left-0 top-0 "
              : "left-0 -top-[120%]")
          }
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default WrapAnimateUp;
