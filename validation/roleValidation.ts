import Joi from "joi";

export const roleSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  permissions: Joi.array().items(Joi.string()).required(),
});
