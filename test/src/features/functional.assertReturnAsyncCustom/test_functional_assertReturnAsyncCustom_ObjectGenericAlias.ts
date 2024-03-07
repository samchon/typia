import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectGenericAlias =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
