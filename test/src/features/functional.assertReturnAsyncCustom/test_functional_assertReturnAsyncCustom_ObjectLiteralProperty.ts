import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertReturnAsyncCustom_ObjectLiteralProperty =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
