import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../../structures/ObjectUnionNonPredictable";

export const test_json_application_v3_1_ObjectUnionNonPredictable =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionNonPredictable",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionNonPredictable: {
          $ref: "#/components/schemas/ObjectUnionNonPredictable",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionNonPredictable",
      },
    ],
  });
