import image1 from "./../../assets/images/wallet/Group1.png";
import image3 from "./../../assets/images/wallet/Group3.png";
import image4 from "./../../assets/images/wallet/Group4.png";
import image5 from "./../../assets/images/wallet/Group5.png";

function Wallet() {
  return (
    <section className="flex w-full flex-wrap justify-center p-3 content-start overflow-auto scroll-bar">
      <div className="w-full flex justify-between">
        <figure className="flex justify-center w-full">
          <img src={image1} className="object-cover w-full h-full" />
        </figure>
        <figure className="flex justify-center w-full">
          <img src={image1} className="object-cover w-full h-full" />
        </figure>
        <figure className="flex justify-center w-full">
          <img src={image1} className="object-cover w-full h-full" />
        </figure>
        <figure className="flex justify-center w-full">
          <img src={image1} className="object-cover w-full h-full" />
        </figure>
      </div>
      <div className="w-6/12 flex flex-wrap justify-between ">
        <figure className="w-full">
          <img src={image3} className="object-cover w-full h-full" />
        </figure>
        <figure className="w-1/2">
          <img src={image5} className="w-full object-cover" />
        </figure>
        <figure className="w-1/2">
          <img src={image5} className="w-full object-cover" />
        </figure>
      </div>
      <div className="w-6/12">
        <figure>
          <img src={image4} className="w-full object-cover" />
        </figure>
      </div>
    </section>
  );
}

export default Wallet;
