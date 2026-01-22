import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_standardSchema_createValidate_CommentTagObjectUnion =
  (): void =>
    _test_standardSchema_validate(
      "CommentTagObjectUnion",
    )<CommentTagObjectUnion>(CommentTagObjectUnion)(
      typia.createValidate<CommentTagObjectUnion>(),
    );
