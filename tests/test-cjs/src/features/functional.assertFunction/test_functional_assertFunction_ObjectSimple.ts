import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertFunction_ObjectSimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.assertFunction(p),
  );
