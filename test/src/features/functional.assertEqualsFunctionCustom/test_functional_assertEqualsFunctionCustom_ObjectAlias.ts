import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsFunctionCustom_ObjectAlias =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
