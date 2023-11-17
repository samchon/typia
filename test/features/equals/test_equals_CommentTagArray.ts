import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_equals_CommentTagArray = _test_equals(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.equals<CommentTagArray>(input),
);
