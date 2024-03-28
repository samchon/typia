import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertGuardEqualsCustom_ObjectUnionComposite =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
    typia.assertGuardEquals<ObjectUnionComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
