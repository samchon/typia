import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertFunctionCustom_ObjectHttpUndefindable =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectHttpUndefindable")(
      ObjectHttpUndefindable,
    )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
