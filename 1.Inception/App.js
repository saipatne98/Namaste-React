import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => objet => HTMlelement render

/**
 * Header
 *   - Logo
 *   - nav items
 * Body
 *   - search tab
 *   - restaurant Container
 *       -reastaurent Cards 
 *            -Image
 *            -Name of restaurent ,rating,cuisins 
 * Footer
 *   - Copyright
 *   - Links 
 *   - address
 *   - contacts
 * 
 */

const styleCard = {
     backgroundColor: "#f0f0f0",

}

const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&s" alt="App Logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li className="item">Home</li>
                <li className="item">About Us</li>
                <li className="item">Contact Us</li>
                <li className="item">Cart</li>
            </ul>
        </div>
    </div>

}

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

    return <div className="res-card" style={styleCard}>
        <img
            className="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")} </h4>
        <h4>{avgRating}Stars</h4>
        <h4>{costForTwo}</h4>

        <h4>{deliveryTime} Minutes</h4>
        


    </div>
}

const resList =
    [
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "71607",
                        "name": "Hotel Vijay - The Taste Of Tamil Nadu",
                        "cloudinaryImageId": "iujdgczww7oxjjuv0jxz",
                        "locality": "Hinjewadi",
                        "areaName": "Hinjawadi",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                            "South Indian",
                            "Snacks",
                            "Fast Food",
                            "Indian",
                            "Beverages"
                        ],
                        "avgRating": 4.4,
                        "parentId": "578833",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "10K+",
                        "promoted": true,
                        "adTrackingId": "cid=24051145~p=0~adgrpid=24051145#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=71607~eid=c9288701-65c0-4651-a2dd-bcdd4b402f73~srvts=1737180662726~collid=80440",
                        "sla": {
                            "deliveryTime": 34,
                            "lastMileTravel": 4.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "4.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "pureveg",
                                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {},
                                "textBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "4.0",
                                "ratingCount": "2.4K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "campaignId": "24051145"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=71607&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "662674",
                        "name": "Naadbramha Idli",
                        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/2/5c246a4d-c36a-4c95-accb-85a76b5f62ab_c890a152-291e-469f-9d62-f5b6bba66c5d.png_compressed",
                        "locality": "Marunji Road",
                        "areaName": "Hinjewadi",
                        "costForTwo": "₹100 for two",
                        "cuisines": [
                            "South Indian",
                            "Beverages"
                        ],
                        "avgRating": 4.3,
                        "veg": true,
                        "parentId": "251339",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "443",
                        "sla": {
                            "deliveryTime": 21,
                            "lastMileTravel": 2.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-25 mins",
                            "lastMileTravelString": "2.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 20:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {},
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=662674&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "88201",
                        "name": "Krishna veg",
                        "cloudinaryImageId": "lfpaycn91vy2tepy9ahi",
                        "locality": "Dehu Road",
                        "areaName": "Ravet",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "South Indian",
                            "North Indian",
                            "Chinese",
                            "Desserts",
                            "Italian",
                            "Beverages",
                            "Punjabi",
                            "Juices"
                        ],
                        "avgRating": 4.2,
                        "veg": true,
                        "parentId": "18864",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "18K+",
                        "promoted": true,
                        "adTrackingId": "cid=24051181~p=2~adgrpid=24051181#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=88201~eid=788f379a-8b0b-403a-a5c9-55786386bddb~srvts=1737180662726~collid=80440",
                        "sla": {
                            "deliveryTime": 31,
                            "lastMileTravel": 6.1,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "6.1 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:59:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "ITEMS",
                            "subHeader": "AT ₹39",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "campaignId": "24051181"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=88201&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "556453",
                        "name": "Ajays Live Kitchen",
                        "cloudinaryImageId": "4c8291ab99277fe169c45ef2ea716cc9",
                        "locality": "Mulshi",
                        "areaName": "Hinjawadi",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "Oriya",
                            "Thalis",
                            "Fast Food",
                            "Sweets"
                        ],
                        "avgRating": 4.1,
                        "parentId": "334675",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "378",
                        "sla": {
                            "deliveryTime": 28,
                            "lastMileTravel": 1.7,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "1.7 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "10% OFF",
                            "subHeader": "UPTO ₹40",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=556453&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "207652",
                        "name": "Upsouth",
                        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/19/e876f416-a2cc-4175-917c-400259cd0f10_709db1d1-2ec9-4ada-9290-6aa32753e9e3.JPG",
                        "locality": "Pimpri",
                        "areaName": "Wakad",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                            "South Indian",
                            "Snacks",
                            "Beverages"
                        ],
                        "avgRating": 4.3,
                        "parentId": "22184",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "5.6K+",
                        "promoted": true,
                        "adTrackingId": "cid=24051297~p=3~adgrpid=24051297#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=207652~eid=f19dc6e2-864d-4e0b-bbfb-c8398a5f285f~srvts=1737180662726~collid=80440",
                        "sla": {
                            "deliveryTime": 36,
                            "lastMileTravel": 6.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "6.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "pureveg",
                                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹200 OFF",
                            "subHeader": "ABOVE ₹599",
                            "discountTag": "FLAT DEAL",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "3.7",
                                "ratingCount": "5.8K+"
                            },
                            "source": "GOOGLE",
                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "campaignId": "24051297"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=207652&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "809123",
                        "name": "Dvg Benne Dosa Hinjewadi",
                        "cloudinaryImageId": "57d039ae185421edf3f01945032f25c0",
                        "locality": "Shop No 3",
                        "areaName": "Hinjewadi",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                            "South Indian"
                        ],
                        "avgRating": 4.3,
                        "veg": true,
                        "parentId": "482676",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "527",
                        "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "3.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textExtendedBadges": {},
                                "textBased": {},
                                "imageBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "15% OFF",
                            "subHeader": "UPTO ₹100",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=809123&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "808536",
                        "name": "Varhadi Thaat Family Restaurant",
                        "cloudinaryImageId": "068721e42feaefac2e667498d82ceb27",
                        "locality": "Link Road",
                        "areaName": " Maan Road, Hinjewadi",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "Snacks",
                            "Indian",
                            "Thalis"
                        ],
                        "avgRating": 3.9,
                        "parentId": "482247",
                        "avgRatingString": "3.9",
                        "totalRatingsString": "81",
                        "promoted": true,
                        "adTrackingId": "cid=24087200~p=4~adgrpid=24087200#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=808536~eid=0cb7610b-b242-49e9-a0dc-18b8211ef9ae~srvts=1737180662726~collid=80440",
                        "sla": {
                            "deliveryTime": 45,
                            "lastMileTravel": 5.7,
                            "serviceability": "SERVICEABLE",
                            "slaString": "40-45 mins",
                            "lastMileTravelString": "5.7 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:59:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textExtendedBadges": {},
                                "textBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "15% OFF",
                            "subHeader": "UPTO ₹80",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "campaignId": "24087200"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=808536&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "817299",
                        "name": "Paushtik Aahar",
                        "cloudinaryImageId": "496df9d1d31da5e1f52d050c46a41ef4",
                        "locality": "Wakad",
                        "areaName": "Wakad",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                            "South Indian",
                            "Indian"
                        ],
                        "avgRating": 4.3,
                        "parentId": "252508",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "84",
                        "sla": {
                            "deliveryTime": 28,
                            "lastMileTravel": 3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "3.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 22:30:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textExtendedBadges": {},
                                "textBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=817299&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "1013443",
                        "name": "Yumma Swami",
                        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/2/dcf25110-cdc8-4af0-9724-9e6665293103_9a4e0bbc-db97-41e6-af83-5d1fecfed3a4.jpg",
                        "locality": "NAKSHTRAM ",
                        "areaName": "Ravet",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "South Indian",
                            "Beverages",
                            "Juices"
                        ],
                        "avgRating": 4.3,
                        "veg": true,
                        "parentId": "228500",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "5",
                        "promoted": true,
                        "adTrackingId": "cid=23370216~p=8~adgrpid=23370216#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1013443~eid=d2569d50-6024-4732-a930-cac42ff7c779~srvts=1737180662727~collid=80440",
                        "sla": {
                            "deliveryTime": 42,
                            "lastMileTravel": 8.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "40-45 mins",
                            "lastMileTravelString": "8.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 22:15:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {},
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textExtendedBadges": {},
                                "textBased": {},
                                "imageBased": {}
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "campaignId": "23370216"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=1013443&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "781872",
                        "name": "SA Dosa Cafe",
                        "cloudinaryImageId": "f100652c08d3b07fa45815cb1f6cc9f4",
                        "locality": "Sayaji Hotel",
                        "areaName": "Wakad",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                            "South Indian",
                            "Beverages",
                            "Snacks",
                            "Fast Food",
                            "Pizzas"
                        ],
                        "avgRating": 4.1,
                        "veg": true,
                        "parentId": "397081",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "256",
                        "sla": {
                            "deliveryTime": 44,
                            "lastMileTravel": 3.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "40-45 mins",
                            "lastMileTravelString": "3.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2025-01-18 23:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "30% OFF",
                            "subHeader": "UPTO ₹75",
                            "logoCtx": {
                                "text": "BENEFITS"
                            }
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {},
                            "commsStyling": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {},
                        "externalRatings": {
                            "aggregatedRating": {
                                "rating": "--"
                            }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=781872&source=collection&query=Idli",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                },
                "relevance": {
                    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                    "sectionId": "MENU_RETURN_FOOD"
                }
            }
        }
    ]



const Body = () => {
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">

           {resList.map(restaurant => ( 
                      <RestaurantCard 
                    //   key={restaurant.card.card.info.id}
                      resData={restaurant}/>))}

        </div>
    </div>
}
const AppLayout = () => {
    return <div>
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout />);
