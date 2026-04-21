import express, { Router } from "express";

const router = express.Router();

// 로그인
router.post("/login", (req, res) => {
  const { student_id, password } = req.body;
  console.log(student_id, password);
});

// 회원가입;
router.post("/singup", (req, rse) => {
  const { student_id, name, password, password_Check } = req.body;
  console.log(student_id, name, password, password_Check);
});

module.exports = router;
