import typia from "typia";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ArrayRecursive =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayRecursive",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursive.ICategory",
      },
    ],
    components: {
      schemas: {
        "ArrayRecursive.ICategory": {
          type: "object",
          properties: {
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursive.ICategory",
              },
            },
            id: {
              type: "number",
            },
            code: {
              type: "string",
            },
            sequence: {
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
            },
          },
          nullable: false,
          required: ["children", "id", "code", "sequence", "created_at"],
        },
        "ArrayRecursive.ITimestamp": {
          type: "object",
          properties: {
            time: {
              type: "number",
            },
            zone: {
              type: "number",
            },
          },
          nullable: false,
          required: ["time", "zone"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
