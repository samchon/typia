import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsParametersCustom_ObjectLiteralType =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectLiteralType",
    )(ObjectLiteralType)((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
