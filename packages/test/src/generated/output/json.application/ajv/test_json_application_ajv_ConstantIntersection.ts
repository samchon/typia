import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../../structures/ConstantIntersection";

export const test_json_application_ajv_ConstantIntersection =
  _test_json_application("ajv")("ConstantIntersection")({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantIntersection",
      },
    ],
    components: {
      schemas: {
        ConstantIntersection: {
          $id: "#/components/schemas/ConstantIntersection",
          type: "array",
          items: [
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
          minItems: 3,
          maxItems: 3,
        },
        "ConstantIntersection.Wrapperfalse": {
          $id: "#/components/schemas/ConstantIntersection.Wrapperfalse",
          type: "boolean",
          enum: [false],
        },
        "ConstantIntersection.Wrapper1": {
          $id: "#/components/schemas/ConstantIntersection.Wrapper1",
          type: "number",
          enum: [1],
        },
        "ConstantIntersection.Wrappertwo": {
          $id: "#/components/schemas/ConstantIntersection.Wrappertwo",
          type: "string",
          enum: ["two"],
        },
      },
    },
    purpose: "ajv",
  });
