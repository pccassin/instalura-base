import styled, { css } from "styled-components";
import get from "lodash/get";

const ButtonGhost = css`
  background-color: transparent;
  color: ${ props => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

const ButtonDefault = css`
  background: ${ props => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  color: ${ props => {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${ ({ghost}) => ( ghost ? ButtonGhost : ButtonDefault )}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
