import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_validateSnake_CommentTagArrayUnion =
  _test_notation_validateGeneral("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )<typia.SnakeCase<CommentTagArrayUnion>>({
    convert: (input) =>
      typia.notations.validateSnake<CommentTagArrayUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagArrayUnion>>(),
  });
