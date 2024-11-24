import React, { createContext, useContext, useState, ReactNode } from "react";
import { CompanyInfo } from "../types";

interface CompanyInfoFormContextType {
  formData: CompanyInfo;
  setFormData: React.Dispatch<React.SetStateAction<CompanyInfo>>;
}

const CompanyInfoFormContext = createContext<
  CompanyInfoFormContextType | undefined
>(undefined);

export const useCompanyFormContext = () => {
  const context = useContext(CompanyInfoFormContext);
  if (!context) {
    throw new Error(
      "useCompanyFormContext must be used within a CompanyFormProvider"
    );
  }
  return context;
};

export const CompanyFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<CompanyInfo>({
    name: "",
    address: {
      street: "",
      city: "",
      zip: "",
    },
  });

  return (
    <CompanyInfoFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </CompanyInfoFormContext.Provider>
  );
};
