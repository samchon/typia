import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_assertPruneCustom_ObjectGenericAlias = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.misc.assertPrune<ObjectGenericAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
