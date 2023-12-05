"use client";
import { usePortfolio } from "@/Context/portfolioContext";
import { styles } from "@/utils/utils";
import { Fragment, useEffect } from "react";
import Cursor from "./cursor";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    styles.dataImage();
    styles.imageToSvg();
    styles.customCursor();
  }, []);
  const { modal, serviceModal, newsModal, portfolioDetailsModal } =
    usePortfolio();
  return (
    <Fragment>
      {/* <MediaPopup /> */}
      {/* <ImageView /> */}
      {/* {modal && serviceModal && <ServiceModal />} */}
      {/* {modal && newsModal && <NewsModal />} */}
      {/* {modal && portfolioDetailsModal && <DetailsModal />} */}
      {/* WRAPPER ALL */}
      {/* tokyo_tm_all_wrap */}
      <>
        {/* <Mobile /> */}
        <Sidebar />
        <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
          <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
            {children}
          </div>
        </div>
        <Cursor />
      </>
    </Fragment>
  );
};
export default Layout;
