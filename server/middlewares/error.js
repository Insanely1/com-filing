class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    // Handle specific errors and update err
    if (err.name === "CastError") {
        err = new ErrorHandler(`Resource not found. Invalid: ${err.path}`, 400);
    }

    if (err.name === "JsonWebTokenError") {
        err = new ErrorHandler(`JSON web token invalid: try again`, 400);
    }

    if (err.name === "TokenExpiredError") {
        err = new ErrorHandler(`JSON web token expired`, 400);
    }

    if (err.code === 11000) {
        err = new ErrorHandler(`Duplicate ${Object.keys(err.keyValue)} entered`, 400);
    }

    // Use updated err for status and message
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        error: true,
        message: message,
    });
};

export default ErrorHandler;