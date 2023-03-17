import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Members Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error
        libero earum sit sunt aliquid.
      </Header>
      <section className="plans">
        <div className="container    plans-container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h3>Features</h3>
                {features.map(({ feature, available }, i) => {
                  return (
                    <p key={i} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn ln"> Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
