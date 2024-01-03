import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagCustom } from "../../../../structures/TypeTagCustom";

export const test_json_application_ajv_standard_TypeTagCustom =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagCustom",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagCustom",
      },
    ],
    components: {
      schemas: {
        TypeTagCustom: {
          $id: "#/components/schemas/TypeTagCustom",
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            dollar: {
              type: "string",
            },
            postfix: {
              type: "string",
            },
            powerOf: {
              type: "number",
            },
          },
          required: ["id", "dollar", "postfix", "powerOf"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
