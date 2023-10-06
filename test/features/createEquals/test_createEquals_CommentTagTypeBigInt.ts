import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createEquals_CommentTagTypeBigInt = _test_equals(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
    typia.createEquals<CommentTagTypeBigInt>(),
);
