import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_v3_1_ObjectRequired = _test_json_application(
  {
    version: "3.1",
    name: "ObjectRequired",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      "RequiredObjectRequired.IBase": {
        type: "object",
        properties: {
          boolean: {
            type: "boolean",
          },
          number: {
            type: "number",
          },
          string: {
            type: "string",
          },
          array: {
            type: "array",
            items: {
              type: "number",
            },
          },
          object: {
            oneOf: [
              {
                type: "null",
              },
              {
                $ref: "#/components/schemas/ObjectRequired.IBase",
              },
            ],
          },
        },
        required: ["boolean", "number", "string", "array", "object"],
        description: "Make all properties in T required",
      },
      "ObjectRequired.IBase": {
        type: "object",
        properties: {
          boolean: {
            type: "boolean",
          },
          number: {
            type: "number",
          },
          string: {
            type: "string",
          },
          array: {
            type: "array",
            items: {
              type: "number",
            },
          },
          object: {
            oneOf: [
              {
                type: "null",
              },
              {
                $ref: "#/components/schemas/ObjectRequired.IBase",
              },
            ],
          },
        },
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/RequiredObjectRequired.IBase",
    },
  ],
});
