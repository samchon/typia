import typia, { CamelCase, PascalCase, SnakeCase } from "typia";

export const test_issue_1172_upper_cased_snake_case = (): void => {
  const something: Something = typia.random<Something>();
  const x: CamelCase<Something> = typia.notations.camel(something);
  const y: PascalCase<Something> = typia.notations.pascal(something);
  const z: SnakeCase<Something> = typia.notations.snake(something);

  typia.assertEquals<SomethingOfCamel>(x);
  typia.assertEquals<SomethingOfPascal>(y);
  typia.assertEquals<SomethingOfSnake>(z);
};

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
