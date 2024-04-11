import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../../structures/ObjectUnionCompositePointer";

export const test_json_application_v3_1_ObjectUnionCompositePointer =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionCompositePointer",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionCompositePointer: {
          $ref: "#/components/schemas/ObjectUnionCompositePointer",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionCompositePointer",
      },
    ],
  });
