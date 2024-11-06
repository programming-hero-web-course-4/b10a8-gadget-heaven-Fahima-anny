import ReactStars from "react-rating-stars-component";

const ReviewCard = ({cust}) => {

    const {id, name, img, rating, description} = cust ;

    const firstExample = {
        size: 30,
        value: rating ,
        edit: false,
        color: "gray",
        activeColor: "gold",
        a11y: true,
        isHalf: true,
      };

    return (
        <div>
              <div className="bg-white rounded-2xl p-4 my-6 flex justify-between">
<div className="flex flex-col md:flex-row items-center gap-10">
<div className=" ">
<img
    className="rounded-full border mx-auto w-[130px] h-[130px] object-contain object-center"
    src={img} alt="" />
</div>

<div className="flex flex-col justify-center items-start space-y-2 ">
<h2 className="font-bold text-xl ">{name}</h2>
<p className="text-gray-600  ">{description}</p>

<div className="flex gap-3 items-center">
<h2 className="font-semibold">Rating:</h2>
        <div>
        <ReactStars {...firstExample} />
        </div>
        <div className="rounded-full w-16 text-center bg-base-200">
            {rating}
        </div>
    </div>

</div>

</div>

<div>

</div>
            </div>
        </div>
    );
};

export default ReviewCard;