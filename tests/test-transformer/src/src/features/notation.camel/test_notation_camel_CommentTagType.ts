import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_validateCamel_CommentTagType = (): void =>
    _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
        CommentTagType
  )<typia.CamelCase<CommentTagType>>({
    convert: (input) => typia.notations.validateCamel<CommentTagType>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagType>>(),
  });
