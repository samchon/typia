import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_swagger_standard_ObjectRequired =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
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
              $ref: "#/components/schemas/ObjectRequired.IBase.Nullable",
            },
          },
          nullable: false,
          required: ["boolean", "number", "string", "array", "object"],
          description: "Make all properties in T required",
        },
        "ObjectRequired.IBase.Nullable": {
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
              $ref: "#/components/schemas/ObjectRequired.IBase.Nullable",
            },
          },
          nullable: true,
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
