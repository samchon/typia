import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../../structures/ConstantIntersection";

export const test_json_application_v3_1_ConstantIntersection =
  _test_json_application({
    version: "3.1",
    name: "ConstantIntersection",
  })({
    version: "3.1",
    components: {
      schemas: {
        ConstantIntersection: {
          type: "array",
          prefixItems: [
            {
              $ref: "#/components/schemas/ConstantIntersection.Wrapperfalse",
            },
            {
              $ref: "#/components/schemas/ConstantIntersection.Wrapper1",
            },
            {
              $ref: "#/components/schemas/ConstantIntersection.Wrappertwo",
            },
          ],
          additionalItems: {
            $ref: "#/components/schemas/ConstantIntersection.Wrappertwo",
          },
        },
        "ConstantIntersection.Wrapperfalse": {
          const: false,
        },
        "ConstantIntersection.Wrapper1": {
          const: 1,
        },
        "ConstantIntersection.Wrappertwo": {
          const: "two",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ConstantIntersection",
      },
    ],
  });
