import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";

export const test_json_application_v3_0_TupleRestObject =
  _test_json_application({
    version: "3.0",
    name: "TupleRestObject",
  })({
    version: "3.0",
    components: {
      schemas: {
        TupleRestObject: {
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
        },
        "TupleRestObject.IObject": {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestObject",
      },
    ],
  });
