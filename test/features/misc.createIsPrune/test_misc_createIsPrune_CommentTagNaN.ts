import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_misc_createIsPrune_CommentTagNaN = _test_misc_isPrune(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)(typia.misc.createIsPrune<CommentTagNaN>());
