import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArraySimple =
  _test_functional_assertParameters(CustomGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => ArraySimple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
