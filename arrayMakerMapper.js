// problem: make an array from a number but don't use a for loop. Instead use .map


const make = (n) => [...Array(n)].map((_, i) => i + 1);

make(15);

// now, take the function and add some word or phrase to it

const letsMakeAUselessThing = (n, str) => [...Array(n)]
    .map((_, i) => i + 1)
      .map(num => num + str);

// looks good but we can reduce it a bit more and make it sharper:

const letsMakeAUselessThing = (n,str) =>
  [...Array(n)]
  .map((_, i) => `${ i + 1 } ${str}`);

letsMakeAUselessThing(10,'figgy bars');
