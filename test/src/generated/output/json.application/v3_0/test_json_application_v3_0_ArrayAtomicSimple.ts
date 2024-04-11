import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";

export const test_json_application_v3_0_ArrayAtomicSimple =
  _test_json_application({
    version: "3.0",
    name: "ArrayAtomicSimple",
  })({
    version: "3.0",
    components: {
      schemas: {
        ArrayAtomicSimple: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "boolean",
                },
              },
              {
                type: "array",
                items: {
                  type: "number",
                },
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAtomicSimple",
      },
    ],
  });
