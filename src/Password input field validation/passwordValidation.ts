
const ERROR_MESSAGE = {
  minimum8Characters: 'Password must be at least 8 characters',
  minimum2Numbers: 'The password must contain at least 2 numbers',
  minimum1CapitalLetter: 'Password must contain at least one capital letter',
  minimum1SpecialCharacter: 'Password must contain at least one special character',
};

const concatErrorMessages = (errorMessage: string, newMessage: string) => {
  if (errorMessage.length) {
    return errorMessage.concat('\n', newMessage);
  }

  return newMessage;
};

export const checkPasswordHasEightCharacters = (password: string, errorMessage: string) => {
  if (password.length >= 8) {
    return errorMessage;
  }

  const newMessage = ERROR_MESSAGE.minimum8Characters;
  return concatErrorMessages(errorMessage, newMessage);
};

const checkPasswordHasTwoNumbers = (password: string, errorMessage: string) => {
  const regex = /\d/g;
  const passwordWithNumbers = password.match(regex);

  if (passwordWithNumbers && passwordWithNumbers?.length >= 2) {
    return errorMessage;
  }

  const newMessage = ERROR_MESSAGE.minimum2Numbers;
  return concatErrorMessages(errorMessage, newMessage);
};

const checkPasswordHasOneCapitalLetter = (password: string, errorMessage: string) => {
  const regex = /[A-Z]/g;
  const passwordWithCapitalLetter = password.match(regex);

  if (passwordWithCapitalLetter) {
    return errorMessage;
  }

  const newMessage = ERROR_MESSAGE.minimum1CapitalLetter;
  return concatErrorMessages(errorMessage, newMessage);
};

const checkPasswordHasOneSpecialCharacter = (password: string, errorMessage: string) => {
  const regex = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
  const passwordWithSpecialCharacter = password.match(regex);

  if (passwordWithSpecialCharacter) {
    return errorMessage;
  }

  const newMessage = ERROR_MESSAGE.minimum1SpecialCharacter;
  return concatErrorMessages(errorMessage, newMessage);
};

export const passwordValidation = (password: string) => {
  let errorMessage = '';

  errorMessage = checkPasswordHasEightCharacters(password, errorMessage);
  errorMessage = checkPasswordHasTwoNumbers(password, errorMessage);
  errorMessage = checkPasswordHasOneCapitalLetter(password, errorMessage);
  errorMessage = checkPasswordHasOneSpecialCharacter(password, errorMessage);

  const result = {
    isValidPassword: !errorMessage,
    validationErrors: errorMessage,
  };

  return result;
};

