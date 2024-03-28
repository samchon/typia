import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_json_application_ajv_surplus_ArrayRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            sequence: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            zone: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
