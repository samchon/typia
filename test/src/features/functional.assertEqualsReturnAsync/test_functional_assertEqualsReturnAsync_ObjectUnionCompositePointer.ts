import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectUnionCompositePointer =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) => typia.functional.assertEqualsReturn(p),
  );
