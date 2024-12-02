import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_schemas_v3_1_CommentTagArrayUnion = _test_json_schemas({
  version: "3.1",
  name: "CommentTagArrayUnion",
})(typia.json.schemas<[CommentTagArrayUnion], "3.1">());
