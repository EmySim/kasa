import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importer useParams depuis react-router-dom
import logementsData from "../data/logements.json";
import "./Logement.css";
import Header from "../components/Header/Header.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Tag from "../components/Tag/Tag.jsx";
import Details from "../components/Details/Details.jsx";
import Stars from "../components/Stars/Stars.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = logementsData.find((item) => item.id === id);
    setLogement(selectedLogement);
    // Console logs pour debugging
    console.log(logementsData);
    console.log(logementsData[0]);
    console.log(logementsData[0].id);
    console.log(logementsData[0].description);
    console.log(logementsData[0].title);
  }, [id]);
  /* dans un useeffect, il faut voir si l'id existe dans mon logementdata et oui, je dois extraire de quoi fiare le titre, la description les tags ...*/

  return (
    <div>
      <Header />
      <div className="logement-page-main-container">
      <Gallery />

      {/*<div>ID: {id}</div> {/* Utiliser la valeur de l'ID récupérée */}

      <div className="flat-page-container">
        
        <div className="flat-page-container-left">
          {logement && (
            <>
              <h1 className="titleLogement">{logement.title}</h1>
              <h2 className="location">{logement.location}</h2>
              <div className="tag-container">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} label={tag} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flat-page-container-rigth">
        {logement && <Details host={logement.host} />}

          <Stars rating={logement && parseInt(logement.rating)} />
          
        </div>
      </div>

      <div className="collapse-container-flat">
        <Collapse
          title={logementsData.description}
          content={logementsData.content}
        />
        <Collapse
          title={logementsData.equipement}
          content={logementsData.content}
        />
      </div>

      </div>
      <Footer />
    </div>
  );
}

export default Logement;