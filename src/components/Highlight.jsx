import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Highlight() {
  useGSAP(() => {
    gsap.to(
      "#title",
      {
        opacity: 1,
        y: -40,
        delay: 3,
      },
      []
    );
  });
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Highlight;
