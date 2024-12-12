"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";
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

// Check if we are running in the browser
const isBrowser = typeof window !== "undefined";

const loadInitialState = (): CompanyInfo => {
  if (isBrowser) {
    const storedData = localStorage.getItem("companyFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      return parsedData;
    }
  }

  return {
    name: "",
    address: {
      street: "",
      city: "",
      zip: "",
    },
  };
};

export const CompanyFormProvider = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams();

  const company = params.get("company");

  let companyData = null;

  if (company?.toLowerCase() === "makula") {
    companyData = {
      name: "Makula Technology GmbH",
      address: {
        street: "c/o Mindspace Münzstr. 12",
        city: "Germany",
        zip: "10178 Berlin",
      },
    };
  }

  // Load initial state from localStorage or use companyData if available
  const [formData, setFormData] = useState<CompanyInfo>(
    companyData || loadInitialState()
  );

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    if (isBrowser)
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
