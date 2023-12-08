import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_createValidateCamel_CommentTagBigInt =
  _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )<typia.CamelCase<CommentTagBigInt>>({
    convert: typia.notations.createValidateCamel<CommentTagBigInt>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagBigInt>>(),
  });
