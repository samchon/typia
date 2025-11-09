import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectPropertyNullable = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)