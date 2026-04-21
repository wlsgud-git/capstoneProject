import jwt from "jsonwebtoken";

import { config } from "../config/env.config";

// 토큰 생성
export const createJwt = async (payload, type) => {
  try {
    const access_token = await jwt.sign(payload, config.jwt.secret_key, {
      expiresIn: type == "access" ? "10m" : "7d",
    });
    return access_token;
  } catch (err) {
    throw err;
  }
};

// 토큰 검증
export const verifyJwt = async (token) => {
  try {
    const result = await jwt.verify(token, config.jwt.secret_key);
    return result;
  } catch (err) {
    throw err;
  }
};
