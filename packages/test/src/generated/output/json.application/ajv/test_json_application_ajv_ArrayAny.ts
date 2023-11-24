import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_json_application_ajv_ArrayAny = _test_json_application("ajv")(
  "ArrayAny",
)({
  schemas: [
    {
      $ref: "#/components/schemas/ArrayAny",
    },
  ],
  components: {
    schemas: {
      ArrayAny: {
        $id: "#/components/schemas/ArrayAny",
        type: "object",
        properties: {
          anys: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          undefindable1: {
            "x-typia-required": false,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": false,
              "x-typia-optional": false,
            },
          },
          undefindable2: {
            "x-typia-required": false,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": false,
              "x-typia-optional": false,
            },
          },
          nullables1: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          nullables2: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          both1: {
            oneOf: [
              {
                "x-typia-required": false,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": false,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": false,
                  "x-typia-optional": false,
                },
              },
            ],
            "x-typia-required": false,
            "x-typia-optional": false,
          },
          both2: {
            oneOf: [
              {
                "x-typia-required": false,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": false,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": false,
                  "x-typia-optional": false,
                },
              },
            ],
            "x-typia-required": false,
            "x-typia-optional": false,
          },
          both3: {
            oneOf: [
              {
                "x-typia-required": false,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": false,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": false,
                  "x-typia-optional": false,
                },
              },
            ],
            "x-typia-required": false,
            "x-typia-optional": false,
          },
          union: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
        },
        required: ["anys", "nullables1", "nullables2", "union"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
