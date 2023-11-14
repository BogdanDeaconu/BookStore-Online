import { useState } from "react";
import getValidateRules from "../helpers/validate-rules";

const useForm = (initialState: any, formPosibleErrors: any) => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState(formPosibleErrors || {});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    validateForm(id, value);
    updateFormData(id, value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    validateForm(id, value);
    updateFormData(id, value);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    validateForm(id, value);
    updateFormData(id, value);
  };

  const validateForm = (id: string, value: string) => {
    const rules = getValidateRules(id);

    if (!rules) {
      return;
    } else {
      if (!new RegExp(rules.RegExp).test(value)) {
        setFormErrors({
          ...formErrors,
          [id]: rules.message,
        });
      } else {
        setFormErrors({ ...formErrors, [id]: "" });
      }
    }
  };

  const updateFormData = (id: string, value: string) => {
    const updatedFormData = { ...formData };

    const idParts = id.split("_");
    let currentObj = updatedFormData;

    for (let i = 0; i < idParts.length - 1; i++) {
      currentObj = currentObj[idParts[i]];
    }

    currentObj[idParts[idParts.length - 1]] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formErrors.length > 0) {
      console.log("Form is invalid");
      return;
    } else {
      return formData;
    }
  };

  const handleFormReset = () => {
    setFormData(initialState);
  };

  return {
    formData,
    formErrors,
    handleInputChange,
    handleSelectChange,
    handleTextareaChange,
    handleFormReset,
    handleSubmit,
  };
};

export default useForm;
