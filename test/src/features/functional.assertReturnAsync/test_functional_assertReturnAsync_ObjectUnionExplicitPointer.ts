import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertReturnAsync_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.assertReturn(p),
    );
