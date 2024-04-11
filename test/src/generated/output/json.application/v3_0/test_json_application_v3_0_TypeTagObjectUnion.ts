import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../../structures/TypeTagObjectUnion";

export const test_json_application_v3_0_TypeTagObjectUnion =
  _test_json_application({
    version: "3.0",
    name: "TypeTagObjectUnion",
  })({
    version: "3.0",
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
          nullable: false,
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
          nullable: false,
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
