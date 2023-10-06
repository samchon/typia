import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createEquals_CommentTagDefault = _test_equals(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
    typia.createEquals<CommentTagDefault>(),
);
