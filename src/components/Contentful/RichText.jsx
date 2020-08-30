import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContentfulAsset from './ContentfulAsset';
import EntryHyperlink from './EntryHyperlink';

function RichText(props) {
  const { json } = props;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => <ContentfulAsset node={node} />,
      [BLOCKS.QUOTE]: (node, children) => <blockquote className="blockquote"><p>{children}</p></blockquote>,
      [INLINES.ENTRY_HYPERLINK]:
        (node, children) => <EntryHyperlink node={node}>{children}</EntryHyperlink>,
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" rel="nofollow noreferrer">{children}</a>,
    },
  };
  return (
    <main>
      { documentToReactComponents(json, options) }
    </main>
  );
}

export default RichText;

RichText.propTypes = {
  json: PropTypes.objectOf(PropTypes.any).isRequired,
};
