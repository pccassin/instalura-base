import styled, { css } from "styled-components";
import get from "lodash/get";
import theme from '../../../theme';
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";
import { propToStyle } from "../../../theme/utils/propToStyle";

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

    //${theme.typographyVariants.smallestException}
    
    ${ ({ghost}) => ( ghost ? ButtonGhost : ButtonDefault )}
    &:hover,
    &:focus {
      opacity: 0.5;
    }

    ${breakpointsMedia({
        xs: css`
          ${theme.typographyVariants.smallestException}
        `,
        
        sm: css`
          ${theme.typographyVariants.paragraph1}
        `,
    })}

    ${propToStyle("margin")}
    ${propToStyle("display")}

  `;
