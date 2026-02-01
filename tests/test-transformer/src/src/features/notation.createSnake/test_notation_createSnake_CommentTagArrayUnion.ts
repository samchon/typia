import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_createValidateSnake_CommentTagArrayUnion = (): void =>
    _test_notation_validateGeneral("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion
  )<typia.SnakeCase<CommentTagArrayUnion>>({
    convert: typia.notations.createValidateSnake<CommentTagArrayUnion>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagArrayUnion>>(),
  });
