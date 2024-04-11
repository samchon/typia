import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantEnumeration } from "../../../../structures/ConstantEnumeration";

export const test_json_application_v3_1_ConstantEnumeration =
  _test_json_application({
    version: "3.1",
    name: "ConstantEnumeration",
  })({
    version: "3.1",
    components: {
      schemas: {
        ConstantEnumeration: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ConstantEnumeration.Enumeration",
          },
        },
        "ConstantEnumeration.Enumeration": {
          oneOf: [
            {
              const: 0,
            },
            {
              const: 1,
            },
            {
              const: 2,
            },
            {
              const: "Three",
            },
            {
              const: "Four",
            },
          ],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ConstantEnumeration",
      },
    ],
  });
