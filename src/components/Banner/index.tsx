import * as S from "./styles";
import { Container } from "../../styles";

type Props = {
  infos: IRestaurants;
};

export const Banner = ({ infos }: Props) => {
  return (
    <Container>
      <S.Container style={{ backgroundImage: `url(${infos.capa})` }}>
        <S.Overlay />
        <S.Content>
          <S.Cooking>{infos.tipo}</S.Cooking>
          <S.Title>{infos.titulo}</S.Title>
        </S.Content>
      </S.Container>
    </Container>
  );
};
