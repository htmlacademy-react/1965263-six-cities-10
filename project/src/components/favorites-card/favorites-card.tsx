import {Link} from 'react-router-dom';
import {RATING_COEFFICIENT} from '../../const';
import {Offer} from '../../types/offer';

type FavoritesCardComponentProps = {
  favoritesCard: Offer;
};

function FavoritesCard({favoritesCard}: FavoritesCardComponentProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src={favoritesCard.previewImage} width="150" height="110" alt="Place"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favoritesCard.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${favoritesCard.rating * RATING_COEFFICIENT}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/">{favoritesCard.title}</Link>
        </h2>
        <p className="place-card__type">{favoritesCard.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
