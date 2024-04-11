import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_json_application_v3_1_ArrayAny = _test_json_application({
  version: "3.1",
  name: "ArrayAny",
})({
  version: "3.1",
  components: {
    schemas: {
      ArrayAny: {
        type: "object",
        properties: {
          anys: {
            type: "array",
            items: {},
          },
          undefindable1: {
            type: "array",
            items: {},
          },
          undefindable2: {
            type: "array",
            items: {},
          },
          nullables1: {
            oneOf: [
              {
                type: "null",
              },
              {
                type: "array",
                items: {},
              },
            ],
          },
          nullables2: {
            oneOf: [
              {
                type: "null",
              },
              {
                type: "array",
                items: {},
              },
            ],
          },
          both1: {
            oneOf: [
              {
                type: "null",
              },
              {
                type: "array",
                items: {},
              },
            ],
          },
          both2: {
            oneOf: [
              {
                type: "null",
              },
              {
                type: "array",
                items: {},
              },
            ],
          },
          both3: {
            oneOf: [
              {
                type: "null",
              },
              {
                type: "array",
                items: {},
              },
            ],
          },
          union: {
            type: "array",
            items: {},
          },
        },
        required: ["anys", "nullables1", "nullables2", "union"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ArrayAny",
    },
  ],
});
