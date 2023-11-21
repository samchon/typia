import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_validateSnake_CommentTagBigInt =
  _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )<typia.SnakeCase<CommentTagBigInt>>({
    convert: (input) => typia.notations.validateSnake<CommentTagBigInt>(input),
    assert: typia.createAssert<typia.SnakeCase<CommentTagBigInt>>(),
  });
