import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter } from "@typia/utils";
import { Ajv2020 } from "ajv/dist/2020.js";

/**
 * Verifies a strict consumer can compile the downgraded schema object directly.
 *
 * Ajv checks enumerable keyword names even when their values are undefined. A
 * JSON round trip before compilation would hide an invented keyword.
 *
 * 1. Downgrade a component containing a closed tuple and a choice.
 * 2. Compile the component and its reference, then exercise both alternatives, a
 *    wrong element type and the tuple's length bounds.
 * 3. Check the empty schema has no keywords and an explicit null example survives.
 */
export const test_json_schema_downgrade_v31_absent_keywords = (): void => {
  const components: OpenApi.IComponents = {
    schemas: {
      Entry: {
        type: "array",
        prefixItems: [
          {
            oneOf: [{ type: "string", example: undefined }, { type: "number" }],
          },
        ],
        additionalItems: false,
      },
    },
  };
  const downgraded = OpenApiConverter.downgradeComponents(components, "3.1");
  const root = OpenApiConverter.downgradeSchema({
    components,
    downgraded,
    version: "3.1",
    schema: { $ref: "#/components/schemas/Entry" },
  });
  const ajv = new Ajv2020({ strict: true });
  ajv.addSchema(downgraded.schemas!.Entry!, "#/components/schemas/Entry");
  const validate = ajv.compile(root);
  TestEquality.equals("string", validate(["x"]), true);
  TestEquality.equals("number", validate([0]), true);
  TestEquality.equals("boolean", validate([false]), false);
  TestEquality.equals("empty", validate([]), false);
  TestEquality.equals("extra item", validate(["x", 0]), false);

  const empty = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    version: "3.1",
    schema: {},
  });
  TestEquality.equals("empty schema keywords", Object.keys(empty), []);

  const annotated = OpenApiConverter.downgradeSchema({
    components: {},
    downgraded: {},
    version: "3.1",
    schema: { type: "string", example: null },
  });
  TestEquality.equals("explicit null example", annotated.example, null);
};
