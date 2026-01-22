import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createAssertCustom_ObjectUnionCompositePointer = (): void =>
  _test_assert(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.createAssert<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
  );
