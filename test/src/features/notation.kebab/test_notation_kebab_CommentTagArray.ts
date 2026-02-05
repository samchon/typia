import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_validateKebab_CommentTagArray = (): void =>
  _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )<typia.KebabCase<CommentTagArray>>({
    convert: (input) => typia.notations.validateKebab<CommentTagArray>(input),
    assert: typia.createAssert<typia.KebabCase<CommentTagArray>>(),
  });
