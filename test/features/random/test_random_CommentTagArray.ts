import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_random_CommentTagArray = _test_random(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
    random: () =>
        typia.random<CommentTagArray>((CommentTagArray as any).RANDOM),
    assert: typia.createAssert<CommentTagArray>(),
});
