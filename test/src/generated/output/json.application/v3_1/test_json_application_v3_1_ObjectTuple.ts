import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";

export const test_json_application_v3_1_ObjectTuple = _test_json_application({
  version: "3.1",
  name: "ObjectTuple",
})({
  version: "3.1",
  components: {
    schemas: {
      ObjectTuple: {
        type: "array",
        prefixItems: [
          {
            $ref: "#/components/schemas/ObjectTuple.ISection",
          },
          {
            $ref: "#/components/schemas/ObjectTuple.ICitizen",
          },
        ],
        additionalItems: {
          $ref: "#/components/schemas/ObjectTuple.ICitizen",
        },
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
