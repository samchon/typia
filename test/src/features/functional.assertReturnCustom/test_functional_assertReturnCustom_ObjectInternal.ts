import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertReturnCustom_ObjectInternal =
  _test_functional_assertReturn(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
