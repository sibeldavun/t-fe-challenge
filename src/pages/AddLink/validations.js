import * as yup from 'yup';

let validations = yup.object().shape({
  fullName: yup.string().min(4, "at least 4 character").max(60, "less then 60 character").required().matches(/^[aA-zZüöşıçğİÜÖŞÇĞ\s]+$/, "Only alphabets are allowed for this field "),
  country : yup.string().min(2, "at least 2 character").max(40, "at least 40 character").required().matches(/^[aA-zZüöşıçğİÜÖŞÇĞ\s]+$/, "Only alphabets are allowed for this field "),
  city : yup.string().min(2, "at least 2 character").max(40,  "at least 40 character").required().matches(/^[aA-zZüöşıçğİÜÖŞÇĞ\s]+$/, "Only alphabets are allowed for this field "),
  email : yup.string().email().required(),
});

export default validations;