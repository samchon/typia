import { IValidation, OpenApi } from "@typia/interface";
import { Spoiler } from "@typia/template";
import { OpenApiValidator } from "@typia/utils";

export const _test_validate = <T>(props: {
  schema: OpenApi.IJsonSchema;
  components: OpenApi.IComponents;
  factory: {
    generate: () => T;
    SPOILERS?: Spoiler<T>[];
  };
  name: string;
}): void => {
  const input: T = props.factory.generate();
  const validate = OpenApiValidator.create({
    components: props.components,
    schema: props.schema,
    required: true,
  });
  const result: IValidation<unknown> = validate(input);

  if (result.success === false) {
    console.log("errors", result.data, result.errors);
    throw new Error(
      `Bug on OpenApiValidator.validate(): failed to understand the ${props.name} type.`,
    );
  } else if (result.data !== input)
    throw new Error(
      "Bug on OpenApiValidator.validate(): failed to archive the input value.",
    );

  const wrong: ISpoiled[] = [];
  for (const spoil of props.factory.SPOILERS ?? []) {
    const elem: T = props.factory.generate();
    const expected: string[] = spoil(elem);
    const valid: IValidation<unknown> = validate(elem);

    if (valid.success === true) {
      console.log(expected);
      throw new Error(
        `Bug on typia.validate(): failed to detect error on the ${props.name} type.`,
      );
    }

    expected.sort();
    valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

    if (
      valid.errors.length !== expected.length ||
      valid.errors.every((e, i) => e.path === expected[i]) === false
    )
      wrong.push({
        expected,
        actual: valid.errors.map((e) => e.path),
      });
  }
  // @todo
  // if (wrong.length !== 0) {
  //   console.log(wrong);
  //   throw new Error(
  //     `Bug on typia.validate(): failed to detect error on the ${props.name} type.`,
  //   );
  // }
};

interface ISpoiled {
  expected: string[];
  actual: string[];
}
