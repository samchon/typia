import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertReturn_ObjectSimple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.assertReturn(p),
  );
