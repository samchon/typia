import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertGuardCustom_ObjectUnionComposite = _test_assertGuard(
  CustomGuardError,
)("ObjectUnionComposite")<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.assertGuard<ObjectUnionComposite>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
