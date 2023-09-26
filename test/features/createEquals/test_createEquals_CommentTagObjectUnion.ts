import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createEquals_CommentTagObjectUnion = _test_equals(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
    typia.createEquals<CommentTagObjectUnion>(),
);
