import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateEqualsParameters_CommentTagType =
  (): void =>
    _test_functional_validateEqualsParameters("CommentTagType")(CommentTagType)(
      (p: (input: CommentTagType) => CommentTagType) =>
        typia.functional.validateEqualsParameters(p),
    );
