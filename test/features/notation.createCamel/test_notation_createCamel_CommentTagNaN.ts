import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_createValidateCamel_CommentTagNaN =
  _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)<
    typia.CamelCase<CommentTagNaN>
  >({
    convert: typia.notations.createValidateCamel<CommentTagNaN>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagNaN>>(),
  });
