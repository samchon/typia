import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertEquals_CommentTagBigInt = _test_assertEquals(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
    typia.assertEquals<CommentTagBigInt>(input),
);
