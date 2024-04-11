import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_json_application_v3_0_ArrayAny = _test_json_application({
  version: "3.0",
  name: "ArrayAny",
})({
  version: "3.0",
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
            type: "array",
            items: {},
            nullable: true,
          },
          nullables2: {
            type: "array",
            items: {},
            nullable: true,
          },
          both1: {
            type: "array",
            items: {},
            nullable: true,
          },
          both2: {
            type: "array",
            items: {},
            nullable: true,
          },
          both3: {
            type: "array",
            items: {},
            nullable: true,
          },
          union: {
            type: "array",
            items: {},
          },
        },
        nullable: false,
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
