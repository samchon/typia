import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../../structures/TypeTagTuple";

export const test_json_application_v3_0_TypeTagTuple = _test_json_application({
  version: "3.0",
  name: "TypeTagTuple",
})({
  version: "3.0",
  components: {
    schemas: {
      TypeTagTuple: {
        type: "object",
        properties: {
          tuple: {
            type: "array",
            items: {
              oneOf: [
                {
                  type: "string",
                  minLength: 3,
                  maxLength: 7,
                },
                {
                  type: "number",
                  minimum: 3,
                  maximum: 7,
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                    minLength: 1,
                    maxLength: 2,
                  },
                  minItems: 3,
                  maxItems: 7,
                },
                {
                  type: "array",
                  items: {
                    type: "number",
                    minimum: 1,
                    maximum: 2,
                  },
                  minItems: 3,
                  maxItems: 7,
                },
              ],
            },
            minItems: 4,
            maxItems: 4,
          },
        },
        nullable: false,
        required: ["tuple"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagTuple",
    },
  ],
});
