import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";

export const test_json_application_ajv_standard_AtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/AtomicSimple",
      },
    ],
    components: {
      schemas: {
        AtomicSimple: {
          $id: "#/components/schemas/AtomicSimple",
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
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 3,
          maxItems: 3,
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
