import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_createValidateKebab_CommentTagBigInt = (): void =>
  _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )<typia.KebabCase<CommentTagBigInt>>({
    convert: typia.notations.createValidateKebab<CommentTagBigInt>(),
    assert: typia.createAssert<typia.KebabCase<CommentTagBigInt>>(),
  });
