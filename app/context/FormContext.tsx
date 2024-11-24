import React, { createContext, useContext, useState, ReactNode } from "react";
import { PersonalInfo } from "../types";

interface PersonInfoFormContextType {
  formData: PersonalInfo;
  setFormData: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const PersonalInfoFormContext = createContext<
  PersonInfoFormContextType | undefined
>(undefined);

export const useFormContext = () => {
  const context = useContext(PersonalInfoFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<PersonalInfo>({
    name: "",
    email: "",
    taxID: "",
    address: {
      street: "",
      city: "",
      zip: "",
    },
  });

  return (
    <PersonalInfoFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </PersonalInfoFormContext.Provider>
  );
};
