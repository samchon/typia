import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assertCustom_ObjectUnionCompositePointer = (): void =>
  _test_assert(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.assert<ObjectUnionCompositePointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
