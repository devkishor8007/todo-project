import Joi from "joi";

export const todoValidator = Joi.object({
  name: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  status: Joi.string().valid("completed", "not_completed"),
  completed_date: Joi.date().required().label('target completed date is missing'),
});
