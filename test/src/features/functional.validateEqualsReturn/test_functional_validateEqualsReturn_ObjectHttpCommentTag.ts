import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_validateEqualsReturn_ObjectHttpCommentTag =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectHttpCommentTag")(
      ObjectHttpCommentTag,
    )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.validateEqualsReturn(p),
    );
