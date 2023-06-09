import { GiLaurelCrown } from "react-icons/gi";
import SectionHeader from "./SectionHeader";

import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionHeader icon={<GiLaurelCrown />} title="Programs" />

        <div className="programs-wrapper">
          {programs.map(({ id, icon, info, path, title }) => {
            return (
              <Card className={"programs-program"} key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
