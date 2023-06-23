import image from "./../../assets/images/Group.png";
import image1 from "./../../assets/images/Group1.png";
import image2 from "./../../assets/images/Group2.png";
import image3 from "./../../assets/images/Group3.png";
import image4 from "./../../assets/images/Group4.png";

function HomeIndex() {
  return (
    <section className="w-full flex flex-wrap justify-around content-center">
      <div className="w-[65%] p-10 h-full flex flex-wrap content-between  ">
        <figure className="h-[65%] w-full">
          <img src={image} className="h-full w-full" />
        </figure>
        <figure className="h-[30%] w-full">
          <img src={image3} className="h-full w-full" />
        </figure>
      </div>

      <div className="w-[35%] h-full  flex flex-wrap justify-center content-start p-10 ">
        <figure>
          <img src={image1} />
        </figure>
        <figure>
          <img src={image2} />
        </figure>
        <figure>
          <img src={image4} />
        </figure>
      </div>
    </section>
  );
}

export default HomeIndex;
