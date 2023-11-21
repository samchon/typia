import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_is_CommentTagFormat = _test_is(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.is<CommentTagFormat>(input),
);
