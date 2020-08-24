import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import QuestionAlert from "./SweetAlert";
import { deletePost, getPostAndComents } from "../actions/Auth";
import Comments from './Comments'

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

function AlignItemsList({ listPosts,deletePost, getPostAndComents, post, comments }) {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [postDeleteID, setPostDeleteID] = useState(null);
  const [postID, setpostID] = useState(null);
  const userLocalStorageID = parseInt(localStorage.getItem("userId"));


  const handleOpenComments = (idPost) => (event) => {
    setOpen(true);
    
    getPostAndComents(idPost)
  };

  const handleClose = () => {
    setOpen(false);
    setpostID(null)
  };

  const handleClickDelete = (idPost) => (event) => {
    setShowAlert(true);
    setPostDeleteID(idPost);
  };

  const handleContinue = () => {
    setShowAlert(false);
  };

  const handleAccept = () => {
    setShowAlert(false);
    setPostDeleteID(null);
    deletePost(postDeleteID);
  };

  return (
    <List className={classes.root}>
      {listPosts ? (
        listPosts.map((post) => {
          let buttonEnabled = true;
          {
            buttonEnabled =
              post.EmployeeID === userLocalStorageID ? false : buttonEnabled;
          }
          let colorIcon = buttonEnabled ? "primary" : "secondary";

          return (
            <ListItem key={post.id} alignItems="flex-start">
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
              <IconButton
                disabled={buttonEnabled}
                aria-label="Delete"
                color={colorIcon}
                onClick={handleClickDelete(post.id)}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="Comments"  onClick={handleOpenComments(post.id)}>
             
                <ChatBubbleIcon />
              </IconButton>
            </ListItem>
            /*  <Divider variant="inset" component="li" /> */
          );
        })
      ) : (
        <h1>Empty List</h1>
      )}
      <div>
        {" "}
        {showAlert && (
          <QuestionAlert
            title="POST"
            handleAccept={handleAccept}
            handleContinue={handleContinue}
            question="Esta seguro de eliminar este post?"
          />
        )}
        {" "}
       
      </div>
      <div> {open && (
          <Comments
          open={open}
          handleClose={handleClose}
          idPost={postID}
          post={post}
          comments= {comments}
            
          />
        )}</div>

    </List>
  );
}

const mapStateToProps = ({ auth }) => {
  const { post, comments } = auth;
  return {
    post,
    comments,
  };
};


export default connect(mapStateToProps, { deletePost, getPostAndComents })(AlignItemsList);
