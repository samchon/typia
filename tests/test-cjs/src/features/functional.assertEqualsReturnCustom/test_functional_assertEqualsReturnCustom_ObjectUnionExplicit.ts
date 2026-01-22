import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsReturnCustom_ObjectUnionExplicit =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ObjectUnionExplicit",
    )(ObjectUnionExplicit)(
      (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
