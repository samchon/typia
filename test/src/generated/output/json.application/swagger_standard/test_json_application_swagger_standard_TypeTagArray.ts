import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArray } from "../../../../structures/TypeTagArray";

export const test_json_application_swagger_standard_TypeTagArray =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagArray",
      },
    ],
    components: {
      schemas: {
        TypeTagArray: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagArray.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagArray.Type": {
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
            both: {
              type: "array",
              items: {
                type: "string",
                format: "uuid",
              },
              maxItems: 7,
              minItems: 3,
            },
            equal: {
              type: "array",
              items: {
                type: "number",
                maximum: 10,
                minimum: 10,
              },
              maxItems: 10,
              minItems: 10,
            },
          },
          nullable: false,
          required: ["items", "minItems", "both", "equal"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
