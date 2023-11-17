import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicAlias } from "../../../../structures/AtomicAlias";

export const test_json_application_swagger_AtomicAlias = _test_json_application(
  "swagger",
)("AtomicAlias")({
  schemas: [
    {
      $ref: "#/components/schemas/AtomicAlias",
    },
  ],
  components: {
    schemas: {
      AtomicAlias: {
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
        minItems: 3,
        maxItems: 3,
        "x-typia-tuple": {
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
  },
  purpose: "swagger",
});
