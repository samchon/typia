import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_assertParse_CommentTagArrayUnion =
  _test_json_assertParse("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input) => typia.json.assertParse<CommentTagArrayUnion>(input));
