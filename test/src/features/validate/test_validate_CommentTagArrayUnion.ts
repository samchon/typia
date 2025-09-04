import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_validate_CommentTagArrayUnion = (): void =>
  _test_validate("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input) => typia.validate<CommentTagArrayUnion>(input));
