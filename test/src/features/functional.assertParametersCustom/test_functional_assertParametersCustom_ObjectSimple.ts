import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertParametersCustom_ObjectSimple =
  _test_functional_assertParameters(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
