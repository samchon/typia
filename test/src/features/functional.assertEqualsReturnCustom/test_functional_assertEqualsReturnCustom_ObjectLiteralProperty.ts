import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsReturnCustom_ObjectLiteralProperty =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ObjectLiteralProperty",
    )(ObjectLiteralProperty)(
      (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
