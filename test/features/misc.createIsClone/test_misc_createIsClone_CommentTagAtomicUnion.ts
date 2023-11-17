import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_createIsClone_CommentTagAtomicUnion = _test_misc_isClone(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.misc.createIsClone<CommentTagAtomicUnion>(),
);
