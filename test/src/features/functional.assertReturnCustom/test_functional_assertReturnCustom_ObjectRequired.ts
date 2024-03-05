import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertReturnCustom_ObjectRequired =
  _test_functional_assertReturn(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
