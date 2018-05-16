import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './Vision.module.scss';

const Component = ({ data: {
  loading,
  pages,
  refetch,
}}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  const { edges } = pages;
  const page = edges[0].node;

  return (
    <div className={styles.Vision}>
      <div className={styles.title}>{page.title}</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{__html: page.content}}
      />
    </div>
  );
}

export default graphql(gql`
  query PostsQuery {
    pages(where: {id: 317}) {
      edges {
        node {
          id
          pageId
          title
          date
          content
          author {
            name
            locale
          }
        }
      }
    }
  }
`)(Component);
