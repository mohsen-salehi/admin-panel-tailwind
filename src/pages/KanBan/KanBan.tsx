import image from "./../../assets/images/kanban/Group.png";
import image1 from "./../../assets/images/kanban/Group1.png";
import image2 from "./../../assets/images/kanban/Group2.png";
import image3 from "./../../assets/images/kanban/Group3.png";
import image4 from "./../../assets/images/kanban/Group4.png";
import image5 from "./../../assets/images/kanban/Group5.png";

function KanBan() {
  return (
    <section className="w-full  flex flex-wrap justify-center  h-full overflow-auto scroll-bar">
      <div className="w-4/12 flex flex-wrap justify-center content-start">
        <figure>
          <img src={image5} className="object-cover" />
        </figure>
        <figure>
          <img src={image} className="object-cover" />
        </figure>
        <figure>
          <img src={image5} className="object-cover" />
        </figure>
      </div>
      <div className="w-4/12 flex flex-wrap justify-center  content-start">
        <figure>
          <img src={image1} className="object-cover" />
        </figure>
        <figure>
          <img src={image} className="object-cover" />
        </figure>
        <figure>
          <img src={image2} className="object-cover" />
        </figure>
      </div>
      <div className="w-4/12 flex flex-wrap justify-center  content-start">
        <figure>
          <img src={image3} className="object-cover" />
        </figure>
        <figure>
          <img src={image4} className="object-cover" />
        </figure>
        <figure>
          <img src={image5} className="object-cover" />
        </figure>
      </div>
    </section>
  );
}

export default KanBan;
