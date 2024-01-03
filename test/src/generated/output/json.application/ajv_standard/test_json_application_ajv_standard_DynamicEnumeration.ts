import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_json_application_ajv_standard_DynamicEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
                },
                "zh-Hans": {
                  type: "string",
                },
                "zh-Hant": {
                  type: "string",
                },
                en: {
                  type: "string",
                },
                fr: {
                  type: "string",
                },
                de: {
                  type: "string",
                },
                ja: {
                  type: "string",
                },
                ko: {
                  type: "string",
                },
                pt: {
                  type: "string",
                },
                ru: {
                  type: "string",
                },
              },
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
