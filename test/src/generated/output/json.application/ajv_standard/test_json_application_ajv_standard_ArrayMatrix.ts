import typia from "typia";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ArrayMatrix =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayMatrix",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayMatrix",
      },
    ],
    components: {
      schemas: {
        ArrayMatrix: {
          $id: "#/components/schemas/ArrayMatrix",
          type: "array",
          items: {
            type: "array",
            items: {
              type: "array",
              items: {
                type: "number",
              },
            },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
