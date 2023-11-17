import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_createValidateSnake_CommentTagBigInt =
  _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )<typia.SnakeCase<CommentTagBigInt>>({
    convert: typia.notations.createValidateSnake<CommentTagBigInt>(),
    assert: typia.createAssert<typia.SnakeCase<CommentTagBigInt>>(),
  });
