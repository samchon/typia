import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_application_v3_0_CommentTagFormat =
  _test_json_application({
    version: "3.0",
    name: "CommentTagFormat",
  })(typia.json.application<[CommentTagFormat], "3.0">());
