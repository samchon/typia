import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_validateCamel_CommentTagDefault =
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.CamelCase<CommentTagDefault>>({
    convert: (input) => typia.notations.validateCamel<CommentTagDefault>(input),
    assert: typia.createAssert<typia.CamelCase<CommentTagDefault>>(),
  });
