import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertReturnCustom_ObjectHttpConstant =
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
