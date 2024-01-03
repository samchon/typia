import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../../structures/TypeTagArrayUnion";

export const test_json_application_swagger_standard_TypeTagArrayUnion =
  _test_json_application({
    purpose: "swagger",
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
          type: "array",
          items: {
            $ref: "#/components/schemas/TypeTagArrayUnion.Type",
          },
        },
        "TypeTagArrayUnion.Type": {
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
          nullable: false,
          required: ["items", "minItems", "maxItems", "both"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
