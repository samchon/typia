import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_json_application_swagger_ArrayAny = _test_json_application(
  "swagger",
)("ArrayAny")({
  schemas: [
    {
      $ref: "#/components/schemas/ArrayAny",
    },
  ],
  components: {
    schemas: {
      ArrayAny: {
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
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: true,
          },
          nullables2: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: true,
          },
          both1: {
            "x-typia-required": false,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            nullable: true,
          },
          both2: {
            "x-typia-required": false,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            nullable: true,
          },
          both3: {
            "x-typia-required": false,
            "x-typia-optional": false,
            type: "array",
            items: {
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            nullable: true,
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
        nullable: false,
        required: ["anys", "nullables1", "nullables2", "union"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "swagger",
});
