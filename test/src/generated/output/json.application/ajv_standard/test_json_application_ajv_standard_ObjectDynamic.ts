import typia from "typia";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectDynamic =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectDynamic",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectDynamic",
      },
    ],
    components: {
      schemas: {
        ObjectDynamic: {
          $id: "#/components/schemas/ObjectDynamic",
          type: "object",
          properties: {},
          additionalProperties: {
            oneOf: [
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                type: "boolean",
              },
            ],
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
