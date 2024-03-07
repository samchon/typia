import typia from "typia";
import { ObjectInternal } from "../../../../structures/ObjectInternal";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectInternal =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectInternal",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectInternal",
      },
    ],
    components: {
      schemas: {
        ObjectInternal: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          nullable: false,
          required: ["id", "name"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
