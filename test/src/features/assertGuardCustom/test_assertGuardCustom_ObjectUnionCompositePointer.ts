import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assertGuardCustom_ObjectUnionCompositePointer = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.assertGuard<ObjectUnionCompositePointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
