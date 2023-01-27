const Palindrom = (str) => {
    const isPalindrom = str.split('').reverse('').join('');
    console.log(str === isPalindrom);
};
Palindrom('aabbaa');