import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertEqualsReturn_ObjectHttpUndefindable =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
    typia.functional.assertEqualsReturn(p),
  );
