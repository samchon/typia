import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_validateKebab_CommentTagArrayUnion = (): void =>
  _test_notation_validateGeneral("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )<typia.KebabCase<CommentTagArrayUnion>>({
    convert: (input) =>
      typia.notations.validateKebab<CommentTagArrayUnion>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagArrayUnion>>(),
  });
