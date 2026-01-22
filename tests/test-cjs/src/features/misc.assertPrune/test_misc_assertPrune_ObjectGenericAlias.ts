import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_assertPrune_ObjectGenericAlias = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.misc.assertPrune<ObjectGenericAlias>(input),
  );
