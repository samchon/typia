import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectJsonTag =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
