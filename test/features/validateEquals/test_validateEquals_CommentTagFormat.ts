import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_validateEquals_CommentTagFormat = _test_validateEquals(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.validateEquals<CommentTagFormat>(input),
);
