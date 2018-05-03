import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function Posts({ data: {
  loading,
  posts,
  refetch,
}}) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const { edges } = posts;
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>{edges && edges.map(({ node: post }) =>
        <li key={post.id}>{post.title + '-' + post.id}</li>
      )}</ul>
    </div>
  );
}

export default graphql(gql`
  query PostsQuery {
    posts {
      edges {
        node {
          id
          postId
          title
          date
        }
      }
    }
  }
`)(Posts);
