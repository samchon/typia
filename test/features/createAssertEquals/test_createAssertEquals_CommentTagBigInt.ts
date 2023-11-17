import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertEquals_CommentTagBigInt = _test_assertEquals(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)(
  typia.createAssertEquals<CommentTagBigInt>(),
);
