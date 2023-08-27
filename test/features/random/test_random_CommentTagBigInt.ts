import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_random_CommentTagBigInt = _test_random(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
    random: () => typia.random<CommentTagBigInt>(),
    assert: typia.createAssert<CommentTagBigInt>(),
});
