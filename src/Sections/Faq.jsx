import { Element } from "react-scroll";
import { faq } from "../Constants";
import FaqItem from "../Components/FaqItem";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container realtive z-2 py-28">
          <div className="flex flex-col justify-center items-center mb-10">
            <h3 className="h3 text-center max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didnt kill the cat, it gave it answers
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              {" "}
              You've got questions, we've got answers
            </p>
          </div>
          <div className="rounded-half relative left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img
                src={"/images/faq-logo.svg"}
                className="size-1/2"
                alt="logo"
              />
            </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />

          <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
            
            <div className="container flex gap-10 max-lg:block">
              <div className="relative flex-1 pt-24">
                {faq.slice(0, halfLength).map((item, index) => (
                  <FaqItem key={item.id} item={item} index={index < 9 ? index + 1 : index} />
                ))}
              </div>

              <div className="relative flex-1 lg:pt-24">
                {faq.slice(halfLength).map((item, index) => (
                  <FaqItem
                    key={item.id}
                    item={item}
                    index={index < 9 ? halfLength + index + 1 : halfLength + index}
                    // halfLength + index makes the indexes continue to the 2nd column instead of starting again from 00 in the 2nd column
                  />
                ))}
              </div>
            </div>
            {/* Demarketing line */}
            <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
