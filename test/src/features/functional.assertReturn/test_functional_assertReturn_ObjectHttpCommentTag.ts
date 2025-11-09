import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertReturn_ObjectHttpCommentTag = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
    typia.functional.assertReturn(p),
  );
