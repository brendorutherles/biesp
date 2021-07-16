export function handleMessage(res, data, message = "") {
  return res.json({
    success: true,
    message,
    response: data,
  });
}

export function handleError(code, res, error, message = "") {
  console.error(error);
  return res.status(code).send({
    success: false,
    message: message,
    response: error,
  });
}
