import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertFunctionCustom_ObjectAlias =
  _test_functional_assertFunction(CustomGuardError)("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
