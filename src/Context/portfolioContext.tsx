"use client";
import { createContext, useCallback, useContext, useReducer } from "react";

interface PortfolioContextProps {
  menus: {
    id: number;
    name: string;
    href: string;
  }[];
  nav: string;
  navChange: (value: string) => void;
  animation: string;
  animationChnage: (value: string) => void;
  modal: boolean;
  modalToggle: (value: string) => void;
  serviceModal: any;
  setServiceModal: (value: string) => void;
  newsModal: any;
  setNewsModal: (value: string) => void;
  portfolioDetailsModal: any;
  setPortfolioDetailsModal: (value: string) => void;
}

const PortfolioContext = createContext({} as PortfolioContextProps);

const type = {
  NAV: "NAV",
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  SERVICEMODAL: "SERVICEMODAL",
  NEWSMODAL: "NEWSMODAL",
  PORTFOLIODETAILSMODAL: "PORTFOLIODETAILSMODAL",
};
const {
  NAV,
  ANIMATION,
  MODAL,
  SERVICEMODAL,
  NEWSMODAL,
  PORTFOLIODETAILSMODAL,
} = type;

interface PortofioProps {
  nav: string;
  animation: string;
  modal: boolean;
  serviceModal: any;
  newsModal: any;
  portfolioDetailsModal: any;
  menus: {
    id: number;
    name: string;
    href: string;
  }[];
}

interface ActionProps {
  type: string;
  payload: any;
}

const initialState = {
  nav: "home",
  animation: "fadeInLeft",
  modal: false,
  serviceModal: null,
  newsModal: null,
  portfolioDetailsModal: null,
  menus: [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "about", href: "about" },
    { id: 3, name: "service", href: "service" },
    { id: 4, name: "portfolio", href: "portfolio" },
    { id: 5, name: "news", href: "news" },
    { id: 6, name: "contact", href: "contact" },
  ],
};

const reducer = (state: PortofioProps, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case NEWSMODAL:
      return {
        ...state,
        newsModal: payload,
      };
    case PORTFOLIODETAILSMODAL:
      return {
        ...state,
        portfolioDetailsModal: payload,
      };
    default:
      return state;
  }
};

export const PortfolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navChange = useCallback((value: string) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value: string) => {
    dispatch({
      type: ANIMATION,
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value: string) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value: string) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setNewsModal = useCallback((value: string) => {
    dispatch({
      type: NEWSMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioDetailsModal = useCallback((value: string) => {
    dispatch({
      type: PORTFOLIODETAILSMODAL,
      payload: value,
    });
  }, []);

  const {
    nav,
    animation,
    modal,
    serviceModal,
    newsModal,
    portfolioDetailsModal,
    menus,
  } = state;
  return (
    <PortfolioContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        animationChnage,
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        newsModal,
        setNewsModal,
        portfolioDetailsModal,
        setPortfolioDetailsModal,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used within an PortfolioProvider");
  }

  return context;
}
