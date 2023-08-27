import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_equals_CommentTagAtomicUnion = _test_equals(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.equals<CommentTagAtomicUnion>(input),
);
