import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_swagger_surplus_DynamicTree =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicTree",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicTree",
      },
    ],
    components: {
      schemas: {
        DynamicTree: {
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            sequence: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            children: {
              $ref: "#/components/schemas/RecordstringDynamicTree",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "sequence", "children"],
          "x-typia-jsDocTags": [],
        },
        RecordstringDynamicTree: {
          type: "object",
          properties: {},
          nullable: false,
          description: "Construct a type with a set of properties K of type T",
          "x-typia-jsDocTags": [],
          "x-typia-additionalProperties": {
            $ref: "#/components/schemas/DynamicTree",
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          additionalProperties: {
            $ref: "#/components/schemas/DynamicTree",
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
