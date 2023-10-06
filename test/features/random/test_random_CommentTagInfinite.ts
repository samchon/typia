import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_random_CommentTagInfinite = _test_random(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
    random: () => typia.random<CommentTagInfinite>(),
    assert: typia.createAssert<CommentTagInfinite>(),
});
