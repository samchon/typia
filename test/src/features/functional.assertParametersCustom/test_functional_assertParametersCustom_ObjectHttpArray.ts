import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertParametersCustom_ObjectHttpArray =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectHttpArray")(
      ObjectHttpArray,
    )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
