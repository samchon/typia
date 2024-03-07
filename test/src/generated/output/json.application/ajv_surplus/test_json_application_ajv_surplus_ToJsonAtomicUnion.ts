import typia from "typia";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ToJsonAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonAtomicUnion",
      },
    ],
    components: {
      schemas: {
        ToJsonAtomicUnion: {
          $id: "#/components/schemas/ToJsonAtomicUnion",
          type: "array",
          items: {
            oneOf: [
              {
                type: "null",
              },
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
    surplus: true,
  });
