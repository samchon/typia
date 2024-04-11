import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";

export const test_json_application_v3_1_TupleRestAtomic =
  _test_json_application({
    version: "3.1",
    name: "TupleRestAtomic",
  })({
    version: "3.1",
    components: {
      schemas: {
        TupleRestAtomic: {
          type: "array",
          prefixItems: [
            {
              type: "boolean",
            },
            {
              type: "number",
            },
          ],
          additionalItems: {},
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestAtomic",
      },
    ],
  });
