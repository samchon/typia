import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";

export const test_json_application_v3_1_ArrayAtomicSimple =
  _test_json_application({
    version: "3.1",
    name: "ArrayAtomicSimple",
  })({
    version: "3.1",
    components: {
      schemas: {
        ArrayAtomicSimple: {
          type: "array",
          prefixItems: [
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
          additionalItems: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAtomicSimple",
      },
    ],
  });
