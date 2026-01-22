import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createValidate_ObjectHttpCommentTag = (): void =>
  _test_validate("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.createValidate<ObjectHttpCommentTag>());
