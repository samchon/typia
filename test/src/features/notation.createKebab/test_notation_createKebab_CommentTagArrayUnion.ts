import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_createValidateKebab_CommentTagArrayUnion =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagArrayUnion",
    )<CommentTagArrayUnion>(CommentTagArrayUnion)<
      typia.KebabCase<CommentTagArrayUnion>
    >({
      convert: typia.notations.createValidateKebab<CommentTagArrayUnion>(),
      assert: typia.createAssert<typia.KebabCase<CommentTagArrayUnion>>(),
    });
