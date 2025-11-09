import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsParameters_ObjectSimple = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertEqualsParameters(p),
  );
