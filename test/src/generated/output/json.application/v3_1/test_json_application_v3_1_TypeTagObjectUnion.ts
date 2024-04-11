import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../../structures/TypeTagObjectUnion";

export const test_json_application_v3_1_TypeTagObjectUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagObjectUnion",
  })({
    version: "3.1",
    components: {
      schemas: {
        TypeTagObjectUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/TypeTagObjectUnion.Type",
          },
        },
        "TypeTagObjectUnion.Type": {
          oneOf: [
            {
              $ref: "#/components/schemas/TypeTagObjectUnion.Numeric",
            },
            {
              $ref: "#/components/schemas/TypeTagObjectUnion.Literal",
            },
          ],
        },
        "TypeTagObjectUnion.Numeric": {
          type: "object",
          properties: {
            value: {
              type: "number",
              minimum: 3,
            },
          },
          required: ["value"],
        },
        "TypeTagObjectUnion.Literal": {
          type: "object",
          properties: {
            value: {
              type: "string",
              minLength: 3,
              maxLength: 7,
            },
          },
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagObjectUnion",
      },
    ],
  });
