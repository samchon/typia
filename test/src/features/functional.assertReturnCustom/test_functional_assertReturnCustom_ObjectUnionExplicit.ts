import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertReturnCustom_ObjectUnionExplicit =
  _test_functional_assertReturn(CustomGuardError)("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )((p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
