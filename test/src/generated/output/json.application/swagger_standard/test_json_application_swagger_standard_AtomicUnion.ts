import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicUnion } from "../../../../structures/AtomicUnion";

export const test_json_application_swagger_standard_AtomicUnion =
  _test_json_application({
    purpose: "swagger",
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
    surplus: false,
  });
