import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_CommentTagDefault = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.assertReturn(p),
)