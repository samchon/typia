import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_is_CommentTagRange = _test_is(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  typia.is<CommentTagRange>(input),
);
