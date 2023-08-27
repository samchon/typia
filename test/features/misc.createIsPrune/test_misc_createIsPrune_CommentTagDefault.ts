import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_isPrune_CommentTagDefault = _test_misc_isPrune(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
    typia.misc.createIsPrune<CommentTagDefault>(),
);
