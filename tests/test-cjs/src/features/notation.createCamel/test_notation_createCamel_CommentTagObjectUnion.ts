import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_createValidateCamel_CommentTagObjectUnion =
  (): void =>
    _test_notation_validateGeneral(
      "CommentTagObjectUnion",
    )<CommentTagObjectUnion>(CommentTagObjectUnion)<
      typia.CamelCase<CommentTagObjectUnion>
    >({
      convert: typia.notations.createValidateCamel<CommentTagObjectUnion>(),
      assert: typia.createAssert<typia.CamelCase<CommentTagObjectUnion>>(),
    });
