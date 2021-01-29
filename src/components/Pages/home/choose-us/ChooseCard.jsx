import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ChooseUsCard = ({ img, content }) => {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Card className="card">
          <CardContent>
            <CardContent>
              <img src={`/assets/choose-us-img-${img}.png`} alt={content} />
              <Typography variant="body1">{content}</Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ChooseUsCard;
