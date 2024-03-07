import typia from "typia";
import { ConstantConstEnumeration } from "../../../../structures/ConstantConstEnumeration";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ConstantConstEnumeration =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantConstEnumeration",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantConstEnumeration",
      },
    ],
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
    purpose: "swagger",
    surplus: true,
  });
