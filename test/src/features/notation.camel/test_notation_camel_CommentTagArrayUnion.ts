import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_validateCamel_CommentTagArrayUnion = (): void =>
  _test_notation_validateGeneral("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )<typia.CamelCase<CommentTagArrayUnion>>({
    convert: (input) =>
      typia.notations.validateCamel<CommentTagArrayUnion>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagArrayUnion>>(),
  });
