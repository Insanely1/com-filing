export const catchAsyncError = (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch((error) => {
    // Log the error for debugging purposes
    console.error("Async Error:", error);
    
    // Pass the error to the next middleware
    next(error);
  });
}