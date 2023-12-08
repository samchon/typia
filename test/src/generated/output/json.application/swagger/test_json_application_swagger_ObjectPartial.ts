import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartial } from "../../../../structures/ObjectPartial";

export const test_json_application_swagger_ObjectPartial =
  _test_json_application("swagger")("ObjectPartial")({
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
              $ref: "#/components/schemas/ObjectPartial.IBase.Nullable",
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
              $ref: "#/components/schemas/ObjectPartial.IBase.Nullable",
            },
          },
          nullable: true,
          required: ["boolean", "number", "string", "array", "object"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
