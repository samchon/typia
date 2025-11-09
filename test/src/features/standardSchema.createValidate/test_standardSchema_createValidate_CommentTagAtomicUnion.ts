import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_standardSchema_createValidate_CommentTagAtomicUnion = (): void => _test_standardSchema_validate(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)(typia.createValidate<CommentTagAtomicUnion>());
