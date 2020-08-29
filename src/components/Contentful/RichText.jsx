import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function RichText(props) {
  const { json } = props;
  return (
    <main>
      { documentToReactComponents(json) }
    </main>
  );
}

export default RichText;

RichText.propTypes = {
  json: PropTypes.objectOf(PropTypes.any).isRequired,
};
