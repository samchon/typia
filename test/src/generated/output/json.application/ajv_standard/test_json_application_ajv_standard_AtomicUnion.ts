import typia from "typia";
import { AtomicUnion } from "../../../../structures/AtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_AtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/AtomicUnion",
      },
    ],
    components: {
      schemas: {
        AtomicUnion: {
          $id: "#/components/schemas/AtomicUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/AtomicUnion.Union",
          },
        },
        "AtomicUnion.Union": {
          $id: "#/components/schemas/AtomicUnion.Union",
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
    purpose: "ajv",
    surplus: false,
  });
