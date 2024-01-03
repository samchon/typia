import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../../structures/TypeTagMatrix";

export const test_json_application_swagger_standard_TypeTagMatrix =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagMatrix",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagMatrix",
      },
    ],
    components: {
      schemas: {
        TypeTagMatrix: {
          type: "object",
          properties: {
            matrix: {
              type: "array",
              items: {
                type: "array",
                items: {
                  type: "string",
                  format: "uuid",
                },
                maxItems: 4,
                minItems: 4,
              },
              maxItems: 3,
              minItems: 3,
            },
          },
          nullable: false,
          required: ["matrix"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
