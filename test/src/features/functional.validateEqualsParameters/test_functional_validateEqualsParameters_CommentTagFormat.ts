import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_validateEqualsParameters_CommentTagFormat =
  _test_functional_validateEqualsParameters("CommentTagFormat")(
    CommentTagFormat,
  )((p: (input: CommentTagFormat) => CommentTagFormat) =>
    typia.functional.validateEqualsParameters(p),
  );
