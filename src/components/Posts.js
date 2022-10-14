import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container d-flex p-2 bd-highlight mb-4">
      {posts.map((post) => (
        <Card style={{ width: "18rem" }} key={post.id}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
