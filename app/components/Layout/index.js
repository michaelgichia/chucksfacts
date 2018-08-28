/**
 *
 * Column
 *
 */
import styled, { css } from 'styled-components';

const sizes = {
  largeScreen: 3000,
  desktop: 1200,
  miniLaptop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const Column = styled.div`
	display: block;
	float: left;
	flex: 0 0 auto;
	position: relative;
	box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;

  ${media.largeScreen`width: 20%;`}
  ${media.desktop`width: 25%;`}
  ${media.miniLaptop`width: 33.33333333%;`}
  ${media.tablet`width: 50%;`}
  ${media.phone`width: 100%;`}
`;

export const Row = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  display: block;
  box-sizing: border-box;

  &::before {
    content: '';
    display: table;
    text-decoration: inherit;
    vertical-align: inherit;
    box-sizing: border-box;
  }
`;

export default Row;
