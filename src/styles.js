import { css } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ecedec",
  lightGrey: "#f7f7f7"
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
};

export const setFlex = ({ x, y }) => {
  return `display: flex; align-items: ${y}; justify-content: ${x}`;
};

const defaultImg =
  "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=timsrgb&dpr=2&w=500";
export const setBackground = ({
  img = defaultImg,
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
  url(${img}) center/cover fixed no-repeat;`;
};

export const setRem = (number = 16) => {
  const defaultPxSize = 16; // this is setting default rem to 16 px;
  // this means that any 'px' size is converted to rem.  60px = 3.75rem
  return `${number / defaultPxSize}rem`; //16/16 = 1rem
};

export const setLetterSpacing = (number = 2) => {
  // default 2 = 2px;
  return `letter-spacing: ${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `border: ${width} ${style} ${color}`;
};

// MEDIA QUERY HELPER FUNCTION
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};
