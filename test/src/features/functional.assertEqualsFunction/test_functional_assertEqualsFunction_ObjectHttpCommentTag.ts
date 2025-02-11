import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_functional_assertEqualsFunction_ObjectHttpCommentTag =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectHttpCommentTag")(
    ObjectHttpCommentTag,
  )((p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
    typia.functional.assertEqualsFunction(p),
  );
