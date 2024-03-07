import typia from "typia";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_DynamicUndefined =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicUndefined",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicUndefined",
      },
    ],
    components: {
      schemas: {
        DynamicUndefined: {
          $id: "#/components/schemas/DynamicUndefined",
          type: "object",
          properties: {},
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
