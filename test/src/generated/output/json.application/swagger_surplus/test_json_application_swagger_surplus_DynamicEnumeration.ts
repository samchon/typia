import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_json_application_swagger_surplus_DynamicEnumeration =
  _test_json_application({
    purpose: "swagger",
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
              nullable: false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
