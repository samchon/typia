import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_validateKebab_CommentTagTypeBigInt = (): void =>
  _test_notation_validateGeneral("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )<typia.KebabCase<CommentTagTypeBigInt>>({
    convert: (input) =>
      typia.notations.validateKebab<CommentTagTypeBigInt>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagTypeBigInt>>(),
  });
