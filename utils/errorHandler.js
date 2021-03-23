const handleError = (err) => {
  if (err.status === 401 || err.response.status === 401) {
    window.location.replace("/auth");
  } else {
    const message = err.response?.data?.message || "Something went wrong";

    return null
  }
};

export { handleError };
