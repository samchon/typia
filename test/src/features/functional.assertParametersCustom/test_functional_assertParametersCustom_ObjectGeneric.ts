import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertParametersCustom_ObjectGeneric =
  _test_functional_assertParameters(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
