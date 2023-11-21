import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_swagger_ClassGetter = _test_json_application(
  "swagger",
)("ClassGetter")({
  schemas: [
    {
      $ref: "#/components/schemas/ClassGetter.Person",
    },
  ],
  components: {
    schemas: {
      "ClassGetter.Person": {
        type: "object",
        properties: {
          id: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          dead: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
            nullable: true,
          },
        },
        nullable: false,
        required: ["id", "name", "dead"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "swagger",
});
