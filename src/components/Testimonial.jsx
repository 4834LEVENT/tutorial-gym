import SectionHeader from "./SectionHeader";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import Card from "../UI/Card";
import { useState } from "react";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const handleNextTestimonial = () => {
    setIndex(index + 1);

    index >= testimonials.length - 1 && setIndex(0);
  };
  const handlePrevTestimonial = () => {
    setIndex(index - 1);

    index <= 0 && setIndex(testimonials.length - 1);
  };
  return (
    <div>
      <section className="testimonials">
        <div className="container testimonials-container">
          <SectionHeader
            icon={<ImQuotesLeft />}
            title="Testimonials"
            className="testimonials-head"
          />
          <Card className="testimonial">
            <div>
              <img src={avatar} alt={name} className="testimonial-avatar" />
              <p className="testimonial-quote">{`"${quote}"`}</p>
              <small className="testimonail-title">{job}</small>
            </div>
          </Card>
          <div className="testimonial-btn-container">
            <button
              className="testimonials-btn"
              onClick={handlePrevTestimonial}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="testimonials-btn"
              onClick={handleNextTestimonial}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
