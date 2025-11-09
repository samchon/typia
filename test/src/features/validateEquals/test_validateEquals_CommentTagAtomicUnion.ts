import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_validateEquals_CommentTagAtomicUnion = (): void => _test_validateEquals(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.validateEquals<CommentTagAtomicUnion>(input));
