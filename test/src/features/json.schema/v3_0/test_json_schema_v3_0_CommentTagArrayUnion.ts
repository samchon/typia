import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_schema_v3_0_CommentTagArrayUnion = _test_json_schema({
  version: "3.0",
  name: "CommentTagArrayUnion",
})(typia.json.schema<CommentTagArrayUnion, "3.0">());
