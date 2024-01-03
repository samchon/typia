import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_ajv_surplus_DynamicTree =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/DynamicTree",
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
          required: ["id", "sequence", "children"],
          "x-typia-jsDocTags": [],
        },
        RecordstringDynamicTree: {
          $id: "#/components/schemas/RecordstringDynamicTree",
          type: "object",
          properties: {},
          description: "Construct a type with a set of properties K of type T",
          "x-typia-jsDocTags": [],
          additionalProperties: {
            $ref: "#/components/schemas/DynamicTree",
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
