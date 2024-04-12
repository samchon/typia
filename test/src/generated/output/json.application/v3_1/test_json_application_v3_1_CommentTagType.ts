import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagType } from "../../../../structures/CommentTagType";

export const test_json_application_v3_1_CommentTagType = _test_json_application(
  {
    version: "3.1",
    name: "CommentTagType",
  },
)({
  version: "3.1",
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
        required: ["value"],
      },
      "CommentTagType.Type": {
        type: "object",
        properties: {},
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/CommentTagType",
    },
  ],
});
