import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [pro_id, setPro_id] = useState();




  return (
    <ProductContext.Provider value={{ pro_id, setPro_id }}>
      <div>{children}</div>
    </ProductContext.Provider>
  );
}
