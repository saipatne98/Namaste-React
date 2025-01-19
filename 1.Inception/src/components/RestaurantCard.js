import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}=props;
    const {deliveryTime}=  resData.card.card.info.sla;
    const { 
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
     } = resData.card.card.info;

    return <div className="res-card" >
        <img
            className="res-logo"
            src={`${CDN_URL}${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")} </h4>
        <h4>{avgRating}Stars</h4>
        <h4>{costForTwo}</h4>

        <h4>{deliveryTime} Minutes</h4>
        


    </div>
}

export default RestaurantCard;