import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_misc_createIsPrune_CommentTagTypeBigInt = _test_misc_isPrune(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
    typia.misc.createIsPrune<CommentTagTypeBigInt>(),
);
