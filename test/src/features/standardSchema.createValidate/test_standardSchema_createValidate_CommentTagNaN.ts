import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_standardSchema_createValidate_CommentTagNaN =
  _test_standardSchema_validate("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
    typia.createValidate<CommentTagNaN>(),
  );
