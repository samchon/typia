import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_json_application_v3_1_CommentTagDefault =
  _test_json_application({
    version: "3.1",
    name: "CommentTagDefault",
  })(typia.json.application<[CommentTagDefault], "3.1">());
