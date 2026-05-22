import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import * as S from "@/styles/vehicle-card";

type Vehicle = {
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  features: string[];
};

type VehicleCardProps = {
  vehicle: Vehicle;
  whatsappUrl: string;
};

export function VehicleCard({ vehicle, whatsappUrl }: VehicleCardProps) {
  return (
    <S.Card>
      <S.ImageWrap>
        <Image src={vehicle.image} alt={vehicle.name} fill sizes="(max-width: 768px) 100vw, 50vw" />
        <S.Category>{vehicle.category}</S.Category>
      </S.ImageWrap>

      <S.CardBody>
        <S.CardTitle>
          <div>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.description}</p>
          </div>
          <strong>{vehicle.price}</strong>
        </S.CardTitle>

        <S.FeatureList>
          {vehicle.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </S.FeatureList>

        <S.CardAction href={whatsappUrl} target="_blank" rel="noreferrer">
          Consultar disponibilidade
          <FaArrowRight aria-hidden />
        </S.CardAction>
      </S.CardBody>
    </S.Card>
  );
}
