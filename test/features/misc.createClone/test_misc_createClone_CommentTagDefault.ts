import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_createClone_CommentTagDefault = _test_misc_clone(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
    typia.misc.createClone<CommentTagDefault>(),
);
