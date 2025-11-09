import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertReturn_ObjectDynamic = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => ObjectDynamic) =>
      typia.functional.assertReturn(p),
  );
