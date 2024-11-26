import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { InvoiceData } from "../types";
import { randomId } from "@mantine/hooks";

interface InvoiceDataContextProps {
  invoiceFromData: InvoiceData;
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
  // Load initial state from localStorage
  const loadInitialState = (): InvoiceData => {
    try {
      const storedData = localStorage.getItem("invoiceData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // Convert date field back into a Date object
        if (parsedData.date) {
          parsedData.date = new Date(parsedData.date);
        }

        return parsedData;
      }

      // Default state
      return {
        date: new Date(),
        items: [
          {
            description: "",
            quantity: 1,
            price: 0,
            key: randomId(),
          },
        ],
      };
    } catch {
      return {
        date: new Date(),
        items: [
          {
            description: "",
            quantity: 1,
            price: 0,
            key: randomId(),
          },
        ],
      };
    }
  };

  const [formData, setFormData] = useState<InvoiceData>(loadInitialState);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("invoiceData", JSON.stringify(formData));
  }, [formData]);

  return (
    <InvoiceDataContext.Provider
      value={{ invoiceFromData: formData, setFormData }}
    >
      {children}
    </InvoiceDataContext.Provider>
  );
};
