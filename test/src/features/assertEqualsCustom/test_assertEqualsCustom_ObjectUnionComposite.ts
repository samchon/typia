import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertEqualsCustom_ObjectUnionComposite = _test_assertEquals(
  CustomGuardError,
)("ObjectUnionComposite")<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.assertEquals<ObjectUnionComposite>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
