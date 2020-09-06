import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
  },
  avatar: {
    backgroundColor: deepPurple[500],
  },
});

const PostDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([5]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  // Random number generator
  function PicId(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function gen() {
    let x = Math.floor(Math.random() * Math.floor(2));
    let per;
    if (x === 1) {
      per = "men";
    } else {
      per = "women";
    }
    return per;
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>

      {comments.map((comment) => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img
                  src={`https://randomuser.me/api/portraits/thumb/${gen()}/${PicId(
                    88
                  )}.jpg`}
                  alt=""
                />
              </Avatar>
            }
            title={comment.name}
            subheader={comment.email}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {comment.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <br />
      <Button variant="outlined" color="primary" href={`/`}>
        Goto All Post
      </Button>
    </div>
  );
};

export default PostDetails;
