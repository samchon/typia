import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectSimple } from "../../../../structures/ObjectSimple";

export const test_json_application_v3_1_ObjectSimple = _test_json_application({
  version: "3.1",
  name: "ObjectSimple",
})({
  version: "3.1",
  components: {
    schemas: {
      "ObjectSimple.IBox3D": {
        type: "object",
        properties: {
          scale: {
            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
          },
          position: {
            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
          },
          rotate: {
            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
          },
          pivot: {
            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
          },
        },
        required: ["scale", "position", "rotate", "pivot"],
      },
      "ObjectSimple.IPoint3D": {
        type: "object",
        properties: {
          x: {
            type: "number",
          },
          y: {
            type: "number",
          },
          z: {
            type: "number",
          },
        },
        required: ["x", "y", "z"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectSimple.IBox3D",
    },
  ],
});
