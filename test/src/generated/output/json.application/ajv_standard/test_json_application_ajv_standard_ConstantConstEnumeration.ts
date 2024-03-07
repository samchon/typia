import typia from "typia";
import { ConstantConstEnumeration } from "../../../../structures/ConstantConstEnumeration";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ConstantConstEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
          $id: "#/components/schemas/ConstantConstEnumeration",
          type: "array",
          items: {
            $ref: "#/components/schemas/ConstantConstEnumeration.Enumeration",
          },
        },
        "ConstantConstEnumeration.Enumeration": {
          $id: "#/components/schemas/ConstantConstEnumeration.Enumeration",
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
    purpose: "ajv",
    surplus: false,
  });
