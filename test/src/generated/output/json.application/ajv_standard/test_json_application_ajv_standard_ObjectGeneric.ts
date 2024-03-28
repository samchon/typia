import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_ajv_standard_ObjectGeneric =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
          $id: "#/components/schemas/ObjectGeneric",
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
        "ObjectGeneric.ISomethingboolean": {
          $id: "#/components/schemas/ObjectGeneric.ISomethingboolean",
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
              },
            },
          },
          required: ["value", "child", "elements"],
        },
        "ObjectGeneric.IChildbooleanboolean": {
          $id: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
          type: "object",
          properties: {
            child_value: {
              type: "boolean",
            },
            child_next: {
              type: "boolean",
            },
          },
          required: ["child_value", "child_next"],
        },
        "ObjectGeneric.ISomethingnumber": {
          $id: "#/components/schemas/ObjectGeneric.ISomethingnumber",
          type: "object",
          properties: {
            value: {
              type: "number",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
              },
            },
          },
          required: ["value", "child", "elements"],
        },
        "ObjectGeneric.IChildnumbernumber": {
          $id: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
          type: "object",
          properties: {
            child_value: {
              type: "number",
            },
            child_next: {
              type: "number",
            },
          },
          required: ["child_value", "child_next"],
        },
        "ObjectGeneric.ISomethingstring": {
          $id: "#/components/schemas/ObjectGeneric.ISomethingstring",
          type: "object",
          properties: {
            value: {
              type: "string",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
              },
            },
          },
          required: ["value", "child", "elements"],
        },
        "ObjectGeneric.IChildstringstring": {
          $id: "#/components/schemas/ObjectGeneric.IChildstringstring",
          type: "object",
          properties: {
            child_value: {
              type: "string",
            },
            child_next: {
              type: "string",
            },
          },
          required: ["child_value", "child_next"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
