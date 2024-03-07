import typia from "typia";
import { DynamicArray } from "../../../../structures/DynamicArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_DynamicArray =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicArray",
      },
    ],
    components: {
      schemas: {
        DynamicArray: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              nullable: false,
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
