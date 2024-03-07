import typia from "typia";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_DynamicEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicEnumeration",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicEnumeration",
      },
    ],
    components: {
      schemas: {
        DynamicEnumeration: {
          $id: "#/components/schemas/DynamicEnumeration",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                ar: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                "zh-Hans": {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                "zh-Hant": {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                en: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                fr: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                de: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                ja: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                ko: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                pt: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
                ru: {
                  type: "string",
                  "x-typia-required": false,
                  "x-typia-optional": true,
                },
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
