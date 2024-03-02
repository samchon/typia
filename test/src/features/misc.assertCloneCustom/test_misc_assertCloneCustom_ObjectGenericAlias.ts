import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_assertCloneCustom_ObjectGenericAlias =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.misc.assertClone<ObjectGenericAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
