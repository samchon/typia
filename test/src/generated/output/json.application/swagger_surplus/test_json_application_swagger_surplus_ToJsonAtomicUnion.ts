import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_json_application_swagger_surplus_ToJsonAtomicUnion =
  _test_json_application({
    purpose: "swagger",
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
          type: "array",
          items: {
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
    },
    purpose: "swagger",
    surplus: true,
  });
