import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_createValidateSnake_CommentTagArray =
  _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )<typia.SnakeCase<CommentTagArray>>({
    convert: typia.notations.createValidateSnake<CommentTagArray>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagArray>>(),
  });
