import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsReturnCustom_ObjectAlias = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => ObjectAlias) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
