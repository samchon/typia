import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createAssert_CommentTagArray = _test_assert(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)(typia.createAssert<CommentTagArray>());
