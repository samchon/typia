import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_assertPruneCustom_ObjectLiteralProperty = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.misc.assertPrune<ObjectLiteralProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
