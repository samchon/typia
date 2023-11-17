import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_validateEquals_CommentTagInfinite = _test_validateEquals(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
  typia.validateEquals<CommentTagInfinite>(input),
);
