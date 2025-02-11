import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertReturnCustom_ObjectNullable =
  _test_functional_assertReturn(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
