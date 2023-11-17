import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicAlias } from "../../../../structures/AtomicAlias";

export const test_json_application_ajv_AtomicAlias = _test_json_application(
  "ajv",
)("AtomicAlias")({
  schemas: [
    {
      $ref: "#/components/schemas/AtomicAlias",
    },
  ],
  components: {
    schemas: {
      AtomicAlias: {
        $id: "#/components/schemas/AtomicAlias",
        type: "array",
        items: [
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        ],
        minItems: 3,
        maxItems: 3,
      },
    },
  },
  purpose: "ajv",
});
