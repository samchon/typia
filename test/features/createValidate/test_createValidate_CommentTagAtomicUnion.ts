import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createValidate_CommentTagAtomicUnion = _test_validate(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
    typia.createValidate<CommentTagAtomicUnion>(),
);
