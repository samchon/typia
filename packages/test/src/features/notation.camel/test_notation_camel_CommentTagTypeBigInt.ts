import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_notation_validateCamel_CommentTagTypeBigInt =
  _test_notation_validateGeneral("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )<typia.CamelCase<CommentTagTypeBigInt>>({
    convert: (input) =>
      typia.notations.validateCamel<CommentTagTypeBigInt>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagTypeBigInt>>(),
  });
