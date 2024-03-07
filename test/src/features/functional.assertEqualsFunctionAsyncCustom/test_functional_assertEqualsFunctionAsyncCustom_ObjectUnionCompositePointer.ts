import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectUnionCompositePointer =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
