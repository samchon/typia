import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertFunctionAsyncCustom_ObjectUnionCompositePointer =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )(ObjectUnionCompositePointer)(
      (
        p: (
          input: ObjectUnionCompositePointer,
        ) => Promise<ObjectUnionCompositePointer>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
