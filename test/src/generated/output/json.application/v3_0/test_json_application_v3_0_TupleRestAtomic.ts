import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";

export const test_json_application_v3_0_TupleRestAtomic =
  _test_json_application({
    version: "3.0",
    name: "TupleRestAtomic",
  })({
    version: "3.0",
    components: {
      schemas: {
        TupleRestAtomic: {
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
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestAtomic",
      },
    ],
  });
