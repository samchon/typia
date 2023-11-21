import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createValidateEquals_CommentTagType = _test_validateEquals(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.createValidateEquals<CommentTagType>());
