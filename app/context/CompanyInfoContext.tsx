import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CompanyInfo } from "../types";

interface CompanyInfoFormContextType {
  companyFormData: CompanyInfo;
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
  // Load initial state from localStorage
  const loadInitialState = (): CompanyInfo => {
    const storedData = localStorage.getItem("companyFormData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          address: {
            street: "",
            city: "",
            zip: "",
          },
        };
  };

  const [formData, setFormData] = useState<CompanyInfo>(loadInitialState);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("companyFormData", JSON.stringify(formData));
  }, [formData]);

  return (
    <CompanyInfoFormContext.Provider
      value={{ companyFormData: formData, setFormData }}
    >
      {children}
    </CompanyInfoFormContext.Provider>
  );
};
