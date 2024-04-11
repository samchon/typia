import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_v3_1_ObjectUnionExplicitPointer =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionExplicitPointer",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionExplicitPointer: {
          $ref: "#/components/schemas/ObjectUnionExplicitPointer",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicitPointer",
      },
    ],
  });
