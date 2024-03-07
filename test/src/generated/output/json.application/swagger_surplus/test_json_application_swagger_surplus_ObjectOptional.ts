import typia from "typia";
import { ObjectOptional } from "../../../../structures/ObjectOptional";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectOptional =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectOptional",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectOptional",
      },
    ],
    components: {
      schemas: {
        ObjectOptional: {
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            email: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            sequence: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
