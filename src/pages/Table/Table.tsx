import image from "./../../assets/images/table/Group.png";

function Table() {
  return (
    <section className="w-full h-full overflow-auto scroll-bar">
      <figure className="w-full h-full">
        <img src={image} alt="" />
      </figure>
    </section>
  );
}

export default Table;
