import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../../structures/ConstantIntersection";

export const test_json_application_ajv_standard_ConstantIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantIntersection",
  })({
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
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/ConstantIntersection.Wrapper1",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/ConstantIntersection.Wrappertwo",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
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
    surplus: false,
  });
