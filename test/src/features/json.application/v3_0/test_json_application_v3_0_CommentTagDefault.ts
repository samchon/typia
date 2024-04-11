import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_json_application_v3_0_CommentTagDefault =
  _test_json_application({
    version: "3.0",
    name: "CommentTagDefault",
  })(typia.json.application<[CommentTagDefault], "3.0">());
