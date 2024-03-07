import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectGenericAlias =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.misc.createAssertClone<ObjectGenericAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
