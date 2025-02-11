import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertFunctionCustom_ObjectJsonTag =
  _test_functional_assertFunction(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
