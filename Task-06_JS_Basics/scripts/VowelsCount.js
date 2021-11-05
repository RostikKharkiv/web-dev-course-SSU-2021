function VowelsCount(input){
    let vowels = new Set(['a','e','i', 'o', 'u']);
    let result = 0;
    input.toLowerCase().split('').forEach((item) => {
          if (vowels.has(item)){
              result++;
          }
    });
    return result;
}

console.log(VowelsCount('abracadabra'));
console.log(VowelsCount('ABRACADABRA'));
console.log(VowelsCount('o a kak ushakov lil vo kashu kakao'));
console.log(VowelsCount('my pyx'));