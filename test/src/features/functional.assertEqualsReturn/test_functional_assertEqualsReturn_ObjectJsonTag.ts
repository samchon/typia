import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertEqualsReturn_ObjectJsonTag =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertEqualsReturn(p),
  );
