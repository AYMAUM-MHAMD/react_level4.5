import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Avatar, Button, ButtonGroup, Stack, TextField } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const AddPost = () => {
  const theme = useTheme();
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Tooltip
        sx={{ position: "fixed", left: "22px", bottom: "22px" }}
        title="Add Post"
      >
        <Fab
          onClick={() => {
            setisOpen(true);
          }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        // @ts-ignore
        sx={{}}
        open={isOpen}
        onClose={() => {
          setisOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "22px",
            borderRadius: "6px",
            position: "fixed",
            bgcolor:
              // @ts-ignore
              theme.palette.background.default,
            width: {xs: "97%", sm: 377},
          }}
        >
          <Typography
            sx={{ textAlign: "center", mb: 1 }}
            variant="h6"
            component="h2"
          >
            Careat a post
          </Typography>

          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://i.pinimg.com/474x/1b/61/45/1b614533bde5ad1760664fd6c35dd895.jpg"
            />
            <Typography variant="body1">Layla Hassan</Typography>
          </Stack>

          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={3}
            placeholder="What is in your mind ..."
            variant="standard"
          />

          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup sx={{width: "100%"}} variant="contained" aria-label="Basic button group">
            <Button sx={{flexGrow: 1}}>Past</Button>
            <Button><DateRangeIcon/></Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
