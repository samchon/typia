import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateEqualsReturn_CommentTagInfinite =
  (): void =>
    _test_functional_validateEqualsReturn("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.validateEqualsReturn(p),
    );
