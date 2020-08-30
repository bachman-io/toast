import React from 'react';

function EntryHyperlink(props) {
  const { node, children } = props;
  const type = node.data.target.sys.contentType.sys.id;
  if (type === 'blogPost' || type === 'review') {
    const slug = node.data.target.fields.slug['en-US'];
    if (type === 'blogPost') {
      const date = new Date(node.data.target.fields.publishDate['en-US']);
      const fullURI = `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString('en', { minimumIntegerDigits: 2 })}-${date.getDate().toLocaleString('en', { minimumIntegerDigits: 2 })}-${slug}`;
      return <a href={`/blog/${fullURI}`} target="_blank" rel="noreferrer">{children}</a>;
    }
    if (type === 'review') {
      return <a href={`/reviews/${slug}`} target="_blank" rel="noreferrer">{children}</a>;
    }
  }
}

export default EntryHyperlink;
