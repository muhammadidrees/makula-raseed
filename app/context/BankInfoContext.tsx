import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { BankInfo } from "../types";

interface BankInfoFormContextType {
  bankFromData: BankInfo;
  setFormData: React.Dispatch<React.SetStateAction<BankInfo>>;
}

const BankInfoFormContext = createContext<BankInfoFormContextType | undefined>(
  undefined
);

export const useBankFormContext = () => {
  const context = useContext(BankInfoFormContext);
  if (!context) {
    throw new Error(
      "useBankFormContext must be used within a BankFormProvider"
    );
  }
  return context;
};

export const BankFormProvider = ({ children }: { children: ReactNode }) => {
  // Load initial state from localStorage
  const loadInitialState = (): BankInfo => {
    const storedData = localStorage.getItem("bankFormData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          accountTitle: "",
          iban: "",
          bic: "",
        };
  };

  const [formData, setFormData] = useState<BankInfo>(loadInitialState);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bankFormData", JSON.stringify(formData));
  }, [formData]);

  return (
    <BankInfoFormContext.Provider
      value={{ bankFromData: formData, setFormData }}
    >
      {children}
    </BankInfoFormContext.Provider>
  );
};
