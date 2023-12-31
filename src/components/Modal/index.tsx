import { useDispatch } from "react-redux";

import { add, open } from "../../store/reducers/cart";

import { formatPrice } from "../../utils";

import close from "../../assets/close.png";

import * as S from "./styles";
import { Container } from "../../styles";

type Props = {
  isVisible: boolean;
  handleModal: () => void;
  details: IDish | undefined;
};

export const Modal = ({ isVisible, handleModal, details }: Props) => {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(add(details!));
    dispatch(open());
    handleModal();
  };

  return isVisible ? (
    <Container>
      <S.Modal>
        <S.Overlay onClick={handleModal}></S.Overlay>
        <S.ModalContent>
          <S.Close
            onClick={handleModal}
            src={close}
            alt="Ícone para fechar modal"
          />
          <S.ContentImg>
            <img src={details?.foto} alt={details?.nome} />
          </S.ContentImg>
          <S.InfosContent>
            <h3>{details?.nome}</h3>
            <S.Description>
              <p>{details?.descricao}</p>
              <span>
                Serve:{" "}
                {details?.porcao === "1 pessoa"
                  ? `${details.porcao}`
                  : `de ${details?.porcao}`}{" "}
              </span>
            </S.Description>

            <S.Button onClick={addCart}>
              Adicionar ao carrinho - {formatPrice(details?.preco)}
            </S.Button>
          </S.InfosContent>
        </S.ModalContent>
      </S.Modal>
    </Container>
  ) : null;
};
