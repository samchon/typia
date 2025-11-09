import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsReturnCustom_ObjectGenericAlias =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectGenericAlias")(
      ObjectGenericAlias,
    )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
