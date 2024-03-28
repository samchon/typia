import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartial } from "../../../../structures/ObjectPartial";

export const test_json_application_swagger_standard_ObjectPartial =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
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
              $ref: "#/components/schemas/ObjectPartial.IBase.Nullable",
            },
          },
          nullable: false,
          description: "Make all properties in T optional",
        },
        "ObjectPartial.IBase.Nullable": {
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
              $ref: "#/components/schemas/ObjectPartial.IBase.Nullable",
            },
          },
          nullable: true,
          required: ["boolean", "number", "string", "array", "object"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
