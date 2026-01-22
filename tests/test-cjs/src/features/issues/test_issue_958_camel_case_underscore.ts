import typia from "typia";

export const test_issue_958_camel_case_underscore = () => {
  interface Lower {
    _id: string;
    __id: string;
    ___id_something: string;
    ___idNothing: string;
  }
  interface Upper {
    Id: string;
    _Id: string;
    _Id_Something: string;
    _IdNothing: string;
  }
  validate<Lower>({
    random: typia.createRandom<Lower>(),
    camel: typia.notations.createCamel<Lower>(),
    pascal: typia.notations.createPascal<Lower>(),
    assertCamel: typia.createAssert<typia.CamelCase<Lower>>(),
    assertPascal: typia.createAssert<typia.PascalCase<Lower>>(),
  });
  validate<Upper>({
    random: typia.createRandom<Upper>(),
    camel: typia.notations.createCamel<Upper>(),
    pascal: typia.notations.createPascal<Upper>(),
    assertCamel: typia.createAssert<typia.CamelCase<Upper>>(),
    assertPascal: typia.createAssert<typia.PascalCase<Upper>>(),
  });
};

const validate = <T>(props: {
  random: () => T;
  pascal: (value: T) => typia.PascalCase<T>;
  camel: (value: T) => typia.CamelCase<T>;
  assertCamel: (value: typia.CamelCase<T>) => typia.CamelCase<T>;
  assertPascal: (value: typia.PascalCase<T>) => typia.PascalCase<T>;
}) => {
  const value: T = props.random();
  props.assertCamel(props.camel(value));
  props.assertPascal(props.pascal(value));
};
