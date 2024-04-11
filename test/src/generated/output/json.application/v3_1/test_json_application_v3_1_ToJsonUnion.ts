import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";

export const test_json_application_v3_1_ToJsonUnion = _test_json_application({
  version: "3.1",
  name: "ToJsonUnion",
})({
  version: "3.1",
  components: {
    schemas: {
      ToJsonUnion: {
        type: "array",
        items: {
          oneOf: [
            {
              type: "boolean",
            },
            {
              $ref: "#/components/schemas/ToJsonUnion.ICitizen",
            },
            {
              $ref: "#/components/schemas/ToJsonUnion.IProduct",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              $ref: "#/components/schemas/ToJsonUnion.ICitizen",
            },
          ],
        },
      },
      "ToJsonUnion.ICitizen": {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
          mobile: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        required: ["id", "mobile", "name"],
      },
      "ToJsonUnion.IProduct": {
        type: "object",
        properties: {
          manufacturer: {
            type: "string",
          },
          brand: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        required: ["manufacturer", "brand", "name"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ToJsonUnion",
    },
  ],
});
