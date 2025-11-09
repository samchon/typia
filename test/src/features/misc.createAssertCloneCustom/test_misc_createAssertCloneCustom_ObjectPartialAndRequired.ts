import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_createAssertCloneCustom_ObjectPartialAndRequired =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
      typia.misc.createAssertClone<ObjectPartialAndRequired>(
        (p) => new CustomGuardError(p),
      ),
    );
