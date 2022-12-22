import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {
  const params = useParams();
  const { heroId } = params;
  const heroData = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  if (!heroData) {
    return <Navigate to="/marvel" />;
  }
  const heroImageUrl = `/assets/heroes/${heroId}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={heroImageUrl}
          alt={heroData.superhero}
          className="img-thumbnail"
        ></img>
      </div>
      <div className="col-8">
        <h3>{heroData.superhero}</h3>
        <ul className="list-groupp list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {heroData.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {heroData.publisher}
          </li>
          <li className="list-group-item">
            <b>First appereance:</b>
            {heroData.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3"> Characters</h5>
        <p>{heroData.characters}</p>
        <button className="btn btn-outline-primary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};
