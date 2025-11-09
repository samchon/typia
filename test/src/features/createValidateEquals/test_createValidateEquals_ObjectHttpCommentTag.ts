import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_createValidateEquals_ObjectHttpCommentTag = (): void =>
  _test_validateEquals("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.createValidateEquals<ObjectHttpCommentTag>());
