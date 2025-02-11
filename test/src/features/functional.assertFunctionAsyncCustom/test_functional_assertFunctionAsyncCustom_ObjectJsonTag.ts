import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertFunctionAsyncCustom_ObjectJsonTag =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
