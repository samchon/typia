import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertReturnCustom_ToJsonUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
