import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_v3_1_ObjectGeneric = _test_json_application({
  version: "3.1",
  name: "ObjectGeneric",
})({
  version: "3.1",
  components: {
    schemas: {
      ObjectGeneric: {
        type: "array",
        prefixItems: [
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
        additionalItems: {
          $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
        },
      },
      "ObjectGeneric.ISomethingboolean": {
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
  schemas: [
    {
      $ref: "#/components/schemas/ObjectGeneric",
    },
  ],
});
