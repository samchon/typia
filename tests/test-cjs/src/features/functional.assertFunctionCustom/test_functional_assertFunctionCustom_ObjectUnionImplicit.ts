import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertFunctionCustom_ObjectUnionImplicit =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
