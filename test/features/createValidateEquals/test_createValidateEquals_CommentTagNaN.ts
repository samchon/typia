import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createValidateEquals_CommentTagNaN = _test_validateEquals(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.createValidateEquals<CommentTagNaN>());
