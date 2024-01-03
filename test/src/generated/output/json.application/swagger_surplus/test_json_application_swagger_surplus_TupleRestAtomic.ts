import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";

export const test_json_application_swagger_surplus_TupleRestAtomic =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestAtomic",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestAtomic",
      },
    ],
    components: {
      schemas: {
        TupleRestAtomic: {
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
                type: "string",
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
                type: "string",
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
