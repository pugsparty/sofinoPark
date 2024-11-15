import React from 'react';
import svg from '../../img/15re_shop.svg';
import svg2 from '../../img/education_location.svg';
import svg3 from '../../img/Tilda_Icons_37_Finance_technologies_moneybag.svg';
import svg4 from '../../img/GalochkaSvg.svg';
import svg5 from '../../img/CompanyDescriptionImg.jpeg';
import svg6 from '../../img/BabyArea.jpg';
import '../../Styles/CompanyDescriptionPageStyle.css';
export default function CompanyDescriptionPage(): React.JSX.Element {
  return (
    <>
      <div className='mainContainer'>
        <h1 className="titleAdvantages">ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h1>
        <div className="container">
          <div className="imgContainer">
            <div className="locationSvg">
              <img src={svg2} className="svg"></img>
              <h2 className="locationText">
                Экологически чистая локация. 20 км от Мкад по Калужскому шоссе и 15 км до центра
                Подольска, на правом берегу реки Пахры. Московская прописка
              </h2>
              <div className="spanText">Располжение</div>
            </div>
            <div className="infrastructureSvg">
              <img src={svg} className="svg"></img>
              <h2 className="infrastructureText">
                Рядом располагаются супермаркеты и гипермаркеты, торговые центры и строительные
                магазины, школы, детские сады, аптеки и больница. Так же, на территории поселка есть
                спортивная площадка, гостевая парковка, детская площадка и прогулочные зоны
              </h2>
              <div className="spanText">Инфраструктура</div>
            </div>
            <div className="priceSvg">
              <img src={svg3} className="svg"></img>
              <h2 className="priceText">
                Участки с домами по цене от 15.2 млн. Для первых покупателей стоимость от 14.4 млн.
              </h2>
              <div className="spanText">Стоимость</div>
            </div>
          </div>
          <div className="withoutPodryad">
            <h1>Земельные участки без подряда</h1>
            <h2>Стоимость земли без подряда 800 тыс руб/сотка (строитесь самостоятельно)</h2>
            <br></br>
            <span>
              <img src={svg4}></img>при бронировании участка с подрядом - проект коттеджа в подарок
            </span>
            <span>
              <img src={svg4}></img>строительство коттеджа возможно по своему проекту
            </span>
            <img className="imgWithoutPodryad" src={svg5}></img>
          </div>
          <div className="advantages">
            <img className="imgAdvantages" src={svg6}></img>
            <h2 className="advantagesTitle">
              <img className="imgTitle" src={svg4}></img>Чистота сделки
            </h2>
            <span className="advantagesText">
              Земля находится в собственности, сделка происходит с продавцом по Договору
              купли-продажи
            </span>
            <h2 className="advantagesTitle">
              <img className="imgTitle" src={svg4}></img>Возможность регистрации
            </h2>
            <span className="advantagesText">
              Территория относится к землям населенных пунктов для индивидуального жилищного
              строительства (ИЖС)
            </span>
            <h2 className="advantagesTitle">
              <img className="imgTitle" src={svg4}></img>Оформление в собственность
            </h2>
            <span className="advantagesText">
              Вы становитесь владельцем участка, а затем построенного на нем дома.
            </span>
            <h2 className="advantagesTitle">
              <img className="imgTitle" src={svg4}></img>Дорога
            </h2>
            <span className="advantagesText">Aсфальт/брусчатка с тротуарами</span>
            <h2 className="advantagesTitle">
              <img className="imgTitle" src={svg4}></img>Инфраструктура
            </h2>
            <span className="advantagesText">
              Детская площадка, спортивные площадки, теннисный корт
            </span>
            <h2 className="advantagesTitle">
              <img className="imgTitle" src={svg4}></img>Безопасность
            </h2>
            <span className="advantagesText">
              Закрытая, охраняемая территория, въездная группа, КПП
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
