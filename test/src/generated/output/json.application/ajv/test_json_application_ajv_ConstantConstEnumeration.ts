import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../../structures/ConstantConstEnumeration";

export const test_json_application_ajv_ConstantConstEnumeration =
  _test_json_application("ajv")("ConstantConstEnumeration")({
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
  });
