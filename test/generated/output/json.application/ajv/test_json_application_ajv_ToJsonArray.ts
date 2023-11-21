import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";

export const test_json_application_ajv_ToJsonArray = _test_json_application(
  "ajv",
)("ToJsonArray")({
  schemas: [
    {
      $ref: "#/components/schemas/ToJsonArray",
    },
  ],
  components: {
    schemas: {
      ToJsonArray: {
        $id: "#/components/schemas/ToJsonArray",
        type: "array",
        items: [
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ToJsonArray.IObject",
            },
          },
        ],
        minItems: 4,
        maxItems: 4,
      },
      "ToJsonArray.IObject": {
        $id: "#/components/schemas/ToJsonArray.IObject",
        type: "object",
        properties: {
          id: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        },
        required: ["id"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
