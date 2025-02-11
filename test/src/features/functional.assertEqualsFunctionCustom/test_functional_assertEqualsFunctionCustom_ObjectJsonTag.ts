import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertEqualsFunctionCustom_ObjectJsonTag =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
