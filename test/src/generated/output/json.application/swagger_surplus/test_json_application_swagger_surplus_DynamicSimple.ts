import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_json_application_swagger_surplus_DynamicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              nullable: false,
              "x-typia-additionalProperties": {
                type: "number",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              additionalProperties: {
                type: "number",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
