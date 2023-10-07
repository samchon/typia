import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_random_CommentTagNaN = _test_random(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
    random: () => typia.random<CommentTagNaN>((CommentTagNaN as any).RANDOM),
    assert: typia.createAssert<CommentTagNaN>(),
});
