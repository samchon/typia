import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertFunctionCustom_ObjectHttpConstant =
  _test_functional_assertFunction(CustomGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
