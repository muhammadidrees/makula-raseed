import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { PersonalInfo } from "../types";

interface PersonalInfoFormContextType {
  personalFormData: PersonalInfo;
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
  // Load initial state from localStorage
  const loadInitialState = (): PersonalInfo => {
    const storedData = localStorage.getItem("personalFormData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          email: "",
          taxID: "",
          address: {
            street: "",
            city: "",
            zip: "",
          },
        };
  };

  const [formData, setFormData] = useState<PersonalInfo>(loadInitialState);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("personalFormData", JSON.stringify(formData));
  }, [formData]);

  return (
    <PersonalInfoFormContext.Provider
      value={{ personalFormData: formData, setFormData }}
    >
      {children}
    </PersonalInfoFormContext.Provider>
  );
};
