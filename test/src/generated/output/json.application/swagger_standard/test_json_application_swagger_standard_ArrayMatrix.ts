import typia from "typia";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ArrayMatrix =
  _test_json_application({
    purpose: "swagger",
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
    purpose: "swagger",
    surplus: false,
  });
