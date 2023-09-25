import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createValidateEquals_CommentTagDefault = _test_validateEquals(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
    typia.createValidateEquals<CommentTagDefault>(),
);
