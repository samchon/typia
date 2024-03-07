import typia from "typia";
import { TupleRestArray } from "../../../../structures/TupleRestArray";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_TupleRestArray =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestArray",
      },
    ],
    components: {
      schemas: {
        TupleRestArray: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                type: "number",
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
            ],
          },
          minItems: 2,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                type: "boolean",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "number",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
                "x-typia-rest": true,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 2,
          },
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
