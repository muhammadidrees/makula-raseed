import React, { createContext, useContext, useState, ReactNode } from "react";
import { PersonalInfo } from "../types";

interface PersonalInfoFormContextType {
  formData: PersonalInfo;
  setFormData: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const PersonalInfoFormContext = createContext<
  PersonalInfoFormContextType | undefined
>(undefined);

export const usePersonalFormContext = () => {
  const context = useContext(PersonalInfoFormContext);
  if (!context) {
    throw new Error(
      "usePersonalFormContext must be used within a PersonalFormProvider"
    );
  }
  return context;
};

export const PersonalFormProvider = ({ children }: { children: ReactNode }) => {
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
