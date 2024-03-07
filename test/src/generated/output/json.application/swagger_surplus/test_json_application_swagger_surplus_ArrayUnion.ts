import typia from "typia";
import { ArrayUnion } from "../../../../structures/ArrayUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ArrayUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayUnion",
      },
    ],
    components: {
      schemas: {
        ArrayUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayUnion.IUnion",
          },
        },
        "ArrayUnion.IUnion": {
          oneOf: [
            {
              type: "array",
              items: {
                type: "boolean",
              },
            },
            {
              type: "array",
              items: {
                type: "number",
              },
            },
            {
              type: "array",
              items: {
                type: "string",
              },
            },
          ],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
