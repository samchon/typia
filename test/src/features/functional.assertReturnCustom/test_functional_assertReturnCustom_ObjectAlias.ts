import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectAlias =
  _test_functional_assertReturn(CustomGuardError)("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
