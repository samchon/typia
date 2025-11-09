import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectGenericAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectGenericAlias",
    )(ObjectGenericAlias)(
      (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
