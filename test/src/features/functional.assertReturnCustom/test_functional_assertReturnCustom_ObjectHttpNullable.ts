import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertReturnCustom_ObjectHttpNullable =
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
