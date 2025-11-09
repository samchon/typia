import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectHierarchical",
    )(ObjectHierarchical)(
      (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
