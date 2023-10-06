import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assert_CommentTagTypeBigInt = _test_assert(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.assert<CommentTagTypeBigInt>(input),
);
