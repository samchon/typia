import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_ajv_ObjectPartialAndRequired =
  _test_json_application("ajv")("ObjectPartialAndRequired")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPartialAndRequired",
      },
    ],
    components: {
      schemas: {
        ObjectPartialAndRequired: {
          $id: "#/components/schemas/ObjectPartialAndRequired",
          type: "object",
          properties: {
            string: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "string",
            },
            number: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "number",
            },
            boolean: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "boolean",
            },
            object: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPartialAndRequired",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            array: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            },
          },
          required: ["object", "array"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
