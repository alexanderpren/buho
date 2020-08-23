import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ listPosts, userID }) {
  const classes = useStyles();

  const userLocalStorageID = parseInt(localStorage.getItem("userId"));

  return (
    <List className={classes.root}>
      {listPosts ? (
        listPosts.map((post) => {
          let buttonEnabled = false;
          {
            buttonEnabled =
              post.EmployeeID === userLocalStorageID
                ? (buttonEnabled = true)
                : buttonEnabled;
          }

          return (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {post.author}
                    </Typography>
                    {post.title}
                  </React.Fragment>
                }
              />
              {buttonEnabled ? (
                <IconButton aria-label="Delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              ) : (
                <IconButton disabled aria-label="Delete" color="primary">
                  <DeleteIcon />
                </IconButton>
              )}
              <IconButton aria-label="Comments">
                <ChatBubbleIcon />
              </IconButton>
            </ListItem>
            /*  <Divider variant="inset" component="li" /> */
          );
        })
      ) : (
        <h1>Empty List</h1>
      )}
    </List>
  );
}
