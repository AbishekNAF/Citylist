import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function refreshCity(setData) {
  fetch("https://648bfca08620b8bae7ec029b.mockapi.io/cities", { method: "GET" })
    .then((res) => res.json())

    .then((city) => {
      {
        setData(city);
        alert("City has been Deleted");
      }
    });
}

export default function Cardd({
  name,
  address,
  description,
  img,
  id,
  setData,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [like, setLike] = useState(0);
  useEffect(() => {
    console.log("Total Click", like);
  }, []);

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="blue">
          PINCODE-{address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="likebutton"
          onClick={() => setLike(like + 1)}
          color="primary"
        >
          {" "}
          <Badge badgeContent={like} color="primary">
            ❤
          </Badge>
          <IconButton
            aria-label="editcity"
            sx={{ ml: "auto" }}
            onClick={() => navigate(`/CityList/Edit/${id}`)}
          >
            <EditIcon />
          </IconButton>
        </IconButton>
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="delete product"
            sx={{ ml: "auto" }}
            onClick={() => {
              fetch(
                `https://648bfca08620b8bae7ec029b.mockapi.io/cities/${id}`,
                {
                  method: "DELETE",
                }
              ).then(() => {
                refreshCity(setData);
              });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
