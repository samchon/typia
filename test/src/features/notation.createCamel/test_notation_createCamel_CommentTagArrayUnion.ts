import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_createValidateCamel_CommentTagArrayUnion =
  _test_notation_validateGeneral("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )<typia.CamelCase<CommentTagArrayUnion>>({
    convert: typia.notations.createValidateCamel<CommentTagArrayUnion>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagArrayUnion>>(),
  });
