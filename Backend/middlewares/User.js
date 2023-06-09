import joi from "joi";
export const CheckvalidateSignUp = joi.object({
  name: joi.string().required().empty().messages({
    "string.empty": "Email không được để trống",
  }),
  email: joi.string().required().empty().messages({
    "string.email": "Email không hợp lệ",
    "string.required": "Trường Email là bắt buộc",
    "string.empty": "Email không được để trống",
  }),
  password: joi.string().required().min(6).empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
    "string.min": "Password phải có ít nhất 6 ký tự",
  }),
  confirmPassword: joi
    .string()
    .valid(joi.ref("password"))
    .required()
    .empty()
    .messages({
      "string.empty": 'Trường "xác nhận mật khẩu" không được để trống',
      "any.required": "Trường xác nhận mật khẩu là bắt buộc",
      "any.only": 'Trường "xác nhận mật khẩu" không khớp',
    }),
});
export const CheckvalidateSignIn = joi.object({
  email: joi.string().email().required().messages({
    "string.base": `"email" phải là kiểu "text"`,
    "string.empty": `"email" không được bỏ trống`,
    "string.email": `"email" phải có định dạng là email`,
    "any.required": `"email" là trường bắt buộc`,
  }),
  password: joi.string().required().messages({
    "string.base": `"password" phải là kiểu "text"`,
    "string.empty": `"password" không được bỏ trống`,
    "string.min": `"password" phải chứa ít nhất {#limit} ký tự`,
    "any.required": `"password" là trường bắt buộc`,
  }),
});
