import React from "react";
import reactDOM from "react-dom/client";
import logo from '/res-logo.jpeg';
import styled from "styled-components";

const resObj =  [
    {
        "info": {
            "id": "11091",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Attapur",
            "areaName": "Attapur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4,
            "parentId": "721",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-attapur-hyderabad-11091",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "52631",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/f07e9667-59e9-4943-afd6-66e23cc0c4ad_52631.jpg",
            "locality": "Namishree Mantra Mall, Upperpally village",
            "areaName": "Rambagh Colony",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-namishree-mantra-mall-upperpally-village-rambagh-colony-hyderabad-52631",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "622195",
            "name": "MOJO Pizza - 2X Toppings",
            "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
            "locality": "Gumma Konda Colony",
            "areaName": "Attapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "11329",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "28-38 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-gumma-konda-colony-attapur-hyderabad-622195",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "96326",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Bandlaguda",
            "areaName": "Hyder Shah Kote",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-22 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                        "description": "Delivery!"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                        "shortDescription": "Perfect cake delivery",
                        "fontColor": "#7E808C"
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
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                    "shortDescription": "Perfect cake delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-bandlaguda-hyder-shah-kote-hyderabad-96326",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "491963",
            "name": "NH1 Bowls - Highway To North",
            "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
            "locality": "Attapur",
            "areaName": "GUMMA KONDA COLONY",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            "avgRating": 4.5,
            "parentId": "22452",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "21-31 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-attapur-gumma-konda-colony-hyderabad-491963",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "491964",
            "name": "ZAZA Mughal Biryani",
            "cloudinaryImageId": "e12f3a72ab92442dc088f803a04d4293",
            "locality": "Attapur",
            "areaName": "GUMMA KONDA COLONY",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Awadhi"
            ],
            "avgRating": 3.7,
            "parentId": "22473",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "21-31 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/zaza-mughal-biryani-attapur-gumma-konda-colony-hyderabad-491964",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "491961",
            "name": "Mealful Rolls - India's Biggest Rolls",
            "cloudinaryImageId": "0d959f87516479195952893fa26b11c9",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "10390",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "27-37 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mealful-rolls-indias-biggest-rolls-gumma-konda-colony-attapur-hyderabad-491961",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "643825",
            "name": "WeFit-Bowls, Salads & Sandwiches",
            "cloudinaryImageId": "727ee82703c6fa71d1c954ead91dc20d",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Keto",
                "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "355285",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "24-34 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wefit-bowls-salads-and-sandwiches-gumma-konda-colony-attapur-hyderabad-643825",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "692219",
            "name": "BOOM Sandwich - Sub of India",
            "cloudinaryImageId": "96aaf72372ad1b0297b7cc304ced7e33",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Snacks",
                "Indian",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "401169",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "27-37 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-gumma-konda-colony-attapur-hyderabad-692219",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "681605",
            "name": "LeanCrust Pizza- ThinCrust Experts",
            "cloudinaryImageId": "9eec061a16f144a434503dfaa984a933",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "11216",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "28-38 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/leancrust-pizza-thincrust-experts-gumma-konda-colony-attapur-hyderabad-681605",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "750389",
            "name": "Daily Kitchen - Homely Meals",
            "cloudinaryImageId": "f3712f78feb56ca2f11ba6dcacd54521",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Home Food",
                "Indian",
                "North Indian",
                "Thalis"
            ],
            "avgRating": 3.9,
            "parentId": "444382",
            "avgRatingString": "3.9",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "23-33 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-gumma-konda-colony-attapur-hyderabad-750389",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "681356",
            "name": "GLOBO Ice Creams Of The World",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/12/db37ea26-0234-4c48-b185-09a954ee7951_681356.JPG",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Bakery"
            ],
            "avgRating": 4.4,
            "parentId": "22303",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "18-28 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/globo-ice-creams-of-the-world-gumma-konda-colony-attapur-hyderabad-681356",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "740514",
            "name": "Hola Pasta - Fresh Gourmet Pasta",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/eb744688-ec85-45e2-bb70-b8c7d40ba51a_740514.jpg",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.7,
            "parentId": "418135",
            "avgRatingString": "3.7",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "24-34 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hola-pasta-fresh-gourmet-pasta-gumma-konda-colony-attapur-hyderabad-740514",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "160128",
            "name": "KS Bakers",
            "cloudinaryImageId": "6127cb288329ad1c9e988276914d48ad",
            "locality": "Somi Reddy Nagar",
            "areaName": "Attapur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Pizzas",
                "Desserts",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "574",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-22 22:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                        "shortDescription": "Perfect Cake Delivery",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                                    "shortDescription": "Perfect Cake Delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ks-bakers-somi-reddy-nagar-attapur-hyderabad-160128",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "491959",
            "name": "BOX8 - Desi Meals",
            "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
            "locality": "GUMMA KONDA COLONY",
            "areaName": "Attapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Thalis",
                "Home Food"
            ],
            "avgRating": 4.2,
            "parentId": "10655",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "22-32 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/box8-desi-meals-gumma-konda-colony-attapur-hyderabad-491959",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "12126",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Langer Houz -Suncity- Bandlaguda",
            "areaName": "Langar Houz",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "parentId": "2",
            "avgRatingString": "3.8",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-22 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-langer-houz-suncity-bandlaguda-langar-houz-hyderabad-12126",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "349854",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_349854.JPG",
            "locality": "Ranga",
            "areaName": "Attapur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4,
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
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
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-ranga-attapur-hyderabad-349854",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "390618",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
            "locality": "P&T Colony",
            "areaName": "Attapur",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-23 00:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
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
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-p-and-t-colony-attapur-hyderabad-390618",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "707959",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
            "locality": "Rajendranagar",
            "areaName": "Attapur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-22 22:37:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-rajendranagar-attapur-hyderabad-707959",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "30253",
            "name": "Agra Sweets Banjara",
            "cloudinaryImageId": "nav4ebkoxrwlladx7a5m",
            "locality": "Utkoor- Mogdumpur road",
            "areaName": "Rambagh Colony",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Sweets",
                "Desserts",
                "Chaat",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "34",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-22 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
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
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
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
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/agra-sweets-banjara-utkoor-mogdumpur-road-rambagh-colony-hyderabad-30253",
            "type": "WEBLINK"
        }
    }
]
    


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const Logo = () => {
    return <img src={logo} height="50"  alt="logo" />
}

const NavItems = () => {
    return (
        <ul className="d-flex list-unstyled mb-0">
            <li className="px-3">Home</li>
            <li className="px-3">About</li>
            <li className="px-3">Profile</li>
        </ul>
    )
}

const HeaderComponent = () => {
    return (
        <div  className='d-flex justify-content-between align-items-center px-5'>
            <Logo />
            <NavItems />
        </div>
    )
}

const RestaurentCard = (props) => {
    const { name, avgRating, areaName, cuisines, cloudinaryImageId } = props?.resData?.info;
    return (
        <div className="col-3 p-3 d-flex">
            <div className="card border border-secondary border-opacity-10 shadow shadow-sm w-100">
                <img className="rounded" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} width="100%" height="250" alt={name} />
                <div className="px-3 py-2">
                    <p className="text-truncate fw-bold mb-1">{name}</p>
                    <p className="fw-semibold mb-0">{avgRating} stars</p>
                    <p className="mb-1">{areaName}</p>
                    <p className="mb-0 lh-1">{cuisines.join(", ")}</p>
                </div>
            </div>
        </div>
            )
}

const MainWrapper = () => {
    return (
        <div className="container-fluid px-5 mt-3 main-wrapper">
            <div className="input-group mb-3">
                <input type="text" className="form-control border border-secondary" placeholder="Search Restaurent" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                {/* <button className="btn btn-sm btn-secondary px-3" type="button">Search</button> */}
                <Button type="button" className="btn btn-sm btn-secondary px-3">Search</Button>
                {/* <Button $primary>Primary</Button> */}
            </div>
            <div className="d-flex flex-wrap row">
                {
                    resObj.map((res) => (
                        <RestaurentCard resData = {res} />
                    ))
                }

            </div>
        </div>
    )
}

const App = () => {
    return  (
        <div>
            <HeaderComponent />
            <MainWrapper />
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);