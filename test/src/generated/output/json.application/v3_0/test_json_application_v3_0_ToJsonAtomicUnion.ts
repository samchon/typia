import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_json_application_v3_0_ToJsonAtomicUnion =
  _test_json_application({
    version: "3.0",
    name: "ToJsonAtomicUnion",
  })({
    version: "3.0",
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
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonAtomicUnion",
      },
    ],
  });
