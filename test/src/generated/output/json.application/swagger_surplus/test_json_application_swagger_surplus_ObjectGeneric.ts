import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_swagger_surplus_ObjectGeneric =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectGeneric",
  })({
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
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingnumber",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
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
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            child_next: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            child_next: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            child_next: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
