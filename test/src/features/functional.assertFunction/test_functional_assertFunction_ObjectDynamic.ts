import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertFunction_ObjectDynamic = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => ObjectDynamic) =>
    typia.functional.assertFunction(p),
  );
