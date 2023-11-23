import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";

export const test_json_application_ajv_TupleRestAtomic = _test_json_application(
  "ajv",
)("TupleRestAtomic")({
  schemas: [
    {
      $ref: "#/components/schemas/TupleRestAtomic",
    },
  ],
  components: {
    schemas: {
      TupleRestAtomic: {
        $id: "#/components/schemas/TupleRestAtomic",
        type: "array",
        items: {
          oneOf: [
            {
              type: "boolean",
            },
            {
              type: "number",
            },
            {
              type: "string",
            },
          ],
        },
        minItems: 2,
        "x-typia-tuple": {
          type: "array",
          items: [
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            {
              "x-typia-rest": true,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          ],
          minItems: 2,
        },
      },
    },
  },
  purpose: "ajv",
});
