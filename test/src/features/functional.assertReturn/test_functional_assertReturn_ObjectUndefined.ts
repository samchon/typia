import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertReturn_ObjectUndefined = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertReturn(p),
  );
