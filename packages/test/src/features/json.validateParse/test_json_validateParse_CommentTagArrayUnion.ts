import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_validateParse_CommentTagArrayUnion =
  _test_json_validateParse("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input) => typia.json.validateParse<CommentTagArrayUnion>(input));
