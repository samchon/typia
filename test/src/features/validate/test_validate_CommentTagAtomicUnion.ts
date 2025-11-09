import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_validate_CommentTagAtomicUnion = (): void => _test_validate(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.validate<CommentTagAtomicUnion>(input));
