import { PropsWithChildren } from "react";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/header/Header";
function Layout({ children }: PropsWithChildren) {
  return (
    <main className="xl:container xl:mx-auto  h-screen overflow-hidden flex flex-wrap  bg-[#263238]">
      <SideBar />
      <section className="w-11/12 h-full ">
        <Header />
        <section className="flex h-[90%]">{children}</section>
      </section>
    </main>
  );
}

export default Layout;
