import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_createValidateCamel_CommentTagArray = (): void =>
  _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )<typia.CamelCase<CommentTagArray>>({
    convert: typia.notations.createValidateCamel<CommentTagArray>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagArray>>(),
  });
