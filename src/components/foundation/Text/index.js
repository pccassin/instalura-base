import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import  theme from '../../../theme'

const TextBase = styled.span`
  ${({variant}) => theme.typographyVariants[variant]}
`
export default function Text({ tag, variant, children }) {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

Text.defaultProps = {
    tag:'span',
    variant: 'paragraph1',
}
