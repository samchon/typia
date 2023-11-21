import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_swagger_DynamicTree = _test_json_application(
  "swagger",
)("DynamicTree")({
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
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          sequence: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          children: {
            $ref: "#/components/schemas/RecordstringDynamicTree",
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
        },
        additionalProperties: {
          $ref: "#/components/schemas/DynamicTree",
        },
      },
    },
  },
  purpose: "swagger",
});
