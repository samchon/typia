import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";

export const test_json_application_ajv_standard_TupleRestObject =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TupleRestObject",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestObject",
      },
    ],
    components: {
      schemas: {
        TupleRestObject: {
          $id: "#/components/schemas/TupleRestObject",
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
                $ref: "#/components/schemas/TupleRestObject.IObject",
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
                $ref: "#/components/schemas/TupleRestObject.IObject",
                "x-typia-rest": true,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 2,
          },
        },
        "TupleRestObject.IObject": {
          $id: "#/components/schemas/TupleRestObject.IObject",
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
