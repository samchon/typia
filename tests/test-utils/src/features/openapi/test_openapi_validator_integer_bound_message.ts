import { TestValidator } from "@nestia/e2e";
import { IValidation, OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies an integer bound failure reports only the width the schema declares.
 *
 * Every one of the five bounds messages used to write a fixed `Type<"int32">`
 * into its expected type, so a plain `{ type: "integer", minimum: 0 }` reported
 * a 32-bit width the schema never stated — and a schema that really did declare
 * `format: "int64"` was still reported as `int32`. The width has to come from
 * the schema: OpenAPI spells it as `format`, and `OpenApiConverter` passes an
 * external document's `format` straight through to this validator.
 *
 * 1. Violate each of the five bounds on a schema declaring no `format`, and
 *    assert no width is invented.
 * 2. Violate the same five on a schema declaring `format: "int32"`, and assert
 *    the declared width is still reported.
 * 3. Assert a differing declared width is echoed rather than flattened to
 *    `int32`, and that the verdict itself never changes.
 */
export const test_openapi_validator_integer_bound_message = (): void => {
  // Each case isolates one bound: the reporter keeps only the first error at a
  // path, so a schema violating two bounds would hide the second message.
  const bounds: Array<{
    constraint: Partial<OpenApi.IJsonSchema.IInteger>;
    tag: string;
    invalid: number;
    valid: number;
  }> = [
    { constraint: { minimum: 0 }, tag: "Minimum<0>", invalid: -1, valid: 0 },
    { constraint: { maximum: 0 }, tag: "Maximum<0>", invalid: 1, valid: 0 },
    {
      constraint: { exclusiveMinimum: 0 },
      tag: "ExclusiveMinimum<0>",
      invalid: 0,
      valid: 1,
    },
    {
      constraint: { exclusiveMaximum: 0 },
      tag: "ExclusiveMaximum<0>",
      invalid: 0,
      valid: -1,
    },
    {
      constraint: { multipleOf: 2 },
      tag: "MultipleOf<2>",
      invalid: 3,
      valid: 4,
    },
  ];

  // `format` is standard OpenAPI for an integer's width, but the normalized
  // schema type does not model it, so a declaring case has to say so in a cast.
  const widths: Array<{ format?: string; prefix: string }> = [
    { prefix: "number" },
    { format: "int32", prefix: 'number & Type<"int32">' },
    { format: "int64", prefix: 'number & Type<"int64">' },
  ];

  for (const width of widths)
    for (const bound of bounds) {
      const schema: OpenApi.IJsonSchema.IInteger = {
        type: "integer",
        ...bound.constraint,
        ...(width.format !== undefined ? { format: width.format } : {}),
      } as OpenApi.IJsonSchema.IInteger;
      const label: string = `${width.format ?? "no format"} ${bound.tag}`;

      const result: IValidation<unknown> = OpenApiValidator.validate({
        components: {},
        schema,
        value: bound.invalid,
        required: true,
      });
      TestValidator.equals(`${label} rejects`, result.success, false);
      TestValidator.equals(
        `${label} reports only declared constraints`,
        result.success === false ? result.errors.map((e) => e.expected) : [],
        [`${width.prefix} & ${bound.tag}`],
      );

      // The verdict was already right; only the explanation was wrong.
      TestValidator.equals(
        `${label} still accepts a conforming value`,
        OpenApiValidator.validate({
          components: {},
          schema,
          value: bound.valid,
          required: true,
        }).success,
        true,
      );
    }

  // `format` is read defensively because the schema type does not declare it,
  // and `OpenApiConverter` copies an external document's value through as-is.
  // A non-string must name no width rather than reach the message.
  const malformed: IValidation<unknown> = OpenApiValidator.validate({
    components: {},
    schema: {
      type: "integer",
      minimum: 0,
      format: 32,
    } as unknown as OpenApi.IJsonSchema.IInteger,
    value: -1,
    required: true,
  });
  TestValidator.equals(
    "a non-string format names no width",
    malformed.success === false ? malformed.errors.map((e) => e.expected) : [],
    ["number & Minimum<0>"],
  );
};
