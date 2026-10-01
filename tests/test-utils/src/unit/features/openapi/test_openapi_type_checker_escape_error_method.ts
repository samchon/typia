import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies a failed escape names `OpenApiTypeChecker.escape` as its method.
 *
 * The transform error tells a caller which operation rejected its schema. The
 * escape operation used to report the nonexistent name
 * `OpenApiTypeChecker.method`, so a log line pointed at no function.
 *
 * 1. Escape a reference whose component is missing.
 * 2. Escape a recursive reference with recursion disabled.
 * 3. Require both failures to name the escape operation.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiTypeChecker.escape runs on a dangling reference and on a recursive one with recursion disabled, and the reported method of each failure is compared, so a wrong operation name changes the result.
 * @evidence contracts/testing.md#independent-expectations The expected name is the public operation's own name, `OpenApiTypeChecker.escape`, which follows from the exported identifier and not from the implementation's computation.
 * @evidence contracts/testing.md#distinguishing-cases Two different failure causes, a missing component and disallowed recursion, each report the method, and a successful escape of a non-reference schema is the adjacent case that must report no error.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json; the operation runs in process on authored components with no native build, installation or host.
 */
export const test_openapi_type_checker_escape_error_method = (): void => {
  const components: OpenApi.IComponents = {
    schemas: {
      Node: {
        type: "object",
        properties: {
          next: { $ref: "#/components/schemas/Node" },
        },
      },
    },
  };

  const missing = OpenApiTypeChecker.escape({
    components,
    schema: { $ref: "#/components/schemas/Missing" },
    recursive: 0,
  });
  if (missing.success) throw new Error("A dangling reference must fail.");
  TestEquality.equals(
    "missing component",
    missing.error.method,
    "OpenApiTypeChecker.escape",
  );

  const recursive = OpenApiTypeChecker.escape({
    components,
    schema: { $ref: "#/components/schemas/Node" },
    recursive: false,
  });
  if (recursive.success)
    throw new Error("A recursive reference must fail when recursion is off.");
  TestEquality.equals(
    "recursion disabled",
    recursive.error.method,
    "OpenApiTypeChecker.escape",
  );

  const plain = OpenApiTypeChecker.escape({
    components,
    schema: { type: "string" },
    recursive: false,
  });
  TestEquality.equals("plain schema", plain.success, true);
};
