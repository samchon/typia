import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createRandom_CommentTagTypeBigInt = _test_random("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)({
    random: typia.createRandom<CommentTagTypeBigInt>(),
    assert: typia.createAssert<CommentTagTypeBigInt>(),
});
