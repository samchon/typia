import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
