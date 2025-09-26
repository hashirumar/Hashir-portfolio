import React, { Fragment, useState } from "react";
import useHostname from "../Provider/HostnameProvider";

const AccordionReview = ({
  title = "",
  service = [],
  img = "",
  desc = "",
  name = "",
  subname = "",
}) => {
  const originalUrl = useHostname() + "/images/";

  const [toogle, settoogle] = useState(false);
  return (
    <Fragment>
      <div className="py-4 border-t !border-Mneutral_200">
        <div
          className="grid grid-cols-9 xl:grid-cols-7 cursor-pointer"
          onClick={() => settoogle(!toogle)}
        >
          <div className="col-span-3 xs:col-span-2">
            <h5 className="text__32 opacity-40">{title}</h5>
          </div>
          <div className="col-span-6 xs:col-span-7 xl:col-span-5 ">
            <div className="flex flex-wrap lg:grid lg:grid-cols-6">
              <div className="lg:col-span-2 w-full">
                <div
                  className={
                    "grid grid-cols-1 gap-3 pointer-events-none overflow-hidden transition-all duration-300 " +
                    (toogle ? "max-h-screen" : "max-h-0")
                  }
                >
                  <h5 className="text__24 opacity-40">Services</h5>
                  <div className="pb-6 lg:pb-0 grid grid-cols-1 gap-3">
                    {service.map((obj) => {
                      return (
                        <div className="">
                          <div className="text__18 uppercase inline-block px-[16px] xl:px-[24px] py-[6px] xl:py-[10px] rounded-full border !border-Mneutral_900">
                            {obj}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 w-full">
                <div className="flex justify-between items-start gap-3">
                  <div className="">
                    <div
                      className={
                        "grid grid-cols-1 gap-3 overflow-hidden transition-all duration-300 " +
                        (toogle ? "max-h-screen" : "max-h-0")
                      }
                    >
                      <div className="">
                        <img
                          src={img}
                          className="w-[99px] h-[99px] object-cover"
                          alt=""
                        />
                      </div>
                      <p className="text__24 opacity-80 pb-3 pointer-events-none">
                        {desc}
                      </p>
                    </div>
                    <div className="">
                      <h5 className="text__24">{name}</h5>
                      <p
                        className={
                          "text__18 opacity-40 pointer-events-none overflow-hidden transition-all duration-300 " +
                          (toogle ? "max-h-screen" : "max-h-0")
                        }
                      >
                        {subname}
                      </p>
                    </div>
                  </div>
                  <img
                    src={originalUrl + "Frame.svg"}
                    className={
                      "transition-all duration-300 lg:block hidden " +
                      (toogle ? "opacity-40 -rotate-90" : "")
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionReview;
