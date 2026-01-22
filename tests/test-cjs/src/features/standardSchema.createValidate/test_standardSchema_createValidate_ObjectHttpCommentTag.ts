import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_standardSchema_createValidate_ObjectHttpCommentTag =
  (): void =>
    _test_standardSchema_validate("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
      ObjectHttpCommentTag,
    )(typia.createValidate<ObjectHttpCommentTag>());
