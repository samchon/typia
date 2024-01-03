import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_swagger_surplus_ObjectRequired =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectRequired",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/RequiredObjectRequired.IBase",
      },
    ],
    components: {
      schemas: {
        "RequiredObjectRequired.IBase": {
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
              $ref: "#/components/schemas/ObjectRequired.IBase.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["boolean", "number", "string", "array", "object"],
          description: "Make all properties in T required",
          "x-typia-jsDocTags": [],
        },
        "ObjectRequired.IBase.Nullable": {
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
              $ref: "#/components/schemas/ObjectRequired.IBase.Nullable",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
          },
          nullable: true,
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
