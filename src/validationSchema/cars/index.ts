import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  status: yup.string().required(),
  type: yup.string().required(),
  company_id: yup.string().nullable(),
});
