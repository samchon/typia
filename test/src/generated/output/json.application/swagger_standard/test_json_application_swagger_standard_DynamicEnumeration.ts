import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_json_application_swagger_standard_DynamicEnumeration =
  _test_json_application({
    purpose: "swagger",
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
              nullable: false,
              "x-typia-jsDocTags": [],
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
