import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsReturnCustom_ObjectGenericArray =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectGenericArray")(
      ObjectGenericArray,
    )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
