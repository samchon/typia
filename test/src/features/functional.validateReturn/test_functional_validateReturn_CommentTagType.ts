import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateReturn_CommentTagType = (): void =>
  _test_functional_validateReturn("CommentTagType")(CommentTagType)(
    (p: (input: CommentTagType) => CommentTagType) =>
      typia.functional.validateReturn(p),
  );
