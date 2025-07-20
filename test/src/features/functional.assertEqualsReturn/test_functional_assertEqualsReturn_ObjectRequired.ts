import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsReturn_ObjectRequired = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertEqualsReturn(p),
  );
