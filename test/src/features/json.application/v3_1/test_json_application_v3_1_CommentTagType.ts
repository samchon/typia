import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_application_v3_1_CommentTagType = _test_json_application(
  {
    version: "3.1",
    name: "CommentTagType",
  },
)(typia.json.application<[CommentTagType], "3.1">());
