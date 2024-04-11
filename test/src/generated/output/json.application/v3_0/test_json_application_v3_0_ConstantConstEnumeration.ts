import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../../structures/ConstantConstEnumeration";

export const test_json_application_v3_0_ConstantConstEnumeration =
  _test_json_application({
    version: "3.0",
    name: "ConstantConstEnumeration",
  })({
    version: "3.0",
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
              type: "number",
              enum: [0, 1, 2],
            },
            {
              type: "string",
              enum: ["Three", "Four"],
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
