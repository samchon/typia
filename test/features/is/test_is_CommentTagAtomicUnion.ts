import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_is_CommentTagAtomicUnion = _test_is(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.is<CommentTagAtomicUnion>(input));
