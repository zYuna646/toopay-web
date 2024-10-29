import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(), 
  alamat: Joi.string().required(),
  jk: Joi.boolean().required(),
  tgl_lahir: Joi.date().required(),
  no_hp: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  tempat_lahir: Joi.string().required(),
});
