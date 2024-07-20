import typia from "typia";

interface Something {
  something: string;
  SOMETHING: string;

  somethingMusic: string;
  SomethingMusic: string;
  something_music: string;
  SOMETHING_MUSIC: string;

  x__y__z__and__something: string;
}
interface SomethingOfCamel {
  something: string;
  somethingMusic: string;
  xYZAndSomething: string;
}
interface SomethingOfPascal {
  Something: string;
  SOMETHING: string;
  SomethingMusic: string;
  XYZAndSomething: string;
}
interface SomethingOfSnake {
  something: string;
  something_music: string;
  x__y__z__and__something: string;
}

const something: Something = typia.random<Something>();
const x = typia.notations.camel(something);
const y = typia.notations.pascal(something);
const z = typia.notations.snake(something);

console.log(x);
typia.assertEquals<SomethingOfCamel>(x);

console.log(y);
typia.assertEquals<SomethingOfPascal>(y);

console.log(z);
typia.assertEquals<SomethingOfSnake>(z);
