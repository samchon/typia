import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_json_application_ajv_standard_ArrayRecursive =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ArrayRecursive.ICategory",
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
          required: ["children", "id", "code", "sequence", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursive.ITimestamp": {
          $id: "#/components/schemas/ArrayRecursive.ITimestamp",
          type: "object",
          properties: {
            time: {
              type: "number",
            },
            zone: {
              type: "number",
            },
          },
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
