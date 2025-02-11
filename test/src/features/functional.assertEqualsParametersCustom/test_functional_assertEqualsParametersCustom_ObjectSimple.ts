import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsParametersCustom_ObjectSimple =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
