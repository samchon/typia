import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_json_application_swagger_ArrayRepeatedRequired =
  _test_json_application("swagger")("ArrayRepeatedRequired")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedRequired",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedRequired: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedRequired",
              },
            },
          ],
        },
      },
    },
    purpose: "swagger",
  });
