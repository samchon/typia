import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_notation_validatePascal_CommentTagNaN =
  _test_notation_validateGeneral("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)<
    typia.PascalCase<CommentTagNaN>
  >({
    convert: (input) => typia.notations.validatePascal<CommentTagNaN>(input),
    assert: typia.createAssert<typia.PascalCase<CommentTagNaN>>(),
  });
