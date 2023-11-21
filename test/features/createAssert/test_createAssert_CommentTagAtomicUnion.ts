import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createAssert_CommentTagAtomicUnion = _test_assert(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.createAssert<CommentTagAtomicUnion>(),
);
