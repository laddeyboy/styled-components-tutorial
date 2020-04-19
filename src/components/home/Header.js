import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <div>
        <Banner
          greeting={"Welcome to"}
          title={"beachwalk resort"}
          text={
            "Lucas ipsum dolor sit amet moff cade antilles coruscant organa r2-d2 sith coruscant darth sidious. Moff maul owen maul. Qui-gon windu ahsoka luuke."
          }
        >
          <PrimaryBtn t="1rem">View Details</PrimaryBtn>
          {/* <PrimaryBtn as="a" href="https://www.google.com">
            View Details
          </PrimaryBtn> */}
        </Banner>
      </div>
    </Hero>
  );
};

export default Header;
