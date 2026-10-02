import { OpenApiTypeChecker, OpenApiValidator } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies URI templates permit dots between nonempty variable-name runs.
 *
 * RFC 6570 section 2.3 permits dotted variable names. Consecutive and trailing
 * dots remain invalid, while a leading dot is the label-expansion operator.
 *
 * 1. Validate dotted, encoded and exploded names against the format.
 * 2. Reject empty dotted runs and a misplaced operator.
 * 3. Check both direct validation and constant-schema coverage decisions.
 */
export const test_openapi_uri_template_dotted_variables = (): void => {
  const schema = { type: "string" as const, format: "uri-template" };
  const validate = OpenApiValidator.create({
    components: {},
    schema,
    required: true,
  });
  for (const [input, expected] of [
    ["{foo.bar}", true],
    ["{?foo.bar,baz%20.qux:12}", true],
    ["{foo.bar*}", true],
    ["{.foo}", true],
    ["literal.dot/{foo}", true],
    ["{foo..bar}", false],
    ["{foo.}", false],
    ["{.foo?}", false],
  ] as const) {
    assert.equal(validate(input).success, expected, input);
    assert.equal(
      OpenApiTypeChecker.covers({
        components: {},
        x: schema,
        y: { const: input },
      }),
      expected,
      input,
    );
  }
};
