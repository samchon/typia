import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertParametersCustom_ObjectHttpNullable =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectHttpNullable")(
      ObjectHttpNullable,
    )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
