import styled from "styled-components";
import { fonts, colors } from "../../constants";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 15px 0;
`;

export const EventDateBox = styled.View`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;
  align-items: center;
`;

export const EventDate = styled.View`
  padding: 10px;
  background-color: ${colors.CALENDAR_COLOR};
  border-radius: 5px;
`;

export const Day = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  color: ${colors.WHITE};
`;

export const Month = styled.Text`
  font-size: ${fonts.FONT_SIZE_SMALL};
  color: ${colors.WHITE};
`;

export const FavEvent = styled.View`
  background-color: ${colors.FAV_COLOR};
  border-radius: 100;
  width: 50px;
  height: 50px;
  margin-top: 10;
`;

export const EventCardInfo = styled.View`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 75%;
`;

export const EventImage = styled.View`
  width: 100%;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10px;
  overflow: hidden;
`;

export const TitleView = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 10px;
`;

export const EventTitle = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-weight: ${fonts.FONT_WEIGHT_HEAVY};
  color: ${colors.WHITE};
`;

export const eventCardStyle = {
  borderTopLeftRadius: 10,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 10,
  height: 250,
  justifyContent: 'flex-start',
};

export const eventImageStyle = {
  width: '100%',
  height: 150,
  justifyContent: 'flex-end'
}

export const EventMiniInfoView = styled.View`
  width: 100%;
  padding: 10px;
`

export const eventInfoRow = {
  justifyContent: 'space-between'
}