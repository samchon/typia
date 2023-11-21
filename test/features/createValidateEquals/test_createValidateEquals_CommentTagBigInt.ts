import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createValidateEquals_CommentTagBigInt = _test_validateEquals(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)(
  typia.createValidateEquals<CommentTagBigInt>(),
);
