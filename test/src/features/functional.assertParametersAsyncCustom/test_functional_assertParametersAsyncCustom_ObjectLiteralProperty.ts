import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertParametersAsyncCustom_ObjectLiteralProperty =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectLiteralProperty",
    )(ObjectLiteralProperty)(
      (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
