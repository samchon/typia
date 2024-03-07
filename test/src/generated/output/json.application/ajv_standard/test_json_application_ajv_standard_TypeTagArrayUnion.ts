import typia from "typia";
import { TypeTagArrayUnion } from "../../../../structures/TypeTagArrayUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_TypeTagArrayUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagArrayUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagArrayUnion",
      },
    ],
    components: {
      schemas: {
        TypeTagArrayUnion: {
          $id: "#/components/schemas/TypeTagArrayUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/TypeTagArrayUnion.Type",
          },
        },
        "TypeTagArrayUnion.Type": {
          $id: "#/components/schemas/TypeTagArrayUnion.Type",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "string",
                format: "uuid",
              },
              maxItems: 3,
              minItems: 3,
            },
            minItems: {
              type: "array",
              items: {
                type: "number",
                minimum: 3,
              },
              minItems: 3,
            },
            maxItems: {
              type: "array",
              items: {
                oneOf: [
                  {
                    type: "string",
                    maxLength: 7,
                  },
                  {
                    type: "number",
                    maximum: 7,
                  },
                ],
              },
              maxItems: 7,
            },
            both: {
              type: "array",
              items: {
                type: "string",
                format: "uuid",
              },
              maxItems: 7,
              minItems: 3,
            },
          },
          required: ["items", "minItems", "maxItems", "both"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
