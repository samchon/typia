import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assert_CommentTagLength = _test_assert(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(typia.createAssert<CommentTagLength>());
