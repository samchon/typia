import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArrayUnion } from "../../../../structures/TypeTagArrayUnion";

export const test_json_application_v3_1_TypeTagArrayUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagArrayUnion",
  })({
    version: "3.1",
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
              minItems: 3,
              maxItems: 3,
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
              minItems: 3,
              maxItems: 7,
            },
          },
          required: ["items", "minItems", "maxItems", "both"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagArrayUnion",
      },
    ],
  });
