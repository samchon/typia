import { TestValidator } from "@nestia/e2e";
import { IValidation, OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies the schema naming rule names each numeric constraint the schema
 * declares, with its own value.
 *
 * `OpenApiSchemaNamingRule` used to read `exclusiveMinimum`/`exclusiveMaximum`
 * as booleans gating the `minimum`/`maximum` branch, so an exclusive bound alone
 * named itself just `number`, a paired `minimum` leaked its value under the
 * exclusive name, and the falsy-but-declared `exclusiveMinimum: 0` vanished. The
 * declaration (`OpenApi.IJsonSchema.IInteger`/`INumber`) is authoritative: those
 * fields are numbers. A declared integer `format` — carried through an external
 * document by `OpenApiConverter` — is likewise dropped; it must echo as
 * `tags.Type<...>`, agreeing with `OpenApiIntegerValidator.describeType`.
 *
 * 1. For each schema, validate a wrong-typed value so the report's `expected`
 *    is exactly the top-level type name the naming rule produced.
 * 2. Assert that name states every declared constraint with its own value,
 *    including the `exclusiveMinimum: 0` boundary and a declared integer format.
 * 3. Keep the negative regressions: a bare integer/number invents no format,
 *    and a number never echoes a format its validator does not report.
 */
export const test_openapi_naming_numeric_constraints = (): void => {
  const matrix: Array<{
    title: string;
    schema: OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INumber;
    expected: string;
  }> = [
    // INTEGER — exclusive bounds read as numbers, independent of minimum/maximum
    {
      title: "integer exclusiveMinimum alone",
      schema: { type: "integer", exclusiveMinimum: 5 },
      expected: "number & tags.ExclusiveMinimum<5>",
    },
    {
      title: "integer minimum and exclusiveMinimum together",
      schema: { type: "integer", minimum: 0, exclusiveMinimum: 5 },
      expected: "number & tags.Minimum<0> & tags.ExclusiveMinimum<5>",
    },
    {
      title: "integer exclusiveMinimum zero boundary",
      schema: { type: "integer", exclusiveMinimum: 0 },
      expected: "number & tags.ExclusiveMinimum<0>",
    },
    {
      title: "integer exclusiveMaximum alone",
      schema: { type: "integer", exclusiveMaximum: 7 },
      expected: "number & tags.ExclusiveMaximum<7>",
    },
    {
      title: "integer maximum and exclusiveMaximum together",
      schema: { type: "integer", maximum: 10, exclusiveMaximum: 7 },
      expected: "number & tags.Maximum<10> & tags.ExclusiveMaximum<7>",
    },
    // INTEGER — declared format echoed as tags.Type<...>
    {
      title: "integer declared format int32",
      schema: { type: "integer", format: "int32" } as OpenApi.IJsonSchema.IInteger,
      expected: 'number & tags.Type<"int32">',
    },
    {
      title: "integer format and bounds combined",
      schema: {
        type: "integer",
        format: "int64",
        minimum: 3,
        exclusiveMaximum: 9,
      } as OpenApi.IJsonSchema.IInteger,
      expected:
        'number & tags.Type<"int64"> & tags.Minimum<3> & tags.ExclusiveMaximum<9>',
    },
    // INTEGER — regressions: no invented format, plain bounds unchanged
    {
      title: "bare integer invents no format",
      schema: { type: "integer" },
      expected: "number",
    },
    {
      title: "integer minimum alone unchanged",
      schema: { type: "integer", minimum: 0 },
      expected: "number & tags.Minimum<0>",
    },
    {
      title: "integer multipleOf unchanged",
      schema: { type: "integer", multipleOf: 3 },
      expected: "number & tags.MultipleOf<3>",
    },
    // NUMBER — exclusive bounds read as numbers, independent of minimum/maximum
    {
      title: "number exclusiveMinimum alone",
      schema: { type: "number", exclusiveMinimum: 5 },
      expected: "number & tags.ExclusiveMinimum<5>",
    },
    {
      title: "number exclusiveMinimum zero boundary",
      schema: { type: "number", exclusiveMinimum: 0 },
      expected: "number & tags.ExclusiveMinimum<0>",
    },
    {
      title: "number minimum and exclusiveMaximum together",
      schema: { type: "number", minimum: -1.5, exclusiveMaximum: 2.5 },
      expected: "number & tags.Minimum<-1.5> & tags.ExclusiveMaximum<2.5>",
    },
    // NUMBER — regression: number never echoes a format (its validator does not)
    {
      title: "number ignores format its validator never reports",
      schema: { type: "number", format: "double" } as OpenApi.IJsonSchema.INumber,
      expected: "number",
    },
    {
      title: "number minimum alone unchanged",
      schema: { type: "number", minimum: 0 },
      expected: "number & tags.Minimum<0>",
    },
  ];

  for (const { title, schema, expected } of matrix) {
    const result: IValidation<unknown> = OpenApiValidator.validate({
      components: {},
      schema,
      value: "not-a-number",
      required: true,
    });
    if (result.success)
      throw new Error(`Expected "${title}" to fail against a non-number value.`);
    TestValidator.equals(title, expected, result.errors[0]?.expected);
  }
};
