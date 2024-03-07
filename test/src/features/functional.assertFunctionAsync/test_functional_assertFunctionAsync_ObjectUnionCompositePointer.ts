import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectUnionCompositePointer =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) => typia.functional.assertFunction(p),
  );
