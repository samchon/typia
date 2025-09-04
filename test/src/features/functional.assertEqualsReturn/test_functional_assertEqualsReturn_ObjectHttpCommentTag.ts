import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsReturn_ObjectHttpCommentTag =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)("ObjectHttpCommentTag")(
      ObjectHttpCommentTag,
    )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      typia.functional.assertEqualsReturn(p),
    );
