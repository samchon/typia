import typia from "typia";
import { DynamicTree } from "../../../../structures/DynamicTree";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_DynamicTree =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["id", "sequence", "children"],
        },
        RecordstringDynamicTree: {
          type: "object",
          properties: {},
          nullable: false,
          description: "Construct a type with a set of properties K of type T",
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
