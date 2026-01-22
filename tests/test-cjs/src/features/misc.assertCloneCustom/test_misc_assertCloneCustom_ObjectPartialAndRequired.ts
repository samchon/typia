import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_assertCloneCustom_ObjectPartialAndRequired = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.misc.assertClone<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
