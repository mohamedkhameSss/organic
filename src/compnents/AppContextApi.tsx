import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type products = {
  name: string;
  img: string;
}[];
export interface UserContext {
  products: products;
  setProducts: Dispatch<SetStateAction<products>>;
}
// const defaultValue ={
//     product:{
//         name: "",
//         img:""},
//         setP
//     }
// }
export const AppContext = createContext<Partial<UserContext>>({});
type productsProviderProps = {
  children: ReactNode | undefined;
};
export default function ProductsProvider({ children }: productsProviderProps) {
  const [products, setProducts] = useState<products>([]);
  useEffect(() => {
    setProducts([
      { name: "Fruits", img: "/category1.png" },
      { name: "Vegetables", img: "/category2.png" },
      { name: "Fresh Nuts", img: "/category3.png" },
      { name: "Cleaning", img: "/category4.png" },
      { name: "Spice", img: "/category5.png" },
      { name: "Juice & Drinks", img: "/category6.png" },
    ]);
  }, []);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}
