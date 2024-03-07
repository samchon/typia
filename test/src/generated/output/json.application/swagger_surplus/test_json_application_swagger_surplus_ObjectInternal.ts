import typia from "typia";
import { ObjectInternal } from "../../../../structures/ObjectInternal";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectInternal =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
