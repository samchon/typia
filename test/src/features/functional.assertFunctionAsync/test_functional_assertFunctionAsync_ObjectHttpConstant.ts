import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertFunctionAsync_ObjectHttpConstant =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.assertFunction(p),
  );
