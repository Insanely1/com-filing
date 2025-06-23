// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "No token provided", success: false, error: true });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
    req.user = decoded; // attaches { id: userId } to request
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token", success: false, error: true });
  }
};

export default authMiddleware;
