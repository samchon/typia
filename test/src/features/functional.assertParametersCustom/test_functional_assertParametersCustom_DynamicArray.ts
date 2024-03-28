import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertParametersCustom_DynamicArray =
  _test_functional_assertParameters(CustomGuardError)("DynamicArray")(
    DynamicArray,
  )((p: (input: DynamicArray) => DynamicArray) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
