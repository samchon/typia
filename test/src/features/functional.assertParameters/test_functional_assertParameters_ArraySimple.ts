import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertParameters_ArraySimple = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertParameters(p),
  );
