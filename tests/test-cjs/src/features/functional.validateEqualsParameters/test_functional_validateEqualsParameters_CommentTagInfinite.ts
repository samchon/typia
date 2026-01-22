import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateEqualsParameters_CommentTagInfinite =
  (): void =>
    _test_functional_validateEqualsParameters("CommentTagInfinite")(
      CommentTagInfinite,
    )((p: (input: CommentTagInfinite) => CommentTagInfinite) =>
      typia.functional.validateEqualsParameters(p),
    );
