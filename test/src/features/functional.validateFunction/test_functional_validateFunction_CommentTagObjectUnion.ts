import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_validateFunction_CommentTagObjectUnion =
  (): void =>
    _test_functional_validateFunction("CommentTagObjectUnion")(
      CommentTagObjectUnion,
    )((p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      typia.functional.validateFunction(p),
    );
