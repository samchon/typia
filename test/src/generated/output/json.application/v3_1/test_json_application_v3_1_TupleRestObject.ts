import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";

export const test_json_application_v3_1_TupleRestObject =
  _test_json_application({
    version: "3.1",
    name: "TupleRestObject",
  })({
    version: "3.1",
    components: {
      schemas: {
        TupleRestObject: {
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
        $ref: "#/components/schemas/TupleRestObject",
      },
    ],
  });
