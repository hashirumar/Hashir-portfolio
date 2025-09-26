import React, { Fragment } from "react";
import AccordionReview from "./AccordionReview";
import { Container } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";

const WrapReviews = () => {
  const originalUrl = useHostname() + "/images/";
  return (
    <Fragment>
      <section>
        <Container>
          <h5 className="text__24 opacity-40 mb-[36px]">CLIENTS REVIEWS</h5>
          {[
            {
              title: "UNIQLO",
              service: ["COMMERCIAL PRODUCT", "FASHION"],
              img: originalUrl + "Client logo.png",
              desc: "Working with Jacob was a breeze — he understands brand direction intuitively. The photos he delivered for our capsule collection launch were not only stunning but also aligned perfectly with our visual identity.",
              name: "Michelle Yeo",
              subname: "Brand Manager at UNIQLO (SEA)",
            },
            {
              title: "GUCCI",
              service: ["FASHION"],
              img: originalUrl + "asdasd.png",
              desc: "Jacob understood our brand language right away. He brought our moodboard to life and gave us assets we used across the entire campaign.",
              name: "Jaxson Philips Yeo",
              subname: "Creative Director at GUCCI",
            },
            {
              title: "SONY",
              service: ["COMMERCIAL PRODUCT", "PORTRAIT"],
              img: originalUrl + "sdasd.png",
              desc: "Jacob made me feel completely comfortable in front of the camera. The photos didn’t just look like me — they felt like me.",
              name: "Charlie Ekstrom Bothman",
              subname: "Creative Director at Sony",
            },
            {
              title: "ZALORA",
              service: ["COMMERCIAL PRODUCT", "PORTRAIT"],
              img: originalUrl + "dssds.png",
              desc: "His eye for detail is unmatched. It’s not just fashion photography — it’s storytelling through light and fabric.",
              name: "Mira Curtis",
              subname: "Fashion Label at Zalora",
            },
          ].map((obj) => {
            return (
              <AccordionReview
                title={obj.title}
                service={obj.service}
                img={obj.img}
                desc={obj.desc}
                name={obj.name}
                subname={obj.subname}
              />
            );
          })}
        </Container>
      </section>
    </Fragment>
  );
};

export default WrapReviews;
