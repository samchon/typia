import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertParametersCustom_ObjectNullable = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
