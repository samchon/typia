import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertReturn_ObjectInternal = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertReturn(p),
  );
