import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createValidateEquals_CommentTagLength = _test_validateEquals(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(
  typia.createValidateEquals<CommentTagLength>(),
);
