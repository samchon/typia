import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";

export const test_json_application_swagger_ArrayRepeatedNullable =
  _test_json_application("swagger")("ArrayRepeatedNullable")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedNullable",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedNullable: {
          oneOf: [
            {
              type: "string",
              nullable: true,
            },
            {
              type: "number",
              nullable: true,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedNullable",
              },
              nullable: true,
            },
          ],
        },
      },
    },
    purpose: "swagger",
  });
