import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateEqualsReturn_CommentTagObjectUnion =
  (): void =>
    _test_functional_validateEqualsReturn("CommentTagObjectUnion")(
      CommentTagObjectUnion,
    )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      typia.functional.validateEqualsReturn(p),
    );
