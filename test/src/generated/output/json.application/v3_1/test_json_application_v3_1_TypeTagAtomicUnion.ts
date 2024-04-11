import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagAtomicUnion } from "../../../../structures/TypeTagAtomicUnion";

export const test_json_application_v3_1_TypeTagAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "TypeTagAtomicUnion",
  })({
    version: "3.1",
    components: {
      schemas: {
        TypeTagAtomicUnion: {
          $ref: "#/components/schemas/TypeTagAtomicUnion",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagAtomicUnion",
      },
    ],
  });
