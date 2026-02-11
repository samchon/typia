import { TestValidator } from "@nestia/e2e";
import { IValidation, OpenApi } from "@samchon/openapi";
import { NamingConvention } from "@samchon/openapi/src/utils/NamingConvention";
import { OpenApiValidator } from "@samchon/openapi/src/utils/OpenApiValidator";
import { Spoiler } from "@typia/template";

export const _test_validateEquals = <T>(props: {
  schema: OpenApi.IJsonSchema;
  components: OpenApi.IComponents;
  factory: {
    generate: () => T;
    SPOILERS?: Spoiler<T>[];
  };
  name: string;
}): void => {
  const validate = OpenApiValidator.create({
    components: props.components,
    schema: props.schema,
    required: true,
    equals: true,
  });
  const input: T = props.factory.generate();
  const expected: string[] = (() => {
    const accessors: string[] = [];
    spoil(accessors, "$input", input);
    return accessors.sort();
  })();
  const result: IValidation<unknown> = validate(input);
  const actual: string[] = result.success
    ? []
    : result.errors.map((e) => e.path).sort();
  TestValidator.equals("superfluous", expected, actual);
};

function spoil(accessors: string[], path: string, input: any): void {
  if (Array.isArray(input)) spoil_array(accessors, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    spoil_object(accessors, path, input);
}

function spoil_object(accessors: string[], path: string, obj: any): void {
  obj[KEY] = KEY;
  accessors.push(`${path}.${KEY}`);

  for (const [key, value] of Object.entries(obj))
    spoil(
      accessors,
      NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
}

function spoil_array(accessors: string[], path: string, array: any[]): void {
  array.forEach((elem, i) => spoil(accessors, `${path}[${i}]`, elem));
}

const KEY = "non_regular_member";
