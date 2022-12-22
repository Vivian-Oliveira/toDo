import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import * as S from "./styled";

const Card = (props) => {
  return (
    <S.CardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia alt={props.title} height={"150px"} title={props.title} />
        <S.Content>
          <Typography align={"center"}>{props.title.toUpperCase()}</Typography>
        </S.Content>
      </CardActionArea>
    </S.CardContainer>
  );
};

export default Card;
