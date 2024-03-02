// actions/formActions.js
export const updateFormField = (fieldName, fieldValue) => {
  return {
    type: 'UPDATE_FORM_FIELD',
    fieldName,
    fieldValue,
  };
};

export const updateData = (fieldName, fieldValue) => {
  return{
    type : 'UPDATE_DATA',
    fieldName,
    fieldValue
  };
};