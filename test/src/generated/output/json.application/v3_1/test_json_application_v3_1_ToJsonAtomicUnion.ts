import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_json_application_v3_1_ToJsonAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "ToJsonAtomicUnion",
  })({
    version: "3.1",
    components: {
      schemas: {
        ToJsonAtomicUnion: {
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
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonAtomicUnion",
      },
    ],
  });
