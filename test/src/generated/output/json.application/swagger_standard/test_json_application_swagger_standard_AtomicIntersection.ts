import typia from "typia";
import { AtomicIntersection } from "../../../../structures/AtomicIntersection";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_AtomicIntersection =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "AtomicIntersection",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/AtomicIntersection",
      },
    ],
    components: {
      schemas: {
        AtomicIntersection: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrapperboolean",
              },
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrappernumber",
              },
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrapperboolean",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrappernumber",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 3,
            maxItems: 3,
          },
        },
        "AtomicIntersection.Wrapperboolean": {
          type: "boolean",
        },
        "AtomicIntersection.Wrappernumber": {
          type: "number",
        },
        "AtomicIntersection.Wrapperstring": {
          type: "string",
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
