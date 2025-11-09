import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectLiteralType = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)