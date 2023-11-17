import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_assertClone_CommentTagAtomicUnion =
  _test_misc_assertClone("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )((input) => typia.misc.assertClone<CommentTagAtomicUnion>(input));
