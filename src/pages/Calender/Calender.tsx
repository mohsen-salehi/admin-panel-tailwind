import image from "./../../assets/images/calender/Group.png";
import image1 from "./../../assets/images/calender/Group1.png";
import image2 from "./../../assets/images/calender/Group2.png";

function Calender() {
  return (
    <section className="w-full justify-between  flex flex-wrap overflow-auto scroll-bar">
      <div className="w-2/6 ">
        <figure className="w-full">
          <img src={image} className="object-cover w-full h-full" />
        </figure>
        <figure className="w-full">
          <img src={image2} className="object-cover w-full h-full" />
        </figure>
      </div>
      <div className="w-4/6">
        <figure className="w-full flex justify-center">
          <img src={image1} className="object-cover" />
        </figure>
      </div>
    </section>
  );
}

export default Calender;
