import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assertGuardEquals_CommentTagAtomicUnion =
  _test_assertGuardEquals("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )((input) => typia.assertGuardEquals<CommentTagAtomicUnion>(input));
