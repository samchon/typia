import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assert_ObjectUnionCompositePointer = (): void =>
  _test_assert(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.assert<ObjectUnionCompositePointer>(input),
  );
