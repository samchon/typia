import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectLiteralProperty =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectLiteralProperty",
  )(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
