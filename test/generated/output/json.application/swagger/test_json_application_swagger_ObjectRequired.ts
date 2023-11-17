import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_swagger_ObjectRequired =
  _test_json_application("swagger")("ObjectRequired")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            number: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            string: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
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
            object: {
              $ref: "#/components/schemas/ObjectRequired.IBase.Nullable",
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
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "boolean",
            },
            number: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "number",
            },
            string: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "string",
            },
            array: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": true,
                type: "number",
              },
            },
            object: {
              $ref: "#/components/schemas/ObjectRequired.IBase.Nullable",
            },
          },
          nullable: true,
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
