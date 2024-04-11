import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_v3_0_CommentTagPattern =
  _test_json_application({
    version: "3.0",
    name: "CommentTagPattern",
  })(typia.json.application<[CommentTagPattern], "3.0">());
