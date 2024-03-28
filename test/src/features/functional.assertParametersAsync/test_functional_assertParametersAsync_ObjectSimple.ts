import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertParametersAsync_ObjectSimple =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertParameters(p),
  );
