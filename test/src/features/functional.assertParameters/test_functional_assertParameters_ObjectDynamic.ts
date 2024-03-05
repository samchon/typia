import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertParameters_ObjectDynamic =
  _test_functional_assertParameters(TypeGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => ObjectDynamic) =>
    typia.functional.assertParameters(p),
  );
