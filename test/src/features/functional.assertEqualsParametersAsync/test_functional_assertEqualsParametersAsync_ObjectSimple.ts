import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsParametersAsync_ObjectSimple =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertEqualsParameters(p),
  );
