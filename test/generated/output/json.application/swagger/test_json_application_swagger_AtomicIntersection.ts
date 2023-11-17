import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../../structures/AtomicIntersection";

export const test_json_application_swagger_AtomicIntersection =
  _test_json_application("swagger")("AtomicIntersection")({
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
              },
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrappernumber",
              },
              {
                $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
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
  });
