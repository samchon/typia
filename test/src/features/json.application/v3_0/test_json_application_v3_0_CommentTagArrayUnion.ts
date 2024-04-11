import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_application_v3_0_CommentTagArrayUnion =
  _test_json_application({
    version: "3.0",
    name: "CommentTagArrayUnion",
  })(typia.json.application<[CommentTagArrayUnion], "3.0">());
