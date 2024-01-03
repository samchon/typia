import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagObjectUnion } from "../../../../structures/TypeTagObjectUnion";

export const test_json_application_swagger_standard_TypeTagObjectUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagObjectUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagObjectUnion",
      },
    ],
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
          "x-typia-jsDocTags": [],
        },
        "TypeTagObjectUnion.Literal": {
          type: "object",
          properties: {
            value: {
              type: "string",
              maxLength: 7,
              minLength: 3,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
