import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsParameters_ClassGetter = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => ClassGetter) =>
    typia.functional.assertEqualsParameters(p),
  );
