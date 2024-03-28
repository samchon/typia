import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertParametersCustom_ObjectHttpConstant =
  _test_functional_assertParameters(CustomGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
