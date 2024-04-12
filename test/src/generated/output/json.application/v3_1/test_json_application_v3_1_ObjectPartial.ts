import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartial } from "../../../../structures/ObjectPartial";

export const test_json_application_v3_1_ObjectPartial = _test_json_application({
  version: "3.1",
  name: "ObjectPartial",
})({
  version: "3.1",
  components: {
    schemas: {
      "PartialObjectPartial.IBase": {
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
                $ref: "#/components/schemas/ObjectPartial.IBase",
              },
            ],
          },
        },
        description: "Make all properties in T optional",
      },
      "ObjectPartial.IBase": {
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
                $ref: "#/components/schemas/ObjectPartial.IBase",
              },
            ],
          },
        },
        required: ["boolean", "number", "string", "array", "object"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/PartialObjectPartial.IBase",
    },
  ],
});
