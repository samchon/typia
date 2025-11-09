import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
