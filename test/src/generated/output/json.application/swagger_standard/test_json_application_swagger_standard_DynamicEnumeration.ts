import typia from "typia";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";
import { _test_json_application } from "../../../../internal/_test_json_application";
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
