export function getRandomString() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * 5);
        randomString += characters[randomIndex];
    }

    return randomString;
}


export function getRandomEmail() {
    const emailDomain = '@test.com';
    const randomEmailAddress = Math.random()
        .toString(36)
        .substring(2, 9)
        .concat(emailDomain);

    return randomEmailAddress;
}

export function getRandomPassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalLetters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const specialCharacters = '!@#$%&*()_+|}{[]:;?><,./-='

    let password = '';

    password += Math.random().toString(36).substring(2, 6);
    password += letters.charAt(Math.floor(Math.random() * 1));
    password += capitalLetters.charAt(Math.floor(Math.random() * 1));
    password += numbers.charAt(Math.floor(Math.random() * 1));
    password += specialCharacters.charAt(Math.floor(Math.random() * 1));

    return password;
}

export function getRandomGender(){
    let genders = ["Mr", "Mrs", "Other"];
    var selectedGender = genders[Math.floor(Math.random() * genders.length)];

    return selectedGender;
}