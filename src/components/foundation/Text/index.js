import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import theme from "../../../theme";
import { propToStyle } from "../../../theme/utils/propToStyle";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";


const TextBase = styled.span`
  ${({ variant }) => theme.typographyVariants[variant] }

  /* ${breakpointsMedia({
        xs: css`
          ${theme.typographyVariants.titleXS}
        `,
        
        sm: css`
          ${theme.typographyVariants.title}
        `,
    })} */

  ${propToStyle("textAlign")}
  ${propToStyle("marginBottom")}
  ${propToStyle("margin")}
`;
export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
