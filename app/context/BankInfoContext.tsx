import React, { createContext, useContext, useState, ReactNode } from "react";
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
  const [formData, setFormData] = useState<BankInfo>({
    name: "",
    accountTitle: "",
    iban: "",
    bic: "",
  });

  return (
    <BankInfoFormContext.Provider
      value={{ bankFromData: formData, setFormData }}
    >
      {children}
    </BankInfoFormContext.Provider>
  );
};
