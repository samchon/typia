import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_isParametersAsync_CommentTagObjectUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("CommentTagObjectUnion")(
      CommentTagObjectUnion,
    )((p: (input: CommentTagObjectUnion) => Promise<CommentTagObjectUnion>) =>
      typia.functional.isParameters(p),
    );
