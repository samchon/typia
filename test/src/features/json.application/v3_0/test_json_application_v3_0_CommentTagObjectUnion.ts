import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_json_application_v3_0_CommentTagObjectUnion =
  _test_json_application({
    version: "3.0",
    name: "CommentTagObjectUnion",
  })(typia.json.application<[CommentTagObjectUnion], "3.0">());
