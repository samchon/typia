import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsReturnCustom_ObjectUnionImplicit =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
