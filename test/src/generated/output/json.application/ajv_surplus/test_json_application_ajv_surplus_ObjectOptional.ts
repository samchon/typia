import typia from "typia";
import { ObjectOptional } from "../../../../structures/ObjectOptional";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ObjectOptional =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ObjectOptional",
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
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
