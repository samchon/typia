import typia from "typia";
import { AtomicUnion } from "../../../../structures/AtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_AtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
          type: "array",
          items: {
            $ref: "#/components/schemas/AtomicUnion.Union",
          },
        },
        "AtomicUnion.Union": {
          oneOf: [
            {
              type: "string",
              nullable: true,
            },
            {
              type: "number",
              nullable: true,
            },
            {
              type: "boolean",
              nullable: true,
            },
          ],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
