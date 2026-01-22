import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_createValidatePascal_CommentTagArray = (): void =>
  _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )<typia.PascalCase<CommentTagArray>>({
    convert: typia.notations.createValidatePascal<CommentTagArray>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagArray>>(),
  });
