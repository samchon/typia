import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagType } from "../../../../structures/CommentTagType";

export const test_json_application_v3_0_CommentTagType = _test_json_application(
  {
    version: "3.0",
    name: "CommentTagType",
  },
)({
  version: "3.0",
  components: {
    schemas: {
      CommentTagType: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CommentTagType.Type",
            },
          },
        },
        nullable: false,
        required: ["value"],
      },
      "CommentTagType.Type": {
        type: "object",
        properties: {},
        nullable: false,
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/CommentTagType",
    },
  ],
});
