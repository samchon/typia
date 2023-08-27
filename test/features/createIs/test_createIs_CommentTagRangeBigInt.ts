import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_is_CommentTagRangeBigInt = _test_is(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.createIs<CommentTagRangeBigInt>(),
);
