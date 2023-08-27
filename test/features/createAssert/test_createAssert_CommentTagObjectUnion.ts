import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assert_CommentTagObjectUnion = _test_assert(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.createAssert<CommentTagObjectUnion>(),
);
