type UserInfomation = {
  email: string;
  password: string;
};

function validateLogin(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아님';
  }
  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = '비밀번호는 8자 이상 20자 이하여야 함';
  }
  return errors;
}

export {validateLogin};
