import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertReturnCustom_ObjectUnionImplicit =
  _test_functional_assertReturn(CustomGuardError)("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
