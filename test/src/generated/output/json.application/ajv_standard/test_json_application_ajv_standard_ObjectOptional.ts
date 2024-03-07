import typia from "typia";
import { ObjectOptional } from "../../../../structures/ObjectOptional";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectOptional =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            name: {
              type: "string",
            },
            email: {
              type: "string",
            },
            sequence: {
              type: "number",
            },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
