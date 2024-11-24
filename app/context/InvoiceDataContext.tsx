import React, { createContext, useContext, useState, ReactNode } from "react";
import { InvoiceData } from "../types";

interface InvoiceDataContextProps {
  formData: InvoiceData;
  setFormData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

const InvoiceDataContext = createContext<InvoiceDataContextProps | undefined>(
  undefined
);

export const useInvoiceDataContext = (): InvoiceDataContextProps => {
  const context = useContext(InvoiceDataContext);
  if (!context) {
    throw new Error(
      "useInvoiceDataContext must be used within an InvoiceDataProvider"
    );
  }
  return context;
};

export const InvoiceDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<InvoiceData>({
    date: new Date(),
    items: [],
  });

  return (
    <InvoiceDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </InvoiceDataContext.Provider>
  );
};
