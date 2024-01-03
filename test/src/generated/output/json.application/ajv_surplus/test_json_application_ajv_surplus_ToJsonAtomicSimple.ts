import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../../structures/ToJsonAtomicSimple";

export const test_json_application_ajv_surplus_ToJsonAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonAtomicSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonAtomicSimple",
      },
    ],
    components: {
      schemas: {
        ToJsonAtomicSimple: {
          $id: "#/components/schemas/ToJsonAtomicSimple",
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
    surplus: true,
  });
