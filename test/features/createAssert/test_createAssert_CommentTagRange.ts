import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssert_CommentTagRange = _test_assert(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)(typia.createAssert<CommentTagRange>());
