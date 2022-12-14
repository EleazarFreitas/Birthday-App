let currAge;

export function getCurrAge(date) {
    const currDate = new Date().getTime();
    const dateOfBirth = new Date(date).getTime();
    const oneYear = 31536000000;
    currAge = Math.floor((currDate - dateOfBirth) / oneYear);
    return currAge;
};