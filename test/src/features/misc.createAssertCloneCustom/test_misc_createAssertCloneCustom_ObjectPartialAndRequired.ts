import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectPartialAndRequired =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.misc.createAssertClone<ObjectPartialAndRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
