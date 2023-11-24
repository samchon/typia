import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_swagger_ObjectGeneric =
  _test_json_application("swagger")("ObjectGeneric")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGeneric",
      },
    ],
    components: {
      schemas: {
        ObjectGeneric: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingboolean",
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingnumber",
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingboolean",
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingnumber",
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
              },
            ],
            minItems: 3,
            maxItems: 3,
          },
        },
        "ObjectGeneric.ISomethingboolean": {
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
            },
            elements: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
              },
            },
          },
          nullable: false,
          required: ["value", "child", "elements"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGeneric.IChildbooleanboolean": {
          type: "object",
          properties: {
            child_value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            child_next: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGeneric.ISomethingnumber": {
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
            },
            elements: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
              },
            },
          },
          nullable: false,
          required: ["value", "child", "elements"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGeneric.IChildnumbernumber": {
          type: "object",
          properties: {
            child_value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            child_next: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGeneric.ISomethingstring": {
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
            },
            elements: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
              },
            },
          },
          nullable: false,
          required: ["value", "child", "elements"],
          "x-typia-jsDocTags": [],
        },
        "ObjectGeneric.IChildstringstring": {
          type: "object",
          properties: {
            child_value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            child_next: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
