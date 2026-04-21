-- 유저 테이블
create table users (
    student_id varchar(10) not null primary key,
    name varchar not null,
    password varchar not null
)

-- 채팅 기록 테이블
create table chatContent(
    student_id varchar(10) not null,
    question varchar not null,
    answer varchar not null,
)