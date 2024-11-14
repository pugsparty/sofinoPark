import React from 'react';
import svg from '../../img/15re_shop.svg';
import svg2 from '../../img/education_location.svg';
import svg3 from '../../img/Tilda_Icons_37_Finance_technologies_moneybag.svg';
import '../../Styles/CompanyDescriptionPageStyle.css';
export default function CompanyDescriptionPage(): React.JSX.Element {
  return (
    <div className="container">
      <div className="imgContainer">
        <div className="locationSvg">
          <img src={svg} className="svg"></img>
          <h2 className="locationText">
            Экологически чистая локация. 20 км от Мкад по Калужскому шоссе и 15 км до центра
            Подольска, на правом берегу реки Пахры. Московская прописка
          </h2>
        </div>
        <div className="infrastructureSvg">
          <img src={svg2} className="svg"></img>
          <h2 className="infrastructureText">
            Рядом располагаются супермаркеты и гипермаркеты, торговые центры и строительные
            магазины, школы, детские сады, аптеки и больница. Так же, на территории поселка есть
            спортивная площадка, гостевая парковка, детская площадка и прогулочные зоны
          </h2>
        </div>
        <div className="priceSvg">
          <img src={svg3} className="svg"></img>
          <h2 className="priceText">
            Участки с домами по цене от 15.2 млн. Для первых покупателей стоимость от 14.4 млн.
          </h2>
        </div>
      </div>
    </div>
  );
}
