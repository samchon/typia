import typia from "typia";
import { ObjectPartial } from "../../../../structures/ObjectPartial";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectPartial =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectPartial",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/PartialObjectPartial.IBase",
      },
    ],
    components: {
      schemas: {
        "PartialObjectPartial.IBase": {
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            number: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            string: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            object: {
              $ref: "#/components/schemas/ObjectPartial.IBase.Nullable",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          description: "Make all properties in T optional",
          "x-typia-jsDocTags": [],
        },
        "ObjectPartial.IBase.Nullable": {
          type: "object",
          properties: {
            boolean: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            number: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            string: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            array: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            object: {
              $ref: "#/components/schemas/ObjectPartial.IBase.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["boolean", "number", "string", "array", "object"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
