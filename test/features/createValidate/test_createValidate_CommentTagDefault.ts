import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createValidate_CommentTagDefault = _test_validate(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
    typia.createValidate<CommentTagDefault>(),
);
