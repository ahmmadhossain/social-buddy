import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
  },
});

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/postDetails/${post.id}`}>
              <Button size="small">See Comments</Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
