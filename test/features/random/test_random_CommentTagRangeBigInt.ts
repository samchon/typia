import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_random_CommentTagRangeBigInt = _test_random(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    random: () => typia.random<CommentTagRangeBigInt>(),
    assert: typia.createAssert<CommentTagRangeBigInt>(),
});
