import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantEnumeration } from "../../../../structures/ConstantEnumeration";

export const test_json_application_swagger_surplus_ConstantEnumeration =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantEnumeration",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantEnumeration",
      },
    ],
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
    purpose: "swagger",
    surplus: true,
  });
