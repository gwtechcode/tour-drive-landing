import { FaWhatsapp } from "react-icons/fa6";
import * as S from "@/styles/header";

type HeaderProps = {
  brand: {
    name: string;
    tagline: string;
  };
  whatsappUrl: string;
};

export function Header({ brand, whatsappUrl }: HeaderProps) {
  return (
    <S.Header>
      <S.Brand href="#" aria-label={`${brand.name} - inicio`}>
        <S.Logomark>VR</S.Logomark>
        <span>
          <strong>{brand.name}</strong>
          <small>{brand.tagline}</small>
        </span>
      </S.Brand>

      <S.Nav aria-label="Navegacao principal">
        <a href="#veiculos">Veiculos</a>
        <a href="#cms">CMS</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <FaWhatsapp aria-hidden />
          Reservar
        </a>
      </S.Nav>
    </S.Header>
  );
}
