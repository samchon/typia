import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_assertCloneCustom_ObjectLiteralType =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.misc.assertClone<ObjectLiteralType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
