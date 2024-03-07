import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectLiteralType =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.misc.createAssertClone<ObjectLiteralType>(
      (p) => new CustomGuardError(p),
    ),
  );
