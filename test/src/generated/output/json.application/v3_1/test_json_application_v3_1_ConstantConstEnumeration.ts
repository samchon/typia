import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../../structures/ConstantConstEnumeration";

export const test_json_application_v3_1_ConstantConstEnumeration =
  _test_json_application({
    version: "3.1",
    name: "ConstantConstEnumeration",
  })({
    version: "3.1",
    components: {
      schemas: {
        ConstantConstEnumeration: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ConstantConstEnumeration.Enumeration",
          },
        },
        "ConstantConstEnumeration.Enumeration": {
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
        $ref: "#/components/schemas/ConstantConstEnumeration",
      },
    ],
  });
