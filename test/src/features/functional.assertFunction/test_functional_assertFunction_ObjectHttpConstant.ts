import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertFunction_ObjectHttpConstant =
  _test_functional_assertFunction(TypeGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertFunction(p),
  );
