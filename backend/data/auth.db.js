import { dbPlay } from "../utils/db.utils.js";
import { config } from "../config/env.config.js";

// 로그인 db조회
const login = async (student_id, password) => {
  try {
    const query = await `SELECT * FROM USERS WHERE student_id=$1, password=$2`;
    const info = [student_id, password];

    return await dbPlay(query, info);
  } catch (err) {}
};

// db에 유저 정보 넣기
const signup = async (student_id, name, password) => {
  try {
    const query = await `INSERT INTO USERS VALUES($1,$2,$3)`;
    const info = [student_id, name, password];

    return await dbPlay(query, info);
  } catch (err) {}
};
