import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div className="Home">
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://i0.wp.com/thetravelertwins.com/wp-content/uploads/2020/07/special-places-in-india.png?fit=500%2C500&ssl=1"
            alt="Famous Place's"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Welcome to India's Famous Places
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
