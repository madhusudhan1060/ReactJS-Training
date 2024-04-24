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


export default RestaurentCard;