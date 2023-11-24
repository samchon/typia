import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_validateCamel_CommentTagArray =
  _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )<typia.CamelCase<CommentTagArray>>({
    convert: (input) => typia.notations.validateCamel<CommentTagArray>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagArray>>(),
  });
