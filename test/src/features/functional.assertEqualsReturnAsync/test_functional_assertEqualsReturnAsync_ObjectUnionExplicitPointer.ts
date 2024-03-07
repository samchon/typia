import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectUnionExplicitPointer =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )(ObjectUnionExplicitPointer)(
    (
      p: (
        input: ObjectUnionExplicitPointer,
      ) => Promise<ObjectUnionExplicitPointer>,
    ) => typia.functional.assertEqualsReturn(p),
  );
