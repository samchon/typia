import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";

export const test_json_application_v3_0_ObjectTuple = _test_json_application({
  version: "3.0",
  name: "ObjectTuple",
})({
  version: "3.0",
  components: {
    schemas: {
      ObjectTuple: {
        type: "array",
        items: {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectTuple.ISection",
            },
            {
              $ref: "#/components/schemas/ObjectTuple.ICitizen",
            },
          ],
        },
        minItems: 2,
        maxItems: 2,
      },
      "ObjectTuple.ISection": {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          code: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        nullable: false,
        required: ["id", "code", "name"],
      },
      "ObjectTuple.ICitizen": {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          mobile: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        nullable: false,
        required: ["id", "mobile", "name"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectTuple",
    },
  ],
});
