import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_json_application_ajv_standard_DynamicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicSimple",
      },
    ],
    components: {
      schemas: {
        DynamicSimple: {
          $id: "#/components/schemas/DynamicSimple",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              additionalProperties: {
                type: "number",
              },
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
