import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_validateCamel_CommentTagBigInt =
  _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )<typia.CamelCase<CommentTagBigInt>>({
    convert: (input) => typia.notations.validateCamel<CommentTagBigInt>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagBigInt>>(),
  });
