import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_random_CommentTagObjectUnion = _test_random(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)({
    random: () =>
        typia.random<CommentTagObjectUnion>(
            (CommentTagObjectUnion as any).RANDOM,
        ),
    assert: typia.createAssert<CommentTagObjectUnion>(),
});
