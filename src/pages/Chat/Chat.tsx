import image1 from "./../../assets/images/chat/Group.png";
import image2 from "./../../assets/images/chat/Group1.png";
import image3 from "./../../assets/images/chat/Group2.png";
import image4 from "./../../assets/images/chat/Group3.png";
import image5 from "./../../assets/images/chat/Group6.png";
import vector from "./../../assets/images/chat/Vector1.png";

function Chat() {
  return (
    <search className="w-full flex flex-wrap ">
      <div className="flex w-[20%] h-full overflow-auto scroll-bar">
        <figure>
          <img src={image2} className="w-full h-full" />
        </figure>
      </div>
      <div className="flex w-[80%] h-full flex-wrap overflow-auto scroll-bar">
        <div className="w-full">
          <figure>
            <img src={image1} className="object-cover" />
          </figure>
        </div>
        <div className="w-full flex flex-wrap flex-row-reverse">
          <figure className="w-full flex my-3 flex-row-reverse">
            <img src={image5} className="object-cover" />
          </figure>
          <figure>
            <img src={vector} className="object-cover" />
          </figure>
        </div>
        <div className="w-full">
          <figure>
            <img src={image3} className="object-cover" />
          </figure>
          <figure>
            <img src={image4} className="object-cover" />
          </figure>
        </div>
        <div className="w-full flex flex-wrap flex-row-reverse">
          <figure className="w-full flex my-3 flex-row-reverse">
            <img src={image5} className="object-cover" />
          </figure>
          <figure>
            <img src={vector} className="object-cover" />
          </figure>
        </div>
        <div className="w-full">
          <figure>
            <img src={image3} className="object-cover" />
          </figure>
          <figure>
            <img src={image4} className="object-cover" />
          </figure>
        </div>
      </div>
    </search>
  );
}

export default Chat;
