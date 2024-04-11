import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_application_v3_1_CommentTagLength =
  _test_json_application({
    version: "3.1",
    name: "CommentTagLength",
  })(typia.json.application<[CommentTagLength], "3.1">());
