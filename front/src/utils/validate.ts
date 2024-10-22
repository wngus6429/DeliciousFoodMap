type UserInfomation = {
  email: string;
  password: string;
};

function validateUser(values: UserInfomation) {
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

function validateLogin(values: UserInfomation) {
  return validateUser(values);
}

function validateSignup(values: UserInfomation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const singupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    singupErrors.passwordConfirm = '비밀번호가 일치하지 않음';
  }
  return singupErrors;
}

export {validateLogin, validateSignup};
