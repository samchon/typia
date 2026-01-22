import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertReturnCustom_ObjectUndefined = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
