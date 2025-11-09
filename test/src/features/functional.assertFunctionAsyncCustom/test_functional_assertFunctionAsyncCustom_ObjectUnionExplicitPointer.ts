import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertFunctionAsyncCustom_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
