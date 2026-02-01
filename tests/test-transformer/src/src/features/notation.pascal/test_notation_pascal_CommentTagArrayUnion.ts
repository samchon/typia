import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_validatePascal_CommentTagArrayUnion = (): void =>
    _test_notation_validateGeneral("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion
  )<typia.PascalCase<CommentTagArrayUnion>>({
    convert: (input) => typia.notations.validatePascal<CommentTagArrayUnion>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagArrayUnion>>(),
  });
