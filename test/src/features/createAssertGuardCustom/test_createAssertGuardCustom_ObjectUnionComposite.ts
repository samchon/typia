import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertGuardCustom_ObjectUnionComposite = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createAssertGuard<ObjectUnionComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
