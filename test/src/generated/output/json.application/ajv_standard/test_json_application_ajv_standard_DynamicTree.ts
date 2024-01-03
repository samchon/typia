import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_ajv_standard_DynamicTree =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            sequence: {
              type: "number",
            },
            children: {
              $ref: "#/components/schemas/RecordstringDynamicTree",
            },
          },
          required: ["id", "sequence", "children"],
        },
        RecordstringDynamicTree: {
          $id: "#/components/schemas/RecordstringDynamicTree",
          type: "object",
          properties: {},
          description: "Construct a type with a set of properties K of type T",
          additionalProperties: {
            $ref: "#/components/schemas/DynamicTree",
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
