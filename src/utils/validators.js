import Joi from "@hapi/joi";

export const registerSchema = Joi.object({
  name: Joi.string().max(256).required(),
}).options({ stripUnknown: true });
