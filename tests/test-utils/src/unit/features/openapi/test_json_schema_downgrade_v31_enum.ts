import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies an OpenAPI 3.1 downgrade keeps constant unions as const branches.
 *
 * OpenAPI 3.1 inherits JSON Schema's const, so constants need no enum
 * rewriting. The downgrade must not apply the 3.0 enum collapse to a 3.1
 * target.
 *
 * 1. Build an emended oneOf of three string constants with title and description.
 * 2. Downgrade it to 3.1.
 * 3. Assert the oneOf const branches and annotations are unchanged.
 */
export const test_json_schema_downgrade_v31_enum = () => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  };
  const downgraded: OpenApiV3_1.IJsonSchema = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    schema,
    version: "3.1",
  });
  TestEquality.equals("enum", downgraded, {
    oneOf: [{ const: "a" }, { const: "b" }, { const: "c" }],
    title: "something",
    description: "nothing",
  });
};
