import { Response } from "express";

export const sendJsonResponse = (
  res: Response,
  status: number,
  count?: any,
  data?: any,
  message?: any,
  error?: any
) => {
  if (message === null && error === null) {
    return res.status(status).json({
      status,
      success: !status.toString().match(/2[0-9][0-9]/) ? false : true,
      count: count || null,
      data: data,
    });
  } else if (data === null && error === null && count === null) {
    return res.status(status).json({
      status,
      success: !status.toString().match(/2[0-9][0-9]/) ? false : true,
      message: message || null,
    });
  } else if (count === null && message === null && error === null)
    return res.status(status).json({
      status,
      success: !status.toString().match(/2[0-9][0-9]/) ? false : true,
      data: data || null,
    });
  return res.status(status).json({
    status,
    success: !status.toString().match(/2[0-9][0-9]/) ? false : true,
    count: count || null,
    data: data || null,
    message: message || null,
    error: error || null,
  });
};
