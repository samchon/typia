import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertReturnCustom_ObjectGeneric =
  _test_functional_assertReturn(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
