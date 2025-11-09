import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateEqualsParametersAsync_CommentTagObjectUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("CommentTagObjectUnion")(
      CommentTagObjectUnion,
    )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      typia.functional.validateEqualsParameters(p),
    );
