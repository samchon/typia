import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_validate_CommentTagDefault = _test_validate(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.validate<CommentTagDefault>(input),
);
