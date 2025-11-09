import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertFunctionAsync_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.assertFunction(p),
    );
