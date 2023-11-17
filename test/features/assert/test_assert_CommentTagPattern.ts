import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assert_CommentTagPattern = _test_assert(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assert<CommentTagPattern>(input),
);
