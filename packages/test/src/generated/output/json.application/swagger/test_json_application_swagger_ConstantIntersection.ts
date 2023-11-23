import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantIntersection } from "../../../../structures/ConstantIntersection";

export const test_json_application_swagger_ConstantIntersection =
  _test_json_application("swagger")("ConstantIntersection")({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantIntersection",
      },
    ],
    components: {
      schemas: {
        ConstantIntersection: {
          type: "array",
          items: {
            oneOf: [
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
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
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
        },
        "ConstantIntersection.Wrapperfalse": {
          type: "boolean",
          enum: [false],
        },
        "ConstantIntersection.Wrapper1": {
          type: "number",
          enum: [1],
        },
        "ConstantIntersection.Wrappertwo": {
          type: "string",
          enum: ["two"],
        },
      },
    },
    purpose: "swagger",
  });
