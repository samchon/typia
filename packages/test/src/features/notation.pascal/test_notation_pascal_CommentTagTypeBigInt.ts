import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_validatePascal_CommentTagTypeBigInt =
  _test_notation_validateGeneral("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )<typia.PascalCase<CommentTagTypeBigInt>>({
    convert: (input) =>
      typia.notations.validatePascal<CommentTagTypeBigInt>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagTypeBigInt>>(),
  });
