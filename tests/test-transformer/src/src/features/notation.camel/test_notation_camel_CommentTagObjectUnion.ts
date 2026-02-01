import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_validateCamel_CommentTagObjectUnion = (): void =>
    _test_notation_validateGeneral("CommentTagObjectUnion")<CommentTagObjectUnion>(
        CommentTagObjectUnion
  )<typia.CamelCase<CommentTagObjectUnion>>({
    convert: (input) => typia.notations.validateCamel<CommentTagObjectUnion>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagObjectUnion>>(),
  });
