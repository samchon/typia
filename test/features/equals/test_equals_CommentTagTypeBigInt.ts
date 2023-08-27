import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_equals_CommentTagTypeBigInt = _test_equals(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.equals<CommentTagTypeBigInt>(input),
);
