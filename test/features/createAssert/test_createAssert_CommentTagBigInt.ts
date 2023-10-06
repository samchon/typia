import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssert_CommentTagBigInt = _test_assert(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)(typia.createAssert<CommentTagBigInt>());
