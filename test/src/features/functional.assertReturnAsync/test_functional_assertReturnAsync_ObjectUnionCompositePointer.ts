import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_assertReturnAsync_ObjectUnionCompositePointer =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )(ObjectUnionCompositePointer)(
      (
        p: (
          input: ObjectUnionCompositePointer,
        ) => Promise<ObjectUnionCompositePointer>,
      ) => typia.functional.assertReturn(p),
    );
