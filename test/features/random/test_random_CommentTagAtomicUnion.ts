import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_random_CommentTagAtomicUnion = _test_random(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
    random: () => typia.random<CommentTagAtomicUnion>(),
    assert: typia.createAssert<CommentTagAtomicUnion>(),
});
