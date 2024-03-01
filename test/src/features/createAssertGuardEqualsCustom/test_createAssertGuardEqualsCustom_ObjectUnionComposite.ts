import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertGuardEqualsCustom_ObjectUnionComposite =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createAssertGuardEquals<ObjectUnionComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
