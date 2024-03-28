import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createAssertCloneCustom_ObjectLiteralProperty =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.misc.createAssertClone<ObjectLiteralProperty>(
      (p) => new CustomGuardError(p),
    ),
  );
