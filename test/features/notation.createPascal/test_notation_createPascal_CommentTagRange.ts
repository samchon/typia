import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_createValidatePascal_CommentTagRange =
  _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )<typia.PascalCase<CommentTagRange>>({
    convert: typia.notations.createValidatePascal<CommentTagRange>(),
    assert: typia.createAssert<typia.PascalCase<CommentTagRange>>(),
  });
