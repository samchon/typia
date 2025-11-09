import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_notation_createValidatePascal_CommentTagInfinite = (): void =>
    _test_notation_validateGeneral("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite
  )<typia.PascalCase<CommentTagInfinite>>({
    convert: typia.notations.createValidatePascal<CommentTagInfinite>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagInfinite>>(),
  });
